var AppDispatcher = require('../dispatcher/appDispatcher');
var tweetsConstants = require('../constants/tweets.constants');
var EventEmitter = require('events').EventEmitter;
var React = require('react');
var assign = require('object-assign');

var ActionTypes = tweetsConstants.ActionTypes;

//Internal object of fields
var _store = {};

function loadNewTweets(tweetsArray) {

  _store.tweets = tweetsArray;
}

//Merge our store with Node's Event Emitter
var tweetsStore = assign({}, EventEmitter.prototype, {

  getTweets: function() {
    return _store.tweets;
  },
  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  },

  removeChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

//Register dispatcher callback
AppDispatcher.register(function(action){
// var text;
// Define what to do for certain Actions
console.log("3 - Dispatch Heard");
switch (action.type) {
  case ActionTypes.LOAD_TWEETS:
    loadNewTweets(action.data);
    break;

  default:
    return true;
}
//If action was acted upon, emit change Event
tweetsStore.emitChange();

return true;

});

module.exports = tweetsStore;
