import React from 'react';
import RestaurantListEntry from './RestaurantListEntry.jsx';
const RestaurantList = ({ restaurants, deleteRestaurant }) => (
  <div className="list">
    {restaurants.map((restaurant, i) => (
      <RestaurantListEntry
        deleteRestaurant={deleteRestaurant}
        restaurant={restaurant}
        deleteRestaurant={deleteRestaurant}
        key={i}
        index={i}
      />
    ))}
  </div>
)

export default RestaurantList;
