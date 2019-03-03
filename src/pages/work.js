
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StylePatterns from '../services/StylePatterns';
// import ImageURL from '../img/titleImages/_original/artem-sapegin-1229253-unsplash.jpg';
import TitleImageMedium from '../img/titleImages/processed/fenway-aerial.jpg';
import TitleImageSmall from '../img/titleImages/processed/fenway-aerial@0,5x.jpg';
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
const PageTitle = 'Work';
const PageDescription = 'About the work of James T. Baker';

const returnPageContent = props => (
	<div>
		Work
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
					{returnPageContent()}
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
					{returnPageContent()}
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
					{returnPageContent()}
				</PageBody>
			</MediaQuery>
			<Footer />
		</div>
	);
}
