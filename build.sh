#!/bin/bash

# Colors
yellow='\033[1;33m' # Yellow
nc='\033[0m'        # No Color

echo -e "${yellow}"
echo -e "|--------------------------------------------------------|"
echo -e "| Building the application with Bash and Parcel          |"   
echo -e "|--------------------------------------------------------|"

echo -e "\n  1. Cleaning up & copying files"

# Removing the dist folder
echo -e "     -> Removing the dist folder"
rm -rf ./dist

# Creating the server views folder with sub folders systems and layouts
echo -e "     -> Creating the server view folders"
mkdir -p ./server/views/system ./server/views/layouts

# Copy error.handlebars page to this project
echo -e "     -> Copying error.handlebars to server/views/system folder"
cp -R ./node_modules/kth-node-web-common/lib/handlebars/pages/views/. server/views/system

# Copy errorLayout.handlebars layout to this project
echo -e "     -> Copying errorLayout.handlebars to server/views/layouts folder"
cp -R ./node_modules/kth-node-web-common/lib/handlebars/pages/layouts/. server/views/layouts

# Copy datatables.net related files layout to the dist folder
echo -e "     -> Copying datatables.net related files layout to /dist folder${nc}"
cp -R ./node_modules/datatables.net/js/. ./dist
cp -R ./public/css/datatables/. ./dist

# Run parcel build on the vendor.js file and put the optimized file in the /public/js folder.
echo -e "${yellow}\n  2. Parcing vendor.js and putting it in the /dist/js folder${nc}"
npm run vendor

# Run parcel build on the /public/js files and put the optimized files in the /public/js folder.
echo -e "${yellow}\n  3. Parcing the js views and putting them in the /dist folder${nc}"
npm run parcel-views

# Run parcel on the scss files and put the optimized file in the /dist/css
echo -e "${yellow}\n  4. Transpiling sass files and putting them in the /dist folder${nc}"
npm run parcel-sass

# Only run Parcel watch in development
if [ $1 == "dev" ]; then
  # Run parcel watch on the js and sass files and put the optimized files in the /dist folder upon change.
  echo -e "${yellow}\n  5. Running watch on js views and sass files${nc}"
  npm run parcel-watch
fi