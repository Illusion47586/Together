#!/bin/sh
cd ./client
echo "We are inside client folder"
echo "-----"
echo "Installing local client dependencies"
echo "-----"
npm i
echo "Installing global client dependencies"
echo "-----"
npm i -g postcss postcss-cli autoprefixer
echo "We are inside server folder"
echo "-----"
cd ../server
echo "Installing local server dependencies"
echo "-----"
npm i
cd ..
echo "We are inside root project folder"