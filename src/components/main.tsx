import React from 'react';
import Component from '../types/component';
import Props from '../types/props';
import DropTarget from './helpers/DropTarget';

const Main: React.FC<Props> = ({ children, setChild }) => {
	return (
		<div>
			{children?.[0] || <DropTarget index={0} setChild={setChild} />}
		</div>
	);
};

const main: Component = {
	id: 'main',
	options: [],
	component: Main,
	template: '',
};

export default main;
