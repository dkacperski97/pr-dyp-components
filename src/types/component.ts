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
export const ComponentType = {
	Hidden: "Hidden",
	Layout: "Layout",
	Common: "Common",
	Input: "Input",
} as const;
export const ComponentTypeAll = [ComponentType.Hidden, ComponentType.Layout, ComponentType.Common]; // TODO: dodać All do ComponentType
type ComponentTypeKeys = keyof typeof ComponentType;
type ComponentTypeValues = typeof ComponentType[ComponentTypeKeys];

type Component = {
	id: string;
	type: ComponentTypeValues;
	getChildrenTypes?: (config: any) => (ComponentTypeValues | ComponentTypeValues[])[],
	options: Option[];
	component: () => Promise<any>;
	template: string;
};

export default Component;
