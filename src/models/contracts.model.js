

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const contracts = new Schema({
    animalId: {
      type: Schema.ObjectId,
      required: true
    },
    humanId: {
      type: Schema.ObjectId,
      required: true
    },
    createdAt: {
      type: Date,
      required: true
    },
    contract: {
      type: String,
      required: true
    }
  }, {
    collection: 'contracts',
    versionKey: false,
    timestamps: true
  });

  return mongooseClient.model('contracts', contracts);
};
