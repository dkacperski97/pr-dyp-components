import Component from '../types/component';

const section: Component = {
	id: 'section',
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default section;
