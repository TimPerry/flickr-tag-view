import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => {
    return {
	name: state.name
    };
}

const AppContainer = connect(
    mapStateToProps
)(App);

export default AppContainer;
