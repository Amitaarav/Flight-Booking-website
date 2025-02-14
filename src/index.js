const express = require('express');
const { ServerConfig } = require('./config');
const apiRoutes = require('./routes');
const logger = require('./config/logger-config');
const app = express();

app.use('/api',apiRoutes);

app.listen(ServerConfig.PORT, () => {
    logger.info(`Successfully started the server at port : ${ServerConfig.PORT}`);
})