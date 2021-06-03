import { useState, useEffect } from "react";
import { IComponentConfig } from "../types/component";
import { ISiteConfig } from "../types/site";
import { IVariable } from "../types/variable";

export type UseOptionsPropsType = (
    site: ISiteConfig,
    componentId: string,
    variableId: string
) => [IComponentConfig | undefined, IVariable | undefined];

export const useOptionsProps: UseOptionsPropsType = (site, componentId, variableId) => {
    const [component, setComponent] = useState<IComponentConfig>();
    const [variable, setVariable] = useState<IVariable>();

    useEffect(() => {
        const c = site.components.find((c) => c.id === componentId);
        if (component !== c) {
            setComponent(c)
        }
    }, [site, component, componentId])
    useEffect(() => {
        if (component) {
            const v = component.variables.find((v) => v.id === variableId)
            if (variable !== v) {
                setVariable(v);
            }
        }
    }, [component, variable, variableId])

    return [component, variable];
};