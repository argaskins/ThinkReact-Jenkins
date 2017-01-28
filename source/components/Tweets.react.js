const React = require('react');

const Row = require('react-bootstrap/lib/row');
const Col = require('react-bootstrap/lib/Col');
import textBlock from "./textBlock.react.js";
import tweetsActions from "../actions/tweets.actions.js";
import TweetsStore from "../stores/Tweets.store.js"
const logs = require('../utilities/logsMixin');

const Tweets = React.createClass({

  name: "Tweets",
  mixins: [logs],
  propTypes: {
    children:React.PropTypes.node
  },

  tweetsStoreChange:function() {
    var newTweets = TweetsStore.getTweets();
    console.log('5 - tweetsStoreChange', newTweets);

    this.setState({
      tweetData:newTweets
    })
  },
//-------default API------------------

// getDefaultProps: function(){},
getInitialState: function(){
  return({tweetData:[]})
},
// componentWillMount: function(){},
componentDidMount: function(){

  TweetsStore.addChangeListener(this.tweetsStoreChange);

  tweetsActions.getNewTweets();
},
//componentWillReceiveProps: function(){},
// shouldComponentUpdate: function(){ return true},
// componentWillUpdate: function(){},

render: function() {

  var jsxTweets;
  console.log(this.state.tweetData);
  jsxTweets = this.state.tweetData.map(function(val,idx){
    console.log(val,idx);
    return <div key={idx}>{textBlock(val.date, val.text, val.user)}</div>
  })

  return (
    <div>
      Test
      {jsxTweets}
      Test
    </div>
  )

},
// componetDidUpdate: function(){},
compoentWillUnmount: function(){
  TweetsStore.removeChangeListener(this.tweetsStoreChange);
}
});

module.exports = Tweets
