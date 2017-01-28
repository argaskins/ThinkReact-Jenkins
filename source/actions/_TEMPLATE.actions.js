var AppDispatcher = require('../dispatcher/appDispatcher');
var <NAME>Constants = require('../constants/e<NAME>.constants.js');

var ActionTypes = <NAME>Constants.ActionTypes;

var <NAME>Actions = {

  <functionName: function(data) {

    AppDispatcher.dispatch({
      type: ActionTypes.<ACTION_NAME>,
      data: data
    })
  }
};

module.exports = <NAME>Actions;
