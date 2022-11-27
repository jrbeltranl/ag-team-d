FROM node:carbon-slim

# Create app directory
WORKDIR /dasann_ag

# Install app dependencies
COPY package.json /dasann_ag/
RUN npm install

# Bundle app source
COPY . /dasann_ag/
RUN npm run prepublish
RUN npm set strict-ssl false = false
RUN apt-get install openssl

CMD [ "npm", "run", "runServer" ]
