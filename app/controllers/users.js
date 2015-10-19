'use strict';
var MongoJsAdapter = require('../libs/MongoJsAdapter');


var dbAdapter = new MongoJsAdapter('mongodb://hellokoa_db_1:27017/test', 'users');


exports.findAll = async function findAll(next) {

  var users = await dbAdapter.findAll({});
  this.body = users;

  await next;
};

exports.create = async function create(next) {

  var model = this.query;
  var user = await dbAdapter.create(model);
  this.body = user;

  await next;
};

exports.update = async function update(next) {

  if (!('id' in this.query)) {
    this.body = {'err': 'Non è stato specificato un id'};
    await next;
  }

  var model = this.query;
  var user = await dbAdapter.update(this.query.id, model);
  this.body = user;

  await next;
};

exports.read = async function read(next) {

  if (!('id' in this.query)) {
    this.body = {'err': 'Non è stato specificato un id'};
    await next;
  }

  var users = await dbAdapter.findById(this.query.id);
  this.body = users;

  await next;
};
