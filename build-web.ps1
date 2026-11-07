$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent $PSScriptRoot
$Web = Join-Path $Root 'web'
$Build = Join-Path $Root 'build\web-runtime'
$Classes = Join-Path $Build 'classes'
$Jar = Join-Path $Web 'javaquest-runtime.jar'

if (Test-Path $Build) { Remove-Item $Build -Recurse -Force }
New-Item -ItemType Directory -Force -Path $Classes | Out-Null

$src = @(
    (Join-Path $Root 'app\src\com\javaquest\learn\runtime'),
    (Join-Path $Root 'app\src\com\javaquest\learn\data'),
    (Join-Path $Web 'java')
)
$files = Get-ChildItem $src -Recurse -Filter *.java | ForEach-Object { $_.FullName }
& javac --release 11 -encoding UTF-8 -d $Classes $files
if ($LASTEXITCODE -ne 0) { throw 'javac failed' }
& jar --create --file $Jar -C $Classes .
if ($LASTEXITCODE -ne 0) { throw 'jar failed' }
New-Item -ItemType Directory -Force -Path (Join-Path $Web 'data') | Out-Null
Copy-Item (Join-Path $Root 'app\assets\lessons.json') (Join-Path $Web 'data\lessons.json') -Force
Copy-Item (Join-Path $Root 'app\assets\stories.json') (Join-Path $Web 'data\stories.json') -Force
Copy-Item (Join-Path $Root 'app\assets\java8_story.json') (Join-Path $Web 'data\java8_story.json') -Force
Write-Output "Built $Jar"
Write-Output "Data copied to $Web\data"
