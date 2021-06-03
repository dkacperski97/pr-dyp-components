import React from 'react';
import { Props } from '../../types/props';

const Page: React.FC<Props> = ({ children }) => {
	return (
		<>{children}</>
	);
};

export default Page;