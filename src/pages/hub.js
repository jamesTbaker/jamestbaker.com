
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
import ContactsMedium from '../img/hub/Contacts.jpg';
import ContactsSmall from '../img/hub/Contacts@0,5x.jpg';
import PrivateMedium from '../img/hub/Private.png';
import PrivateSmall from '../img/hub/Private@0,75x.png';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';

// ----- PAGE

const BodyContainer = styled.div`
	padding-top: ${props => props.screenType === 'small' ?
		'5rem' : '0'};
	padding-bottom: ${props => props.screenType === 'small' ?
		'5rem' : '7rem'};
`;
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
		grid-template-areas:	"summary summary"
								"problemSolution problemSolution"
								"productView productView"
								"team changeManagement"
								"tech tech"
								"branding branding";
		grid-template-rows: auto auto auto auto auto auto;
		grid-template-columns: 1fr 1fr;
	`}
`;
const Section = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
	padding-left: ${props => props.screenType === 'small' ?
		'1rem' : '5rem'};
	padding-right: ${props => props.screenType === 'small' ?
		'1rem' : '5rem'};
	${props => props.screenType !== 'small' && `
		padding-top: 5rem;
		padding-bottom: 5rem;
	`}
	${props => props.screenType !== 'small' && props.backgroundColor && `
		background-color: ${StylePatterns.Color(props.backgroundColor)};
		color: ${StylePatterns.Color('grey-15')};
	`}
`;
const SummmarySubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"OneA OneA"
								"TwoA TwoB";
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 5rem;
	`}
`;
const SummmarySubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;



const ProblemSolutionSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "problem solution";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const ProblemSolutionSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const ProductViewsSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas:	"mobile desktop"
								"disclaimer disclaimer";
		grid-template-rows: auto auto;
		grid-template-columns: 1fr 1fr;
		grid-column-gap: 5rem;
	`}
`;
const ProductViewsSubsection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const TechSubsectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "list prose";
		grid-template-rows: auto;
		grid-template-columns: 1fr 3fr;
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
		${StylePatterns.VerticalAlignMiddle()};
	`}
	${props => props.screenType === 'small' && `
		max-width: 20rem;
	`}
`;
const PrivateRestrainer = styled.div`
	${props => props.screenType === 'large' && `
		text-align: right;

		img {
			max-width: 40rem;
			margin-right: 0;
			margin-left: auto;
			margin-bottom: 2rem;
		}
	`}
	${props => props.screenType === 'small' && `
		max-width: 20rem;
	`}
