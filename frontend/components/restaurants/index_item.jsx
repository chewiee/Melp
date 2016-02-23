var React = require('react');
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/restaurant/' + this.props.restaurant.id, {});
  },

  render: function () {

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
              {"filler cuisine"}
            </span>
            <span>
              {" - " + this.props.restaurant.address}
            </span>
          </div>
          <div className="item-review">
            {"...this is filler review text..."}
          </div>
        </div>
        <div className="index-item-button"
          onClick={this.addReview}>
        </div>
        <div className="index-item-rating group">
          <div className="star-rating"></div>
          <div className="price-rating"></div>
        </div>
      </li>
    );
  }
});
