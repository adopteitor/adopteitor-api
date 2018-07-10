

const mongoose = require('mongoose');
const logger = require('./logger');

module.exports = function(app) {
  mongoose
    .connect(app.get('mongodb'))
    .then(() => {
      logger.info('[mongoose.connected]');
    })
    .catch(err => {
      if (process.env.NODE_ENV !== 'test') {
        logger.error('[mongoose.connection failed]', err);
      }
    });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
