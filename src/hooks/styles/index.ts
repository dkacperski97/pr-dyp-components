import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

<% 
const { 
    alignment, formats, background, backgroundColor,
    marginLeft, marginTop, marginRight, marginBottom, 
    paddingLeft, paddingTop, paddingRight, paddingBottom, 
    borderStyle, borderWidth, borderColor
} = hook.templateParameters;
const f_u = formats.some(f => f === 'underlined');
const f_l = formats.some(f => f === 'line-through');
%>

const useMaterialStyles = makeStyles((theme: Theme) =>
    createStyles({
        customStyle: {
            'text-align': '<%- alignment %>',
            'font-weight': '<%- formats.some(f => f === 'bold') ? 'bold' : 'normal' %>',
            'font-style': '<%- formats.some(f => f === 'italic') ? 'italic' : 'normal' %>',
            'text-decoration': '<%- f_u && f_l ? 'underline line-through' : f_u ? 'underline' : f_l ? 'line-through' : 'none' %>',
            'background': "<%- backgroundColor %> <%- background ? "url('" + background.replace(/(\\r\\n|\\n|\\r)/gm, "") + "')" : "" %>",
            'margin': "<%- marginTop %>px <%- marginRight %>px <%- marginBottom %>px <%- marginLeft %>px",
            'padding': "<%- paddingTop %>px <%- paddingRight %>px <%- paddingBottom %>px <%- paddingLeft %>px",
            'border': "<%- borderStyle %> <%- borderWidth %>px <%- borderColor %>",
        },
    })
);

const useStyles: any = (props: any, variables: any) => {
    const classes = useMaterialStyles();
    return [classes.customStyle, undefined];
};

export default useStyles;
`

const styles: Hook = {
	id: 'styles',
	getType: () => 'styles',
	getEditorForm: () => import('./StylesForm'),
	getTemplate
};

export default styles;
