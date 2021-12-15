import React, { useEffect } from "react";
import { OptionsProps } from "../../types/props";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SiteContextForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            console.log(variable.templateParameters);
            if (variable.templateParameters === undefined) {
                setSite((prev) =>
                    getNewTemplateParams(prev, componentId, variableId, {
                        componentName: "",
                        variableName: "",
                    })
                );
            }
        }
    }, [site, variable, componentId, variableId]);

    const onComponentNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, {
                componentName: event.target.value as string,
            })
        );
    };

    const onVariableNameChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, {
                variableName: event.target.value as string,
            })
        );
    };

    return variable?.templateParameters ? (
        <>
            <FormControl>
                <InputLabel id="component-name-label">Component</InputLabel>
                <Select
                    labelId="component-name-label"
                    id="component-name"
                    value={variable.templateParameters.componentName}
                    onChange={onComponentNameChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {site.components.map((c) => (
                        <MenuItem value={c.name}>{c.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel id="variable-name-label">Variable</InputLabel>
                <Select
                    labelId="variable-name-label"
                    id="variable-name"
                    value={variable.templateParameters.variableName}
                    onChange={onVariableNameChange}
                    disabled={!variable.templateParameters.componentName}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {variable.templateParameters.componentName &&
                        site.components
                            .find((c) => c.name === variable.templateParameters.componentName)!
                            .variables.filter((v) => v.templateId !== "siteContext")
                            .map((v) => <MenuItem value={v.name}>{v.name}</MenuItem>)}
                </Select>
            </FormControl>
        </>
    ) : null;
};

export default SiteContextForm;
