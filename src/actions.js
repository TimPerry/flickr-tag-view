import jsonp from 'jsonp';

const fetchImagesPending = (tag) => {
  return {
	  type: 'FETCH_IMAGES_PENDING',
	  payload: tag
  };
};

const fetchImagesSuccess = (tags, images) => {
  return {
	  type: "FETCH_IMAGES_SUCCESS",
	  payload: images,
	  meta: {
	    tags
	  }
  };
};

const fetchImagesError = (tags, err) => {
  return {
	  type: "FETCH_IMAGES_ERROR",
	  payload: err,
	  error: true,
	  meta: {
	    tags
	  }
  };
};

export const fetchImages = (tags) => {
  return (dispatch) => {
	  dispatch(fetchImagesPending(tags));
	  const opts = {
	    param: 'jsoncallback'
	  };
	  const url = `http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=${tags}`;
	  jsonp(url, opts, function(err, data) {
	    if(!err) {
		    dispatch(fetchImagesSuccess(tags, data.items));
	    } else {
		    dispatch(fetchImagesError(tags, err));
	    }
	  });
	  
  };
};

export const toggleImageSelected = (evt) => {
  return {
	  type: 'TOGGLE_IMAGE_SELECTED',
	  payload: evt.target.dataset.id
  };
};
