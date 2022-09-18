
# Specify a base image
FROM node:16.17-alpine3.15

# Create and use a working directory in the image
WORKDIR /apiquinas


# Copy package files
COPY package.json ./
COPY package-lock.json ./

# copy the source code to the working directory
COPY . .

##This needs context, and context is relevant to the position of the docker, and what I want to install
# Install app dependecies
RUN npm install

# expose port 3000 to the host
EXPOSE 3000


# start app
CMD [ "npm", "run", "start" ]