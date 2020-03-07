rm -rf node_modules/
sudo docker build --no-cache -t journal/api:$1 .
sudo docker push journal/api:$1
