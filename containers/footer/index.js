/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import Desktop from "./desktop";
import Mobile from "./mobile";

const Footer = ({ isMobile }) => {

	if (!isMobile) {

		return <Desktop />;

	}

	return <Mobile />;

};

Footer.propTypes = {
	isMobile: PropTypes.bool.isRequired,
};

export default Footer;
