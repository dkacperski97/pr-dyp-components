import React from 'react';
import Component from '../types/component';
import InputLabel from '@material-ui/core/InputLabel';
import Props from '../types/props';

const Label: React.FC<Props> = () => {
	return (
        <InputLabel>Name</InputLabel>
	);
};

const label: Component = {
	id: 'label',
	options: [],
	component: Label,
	template: '',
};

export default label;
