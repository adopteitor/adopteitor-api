

const mongoose = require('mongoose');

module.exports = function(app) {
  mongoose
    .connect(app.get('mongodb'))
    .then(() => {
      console.log('[mongoose.connected]');
    })
    .catch(err => {
      console.log('[mongoose.connection failed]', err);
    });

  mongoose.Promise = global.Promise;

  app.set('mongooseClient', mongoose);
};
