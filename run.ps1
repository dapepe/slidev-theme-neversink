# PowerShell script to run, export, build, or create a new Slidev presentation from the presentations directory
# Usage: .\run.ps1 <filename> [--export | --build | --watch] (with or without .md extension)
# Or: .\run.ps1 --new <new_filename> to create a new presentation from template

param(
    [string]$filename,
    [string]$action,
    [switch]$new
)

# Check if an argument is provided
if (-not $filename -and -not $new) {
    Write-Host "Usage: .\run.ps1 <filename> [--export | --build | --watch]"
    Write-Host "Or: .\run.ps1 --new <new_filename> to create a new presentation from template"
    Write-Host "Available presentations:"
    Get-ChildItem presentations\*.md | ForEach-Object { $_.BaseName }
    exit 1
}

# Check for --new flag first
if ($filename -eq "--new" -or $new) {
    if (-not $action) {
        Write-Host "Usage: .\run.ps1 --new <new_filename>"
        exit 1
    }
    $newFilename = $action
    if (-not $newFilename.EndsWith(".md")) {
        $newFilename = "$newFilename.md"
    }
    $newPath = "presentations\$newFilename"
    if (Test-Path $newPath) {
        Write-Host "Error: Presentation '$newFilename' already exists."
        exit 1
    }
    Copy-Item "presentations\difo.md" $newPath
    Write-Host "Created new presentation: $newPath"
    exit 0
}

# Construct the full path
$presentationFilename = [System.IO.Path]::GetFileName($filename)
if (-not $presentationFilename.EndsWith(".md")) {
    $presentationFilename = "$presentationFilename.md"
}
$presentationPath = "presentations\$presentationFilename"

# Check if the file exists
if (-not (Test-Path $presentationPath)) {
    Write-Host "Error: Presentation '$presentationFilename' not found in presentations directory."
    Write-Host "Available presentations:"
    Get-ChildItem presentations\*.md | ForEach-Object { $_.BaseName }
    exit 1
}

# Check for flags
switch ($action) {
    "--export" {
        Write-Host "Exporting presentation to PDF: $presentationPath"
        pnpm slidev export $presentationPath
    }
    "--build" {
        Write-Host "Building static site for: $presentationPath"
        $outputDir = "dist\$([System.IO.Path]::GetFileNameWithoutExtension($presentationPath))"
        pnpm slidev build $presentationPath --out $outputDir
    }
    "--watch" {
        Write-Host "Starting presentation in watch mode: $presentationPath"
        pnpm slidev $presentationPath --watch
    }
    default {
        # Run the presentation using slidev (dev mode)
        Write-Host "Starting presentation: $presentationPath"
        pnpm slidev $presentationPath
    }
}


