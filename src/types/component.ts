type OptionType = { // TODO
	text: String,
	textarea: String,
	number: Number
}
type Option = {
	id: string;
	name: string;
	type: keyof OptionType;
	default?: string|number;
}
type Component = {
	id: string;
	options: Option[];
	component: () => Promise<any>;
	template: string;
};

export default Component;
