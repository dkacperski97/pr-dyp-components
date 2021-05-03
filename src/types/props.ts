export type SetChild = (componentId: string, index: number) => void;

type Props = {
	config: any;
	setChild: SetChild;
	children: (React.ReactNode | undefined)[];
};

export default Props;
