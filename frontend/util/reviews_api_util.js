var ReviewActions = require('../actions/review_actions');

module.exports = {
  fetchAllReviews: function () {
    $.ajax({
      url: "api/reviews",
      success: function (reviews) {
        ReviewActions.receiveAllReviews(reviews);
      }
    });
  },

  fetchOneReview: function (id) {
    $.ajax({
      url: "api/reviews/" + id,
      success: function (review) {
        ReviewActions.receiveOneReview(review);
      }
    });
  },

  createReview: function (review, callback) {
    $.ajax({
      url: "api/reviews",
      method: "POST",
      data: {review: review},
      success: function (review) {
        ReviewActions.receiveOneReview(review);
        callback(review.id);
      }
    });
  }
};
