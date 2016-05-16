import jsonp from 'jsonp';

const fetchingImages = (tag) => {
    return {
	type: 'FETCHING_IMAGES',
	payload: tag
    };
};

const receiveImages = (tags, images) => {
    return {
	type: "FETCHED_IMAGES",
	payload: images,
	meta: {
	    tags
	}
    };
};

const receiveImagesError = (tags, err) => {
    return {
	type: "FETCHED_IMAGES",
	payload: err,
	error: true,
	meta: {
	    tags
	}
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
		dispatch(receiveImages(tags, data.items));
	    } else {
		dispatch(receiveImagesError(tags, err));
	    }
	});
	
    };
};
