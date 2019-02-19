
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import Container from '../components/Container';
import Collapsible from '../components/Collapsible';
import { Helmet } from 'react-helmet';

const LocationContainer = styled.p`
`;

const StrongText = styled.span`
	font-weight: 900;
	color: red;
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
		<LocationContainer>
			Greater Boston, USA
		</LocationContainer>
		<div>
			<a href="/Profile Brief - James T. Baker.pdf">Profile Brief</a>
		</div>
		<p>I speak suit, geek, and creative.</p>
		<p>
			My <StrongText>19 years'</StrongText> experience in design, technical product development, and management 
			have allowed me to lead and execute projects and operations 
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
	</Container>
);
