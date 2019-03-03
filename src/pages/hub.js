
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StylePatterns from '../services/StylePatterns';
import TitleImageMedium from '../img/titleImages/processed/south-station.jpg';
import TitleImageSmall from '../img/titleImages/processed/south-station@0,5x.jpg';
import HubBrand from '../img/hub/Brand';
import DesktopViewMedium from '../img/hub/Desktop-view.jpg';
import DesktopViewSmall from '../img/hub/Desktop-view@0,5x.jpg';
import MobileViewMedium from '../img/hub/Mobile-view.jpg';
import MobileViewSmall from '../img/hub/Mobile-view@0,5x.jpg';
import PalletPreviewMedium from '../img/hub/Pallet-preview.jpg';
import PalletPreviewSmall from '../img/hub/Pallet-preview@0,5x.jpg';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';

// ----- PAGE
const DateContainer = styled.p`
	margin-bottom: .5rem;
	font-size: ${StylePatterns.FontSize('xs')};
`;
const ClientContainer = styled.p`
	margin-bottom: .5rem;
	font-weight: ${StylePatterns.FontWeight('regular')};
`;
const SectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"concept concept"
								"contentFeatures contentFeatures"
								"team changeManagement"
								"tech tech"
								"branding branding";
		grid-template-rows: auto auto auto auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const Section = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const ConceptSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "text image";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const ConceptSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const ContentFeaturesSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "image text";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const ContentFeaturesSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const TechSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "prose list";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const TechSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const BrandingSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"OneA	OneB"
								"TwoA	TwoB"
								"ThreeA	ThreeB";
		grid-template-rows: auto auto auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const BrandingSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const BrandRestrainer = styled.div`
	${props => props.screenType === 'large' && `
		max-width: 40rem;
	`}
	${props => props.screenType === 'small' && `
		max-width: 20rem;
	`}
`;

const PageTitle = 'The Hub';
const PageDescription = 'Work: The Hub';

