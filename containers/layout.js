/* eslint-disable react/no-danger */
import Head from "next/head";
import PropTypes from "prop-types";
import NavbarHeader from "@fdn/navbar_header";
import { useCallback, useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { loadSearchArticle } from "@/Store/search_article/lib/actions"
import {
	ScrollToUp,
	setGTM,
	comSocre,
	setGoogleAnalyticsNoscriptGaHost,
	setGoogleAnalytics,
} from "../helpers/utils";
import Vars from "../consts/vars";
import Footer from "./footer";
// import Env from "Consts/env";

const baseAppName = "Female Daily Editorial";
let appName = "";

export default function Layout({
	children,
	title,
	ismobile,
	self,
	// navMenu,
}) {

	if (typeof title !== "undefined") {

		appName = `${baseAppName} - ${title}`;

	}

	const isMobile = ismobile || false;

	useCallback(() => {

		ScrollToUp();

	}, []);

	// const dispatch = useDispatch()

	// const getData = useSelector((state) => state)

	const [searchText, setSearchText] = useState("");
	const [isShowSearch, setShowSearch] = useState(false);
	const [isShowSearchResult, setShowSearchResult] = useState(false);
	const [isShowSearchInput, setShowSearchInput] = useState(false);
	const [isArticleLoading, setArticleLoading] = useState(false);
	const [isHidetopMenu, setToggleTopMenu] = useState(false);

	const updateSearchText = (e) => {

		setSearchText(e.target.value);

		if (

			(searchText.length >= 3 && !isMobile) || (searchText.length > 0 && isMobile)

		) {

			setShowSearch(true);
			setArticleLoading(true);
			setShowSearchResult(true);

		} else {

			setShowSearch(false);
			setArticleLoading(false);
			setShowSearchResult(false);

		}

	};

	const submitSearch = (e) => {

		e.preventDefault();
		window.location.href = `${process.env.NEXT_PUBLIC_REVIEWS_DOMAIN}/search?q=${searchText}&tab=article`;

	};

	const showSearch = () => {

		setShowSearchInput(true);

	};

	useEffect(() => {
		// let interval
		// if (
		//     (searchText.length >= 3 && !isMobile) ||
		//     (searchText.length > 0 && isMobile)
		// ) {
		//     interval = setTimeout(() => {
		//         dispatch(
		//             loadSearchArticle({
		//                 payload: {
		//                     headers: Env.HEADERS,
		//                     is_server: true,
		//                     search: searchText,
		//                 },
		//             }),
		//         )
		//         setArticleLoading(false)
		//     })
		// }

		// return () => clearTimeout(interval)
	}, [searchText]);

	useEffect(() => {

		if (!isMobile) {

			window.addEventListener("scroll", () => {

				if (document.documentElement.scrollTop > 84) {

					setToggleTopMenu(true);

				} else {

					setToggleTopMenu(false);

				}

			});

		}

	}, []);

	return (
		<div className="root-container">
			<div className="row-center">
				<Head>
					<title>{appName}</title>
					<link rel="icon" href="https://femaledaily.com/static/favicon.ico" />
					<meta charSet="utf-8" />
					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
					<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
					<link rel="apple-touch-icon-precomposed" sizes="144x144" href={`${`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/images/fdn_logo_144.png`}`} />
					<link rel="apple-touch-icon-precomposed" sizes="114x114" href={`${`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/images/fdn_logo_144.png`}`} />
					<link rel="apple-touch-icon-precomposed" sizes="72x72" href={`${`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/images/fdn_logo_72.png`}`} />
					<link rel="apple-touch-icon-precomposed" sizes="57x57" href={`${`${process.env.NEXT_PUBLIC_ROOT_DOMAIN}/images/fdn_logo_57.png`}`} />
					<link rel="stylesheet" href="/styles/font_google.css" />
					<link rel="stylesheet" type="text/css" href="/styles/icomoon/styles.css" />
					<link rel="stylesheet" type="text/css" href="/styles/new_icomoon/styles.css" />
					<link rel="stylesheet" type="text/css" href="/styles/fontastic/styles.css" />
					<link rel="stylesheet" type="text/css" href="/styles/fontastic-logo/styles.css" />
					<link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
					<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
					<link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
					<link rel="stylesheet" href="https://unpkg.com/@tabler/icons@latest/iconfont/tabler-icons.min.css" />
					<script src="https://unpkg.com/@tabler/icons@latest/icons-react/dist/index.umd.min.js" />

					{process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
						/* ALEXA */
						<script
							async
							custom-element="amp-analytics"
							src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
						/>
					) : null}

					<script dangerouslySetInnerHTML={setGTM()} />

					{process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
						/* COMSOCRE */
						<script type="text/javascript" dangerouslySetInnerHTML={comSocre()} />
					) : null}

					{process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
						<script dangerouslySetInnerHTML={setGoogleAnalytics()} />
					) : (
						""
					)}

				</Head>

				{process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
					<amp-analytics
						type="alexametrics"
						dangerouslySetInnerHTML={{
							__html: `
				<script type="application/json"> {"vars": { "atrk_acct": "5TYNs1O7kI20L7", "domain": "editorial.femaledaily.com" }}</script>`,
						}}
					/>
				) : ("")}

				<NavbarHeader
					logo_img="https://s3.ap-southeast-1.amazonaws.com/assets.femaledaily.com/beauty_studio/logo-bs.png"
					is_mobile
					type="monochrome"
					self={self.data}
					nav_position="fixed"
					menu={Vars.top_menu}
					main_link={process.env.NEXT_PUBLIC_ROOT_DOMAIN}
					home_link="/"
					reviews_link={process.env.NEXT_PUBLIC_REVIEWS_DOMAIN}
					talk_link={process.env.NEXT_PUBLIC_TALK_DOMAIN}
					sso_link={process.env.NEXT_PUBLIC_SSO_DOMAIN}
					sidebar_config={Vars.config_sidebar}
					logo_id="id_logo_editorial"
					search_input_id="id_search_input_field_editorial"
					button_login_id="id_loginsignup_editorial"
					button_cart_id="id_carteditorial"
					button_notif_id="id_notifeditorial"
					submit_search={submitSearch}
					search_text={searchText}
					update_search_text={updateSearchText}
					close_search_suggest={() => {

						setSearchText("");
						setShowSearch(false);

					}}
					is_article_loading={isArticleLoading}
					is_show_search_suggest={isShowSearch}
					is_show_search_result={isShowSearchResult}
					is_show_search={isShowSearchInput}
					show_search={showSearch}
					hide_search={() => {

						setShowSearch(false);
						setShowSearchInput(false);

					}}
					// articles={
					//     !!getData.storeSearchArticle.data
					//         ? Array.isArray(getData.storeSearchArticle.data.data)
					//             ? getData.storeSearchArticle.data.data
					//             : []
					//         : []
					// }
					is_hide_top_menu={isHidetopMenu}
				/>
				<div className="main-content">
					{children}
				</div>
				{process.env.NEXT_PUBLIC_NODE_ENV === "production" ? (
					<script dangerouslySetInnerHTML={setGoogleAnalyticsNoscriptGaHost()} />
				) : (
					""
				)}

				<Footer isMobile handleScrollUp={ScrollToUp} />

				<style>
					{`
						img {
							max-width: 100%;
							max-height: 100%;
							width: auto;
							height: auto;
						}

						.navbar-header {
							width: 100%;
							box-sizing: border-box;
							background-color: #FFF;
							position: absolute;
							top: 0;
						}

						.navbar-inner-content-wrapper {
							max-width: 1200px;
						}

						.mega-menu-wrapper {
							max-width: 1200px;
							margin: 0 auto;
							display: flex;
							justify-content: center;
						}

						.search-input-field input {
							max-width: calc(100% - 32px);
						}

						.sub-menu-title a {
							text-transform: uppercase;
						}

						.menu-popup {
							max-width: calc(100% - 48px);
						}

						img.sub-menu-item {
							max-width: 100%;
						}

						${isHidetopMenu && !isMobile
			? ".mega-menu .menus-wrapper a {font-size: 14px; margin-top: 10px; margin-bottom: 10px;}"
			: ""
		}				
						
						.navbar-header .btn-close {
							margin-left: 0;
						}

						.navbar-header .mega-menu {
							padding-bottom: 0;
						}

						.mega-menu-wrapper {
							width: 100%;
							max-width: 100%;
							margin-top: 12px;
							display: unset;
							justify-content: unset;
						}

						.navbar-header .search-popup-content {
							max-width: calc(100% - 32px);
						}

						.menu-popup {
							max-width: unset;
						}

						.menu-popup-title {
							justify-content: space-between;
						}

					`}
				</style>
				<style jsx global>
					{`
						.root-container {
							display: flex;
							align-items: center;
							justify-content: center;
						}
						.row-center {
							width: 480px;
							box-sizing: border-box;
							position: relative;
						}
	
						@media screen and (max-width: 425px) {
							.row-center {
								width: 100%;
							}
						}

						a {
							text-decoration: none;
						}

						body {
							margin: 0px;
							max-width: 100%;
							overflow-x: hidden;
						}
					`}
				</style>
			</div>
		</div>
	);

}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.node.isRequired,
	ismobile: PropTypes.bool,
	self: PropTypes.objectOf(PropTypes.any).isRequired,
};

Layout.defaultProps = {
	ismobile: false,
};
