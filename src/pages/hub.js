
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import StylePatterns from '../services/StylePatterns';
import Page from '../components/Page';
import TitleImageMedium from '../img/titleImages/processed/bridge.jpg';
import TitleImageSmall from '../img/titleImages/processed/bridge@0,5x.jpg';

// ----- PAGE

// STYLED COMPONENTS

// CONTENTS

const HeadTitle = 'The Hub';
const HeadDescription = 'Program manager, business analyst, software developer, database developer, systems architect, information architect, copywriter, UX designer, brand designer,and  system administrator. 56 enterprise apps, workflow engine, REST API offering 72 services, and a React frontend. JavaScript, React, Node.js, Express, MongoDB, SharePoint Online.';
const returnTopContentOne = screenType => (
	<div className="sb-root--top-content">
		<p>
			2013 &ndash; 2019
		</p>
		<p>
			Museum of Science, Boston
		</p>
	</div>
);
const returnTopContentTwoBBB = screenType => (
	<div className="sb-root--top-content">
		<h1>The Hub</h1>
	</div>
);
const returnTopContentThree = screenType => (
	<div className="sb-root--top-content">
		<h2>
			Brief
		</h2>
		<ul>
			<li>XXXXXX</li>
		</ul>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<h2>
			Deeper Dive
		</h2>
		<ul>
			<li><a href="#">XXXXXX</a></li>
		</ul>
	</div>
);
const returnLowerPageContent = screenType => (
	<div className="sb-root--bottom-content">
		<p>XXX</p>
	</div>
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
