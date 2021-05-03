import Component from '../types/component';

const template = `
import React from 'react';
import Button from '@material-ui/core/Button';

const Link: React.FC = () => {
	return (
		<Button
			variant="contained"
			<% if (typeof config.url !== undefined) { %>
			href="<%= config.url %>"
			<% } %>
		>
			<%= config.name %>
		</Button>
	)
}

export default Link;
`

const link: Component = {
	id: 'link',
	options: [
		{ id: 'name', name: 'Link name', type: 'text', default: 'Link text' },
		{ id: 'url', name: 'Destination address', type: 'text' },
	],
	component: () => import('./Link'),
	template
};

export default link;
