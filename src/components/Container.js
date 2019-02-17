
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import { createGlobalStyle } from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import Header from './Header';

// ----- INJECT GLOBAL STYLE

const GlobalStyle = createGlobalStyle`
	* { box-sizing: border-box; }
	html { font-size: 10px; }
	body { font-size: 1.6rem; font-family: 'Source Sans Pro', sans-serif; margin: 0; background-color: #fff; color: #ddd} 
`;

// --- COMPONENT

export default ({ children }) => (
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
		{children}
	</div>
);
