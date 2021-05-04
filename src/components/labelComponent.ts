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
	getOptions: () => [
		{ id: 'name', name: 'Label name', type: 'text', default: 'Label text' },
	],
	getComponent: () => import('./Label'),
	template
};

export default label;
