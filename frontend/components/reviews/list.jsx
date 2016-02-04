var React = require('react');
var ReviewItem = require('./item.jsx');
var RestaurantStore = require('../../stores/restaurant_store');

var ReviewList = React.createClass({
  getInitialState: function () {
    return {reviews: this.props.reviews};
  },

  render: function () {
    if (this.state.reviews) {
      var ReviewItems = this.state.reviews.reverse().map(function(review) {
        return <ReviewItem key={review.id} review={review} />;
      });

      return(<ul className="review-list">{ReviewItems}</ul>);
    } else {
      return(
        <div className="loading"> Loading reviews... </div>
      );
    }
  }
});

module.exports = ReviewList;
