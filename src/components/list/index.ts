import Component, { ComponentType } from '../../types/component';

const getTemplate = () => `
import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
<%- helpers.getVariablesImports(site, component, pathToHooks) %>

const <%- helpers.getComponentName(component) %>: React.FC<any> = (props) => {
    <%- helpers.getVariables(site, component) %>

	return (
		<List className={<%- helpers.getOption(site, component, 'styles') %>}>
			{props.children && <%- helpers.getOption(site, component, 'array') %> ? <%- helpers.getOption(site, component, 'array') %>.map((value, index) => React.Children.map(
				props.children, 
				(child) => React.cloneElement(child, {
					children: React.Children.map(
						child.props.children, 
						(subchild) => (
							<ListItem key={index}>
								{React.cloneElement(subchild, { value, index })}
							</ListItem>
						)
					)
				})
			)) : null}
		</List>
	);
};

export default <%- helpers.getComponentName(component) %>;
`

const list: Component = {
	id: 'list',
	type: ComponentType.Common,
	getOptions: [
        { id: "styles", type: "styles", default: { templateId: 'styles', templateParameters: { 
            alignment: null, formats: [], background: null, backgroundColor: 'rgba(255, 255, 255, 0)',
            marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0, 
            paddingLeft: 0, paddingTop: 0, paddingRight: 0, paddingBottom: 0, 
            borderStyle: 'none', borderWidth: '1', borderColor: 'rgba(255, 255, 255, 0)'
        } } },
        { id: "array", type: "array", default: { templateId: 'query', templateParameters: { query: 'query { cat }' } } },
    ],
	getTemplate,
};

export default list;
