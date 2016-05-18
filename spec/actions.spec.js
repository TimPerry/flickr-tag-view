import {toggleImageSelected} from '../src/actions.js';

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
    
});
