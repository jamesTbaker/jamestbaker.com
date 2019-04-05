
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

const TopContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-rows: 40% 25% 35%;
		grid-template-columns: 1fr 1fr;
		grid-template-areas:	"topLeft topRight"
								"midLeft midRight"
								"bottomLeft bottomRight";
		min-height: calc(80vh - 11rem);
		background-color: ${StylePatterns.Color('blue-3')};
		background-size: 100% auto, 100% auto, cover;
		background-position: left top, left top, 50% center;
		background-image: linear-gradient(to right, transparent, transparent 30%,  ${StylePatterns.Color('blue-1-70-percent')} 60%, ${StylePatterns.Color('blue-1')}), linear-gradient(to bottom, ${StylePatterns.Color('blue-1')}, transparent 35%, transparent 40%, ${StylePatterns.Color('blue-1-80-percent')} 60%, ${StylePatterns.Color('blue-1')}), url('${props.backgroundImage}');
	`}
	${props => props.screenType === 'small' && `
		display: grid;
		grid-template-rows: 15% 15% 15% auto;
		grid-template-columns: 1fr;
		grid-template-areas:	"top"
								"midTop"
								"midBottom"
								"bottom";
		min-height: 80vh;
		background-color: ${StylePatterns.Color('blue-3')};
		background-size: 100% auto, cover;
		background-position: left top, 50% center;
		background-image: linear-gradient(to bottom, ${StylePatterns.Color('blue-1')}, ${StylePatterns.Color('blue-1-60-percent')} 35%, ${StylePatterns.Color('blue-1-60-percent')} 40%, ${StylePatterns.Color('blue-1-80-percent')} 60%, ${StylePatterns.Color('blue-1')}), url('${props.backgroundImage}');
	`}
`;
const TopContentOneContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: topRight;
		padding: 0 2rem 0 1rem;

		div.sb-root--top-content {
			${StylePatterns.VerticalAlignMiddle()};
		}
		color: ${StylePatterns.Color('grey-15')};
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: top;
		padding: 0 2rem;
		font-size: ${StylePatterns.FontSize('s', 'small')};

		div.sb-root--top-content {
			${StylePatterns.VerticalAlignMiddle()};
		}
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('s', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('s', 'large')};
	`}

	p {
		margin-bottom: .5rem;
	}
	a {
		border: 0;
	}
`;
const TopContentTwoContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: midRight;
		padding: 0 2rem 0 1rem;

		div.sb-root--top-content {
			${StylePatterns.VerticalAlignMiddle()};
		}
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: midTop;
		padding: 0 2rem;
	`}
`;
const TopContentThreeContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: bottomRight;
		border-top: .2rem solid  ${StylePatterns.Color('yellow-1')};
		padding: 2rem 0 2rem 1rem;
		margin-right: 5rem;
		color: ${StylePatterns.Color('grey-13')}
	`}

	${({ screenType }) => screenType === 'small' && `
		grid-area: midBottom;
		padding: 0 2rem;
		font-size: ${StylePatterns.FontSize('xxl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xxl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xxl', 'large')};
	`}
`;
const TopContentFourContainer = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: bottomLeft;
		border-top: .2rem solid  ${StylePatterns.Color('yellow-1')};
		padding: 2rem 2rem 2rem 0;
		margin-left: 5rem;
		color: ${StylePatterns.Color('grey-16')}
	`}
	${({ screenType }) => screenType === 'small' && `
		grid-area: bottom;
		padding: 0 2rem;
	`}
`;

export default (props) => (
	<TopContainer
		screenType={props.screenType}
		backgroundImage={props.backgroundImage}
	>
		<TopContentOneContainer
			screenType={props.screenType}
		>
			{props.topContentOne}
		</TopContentOneContainer>
		<TopContentTwoContainer
			screenType={props.screenType}
		>
			{props.topContentTwo}
		</TopContentTwoContainer>
		<TopContentThreeContainer
			screenType={props.screenType}
		>
			{props.topContentThree}
		</TopContentThreeContainer>
		<TopContentFourContainer
			screenType={props.screenType}
		>
			{props.topContentFour}
		</TopContentFourContainer>
	</TopContainer>
);
