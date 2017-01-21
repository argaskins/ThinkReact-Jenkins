const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
const logs = require('../utilities/logsMixin');

var imgArray = ["./img/sf1.jpg", "./img/sf2.jpg", "./img/sf3.jpg", "./img/sf4.jpg"]

const imageStyle ={
  width: "100%",
  height: "auto"

}
const Images = React.createClass({

//-------default API------------------

// getDefaultProps: function(){},
//getInitialState: function(){},
// componentWillMount: function(){},
// componentDidMount: function(){},
//componentWillReceiveProps: function(){},
//shouldComponentUpdate: function(){},
// componentWillUpdate: function(){},

render: function() {
  var imgs;

  if (imgArray.length > 0) {
    imgs = imgArray.map(function(val, idx){
      return (
        <Col key={idx} xs={6}><img style={imageStyle} src={val}></img></Col>
      )
    })
  }

  return (
      <Row >
        {imgs}
      </Row>
    )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Images
