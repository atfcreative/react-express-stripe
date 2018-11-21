const express = require('express');

const SERVER_CONFIGS = require('./constants/server');

const configureServer = require('./server');
const configureRoutes = require('./routes');

const app = express();

configureServer(app);
configureRoutes(app);

app.listen(SERVER_CONFIGS.PORT, error => {
    if (error) throw error;
    console.log(`Server running smooth as eggs on port: ${SERVER_CONFIGS.PORT}`);
});