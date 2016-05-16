import React from 'react';
import classnames from 'classnames';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('london');
    },
    render: function() {
	const {handleClick, images, statusMessage} = this.props;
	return (
	    <main>
	    <span>{statusMessage}</span>
	    <section class="imageGrid" onClick={handleClick}>
	    {images.map(function(image, index) {
		const className = classnames({
		    "imageGrid__image": true,
		    "imageGrid__image--selected": image.selected
		});
		return <img key={index} src={image.imageURL} className={className} data-id={image.id}/>
	    })}
     	    </section>
	    </main>
	);
    }
});

export default App;
