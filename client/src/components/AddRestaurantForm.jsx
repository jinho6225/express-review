import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: 1
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const { addRestaurant } = this.props
    const { name, rating } = this.state
    return (
      <div>
        <div className="formTitle">Add a Restaurant</div>
        <div className="fields">
          <div className="field">
            <div>Restaurant name</div>
            <input name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text">
            </input>
          </div>
          <div className="field">
            <div>Rating</div>
            <select
              name="rating"
              value={this.state.rating}
              onChange={this.handleInputChange}>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div><button onClick={(e) => {
            e.preventDefault()
            addRestaurant(name, rating)
            this.setState({
              name: '',
              rating: 1
            })
          }} >Submit</button></div>
        </div>
      </div>
    )
  }
}

export default Form;
