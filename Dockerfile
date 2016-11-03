FROM node:4-onbuild

# Author
MAINTAINER Alexander Nguyen

# Create app directory
RUN mkdir -p /usr/src/sway-admin-dashboard
WORKDIR /usr/src/sway-admin-dashboard

# Install dependencies
ADD package.json /usr/src/sway-admin-dashboard
RUN npm install

# Bundle app source
ADD . /usr/src/sway-admin-dashboard

# Expose port
EXPOSE 8080

# Start app
# CMD npm run dev -s
CMD npm run prod -s
