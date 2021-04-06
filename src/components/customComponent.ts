import Component from '../types/component';

const custom: Component = {
	id: 'custom',
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default custom;
