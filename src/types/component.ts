type Option = {
	name: string;
}
type Component = {
	id: string;
	options: Option[];
	component: () => Promise<any>;
	template: string;
};

export default Component;
