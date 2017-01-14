var React = require('react');
var log = require("../utilities/logsMixin.js")
// Same as import React from 'react'

const Application = React.createClass({

  name: "Application",
  mixins: [log],
  
  render:function(){
      return(<div>React Application Component</div>);
  }

});

module.exports = Application;
