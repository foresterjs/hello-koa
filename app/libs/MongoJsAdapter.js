var mongojs = require('mongojs');

class MongoJsAdapter {

  constructor(connectionUri, collectionName) {
    this.db = mongojs(connectionUri);
    this.collection = this.db.collection(collectionName);
  }

  async findAll(where) {
    var collection = this.collection;

    return new Promise(function (resolve, reject) {
      collection.find(where, function (err, data) {

        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    });
  }

  async findById(id) {
    var collection = this.collection;

    return new Promise(function (resolve, reject) {
      collection.findOne({'_id': new mongojs.ObjectId(id)}, function (err, data) {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    });
  }

  async create(data) {
    var collection = this.collection;

    return new Promise(function (resolve, reject) {
      collection.insert(data, function (err, data) {
        if (err) {
          reject(err);
          return;
        }

        resolve(data);
      });
    });
  }

  async update(id, data) {
    var collection = this.collection;

    return new Promise(function (resolve, reject) {
      delete data.id;
      collection.findAndModify(
        {
          'query': {'_id': new mongojs.ObjectId(id)},
          'update': data,
          'new': true
        }, function (err, data) {
          if (err) {
            reject(err);
            return;
          }

          resolve(data);
        });
    });
  }
}

module.exports = MongoJsAdapter;
