
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import SectionBrief from '../components/SectionBrief';
import SectionBody from '../components/SectionBody';
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
	grid-template-rows: auto auto auto;
	grid-template-areas:	"header"
							"brief"
							"mainAndQuote";
`;
const SectionHeader = styled.h2`
	grid-area: header;
	width: 33%;
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
			<SectionBrief
				screenType={screenType}
				areas={[
					{
						area: 'one',
						statements: [
							'This is brief statement 1.',
							'This is brief statement 2. This is brief statement 2.'
						]
					}, {
						area: 'two',
						statements: [
							'This is brief statement 3. This is another. This is brief statement 3. This is another.'
						]
					}, {
						area: 'three',
						statements: [
							'This is brief statement 4. This is another.',
							'This is brief statement 5.'
						]
					}
				]}
			/>
			<SectionBody
				screenType={screenType}
				sectionTitle="Change Management"
				quote={{
					largeScreenPosition: 'right',
					content: 'Execution is everything'
				}}
			>
				<p>Rather than tackling the entire platform at once, my first step was to identify one best app for R&D, and use that app for testing and for midscale, organic publicity. I chose an app "owned" by my IT colleagues so that my first stakeholders would be among the most patient and understanding with my R&D. It also turned out that my IT colleagues had some of the highest expectations and most trenchant criticism, but that was good because it forced me to iterate to an elevated standard that likely saved me trouble later and saved time in the long run. As the app was used by managers across the organization, people quickly became aware of what I were doing.
				</p>
				<p>I continued the theme of leveraging relationships throughout this process. There was internal pressure to shut down one of the two servers in order to show progress, and I eventually did so. However, I insisted on blending that approach with working with one group of stakeholders at a time, regardless of where their apps were located. This was easier and sensible for the stakeholders, who don't think in terms of servers, but I also knew that this was the quickest path to the finish line. That's because the biggest bottleneck I faced was stakeholders' schedules, so working group by group resulted in less scheduling overhead.
				</p>
				<p>It's also important to note that I used an agile, graduated release process, averaging one app every few weeks. Because of this, my support requirement was spread across a large time horizon, which meant that I never had a huge number of support requests. In turn, that meant that I was able to respond to support requests quickly, often releasing iterations on several apps per day. This was important for fostering good will across the organization; I suspect that if I'd taken a waterfall approach and released all 56 apps simultaneously, some stakeholders would have been waiting months before I could address their concerns.
				</p>
				<p>As apps were replaced and contents migrated, the legacy gateway to the system was maintained with messaging and continually updating links to new apps, allowing me to guide people to new apps through their familiar pathways. Similarly, the initial draft of the new system's central gateway strikes a balance between familiar concepts and a strong impression of innovation that communicates a high ROI.
				</p>
				<p>As part of the final transition from old to new, I hosted multiple drop-in help sessions. Many questions were answered, and change-resistant hands were held. One of the more surprising outcomes of these sessions was the feedback that people would have preferred even more guidance throughout these changes. To that end, I've planned that significant future changes will be accompanied by screens explaining usage in text, for those who prefer reading, and demonstrating usage in video (and audio), for those who prefer viewing or listening.
				</p>
			</SectionBody>
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
