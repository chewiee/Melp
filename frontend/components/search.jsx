var React = require('react');
var ReactTabs = require('react-tabs');
var Paginate = require('react-paginate');

var RestaurantStore = require('../stores/restaurant_store');
var ApiUtil = require('../util/restaurants_api_util');
var RestaurantIndexItem = require('./restaurants/index_item.jsx');

var Tab = ReactTabs.Tab;
var Tabs = ReactTabs.Tabs;
var TabList = ReactTabs.TabList;
var TabPanel = ReactTabs.TabPanel;

var SearchResultsStore = require('../stores/search_results_store');
var SearchApiUtil = require('../util/search_api_util');

var Search = React.createClass({

  componentDidMount: function() {
    this.listener = SearchResultsStore.addListener(this._onChange);
  },

  getInitialState: function () {
    return {page: 1, query: ""};
  },

  _onChange: function() {
    this.forceUpdate();
  },

  search: function (e) {
    var query = e.target.value;
    SearchApiUtil.search(query, 1);
    console.log(query);

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

  render: function() {
    var searchResults = SearchResultsStore.all().map(function (searchResult) {
      if (searchResult._type === "Restaurant") {
        return <RestaurantIndexItem restaurant={searchResult} />
      } else {
        return <div />
      }
    });

    return (
      <div>
        <h1 className="title">Search!</h1>
        <input type="text" placeholder="wut u want" onKeyUp={ this.search } />
        Displaying {SearchResultsStore.all().length} of
        {SearchResultsStore.meta().totalCount}
        <button onClick={this.nextPage}>Next ></button>

        <ul className="users-index">{ searchResults }</ul>
      </div>
    );
  },


});

module.exports = Search;
