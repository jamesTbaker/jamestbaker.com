
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import TitleImageMedium from '../img/titleImages/processed/fenway-aerial.jpg';
import TitleImageSmall from '../img/titleImages/processed/fenway-aerial@0,5x.jpg';
import Collapsible from '../components/Collapsible';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';




// ----- PAGE

// STYLED COMPONENTS
const LinkContainer = styled.a`
	border-bottom: 0;
`;

// CONTENTS

const HeadTitle = 'Work';
const HeadDescription = 'About the work of James T. Baker';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			Building the Internet since 1999.
		</p>
		<p>
			<LinkContainer
				href="/index"
			>
				Find more of my skills and experience.
			</LinkContainer>
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>Work</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<p>
			2013 &ndash; 2019
		</p>
		<p>
			Museum of Science, Boston
		</p>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<ul>
			<li><em>Managed program</em> with team of <em>80+ direct stakeholders</em>.</li>
			<li>My simultaneous roles: product owner / program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator.</li>
			<li>Built suite of 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend.</li>
			<li>Key tech: JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.</li>
		</ul>
		<p>
			<LinkContainer
				href="/hub"
			>
				Learn more about The Hub
			</LinkContainer>
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
