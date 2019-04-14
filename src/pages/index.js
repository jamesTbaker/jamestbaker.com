
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




// ----- PAGE

// STYLED COMPONENTS

const LowerPageContentContainer = styled.div`
	padding: 0 2rem
`;

// CONTENTS

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
		<p>
			I speak suit, geek, and creative.
		</p>
	</div>
);
const returnTopContentFour = screenType => (
	<div className="sb-root--top-content">
		<p>My <em>19 years'</em> experience in&nbsp;
			<em>design</em>,&nbsp;
			<em>technical product development</em>, and&nbsp;
			<em>management</em>&nbsp;
			have allowed me to <em>lead and execute</em> projects and operations
			at the intersection of business, software development, and
			visual / UX design + digital media.
		</p>
	</div>
);
const returnLowerPageContent = screenType => (
	<LowerPageContentContainer className="sb-root--top-content">
		<h2>Business Skills</h2>
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
				<li>Business analysis</li>
			</Collapsible>
		</ul>
		<h2>Design Skills</h2>
		<ul>
			<li>Art direction</li>
			<li>A/B testing</li>
		</ul>
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
