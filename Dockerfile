# Start from a Golang base image
FROM node:18.14.2

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the application code into the container
COPY . .

# Expose port 8081
EXPOSE 8000

# Command to start the application
CMD [ "npm", "start" ]