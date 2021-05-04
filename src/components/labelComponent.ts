import Component, { ComponentType } from '../types/component';

const template = `
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

const Label: React.FC = () => {
	return (
        <InputLabel><%= config.name %></InputLabel>
	);
};

export default Label;
`

const label: Component = {
	id: 'label',
	type: ComponentType.Common,
	options: [
		{ id: 'name', name: 'Label name', type: 'text', default: 'Label text' },
	],
	component: () => import('./Label'),
	template
};

export default label;
