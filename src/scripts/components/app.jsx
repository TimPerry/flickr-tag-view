import React from 'react';
import classnames from 'classnames';

import normalise from 'normalize.css';
import styles from '../../styles/imageTagView.css';

import StatusMessage from './statusMessage';
import ImageGrid from './imageGrid';

export default React.createClass({
    componentWillMount: function() {
	this.props.fetchImages('london');
    },
    render: function() {
	const {handleClick, images, statusMessage, selectedImageIds} = this.props;
	return (
	    <main class="imageTagView">
	    <StatusMessage message={statusMessage}/>
	    <ImageGrid images={images} selectedImageIds={selectedImageIds} handleClick={handleClick}/>
	    </main>
	);
    }
});