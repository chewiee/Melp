var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var HeaderNav = require('./components/header_nav.jsx');
var Content = require('./components/content.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <HeaderNav />
        <Content />
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
