const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const peeps = 'https://randomuser.me/api/?inc=name,email,phone,picture'
const app = express()

const storage = {
  users: [],
  going: [],
  notoing: []
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api', routes)

app.get('/', req, res, next) => {
  request(peeps, (err, resp) => {
    const body = JSON.parse(resp.body)
    const peepDeets ={
      picture: body.results[0].picture.large,
      name: `${body.results[0].name.first} ${body.results[0].name.last}`,
      email: body.results[0].email,
      phone: body.results[0].phone
    }

    res.render('invite', data)
  })
}

// ---- ERROR HANDLING ----
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handlers
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

module.exports = app
