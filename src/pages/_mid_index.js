
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';
import TitleImageMedium from '../img/titleImages/processed/storrow-drive.jpg';
import TitleImageSmall from '../img/titleImages/processed/storrow-drive@0,5x.jpg';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ScreenSizes from '../services/ScreenSizes';
import PageTitle from '../components/PageTitle';
import PageBody from '../components/PageBody';
import StrongText from '../components/StrongText';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';

// ----- PAGE

const BodyContainer = styled.div`
	margin-left: 20rem;
	padding: ${props => props.screenType === 'small' ?
		'5rem 1rem' : '7rem 5rem'};
`;
const LocationContainer = styled.p`
	margin-bottom: .5rem;
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xs', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xs', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xs', 'large')};
	`}
`;
const ProfileBriefContainer = styled.p`
	margin-bottom: .5rem;
	font-weight: ${StylePatterns.FontWeight('light')};
`;
const TaglineContainer = styled.p`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xxl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xxl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xxl', 'large')};
	`}
`;
const SummaryContainer = styled.p`
	max-width: 50rem;
`;
const PageTitleText = 'Profile';
const PageDescription = 'Profile of James T. Baker';

const returnPageContent = screenType => (
	<BodyContainer
		screenType={screenType}
	>
		<h1>Header One</h1>
		<h2>Header Two</h2>
		<h3>Header Three</h3>
		<h4>Header Four</h4>
		<h5>Header Five</h5>
		<h6>Header Six</h6>
		<LocationContainer
			screenType={screenType}
		>
			Greater Boston, USA
		</LocationContainer>
		<ProfileBriefContainer>
			<a href={ProfileBrief}>
				Profile Brief
				<Icon
					iconPosition="after"
					iconContent="cloud-download"
					iconSize="1.5"
				/>
			</a>
		</ProfileBriefContainer>
		<TaglineContainer
			screenType={screenType}
		>
			I speak suit, geek, and creative.
		</TaglineContainer>
		<SummaryContainer>
			My <StrongText>19 years'</StrongText> experience in&nbsp;
			<StrongText>design</StrongText>,&nbsp;
			<StrongText>technical product development</StrongText>, and&nbsp;
			<StrongText>management</StrongText>&nbsp;
			have allowed me to <StrongText>lead and execute</StrongText> projects and operations
			at the intersection of business, software development, and
			visual / UX design + digital media.
		</SummaryContainer>
		<h2>Business Skills</h2>
		<ul>
			<li>Communicating and motivating across organizational levels and boundaries</li>
			<li>Leadership</li>
			<li>Analysis, research, design thinking, systems thinking</li>
			<li>Staff development, team building</li>
			<Collapsible
				expandText="Discover more business skills"
				collapseText="Show fewer business skills"
				buttonPosition="after"
			>
				<li>Active listening</li>
				<li>Financial management</li>
				<li>Business analysis</li>
			</Collapsible>
		</ul>
		<h2>Design Skills</h2>
		<ul>
			<li>Art direction</li>
			<li>A/B testing</li>
		</ul>
	</BodyContainer>
);

{/* <SiteBanner screenType="small" /> */ }
{/* <PageTitle
	backgroundImage={props.backgroundImage}
	text={props.title}
	screenType="small"
/> */}

{/* <SiteBanner screenType="medium" /> */ }
{/* <PageTitle
	backgroundImage={props.backgroundImage}
	text={props.title}
	screenType="medium"
/> */}

{/* <SiteBanner screenType="large" /> */ }
{/* <PageTitle
	backgroundImage={props.backgroundImage}
	text={props.title}
	screenType="large"
/> */}





export default () => {
	return (
		<div>
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Header
					title={PageTitleText}
					backgroundImage={TitleImageSmall}
					description={PageDescription}
				/>
				<PageBody
					screenType="small"
				>
					{returnPageContent('small')}
				</PageBody>
			</MediaQuery>
			<MediaQuery
				minWidth={ScreenSizes.ReturnMediumMin()}
				maxWidth={ScreenSizes.ReturnMediumMax()}
			>
				<Header
					title={PageTitleText}
					backgroundImage={TitleImageMedium}
					description={PageDescription}
				/>
				<PageBody
					screenType="medium"
				>
					{returnPageContent('medium')}
				</PageBody>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<Header
					title={PageTitleText}
					backgroundImage={TitleImageMedium}
					description={PageDescription}
				/>
				<PageBody
					screenType="large"
				>
					{returnPageContent('large')}
				</PageBody>
			</MediaQuery>
			{/* <Footer /> */}
		</div>
	);
}
