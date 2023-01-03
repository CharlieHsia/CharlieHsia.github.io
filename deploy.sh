#!/user/bin/env sh

set -e

npm run docs:build

echo "1111111111111"

cd docs/.vitepress/dist


# echo '119.3.104.200' > CNAME

# msg = "gitee actions自动部署"
git init
git add -A
# git commit -m "${msg}"
git commit -m "deploy"
# git push -f https://<USERNAME>.github.io/docs master:gh-pages


cd -
# rm -rf docs/.vitepress/dist