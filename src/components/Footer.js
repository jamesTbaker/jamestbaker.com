
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
	grid-template-columns: 3rem auto;
	grid-column-gap: 1.5rem;
	padding: 2rem 1rem 2rem;
	margin: 2rem 0 0;
	font-size: ${StylePatterns.FontSize('xs')};
	background-color: ${StylePatterns.Color('blue-1')};
	color: ${StylePatterns.Color('grey-9')};
`;

const BrandContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

const CopyrightContainer = styled.div`
	grid-area: 1 / 2 / 2 / 3;
`;

const VerticalAlignMiddleContainer = styled.div`
	${StylePatterns.VerticalAlignMiddle()};
`;

const FooterMedium = styled.footer`
	padding: 2rem 1rem 1rem;
	margin: 2rem 0 0;
	background-color: ${StylePatterns.Color('blue-1')};
`;


export default (props) => (
	<div>
		<MediaQuery maxWidth={ScreenSizes.ReturnSmallMax()}>
			<FooterSmall>
				<BrandContainer>
					<VerticalAlignMiddleContainer>
						<Brand />
					</VerticalAlignMiddleContainer>
				</BrandContainer>
				<CopyrightContainer>
					<VerticalAlignMiddleContainer>
						&copy; 1999 - 2019, James T. Baker. All Rights Reserved.
					</VerticalAlignMiddleContainer>
				</CopyrightContainer>
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
