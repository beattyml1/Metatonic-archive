import {SchemaField} from "../Schema/Records";

export type BaseEditorModel<T> = {
    value: T;
    field: SchemaField;
}

export type SingleInputEditorModel<T> = BaseEditorModel<T> & {
    displayText: string;
    editText: string;
    htmlType: string;
}