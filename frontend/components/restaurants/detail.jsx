var React = require('react');
var ReactTabs = require('react-tabs');
var RestaurantStore = require('../../stores/restaurant_store');
var CurrentUserStore = require('../../stores/current_user_store');
var ApiUtil = require('../../util/restaurants_api_util');

var ReviewList = require('../reviews/list.jsx');
var ReviewForm = require('../reviews/form.jsx');

var RestaurantPhotoForm = require('./photo_form.jsx');


var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;


var RestaurantDetail = React.createClass({
  getStateFromStore: function () {
    return ({
      restaurant: RestaurantStore.find(parseInt(this.props.params.restaurantId)),
      photoFormOpen: false
    });
  },

  getInitialState: function () {
    return this.getStateFromStore();
  },

  componentWillReceiveProps: function (newProps) {
    ApiUtil.fetchOneRestaurant(parseInt(newProps.params.restaurantId));
  },

  componentDidMount: function () {
    this.restaurantListener = RestaurantStore.addListener(this._onChange);
    ApiUtil.fetchOneRestaurant(parseInt(this.props.params.restaurantId));
  },

  componentWillUnmount: function () {
    this.restaurantListener.remove();
  },

  _onChange: function () {
    this.setState(this.getStateFromStore());
  },

  handleSelect: function (index, last) {
    // console.log(index + " - " + last);

  },

  openReviewForm: function (e) {
    e.preventDefault();

    if (CurrentUserStore.isLoggedIn()) {
      var button = $('.write-review-button');
      var form = $('.review-form');

      form.slideToggle(500, function() {
        button.text(function () {
          return form.is(":visible") ? "Save Draft" : "Write a Review";
        });
      });
    } else {
      alert("you must be logged in dude");
    }
  },

  openAddPhoto: function (e) {
    e.preventDefault();

    this.setState({photoFormOpen: true});
  },

  closePhotoForm: function () {
    this.setState({photoFormOpen: false});
  },

  render: function () {
    if (this.state.restaurant === undefined) { return (<div> </div>); }

    return(
      <div className="restaurant-detail-content">
        <div className="restaurant-detail-header">
          <h1>{this.state.restaurant.name}</h1>
          <div className="restaurant-detail-info">
            <div className="restaurant-detail-map">
            </div>
            <div className="restaurant-address">
              {this.state.restaurant.address}
            </div>
            <div className="restaurant-city">
              {this.state.restaurant.city}
            </div>
            <a href={"http://" + this.state.restaurant.website}>
              {this.state.restaurant.website}
            </a>
            <div className="restaurant-phone-number">
              {this.state.restaurant.phone_number.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}
            </div>
          </div>
          <div className="write-review-button" onClick={this.openReviewForm}>
            Write a Review
          </div>
          <div className="add-photo-button" onClick={this.openAddPhoto}>
            Add a Photo
          </div>
          {this.state.photoFormOpen ?
            <RestaurantPhotoForm
              restaurant={this.state.restaurant}
              closePhotoForm={this.closePhotoForm}/>
          : null}
        </div>
        <ReviewForm restaurantId={this.props.params.restaurantId}/>
        <div className="restaurant-detail-tab-container">
          <Tabs onSelect={this.handleSelect} selectedIndex={0}>
            <TabList>
              <Tab>Reviews</Tab>
              <Tab>Reviewers</Tab>
              <Tab>Similar Restaurants</Tab>
            </TabList>
            <TabPanel>
              <ReviewList reviews={this.state.restaurant.reviews}/>
            </TabPanel>
            <TabPanel><ReviewList /></TabPanel>
            <TabPanel><ReviewList /></TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
});

module.exports = RestaurantDetail;
