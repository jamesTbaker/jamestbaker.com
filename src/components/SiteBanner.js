
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const SiteBannerContainer = styled.div`
	padding: ${props => props.screenType === 'small' ?
		'2rem 1rem' : '2rem 5rem' };
	color: ${StylePatterns.Color('blue-4')};
	background-color: ${StylePatterns.Color('yellow-1')};
`;

export default (props) => (
	<SiteBannerContainer
		screenType={props.screenType}
	>
		jamestbaker.com has been around since 1999, but is currently undergoing reincarnation. More content is on the way.
	</SiteBannerContainer>
);
