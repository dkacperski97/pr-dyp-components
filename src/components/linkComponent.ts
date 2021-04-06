import Component from '../types/component';

const link: Component = {
	id: 'link',
	options: [],
	component: () => import('./Link'),
	template: '',
};

export default link;
