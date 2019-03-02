
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Collapsible from '../components/Collapsible';
import StylePatterns from '../services/StylePatterns';
import ImageURL from '../img/titleImages/artem-sapegin-1229253-unsplash.jpg';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
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
const returnPageContent = props => (
	<div>
		Work
	</div>
);

export default () => {
	return (
		<div>
			<Header
				title="Work"
				titleBackgroundImage={ImageURL}
				description="About the work of James T. Baker"
			/>
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
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
				<PageBody
					screenType="medium"
				>
					{returnPageContent()}
				</PageBody>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
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
