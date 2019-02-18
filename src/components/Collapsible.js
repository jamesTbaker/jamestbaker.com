
// ----- IMPORTS

import * as React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import CollapsibleSectionButton from './sb/SBMedia.Button/SBMedia.CollapsibleSectionButton.Pres.www';
import FadeIn from './sb/SBMedia.FadeIn/SBMedia.FadeIn.Pres.www';

// ----- COMPONENT

export default class Collapsible extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
		};
		this.handleCollapsibleClick = this.handleCollapsibleClick.bind(this);
	}
	handleCollapsibleClick() {
		this.setState(prevState => ({
			collapsed: !prevState.collapsed,
		}));
	}
	render() {

		return (
			<div>
				{
					/* this.state.collapsed && 

					<SectionExpandButton
						buttonHeight="3"
						iconPosition="before"
						iconContent="angle-down"
						contentHeight="2.2"
						text={this.props.expandText}
						defaultBackgroundColor="transparent"
						defaultContentColor={StylePatterns.Color('red5')}
						activeBackgroundColor="transparent"
						activeContentColor={StylePatterns.Color('red3')}
						clickHandler={this.handleCollapsibleClick}
					/> */
				}
				{
					/* !this.state.collapsed && 
					
					<SectionCollapseButton
						buttonHeight="3"
						iconPosition="before"
						iconContent="angle-up"
						contentHeight="2.2"
						text={this.props.collapseText}
						defaultBackgroundColor="transparent"
						defaultContentColor={StylePatterns.Color('red5')}
						activeBackgroundColor="transparent"
						activeContentColor={StylePatterns.Color('red3')}
						clickHandler={this.handleCollapsibleClick}
					/> */
				}
				<CollapsibleSectionButton
					buttonHeight="3"
					iconPosition="before"
					iconContent={this.state.collapsed ? "angle-down" : "angle-up"}
					contentHeight="2.2"
					text={this.state.collapsed ? this.props.expandText : this.props.collapseText}
					defaultBackgroundColor="transparent"
					defaultContentColor={StylePatterns.Color('red5')}
					activeBackgroundColor="transparent"
					activeContentColor={StylePatterns.Color('red3')}
					clickHandler={this.handleCollapsibleClick}
				/>
				<FadeIn
					in={!this.state.collapsed}
				>
					{this.props.children}
				</FadeIn>
			</div>
		);
	}
}
