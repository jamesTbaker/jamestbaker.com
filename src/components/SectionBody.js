
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

// STYLED COMPONENTS

const SubsectionHeader = styled.h3`
	${StylePatterns.BlockHidden()}
`;
const BodyContainer = styled.div`
	grid-area: mainAndQuote;
	${props => props.screenType !== 'large' && `
		display: grid;
		grid-template-rows: auto auto;
		grid-template-areas: 	"content"
								"quote";
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'left' && `
		display: grid;
		grid-template-columns: 1fr 4fr;
		grid-template-areas: "quote content";
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'right' && `
		display: grid;
		grid-template-columns: 4fr 1fr;
		grid-template-areas: "content quote";
	`}
`;
const QuoteContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: quote;
	`}
`;
const QuoteContentContainer = styled.p`
	${StylePatterns.VerticalAlignMiddle()}
	font-style: italic;
	text-align: center;
	border-top: .2rem solid ${StylePatterns.Color('blue-4')};
	border-bottom: .2rem solid ${StylePatterns.Color('blue-4')};
	margin: 0;
	
	${props => props.screenType !== 'small' && `
		padding: 2rem;
		color: ${StylePatterns.Color('yellow-2')};
	`}
	${props => props.screenType === 'small' && `
		margin-top: 2rem;
		padding: 2rem 0;
		width: 50%;
		font-size: ${StylePatterns.FontSize('s', 'small')};
		color: ${StylePatterns.Color('blue-8')};
	`}
	${props => props.screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('l', 'medium')};
	`}
	${props => props.screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('l', 'large')};
	`}
`;
const BodyContentContainer = styled.div`
	grid-area: content;
	${props => props.screenType === 'small' && `

	`}
	${props => props.screenType !== 'small' && `
		column-gap: 2rem;
		margin-top: 5rem;
	`}
	${props => props.screenType === 'medium' && `
		column-count: 3;
		margin-bottom: 5rem;
	`}
	${props => props.screenType === 'large' && `
		column-count: 4;
	`}
`;

// CONTENTS

export default (props) => (
	<BodyContainer
		screenType={props.screenType}
		quote={props.quote}
	>
		<SubsectionHeader>All About {props.sectionTitle}</SubsectionHeader>
		<BodyContentContainer
			screenType={props.screenType}
		>
			{
				props.screenType === 'small' && 

				<Collapsible
					expandText={`Learn more about ${props.sectionTitle}`}
					collapseText={`Show less about ${props.sectionTitle}`}
					buttonPosition="after"
				>
					{props.children}
				</Collapsible>
			}
			{
				props.screenType !== 'small' &&

				props.children
			}
		</BodyContentContainer>
		<QuoteContainer>
			<QuoteContentContainer
				screenType={props.screenType}
			>
				{props.quote.content}
			</QuoteContentContainer>
		</QuoteContainer>
	</BodyContainer>
);
