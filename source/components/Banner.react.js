const React = require('react');
const Banner  = React.createClass({

  name: "Section",
  mixins: [logs],
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
    <div>Banner</div>
  )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Banner
