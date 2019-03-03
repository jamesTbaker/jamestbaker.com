
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StylePatterns from '../services/StylePatterns';
import TitleImageMedium from '../img/titleImages/processed/bus.jpg';
import TitleImageSmall from '../img/titleImages/processed/bus@0,5x.jpg';
import BodyImageMedium from '../img/ancillaryBodies/processed/antenna.jpg';
import BodyImageSmall from '../img/ancillaryBodies/processed/antenna@0,5x.jpg';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';


// ----- PAGE

const BodyContainer = styled.div`
	padding: ${props => props.screenType === 'small' ?
	'5rem 1rem' : '7rem 5rem 7rem 0'};
	${({ screenType }) => screenType !== 'small' && `
		background-size: cover;
		background-position: 50% center;
		background-image: url('${BodyImageMedium}');
	`}
`;
const PreambleContainer = styled.div`
	${({ screenType }) => screenType !== 'small' && `
		padding: 2rem;
		background-color: ${StylePatterns.Color('red-9')};
	`}
`;
const ContactContainer = styled.div`
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xxl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xxl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xxl', 'large')};
	`}
	${({ screenType }) => screenType !== 'small' && `
		padding: 2rem;
		background-color: ${StylePatterns.Color('red-9')};
	`}
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
	${({ screenType }) => screenType === 'small' && `
		font-size: ${StylePatterns.FontSize('xl', 'small')};
	`}
	${({ screenType }) => screenType === 'medium' && `
		font-size: ${StylePatterns.FontSize('xl', 'medium')};
	`}
	${({ screenType }) => screenType === 'large' && `
		font-size: ${StylePatterns.FontSize('xl', 'large')};
	`}
`;
const PageTitle = 'Contact';
const PageDescription = 'Contact James T. Baker';

const returnPageContent = screenType => (
	<BodyContainer
		screenType={screenType}
	>
		<PreambleContainer
			screenType={screenType}
		>
			<TaglineContainer
				screenType={screenType}
			>
				I'd love to hear from you.
			</TaglineContainer>
			<SummaryContainer
				screenType={screenType}
			>
				Whether you are hiring,
				starting a project, have feedback,
				or need consultation,
				let's start a conversation.
			</SummaryContainer>
		</PreambleContainer>
		<ContactContainer
			screenType={screenType}
		>
			<p>T: (617) 388-1222</p>
			<p>E: jtbkr@pm.me</p>
		</ContactContainer>
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
