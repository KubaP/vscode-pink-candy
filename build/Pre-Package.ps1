param (
	[string]
	$WorkingDirectory
)

# Copies the necessary files in order to package the extension to a temporary directory.
#
# This is necessary so that:
# - The syntax highlighting example images are not packaged since they add a fair few MBs to the package size and
#   they're not strictly necessary.
# - Other markdown documents that are not strictly necessary are not packaged.

# Import helper functions.
. "$PSScriptRoot/Helpers.ps1"

# Handle Working Directory paths within Azure pipelines.
if (-not $WorkingDirectory) {
	if ($env:RELEASE_PRIMARYARTIFACTSOURCEALIAS) {
		$WorkingDirectory = Join-Path -Path $env:SYSTEM_DEFAULTWORKINGDIRECTORY -ChildPath $env:RELEASE_PRIMARYARTIFACTSOURCEALIAS
	}
	else {
		$WorkingDirectory = $env:SYSTEM_DEFAULTWORKINGDIRECTORY
	}
}

# Make any error stop the package process.
$ErrorActionPreference = 'Stop'

# Clean up anything from previous packaging attempts.
Write-Header "Cleaning up previous build artifacts" "Green"
if (Test-Path "$WorkingDirectory/package") {
	Remove-Item -Path "$WorkingDirectory/package" -Recurse -Force
}

$script:GITHUB_URL = "https://github.com/KubaP/vscode-pink-candy/blob/master/"
$script:SOURCE_DIR = Get-Item -Path "$WorkingDirectory/"
$script:PACKAGE_DIR = New-Item -Path "$WorkingDirectory/" -Name "package" -ItemType Directory -Force -Verbose

# Filter out files and directories that shouldn't be part of the final package, and then copy them into the
# temporary packaging directory.
Write-Header "Copying over files" "Blue"
Get-ChildItem -Path $script:SOURCE_DIR | Where-Object {
	@(".gitattributes",
		".gitignore",
		".prettierrc",
		".prettierignore",
		".vscode",
		"build",
		"Configuration.md",
		"docs",
		"Extensions.md",
		"Highlighting_Examples.md",
		"img",
		"node_modules",
		"Overriding_Syntax.md",
		"package",
		"Styles.md"
	) -notcontains $_.Name
} | ForEach-Object {
	$newPath = Join-Path $script:PACKAGE_DIR $_.FullName.Substring($script:SOURCE_DIR.FullName.Length)
	Copy-Item -Path $_.FullName -Destination $newPath -Recurse -Verbose
}

# Update the README to remove the duplicate `![Banner]` image tag, since the VS Code marketplace doesn't support
# the light/dark markdown image extension.
Write-Header "Fixing README" "Blue"
$readme = Get-Content -Path "$script:PACKAGE_DIR/README.md"
$readme[0] = "![Pink Candy Banner](./img/banner_dark.png)"
$readme[1] = ""
Out-File -FilePath "$script:PACKAGE_DIR/README.md" -InputObject $readme -Verbose
