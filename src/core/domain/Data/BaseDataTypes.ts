import {SchemaField} from "domain/Schema/Records";

export interface ValueDataType {
    new (stringValue: string, field?: SchemaField);
    toDataString(): string;
    toDisplayString(): string;
    toEditorString(): string;
}

export interface RecordDataType<T>{
    new (jsonData: T, field: SchemaField);
}