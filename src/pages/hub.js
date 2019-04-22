
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import TitleImageMedium from '../img/titleImages/processed/bridge.jpg';
import TitleImageSmall from '../img/titleImages/processed/bridge@0,5x.jpg';

// ----- PAGE

// STYLED COMPONENTS

const BriefList = styled.ul`
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('m', 'large')};
		column-count: 2;
		column-gap: 0;
		list-style-position: inside;
		margin-bottom: 0;
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('m', 'medium')};
	`}
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('m', 'small')};
		margin-bottom: 1rem;
	`}
	${({ screenType }) => screenType !== 'small' && `
		margin-bottom: 1rem;
	`}
`;
const BriefListItem = styled.li`
	list-style: none;
	margin: 0 0 2rem 0;
	display: inline-block;

	${({ screenType }) => screenType === 'small' && `
		&:last-child {
			margin-bottom: 0;
		}
	`}
`;
const DeepDiveList = styled.ul`
	margin: 0;

	${({ screenType }) => screenType === 'small' && `
		padding-bottom: 1.8rem;
	`}
`;
const DeepDiveListItem = styled.li`
	list-style: none;
	margin: 0;

	${({ screenType }) => screenType !== 'small' && `
		padding: 0 0 2.2rem;
	`}
	${({ screenType }) => screenType === 'small' && `
		padding: 1rem 0 1.2rem;
	`}
`;
const DeepDiveLink = styled.a`
	border: 0;
	
	&:hover {
		border: 0;
	}
`;
const Section = styled.section`
	${props => props.screenType !== 'small' && `
		padding: 5rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'small' && `
		padding: 2rem 0;
		margin: 0 2rem;
	`}

	border-top: .2rem solid ${StylePatterns.Color('blue-10')};
	display: grid;

	${props => props.screenType === 'small' && `
		grid-template-rows: auto auto auto auto;
		grid-template-areas:	"header"
								"brief"
								"main"
								"quote";
	`}
	${props => props.screenType === 'medium' && `
		grid-template-rows: auto auto auto auto;
		grid-template-areas:	"header"
								"brief"
								"main"
								"quote";
	`}
	${props => props.screenType === 'large' && `
		grid-template-rows: auto auto auto;
		grid-template-areas:	"header"
								"brief"
								"mainAndQuote";
	`}
`;
const SectionHeader = styled.h2`
	grid-area: header;
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
		column-count: 5;
		column-gap: 2rem;
	`}
`;
const BriefStatement = styled.p`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType !== 'small' && `
		display: inline-block;
		padding-left: 1rem;
		border-left: .2rem solid ${StylePatterns.Color('blue-7')};
	`}
	${props => props.screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('s', 'medium')};
	`}
	${props => props.screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('s', 'large')};
	`}

`;

/* const XXX = styled.div`

`;
const XXX = styled.div`

`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `

	`}
	${props => props.screenType === 'medium' && `

	`}
	${props => props.screenType === 'large' && `

	`}
`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `

	`}
	${props => props.screenType === 'medium' && `

	`}
	${props => props.screenType === 'large' && `

	`}
`;
const XXX = styled.div`
	${props => props.screenType === 'small' && `
		
	`}
	${props => props.screenType === 'medium' && `
		
	`}
	${props => props.screenType === 'large' && `
		
	`}
`; */

// CONTENTS












const returnLowerPageContent = screenType => (
	<div className="sb-root--bottom-content">
		<Section
			screenType={screenType}
		>
			<SectionHeader>Change Management</SectionHeader>
			<BriefContainer
				screenType={screenType}
			>
				<h3>Brief</h3>
				<BriefStatementsContainer
					screenType={screenType}
				>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 1.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 2. This is brief statement 2.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 3. This is brief statement 3. This is brief statement 3.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 4. This is another.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 5.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 6. This is another. This is another. This is another.
					</BriefStatement>
					<BriefStatement
						screenType={screenType}
					>
						This is brief statement 7.
					</BriefStatement>
				</BriefStatementsContainer>
			</BriefContainer>
		</Section>
	</div>
);

















const HeadTitle = 'The Hub';
const HeadDescription = 'Program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator. 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend. JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			2013 &ndash; 2019
		</p>
		<p>
			Museum of Science, Boston
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>The Hub</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<h2>
			Brief
		</h2>
		<BriefList
			screenType={screenType}
		>
			<BriefListItem
				screenType={screenType}
			>
				Managed program with team of 80+ direct stakeholders.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				My simultaneous roles: product owner / program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				Built suite of 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend.
			</BriefListItem>
			<BriefListItem
				screenType={screenType}
			>
				Key tech: JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.
			</BriefListItem>
		</BriefList>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<h2>
			Deeper Dive
		</h2>
		<DeepDiveList
			screenType={screenType}
		>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink href="#">
					<Icon
						iconPosition="after"
						iconContent="wrench"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Problems and Solutions
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink href="#">
					<Icon
						iconPosition="after"
						iconContent="users"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					The Team
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink href="#">
					<Icon
						iconPosition="after"
						iconContent="refresh"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Change Management
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink href="#">
					<Icon
						iconPosition="after"
						iconContent="cloud"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Technologies used
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink href="#">
					<Icon
						iconPosition="after"
						iconContent="trademark"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Branding
				</DeepDiveLink>
			</DeepDiveListItem>
		</DeepDiveList>
	</div>
);

// 	SEND TO PAGE COMPONENT

export default () => {
	return (
		<div className="sb-root--page-specification">
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Page
					screenType="small"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage={TitleImageSmall}
					topContentOne={returnTopContentOne('small')}
					topContentTwo={returnTopContentTwoBBB('small')}
					topContentThree={returnTopContentThree('small')}
					topContentFour={returnTopContentFour('small')}
					lowerPageContent={returnLowerPageContent('small')}
				/>
			</MediaQuery>
			<MediaQuery
				minWidth={ScreenSizes.ReturnMediumMin()}
				maxWidth={ScreenSizes.ReturnMediumMax()}
			>
				<Page
					screenType="medium"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage={TitleImageMedium}
					topContentOne={returnTopContentOne('medium')}
					topContentTwo={returnTopContentTwoBBB('medium')}
					topContentThree={returnTopContentThree('medium')}
					topContentFour={returnTopContentFour('medium')}
					lowerPageContent={returnLowerPageContent('medium')}
				/>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<Page
					screenType="large"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage={TitleImageMedium}
					topContentOne={returnTopContentOne('large')}
					topContentTwo={returnTopContentTwoBBB('large')}
					topContentThree={returnTopContentThree('large')}
					topContentFour={returnTopContentFour('large')}
					lowerPageContent={returnLowerPageContent('large')}
				/>
			</MediaQuery>
		</div>
	);
}
