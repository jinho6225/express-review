// TODO
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const path = require('path')
const controllers = require('./controllers')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/', express.static(path.join(__dirname, '../client/dist')))

app.get('/restaurants', controllers.getAll)
app.get('/restaurants/:id', controllers.getOne)

app.post('/restaurants', controllers.postOne)
app.delete('/restaurants/:id', controllers.deleteOne)


app.listen(3003, () => console.log('3003 port is woking'))
