export const imageSrc = ({ image }) => {

	const img = image ? image.split("://") : [];

	if (image) {

		if (img.length > 1) {

			return `//${img[1]}`;

		}

		return image;

	}

	return "//static.femaledaily.com/dyn/400/images/user-pics/placeholder_user.png";

};

export const IdrConvert = (props) => {

	const rp = Number(props.replace(/[^0-9.-]+/g, ""));
	return Intl.NumberFormat("id-ID", {
		style: "currency",
		currency: "IDR",
	}).format(rp);

};

export const Rupiah = (props) => {

	const reverse = props.toString().split("").reverse().join("");
	const ribuan 	= reverse.match(/\d{1,3}/g);
	const final 	= ribuan.join(".").split("").reverse().join("");

	return `Rp ${final}`;

};

export async function adsDetik(site, params) {

	try {

		const urls = "https://detikads.femaledaily.com/static/ads/femaledaily/staging_femaledaily/";
		const res = await fetch(`${urls + site}/${params}.txt`);

		return await res.text();

	} catch (error) {

		process.exit(1);

	}

	return null;

}

export function ScrollToUp() {

	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});

}

export const stringUrl = (params) => {

	const tmp = Array.isArray(params)
		? params[params.length - 1].replace(/[-]/g, " ")
		: params.replace(/[-]/g, " ");

	return tmp;

};

export const slugUrl = (params) => {

	const tmp = Array.isArray(params) ? params[params.length - 1] : params;

	return tmp;

};

export const categoryName = (slug, categories) => {

	const slugs = Array.isArray(slug) ? slug[slug.length - 1] : slug;

	const tmp = categories.filter((item) => item.slug.replace(/[_]/g, "-") === slugs)[0].name;

	return tmp;

};

export async function fetcher(...args) {

	const res = await fetch(...args);

	return res.json();

}

export const setGTM = () => {

	const GTM = process.env.NEXT_PUBLIC_GTM_ID;

	return {
		__html: `
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
			new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','${GTM}');
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${GTM}');
			`,
	};

};

export const comSocre = () => ({
	__html: `
			var _comscore = _comscore || [];
			_comscore.push({ c1: "2", c2: "8443234" });
			(function() {
			var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
			s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
			el.parentNode.insertBefore(s, el);
			})();
		`,
});

export const setGoogleAnalytics = () => {

	const GaGeneral = process.env.NEXT_PUBLIC_GA_GENERAL_ID;

	return {
		__html: `
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
			(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
			m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

		ga('create', '${GaGeneral}', 'auto', 'fdn');
		ga('fdn.send', 'pageview');
		`,
	};

};

export const setGoogleAnalyticsNoscript = () => {

	const GaGeneral = process.env.NEXT_PUBLIC_GA_GENERAL_ID;

	return {
		__html: `
		<iframe src="https://www.googletagmanager.com/ns.html?id=${GaGeneral}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`,
	};

};

export const setGoogleAnalyticsNoscriptGaHost = () => {

	const GaHost = process.env.NEXT_PUBLIC_GA_HOST_ID;

	return {
		__html: `
		<iframe src="https://www.googletagmanager.com/ns.html?id=${GaHost}"
		height="0" width="0" style="display:none;visibility:hidden"></iframe>
		`,
	};

};
