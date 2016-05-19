import React from 'react';
import classnames from 'classnames';

import normalise from 'normalize.css';
import styles from '../styles/app.css';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('london');
    },
    render: function() {
	const {handleClick, images, statusMessage, selectedImageIds} = this.props;
	return (
	    <main>
	    <span className="statusMessage">{statusMessage}</span>
	    <section className="imageGrid" onClick={handleClick}>
	    {images.map(function(image, index) {
		const className = classnames({
		    "imageGrid__image": true,
		    "imageGrid__image--selected": (selectedImageIds.indexOf(image.id) !== -1)
		});
		return <img key={index} src={image.imageURL} className={className} data-id={image.id}/>
	    })}
     	    </section>
	    </main>
	);
    }
});

export default App;
