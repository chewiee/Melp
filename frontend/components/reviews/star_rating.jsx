var React = require('react');

module.exports = React.createClass({
  render: function () {
    var stars = new Array(5);

    for (var i = 1; i <= 5; i++) {
      if (i <= this.props.stars) {
        stars[i - 1] = <i className="fa fa-star filled-star" key={i}></i>;
      } else {
        stars[i - 1] = <i className="fa fa-star empty-star" key={i}></i>;
      }
    }

    return (
      <span>{stars}</span>
    );
  }
});
