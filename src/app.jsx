import React from 'react';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('test');
    },
    render: function() {
	return <div>Hello {this.props.name}</div>;
    }
});

export default App;
