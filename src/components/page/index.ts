import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
<%- helpers.getComponentsImports(site, component, pathToComponents) %>
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const Page: React.FC = () => {
<%- helpers.getVariables(site, component) %>

	return (
        
	);
};

export default Page;
`

const page: Component = {
	id: 'page',
	type: ComponentType.Hidden,
	getOptions: [],
	getComponent: () => import('./Page'),
	getTemplate
};

export default page;
