'use strict';

var mongojs = require('mongojs')
var collectionName = 'users';
var connectionString = 'mongodb://hellokoa_db_1:27017/test';

exports.findAll = function *findAll(next) {

  var users = yield mongoFindAll('users', {});
  this.body = users;

  yield next;
};

exports.create = function *create(next) {

  var model = this.query;
  var user = yield mongoCreate('users', model);
  this.body = user;

  yield next;
};

exports.update = function *update(next) {

  if(!('id' in this.query)){
    this.body = {'err' : 'Non è stato specificato un id'};
    yield next;
  }

  var model = this.query;
  var user = yield mongoUpdate('users', this.query.id, model);
  this.body = user;

  yield next;
};

exports.read = function *read(next) {

  if(!('id' in this.query)){
    this.body = {'err' : 'Non è stato specificato un id'};
    yield next;
  }

  var users = yield mongoFindById('users', this.query.id);
  this.body = users;

  yield next;
};









function mongoFindAll(collection, opts) {
  return function (done) {
    var db = mongojs(connectionString);
    db.collection(collection).find(opts, done);
  }
}

function mongoFindById(collection, id) {
  return function (done) {
    var db = mongojs(connectionString);

    db.collection(collection).findOne({'_id': new mongojs.ObjectId(id)}, done);
  }
}

function mongoCreate(collection, data) {
  return function (done) {
    var db = mongojs(connectionString);
    db.collection(collection).insert(data, done);
  }
}

function mongoUpdate(collection, id, data) {
  return function (done) {
    var db = mongojs(connectionString);
    delete data.id;
    db.collection(collection).findAndModify(
      {
        'query' : {'_id': new mongojs.ObjectId(id)},
        'update': data,
        'new'   : true
      }, done);
  }
}
