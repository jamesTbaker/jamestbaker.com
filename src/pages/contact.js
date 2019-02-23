
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';
import ImageBridge from '../img/titleImages/bridge.jpg';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';


// ----- PAGE

const StrongText = styled.span`
	font-weight: ${StylePatterns.FontWeight('bold')};
	color: ${StylePatterns.Color('yellow-1')};
`;
const LocationContainer = styled.p`
	padding-bottom: .5rem;
	font-size: ${StylePatterns.FontSize('xs')};
`;
const ProfileBriefContainer = styled.p`
	padding-bottom: .5rem;
	font-weight: ${StylePatterns.FontWeight('regular')};
`;
const TaglineContainer = styled.p`
	font-size: ${StylePatterns.FontSize('xxl')};
`;
const SummaryContainer = styled.p`
	max-width: 50rem;
`;
const returnPageContent = props => (
	<div>
		<LocationContainer>Greater Boston, USA</LocationContainer>
		<ProfileBriefContainer>
			<a href="/Profile Brief - James T. Baker.pdf">
				Profile Brief
							<Icon
					iconPosition="after"
					iconContent="cloud-download"
					iconSize="1.8"
				/>
			</a>
		</ProfileBriefContainer>
		<TaglineContainer>I speak suit, geek, and creative.</TaglineContainer>
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
	</div>
);

export default () => {
	return (
		<div>
			<Header
				title="Profile"
				titleBackgroundImage={ImageBridge}
				description="Profile of James T. Baker"
			/>
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<PageBody
					screenType="small"
				>
					{returnPageContent()}
				</PageBody>
			</MediaQuery>
			<MediaQuery
				minWidth={ScreenSizes.ReturnMediumMin()}
				maxWidth={ScreenSizes.ReturnMediumMax()}
			>
				<PageBody
					screenType="medium"
				>
					{returnPageContent()}
				</PageBody>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<PageBody
					screenType="large"
				>
					{returnPageContent()}
				</PageBody>
			</MediaQuery>
			<Footer />
		</div>
	);
}
