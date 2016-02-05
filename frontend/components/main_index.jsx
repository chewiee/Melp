var React = require('react');
var ReactTabs = require('react-tabs');
var Paginate = require('react-paginate');

var RestaurantStore = require('../stores/restaurant_store');
var ApiUtil = require('../util/restaurants_api_util');
var RestaurantIndexItem = require('./restaurants/index_item.jsx');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var SearchResultsStore = require('../stores/search_results_store');
var SearchApiUtil = require('../util/search_api_util');

var MainIndex = React.createClass({

  componentDidMount: function() {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return {page: 1, query: ""};
  },

  _onChange: function() {
    this.forceUpdate();
  },

  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    this.setState({page: nextPage});
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  handleSelect: function (index, last) {
    console.log(index + " - " + last);

  },

  render: function() {
    var restaurants = [];
    var reviews = [];
    var users = [];
    var searchResults = SearchResultsStore.all().map(function (searchResult) {
      if (searchResult._type === "Restaurant") {
        restaurants.push(searchResult);
      } else if (searchResult._type === "Review") {
        reviews.push(searchResult);
      } else {
        users.push(searchResult);
      }
    });

    var restaurantsList = restaurants.map(function (restaurant) {
      return <li>{restaurant.name}</li>;
    });

    var reviewsList = reviews.map(function (review) {
      return <li>{review.body}</li>;
    });

    var usersList = users.map(function (user) {
      return <li>{user.username}</li>;
    });

    return (
      <div className="search-results-container">
        <Tabs onSelect={this.handleSelect} selectedIndex={0}>
          <TabList>
            <Tab>Restaurants ({restaurantsList.length})</Tab>
            <Tab>Reviews ({reviewsList.length})</Tab>
            <Tab>Users ({usersList.length}) </Tab>
          </TabList>
          <TabPanel><ul>{restaurantsList}</ul></TabPanel>
          <TabPanel><ul>{reviewsList}</ul></TabPanel>
          <TabPanel><ul>{usersList}</ul></TabPanel>
        </Tabs>
      </div>
    );
  },


});

module.exports = MainIndex;
