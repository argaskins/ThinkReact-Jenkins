var AppDispatcher = require('../dispatcher/appDispatcher');
var tweetActionsConstants = require('../constants/etweetActions.constants.js');

var ActionTypes = tweetActionsConstants.ActionTypes;

var tweetActions = {

  getNewTweets: function() {

    console.log("action getNewTweets");
    // AppDispatcher.dispatch({
    //   type: ActionTypes.<ACTION_NAME>,
    //   data: data
    // })
  }
};

module.exports = tweetActionsActions;
