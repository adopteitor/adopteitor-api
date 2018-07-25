

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const breeds = new Schema({
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
    collection: 'breeds',
    versionKey: false,
    timestamp: true
  });

  return mongooseClient.model('breeds', breeds);
};
