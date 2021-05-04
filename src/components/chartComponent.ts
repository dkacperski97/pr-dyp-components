import Component, { ComponentType } from '../types/component';

const chart: Component = {
	id: 'chart',
	type: ComponentType.Common,
	getOptions: () => [],
	getComponent: () => import('./Grid'),
	template: '',
};

export default chart;
