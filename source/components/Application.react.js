var React = require('react');
var logs = require("../utilities/logsMixin.js")
const Section = require('./Section.react.js');
const Banner = require('./Banner.react.js');
const Overview = require('./Overview.react.js');
// const header = require('./textHeader.react.js');  //Stateless (Static) component.  Thats why it's lowercase.
const Bullets = require('./Bullets.react.js');
const Header = require('./Header.react.js');
const Images = require('./Images.react.js');
const Tweets = require('./Tweets.react.js')
// Same as import React from 'react'

const Application = React.createClass({

    name: "Application",
  //  mixins: [logs],

    render: function() {
        return (
            <div className='container-fluid'>
                <Banner></Banner>
                <Section>
                  <Header>Overview</Header>
                    <Overview />
                </Section>
                <Section>
                  <Header>Bullets</Header>
                  <Bullets />
                </Section>
                <Section>
                  <Header>Photos</Header>
                    <Images />
                </Section>
                <Section>
                  <Header>Tweets</Header>
                  <Tweets />
                </Section>
            </div>
        );
    }

});

module.exports = Application;
