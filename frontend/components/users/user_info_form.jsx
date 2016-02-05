var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var CurrentUserStore = require('../../stores/current_user_store');

var UserInfoForm = React.createClass({
  mixins: [LinkedStateMixin],
  
  render: function () {
    return (
      <form className="user-info-form group" onSubmit={this.updateUser}>
        <input type='text'
          placeholder='Choose a username' />
        <button className="submit-review">
          {"Submit Review"}
        </button>
      </form>
    );
  }
});

module.exports = UserInfoForm;
