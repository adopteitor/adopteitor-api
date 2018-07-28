

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const species = new Schema({
    displayName: {
      type: String,
      required: true
    },
    default: {
      type: Boolean,
      default: false,
      required: true
    }
  }, {
    collection: 'species',
    versionKey: false,
    timestamp: true
  });

  return mongooseClient.model('species', species);
};
