/* eslint-disable react/prefer-stateless-function */

// ----- IMPORTS

import * as React from 'react';
import { Link } from 'gatsby';
import Sticky from 'react-stickynode';
import styled from 'styled-components';
// import Hamburger from './Hamburger';
import Brand from './Brand';
import StylePatterns from '../services/StylePatterns';

// ----- COMPONENT

const HeaderSmall = styled.header`
	display: grid;
	grid-template-rows: 5rem;
	grid-template-columns: 5rem auto 6rem;
	padding: 3rem 0 3rem;
	background-color: ${StylePatterns.Color('blue1')};
`;

const HeaderMedium = styled.header`
	grid-template-rows: 10rem;
	grid-template-columns: auto 5rem;
`;

const HamburgerContainer = styled.div`
	grid-area: 1 / 1 / 2 / 2;
`;

const BrandContainer = styled.div`
	grid-area: 1 / 3 / 2 / 4;
	padding-right: 1rem
`;







const Hamburger = styled.button.attrs({
	type: 'button',
})`
	display: inline-block;
	min-width: 0;
	padding: 1.6rem 1.2rem;
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
    background-color: ${StylePatterns.Color('red9')};
    transition-property: transform;
	transition-duration: 0.075s;
	transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);

	${({ showSmallNav }) => showSmallNav && `
		top: 8px;
    	transform: rotate(45deg);
		transition-delay: 0.12s;
		transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
	`}

	&::before {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 8px;
		background-color: ${StylePatterns.Color('red9')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top 0.075s 0.12s ease, opacity 0.075s ease;

		${({ showSmallNav }) => showSmallNav && `
			opacity: 0;
			transition: top 0.075s ease, opacity 0.075s 0.12s ease;
		`}
	}

	&::after {
		display: block;
		position: absolute;
		content: "";
		width: 26px;
		height: 1px;
		top: 16px;
		background-color: ${StylePatterns.Color('red9')};
		transition-property: transform;
		transition-duration: 0.15s;
		transition-timing-function: ease;
		transition: top 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19);

		${({ showSmallNav }) => showSmallNav && `
			top: 0px;
			transform: rotate(-90deg);
			transition: bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
		`}
	}
`;


const NavSmall = styled.nav`
	width: 100%;
	height: 0;
	overflow: hidden;
	transition: height .25s;

	${({ showSmallNav }) => showSmallNav && `
		position: fixed;
		top: 11rem;
		width: 100%;
		height: 100%;
		z-index: ${StylePatterns.ZIndex('smallNav')};
		background-color: #ccffcc;
	`}
`;


// top padding = viewport height - ul height, divided by 2 to get half, 
// 		minus height of hamburger and brand container 
const NavSmallList = styled.ul`
	padding: calc(((100vh - 25rem) / 2) - 5rem) 0 0 0;
	margin: 0;
	list-style: none;
	background-color: pink;
`;

const NavSmallListItem = styled.li`
	list-style: none;
	margin-top: -2rem;
	margin-left: -2rem;
	opacity: 0;
	transition-property: opacity, margin-left, margin-top;
	transition-duration: .5s;
	background-color: yellow;

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
							<BrandContainer>
								<Brand />
							</BrandContainer>
							<NavSmall
								showSmallNav={this.state.showSmallNav}
							>
								<NavSmallList>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<Link to="/">Profile</Link>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<Link to="/work">Work</Link>
									</NavSmallListItem>
									<NavSmallListItem
										showSmallNav={this.state.showSmallNav}
									>
										<Link to="/contact">Contact</Link>
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
							<nav>
								<ul>
									<li><Brand /></li>
									<li><Link to="/">Profile</Link></li>
									<li><Link to="/work">Work</Link></li>
									<li><Link to="/contact">Contact</Link></li>
								</ul>
							</nav>
						</HeaderMedium>
					)
				}
			</Sticky>
		);
	}
}
