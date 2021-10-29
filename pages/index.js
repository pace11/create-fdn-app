/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { END } from "redux-saga";
import { loadSelf } from "@fdn/profile_store";
import Env from "Consts/env";
import cookie from "cookie";
import Layout from "Containers/layout";
import { wrapper } from "@/Store/index";

const Index = (props) => {

	const data = props;

	return (
		<Layout
			home
			title="Femaledaily"
			ismobile={data.isMobile}
			self={data.getStoreSelf}
		>
			<div>{JSON.stringify(data.query)}</div>
		</Layout>
	);

};

export const getServerSideProps = wrapper.getServerSideProps(
	async ({ store, req, query }) => {

		let userAgent;
		let cookies;
		let authorization = null;
		let usrname = null;

		if (req) {

			// if you are on the server and you get a "req" property from your context
			userAgent = req.headers["user-agent"]; // get the user-agent from the headers

		} else {

			// if you are on the client you can access the navigator from the window object
			userAgent = navigator.userAgent;

		}

		const isMobile = Boolean(
			userAgent.match(
				/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i,
			),
		);

		const isServer = !!req;

		if (req.headers.cookie) {

			cookies = cookie.parse(req.headers.cookie);
			authorization = cookies.token;
			usrname = cookies.usrname;

		}

		await store.dispatch(
			loadSelf({
				payload: {
					api_env: process.env.NEXT_PUBLIC_NODE_ENV,
					env: Env.HEADERS,
					usrname,
					Authorization: authorization,
					is_server: isServer,
				},
			}),
		);

		store.dispatch(END);
		await store.sagaTask.toPromise();

		const getStoreSelf = !!store.getState().storeSelf.data === true
			? store.getState().storeSelf
			: [];

		return {
			props: {
				query,
				isMobile,
				getStoreSelf,
			}, // will be passed to the page component as props
		};

	},
);

export default Index;
