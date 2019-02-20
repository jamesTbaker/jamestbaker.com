
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Collapsible from '../components/Collapsible';
import { Helmet } from 'react-helmet';
import StylePatterns from '../services/StylePatterns';

const BodyContentContainer = styled.div`
	margin: 0;
	padding: 1rem;
`;

const LocationContainer = styled.p`
	
`;

const StrongText = styled.span`
	font-weight: ${StylePatterns.FontWeight('bold')};
	color: ${StylePatterns.Color('yellow')};
`;

// ----- PAGE

export default () => (
	<Container
		title="Profile"
		titleBackgroundImage="bridge"
	>
		<Helmet>
			<title>Profile</title>
			<meta name="description" content="Profile of James T. Baker" />
		</Helmet>
		<BodyContentContainer>
			<p>Greater Boston, USA</p>
			<p><a href="/Profile Brief - James T. Baker.pdf">Profile Brief</a></p>
			<p>I speak suit, geek, and creative.</p>
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
		</BodyContentContainer>
	</Container>
);
