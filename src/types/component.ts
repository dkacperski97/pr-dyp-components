import Props from './props';

type Component = {
	id: string;
	options: any[];
	component: React.FC<Props>;
	template: string;
};

export default Component;
