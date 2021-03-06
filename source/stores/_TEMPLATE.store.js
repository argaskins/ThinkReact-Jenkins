var AppDispatcher = require('../dispatcher/appDispatcher');
var <NAME>Constants = require('../constants/<NAME>.constants');

var React = require('react');
var assign = require('object-assign');

var ActionTypes = <NAME>Constants.ActionTypes;

//Internal object of fields
var _store = {};

function <SET_SOMETHING>(data) {

  _store.SOMETHING = data;
}

//Merge our store with Node's Event Emitter
var <NAME>Store = assign({}, EventEmitter.prototype, {

  getSOMETHING: function() {
    return _store.SOMETHING;
  },
  emitChange: function() {
    this.emit('change');
  },

  addChangeListener: function(callback){
    this.on('change', callback);
  }
  addChangeListener: function(callback){
    this.removeListener('change', callback);
  }
});

//Register dispatcher callback
AppDispatcher.register(function(action)){
// var text;
// Define what to do for certain Actions
console.log(action.data);
switch (action.type) {
  case ActionTypes.ACTIONNAME:
    <SOME_ACTION>(action.data);
    break;

  default:
    return true;
}
//If action was acted upon, emit change Event
<NAME>Store.emitChange();

return true;

});

module.exports = <NAME>Store;
