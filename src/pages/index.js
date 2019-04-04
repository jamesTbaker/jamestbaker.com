
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import ScreenSizes from '../services/ScreenSizes';
import Page from '../components/Page';
import PageTop from '../components/PageTop';
import TitleImageMedium from '../img/titleImages/processed/storrow-drive.jpg';
import TitleImageSmall from '../img/titleImages/processed/storrow-drive@0,5x.jpg';


// ----- PAGE
/* 

	topGrid={{
		TopRight: 'This is top right text.',
		MidRight: '<h1>This is mid right text.</h1>',
		BottomRight: 'This is bottom right text.',
		BottomLeft: 'This is bottom left text.',
	}}

*/

const HeadTitle = 'Profile';
const HeadDescription = 'Profile of James T. Baker';
const Preamble = `
	<p>Greater Boston</p>
	<p>Portfolio Brief</p>
`;
const Epilogue = `
	<p>I speak suit, geek, and creative.</p>
`;
const returnPageContent = screenType => (
	<div>
		<PageTop
			screenType={screenType}	
			preamble={Preamble}
			header={HeadTitle}
			epilogue={Epilogue}
		/>
		<h1>Header One</h1>
		<h2>Header Two</h2>
		<h3>Header Three</h3>
		<h4>Header Four</h4>
		<h5>Header Five</h5>
		<h6>Header Six</h6>
	</div>
);


export default () => {
	return (
		<div className="sb-root--page-specification">
			<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
				<Page
					screenType="small"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage={TitleImageSmall}
					pageContent={returnPageContent('small', )}
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
					pageContent={returnPageContent('medium')}
				/>
			</MediaQuery>
			<MediaQuery minWidth={ScreenSizes.ReturnLargeMin()}>
				<Page
					screenType="large"
					headTitle={HeadTitle}
					headDescription={HeadDescription}
					backgroundImage={TitleImageMedium}
					pageContent={returnPageContent('large')}
				/>
			</MediaQuery>
		</div>
	);
}
