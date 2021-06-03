import { IComponentConfig } from "./component";
import { IVariable } from "./variable";

export interface ISiteConfig {
    options: any;
    variables: IVariable[];
    components: IComponentConfig[];
}