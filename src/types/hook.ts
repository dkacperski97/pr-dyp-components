import { OptionsProps } from "./props";

type Hook = {
	id: string;
	getType: (props: OptionsProps) => string;
	getEditorForm: () => Promise<{ default: React.FC<OptionsProps> }>;
	getTemplate: () => string;
};

export default Hook;
