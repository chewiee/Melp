var React = require('react');
var StarRating = require('./star_rating.jsx');

module.exports = React.createClass({
  render: function() {
    var r = this.props.review;

    var genderIcon;
    if (r.author.gender === "F") {
      genderIcon = <i className="fa fa-female"></i>;
    } else if (r.author.gender === "M") {
      genderIcon = <i className="fa fa-male"></i>;
    }

    var ageString = "";
    if (r.author.age !== "Unknown") {
      ageString = r.author.age;
    }

    var dateObject = new Date(Date.parse(r.updated_at));
    var dateString = dateObject.toLocaleDateString("en-US");

    return(
      <li className="group">
        <img className="author-avatar" />
        <div className="author-info">
          <div className="author-name">
            {r.author.username}
          </div>
          <div className="author-city">
            {r.author.city}
          </div>
          <span className="author-gender">
            {genderIcon}
          </span>
          <span className="author-age">
            {ageString}
          </span>
          <div className="author-reviews">
            {r.author.review_count + " reviews"}
          </div>
        </div>
        <div className="review-info">
          <span className="review-rating">
            <StarRating stars={r.star_rating} />
          </span>
          <span className="review-date">
            {dateString}
          </span>
          <div className="review-snippet">
            {r.snippet}
          </div>
        </div>

      </li>
    );
  }
});
