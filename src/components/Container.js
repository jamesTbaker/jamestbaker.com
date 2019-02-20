
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled, { createGlobalStyle } from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import Header from './Header';
import StylePatterns from '../services/StylePatterns';

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
	background-image: linear-gradient(to right, ${StylePatterns.Color('blue-1-80-percent')}, ${StylePatterns.Color('blue-1-80-percent')}), url('/img/${props => props.backgroundImage}.jpg');
`;


// --- COMPONENT

export default (props) => (
	<div>
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
