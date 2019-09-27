const express = require('express')
const api_helper = require('./API_helper')
const app = express()
const cors = require('cors')
const port = 3000

app.use(cors())

app.get('/getusers', (req, res) => {
  const apiUrl = req.query.id ? 'https://jsonplaceholder.typicode.com/users?id=' + req.query.id : 'https://jsonplaceholder.typicode.com/users';
  api_helper.make_API_call(apiUrl)
    .then(response => {
      res.json(response)
    })
    .catch(error => {
      res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app
