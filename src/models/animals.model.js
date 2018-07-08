

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const animals = new Schema({
    stage: {
      type: String,
      required: true
    },
    name: {
      // Should be displayName?
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      // A description of the animal.
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true
    },
    location: {
      // A string describing where in the world the animal is located
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    state: {
      // Adopted, in adoption, other?
      type: String,
      required: true
    }
  }, {
    collection: 'animals',
    versionKey: false,
    timestamps: true
  });

  return mongooseClient.model('animals', animals);
};
