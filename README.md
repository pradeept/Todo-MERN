<h1>Todo App</h1>

<br/>
Todo Application built using MERN [MongoDB, Express.js, React.js, Node.js] , <br>
<ul>
    <li>It uses <code>`jsonwebtoken`</code> for Authentication and Authorization.</li>
    <li><code>crypto-js</code> is used for AES & SHA3 encyption.</li>
    <li>AES - for encrypting & decrypting data sent through API calls.</li>
    <li>SHA3 for hashing password in database.</li>
</ul>

<br/>
<h2>Usage</h2>
<p>Install server dependencies & start server</p>

``````
    cd server

    npm install

    nodemon server.js
``````
<p>Install client dependencies & start client</p>

``````
    cd ..

    cd client

    npm install

    npm start
``````

<h2>Configuration</h2>

/server/.env

```````
PORT=<Port Number>
AES_SECRET_KEY=<String>
SHA3_DB_SECRET_KEY=<String>
JWT_SECRET_KEY=<String>
MONGO_URI=<Local/online mongo URI>
```````

/client/.env

```````
REACT_APP_BASE_URL=<Local/online mongo URI>
REACT_APP_AES_SECRET_KEY=<String>
```````

