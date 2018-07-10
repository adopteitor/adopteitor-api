

// eslint-disable-next-line no-unused-vars
module.exports = function(options = {}) {
  return async context => {
    const humanId = context.data.humanId;

    if (humanId) {
      const human = await context.app.service('humans').get(humanId);
      context.data.human = human;
    }
    return context;
  };
};
