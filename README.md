# Simple Express Server

## TODO
Using a express framework, build a web server to render html file:
* When i navigate to '/index.html', I should see a simple webpage of the student. (Nothing fancy)
* Add Another Feature  such that when I navigate to '{random}.html' it should return with a 404 page.

## Installation
Use the package manager [npm](https://www.npmjs.com/);
```javascript
npm install
```

## Usage
```javascript
const express = require('express');
const server = express();
```

## Dependencies
* express - to create and mangage our server
* nodemon - to restart our server upon changes made to our app in real-time

## Modules
* fs - Allows us to read/write files.
* path - Allows us to set paths to files/directory.