export default {

	// Headers
	HEADERS: {
		key: process.env.NEXT_PUBLIC_KEY_API,
		version: "1.5",
		device: "3",
		"content-type": "application/json",
	},
	// Api timeout
	REQUEST_TIMEOUT: 50000,
};
