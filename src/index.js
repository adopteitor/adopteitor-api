'use strict';

const logger = require('./logger');
const app = require('./app');
const port = app.get('port');
const server = app.listen(port);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () => {
  process.stdout.write('\u001b[2J\u001b[0;0H'); // This is for clearing the console.
  logger.info(
    'Adopteitor Server started at http://%s:%d',
    app.get('host'),
    port
  );
});
