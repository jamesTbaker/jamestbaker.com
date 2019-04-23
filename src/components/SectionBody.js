
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
	${props => props.screenType === 'large' && `
		${StylePatterns.VerticalAlignMiddle()}
		font-size: ${StylePatterns.FontSize('l', 'large')};
		font-style: italic;
		text-align: center;
		padding: 2rem;
		border-top: .2rem solid ${StylePatterns.Color('blue-4')};
		border-bottom: .2rem solid ${StylePatterns.Color('blue-4')};
		margin: 0;
		color: ${StylePatterns.Color('yellow-2')};
	`}
`;
const BodyContentContainer = styled.div`
	grid-area: content;
	${props => props.screenType !== 'small' && `
		column-count: 4;
		column-gap: 2rem;
		margin-top: 5rem;

		> p:last-child,
		> ul:last-child {
			margin-bottom: 0;
		}
	`}
`;

// CONTENTS

export default (props) => (
	<BodyContainer
		screenType={props.screenType}
		quote={props.quote}
	>
		<SubsectionHeader>All About {props.sectionTitle}</SubsectionHeader>
		<BodyContentContainer>
			{
				props.screenType === 'small' && 

				<Collapsible
					expandText="Discover more business skills"
					collapseText="Show fewer business skills"
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
