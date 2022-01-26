import React, { useEffect } from "react";
import { OptionsProps } from "../../types/props";
import TextField from "@material-ui/core/TextField";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";

const TextForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) => getNewTemplateParams(prev, componentId, variableId, { mutation: "mutation { firstSite }" }));
            }
        }
    }, [site, variable, componentId, variableId]);

    const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite((prev) => getNewTemplateParams(prev, componentId, variableId, { mutation: event.target.value }));
    };

    return variable?.templateParameters ? (
        <TextField
            id="mutation"
            label="Mutation"
            value={variable.templateParameters.mutation}
            onChange={onTextChange}
        />
    ) : null;
};

export default TextForm;
