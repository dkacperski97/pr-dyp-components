import React, { useEffect } from "react";
import { OptionsProps } from "../../types/props";
import TextField from "@material-ui/core/TextField";
import { useOptionsProps } from "../useOptionsProps";
import { getNewTemplateParams } from "../getNewTemplateParams";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import * as templates from "../../";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IVariable } from "../../types/variable";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formControl: {
            width: '100%',
            display: 'flex',
            flex: '1 1 auto',
            flexWrap: 'wrap'
        },
    })
);

const PropForm: React.FC<OptionsProps> = ({ site, setSite, componentId, variableId }) => {
    const classes = useStyles();
    const [component, variable] = useOptionsProps(site, componentId, variableId);
    useEffect(() => {
        if (variable) {
            if (variable.templateParameters === undefined) {
                setSite((prev) =>
                    getNewTemplateParams(prev, componentId, variableId, {
                        type: "string",
                        variable: "",
                    })
                );
            }
        }
    }, [site, variable, componentId, variableId]);

    const onTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { type: event.target.value })
        );
    };

    const onVariableChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setSite((prev) =>
            getNewTemplateParams(prev, componentId, variableId, { variable: event.target.value })
        );
    };

    const parentComponent = site.components.find((c) => c.children.find(child => child === componentId));

    const isTypeCorrect = (v: IVariable) => {
        const h = templates.hooks.find(h => h.id === v.templateId);
        return h ? h.getType({ site, setSite, componentId: parentComponent!.id, variableId: v.id }) === variable!.templateParameters.type : false;
    }

    return variable?.templateParameters ? (
        <>
            <TextField
                id="type"
                label="Type"
                value={variable.templateParameters.type}
                onChange={onTypeChange}
            />
            <FormControl className={classes.formControl}>
                <InputLabel id={`select_var_label`}>Variable</InputLabel>
                <Select
                    labelId={`select_var_label`}
                    id={`select_var`}
                    value={variable.templateParameters.variable}
                    onChange={onVariableChange}
                    disabled={!parentComponent || parentComponent.variables.filter(isTypeCorrect).length === 0}
                >
                    {parentComponent && parentComponent.variables.filter(isTypeCorrect).map((v) => (
                        <MenuItem value={v.id} key={v.id}>
                            {v.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </>
    ) : null;
};

export default PropForm;
