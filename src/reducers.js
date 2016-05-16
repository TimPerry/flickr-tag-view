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
    }
    return state;
};

export default reducer;
