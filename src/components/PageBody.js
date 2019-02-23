

// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const BodyContainer = styled.div`
	margin: 0;
	padding: ${props => props.screenType === 'small' ?
		'3rem 1rem 1rem' : '5rem 5rem 3rem' };
`;

export default (props) => (
	<BodyContainer
		screenType={props.screenType}
	>
		{props.children}
	</BodyContainer>
);
