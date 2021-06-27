// express application adding the parse-server module to expose Parse
require('dotenv').config();

const express = require('express');
const path = require('path');
const args = process.argv || [];
const test = args.some(arg => arg.includes('jasmine'));
const cors = require('cors');

const port = process.env.SERVER_PORT;
const databaseUri = process.env.DB_URI;

const ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var app = express();

const landmarksRouter = require('./landmarksRouting/landmarksRouter');

// TODO: Add fallback
// const databaseUri = process.env.DB_URI || process.env.MONGODB_URI;

var api = new ParseServer({
  databaseURI: databaseUri,
  appId: process.env.APP_ID,
  masterKey: process.env.MASTER_KEY,
  fileKey: process.env.FILE_KEY,
  serverURL: process.env.SERVER_URL,
});

var dashboard = new ParseDashboard({
  apps: [
    {
      serverURL: process.env.SERVER_URL,
      appId: process.env.APP_ID,
      masterKey: process.env.MASTER_KEY,
      appName: process.env.APP_NAME,
    },
  ],
  users: [
    {
      user: process.env.APP_USER,
      pass: process.env.APP_PASS,
    },
  ],
});

try {
  app.use(cors());

  app.use(express.json())

  // Serve the Parse API on the /parse URL prefix, using the pre-defined api config
  app.use('/parse', api);

  // make the Parse Dashboard available at /dashboard, , using the pre-defined dashboard config
  app.use('/dashboard', dashboard);

  // Point to the method router for landmarks API requests
  app.use('/api', landmarksRouter);

  const httpServer = require('http').createServer(app);

  httpServer.listen(port, function () {
    console.log('Initializing parse-server on port ' + port + '!');
  });
} catch (error) {
  console.log('\n>>> Parse Server/Dashboard init failed with:', error, '\n');
}

module.exports = {
  app,
};
