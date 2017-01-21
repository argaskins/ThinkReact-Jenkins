var React = require('react');
var logs = require("../utilities/logsMixin.js")
const Section = require('./Section.react.js');
const Banner = require('./Banner.react.js');
// Same as import React from 'react'

const Application = React.createClass({

    name: "Application",
    mixins: [logs],

    render: function() {
        return (
            <div class='container-fluid'>
                <Banner></Banner>
                <Section>1</Section>
                <Section>2</Section>
                <Section>3</Section>
                <Section>4</Section>
            </div>
        );
    }

});

module.exports = Application;
