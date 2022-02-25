function Write-Header {
	param
	(
		[Parameter(Position = 0, Mandatory = $true)]
		[string]
		$Message,
		
		[Parameter(Position = 1)]
		[string]
		[ValidateSet("Red", "Green", "Blue", "Cyan", "Magenta", "Yellow", "White", "Black")]
		$Colour
	)
	
	# Initialize the variable to output.
	$output = ''
	
	# Add some extra spacing to either side of the message.
	$length = $Message.Length + 2
	
	$output += "+$("-" * $length)+$([Environment]::NewLine)" 
	$output += "| $Message |$([Environment]::NewLine)" 
	$output += "+$("-" * $length)+$([Environment]::NewLine)" 
	
	# Write the text.
	Write-Host $output -ForegroundColor $Colour
}