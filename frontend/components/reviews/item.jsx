var React = require('react');

module.exports = React.createClass({
  render: function() {
    var r = this.props.review;

    return(
      <li>
        <div className="author-info">
          <img className="author-avatar" />
          <div className="author-name">
            {r.author.username}
          </div>
          <div className="author-city">
            {r.author.city}
          </div>
          <div className="author-gender">
            {r.author.gender}
          </div>
          <div className="author-age">
            {r.author.age}
          </div>
          <div className="author-reviews">
            {r.author.review_count + " reviews"}
          </div>
        </div>
        <div className="review-info">
          <div className="review-rating">
            {r.star_rating}
          </div>
          <div className="review-snippet">
            {r.snippet}
          </div>
        </div>

      </li>
    );
  }
});
