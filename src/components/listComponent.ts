import Component from '../types/component';

const list: Component = {
	id: 'list',
	options: [],
	component: () => import('./List'),
	template: '',
};

export default list;
