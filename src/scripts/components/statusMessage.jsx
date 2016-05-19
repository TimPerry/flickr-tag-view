import React from 'react';

import styles from '../../styles/statusMessage.css';

export default React.createClass({
    render: function() {
	const {message} = this.props;
	return (
	    <span className="statusMessage">{message}</span>
	);
    }
});