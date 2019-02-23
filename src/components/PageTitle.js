
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const TitleWrapper = styled.h1`
	padding: 7rem 1rem;
	margin: 0;
	font-weight: 300;
	color: ${StylePatterns.Color('yellow-1')};
	background-size: 100% auto, cover;
	background-position: left top, 50% center;
	background-image: linear-gradient(to right, ${StylePatterns.Color('blue-1-80-percent')}, ${StylePatterns.Color('blue-1-80-percent')}), url('${props => props.backgroundImage}');
	`;

export default (props) => (
	<TitleWrapper
		backgroundImage={props.backgroundImage}
	>
		{props.text}
	</TitleWrapper>
);
