import Component, { ComponentType } from '../../types/component';

const template = `
import React from 'react';
import Button from '@material-ui/core/Button';
<%- getImports(config) %>

const Link: React.FC<<%- getProps(config) %>> = (props) => {
	<%- getVariables(config) %>

	return (
		<Button variant="contained" href={url}>
			{value}
		</Button>
	)
}

export default Link;
`

const link: Component = {
	id: 'link',
	type: ComponentType.Common,
	getComponent: () => import('./Link'),
	getOptions: () => import('./LinkOptions'),
	template
};

export default link;
