import React from 'react';
import Props from '../types/props';
import DropTarget from './helpers/DropTarget';

const Main: React.FC<Props> = ({ children, setChild }) => {
	return (
		<div>
			{children?.[0] || <DropTarget index={0} setChild={setChild} />}
		</div>
	);
};

export default Main;