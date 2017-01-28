const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
import textBlock from "./textBlock.react.js";
import tweetActions from "../actions/tweets.actions.js";
const logs = require('../utilities/logsMixin');

const Tweets = React.createClass({

  name: "Tweets",
  mixins: [logs],
  propTypes: {
    children:React.PropTypes.node
  },
//-------default API------------------

// getDefaultProps: function(){},
//getInitialState: function(){},
// componentWillMount: function(){},
componentDidMount: function(){

  //TODO add tweet change listener

  tweetActions.getNewTweets();
},
//componentWillReceiveProps: function(){},
//shouldComponentUpdate: function(){},
// componentWillUpdate: function(){},

render: function() {
  return (
    <div>
      {textBlock("today", "some Text", "@jwesleye")}
    </div>
  )

},
// componetDidUpdate: function(){},
// compoentWillUnmount: function(){}
});

module.exports = Tweets
