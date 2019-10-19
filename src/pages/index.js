
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import TitleImageMedium from '../img/titleImages/processed/storrow-drive.jpg';
import TitleImageSmall from '../img/titleImages/processed/storrow-drive@0,5x.jpg';
import Collapsible from '../components/Collapsible';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';
import { scroller } from 'react-scroll';
import BackToDeepDiveLink from '../components/BackToDeepDiveLink';


// ----- PAGE

// STYLED COMPONENTS

const BriefContainer = styled.p`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('m', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('m', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('m', 'large')};
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
	cursor: pointer;
	
	&:hover {
		border: 0;
	}
`;
const Section = styled.section`
	${props => props.screenType === 'large' && `
		padding: 5rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'medium' && `
		padding: 5rem 0 2rem 0;
		margin: 0 5rem;
	`}
	${props => props.screenType === 'small' && `
		padding: 2rem 0;
		margin: 0 2rem;
	`}

	border-top: .2rem solid ${StylePatterns.Color('blue-10')};
`;
const SectionHeader = styled.h2`
`;


const LowerPageContentContainer = styled.div`
`;
const SkillsListsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "business design tech";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const SkillsList = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;


const JobContainer = styled.div`
	margin-bottom: 2rem;
`;


const JobTitle = styled.h3`
	${props => props.screenType === 'large' && `
		max-width: 60%;
	`}
`;

const JobEmployer = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;

const JobDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;

const JobDescription = styled.div`
	font-weight: ${StylePatterns.FontWeight('light')};
	margin: 1rem 0 .25rem;

	${props => props.screenType === 'medium' && `
		column-count: 2;
		column-gap: 5rem;
	`}
	${props => props.screenType === 'large' && `
		column-count: 3;
		column-gap: 5rem;
	`}
`;





const EducationAndCertificationsSectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "certifications grad undergrad";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const EducationAndCertificationsSection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;


const SchoolTitle = styled.h3`
`;

const SchoolSubjectOrDegree = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;

const SchoolDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;


const VolunteerExperiencesSectionsContainer = styled.div`
	${props => props.screenType !== 'small' && `
		display: grid;
		grid-template-areas: "latest mid earliest";
		grid-template-rows: auto;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 5rem 5rem;
	`}
`;
const VolunteerExperiencesSection = styled.div`
	${props => props.screenType !== 'small' && `
		grid-area: ${props.gridArea};
	`}
`;
const VolExpContribution = styled.h3`
`;

const VolExpOrganization = styled.p`
	font-weight: ${StylePatterns.FontWeight('medium')};
	margin: .5rem 0 .25rem;
`;

const VolExpDates = styled.p`
	font-weight: ${StylePatterns.FontWeight('regular')};
	font-style:  italic;
	margin: .5rem 0 .25rem;
