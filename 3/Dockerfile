# specify the base image 
FROM node:14.5.0-alpine3.11

WORKDIR /usr/app

COPY ./package.json ./
RUN npm install

# index.js is going to be changed a log,
# therefore, let's add it after everything
# so that when it gets change it would not
# invalidate the cache of other files
COPY ./ ./



# default command to execute
CMD [ "npm", "start" ]