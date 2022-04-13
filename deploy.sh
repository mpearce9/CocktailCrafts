#!/usr/bin/env sh

# abort on errors
set -e

# direct into frontend folder
cd frontend

# build
npm run build

# navigate back to root
cd ..

# navigate into the build output directory
cd server\dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:mpearce9/CocktailCrafts.git main:gh-pages

cd -
