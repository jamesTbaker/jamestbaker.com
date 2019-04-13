
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import TitleImageMedium from '../img/titleImages/processed/bus.jpg';
import TitleImageSmall from '../img/titleImages/processed/bus@0,5x.jpg';
import Collapsible from '../components/Collapsible';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';




// ----- PAGE

// STYLED COMPONENTS
const EmailContainer = styled.a`
	border-bottom: 0;
`;

// CONTENTS

const HeadTitle = 'Contact';
const HeadDescription = 'Contact James T. Baker';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			I'd love to hear from you.
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>Contact</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<p>
			T: (617) 388-1222
		</p>
		<p>
			E:&nbsp;
			<EmailContainer
				href="mailto:jbkr@pm.me"
			>
				jbkr@pm.me
			</EmailContainer>
		</p>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<p>
			Whether you are hiring,
			starting a project, have feedback,
			or need consultation,
			let's start a conversation.
		</p>
	</div>
);
const returnLowerPageContent = screenType => ('');

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
