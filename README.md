# Todo App

Todo Application built using MERN [MongoDB, Express.js, React.js, Node.js]

- It uses `jsonwebtoken` for Authentication and Authorization.
- `crypto-js` is used for AES & SHA3 encyption.
- AES - for encrypting & decrypting data sent through API calls.
- SHA3 for hashing password in database.

## Usage

### Configuration

/server/.env

```
PORT=<Port Number>
AES_SECRET_KEY=<String>
SHA3_DB_SECRET_KEY=<String>
JWT_SECRET_KEY=<String>
MONGO_URI=<Local/online mongo URI>
```

/client/.env

```
REACT_APP_BASE_URL=<server url ex:127.0.0.1:3001, localhost:3001>
REACT_APP_AES_SECRET_KEY=<String> 
```
NOTE: AES secret keys should be same for server and client. (In real world scenario this key should be shared with client in a secure way)

### Run the application

Install dependencies & start the server (Node.js)

```
    cd server

    npm install

    nodemon server.js
```

Install client dependencies & start the client (React.js)

```
    cd ..

    cd client

    npm install

    npm start
```

## Docker Files and Docker Compose

### Steps to build Docker images

1. Switch to client folder `cd client`
2. Command `docker build .`
3. Change directory to server `cd ..`
4. Switch to server folder `cd server`
5. Command `docker build .`

### Steps to fire up application using Docker - Compose

1. Switch to `/` of the project folder (docker-compose.yaml is present at root of the project folder)
2. Command `docker-compose up`
3. The React application will be live at: `127.0.0.1:3000`
4. APIs will be available at: `127.0.0.1:3001`
