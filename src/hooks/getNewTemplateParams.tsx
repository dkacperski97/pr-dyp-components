import { ISiteConfig } from "../types/site";

export const getNewTemplateParams = (
    prev: ISiteConfig,
    componentId: string,
    variableId: string,
    value: any
) => ({
    ...prev,
    components: prev.components.map((c) =>
        c.id === componentId
            ? {
                  ...c,
                  variables: c.variables.map((v) =>
                      v.id === variableId
                          ? {
                                ...v,
                                templateParameters: {
                                    ...v.templateParameters,
                                    ...value,
                                },
                            }
                          : v
                  ),
              }
            : c
    ),
});