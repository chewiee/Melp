var React = require('react');
var History = require('react-router').History;

module.exports = React.createClass({
  mixins: [History],

  showDetail: function () {
    this.history.pushState(null, '/restaurant/' + this.props.restaurant.id, {});
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
            {"...this is filler review text..."}
          </div>
        </div>
        <div className="index-item-button"
          onClick={this.addReview}>
        </div>
        <div className="index-item-rating group">
          <div className="price-rating"></div>
        </div>
      </li>
    );
  }
});
