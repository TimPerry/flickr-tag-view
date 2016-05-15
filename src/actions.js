import fetch from 'isomorphic-fetch';

const fetchingImages = (tag) => {
    return {
	type: 'FETCHING_IMAGES',
	payload: tag
    };
};

const recieveImages = (tags, images) => {
    return {
	type: "FETCHED_IMAGES",
	payload: images
    };
};

export const fetchImages = (tags) => {
    return (dispatch) => {
	dispatch(fetchingImages(tags));
	return dispatch => {
	    fetch(`http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=cb&tags=${tags}`)
		.then(response => response.json())
		.then(json => dispatch(receiveImages(tags, json)));
	};
    };
};
