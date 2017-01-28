const React = require('react');
const logs = require('../utilities/logsMixin');
const Row = require('react-bootstrap/lib/Row');
const Col = require('react-bootstrap/lib/Col');

const sectionStyle={
  border:"2px solid red",
  minHeight:"200px"
  // height: "400px",
  // width: "100%"

};

const Section = React.createClass({


  name: "Section",
  // mixins: [logs],
  propTypes:{
    title:React.PropTypes.string,
    children: React.PropTypes.node //node is a placeholder and can take any type of variable
  },
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
    <Col xs={12} md={6} lg={4} style={sectionStyle}>
      {this.props.children}
    </Col>
  )

}
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Section
