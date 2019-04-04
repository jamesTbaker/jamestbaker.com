
// ----- IMPORTS

import React from 'react';
import styled from 'styled-components';
import StylePatterns from '../services/StylePatterns';
import Header from '../components/Header';
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

// --- COMPONENT

export default (props) => (
	<div className="sb-root--page">
		<Header
			screenType={props.screenType}
			headTitle={props.headTitle}
			headDescription={props.headDescription}
		/>
		<MainContent
			screenType={props.screenType}
			content={props.pageContent}
		/>
		<Footer
			screenType={props.screenType}
		/>
	</div>
);
