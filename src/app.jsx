import React from 'react';
import classnames from 'classnames';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('test');
    },
    render: function() {
	const {handleClick, images} = this.props;
	return (
		<main>
		<section class="imageGrid" onClick={handleClick}>
		{images.map(function(image, index) {
		    const className = classnames({
			"imageGrid__image": true,
			"imageGrid__image--selected": image.selected
		    });
		    return <img key={index} src={image.imageURL} className={className} data-index={index}/>
		})}
     	    </section>
		</main>
	);
    }
});

export default App;
