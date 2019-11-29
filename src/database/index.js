const mongodb = require('../config/mongodb');

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.mongoConnection = mongodb;
  }

}
module.exports = new Database();
