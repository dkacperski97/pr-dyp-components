import Component, { ComponentType } from '../../types/component';

const template = `
import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';

const Label: React.FC = () => {
	return (
        <InputLabel><%- config.name %></InputLabel>
	);
};

export default Label;
`

const label: Component = {
	id: 'label',
	type: ComponentType.Common,
	getOptions: () => import('./LabelOptions'),
	getComponent: () => import('./Label'),
	template
};

export default label;
