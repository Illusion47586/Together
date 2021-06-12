Set-Location ./client
Write-Output "We are inside client"
Write-Output "Installing global dependencies"
Write-Output "-----"
npm i
Write-Output "Installing global dependencies"
Write-Output "-----"
npm i -g postcss postcss-cli autoprefixer
Write-Output "We are inside server"
Set-Location ../server
Write-Output "Installing local server dependencies"
Write-Output "-----"
npm i
Write-Output "We are back in root folder"
Set-Location ..