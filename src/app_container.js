import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchImages, selectImage} from './actions';

import App from './app';

const mapStateToProps = (state) => {
    return {
	statusMessage: state.statusMessage,
	images: state.images
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchImages: bindActionCreators(fetchImages, dispatch),
        handleClick: bindActionCreators(selectImage, dispatch)
    };
};

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
