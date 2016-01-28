var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var HeaderNav = require('./components/header_nav.jsx');
var RestaurantIndex = require('./components/restaurants/index.jsx');
var RestaurantDetail = require('./components/restaurants/detail.jsx');

var App = React.createClass({
  render: function () {
    return(
      <div>
        <HeaderNav />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={RestaurantIndex} />
    <Route path="restaurant/:restaurantId" component={RestaurantDetail} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
