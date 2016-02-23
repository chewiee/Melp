var React = require('react');
var RestaurantApiUtil = require('../../util/restaurants_api_util');
var Dropzone = require('react-dropzone');

var RestaurantPhotoForm = React.createClass({
  getInitialState: function () {
    return ({
      imageFile: null,
      imageUrl: ""
    });
  },

  changeFile: function (files) {
    var reader = new FileReader();
    var file = files[0];

    reader.onloadend = function () {
      this.setState({ imageFile: file, imageUrl: reader.result });
    }.bind(this);

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageFile: null, imageUrl: "" });
    }
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var formData = new FormData();

    formData.append("photo[image]", this.state.imageFile);

    RestaurantApiUtil.uploadRestaurantPhoto(this.props.restaurant.id, formData, this.resetForm);
  },

  resetForm: function () {
    this.props.closePhotoForm();
  },

  render: function () {
    var validPhoto = !!this.state.imageFile;

    return (
      <div className="screen-blur">
        <div className="photo-form-container">

          <form className="group" onSubmit={this.handleSubmit}>
              {!this.state.imageFile ?
                <Dropzone className="restaurant-dropzone"
                  ref="dropzone"
                  onDrop={this.changeFile}>
                  <div>
                    Drag and drop a photo
                  </div>
                </Dropzone>
              : null}

                {!!this.state.imageFile ?
                  <div>
                    <div className="image-preview-container">
                      <img
                        className="preview-image"
                        src={this.state.imageUrl}
                      />
                    </div>
                  <button
                    className={validPhoto ? "submit-photo-button" : "submit-photo-button disabled"}>
                    Add Photo
                  </button>
                  </div>
                : null}
          </form>

        <div className="photo-cancel-button" onClick={this.props.closePhotoForm}>
          <i className="fa fa-times"></i>
        </div>
      </div>
    </div>
    );
  }
});

module.exports = RestaurantPhotoForm;
