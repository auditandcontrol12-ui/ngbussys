$ErrorActionPreference = "Stop"

Write-Host "Starting NG deploy..." -ForegroundColor Cyan

# Must start from main
$currentBranch = git rev-parse --abbrev-ref HEAD

if ($currentBranch -ne "main") {
    Write-Host "You are on branch '$currentBranch'. Switch to main first." -ForegroundColor Red
    exit 1
}

# Working tree must be clean
$status = git status --porcelain

if ($status) {
    Write-Host "Working tree is not clean. Commit or discard changes first." -ForegroundColor Red
    git status
    exit 1
}

# Build React app
Write-Host "Building site..." -ForegroundColor Cyan
npm run build

# Create temp deploy folder
$tempDeploy = Join-Path $env:TEMP "ng-deploy-temp"

if (Test-Path $tempDeploy) {
    Remove-Item $tempDeploy -Recurse -Force
}

New-Item -ItemType Directory -Path $tempDeploy | Out-Null

# Copy built files
Write-Host "Preparing deploy files..." -ForegroundColor Cyan
Copy-Item -Path "dist\*" -Destination $tempDeploy -Recurse -Force

# Copy API but exclude real config.php
New-Item -ItemType Directory -Path "$tempDeploy\api" -Force | Out-Null
Copy-Item -Path "api\submit-lead.php" -Destination "$tempDeploy\api\submit-lead.php" -Force
Copy-Item -Path "api\config.example.php" -Destination "$tempDeploy\api\config.example.php" -Force

# Create .htaccess
@"
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  RewriteRule ^index\.html$ - [L]

  RewriteCond %{REQUEST_URI} ^/api/
  RewriteRule ^ - [L]

  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
"@ | Set-Content "$tempDeploy\.htaccess"

# Create deploy .gitignore
@"
node_modules/
dist/
.env
api/config.php
"@ | Set-Content "$tempDeploy\.gitignore"

# Switch to deploy branch
Write-Host "Switching to deploy branch..." -ForegroundColor Cyan
git checkout deploy

# Make deploy branch match latest main first
git reset --hard main

# Remove tracked source files from deploy branch
git rm -r . --ignore-unmatch | Out-Null

# Copy deploy files into repo root
Copy-Item -Path "$tempDeploy\*" -Destination "." -Recurse -Force

# Stage deploy files
git add -A

# Commit only if there are changes
$hasChanges = git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No deploy changes to commit." -ForegroundColor Yellow
} else {
    git commit -m "Deploy website update"
}

# Push deploy branch
Write-Host "Pushing deploy branch..." -ForegroundColor Cyan
git push origin deploy

# Return to main
Write-Host "Returning to main branch..." -ForegroundColor Cyan
git checkout main

# Cleanup temp
Remove-Item $tempDeploy -Recurse -Force

Write-Host "Deploy branch updated successfully." -ForegroundColor Green
Write-Host "Hostinger webhook should now pull the latest deploy branch." -ForegroundColor Green