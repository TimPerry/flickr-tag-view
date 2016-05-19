import React from 'react';
import classnames from 'classnames';

import normalise from 'normalize.css';

import imageTagViewStyles from '../styles/imageTagView.css';
import imageGridView from '../styles/imageGrid.css';

import StatusMessage from './statusMessage';

var App = React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('london');
    },
    render: function() {
	const {handleClick, images, statusMessage, selectedImageIds} = this.props;
	return (
	    <main class="imageTagView">
	    <StatusMessage message={statusMessage}/>
	    <section className="imageGrid imageTagView__imageGrid" onClick={handleClick}>
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
