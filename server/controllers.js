const restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAll: (req, res) => {
    res.status(200).send(restaurants)
  },
  getOne: (req, res) => {
    let id = req.params.id - 1
    res.status(200).send(restaurants[id])
  },
}

module.exports = controllers
