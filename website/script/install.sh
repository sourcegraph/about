#!/bin/sh

NODE_VERSION=$(node -v)
YARN="/usr/local/bin/yarn"

echo "Checking Node version"

if [ $NODE_VERSION != "v15.3.0" ]; then
    echo "Please install the pinned Node version for this project."
    exit 1
fi

echo "Checking that yarn is installed"

if [ ! -x "$YARN" ]; then
    echo "Please install yarn"
    exit 1
fi

echo "Installing dependencies from the lock file"

yarn install --immutable --immutable-cache --check-cache
