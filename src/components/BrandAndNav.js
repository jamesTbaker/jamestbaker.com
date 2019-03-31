/* eslint-disable react/prefer-stateless-function */

// ----- IMPORTS

import * as React from 'react';
import { Link } from 'gatsby';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
// import Hamburger from './Hamburger';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';
import ProfileBrief from '../pdf/Profile Brief - James T. Baker.pdf';
import Icon from '../components/sb/SBMedia.Icon/SBMedia.Icon.Pres.www';

// ----- COMPONENT


const HamburgerContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

const Hamburger = styled.button.attrs({
	type: 'button',
})`
	display: inline-block;
	min-width: 0;
	padding: 1.6rem 1rem;
	transition-property: background-color, filter;
	transition-duration: .15s;
	transition-timing-function: linear;
	font-size: 0;
	color: inherit;
	text-transform: none;
	background-color: transparent;
	border: 0;
	margin: 0;
	overflow: visible;
	cursor: pointer;
`;

const HamburgerBox = styled.span`
	display: inline-block;
	position: relative;
	width: 26px;
	height: 18px;
`;

const HamburgerInner = styled.span`
	display: block;
    position: absolute;
    width: 26px;
    height: 1px;
    background-color: ${StylePatterns.Color('interactive-on-dark-default')};
    transition-property: transform;
	transition-duration: .15s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

	${({ showSmallNav }) => showSmallNav && `
		top: 8px;
    	transform: rotate(45deg);
		transition-delay: .24s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	`}

	&::before {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 8px;
		background-color: ${StylePatterns.Color('interactive-on-dark-default')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top .15s .24s ease, opacity .15s ease;

		${({ showSmallNav }) => showSmallNav && `
			opacity: 0;
			transition: top .15s ease, opacity .15s .24s ease;
		`}
	}

	&::after {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 16px;
		background-color: ${StylePatterns.Color('interactive-on-dark-default')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top .15s .24s ease, transform .15s cubic-bezier(0.55, 0.055, 0.675, 0.19);

		${({ showSmallNav }) => showSmallNav && `
			top: 0px;
			transform: rotate(-90deg);
			transition: bottom .15s ease, transform .15s .24s cubic-bezier(0.215, 0.61, 0.355, 1);
		`}
	}
`;


const VerticalAlignMiddleContainer = styled.div`
	${StylePatterns.VerticalAlignMiddle()};
`;
const HeaderSmall = styled.header`
	display: grid;
	grid-template-rows: 5rem;
	grid-template-columns: 5rem auto 5rem;
	padding: 3rem 0;
	background-color: ${StylePatterns.Color('blue-1')};
`;
const BrandContainerSmall = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	padding-right: 1rem;
`;
const NavSmall = styled.nav`
	position: fixed;
	top: 11rem;
	width: 100%;
	height: 0;
	overflow: hidden;
	transition: height .75s;
	background-color: ${StylePatterns.Color('blue-1')};
	z-index: ${StylePatterns.ZIndex('smallNav')};

	${({ showSmallNav }) => showSmallNav && `
		height: 100%;
	`}
`;
// top padding = viewport height - ul height, divided by 2 to get half, 
// 		minus height of hamburger and brand container 
const NavSmallList = styled.ul`
	padding: calc(((100vh - 25rem) / 2) - 5rem) 0 0 0;
	margin: 0;
	list-style: none;
`;
const NavSmallListItem = styled.li`
	list-style: none;
	margin-top: -2rem;
	margin-left: -2rem;
	opacity: 0;
	transition-property: opacity, margin-left, margin-top;
	transition-duration: .5s;

	&:nth-child(1) {
		transition-delay: .2s;
	}

	&:nth-child(2) {
		transition-delay: .25s;
	}

	&:nth-child(3) {
		transition-delay: .3s;
	}

	&:nth-child(4) {
		transition-delay: .35s;
	}

	&:nth-child(5) {
		transition-delay: .4s;
	}

	&:nth-child(6) {
		transition-delay: .45s;
	}

	${({ showSmallNav }) => showSmallNav && `
		margin-top: 0;
		margin-left: 0;
		opacity: 1;
	`}
`;
const NavSmallLink = styled(Link)`
	display: block;
	width: 100%;
	font-size: ${StylePatterns.FontSize('xl', 'small')} !important;
	font-weight: ${StylePatterns.FontWeight('light')};
	border: 0;
	margin-left: 0;
	padding: 1rem 5rem;
	text-align: left;
	color: ${StylePatterns.Color('interactive-on-dark-default')};

	&:hover {
		color: ${StylePatterns.Color('interactive-on-dark-active')};
	}

	&:visited {
		color: ${StylePatterns.Color('interactive-on-dark-default')};

		&:hover {
			color: ${StylePatterns.Color('interactive-on-dark-active')};
		}
	}
