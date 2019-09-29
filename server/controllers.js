var restaurants = require('../restaurants.json');

const controllers = {
  // TODO
  getAllRestaurants: (req, res) => {
    res.status(200).send(restaurants);
  },
  getOneRestaurant: (req, res) => {
    // THIS IS WHERE WE'D TALK TO DATABASE
    var restaurant = restaurants[req.params.id - 1];
    if (restaurant) {
      res.status(200).send(restaurant)
    } else {
      res.status(404).send('No restaurant with id ' + req.params.id)
    }
  },

  postRestaurant: (req, res) => {
    if (req.body.name && req.body.rating) {
      restaurants.push({
        restaurant_name: req.body.name,
        rating: req.body.rating
      })
      res.status(201).send('Added ' + req.body.name + ' to restaurants')
    } else {
      res.status(400).send('Invalid Restaurant Format');
    }
  },
  deleteRestaurant: (req, res) => {
    var restaurant = restaurants[req.params.index];
    if (restaurant) {
      restaurants.splice(req.params.index, 1);
      res.status(200).send('Removed restaurant')
    } else {
      res.status(400).send('No restaurant at index ' + req.params.index)
    }

  }
}

module.exports = controllers;