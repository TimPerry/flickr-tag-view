import {toggleImageSelected, fetchImages} from '../src/scripts/actions';

describe('Actions', () => {

    describe('Toggle image selected', () => {
	it('Correctly sets the id as payload for the action', () => {
	    const evt = {
		target: {
		    dataset: {
			id: 'someid'
		    }
		}
	    };
	    const result = toggleImageSelected(evt);
	    expect(result.payload).toEqual('someid');
	});
    });

    describe('Fetch images', () => {

	it('Sends a pending action', () => {
	    const dispatchSpy = jasmine.createSpy();
	    fetchImages('sometag')(dispatchSpy);
	    const firstCall = dispatchSpy.calls.first().args[0];
	    expect(firstCall.type).toEqual('FETCH_IMAGES_PENDING');
	    expect(firstCall.payload).toEqual('sometag');
	});
	
    });
    
});
