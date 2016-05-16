const initialState = {
    images: []
};

const reducer = (state = initialState, action) => {
    if (action.type === 'FETCHED_IMAGES') {
        return {
            images: action.payload.map(function(item) {
                return {
                    imageURL: item.media.m,
                    selected: false
                };
            })
        };
    } else if (action.type === "IMAGE_SELECTED") {
	return {
	    images: state.images.map(function(image, index) {
		if (index === action.payload) {
		    return {
			imageURL: image.imageURL,
			selected: !image.selected
		    };
		}
		return image;
	    })
	};
    }
    return state;
};

export default reducer;
