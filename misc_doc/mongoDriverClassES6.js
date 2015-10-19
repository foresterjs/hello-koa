module.exports = function(config){

  class Mongo (config) extends Parent {

    constructor()
    {
      this.db = todo(config);
    }

    async function findAll() {
      this.db.findAll()
    }

  }

  return mongo;
}

//:::::::::::


var Mongo = require('./mongoDriverClass');

var mongo = new Mongo('connection')

mongo.findAll()
