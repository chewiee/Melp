var React = require('react');
var ReviewItem = require('./item.jsx');

var ReviewList = React.createClass({
    render: function () {
      if (this.props.reviews) {
        var ReviewItems = this.props.reviews.map(function(review) {
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
