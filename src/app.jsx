import React from 'react';
import classnames from 'classnames';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('test');
    },
    render: function() {
	return (
		<main>
		<section class="imageGrid">
		{this.props.images.map(function(image, index) {
		    const className = classnames({
			"imageGrid__image": true,
			"iamgeGrid__image--selected": image.selected
		    });
		    return <img key={index} src={image.imageURL} className="imageGrid__image"/>
		})}
     	    </section>
		</main>
	);
    }
});

export default App;
