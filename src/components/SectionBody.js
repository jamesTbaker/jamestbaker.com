
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const handleBackToMenuNavItemClick = () => {
	scroller.scrollTo('deeper-dive-container', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

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
		grid-template-columns: 20% 80%;
		grid-template-areas: "quote content";
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'right' && `
		display: grid;
		grid-template-columns: 80% 20%;
		grid-template-areas: "content quote";
	`}
`;
const QuoteContainer = styled.div`
	grid-area: quote;
	${props => props.screenType === 'medium' && `
		margin-top: 5rem;
	`}
`;
const QuoteContentContainer = styled.p`
	${StylePatterns.VerticalAlignMiddle()}
	font-style: italic;
	text-align: center;
	border-top: .2rem solid ${StylePatterns.Color('blue-4')};
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
		padding-top: 5rem;
		padding-bottom: 0;
	`}
	${props => props.screenType === 'large' && `
		width: calc(100% - 3rem);
		font-size: ${StylePatterns.FontSize('l', 'large')};
		border-bottom: .2rem solid ${StylePatterns.Color('blue-4')};
	`}
	${props => props.screenType == 'large' && props.quote.largeScreenPosition == 'right' && `
		margin-left: auto;
	`}
`;
const BodyContentContainer = styled.div`
	grid-area: content;
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
		<QuoteContainer
			screenType={props.screenType}
		>
			<QuoteContentContainer
				screenType={props.screenType}
				quote={props.quote}
			>
				{props.quote.content}
			</QuoteContentContainer>
		</QuoteContainer>
		<a
			onClick={handleBackToMenuNavItemClick}
		>Other Sections</a>

	</BodyContainer>
);
