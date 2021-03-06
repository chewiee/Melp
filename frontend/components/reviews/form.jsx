var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ReviewApiUtil = require('../../util/reviews_api_util');

var ReviewForm = React.createClass({
  mixins: [LinkedStateMixin],


  getInitialState: function () {
    return {
      body: '',
      star_rating: 0,
      price_rating: 0,
      restaurant_id: this.props.restaurantId
    };
  },

  getStarRatingInput: function () {
    var stars = new Array(5);

    for (var i = 1; i <= 5; i++) {
      if (i <= this.state.star_rating) {
        stars[i - 1] = <i className="fa fa-star filled-star"
          key={i} id={"star" + i} onClick={this.handleStarClick} onMouseEnter={this.handleStarHover}></i>;
      } else {
        stars[i - 1] = <i className="fa fa-star empty-star"
          key={i} id={"star" + i} onClick={this.handleStarClick} onMouseEnter={this.handleStarHover}></i>;
      }
    }

    return(
      <div className="review-star-rating-input" onMouseLeave={this.resetStars}>
        {stars}
      </div>
    );
  },

  handleStarClick: function (e) {
    this.setState({star_rating: $(e.target)[0].id.slice(-1)});
  },

  handleStarHover: function (e) {
    var star = $(e.target);

    star.removeClass("empty-star");
    star.addClass("filled-star");
    star.prevAll().removeClass("empty-star");
    star.prevAll().addClass("filled-star");
    star.nextAll().removeClass("filled-star");
    star.nextAll().addClass("empty-star");
  },

  resetStars: function (e) {
    var stars = $(e.currentTarget).children();

    stars.each(function (idx, star) {
      starIdx = idx + 1;
      if (starIdx <= this.state.star_rating) {
        $(star).removeClass("empty-star");
        $(star).addClass("filled-star");
      } else {
        $(star).addClass("empty-star");
        $(star).removeClass("filled-star");
      }
    }.bind(this));
  },

  getDollarRatingInput: function () {
    var dollars = new Array(3);

    for (var i = 1; i <= 3; i++) {
      if (i <= this.state.price_rating) {
        dollars[i - 1] = <i className="fa fa-usd filled-dollar"
          key={i} id={"dollar" + i} onClick={this.handleDollarClick} onMouseEnter={this.handleDollarHover}></i>;
      } else {
        dollars[i - 1] = <i className="fa fa-usd empty-dollar"
          key={i} id={"dollar" + i} onClick={this.handleDollarClick} onMouseEnter={this.handleDollarHover}></i>;
      }
    }

    return(
      <div className="review-dollar-rating-input" onMouseLeave={this.resetDollars}>
        {dollars}
      </div>
    );
  },

  handleDollarClick: function (e) {
    this.setState({price_rating: $(e.target)[0].id.slice(-1)});
  },

  handleDollarHover: function (e) {
    var dollar = $(e.target);

    dollar.removeClass("empty-dollar");
    dollar.addClass("filled-dollar");
    dollar.prevAll().removeClass("empty-dollar");
    dollar.prevAll().addClass("filled-dollar");
    dollar.nextAll().removeClass("filled-dollar");
    dollar.nextAll().addClass("empty-dollar");
  },

  resetDollars: function (e) {
    var dollars = $(e.currentTarget).children();

    dollars.each(function (idx, dollar) {
      dollarIdx = idx + 1;
      if (dollarIdx <= this.state.price_rating) {
        $(dollar).removeClass("empty-dollar");
        $(dollar).addClass("filled-dollar");
      } else {
        $(dollar).addClass("empty-dollar");
        $(dollar).removeClass("filled-dollar");
      }
    }.bind(this));
  },

  createReview: function (e) {
    e.preventDefault();

    ReviewApiUtil.createReview(this.state, function() {
      this.forceUpdate();
    }.bind(this));

  },

  render: function () {
    var starRatingInput = this.getStarRatingInput();
    var dollarRatingInput = this.getDollarRatingInput();

    return(
      <form className="review-form group" onSubmit={this.createReview}>
        {starRatingInput}
        {dollarRatingInput}
        <textarea
          id='review-body'
          valueLink={this.linkState("body")}
          placeholder={"Write your review here."}>
        </textarea>
        <button className="submit-review">
          {"Submit Review"}
        </button>
      </form>
    );
  }
});

module.exports = ReviewForm;
