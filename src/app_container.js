import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchImages, toggleImageSelected} from './actions';
import App from './app';

const mapStateToProps = (state) => {
  return {
	  statusMessage: state.statusMessage,
	  images: state.images,
    selectedImageIds: state.selectedImageIds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchImages: bindActionCreators(fetchImages, dispatch),
    handleClick: bindActionCreators(toggleImageSelected, dispatch)
  };
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
