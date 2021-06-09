export interface IVariable {
    id: string;
    name: string;
    templateId?: string;
    templateParameters?: any;
}

export interface IVariableDraft {
    templateId?: string;
    templateParameters?: any;
}