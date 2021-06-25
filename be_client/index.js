// express application adding the parse-server module to expose Parse

const express = require('express');
const path = require('path');
const args = process.argv || [];
const test = args.some(arg => arg.includes('jasmine'));
const cors = require("cors");
require('dotenv').config()

const port = process.env.SERVER_PORT;
const ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var app = express();
app.use(cors());

// TODO: Add local db fallback
// const databaseUri = process.env.DB_URI || process.env.MONGODB_URI;
const databaseUri = process.env.DB_URI;

// TODO: Add error handling logic
if (!databaseUri) {
  console.log('DATABASE_URI not specified!');
}

// TODO: Add error handling logic
var api = new ParseServer({
  databaseURI: databaseUri,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY, 
  fileKey: process.env.FILE_KEY,
  serverURL: process.env.SERVER_URL
});

// TODO: Add error handling logic
var dashboard = new ParseDashboard({
  "apps": [
    {
      "serverURL": process.env.SERVER_URL,
      "appId": process.env.APP_ID,
      "masterKey": process.env.MASTER_KEY,
      "appName": process.env.APP_NAME,
    }
  ],
  "users": [
    {
      "user": process.env.APP_USER,
      "pass": process.env.APP_PASS
    }
  ]
});

// Serve the Parse API on the /parse URL prefix, using the pre-defined api config
app.use('/parse', api);

// make the Parse Dashboard available at /dashboard, , using the pre-defined dashboard config
app.use('/dashboard', dashboard);

const httpServer = require('http').createServer(app);

httpServer.listen(port, function () {
  console.log('Initializing parse-server on port ' + port + '!');
});

module.exports = {
  app
};
