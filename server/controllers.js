const restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAll: (req, res) => {
    res.status(200).send(restaurants)
  },
  getOne: (req, res) => {
    const restaurant = restaurants[req.params.id - 1]
    if (restaurant) {
      res.status(200).send(restaurant);
    } else {
      res.status(404).send(`No restaurant with id ${req.params.id}`)
    }
  },
  postOne: ({ body }, res) => {
      console.log(body)
    var id = restaurants[restaurants.length-1].id+1
    if (body.restaurant_name && body.rating) {
      restaurants.push({
        id: id,
        restaurant_name: body.restaurant_name,
        rating: body.rating
      });
      res.status(201).send('Added ' + body.restaurant_name + ' to restaurants')
    } else {
      res.status(400).send('Invalid restaurant format');
    }
  },
  deleteOne: (req, res) => {
    const index = req.params.id - 1
    if (restaurants[index]) {
      restaurants.splice(index, 1)
      res.status(200).send(restaurants);
    } else {
      res.status(404).send(`No restaurant with id ${req.params.id}`)
    }
  }

}

module.exports = controllers