const returnPageContent = screenType => (
	<div>
		<DateContainer>2013 &ndash; 2019</DateContainer>
		<ClientContainer>Museum of Science, Boston</ClientContainer>
		<SectionsContainer
			screenType={screenType}
		>
			<Section
				screenType={screenType}
				gridArea="concept"
			>
				<h2>Concept</h2>
				<ConceptSubsectionsContainer
					screenType={screenType}
				>
					<ConceptSubsection
						screenType={screenType}
						gridArea="text"
					>
						<ul>
							<li>Collaboration and publishing / messaging and files / workspaces - thus, the name</li>
							<li>Old apps were mostly ColdFusion, which no one uses anymore, and databases which the software team couldn't access</li>
							<li>Accessibility</li>
							<li>Access control</li>
							<li>Retire old servers, on-premise to cloud</li>
							<li>Workflows</li>
							<li>Avoided replicating the old stuff; asked people how they worked and strategized how software could make that better; would have been quicker if we just replaced the old stuff</li>
						</ul>
					</ConceptSubsection>
					<ConceptSubsection
						screenType={screenType}
						gridArea="image"
					>
						{
							screenType === 'small' &&

							<img src={DesktopViewSmall} width="100%" />
						}
						{
							screenType !== 'small' &&

							<img src={DesktopViewMedium} width="100%" />
						}
					</ConceptSubsection>
				</ConceptSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="contentFeatures"
			>
				<h2>Content & Features</h2>
				<ContentFeaturesSubsectionsContainer
					screenType={screenType}
				>
					<ContentFeaturesSubsection
						screenType={screenType}
						gridArea="text"
					>
						<ul>
							<li>Workflows</li>
							<li>Documents and web content re: benefits, policies, accounting practices, workplace safety</li>
							<li>Org browser - populated from HRIS and AD</li>
							<li>In yellow: Demos coming</li>
						</ul>
					</ContentFeaturesSubsection>
					<ContentFeaturesSubsection
						screenType={screenType}
						gridArea="image"
					>
						{
							screenType === 'small' &&

							<img src={MobileViewSmall} width="100%" />
						}
						{
							screenType !== 'small' &&

							<img src={MobileViewMedium} width="100%" />
						}
					</ContentFeaturesSubsection>
				</ContentFeaturesSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="team"
			>
				<h2>Team</h2>
				<ul>
					<li>I was sole product owner, PM, developer</li>
					<li>100+ direct stakeholders, each with their own need</li>
				</ul>
			</Section>
			<Section
				screenType={screenType}
				gridArea="changeManagement"
			>
				<h2>Change Management</h2>
				<ul>
					<li>Content and features were organized to ease transition</li>
					<li>Help sessions</li>
					<li>Content and links in old and new places to guide people to what they need</li>
					<li>Graduated releases</li>
					<li>Feedback told us that some users want even more hand-holding, so we're going to make videos and text pages</li>
				</ul>
			</Section>
			<Section
				screenType={screenType}
				gridArea="tech"
			>
				<h2>Tech</h2>
				<TechSubsectionsContainer
					screenType={screenType}
				>
					<TechSubsection
						screenType={screenType}
						gridArea="prose"
					>
						<h3>Prose</h3>
						<ul>
							<li>Decision to use SP predates me. I prefer Linux, but the org prefers Windows</li>
							<li>Workflow engine - provision app site from template and alter settings to create an app</li>
							<li>Neso API services</li>
							<li>Node.js, mongoDB, Express, Windows Server, React, SP, jQuery, Sass</li>
							<li>Organize above tech into "things" (workflows vs. Neso, etc.)</li>
							<li>Adobe suite, Inkscape, Figma</li>
						</ul>
					</TechSubsection>
					<TechSubsection
						screenType={screenType}
						gridArea="list"
					>
						<h3>List, Key Stats</h3>
						<ul>
							<li>Decision to use SP predates me. I prefer Linux, but the org prefers Windows</li>
							<li>Workflow engine - provision app site from template and alter settings to create an app</li>
							<li>Neso API services</li>
							<li>Node.js, mongoDB, Express, Windows Server, React, SP, jQuery, Sass</li>
							<li>Organize above tech into "things" (workflows vs. Neso, etc.)</li>
							<li>Adobe suite, Inkscape, Figma</li>
						</ul>
					</TechSubsection>
				</TechSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="branding"
			>
				<h2>Branding</h2>
				<p>Aside from typical branding concerns, branding was used to create sense that the project was in professional hands and that there was ROI even for those without technical concerns.</p>
				<BrandingSubsectionsContainer
					screenType={screenType}
				>
					<BrandingSubsection
						screenType={screenType}
						gridArea="OneA"
					>
						<h3>Logo & Typography</h3>
						<ul>
							<li>Logo appears in proximity to org's main brand</li>
							<li>Logo make use of org's main brand pallet to evoke Hub concept</li>
							<li>Logo is hand-edited SVG that can be targeted with CSS</li>
							<li>Logo works on light and dark backgrounds, and in greyscale</li>
							<li>Typography matches SP, but just for now</li>
						</ul>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="OneB"
					>
						<BrandRestrainer
							screenType={screenType}
						>
							<HubBrand />
						</BrandRestrainer>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="TwoB"
					>
						<h3>Color Pallet</h3>
						<a href="https://www.figma.com/file/e6ttbXfwvFZa5jhj0FHVAT3o/Color">
							Check out the full pallet in Figma
						</a>
						<ul>
							<li>Reflects the org's main brand</li>
							<li>Accessibility</li>
							<li>Sass vars</li>
						</ul>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="TwoA"
					>
						{
							screenType === 'small' &&

							<img src={PalletPreviewSmall} width="100%" />
						}
						{
							screenType !== 'small' &&

							<img src={PalletPreviewMedium} width="100%" />
						}
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="ThreeA"
					>
						<h3>Video and Photography</h3>
						<ul>
							<li>Photos comply with org's main brand</li>
							<li>About the video bumper / change management videos and text pages</li>
						</ul>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="ThreeB"
					>
						<div style={{ position: 'relative', paddingTop: '56.25%' }}>
							<iframe
								style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
								src="https://www.youtube.com/embed/0iyG-OUl2GQ"
								frameBorder="0"
								allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
								allowFullScreen
							>
							</iframe>
						</div>
					</BrandingSubsection>
				</BrandingSubsectionsContainer>
			</Section>
		</SectionsContainer>
	</div>
);

export default () => {
	return (
		<div>
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Header
					title={PageTitle}
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
					title={PageTitle}
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
					title={PageTitle}
					backgroundImage={TitleImageMedium}
					description={PageDescription}
				/>
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
