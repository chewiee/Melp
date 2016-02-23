var React = require('react');
var ReactTabs = require('react-tabs');
var Paginate = require('react-paginate');

var RestaurantStore = require('../../stores/restaurant_store');
var ApiUtil = require('../../util/restaurants_api_util');
var RestaurantIndexItem = require('./index_item.jsx');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var RestaurantIndex = React.createClass({
  getInitialState: function () {
    return {
      restaurants: RestaurantStore.all(),
    };
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

  hoverStart: function (e) {
    $($(e.currentTarget).find("img")[0]).addClass("hovering");
  },

  hoverEnd: function (e) {
    $($(e.currentTarget).find("img")[0]).removeClass("hovering");
  },

  handleSelect: function (index, last) {


  },

  render: function () {

    // Defunct add restaurant button, will add a
    // write a review button to blank search form
    // <div className="index-add-button group">
    //   <i className="fa fa-plus"></i>
    //   Add New Restaurant
    // </div>

    return(
      <div className="group" id="restaurant-index">
        <div className="index-header">Restaurants</div>
        <ul className="restaurant-index">
          {this.state.restaurants.map(function (restaurant, i) {
            return <RestaurantIndexItem
              key={restaurant.id}
              restaurant={restaurant}
              idx={i + 1}
              onHover={[this.hoverStart, this.hoverEnd]}/>;
          }.bind(this))}
        </ul>
      </div>
    );
  }
});

module.exports = RestaurantIndex;
