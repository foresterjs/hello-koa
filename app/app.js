'use strict';
var messages = require('./controllers/messages');
var users = require('./controllers/users');
var compress = require('koa-compress');
var logger = require('koa-logger');
var serve = require('koa-static');
var route = require('koa-route');
var koa = require('koa');
var path = require('path');
var app = module.exports = koa();

app.experimental = true;

// Logger
app.use(logger());


app.use(route.get('/', messages.home));
app.use(route.get('/messages', messages.list));
app.use(route.get('/messages/:id', messages.fetch));
app.use(route.post('/messages', messages.create));

app.use(route.get('/async', messages.delay));


//users
app.use(route.get('/users', users.findAll));
app.use(route.get('/users/create', users.create));
app.use(route.get('/users/update', users.update));
app.use(route.get('/users/read', users.read));

app.use(route.get('/users/test', users.testAsync));


// Serve static files
app.use(serve(path.join(__dirname, 'public')));






// Compress
app.use(compress());

if (!module.parent) {
  app.listen(3000);
  console.log('listening on port 3000');
}
