
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- COMPONENT


const MainContainer = styled.main`
	margin-left: ${props => props.screenType === 'large' ?
		'20rem' : '0' };
	background-color: #123;
`;


export default (props) => (
	<MainContainer
		className="sb-root--page-main-content"
		screenType={props.screenType}
	>
		{props.content}
	</MainContainer>
);
