var React = require('react');
var ReviewItem = require('./item.jsx');
var RestaurantStore = require('../../stores/restaurant_store');

var ReviewList = React.createClass({
  render: function () {
    if (this.props.reviews) {
      var ReviewItems = this.props.reviews.reverse().map(function(review) {
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
