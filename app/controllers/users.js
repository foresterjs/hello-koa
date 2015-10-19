'use strict';

var mongojs = require('mongojs')
var collectionName = 'users';
var connectionString = 'mongodb://hellokoa_db_1:27017/test';


exports.findAll = async function findAll(next) {

  var users = await mongoFindAll('users', {});
  this.body = users;

  await next;
};

exports.create = async function create(next) {

  var model = this.query;
  var user = await mongoCreate('users', model);
  this.body = user;

  await next;
};

exports.update = async function update(next) {

  if (!('id' in this.query)) {
    this.body = {'err': 'Non è stato specificato un id'};
    await next;
  }

  var model = this.query;
  var user = await mongoUpdate('users', this.query.id, model);
  this.body = user;

  await next;
};

exports.read = async function read(next) {

  if (!('id' in this.query)) {
    this.body = {'err': 'Non è stato specificato un id'};
    await next;
  }

  var users = await mongoFindById('users', this.query.id);
  this.body = users;

  await next;
};






/** db **/

var db = mongojs(connectionString);

function mongoFindAll(collection, opts) {

  return new Promise(function (resolve, reject) {
    db.collection(collection).find(opts, function (err, data) {

      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}


function mongoFindById(collection, id) {
  return new Promise(function (resolve, reject) {
    db.collection(collection).findOne({'_id': new mongojs.ObjectId(id)}, function (err, data) {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

function mongoCreate(collection, data) {
  return new Promise(function (resolve, reject) {
    db.collection(collection).insert(data, function (err, data) {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

function mongoUpdate(collection, id, data) {
  return new Promise(function (resolve, reject) {
    delete data.id;
    db.collection(collection).findAndModify(
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
