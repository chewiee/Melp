var RestaurantActions = require('../actions/restaurant_actions');

module.exports = {
  createReview: function (review, callback) {
    $.ajax({
      url: "api/reviews",
      method: "POST",
      data: {review: review},
      success: function (review) {
        RestaurantActions.receiveNewReview(review);
        callback();
      }
    });
  }
};
