Set-Location ./client
Write-Output "We are inside client"
Write-Output "Installing global dependencies"
Write-Output "-----"
npm i
Write-Output "-----"
Write-Output "Installing global dependencies"
Write-Output "-----"
npm i -g postcss postcss-cli autoprefixer
Write-Output "-----"
Set-Location ../server
Write-Output "We are inside server"
Write-Output "-----"
Write-Output "Installing local server dependencies"
Write-Output "-----"
npm i
Write-Output "-----"
Set-Location ..
Write-Output "We are back in root folder"