import React from 'react';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('test');
    },
    render: function() {
	return (
		<main>
		<section>
		{this.props.images.map(function(image, index) {
		    return <img key={index} src={image.imageURL}/>
		})}
     	    </section>
		</main>
	);
    }
});

export default App;
