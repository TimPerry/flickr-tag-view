import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImages} from './actions';

import App from './app';

const mapStateToProps = (state) => {
    return {
	name: state.name,
	images: state.images
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: bindActionCreators(fetchImages, dispatch)
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
