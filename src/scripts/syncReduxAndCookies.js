import Cookies from 'js-cookie'

export const COOKIE_NAME_ACCESS_TOKEN = 'flickr-tag-view';

export default function syncReduxAndCookies(store) {
    let currentValue;
    store.subscribe(function(){
	let previousValue = currentValue;

	const state = store.getState();
	currentValue = state.selectedImageIds;

	if(currentValue !== previousValue) {
	    if(!currentValue) {
		Cookies.remove(COOKIE_NAME_ACCESS_TOKEN);
	    } else {
		Cookies.set(COOKIE_NAME_ACCESS_TOKEN, currentValue);
	    }
	}
    });

    const cookieValue = Cookies.get(COOKIE_NAME_ACCESS_TOKEN);
    if(cookieValue) {
	const payload = JSON.parse(cookieValue);
	if(payload) {
	    store.dispatch({
		type: 'SET_SELECTED_IMAGE_IDS',
		payload: payload
	    });
	}
    }
}
