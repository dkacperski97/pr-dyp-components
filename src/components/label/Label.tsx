import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Props from '../../types/props';

const Label: React.FC<Props> = ({ config }) => {
	const { name } = config;
	return (
        <InputLabel>{name}</InputLabel>
	);
};

export default Label;