`;

// CONTENTS

const handleSkillsNavItemClick = () => {
	scroller.scrollTo('skills', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleProfressionalExperienceNavItemClick = () => {
	scroller.scrollTo('professional-experience', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleEdAndCertificationsNavItemClick = () => {
	scroller.scrollTo('education-and-certifications', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};
const handleVolunteerExperienceNavItemClick = () => {
	scroller.scrollTo('volunteer-experience', {
		duration: 500,
		offset: 0,
		delay: 0,
		smooth: 'easeInOutQuart',
	});
};

const HeadTitle = 'Profile';
const HeadDescription = 'Profile of James T. Baker';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			Greater Boston, USA
		</p>
		<p>
			<a href={ProfileBrief}>
				Profile Brief
				<Icon
					iconPosition="after"
					iconContent="cloud-download"
					iconSize="1.5"
				/>
			</a>
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>Profile</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<h2>I speak suit, geek, and creative.</h2>
		<BriefContainer
			screenType={screenType}
		>
			My <em>19 years'</em> experience in&nbsp;
			<em>design</em>,&nbsp;
			<em>technical product development</em>, and&nbsp;
			<em>management</em>&nbsp;
			have allowed me to <em>lead and execute</em> projects and operations
			at the intersection of business, software development, and
			visual / UX design + digital media.
		</BriefContainer>

	</div>
);
const returnTopContentFour = screenType => (
	<div
		className="sb-root--top-content"
		id="deep-dive-container"
	>
		<h2>
			Deep Dive
		</h2>
		<DeepDiveList
			screenType={screenType}
		>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleSkillsNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="flask"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Skills
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleProfressionalExperienceNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="history"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Professional Experience
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleEdAndCertificationsNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="bank"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Education & Certifications
				</DeepDiveLink>
			</DeepDiveListItem>
			<DeepDiveListItem
				screenType={screenType}
			>
				<DeepDiveLink
					onClick={handleVolunteerExperienceNavItemClick}
				>
					<Icon
						iconPosition="after"
						iconContent="heart-o"
						iconSize="1.8"
						color={StylePatterns.Color('grey-12')}
					/>&nbsp;
					Volunteer Experience
				</DeepDiveLink>
			</DeepDiveListItem>
		</DeepDiveList>
	</div>
);
const returnLowerPageContent = screenType => (
	<LowerPageContentContainer
		className="sb-root--lower-content"
		screenType={screenType}
	>
		<Section
			screenType={screenType}
			id="skills"
		>
			<SectionHeader>Skills</SectionHeader>
			<SkillsListsContainer
				screenType={screenType}
			>
				<SkillsList
					screenType={screenType}
					gridArea="business"
				>
					<h3>Business Skills</h3>
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
							<li>Developing and coaching individuals</li>
							<li>JIRA, Microsoft Project, Trello, Figma</li>
							<li>Process engineering</li>
							<li>Product development</li>
							<li>Product / project / program management</li>
							<li>Scrum Master</li>
							<li>Customer service and support</li>
							<li>Information integration and synthesis </li>
							<li>Verbal and written communication</li>
							<li>Cross-functional leadership / management</li>
							<li>Business strategy, strategic planning, strategic management</li>
							<li>Documentation</li>
							<li>Risk management</li>
							<li>Change management</li>
							<li>Collaboration, conflict management, delegation, negotiation</li>
							<li>Prioritizing, scheduling, decision making, delegation</li>
							<li>Emotional intelligence, cultural intelligence, empathy, mentoring, diplomacy, patience, building trust</li>
							<li>Critical observation, constructive feedback</li>
						</Collapsible>
					</ul>
				</SkillsList>
				<SkillsList
					screenType={screenType}
					gridArea="design"
				>
					<h3>Design / Engineering Skills</h3>
					<ul>
						<li>Art direction</li>
						<li>A/B testing</li>
						<li>Analysis, research, design thinking, systems thinking</li>
						<li>User / customer experience engineering</li>
						<li>Wireframing, prototyping, user testing</li>
						<li>Creative problem solving</li>
						<Collapsible
							expandText="Discover more design and engineering skills"
							collapseText="Show fewer design skills"
							buttonPosition="after"
						>
							<li>Digital and print</li>
							<li>Content strategy, content management, copywriting, copy editing</li>
							<li>Data visualization</li>
							<li>Typography, color, composition</li>
							<li>Adobe Illustrator, Photoshop, After Effects, Audition, InDesign, Premiere, XD</li>
							<li>Figma</li>
							<li>Video editing, basic animation</li>
							<li>Digital asset management</li>
							<li>Brand strategy, brand development</li>
						</Collapsible>
					</ul>
				</SkillsList>
				<SkillsList
					screenType={screenType}
					gridArea="tech"
				>
					<h3>Tech Skills</h3>
					<ul>
						<li>JavaScript / ES6</li>
						<li>React</li>
						<li>NodeJS</li>
						<li>NoSQL, MongoDB</li>
						<li>SQL</li>
						<li>REST API development</li>
						<li>Serverless / AWS Lambda functions</li>
						<li>Creative problem solving</li>
						<li>Design strategy</li>
						<Collapsible
							expandText="Discover more tech skills"
							collapseText="Show fewer tech skills"
							buttonPosition="after"
						>
							<li>JIRA, Microsoft Project, Trello, Figma, JIRA system administration</li>
							<li>Product / project / program management</li>
							<li>Scrum Master</li>
							<li>macOS, Windows, Ubuntu Linux</li>
						</Collapsible>
					</ul>
				</SkillsList>
			</SkillsListsContainer>

			<BackToDeepDiveLink />
		</Section>
		
		
		
		
		<Section
			screenType={screenType}
			id="professional-experience"
		>
			<SectionHeader>Professional Experience</SectionHeader>


				<JobContainer>
					<JobTitle>Programs Manager: Web Enterprise Processes, Digital Media Asset Management, Business Data Feeds</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>July 2013 &mdash; Present</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Manage multiple enterprise software development programs, including all phases of SDLC, in a matrix organization.
								<ul>
									<li>
										Web Enterprise Processes &mdash; With dozens of stakeholders across the organization, analyzing 56 business processes, re-engineering for process improvements, and converting from paper and 1990s digital workflows to apps built on Office 365 / SharePoint Online. In many cases, reducing business process cycle time from days to minutes.							
									</li>
									<li>
										Digital Media Asset Management – Maintain and update DAMS used to store, organize, and search 30k+ images. Determine requirements for successor system, which will also house 40TB video and thousands of audio files, with help of stakeholders: marketing, product managers and developers, media producers, system administrators, and storage architects, finance/legal, librarians/archivists.
									</li>
									<li>
										Business Data Feeds – Work with software engineers, database administrators, and system administrators on requirements (data schemas, generation frequency), development, generation, storage, and maintenance of feeds (XML, JSON) communicating between enterprise and consumer-facing applications.
									</li>
								</ul>
							</li>
							<li>
								Developed proprietary business process API (JavaScript), in turn leveraging Microsoft’s REST APIs, to allow for rapid production of custom apps. Recognized by Microsoft personnel as a pioneer in the use of JavaScript and the REST APIs to solve proprietary business problems.
							</li>
							<li>
								Communicating with stakeholders and with hundreds of users: staff members, senior management, Chairman of the Board, vendors, and collaborating partners.
							</li>
							<li>
								Continually monitoring and controlling quality. Collecting and analyzing user feedback, and using it to inform and prioritize user stories.
							</li>
							<li>
								Alert stakeholders and senior management to risks and provide risk mitigation strategies.
							</li>
							<li>
								Converted programs from waterfall to agile and continue to drive other internal process improvements.
							</li>
							<li>
								Report to AVP of Information and Interactive Technology.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>
					

				<JobContainer>
					<JobTitle>Program Manager: Consumer Web Products</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>July 2011 &mdash; July 2013</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Manage web development program in a matrix organization.
							</li>
							<li>
								Program dimensions:
								<ul>
									<li>
										20+ websites / web apps: organization’s main website, numerous marketing and fundraising campaigns, research data collection used to influence environmental policy, education-oriented products, and internal digital signage.
									</li>
									<li>
										350k unique monthly visitors.
									</li>
									<li>
										Ecommerce, backend architecture, DevOps with internal and external admins, information architecture and content strategy, interactive UI features, accessibility meeting the standards for NSF and NASA funding, and visual branding and aesthetic.
									</li>
								</ul>
							</li>
							<li>
								Built agile (scrum) development team from scratch, including co-located and distributed team members (Boston and Shanghai), and including editors, UX designers, software engineers, and QA staff. Began as a very hands-on manager. Once the team was functioning and practices were set, stepped back to become primarily a ScrumMaster (helping product owners with backlogs and facilitating processes with the development team), as well as an advisor to the development team, and a liaison to senior management.
							</li>
							<li>
								Ensure revenue channels and opportunities are adequately supported, product goals were met, and organizational resources were utilized efficiently.
							</li>
							<li>
								Lead Web Governance Team (21 key stakeholders) and communicate with numerous other stakeholders across the organization. Lead prioritization and strategic discussions.
							</li>
							<li>
								Review analytics to evaluate and report on efficacy of web properties.
							</li>
							<li>
								Alert stakeholders and senior management to risks and provide risk mitigation strategies.
							</li>
							<li>
								Transformed culture surrounding these central and vital organizational assets. Led the introduction of agile processes to the organization.
							</li>
							<li>
								Report to AVP of Information and Interactive Technology.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>


				<JobContainer>
					<JobTitle>Designer / Full Stack Web Developer</JobTitle>
					<JobEmployer>Museum of Science, Boston</JobEmployer>
					<JobDates>August 2010 &mdash; July 2011</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Developed consumer web products inside a waterfall paradigm.
							</li>
							<li>
								Collaborated with stakeholders, content strategist, system administrators, other designers.
							</li>
							<li>
								Created visual designs and interactive user experiences, sometimes from scratch, and sometimes based on the work of exhibit designers and/or print marketing designers.
							</li>
							<li>
								Used PHP, MySQL, HTML, CSS, JavaScript, Flash, Illustrator, and Photoshop.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>


				<JobContainer>
					<JobTitle>Founder, Consulting Principal</JobTitle>
					<JobEmployer>jamesTbaker</JobEmployer>
					<JobDates>April 2002 &mdash; June 2011</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Consulted and contracted to develop web products, digital media, brands, and print collateral for small to medium businesses.
							</li>
							<li>
								Clients were primarily marketing departments of medium-sized businesses and owners of small businesses.
							</li>
							<li>
								Built distributed team of subcontractors in Boston, Seoul, Mumbai, London, and Melbourne.
							</li>
							<li>
								In early days, worked in waterfall paradigm, but moved to much more agile practices around 2006.
							</li>
							<li>
								Used PHP, MySQL, HTML, CSS, JavaScript, Flash, Illustrator, and Photoshop.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>


				<JobContainer>
					<JobTitle>Director of Food & Beverage</JobTitle>
					<JobEmployer>Hotel Ithaca</JobEmployer>
					<JobDates>June 2002 &mdash; July 2004</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Multimillion-dollar operations including events, restaurant, bar, and room service for 181 rooms.
							</li>
							<li>
								Reduced liquor cost.
							</li>
							<li>
								Stabilized operations.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>


				<JobContainer>
					<JobTitle>Director of Technology and Product</JobTitle>
					<JobEmployer>University Pride, Ltd.</JobEmployer>
					<JobDates>November 2000 &mdash; March 2002</JobDates>
					<JobDescription
						screenType={screenType}
					>
						<ul>
							<li>
								Oversaw market research to determine target market size and the features of a web portal desired by said market.
							</li>
							<li>
								Initiated and participated in the production of the redesigned portal.
							</li>
							<li>
								Like many dot-coms during this period, the company failed due to shifts in the viability of advertising-based business models.
							</li>
						</ul>
					</JobDescription>
				</JobContainer>


			<BackToDeepDiveLink />
		</Section>





		<Section
			screenType={screenType}
			id="education-and-certifications"
		>
			<SectionHeader>Education & Certifications</SectionHeader>

			<EducationAndCertificationsSectionsContainer
				screenType={screenType}
			>
				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="certifications"
				>
					<SchoolTitle>Certified ScrumMaster&reg; (CSM)</SchoolTitle>
					<SchoolSubjectOrDegree>Scrum Alliance</SchoolSubjectOrDegree>
					<SchoolDates>2015 &mdash; 2021</SchoolDates>
					<p>Credential ID: <a href="https://certification.scrumalliance.org/accounts/484936-james-t-baker/certifications" target="_blank">484936</a></p>

					<SchoolTitle>Project Management Professional (PMP)&reg;</SchoolTitle>
					<SchoolSubjectOrDegree>Project Management Institute (PMI)</SchoolSubjectOrDegree>
					<SchoolDates>2015 &mdash; 2021</SchoolDates>
					<p>Credential ID: <a href="https://www.youracclaim.com/badges/5fde2a55-c93f-4dc9-8cad-bbc52d24d815/linked_in_profile" target="_blank">1877258</a></p>

				</EducationAndCertificationsSection>


				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="grad"
				>
					<SchoolTitle>Tufts University</SchoolTitle>
					<SchoolSubjectOrDegree>Philosophy: Epistemology, Ethics</SchoolSubjectOrDegree>
					<SchoolDates>2007</SchoolDates>
				
					<SchoolTitle>Harvard Extension School</SchoolTitle>
					<SchoolSubjectOrDegree>Philosophy: Logic, Metaphysics</SchoolSubjectOrDegree>
					<SchoolDates>2006</SchoolDates>
				</EducationAndCertificationsSection>


				<EducationAndCertificationsSection
					screenType={screenType}
					gridArea="undergrad"
				>
					<SchoolTitle>Ithaca College</SchoolTitle>
					<SchoolSubjectOrDegree>B.S., Business Administration</SchoolSubjectOrDegree>
					<SchoolDates>2002</SchoolDates>
					<ul>
						<li>
							Concentration in Management
						</li>
						<li>
							Summa Cum Laude
						</li>
						<li>
							GPA: 3.921 / 4
						</li>
						<li>
							Dean's Scholar
						</li>
						<li>
							Named to Dean’s List all semesters
						</li>
						<li>
							Member, Sigma Iota Epsilon (student division of the National Academy of Management)
						</li>
					</ul>
				</EducationAndCertificationsSection>
			</EducationAndCertificationsSectionsContainer>
			<BackToDeepDiveLink />
		</Section>
		
		
		
		
		<Section
			screenType={screenType}
			id="volunteer-experience"
		>
			<SectionHeader>Volunteer Experience</SectionHeader>


			<VolunteerExperiencesSectionsContainer
				screenType={screenType}
			>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="latest"
				>
					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Rock and Roll Hall of Fame and Museum</VolExpOrganization>
					<VolExpDates>2015 &mdash; 2016</VolExpDates>
					<p>Developing automated business processes on top of Office 365 / SharePoint Online.</p>

					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>The Juilliard School</VolExpOrganization>
					<VolExpDates>2015</VolExpDates>
					<p>Developing automated business processes on top of Office 365 / SharePoint Online.</p>

					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Artists for Africa</VolExpOrganization>
					<VolExpDates>2014</VolExpDates>
					<p>Branding, website design, intellectual property management.</p>

				</VolunteerExperiencesSection>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="mid"
				>
					<VolExpContribution>Consultant</VolExpContribution>
					<VolExpOrganization>Museum of Science & Industry (MOSI)</VolExpOrganization>
					<VolExpDates>2013</VolExpDates>
					<p>Building web apps on top of Drupal.</p>

					<VolExpContribution>Laborer, Instructor</VolExpContribution>
					<VolExpOrganization>Mexico City Municipal Government</VolExpOrganization>
					<VolExpDates>2003 &mdash; 2009</VolExpDates>
					<p>Semi-annual volunteer to help engage local youth in community improvement, especially through urban agriculture.</p>

					<VolExpContribution>Tutor</VolExpContribution>
					<VolExpOrganization>Independent Contractor</VolExpOrganization>
					<VolExpDates>2001</VolExpDates>
					<p>Aiding students learning accounting, Microsoft Excel.</p>
				</VolunteerExperiencesSection>


				<VolunteerExperiencesSection
					screenType={screenType}
					gridArea="earliest"
				>
					<VolExpContribution>Vocalist</VolExpContribution>
					<VolExpOrganization>Christ Episcopal Church</VolExpOrganization>
					<VolExpDates>2001 &mdash; 2003</VolExpDates>
					<p>Periodic performer.</p>

					<VolExpContribution>Chapter Founder, Webmaster</VolExpContribution>
					<VolExpOrganization>East Texas PFLAG</VolExpOrganization>
					<VolExpDates>1999</VolExpDates>
					<p>Organized and recruited members for chapter. Created and maintained organization's web presence.</p>

					<VolExpContribution>Consultant, Designer</VolExpContribution>
					<VolExpOrganization>Jim Simon for City Council</VolExpOrganization>
					<VolExpDates>1998</VolExpDates>
					<p>Branding, production of campaign materials.</p>

				</VolunteerExperiencesSection>

			</VolunteerExperiencesSectionsContainer>

			<BackToDeepDiveLink />
		</Section>


		
	</LowerPageContentContainer>
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
