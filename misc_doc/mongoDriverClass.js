module.exports = function(config){

  function Mongo (config) {
    this.db = todo(config);
  }

  //inherit
  //Mongo.prototype = Object.create(Parent.prototype);

  //noinspection ES6Validation
  Mongo.prototype.findAll = async function(){
    this.db.findAll()
  }

  /*
   filters[prova][eq]=10

   filters.prova=EQ(10)&


   filter={prova:}

   filter=&#090;prova&#222;&#090;&update={.....}
   */

  return mongo;
}

//:::::::::::


var Mongo = require('./mongoDriverClass');

var mongo = new Mongo('connection')

mongo.findAll()
