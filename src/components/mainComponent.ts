import Component, { ComponentType, ComponentTypeAll } from '../types/component';

const template = `
import React from 'react';

const Main: React.FC = ({ children }) => {
	return (
		<main>{children}</main>
	)
}

export default Main;
`

const main: Component = {
	id: 'main',
	type: ComponentType.Hidden,
	getChildrenTypes: () => [ ComponentTypeAll ],
	options: [],
	component: () => import('./Main'),
	template
};

export default main;
