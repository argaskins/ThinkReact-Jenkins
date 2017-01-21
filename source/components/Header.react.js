const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
const logs = require('../utilities/logsMixin');
const headerStyle={
  color:"blue"

}

const Header = React.createClass({

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
    <h2 style={headerStyle}> {this.props.children}</h2>
  )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Header
