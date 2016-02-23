var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CurrentUserStore = require('../../stores/current_user_store');

var UserInfoForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function () {
    if (this.props.user) {
      return {
        username: this.props.user.username,
        address: this.props.user.address,
        city: this.props.user.city,
        zipcode: this.props.user.zipcode,
        gender: this.props.user.gender,
        birthdate: this.props.user.birthdate
      };
    } else {
      return {
        username: '',
        address: '',
        city: '',
        zipcode: '',
        gender: '',
        birthdate: ''
      };
    }
  },

  onGenderChanged: function (e) {
    this.setState({
      gender: e.currentTarget.value
    });
  },

  updateUser: function (e) {
    e.preventDefault();
    console.log(this.state);
  },

  render: function () {
    return (
      <form className="user-info-form group" onSubmit={this.updateUser}>
        <input className="username-input"
          valueLink={this.linkState("username")}
          type='text'
          placeholder='Choose a username' />
        <input className='zipcode-input'
          valueLink={this.linkState("zipcode")}
          type='text'
          placeholder="Enter your zipcode" />
        <input className='city-input'
          valueLink={this.linkState("city")}
          type='text'
          placeholder="Enter your city" />
        <input className='address-input'
          valueLink={this.linkState("address")}
          type='text'
          placeholder="Enter your address" />
        <div className="gender-selector group">
          <label> M </label>
          <input className='gender-input-female'
            type="radio"
            name="gender"
            checked={this.state.gender === "F"}
            onChange={this.onGenderChanged}
            value="F" />
          <label> F </label>
          <input className='gender-input-male'
            type="radio"
            name="gender"
            checked={this.state.gender === "M"}
            onChange={this.onGenderChanged}
            value="M" />
        </div>
        <input className='birthdate-input'
          valueLink={this.linkState("birthdate")}
          type='text'
          placeholder="Enter your birthdate" />
        <button className="lets-go-button">
          {"Let's go!"}
        </button>
      </form>
    );
  }
});

module.exports = UserInfoForm;
