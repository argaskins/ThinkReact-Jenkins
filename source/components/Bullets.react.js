const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
const logs = require('../utilities/logsMixin');

var bulletsArray = ["One Mississippi", "Two Mississippi", "Three Mississippi", "Four Mississippi"]

const Bullets = React.createClass({

//-------default API------------------

// getDefaultProps: function(){},
//getInitialState: function(){},
// componentWillMount: function(){},
// componentDidMount: function(){},
//componentWillReceiveProps: function(){},
//shouldComponentUpdate: function(){},
// componentWillUpdate: function(){},

render: function() {
  var bull;

  if (bulletsArray.length > 0) {
    bull = bulletsArray.map(function(val, idx){
      return (
        <Row key={idx}><Col xs={12}>~{val}</Col></Row>
      )
    })
  }

  return (
    <div>
      <Row>
        {bull}
      </Row>
  </div>
  )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Bullets
