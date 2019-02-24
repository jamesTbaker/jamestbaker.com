
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

/* 
 if not contains text, center aligned content
 if contains text, interior max-width = 50rem

 appear in a section of a grid
 */
// e.g., will contain an h2
const SectionContainer = styled.section`
	margin-top: 5rem;
`;
// e.g., will contain an h3 and an image
const SubsectionContainer = styled.section`
	margin-top: 3rem;
`;
// will handle most of needs
const BoxContainer = styled.div`
	text-align: ${props => props.containsText ?
		'centered' : 'left' };
`;
// ${props => props.additionalStyles ?
// 	props.additionalStyles : '' };
// will prevent text content from being too long
const BoxTextRestainer = styled.div`
	max-width: 50rem;
`;

const CenteredChild = styled.div`
	margin-left: auto;
	margin-right: auto;
`;

export const Section = (props) => (
	<SectionContainer
		id={props.id}
	>
		{props.children}
	</SectionContainer>
);
export const Subsection = (props) => (
	<SubsectionContainer>
		{props.children}
	</SubsectionContainer>
);
export const Box = (props) => (
	<BoxContainer
		containsText={props.containsText}
		additionalStyles={props.additionalStyles}
		gridSection={props.gridSection}
	>
		{
			props.containsText &&

			<BoxTextRestainer
				containsText
				additionalStyles
			>
				{props.children}
			</BoxTextRestainer>
		}
		{
			!props.containsText &&

			<CenteredChild>
				{props.children}
			</CenteredChild>
		}
	</BoxContainer>
);
