import { ISiteConfig } from "./site";

export type Props = {
	// config: any;
	children: (React.ReactNode | undefined)[];
};

export type SetSite = (site: (prev: ISiteConfig) => ISiteConfig) => void;

export type OptionsProps = {
	site: ISiteConfig;
	setSite: SetSite;
	componentId: string;
	variableId: string;
}