#!/bin/bash

# Move to frontend directory
cd frontend

# install dependencies in frontend
npm install

# Build frontend
npm run build

# Move to server directory
cd ../server

# Install dependencies in server
npm install

# Start the server
npm start