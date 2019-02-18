
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled, { createGlobalStyle } from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import Header from './Header';

import LineAwesomeEOT from '../fonts/line-awesome.eot';
import LineAwesomeTTF from '../fonts/line-awesome.ttf';
import LineAwesomeWOFF from '../fonts/line-awesome.woff';
import LineAwesomeWOFF2 from '../fonts/line-awesome.woff2';
import LineAwesomeSVG from '../fonts/line-awesome.svg';

// ----- INJECT GLOBAL STYLE

const GlobalStyle = createGlobalStyle`
	* { box-sizing: border-box; }
	html { font-size: 10px; }
	body { font-size: 1.6rem; font-family: 'Source Sans Pro', sans-serif; margin: 0; background-color: #fff; color: #333;}
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
`;

const TitleWrapper = styled.h1`
	font-size: 10rem;
	padding: 7rem 2rem;
	margin: 0;
	background-color: #ffcccc;
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
		<TitleWrapper>
			{props.title}
		</TitleWrapper>
		{props.children}
	</div>
);
