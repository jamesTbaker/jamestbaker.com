
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled, { createGlobalStyle } from 'styled-components';
import { Helmet } from 'react-helmet';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Header from './Header';

import Favicon from '../img/favicons/favicon.ico';
import AppleTouchIncon57 from '../img/favicons/apple-touch-icon-57x57.png';
import AppleTouchIncon114 from '../img/favicons/apple-touch-icon-114x114.png';
import AppleTouchIncon72 from '../img/favicons/apple-touch-icon-72x72.png';
import AppleTouchIncon144 from '../img/favicons/apple-touch-icon-144x144.png';
import AppleTouchIncon60 from '../img/favicons/apple-touch-icon-60x60.png';
import AppleTouchIncon120 from '../img/favicons/apple-touch-icon-120x120.png';
import AppleTouchIncon76 from '../img/favicons/apple-touch-icon-76x76.png';
import AppleTouchIncon152 from '../img/favicons/apple-touch-icon-152x152.png';
import Favicon196 from '../img/favicons/favicon-196x196.png';
import Favicon96 from '../img/favicons/favicon-96x96.png';
import Favicon32 from '../img/favicons/favicon-32x32.png';
import Favicon16 from '../img/favicons/favicon-16x16.png';
import Favicon128 from '../img/favicons/favicon-128.png';
import MSTile144 from '../img/favicons/mstile-144x144.png';
import MSTile70 from '../img/favicons/mstile-70x70.png';
import MSTile150 from '../img/favicons/mstile-150x150.png';
import MSTile310By150 from '../img/favicons/mstile-310x150.png';
import MSTile310 from '../img/favicons/mstile-310x310.png';

import LineAwesomeEOT from '../fonts/line-awesome.eot';
import LineAwesomeTTF from '../fonts/line-awesome.ttf';
import LineAwesomeWOFF from '../fonts/line-awesome.woff';
import LineAwesomeWOFF2 from '../fonts/line-awesome.woff2';
import LineAwesomeSVG from '../fonts/line-awesome.svg';

// ----- INJECT GLOBAL STYLE

const GlobalStyle = createGlobalStyle`
	* { box-sizing: border-box; }
	html { font-size: 10px; }
	body { 
		font-size: 1.6rem;
		font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, 'Roboto', Arial, "Lucida Grande", sans-serif;
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: 0;
		background-color: ${StylePatterns.Color('blue3')};
		color: ${StylePatterns.Color('grey5')};
	}
	@font-face {
		font-family: 'LineAwesome';
		src: url(${LineAwesomeEOT});
		src: url(${LineAwesomeEOT}) format("embedded-opentype"),
			url(${LineAwesomeWOFF2}) format("woff2"),
			url(${LineAwesomeWOFF}) format("woff"),
			url(${LineAwesomeTTF}) format("truetype"),
			url(${LineAwesomeSVG}) format("svg");
		font-weight: normal;
		font-style: normal;
	}
	@media screen and (-webkit-min-device-pixel-ratio:0) {
		@font-face {
			font-family: "LineAwesome";
			src: url("../fonts/line-awesome.svg?v=1.1.#fa") format("svg");
		}
	}
	.transition-entering {
		animation-name: entering-animation;
		animation-duration: .5s;
	}
	@keyframes entering-animation {
		0%		{opacity: 0;}
		100%	{opacity: 1;}
	}
	h1 {
		font-size: ${StylePatterns.FontSize('xxxl')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: 1rem 0 .25rem;
	}
	h2 {
		font-size: ${StylePatterns.FontSize('xxl')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: 1rem 0 .25rem;
	}
	h3 {
		font-size: ${StylePatterns.FontSize('xl')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: 1rem 0 .25rem;
	}
	h4 {
		font-size: ${StylePatterns.FontSize('l')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: 1rem 0 .25rem;
	}
	h5 {
		font-size: ${StylePatterns.FontSize('xxxl')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: .5rem 0 .25rem;
	}
	h6 {
		font-size: ${StylePatterns.FontSize('xxxl')};
		font-weight: ${StylePatterns.FontWeight('regular')};
		margin: .5rem 0 .25rem;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	ul ul,
	ol ol {
		margin: 0;
		padding: 0;
	}
	ul li,
	ol li {
		list-style-position: outside;
		vertical-align: text-top;
		margin: 0 0 .25rem 1.8rem;
	}
	ul li {
		list-style-type: square;
		list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAIElEQVQoU2NkIAAY09LS/qOrmTVrFiNMbFAoIOgLQgoAA4QUCSjONAIAAAAASUVORK5CYII=');
	}
	ul ul li {
		list-style-type: disc;
		list-style-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAATElEQVQoU2NkIAAYQfIzZ878f//+fQZFRUWG9PR0sBgMMIIkz549CxcwNjZGUcRYUVHx/927d3AFQkJCDB0dHXBTCJtA0A1E+QKfIgBQeyMJtPI08AAAAABJRU5ErkJggg==');
	}
	a,
	a:visited {
		text-decoration: none;
		color: ${StylePatterns.Color('interactive-light')};
		transition: color .25s;

		&:hover,
		&:active {
			color: ${StylePatterns.Color('interactive-light-active')};
		}
	}
`;

