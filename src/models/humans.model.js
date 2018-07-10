

module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const humans = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true,
      enum: [
        'user',
        'admin'
      ]
    },
    createdAt: {
      type: Date,
      required: true
    }
  }, {
    collection: 'humans',
    versionKey: false,
    timestamp: true
  });

  return mongooseClient.model('humans', humans);
};
