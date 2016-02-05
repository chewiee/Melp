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

  playVideo: function (e) {
    $(e.currentTarget).find('video')[0].play();
  },

  pauseVideo: function (e) {
    $(e.currentTarget).find('video')[0].pause();
  },

  handleSelect: function (index, last) {
    console.log(index + " - " + last);

  },

  render: function () {

    // Defunct add restaurant button, will add a
    // write a review button to blank search form
    // <div className="index-add-button group">
    //   <i className="fa fa-plus"></i>
    //   Add New Restaurant
    // </div>

    return(
      <div className="search-results-container">
        <Tabs onSelect={this.handleSelect} selectedIndex={0}>
          <TabList>
            <Tab>
              Restaurants
            </Tab>
            <Tab>Reviews</Tab>
            <Tab>Users</Tab>
          </TabList>
          <TabPanel>
            <div className="group" id="restaurant-index">
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
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>

    );
  }
});

module.exports = RestaurantIndex;
