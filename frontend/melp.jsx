var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var IndexRoute = require('react-router').IndexRoute;

var HeaderNav = require('./components/header_nav.jsx');
var RestaurantIndex = require('./components/restaurants/index.jsx');
var RestaurantDetail = require('./components/restaurants/detail.jsx');
var SignUpLogIn = require('./components/sign_up_log_in.jsx');
var ReviewList = require('./components/reviews/list.jsx');

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
    <Route path="restaurant/:restaurantId" component={RestaurantDetail}>
      <IndexRoute component={ReviewList} />
    </Route>
    <Route path="users/new" component={SignUpLogIn} />
    <Route path="session/new" component={SignUpLogIn} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.getElementById('root'));

  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('modal-holder')
  );
});
