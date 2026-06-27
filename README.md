# Museum React Express

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react) ![Express](https://img.shields.io/badge/Express-4-000000?logo=express) ![MongoDB](https://img.shields.io/badge/MongoDB-6.0-47A248?logo=mongodb) ![Node.js](https://img.shields.io/badge/Node.js-20-339933?logo=node.js)

A full-stack portfolio project for managing museum exhibitions, exhibits, and halls. The application combines a React frontend with an Express REST API and MongoDB persistence.

## Overview

- React client with routing and reusable UI components;
- Express backend with structured REST endpoints;
- MongoDB storage through Mongoose models;
- Authentication foundation with Passport.js and support for OAuth integration;
- Clear separation of routes, controllers, and models for maintainability.

## Tech stack

- Frontend: React, React Router
- Backend: Node.js, Express
- Database: MongoDB, Mongoose
- Auth: Passport.js

## Project structure

```text
client/          # React frontend
server/          # Express backend
  config/        # database and Passport setup
  controllers/   # request handling logic
  models/        # Mongoose schemas
  routes/        # API routes
```

## Getting started

1. Clone the repository:

```bash
git clone https://github.com/TheRinder2/museum-react-express.git
cd museum-react-express
```

2. Install dependencies:

```bash
npm install
cd client && npm install && cd ..
```

3. Start the application:

```bash
npm start
```

### Run services separately

```bash
# server
cd server
npx nodemon Index.js

# client
cd client
npm start
```

## Environment variables

Create a `server/.env` file or export the values in your shell:

```env
MONGO_URI=mongodb://127.0.0.1:27017/museum
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## Useful commands

```bash
# install dependencies
npm install
cd client && npm install

# start both services
npm start

# start server only
cd server && npx nodemon Index.js

# start client only
cd client && npm start
```

## License and contribution

This repository is intended as a full-stack portfolio project. Pull requests and suggestions are welcome.
