const app = require('./server')

const port = process.env.PORT || 3000

app.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})
