import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return (
        <img
			className={<%- helpers.getOption(site, component, 'styles') %>}
			src={<%- helpers.getOption(site, component, 'src') %>}
			alt={<%- helpers.getOption(site, component, 'alt') %>}
			/>
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const chart: Component = {
	id: 'image',
	type: ComponentType.Common,
	getOptions: [
        { id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
		{ id: "src", type: "string", default: { templateId: 'text', templateParameters: { text: 'https://cdn.pixabay.com/photo/2018/07/13/10/20/kittens-3535404_960_720.jpg' } } },
		{ id: "alt", type: "string", default: { templateId: 'text', templateParameters: { text: '' } } },
	],
	getTemplate,
};

export default chart;
