
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';
import ImageBridge from '../img/titleImages/bridge.jpg';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';

// ----- PAGE

const StrongText = styled.span`
	font-weight: ${StylePatterns.FontWeight('bold')};
	color: ${StylePatterns.Color('yellow-1')};
`;

const BodyContainer = styled.div`
	margin: 0;
	padding: 3rem 1rem 1rem;
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
	font-size: ${StylePatterns.FontSize('xl')};
`;

export default () => (
	<div>
		<Header
			title="Profile"
			titleBackgroundImage={ImageBridge}
			description="Profile of James T. Baker"
		/>
		<BodyContainer>
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
			<p>
				My <StrongText>19 years'</StrongText> experience in <StrongText>design</StrongText>,&nbsp;
				<StrongText>technical product development</StrongText>, and <StrongText>management</StrongText> 
				have allowed me to <StrongText>lead and execute</StrongText> projects and operations 
				at the intersection of business, software development, and 
				visual / UX design + digital media.
			</p>
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
		<Footer />
	</div>
);
