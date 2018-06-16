class Animals {
  constructor() {
    this.animals = [];
    this.currentId = 0;
  }

  async find(params) {
    // Return the list of all animals
    return this.animals;
  }

  async get(id, params) {
    const animal = this.animals.find(animal => animal.id === parseInt(id, 10));
    // Throw an error if it wasn't found
    if(!animal) {
      throw new Error(`animal with id ${id} not found`);
    }
    // Otherwise return the animal
    return animal;
  }


  async create(data, params) {
    const Model = require('../models/animal');
    let Animaldata = {
      id: "id",
      stage: "meme",
      name: "name",
      birthday: "birthday",
      description: "description",
      ingress_date: "ingress_date"
    };
    const animal = new Model(Animaldata);
    this.animals.push(animal);
    return this.animal;
  }

  async patch(id, data, params) {
    // Get the existing animal. Will throw an error if not found
    const animal = await this.get(id);

    // Merge the existing animal with the new data
    // and return the result
    return Object.assign(animal, data);
  }

  async remove(id, params) {
    // Get the animal by id (will throw an error if not found)
    const animal = await this.get(id);
    // Find the index of the animal in our animal array
    const index = this.animals.indexOf(animal);

    // Remove the found animal from our array
    this.animals.splice(index, 1);

    // Return the removed animal
    return animal;
  }
}

module.exports = Animals;
