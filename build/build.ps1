param (
	[string]
	$WorkingDirectory
)

# Build script to package the theme files.
# This is necessary so that:
#   1. All relative image links are translated to absolute links pointing to the github repository.
#   2. The syntax highlighting example images are not packaged since they add a fair few MBs to the package size
#      and they're not strictly necessary.
#	3. Other .md files which are not strictly necessary are not packaged.

# Import helper functions.
. "$PSScriptRoot\helpers.ps1"

# Handle Working Directory paths within Azure pipelines.
if (-not $WorkingDirectory) {
	if ($env:RELEASE_PRIMARYARTIFACTSOURCEALIAS) {
		$WorkingDirectory = Join-Path -Path $env:SYSTEM_DEFAULTWORKINGDIRECTORY -ChildPath $env:RELEASE_PRIMARYARTIFACTSOURCEALIAS
	}
	else {
		$WorkingDirectory = $env:SYSTEM_DEFAULTWORKINGDIRECTORY
	}
}

# Make any error stop this build process.
$ErrorActionPreference = 'Stop'

# Clean up anything from previous builds.
Write-Header "Cleaning up previous build artifacts" "Green"
if (Test-Path "$WorkingDirectory\publish") {
	Remove-Item -Path "$WorkingDirectory\publish" -Recurse -Force
}

$script:GITHUB_URL = "https://github.com/KubaP/vscode-pink-candy/blob/master/"
$script:SOURCE_DIR = Get-Item -Path "$WorkingDirectory\"
$script:PUBLISH_DIR = New-Item -Path "$WorkingDirectory\" -Name "publish" -ItemType Directory -Force -Verbose

# First, copy the contents of this repository to a new temporary folder.
# Filter out folders and files which shouldn't be part of the final package.
Write-Header "Copying over files" "Blue"
Get-ChildItem -Path $script:SOURCE_DIR | Where-Object {
	@(".vscode", 
		"build", 
		"publish",
		"node_modules",
		"img", 
		".gitattributes", 
		".gitignore",
		"Highlighting_Examples.md", 
		"Overriding_Styles.md",
		"Styles.md"
	) -notcontains $_.Name
} | ForEach-Object {
	$newPath = Join-Path $script:PUBLISH_DIR $_.FullName.Substring($script:SOURCE_DIR.FullName.Length)
	Copy-Item -Path $_.FullName -Destination $newPath -Recurse -Verbose
}
# Copy over a few images, but not all of them.
# No need to copy over any images since the image links will refer to the github-hosted files anyway.
<# New-Item -Path $script:PUBLISH_DIR -Name "img" -ItemType Directory | Out-Null
Copy-Item -Path ".\img\banner_dark.png" -Destination "$script:PUBLISH_DIR\img" -Force
Copy-Item -Path ".\img\example_1.png" -Destination "$script:PUBLISH_DIR\img" -Force
Copy-Item -Path ".\img\example_2.png" -Destination "$script:PUBLISH_DIR\img" -Force
Copy-Item -Path ".\img\example_3.png" -Destination "$script:PUBLISH_DIR\img" -Force
Copy-Item -Path ".\img\example_4.png" -Destination "$script:PUBLISH_DIR\img" -Force #>

# Update the README:
#	Replace the image link.
#	Remove the duplicate ![Banner] image tag.
#	Replace all relative paths with absolute paths.
Write-Header "Fixing README" "Blue"
$readme = Get-Content -Path "$script:PUBLISH_DIR\README.md"
$readme[0] = "![Pink Candy Banner](./img/banner_dark.png)"
$readme[1] = ""
<# for ($i = 0; $i -lt $readme.Count; $i++) {
	if ($readme[$i] -match "]\(\.\/") {
		$readme[$i] = $readme[$i] -replace "\.\/", $script:GITHUB_URL
	}
} #>
Out-File -FilePath "$script:PUBLISH_DIR\README.md" -InputObject $readme -Verbose
#[System.IO.File]::WriteAllText("$script:PUBLISH_DIR\README.md", $readme, [System.Text.Encoding]::UTF8)

# Define vsce process information.
<# Set-Location -Path $script:PUBLISH_DIR
Invoke-Command { vsce package }
Set-Location -Path ".." #>
