var React = require('react');
var ApiUtil = require('../../util/restaurants_api_util');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

module.exports = React.createClass({
  mixins: [LinkedStateMixin, History],

  blankAttrs: {
    name: '',
    address: '',
    phone_number: '',
    website: '',
    city: '',
    zipcode: '',
    creating: false
  },

  getInitialState: function () {
    return this.blankAttrs;
  },

  createRestaurant: function (e) {
    e.preventDefault();

    var restaurant = {};
    Object.keys(this.state).forEach(function (key) {
      restaurant[key] = this.state[key];
    }.bind(this));


    ApiUtil.createRestaurant(restaurant, function (id) {
      this.history.pushState(null, "/restaurant/" + id, {});
    }.bind(this));
    this.setState(this.blankAttrs);
    this.setState({creating: true});

  },

  render: function () {
    if (this.state.creating) {
      return(<div> creating yo shit bro </div>);
    }
    return(
      <div className="dim-background">
        <form className="restaurant-form group">
          <h2>Add a new restaurant</h2>
          <div className="form-top-row">
            <input type='text'
              id='restaurant_name'
              placeholder="Name"/>
          </div>
          <div className="form-map"></div>
          <div className="form-address">
            <input type='text'
              id='restaurant_address'
              placeholder="Address"/>
            <input type='text'
              id='restaurant_city'
              placeholder="City"/>
            <input type='text'
              id='restaurant_zipcode'
              placeholder="Zipcode"/>
          </div>
          <div className="form-other-info">
            <input type='text'
              id='restaurant_website'
              placeholder="Website"/>
            <input type='text'
              id='restaurant_phonenumber'
              placeholder="(555) 555-5555"/>
          </div>
          <button className="add-restaurant-button"
            onClick={this.createRestaurant}>
            Add Restaurant
          </button>
          <button className="form-close-button"
            onClick={this.props.onRequestClose}>X
          </button>
        </form>
      </div>
    );
  }
});
