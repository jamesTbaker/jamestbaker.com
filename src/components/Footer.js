
// ----- IMPORTS

import React from 'react';
import MediaQuery from 'react-responsive';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';
import ScreenSizes from '../services/ScreenSizes';



// --- COMPONENT

const FooterSmall = styled.footer`
	display: grid;
	grid-template-columns: 10rem auto 6rem;
	padding: 2rem 1rem 1rem;
	margin: 2rem 0 0;
	font-size: ${StylePatterns.FontSize('xs')};
	background-color: ${StylePatterns.Color('blue1')};
`;

const BrandAndCopyrightContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

const BrandContainer = styled.div`
	width: 3rem;
`;

const NavContainer = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	padding-right: 1rem
`;

const FooterMedium = styled.footer`
	padding: 2rem 1rem 1rem;
	margin: 2rem 0 0;
	background-color: ${StylePatterns.Color('blue1')};
`;


export default (props) => (
	<div>
		<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
			<FooterSmall>
				<BrandAndCopyrightContainer>
					<BrandContainer>
						<Brand />
					</BrandContainer>
					&copy; 1999 - 2019, James T. Baker. All Rights Reserved.
				</BrandAndCopyrightContainer>
				<NavContainer>
					Hello
				</NavContainer>
			</FooterSmall>
		</MediaQuery>
		<MediaQuery
			minWidth={ScreenSizes.ReturnMediumMin()}
		>
			<FooterMedium>
				<BrandContainer>
					<Brand />
				</BrandContainer>
			</FooterMedium>
		</MediaQuery>
	</div>
);
