import React from "react";
import { Props, OptionsProps } from "./props";
import { IVariable, IVariableDraft } from "./variable";

export const ComponentType = {
	Hidden: "Hidden",
	Layout: "Layout",
	Common: "Common",
	Input: "Input",
} as const;
export const ComponentTypeAll = [ComponentType.Hidden, ComponentType.Layout, ComponentType.Common]; // TODO: dodać All do ComponentType
type ComponentTypeKeys = keyof typeof ComponentType;
type ComponentTypeValues = typeof ComponentType[ComponentTypeKeys];

export interface IComponentConfig {
	id: string;
	name: string;
	templateId: string;
	variables: IVariable[];
	options: any;
	children: string[];
}

type Option = {
	id: string;
	type: string;
	default?: IVariableDraft;
}

type Component = {
	id: string;
	type: ComponentTypeValues;
	getOptions: Option[];
	getChildrenTypes?: (config: any) => (ComponentTypeValues | ComponentTypeValues[])[],
	getTemplate: () => string;
};

export default Component;
