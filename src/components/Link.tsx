import React from 'react';
import Button from '@material-ui/core/Button';
import Props from '../types/props';

const Link: React.FC<Props> = ({ config }) => {
	const { name, url } = config;
	return (
		<Button variant="contained" title={url}>{name}</Button>
	)
}

export default Link;
