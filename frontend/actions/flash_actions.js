var AppDispatcher = require('../dispatcher/dispatcher');
var FlashConstants = require('../constants/flash_constants');

var FlashActions = {
  receiveFlash: function(flash) {
    AppDispatcher.dispatch({
      actionType: FlashConstants.RECEIVE_FLASH,
      flash: flash
    });
  }
};

module.exports = FlashActions;
