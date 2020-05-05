const https = require('https');
const express = require('express');

// referenz auf express
const app = express();
// static files:
app.use(express.static('public'));

// for https:
const getKeys = require('./keys');
const keys = getKeys();


//const server = http.createServer(app);
const server = https.createServer({
	cert: keys.certificate,
	key: keys.privateKey
}, app);

server.listen(3000, () => {
	console.log('Server listening on port 3000');
});