var React = require('react');
var History = require('react-router').History;
var UserSessionApiUtil = require('../util/user_session_api_util');
var CurrentUserStore = require('../stores/current_user_store');

var SignUpLogIn = React.createClass({
  mixins: [History],

  componentDidMount: function () {
    var LogInActive = window.location.hash.includes("#/session/new");

    if (LogInActive) {
      target = "#log-in";

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(100);

      $('.log-in-tab').parent().addClass('active');
      $('.sign-up-tab').parent().removeClass('active');
    }
  },

  signUp: function (e) {
    e.preventDefault();

    var user_params = $(e.currentTarget).serializeJSON();

    UserSessionApiUtil.createUser(user_params, function () {
      this.history.pushState({}, "/welcome/");
    }.bind(this));
  },

  logIn: function (e) {
    e.preventDefault();

    var credentials = $(e.currentTarget).serializeJSON();

    UserSessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/");
    }.bind(this));
  },

  changeTabs: function (e) {
    var clicked_el = e.currentTarget;

    e.preventDefault();

    $(clicked_el).parent().addClass('active');
    $(clicked_el).parent().siblings().removeClass('active');

    target = $(clicked_el).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(200);
  },

  guestLogin: function (e) {
    e.preventDefault();

    var credentials = {user: {email: "guest@email.com", password: "password"}};

    UserSessionApiUtil.login(credentials, function () {
      this.history.pushState({}, "/welcome/");
    }.bind(this));
  },

  // used http://codepen.io/ehermanson/pen/KwKWEv
  render: function () {

    return(
      <div className="sign-up-log-in-form">
        <ul className="tab-group">
          <li className="tab active">
            <a className="tab-button sign-up-tab"
              onClick={this.changeTabs}
              href="#sign-up">{"Sign Up"}</a>
          </li>
          <li className="tab">
            <a className="tab-button log-in-tab"
              onClick={this.changeTabs}
              href="#log-in">{"Log In"}</a>
          </li>
        </ul>

        <div className="tab-content">
          <div id="sign-up">
            <h2> {"Sign Up for Melp"} </h2>

            <form onSubmit={this.signUp}>
              <div className="field-wrap">
                <input
                  type="text"
                  name="user[email]"
                  placeholder="email *"
                  autofocus="true"
                  id="user_email" />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  name="user[password]"
                  placeholder="password *"
                  id="user_password" />

                <input
                  type="password"
                  name="user[password_confirmation]"
                  placeholder="confirm password *"
                  id="user_password_confirmation" />
              </div>

              <button className="form-button"
                type="submit"
                name="register">
                {"register"}
              </button>

            </form>
          </div>

          <div id="log-in">
            <h2> {"Welcome Back"} </h2>
            <form onSubmit = {this.logIn}>
              <div className="field-wrap">
                <input
                  type="text"
                  name="user[email]"
                  placeholder="email"
                  autofocus="true"
                  id="user_email" />
              </div>

              <div className="field-wrap">
                <input
                  type="password"
                  name="user[password]"
                  placeholder="password"
                  id="user_password" />
              </div>
              <button className="form-button"
                type="submit"
                name="login">{"log in"}
              </button>
            </form>

            <button className="form-button"
              id="guest-login"
              onClick={this.guestLogin}>
              {"log in as guest"}
            </button>

          </div>
        </div>
      </div>
    );
  }
});

module.exports = SignUpLogIn;
