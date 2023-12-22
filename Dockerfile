# Use an official Node runtime as a base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to /app
COPY . .

# Build the Angular app
RUN npm run build --configuration=production

# Expose port 80
EXPOSE 80

# Command to run the application
CMD ["npm", "start"]
