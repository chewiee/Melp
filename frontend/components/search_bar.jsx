var React = require('react');

var SearchBar = React.createClass({
  render: function () {
    var searchBoxText = "Search for restaurants, reviews, or users";

    return(
      <form className="search-bar group">
        <input
          type='text'
          className="search-box"
          defaultValue={searchBoxText}/>
        <div className="search-button header-button">
          <i className="fa fa-search"></i>
        </div>
      </form>
    );
  }

});

module.exports = SearchBar;
