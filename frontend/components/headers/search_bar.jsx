module.exports = SearchBar;

var React = require('react');
var ReactTabs = require('react-tabs');
var Paginate = require('react-paginate');
var History = require('react-router').History;

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var SearchResultsStore = require('../../stores/search_results_store');
var SearchApiUtil = require('../../util/search_api_util');

var SearchBar = React.createClass({
  mixins: [History],

  componentDidMount: function() {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return {page: 1, query: "freddie"};
  },

  _onChange: function() {
    this.forceUpdate();
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);

    this.setState({page: 1, query: query});
  },

  nextPage: function () {
    var nextPage = this.state.page + 1;
    SearchApiUtil.search(this.state.query, nextPage);

    this.setState({page: nextPage});
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  showSearch: function () {
    this.history.pushState(null, '/search/', {});
  },

  render: function() {
    var restaurants = [];
    var reviews = [];
    var users = [];
    var searchResults = SearchResultsStore.all().map(function (searchResult) {
      if (searchResult._type === "Restaurant") {
        restaurants.push(searchResult);
      } else if (searchResult._type === "Review") {
        reviews.push(searchResult);
      } else {
        users.push(searchResult);
      }
    });

    return(
      <form className="search-bar group">
        <input
          type='text'
          className="search-box"
          placeholder={"Search for restaurants, reviews, and users"}
          autofocus="true"
          onKeyUp={ this.search }/>
        <div className="search-button header-button" onClick={this.showSearch}>
          <i className="fa fa-search"></i>
        </div>
      </form>
    );
  },


});

module.exports = SearchBar;
