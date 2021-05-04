import React from 'react';
import Props from '../../types/props';

const Main: React.FC<Props> = ({ children }) => {
	return (
		<div>{children}</div>
	);
};

export default Main;