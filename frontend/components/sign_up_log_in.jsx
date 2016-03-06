var React = require('react');
var History = require('react-router').History;
var UserSessionApiUtil = require('../util/user_session_api_util');
var CurrentUserStore = require('../stores/current_user_store');
var FlashStore = require('../stores/flash_store');
var FlashActions = require('../actions/flash_actions');

var SignUpLogIn = React.createClass({
  mixins: [History],

  getInitialState: function () {
    return {flash: FlashStore.all()};
  },

  componentDidMount: function () {
    this.flashListener = FlashStore.addListener(this._updateFlash);

    var LogInActive = window.location.hash.includes("#/session/new");

    if (LogInActive) {
      target = "#log-in";

      $('.tab-content > div').not(target).hide();

      $(target).fadeIn(100);

      $('.log-in-tab').parent().addClass('active');
      $('.sign-up-tab').parent().removeClass('active');
    }
  },

  componentWillUnmount: function () {
    this.flashListener.remove();
    FlashActions.receiveFlash([]);
  },

  _updateFlash: function () {
    this.setState({flash: FlashStore.all()});
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
    this.setState({
      flash: [],
      
    });

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
    var errors = "";
    var borderStyle = "";
    var errorHeight = 0
    if (this.state.flash.length > 0) {
      errors = [];
      if (typeof this.state.flash === "string") {
        errorHeight = 40;
        errors = <li>{this.state.flash}</li>
      } else {
        errorHeight = 20 + (this.state.flash.length * 20);
        for (var i = 0; i < this.state.flash.length; i++) {
          errors.push(<li>{this.state.flash[i]}</li>);
        }
      }
      borderStyle = "2px solid red";
    }
    var errorStyle = {
      border: borderStyle,
      height: errorHeight + "px"
    }

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

              <div className="errors sign-up-errors" style={errorStyle}>
                <ul className="error-list">{errors}</ul>
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

              <div className="errors log-in-errors" style={errorStyle}>
                <ul className="error-list">{errors}</ul>
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
