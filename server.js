const express = require('express');
const server = express();
const path = require('path');
const fs = require('fs')

const PORT = process.env.PORT || 4000;
const HOSTNAME = 'localhost'

const homePath = path.join(__dirname, 'public', 'index.html');
const notFoundPath = path.join(__dirname, 'public', '404.html');

server.use(express.static('public'));


server.get('^/$|/index(.html)?', (req, res) => {
    res.status(200).sendFile(homePath);
})

server.get('/*', (req, res) => {
    res.status(404).sendFile(notFoundPath);
})

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server is listening on ${HOSTNAME}:${PORT}`);
})