import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import ejs from 'ejs'
import session from 'express-session'

const routes = require('./routes/index');
const api = require('./routes/api');
const users = require('./routes/users');


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'ng2'));
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'ng2')));
app.use(session({
   secret: global.CONFIG.SECRET,
   name: 'angular2',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
   cookie: {maxAge: 1000 * 60 * 60 * 24 },  //设置maxAge是1天，即1天后session和相应的cookie失效过期
   resave: false,
   saveUninitialized: true,
}));

app.use('/', routes);
app.use('/api', api);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    title: '出错了',
    message: err.message,
    error: {}
  });
});


module.exports = app;
