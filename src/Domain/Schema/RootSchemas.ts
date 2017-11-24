import {SchemaRecordType, SchemaTypeParams} from "./Records";

interface JsMap<T> {
    [key: string]: T;
}

export type Schema = {
    types: JsMap<SchemaTypeParams>;
}

export type FormSchema = Schema & {
    rootType: SchemaRecordType;
}