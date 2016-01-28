var React = require('react');
var RestaurantStore = require('../../stores/restaurant_store');
var ApiUtil = require('../../util/api_util');
var RestaurantIndexItem = require('./index_item.jsx');

var RestaurantIndex = React.createClass({
  getInitialState: function () {
    return { restaurants: RestaurantStore.all() };
  },

  _onChange: function () {
    this.setState({ restaurants: RestaurantStore.all()});
  },

  componentDidMount: function () {
    this.listenerToken = RestaurantStore.addListener(this._onChange);
    ApiUtil.fetchAllRestaurants();
  },

  componentWillUnmount: function () {
    this.listenerToken.remove();
  },

  playVideo: function (e) {
    $(e.currentTarget).find('video')[0].play();
  },

  pauseVideo: function (e) {
    $(e.currentTarget).find('video')[0].pause();
  },

  render: function () {

    return(
      <div className="group">
        <div className="index-header">Restaurants</div>
        <div className="index-add-button group">
          <i className="fa fa-plus"></i>
          Add New Restaurant
        </div>
        <ul className="restaurant-index">
          {this.state.restaurants.map(function (restaurant, i) {
            return <RestaurantIndexItem
              key={restaurant.id}
              restaurant={restaurant}
              idx={i + 1}
              onHover={[this.playVideo, this.pauseVideo]}/>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = RestaurantIndex;
