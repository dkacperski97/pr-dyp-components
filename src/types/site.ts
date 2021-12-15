import { IComponentConfig } from "./component";
import { IVariable } from "./variable";

export interface ISiteConfig {
    id: string;
    options: any;
    variables: IVariable[];
    components: IComponentConfig[];
}