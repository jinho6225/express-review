import React from 'react';
import RestaurantList from './RestaurantList.jsx';
import AddRestaurantForm from './AddRestaurantForm.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.getRestaurants = this.getRestaurants.bind(this);
    this.deleteRestaurant = this.deleteRestaurant.bind(this);
    this.addRestaurant = this.addRestaurant.bind(this);
  }


  getRestaurants() {
    // TODO
    axios.get('/restaurants')
      .then((response) => {
        this.setState({
          restaurants: response.data
        })
      })
      .catch((err) => console.log(err))

  }

  deleteRestaurant(index) {
    // TODO
    axios.delete(`/restaurants/${index}`)
    .then(() => this.getRestaurants())
    .catch((err) => console.log(err))
  }

  addRestaurant(restaurant) {
    // TODO
    axios.post('/restaurants', {
      name: restaurant.name,
      rating: restaurant.rating
    })
    .then(() => this.getRestaurants())
    .catch((err) => console.log(err))
  }

  componentDidMount() {
    this.getRestaurants();
  }


  render() {
    return (
      <div className="body">
        <div className="heading">Welp!</div>
        {this.state.restaurants.length ?
          <RestaurantList
          deleteRestaurant={this.deleteRestaurant}
          restaurants={this.state.restaurants} />
          :
          <div className="error">Fix your get request!</div>}
        <AddRestaurantForm
        addRestaurant={this.addRestaurant}
        />
      </div>
    )
  }
}


export default App;