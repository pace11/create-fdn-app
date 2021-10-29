export default {

	FETCH_INIT: "fetch_init",
	FETCH_LOADING: "fetch_loading",
	FETCH_ERROR: "fetch_error",
	FETCH_RESULT: "fetch_result",
	top_menu: {
		title_menu: {
			text: "Download Female Daily App",
			link: {
				desktop: "//app.femaledaily.com",
				mobile: {
					android:
					"https://play.google.com/store/apps/details?id=com.fdbr.android",
					ios:
					"https://apps.apple.com/id/app/female-daily-beauty-review/id1160742672",
				},
			},
		},
		menus: [
			{
				text: "FEMALE DAILY",
				link: process.env.NEXT_PUBLIC_ROOT_HOME,
				id: null,
				new: false,
			},
			{
				text: "REVIEWS",
				link: process.env.NEXT_PUBLIC_REVIEWS_DOMAIN,
				id: null,
				new: false,
			},
			{
				text: "BEAUTY STUDIO",
				link: process.env.NEXT_PUBLIC_ECM_DOMAIN,
				id: null,
				new: false,
			},
			{
				text: "TALK",
				link: process.env.NEXT_PUBLIC_TALK_DOMAIN,
				id: null,
				new: false,
			},
			{
				text: "TRY AND REVIEW",
				link: `${process.env.NEXT_PUBLIC_ROOT_HOME}/try-and-review`,
				id: null,
				new: false,
			},
		],
	},
	mega_menu: [
		{
			name: "HOME",
			url: process.env.NEXT_PUBLIC_ROOT_DOMAIN,
			slug: "home",
			id: "id_home_editorial",
			children: [],
		},
		{
			name: "READ",
			url: null,
			slug: "read",
			id: "id_home_read",
			children: [],
		},
		{
			name: "VIDEO",
			url: "/blog/category/video-blog",
			slug: "video-blog",
			id: "id_home_video",
			children: [],
		},
		{
			name: "QUIZ",
			url: "/blog/category/quiz",
			slug: "quiz",
			id: "id_home_quiz",
			children: [],
		},
		{
			name: "PODCAST",
			url: "/blog/category/podcast",
			slug: "podcast",
			id: "id_home_podcast",
			children: [],
		},
	],
	config_sidebar: [
		{
			name: "REVIEWS",
			value: "reviews",
			pathname: process.env.NEXT_PUBLIC_REVIEWS_DOMAIN,
			query: "order=newest",
			visible: true,
			new: false,
		},
		{
			name: "SHOP AT BEAUTY STUDIO",
			value: "studio",
			pathname: process.env.NEXT_PUBLIC_ECM_DOMAIN,
			query: "page=1",
			visible: true,
			new: true,
		},
		{
			name: "TALK",
			value: "talk",
			pathname: process.env.NEXT_PUBLIC_TALK_DOMAIN,
			query: "",
			visible: true,
			new: false,
		},
		{
			name: "TRY & REVIEW",
			value: "try-and-review",
			pathname: `${process.env.NEXT_PUBLIC_ROOT_HOME}/try-and-review`,
			query: "",
			visible: true,
			new: false,
		},
	],

};
