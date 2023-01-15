#!/bin/sh

echo "Creating static data directory"

mkdir -p public/data && echo '{}' > public/data/fileCache.json && echo '{}' > public/data/slugCache.json && pnpm run build:cache
