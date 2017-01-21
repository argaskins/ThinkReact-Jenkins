const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
const logs = require('../utilities/logsMixin');

const ovStyle={
  color:"grey"

};

const mytext = "Aqua boogie baby, never learned to swim \
Underwater boogie baby, can't catch the rhythm of the stroke \
Aqua boogie baby, why should I hold my breath \
Underwater boogie baby, feelin' that I might choke";

const Overview = React.createClass({

//-------default API------------------

// getDefaultProps: function(){},
//getInitialState: function(){},
// componentWillMount: function(){},
// componentDidMount: function(){},
//componentWillReceiveProps: function(){},
//shouldComponentUpdate: function(){},
// componentWillUpdate: function(){},

render: function() {
  return (
    <p style={ovStyle}> {mytext}</p>
  )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Overview
