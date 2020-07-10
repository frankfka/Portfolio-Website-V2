#!/usr/bin/env sh

# Abort on errors
set -e

# Check for uncomitted changes
if ! git diff-index --quiet HEAD --; then
  echo "Uncommitted changes detected. Please commit before deploying"
  exit 1
fi

# Get commit ID
COMMIT_ID=$(git rev-parse --verify HEAD)
echo "Building release $COMMIT_ID"

# Build and navigate to output
yarn build
cd dist

# Init custom domain
echo 'www.jiafrank.com' > CNAME

# Commit to the GH Pages repo
git init
git add -A
git commit -m "Deploy ${COMMIT_ID}"
git push -f https://github.com/frankfka/frankfka.github.io.git master

cd -