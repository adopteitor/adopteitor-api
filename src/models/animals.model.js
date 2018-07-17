

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const animals = new Schema({
    stage: {
      type: String,
      required: true,
      enum: [
        'puppy', 'adult', 'oldie'
      ]
    },
    name: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    sex: {
      type: String,
      required: true,
      enum: [
        'male', 'female', 'other'
      ]
    },
    location: {
      type: String,
      required: false
    },
    entryDate: {
      type: Date,
      required: true
    },
    status: {
      type: String,
      required: true,
      enum: [
        'inAdoption', 'adopted', 'other'
      ]
    },
    specie: {
      type: Schema.Types.ObjectId,
      required: true
    },
    race: {
      type: Schema.Types.ObjectId,
      required: false
    },
    photos: [
      {
        type: String,
        required: false
      }
    ]
  }, {
    collection: 'animals',
    versionKey: false,
    timestamps: true
  });

  return mongooseClient.model('animals', animals);
};