`;








const HeaderMedium = styled.header`
	position: fixed;
	left: 0;
	width: 20rem;
	height: 100%;
	z-index: 999;
	overflow-y: auto;
	background-color: ${StylePatterns.Color('blue-1')};
`;
const BrandContainerMedium = styled.div`
	padding: 2rem 2rem 1rem;
	font-size: ${StylePatterns.FontSize('l', 'medium')};

`;
const HeaderMediumTagline = styled.div`
	padding: 0 2rem 1rem;
	margin-bottom: 5rem;

	p {
		margin: 0;
		font-size: ${StylePatterns.FontSize('xs', 'medium')};
	}
	a {
		border: 0;
	}
`;


const NavMedium = styled.nav`
	padding: 2rem;
`;

const NavMediumList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;
const NavMediumListItem = styled.li`
	display: block;	
	list-style: none;
	position: relative;
	padding-top: 1rem;
	margin: 0 0 10rem 0;
	font-size: ${StylePatterns.FontSize('m', 'medium')};
	font-weight: ${StylePatterns.FontWeight('light')};

	&::before {
		content: '';
		display: block;
		position: absolute;
		top: 0;
		width: 10%;
		left: 0;
		border-top: 5px solid ${StylePatterns.Color('yellow-1')};
}
`;
const NavMediumLink = styled(Link)`
	border: 0;
	color: ${StylePatterns.Color('interactive-on-dark-default')};

	&:hover {
		border: 0;
		color: ${StylePatterns.Color('interactive-on-dark-active')};
	}

	&:visited {
		color: ${StylePatterns.Color('interactive-on-dark-default')};

		&:hover {
			border: 0;
			color: ${StylePatterns.Color('interactive-on-dark-active')};
		}
	}
	&[aria-current="page"] {
		color: ${StylePatterns.Color('grey-7')}
	}
`;

/* 

	&[aria-current="page"] {
		color: ${StylePatterns.Color('yellow-3')};

		&:hover {
			border: 0;
			color:  ${StylePatterns.Color('white')};
			background-color: ${StylePatterns.Color('interactive-dark')};
		}

		&:visited {
			color: ${StylePatterns.Color('yellow-3')};

			&:hover {
				border: 0;
				color:  ${StylePatterns.Color('white')};
				background-color: ${StylePatterns.Color('interactive-dark')};
			}
		}
	}



		&:hover {
			border: 0;
			color:  ${StylePatterns.Color('interactive-alternate-active')};
		}

		&:visited {
			color: ${StylePatterns.Color('interactive-alternate')};

			&:hover {
				border: 0;
				color:  ${StylePatterns.Color('interactive-alternate-active')};
			}
		}


 */
export default class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showSmallNav: false,
		};
		this.handleHamburgerClick = this.handleHamburgerClick.bind(this);
	}
	handleHamburgerClick() {
		this.setState(prevState => ({
			showSmallNav: !prevState.showSmallNav,
		}));
	}
	render() {
		return (
			<Sticky enableTransforms={false} >
				{
					this.props.screenType === 'small' && 

					(
						<HeaderSmall>
							<HamburgerContainer>
								<Hamburger
									showSmallNav={this.state.showSmallNav}
									onClick={this.handleHamburgerClick}
								>
									<HamburgerBox>
										<HamburgerInner
											showSmallNav={this.state.showSmallNav}
										/>
									</HamburgerBox>
								</Hamburger>
							</HamburgerContainer>
							<BrandContainerSmall>
								<VerticalAlignMiddleContainer>
									<Brand />
								</VerticalAlignMiddleContainer>
							</BrandContainerSmall>
							<NavSmall
								showSmallNav={this.state.showSmallNav}
							>
								<NavSmallList>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink 
											to="/"
										>
											Profile
										</NavSmallLink>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink
											to="/work"
										>
											Work
										</NavSmallLink>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<NavSmallLink
											to="/contact"
										>
											Contact
										</NavSmallLink>
									</NavSmallListItem>
								</NavSmallList>
							</NavSmall>
						</HeaderSmall>
					)
				}
				{
					(this.props.screenType === 'medium' || 
					this.props.screenType === 'large') && 

					(
						<HeaderMedium>
							<BrandContainerMedium>
								<Brand />
							</BrandContainerMedium>
							<HeaderMediumTagline>
								<p>Greater Boston</p>
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
							</HeaderMediumTagline>
							<NavMedium>
								<NavMediumList>
									<NavMediumListItem><NavMediumLink to="/">Profile</NavMediumLink></NavMediumListItem>
									<NavMediumListItem><NavMediumLink to="/work">Work</NavMediumLink></NavMediumListItem>
									<NavMediumListItem><NavMediumLink to="/contact">Contact</NavMediumLink></NavMediumListItem>
								</NavMediumList>
							</NavMedium>
						</HeaderMedium>
					)
				}
			</Sticky>
		);
	}
}
