FROM node:12.14-alpine
WORKDIR /home/app
COPY . /home/app
RUN rm build.sh
RUN rm Dockerfile
RUN npm install
CMD [ "node", "." ]
