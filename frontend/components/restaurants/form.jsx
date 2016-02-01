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
        <form className="restaurant-form">
          <div className="form-top-row">
            <label htmlFor='restaurant_name'>Name</label>
            <input type='text'
              id='restaurant_name'
              valueLink={this.linkState("name")} />
          </div>
          <div className="form-map"></div>
          <div className="form-address">
            <label htmlFor='restaurant_address'>Address</label>
            <input type='text'
              id='restaurant_address'
              valueLink={this.linkState("address")} />
            <label htmlFor='restaurant_city'>City</label>
            <input type='text'
              id='restaurant_city'
              valueLink={this.linkState("city")} />
            <label htmlFor='restaurant_zipcode'>Zip</label>
            <input type='text'
              id='restaurant_zipcode'
              valueLink={this.linkState("zipcode")} />
          </div>
          <div className="form-other-info">
            <label htmlFor='restaurant_website'>Website</label>
            <input type='text'
              id='restaurant_website'
              valueLink={this.linkState("website")} />
            <label htmlFor='restaurant_phonenumber'>{"Phone Number"}</label>
            <input type='text'
              id='restaurant_phonenumber'
              valueLink={this.linkState("phonenumber")} />
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
