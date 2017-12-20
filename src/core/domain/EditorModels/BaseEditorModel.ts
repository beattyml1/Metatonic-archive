import {SchemaField} from "../Schema/Records";
import {ComponentContext} from "./Context";

export type BaseEditorModel<T> = {
    value: T;
    field: SchemaField;
    context: ComponentContext;
}

export type SingleInputEditorModel<T> = BaseEditorModel<T> & {
    displayText: string;
    editText: string;
    htmlType: string;
}