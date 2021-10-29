import * as Sentry from "@sentry/node";
import { RewriteFrames } from "@sentry/integrations";

export const init = () => {

	if (process.env.NEXT_PUBLIC_SENTRY_DSN) {

		const integrations = [];

		if (
			process.env.NEXT_IS_SERVER === "true" && process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR
		) {

			// For Node.js, rewrite Error.stack to use relative paths, so that source
			// maps starting with ~/_next map to files in Error.stack with path
			// app:///_next
			integrations.push(

				new RewriteFrames({

					iteratee: (frame) => {

						const data = frame;

						data.filename = data.filename.replace(
							process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR,
							"app:///",
						);

						data.filename = data.filename.replace(".next", "_next");

						return data;

					},

				}),

			);

		}

		Sentry.init({
			enabled: process.env.NODE_ENV === "production",
			integrations,
			dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
			release: process.env.NEXT_PUBLIC_COMMIT_SHA,
		});

	}

};

export default init;
