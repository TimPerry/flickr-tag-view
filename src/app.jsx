import React from 'react';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('test');
    },
    render: function() {
	return (
		<main>
		<section class="imageGrid">
		{this.props.images.map(function(image, index) {
		    return <img key={index} src={image.imageURL} className="imageGrid__image"/>
		})}
     	    </section>
		</main>
	);
    }
});

export default App;
