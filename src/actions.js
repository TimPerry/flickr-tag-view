import jsonp from 'jsonp';

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

const recieveImagesError = (tags, err) => {
    return {
	type: "FETCHED_IMAGES",
	payload: err,
	error: true
    };
};

export const fetchImages = (tags) => {
    return (dispatch) => {
	dispatch(fetchingImages(tags));
	const opts = {
	    param: 'jsoncallback'
	};
	const url = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tags}`;
	jsonp(url, opts, function(err, data) {
	    if(!err) {
		dispatch(receiveImages(tags, json.items));
	    } else {
		dispatch(receiveImagesError(tags, err));
	    }
	});
	
    };
};
