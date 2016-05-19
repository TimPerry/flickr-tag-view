import update from 'react-addons-update';

const initialState = {
    statusMessage: '',
    images: [],
    selectedImageIds: []
};

const buildImage = (item) => {
    return {
	imageURL: item.media.m,
	selected: false,
	id: item.link
    };
};

const addItemOrRemoveIfAlreadyExists = (item) => (items) => {
    const index = items.indexOf(item);
    if (index !== -1) {
	return update(items, {
	    $splice: [[index, 1]]
	});
    }
    return update(items, {
	$push: [item]
    });
};

const actionHandlers = {
    "FETCH_IMAGES_SUCCESS": (state, action) => update(state, {
	images: {
	    $set: action.payload.map(buildImage)
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
    "TOGGLE_IMAGE_SELECTED": (state, action) => update(state, {
	selectedImageIds: {
	    $apply: addItemOrRemoveIfAlreadyExists(action.payload)
	}
    }),
    "SET_SELECTED_IMAGE_IDS": (state, action) => update(state, {
	selectedImageIds: {
	    $set: action.payload
	}
    })
};

export default (state = initialState, action) => {
    if(actionHandlers[action.type]) {
	return actionHandlers[action.type](state, action);
    }
    return state;
};
