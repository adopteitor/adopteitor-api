

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const animalId = context.data.animalId;
    if(animalId) {
      const animal = await context.app.service('animals').get(animalId);
      context.data.animal = animal;
    }
    return context;
  };
};
