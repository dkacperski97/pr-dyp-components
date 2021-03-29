import React from 'react';
import Component from '../types/component';
import Button from '@material-ui/core/Button';
import Props from '../types/props';

const Link: React.FC<Props> = () => {
	return (
		<Button variant="contained">Text</Button>
	)
}
const link: Component = {
	id: 'link',
	options: [],
	component: Link,
	template: '',
};

export default link;
