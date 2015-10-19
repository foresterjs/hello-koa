module.exports = function(config){

  var mongo = {};
  var db = conn(config);


  //noinspection ES6Validation
  mongo.findAll = async function(){



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


var driver = require('./mongoDriver');

var db = driver()


