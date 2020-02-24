import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }

  getRestaurants() {
    // TODO
    axios.get('/restaurants')
    .then((response) => {
      const { data } = response;
      this.setState({ restaurants: data })
    })
    .catch((err) => {
      console.error(err);
    })
  }

  deleteRestaurant(id) {
    // TODO
    axios.delete(`/restaurants/${id}`)
    .then((response) => {
      this.getRestaurants()
    })
    .catch((err) => {
      console.error(err);
    })
  }

  addRestaurant(restaurant_name, rating) {
    // TODO
    axios.post(`/restaurants`, { restaurant_name, rating })
    .then((response) => {
      this.getRestaurants()
    })
    .catch((err) => {
      console.error(err);
    })
  }

  componentDidMount() {
    this.getRestaurants();
  }


  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ?
          <RestaurantList restaurants={this.state.restaurants} deleteRestaurant={this.deleteRestaurant} />
          :
          <div className="error">Fix your get request!</div>}
        <AddRestaurantForm addRestaurant={this.addRestaurant} />
      </div>
    )
  }
}

export default App;
