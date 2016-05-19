import React from 'react';
import classnames from 'classnames';

import styles from '../../styles/imageGrid.css';

export default React.createClass({
    render: function() {
	const {handleClick, images, selectedImageIds} = this.props;
	return (
	    <section className="imageGrid imageTagView__imageGrid" onClick={handleClick}>
	    {images.map(function(image, index) {
		const className = classnames({
		    "imageGrid__image": true,
		    "imageGrid__image--selected": (selectedImageIds.indexOf(image.id) !== -1)
		});
		return <img key={index} src={image.imageURL} className={className} data-id={image.id}/>
	    })}
     	    </section>
	);
    }
});
