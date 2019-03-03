
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StylePatterns from '../services/StylePatterns';
import TitleImageMedium from '../img/titleImages/processed/fenway-aerial.jpg';
import TitleImageSmall from '../img/titleImages/processed/fenway-aerial@0,5x.jpg';
import ScreenSizes from '../services/ScreenSizes';
import PageBody from '../components/PageBody';

// ----- PAGE

const BodyContainer = styled.div`
	padding: ${props => props.screenType === 'small' ?
		'5rem 1rem' : '7rem 5rem'};
`;
const PageTitle = 'Work';
const PageDescription = 'About the work of James T. Baker';

const returnPageContent = screenType => (
	<BodyContainer
		screenType={screenType}
	>
		Work
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
