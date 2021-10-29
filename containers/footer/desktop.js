/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";

const Desktop = ({ data }) => (
	<div className="child-slider-collections">
		{
			data && data.map((item, idx) => (
				<a key={String(idx)} href={item.link} className="card-slider">
					<img className="img-card-slider" src={item.url} alt="" />
				</a>
			))
		}
		<style>
			{`
				.child-slider-collections {
					display: flex;
					flex-wrap: nowrap;
					overflow-x: auto;
					padding: 0 20px;
				}
				.card-slider {
					flex: 0 0 auto;
					width: 185px;
					height: 105px;
					background: #f2f2f2;
					box-sizing: border-box;
				}
				.card-slider:not(:first-child) {
					margin: 0 0 0 15px;
				}
				.card-slider img.img-card-slider {
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
            `}
		</style>
	</div>
);

Desktop.propTypes = {
	data: PropTypes.any.isRequired,
};

export default Desktop;
