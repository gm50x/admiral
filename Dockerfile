FROM node:lts-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN if [ "$ENV" = "production" ] ; then npm ci ; else npm install ; fi

# RUN npm install --only=development
# # If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE ${PORT}
CMD [ "npm", "start"]