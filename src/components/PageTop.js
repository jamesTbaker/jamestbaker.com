
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const TopContainer = styled.div`
`;

const PreambleContainer = styled.div`
`;
const HeaderContainer = styled.div`
`;
const EpilogueContainer = styled.div`
`;

export default (props) => (
	<TopContainer
		screenType={props.screenType}
		backgroundImage={props.backgroundImage}
	>
		<PreambleContainer
			screenType={props.screenType}
			dangerouslySetInnerHTML={{__html: props.preamble}}
		/>
		<HeaderContainer
			screenType={props.screenType}
		>
			<h1>{props.header}</h1>
		</HeaderContainer>
		<EpilogueContainer
			screenType={props.screenType}
			dangerouslySetInnerHTML={{ __html: props.epilogue }}
		/>
	</TopContainer>
);
