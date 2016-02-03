var React = require('react');
var ReviewItem = require('./item.jsx');

var ReviewList = React.createClass({
    getInitialState: function () {
      return ({});
    },

    componentDidMount: function () {
      this.setState({reviews: this.props.reviews});
    },

    componentWillReceiveProps: function () {
      setTimeout(function () {
        this.setState({reviews: this.props.reviews});
      }.bind(this), 250);
    },

    render: function () {
      if (this.state.reviews) {
        var ReviewItems = this.state.reviews.map(function(review) {
          return <ReviewItem key={review.id} review={review} />;
        });

        return(<ul>{ReviewItems}</ul>);
      } else {
        return(
          <div className="loading-reviews"> Loading Reviews </div>
        );
      }
  }
});

module.exports = ReviewList;
