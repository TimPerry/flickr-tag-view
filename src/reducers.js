import update from 'react-addons-update';

const initialState = {
  statusMessage: '',
  images: []
};

const actionHandlers = {
  "FETCH_IMAGES_SUCCESS": (state, action) => update(state, {
    images: {
	    $set: action.payload.map(function(item) {
		    return {
          imageURL: item.media.m,
          selected: false,
		      id: item.link
		    };
      })
	  },
	  statusMessage: {
	    $set: `Show results for tags: ${action.meta.tags}`
	  }
  }),
  "FETCHED_IMAGES_ERROR": (state, action) => update(state, {
	  statusMessage: {
	    $set: `Failed to load images tagged: ${action.meta.tags}`
	  }
  }),
  "FETCH_IMAGES_PENDING": (state, action) => update(state, {
	  statusMessage: {
	    $set: `Searching for images tagged: ${action.payload}`
	  }
  }),
  "TOGGLE_IMAGE_SELECTED": (state, action) =>  update(state, {
	  images: {
	    $set: state.images.map(function(image) {
		    if (action.payload === image.id) {
		      image.selected = !image.selected;
		    }
		    return image;
	    })
	  }
  })
};

export default (state = initialState, action) => {
  if(actionHandlers[action.type]) {
	  return actionHandlers[action.type](state, action);
  }
  return state;
};