`;

const PageTitle = 'The Hub';
const PageDescription = 'Work: The Hub';

const returnPageContent = screenType => (
	<BodyContainer
		screenType={screenType}
	>
		<SectionsContainer
			screenType={screenType}
		>
			<Section
				screenType={screenType}
				gridArea="summary"
			>
				<SummmarySubsectionsContainer
					screenType={screenType}
				>
					<SummmarySubsection
						screenType={screenType}
						gridArea="OneA"
					>
						<DateContainer>2013 &ndash; 2019</DateContainer>
						<ClientContainer>Museum of Science, Boston</ClientContainer>
					</SummmarySubsection>
					<SummmarySubsection
						screenType={screenType}
						gridArea="TwoA"
					>
						<h2>Brief</h2>
						<ul>
							<li>Managed program with team of 80+ direct stakeholders.</li>
							<li>My simultaneous roles: product owner / program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer, partial system administrator.</li>
							<li>Built suite of 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend.</li>
							<li>Transitioned from problematic on-premise servers to cloud service and updated on-premise API server.</li>
							<li>Key tech: JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.</li>
						</ul>
					</SummmarySubsection>
					<SummmarySubsection
						screenType={screenType}
						gridArea="TwoB"
					>
						<h2>Deeper Dive</h2>
						<ul>
							<li>Problems this organization faced and their solutions</li>
							<li>The Team</li>
							<li>Change Management</li>
							<li>Technologies used</li>
							<li>Branding</li>
						</ul>
					</SummmarySubsection>
				</SummmarySubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="problemSolution"
				backgroundColor="yellow-9"
			>
				<ProblemSolutionSubsectionsContainer
					screenType={screenType}
				>
					<ProblemSolutionSubsection
						screenType={screenType}
						gridArea="problem"
					>
						<h2>Problems</h2>
						<p>
							The Museum had an extensive but problematic group of web-based, enterprise software applications and contents.
						</p>
						<ul>
							<li>These were built in the late 90s / early 2000s, mostly in ColdFusion, a language now used by relatively few people and no one in the Museum.</li>
							<li>They stopped evolving over a decade earlier and no longer matched the organization’s business processes.</li>
							<li>Over 400k files - some logs, decades of image uploads, an an unknown number filled with spaghetti code.</li>
							<li>A partial reboot effort several years prior left staff navigating between two systems.</li>
							<li>Staff members were clamoring for apps that worked the way they worked, wherever they worked, and more apps to solve more problems.</li>
							<li>The on-premise server running the old apps violated PCI standards and the organization was faced with the prospect of investing in costly upgrades.</li>
						</ul>
						<p>
							For all their deficiencies, these apps were indispensable. Hundreds of staff and board members used them daily, not only to accomplish discrete, structured tasks and familiarize themselves with policies, but to service more organic needs like collaborating on grant proposals, finding translators for onsite visitors, identifying subject matter experts for media requests, and recruiting ad hoc help for private events, marketing campaigns, product testing, fundraisers, and cleaning up the Charles River.
						</p>
					</ProblemSolutionSubsection>
					<ProblemSolutionSubsection
						screenType={screenType}
						gridArea="solution"
					>
						<h2>Solutions</h2>
						<p>
							I decided to start over, building a new suite of bespoke, responsive, accessible apps and contents from scratch. What we achieved:
						</p>
						<ul>
							<li>Avoided replicating the old stuff; asked people how they worked and strategized how software could make that better; would have been quicker if we just replaced the old stuff</li>
							<li>Workflows</li>
							<li>Accessibility</li>
							<li>Access control</li>
							<li>Collaboration and publishing / messaging and files / workspaces - thus, the name</li>
							<li>Documents and web content re: benefits, policies, accounting practices, workplace safety</li>
							<li>Org browser - populated from HRIS and AD</li>
							<li>Retire old servers, on-premise to cloud</li>
							<li>Reduced codebase</li>
							<li>In yellow: Demos coming</li>
						</ul>
					</ProblemSolutionSubsection>
				</ProblemSolutionSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="productView"
				backgroundColor="blue-16"
			>
				<ProductViewsSubsectionsContainer
					screenType={screenType}
				>
					<ProductViewsSubsection
						screenType={screenType}
						gridArea="mobile"
					>
						{
							screenType === 'small' &&

							<img src={MobileViewSmall} width="100%" />
						}
						{
							screenType !== 'small' &&

							<img src={MobileViewMedium} width="100%" />
						}
					</ProductViewsSubsection>
					<ProductViewsSubsection
						screenType={screenType}
						gridArea="desktop"
					>
						{
							screenType === 'small' &&

							<img src={DesktopViewSmall} width="100%" />
						}
						{
							screenType !== 'small' &&

							<img src={DesktopViewMedium} width="100%" />
						}
					</ProductViewsSubsection>
					<ProductViewsSubsection
						screenType={screenType}
						gridArea="disclaimer"
					>
						<p style={{ padding: '2rem', margin: '2rem 0 0', textAlign: 'center', backgroundColor: StylePatterns.Color('blue-6'), color: StylePatterns.Color('white') }}>More photos and demo videos are on the way.</p>
					</ProductViewsSubsection>
				</ProductViewsSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="team"
			>
				<h2>Team</h2>
				<p>I was fortunate to work directly with over 80 stakeholders, from security staff to scientists to accountants to VPs to event planners to the COO and the Board Chair. Each person brought a unique perspective on the organization, a distinct set of challenges they faced in their work, and fresh thinking about how software can solve problems.</p>
				<p>Consistent with much of my career, I wore a number of hats while building The Hub. I have been the product owner / program manager, but I've also been the business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer, and partial system administrator.
				</p>
			</Section>
			<Section
				screenType={screenType}
				gridArea="changeManagement"
			>
				<h2>Change Management</h2>
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
			</Section>
			<Section
				screenType={screenType}
				gridArea="tech"
				backgroundColor="yellow-9"
			>
				<h2>Tech</h2>
				<TechSubsectionsContainer
					screenType={screenType}
				>
					<TechSubsection
						screenType={screenType}
						gridArea="list"
					>
						<h3>Brief</h3>
						<p><b>REST API microservices</b> &mdash; Node.js, MongoDB, Express, ImageMagick, Windows Server</p>
						<p><b>Frontend</b> &mdash; React, Sass, Webpack, SharePoint Framework (SPFx)</p>
						<p><b>Client-side workflow engine</b> &mdash; JavaScript, jQuery, Sass</p>
						<p><b>Access control, file management, client-side hosting</b> &mdash; Microsoft SharePoint / Office 365</p> 
						<p><b>Helpers</b> &mdash; Adobe Creative Cloud, Inkscape, and Figma</p>
					</TechSubsection>
					<TechSubsection
						screenType={screenType}
						gridArea="prose"
					>
						<h3>The Story</h3>
						<p>
							I'm a fan of Linux and other open source / libre technologies, but the Museum loves Microsoft, which has been a generous donor. Prior to my tenure, it was determined that whatever replaced the legacy systems would be built on Microsoft SharePoint Online with Microsoft InfoPath being an out-of-the-box, point-and-click solution for building workflow apps to replace existing apps.
						</p>
						<p>
							After some time, I convinced the Associate VP that InfoPath was going to be an impossibility. Suited for some power users but not developers, it simply couldn't accomodate the Museum's more complex business needs, even when supplemented with C#. I'd mostly worked in PHP in the past, but here I'd inherited SharePoint Online, a cloud service with virtually no backend access. Morevoer, my knowledge of JavaScript was scant, frontend frameworks like React were not yet common, and SharePoint Framework (SPFx) did not yet exist.
						</p>
						<p>
							I learned enough JavaScript and jQuery to repurpose the base concept of <a href="https://youtu.be/28e-_VNqxGg">Forms7</a> (storing form data as JSON in a SharePoint list), added in a number of libraries, and built from scratch a client-side API that manages screens, permissions, workflow moderation, data validation, data storage and retrieval, and email notifications. 
						</p>
						<p>
							SharePoint's email API was problematic for us because it wouldn't allow an app to send email to someone who'd never used the app before. (Microsoft calls this a security feature.) So, spinning up a server was the only option. A sys admin installed Windows and connected the machine to the network, but none of us wanted to be responsible for PHP, Apache, and MySQL. So, I installed Node.js, Express, and MongoDB and built from scratch a REST API that receives email data and forwards it to the in-house email server &mdash; and now affords 71 other services, too.
						</p>
						<p>
							These days, a simple, custom, multi-stage workflow app with email notificaitons can be built in about an hour.
						</p>
						<p>
							In 2018, I began to bring these disparate apps together into a cohesive platform, opting for a frontend built with React, again learning a whole new paradigm from scratch. Challenging, but very rewarding.
						</p>
					</TechSubsection>
				</TechSubsectionsContainer>
			</Section>
			<Section
				screenType={screenType}
				gridArea="branding"
			>
				<h2>Branding</h2>
				<p>Aside from typical branding concerns, I was especially interested in using branding to communicate that this important part of the organization, which had been neglected for so long, was now in profressional hands. I truly believe that a great brand can inspire confidence and trust, and a brand doesn't have to be terrible to make people feel like they're dealing with an amateur they can't trust.
				</p>
				<BrandingSubsectionsContainer
					screenType={screenType}
				>
					<BrandingSubsection
						screenType={screenType}
						gridArea="OneA"
					>
						<h3>Logo & Typography</h3>
						<p>The Hub is an endorsed sub-brand of the Museum's parent brand. The Hub's logo uses samples from the organization's parent brand color pallet in a shape that evokes the concept of a hub (elements around a central fixture). The logo doesn't include direct references to the parent brand, but typically appears in proximity to the parent brand.
						</p>
						<p>While the creative work is my own, it was reviewed by the Museum's Brand Design Manager.</p>
						<p>
							The logo can be used on dark and light colored backgrounds, and can be reproduced in greyscale. The file itself is a hand-edited SVG that can be targeted with CSS.
						</p>
						<p>Typography has been an odd duck. The parent brand's typeface is Akzidenz Grotesque, the forerunner to Helvetica. However, some parts of The Hub, such as document library interfaces, are generated by Microsoft and we currently have limited "theming" capabilities. In these spaces, people will be met with Microsoft's font, Segoe. Until we can transition all of The Hub to the organization's parent brand typeface, all parts of The Hub use the Segoe typeface in order to create a cohesive and consistent experience across the platform.</p>
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
						<p>The bulk of The Hub is enterprise apps &mdash; think forms, data tables, policy PDFs, and the occasional calendar. How does one people to something that is, by its nature, impersonal? Obviously, <i>gratuitous</i> photo, video, and audio would get in the way of people's work, so color becomes the primary attractor. Thus, I've thrown in color just about everywhere it won't be an inhibitor or distraction.
						</p>
						<p>I wanted to use the organization’s parent brand pallet, but I knew that to maximize color usage I would need to put colored type on a colored background &mdash; and maintain accessiblity standards for foreground-background contrast. Therefore, I had to create a light-to-dark scale for each hue, and then create Sass variables and transparency mixins for each one.
						</p>
						<p>
							<a href="https://www.figma.com/file/e6ttbXfwvFZa5jhj0FHVAT3o/Color">
								Check out the full pallet in Figma
							</a>.
						</p>
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="TwoA"
					>
						{
							screenType === 'small' &&

							<div>
								<img src={PrivateSmall} width="100%" />
								<img src={PalletPreviewSmall} width="100%" />
							</div>
						}
						{
							screenType !== 'small' &&

							<div>
								<PrivateRestrainer
									screenType={screenType}
								>
									<img src={PrivateMedium} width="100%" />
								</PrivateRestrainer>
								<img src={PalletPreviewMedium} width="100%" />
							</div>
						}
					</BrandingSubsection>
					<BrandingSubsection
						screenType={screenType}
						gridArea="ThreeA"
					>
						<h3>Video and Photography</h3>
						<ul>
							<li>Photos comply with org's main brand</li>
							<li>Staff member photos comingß</li>
							<li>About the video bumper / change management videos and text pages</li>
							<li><a href="https://videos.pexels.com/videos/wheat-at-close-view-on-a-windy-day-1620048">Video resource</a></li>
							<li><a href="https://www.audioblocks.com/stock-audio/piano-sting-3-147124.html">Audio resource</a></li>
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
	</BodyContainer>
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
