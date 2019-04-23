
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import shortid from 'shortid';
import StylePatterns from '../services/StylePatterns';


// --- COMPONENT

// STYLED COMPONENTS

const SubsectionHeader = styled.h3`
	${StylePatterns.BlockHidden()}
`;
const BriefContainer = styled.div`
	grid-area: brief;
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType !== 'small' && `

	`}
`;
const BriefStatementsContainer = styled.div`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-areas:	"one two three four five"
	`}
`;
const BriefStatementGroupContainer = styled.div`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
		padding: 0 3rem 0 1rem;
		border-left: .2rem solid ${StylePatterns.Color('blue-4')};

		p:last-child {
			margin-bottom: 0;
		}
	`}
`;
const BriefStatement = styled.p`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('s', 'medium')};
	`}
	${props => props.screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('s', 'large')};
	`}
`;

// CONTENTS

export default (props) => (
	<BriefContainer
		screenType={props.screenType}
	>
		<SubsectionHeader>Brief</SubsectionHeader>
		<BriefStatementsContainer
			screenType={props.screenType}
		>
			{
				props.areas.map((areaObject, areaIndex) => (

					<BriefStatementGroupContainer
						key={shortid.generate()}
						screenType={props.screenType}
						gridArea={areaObject.area}
					>
						{
							areaObject.statements.map((statementValue, statementIndex) => (
							
								<BriefStatement
									key={shortid.generate()}	
									screenType={props.screenType}
								>
									{statementValue}
								</BriefStatement>
							))
						}
					</BriefStatementGroupContainer>
				))
			}
		</BriefStatementsContainer>
	</BriefContainer>
);
