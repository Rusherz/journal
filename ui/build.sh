npm install
npm run build
rm -rf node_modules
docker build --no-cache -t journal/ui:$1 .
docker push journal/ui:$1
npm install
