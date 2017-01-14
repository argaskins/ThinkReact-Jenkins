
module.exports = {

  log: function(method, args) {
    var msgObject = {};
    msgObject.name = this.name + '::' + method;
    msgObject.args = args;
    msgObject.datetime = new Date();
    console.log(msgObject);
    //This would be an ideal place to put a call to an external
    // logs database as appropriate.
  },

//-------default API------------------

componentWillMount: function(){
  this.log('componentWillMount', arguments);
},
componentDidMount: function(){
  this.log('componentWillUpdate', arguments);
},
componentWillReceiveProps: function(){
  this.log('componentDidMount', arguments);
},
shouldComponentUpdate: function(){
  this.log('shouldComponentUpdate', arguments);
},
componentWillUpdate: function(){
  this.log('componentWillUpdate', arguments);
},

componetDidUpdate: function(){
  this.log('componetDidUpdate', arguments);
},
compoentWillUnmount: function(){
  this.log('compoentWillUnmount', arguments);
},
};
