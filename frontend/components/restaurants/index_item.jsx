var React = require('react');
var History = require('react-router').History;
var CurrentUserStore = require('../../stores/current_user_store');

module.exports = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/restaurant/' + this.props.restaurant.id, {});
  },

  addReview: function () {
  },

  render: function () {
    var cuisine_links = this.props.restaurant.cuisines.slice(0,2).map(function (el, idx) {
      return (
        <span key={idx}>
          <a className="cuisine-link" href="#">
            {el.cuisine_name.charAt(0).toUpperCase() + el.cuisine_name.slice(1)}
          </a>
          {idx == 0 ? ", " : ""}
        </span>
      );
    })

    var starHeight = {
      height: (65 - (this.props.restaurant.star_rating_unweighted * 65 / 5)) + "px"
    };
    var dollars = "";
    for (var i = 0; i < this.props.restaurant.price_rating_unweighted; i++) {
      dollars += "$";
    }
    var reviewerThumbs = [
      <div className="reviewer-thumb"></div>,
      <div className="reviewer-thumb"></div>,
      <div className="reviewer-thumb"></div>
    ]

    return(
      <li onMouseEnter={this.props.onHover[0]}
        onMouseLeave={this.props.onHover[1]}
        className="restaurant-index-item">
        <div className="index-item-image"
          onClick={this.showDetail}>
          <img src={this.props.restaurant.default_photo_url} />
        </div>
        <div className="index-item-info">
          <div className="item-name" onClick={this.showDetail}>
            {this.props.restaurant.name}
          </div>
          <div className="item-subtitle">
            <span className="cuisines">
              {cuisine_links}
            </span>
            <span>
              {" - " + this.props.restaurant.address}
            </span>
          </div>
          <div className="item-review">
            {this.props.restaurant.top_review_snippet}
          </div>
        </div>
        <div className="index-item-button"
          onClick={this.addReview}>
          <div className="button-star-rating">
            {this.props.restaurant.star_rating_unweighted}
          </div>
          <div className="bg-star fa fa-star"></div>
          <div className="bg-star-2 fa fa-star" style={starHeight}></div>
          <div className="review-count">{this.props.restaurant.review_count + " reviews"}</div>
        </div>
        <div className="index-item-rating group">
          <div className="price-rating" onClick={this.addReview}>{dollars}</div>
          <div className="reviewer-thumbs group">{reviewerThumbs}</div>
        </div>
      </li>
    );
  }
});
