import Component, { ComponentType } from '../types/component';

const chart: Component = {
	id: 'chart',
	type: ComponentType.Common,
	options: [],
	component: () => import('./Grid'),
	template: '',
};

export default chart;
