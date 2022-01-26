import Hook from '../../types/hook';

const getTemplate = () => `
import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

<% 
const { 
    alignment, formats, background, backgroundColor,
    marginLeft, marginTop, marginRight, marginBottom, 
    paddingLeft, paddingTop, paddingRight, paddingBottom, 
    borderStyle, borderWidth, borderColor,
    display,
    flexDirection, flexWrap, justifyContent, alignItems, alignContent, justifyItems,
    gridColumns, gridRows,
    width, widthUnit,
    height, heightUnit,
    color, fontSize
} = hook.templateParameters;
const f_u = formats.some(f => f === 'underlined');
const f_l = formats.some(f => f === 'line-through');

const checkValue = (x, unit) => {
    if (x !== null && x !== "") {
        return '"' + x + (unit || '') + '"';
    }
    return 'undefined';
}
%>

const useMaterialStyles = makeStyles((theme: Theme) =>
    createStyles({
        customStyle: {
            'text-align': '<%- alignment %>',
            'font-weight': '<%- formats.some(f => f === 'bold') ? 'bold' : 'normal' %>',
            'font-style': '<%- formats.some(f => f === 'italic') ? 'italic' : 'normal' %>',
            'text-decoration': '<%- f_u && f_l ? 'underline line-through' : f_u ? 'underline' : f_l ? 'line-through' : 'none' %>',
            'background': "<%- backgroundColor %> <%- background ? "url('" + background.replace(/(\\r\\n|\\n|\\r)/gm, "") + "')" : "" %>",
            'margin-top': <%- checkValue(marginTop, 'px') %>,
            'margin-right': <%- checkValue(marginRight, 'px') %>,
            'margin-bottom': <%- checkValue(marginBottom, 'px') %>,
            'margin-left': <%- checkValue(marginLeft, 'px') %>,
            'padding-top': <%- checkValue(paddingTop, 'px') %>,
            'padding-right': <%- checkValue(paddingRight, 'px') %>,
            'padding-bottom': <%- checkValue(paddingBottom, 'px') %>,
            'padding-left': <%- checkValue(paddingLeft, 'px') %>,
            'border': "<%- borderStyle %> <%- borderWidth %>px <%- borderColor %>",
            'display': <%- checkValue(display) %>,
            'flex-wrap': <%- checkValue(flexWrap) %>,
            'flex-direction': <%- checkValue(flexDirection) %>,
            'justify-content': <%- checkValue(justifyContent) %>,
            'align-items': <%- checkValue(alignItems) %>,
            'align-content': <%- checkValue(alignContent) %>,
            'justify-items': <%- checkValue(justifyItems) %>,
            'grid-template-columns': <%- gridColumns ? '"repeat('+gridColumns+', 1fr)"' : 'undefined' %>,
            'grid-template-rows': <%- gridRows ? '"repeat('+gridRows+', 1fr)"' : 'undefined' %>,
            'width': <%- checkValue(width, widthUnit || 'px') %>,
            'height': <%- checkValue(height, heightUnit || 'px') %>,
            'color': <%- checkValue(color) %>,
            'font-size': <%- checkValue(fontSize) %>,
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
