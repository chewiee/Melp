var React = require('react');

var SearchBar = React.createClass({
  render: function () {
    return(
      <form className="search-bar group">
        <input type='text' id="search-box"/>
        <div className="search-button">
          <i className="fa fa-search"></i>
        </div>
      </form>
    );
  }

});

module.exports = SearchBar;
