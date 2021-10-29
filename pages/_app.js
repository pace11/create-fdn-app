import PropTypes from "prop-types";
import { wrapper } from "../store";

// import { init } from 'Helpers/sentry'

// init()

function App({ Component, pageProps, err }) {

	return <Component {...pageProps} err={err} />;

}

App.propTypes = {
	Component: PropTypes.func.isRequired,
	pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
	err: PropTypes.objectOf(PropTypes.any),
};

App.defaultProps = {
	err: {},
};

// export default App
export default wrapper.withRedux(App);
