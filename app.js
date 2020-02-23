const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const dbConnector = require('./dbConnector');
dbConnector.authenticate()
.then(() => {
  console.log('Connection Success');
})
.catch(err => {
  console.log(err);
});

const Albums = require('./models/albums');
const Songs = require('./models/songs');

Albums.sync({force: true});
Songs.sync({force: true});

Albums.hasMany(Songs, {foreignKey: 'album_id'});
Songs.belongsTo(Albums, {foreignKey: 'album_id'});

const indexRouter = require('./routes/index');
const albumsRouter = require('./routes/albums');
const songsRouter = require('./routes/songs');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/albums', albumsRouter);
app.use('/songs', songsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
