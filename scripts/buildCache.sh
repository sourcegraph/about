#!/bin/sh

echo "Creating static data directory"

mkdir -p public/data

echo "Creating a placeholder static fileCache file"

echo "{}" > public/data/fileCache.json

echo "Creating a placeholder static slugCache file"

echo "{}" > public/data/slugCache.json

echo "Building local cache"

yarn build:cache || exit 1
