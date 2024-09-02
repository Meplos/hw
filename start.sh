#!/bin/sh

cd ./app && npm i && npm run build
cd ../server && npm i && npm run build
mkdir -p ./build/src/public
cp -r ../app/dist/* ./build/src/public/
npm run serve
