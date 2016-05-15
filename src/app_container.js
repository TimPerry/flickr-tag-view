import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImages} from './actions';

import App from './app';

const mapStateToProps = (state) => {
    return {
	name: state.name
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: (tags) => dispatch(fetchImages(tags))
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