const TitleWrapper = styled.h1`
	padding: 7rem 1rem;
	margin: 0;
	font-weight: 300;
	color: ${StylePatterns.Color('yellow')};
	background-size: 100% auto, cover;
	background-position: left top, 50% center;
	background-image: linear-gradient(to right, ${StylePatterns.Color('blue-1-80-percent')}, ${StylePatterns.Color('blue-1-80-percent')}), url('${props => props.backgroundImage}');
`;



// --- COMPONENT

export default (props) => (
	<div>
		<Helmet
			meta={[
				{ name: 'application-name', content: 'James T. Baker' },
				{ name: 'msapplication-TileColor', content: '#0B171E' },
				{ name: 'msapplication-TileImage', content: `${MSTile144}` },
				{ name: 'msapplication-square70x70logo', content: `${MSTile70}` },
				{ name: 'msapplication-square150x150logo', content: `${MSTile150}` },
				{ name: 'msapplication-wide310x150logo', content: `${MSTile310By150}` },
				{ name: 'msapplication-square310x310logo', content: `${MSTile310}` },

			]}
			link={[
				{ rel: 'shortcut icon', type: 'image/png', href: `${Favicon}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: `${AppleTouchIncon57}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '114x114', href: `${AppleTouchIncon114}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '72x72', href: `${AppleTouchIncon72}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '144x144', href: `${AppleTouchIncon144}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '60x60', href: `${AppleTouchIncon60}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '120x120', href: `${AppleTouchIncon120}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '76x76', href: `${AppleTouchIncon76}` },
				{ rel: 'apple-touch-icon-precomposed', sizes: '152x152', href: `${AppleTouchIncon152}` },
				{ rel: 'icon', type: 'image/png', sizes: '196x196', href: `${Favicon196}` },
				{ rel: 'icon', type: 'image/png', sizes: '96x96', href: `${Favicon96}` },
				{ rel: 'icon', type: 'image/png', sizes: '32x32', href: `${Favicon32}` },
				{ rel: 'icon', type: 'image/png', sizes: '16x16', href: `${Favicon16}` },
				{ rel: 'icon', type: 'image/png', sizes: '128x128', href: `${Favicon128}` },
			]}
		/>
		<GlobalStyle />
		<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
			<Header screenType="small" />
		</MediaQuery>
		<MediaQuery
			minWidth={ScreenSizes.ReturnMediumMin()}
			maxWidth={ScreenSizes.ReturnMediumMax()}
		>
			<Header screenType="medium" />
		</MediaQuery>
		<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
			<Header screenType="large" />
		</MediaQuery>
		<TitleWrapper
			backgroundImage={props.titleBackgroundImage}
		>
			{props.title}
		</TitleWrapper>
		{props.children}
	</div>
);
