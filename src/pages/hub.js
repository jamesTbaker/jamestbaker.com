
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';
import ImageStreaks from '../img/titleImages/streaks.jpg';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';
import { Section, Subsection, Box } from '../components/Boxes';
import { checkPropTypes } from 'prop-types';
import ImageProto from '../img/proto/proto.png';

// ----- PAGE
const DateContainer = styled.p`
	margin-bottom: .5rem;
	font-size: ${StylePatterns.FontSize('xs')};
`;
const ClientContainer = styled.p`
	margin-bottom: .5rem;
	font-weight: ${StylePatterns.FontWeight('regular')};
`;
const returnPageContent = screenType => (
	<div>
		<DateContainer>2013 &ndash; 2019</DateContainer>
		<ClientContainer>Museum of Science, Boston</ClientContainer>
		<Section
			screenType={screenType}
		>
			<Subsection>
				<Box
					containsText
					screenType={screenType}
				>
					<h2>Concept</h2>
					<ul>
						<li>Collaboration and publishing / messaging and files / workspaces - thus, the name</li>
						<li>Accessibility</li>
						<li>Access control</li>
						<li>Retire old servers, on-premise to cloud</li>
						<li>Workflows</li>
						<li>Avoided replicating the old stuff; asked people how they worked and strategized how software could make that better; would have been quicker if we just replaced the old stuff</li>
					</ul>
				</Box>
			</Subsection>
			<Subsection>
				<Box
					containsText
					screenType={screenType}
				>
					<h2>Tech</h2>
					<ul>
						<li>Decision to use SP predates me. I prefer Linux, but the org prefers Windows</li>
						<li>Workflow engine - provision app site from template and alter settings to create an app</li>
						<li>Neso API services</li>
						<li>Node.js, mongoDB, Express, Windows Server, React, SP, jQuery, Sass</li>
						<li>Organize above tech into "things" (workflows vs. Neso, etc.)</li>
						<li>Adobe suite</li>
					</ul>
				</Box>
			</Subsection>
		</Section>

		<Section
			screenType={screenType}
		>
			<h2>Branding</h2>
			<p>Aside from typical branding concerns, branding was used to create sense that the project was in professional hands and that there was ROI even for those without technical concerns.</p>
			<Box
				containsText
				screenType={screenType}
			>
				<h3>Logo & Typography</h3>
				<ul>
					<li>Logo appears in proximity to org's main brand</li>
					<li>Logo make use of org's main brand pallet to evoke Hub concept</li>
					<li>Logo is hand-edited SVG that can be targeted with CSS</li>
					<li>Typography matches SP, but just for now</li>
				</ul>
			</Box>
			<Box
				screenType={screenType}
			>
				<img src={ImageProto} width="100%" style={{ display: 'block' }}/>
			</Box>
			<Box
				containsText
				screenType={screenType}
			>
				<h3>Color Pallet</h3>
				<ul>
					<li>Reflects the org's main brand</li>
					<li>Accessibility</li>
					<li>Sass vars</li>
				</ul>
			</Box>
			<Box
				screenType={screenType}
			>
				<img src={ImageProto} width="100%" />
			</Box>
			<Box
				containsText
				screenType={screenType}
			>
				<h3>Video and Photography</h3>
				<ul>
					<li>Photos comply with org's main brand</li>
					<li>About the video bumper / change management videos and text pages</li>
				</ul>
			</Box>
			<Box
				screenType={screenType}
			>
				<img src={ImageProto} width="100%" />
			</Box>
		</Section>

		<Section
			screenType={screenType}
		>
			<Box
				containsText
				screenType={screenType}
			>
				<h2>Content & Features</h2>
				<ul>
					<li>Workflows</li>
					<li>Documents and web content re: benefits, policies, accounting practices, workplace safety</li>
					<li>Org browser - populated from HRIS and AD</li>
				</ul>
			</Box>
			<Box
				containsText
				screenType={screenType}
			>
				<h2>Team</h2>
				<ul>
					<li>I was sole product owner, PM, developer</li>
					<li>100+ direct stakeholders, each with their own need</li>
				</ul>
			</Box>
			<Box
				containsText
				screenType={screenType}
			>
				<h2>Change Management</h2>
				<ul>
					<li>Content and features were organized to ease transition</li>
					<li>Help sessions</li>
					<li>Content and links in old and new places to guide people to what they need</li>
					<li>Graduated releases</li>
					<li>Feedback told us that some users want even more hand-holding, so we're going to make videos and text pages</li>
				</ul>
			</Box>
		</Section>
	</div>
);

export default () => {
	return (
		<div>
			<Header
				title="The Hub"
				titleBackgroundImage={ImageStreaks}
				description="Work: The Hub"
			/>
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
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
				<PageBody
					screenType="medium"
				>
					{returnPageContent('medium')}
				</PageBody>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<PageBody
					screenType="large"
				>
					{returnPageContent('large')}
				</PageBody>
			</MediaQuery>
			<Footer />
		</div>
	);
}
