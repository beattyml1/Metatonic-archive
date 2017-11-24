import {Maybe} from 'CoreTypes';
import {TextType} from "./TextTypes";
import {QuantityType} from "./Quantities";
import {DateTimeTypeData} from "./DateTimeType";
import {CodeDescriptionSelectionType} from "./ItemSelectionType";
import {DataTypes} from "./DataTypes";

export type SchemaRecordType = {
    fields: SchemaField[];
}

export type SchemaField  = {
    name: string;
    label: string;
    typeName: string;
    uiUniqueId: string;
    typeParameters: SchemaType;
    required: boolean;
    maxLength?: Maybe<number>;
    max?: Maybe<number>;
    min?: Maybe<number>;
    entryType?: SchemaEntryType;
    multiple: boolean;
    canAdd?: boolean;
    canEditSelection?: boolean;
    uiControlPreference?: string;
}

export enum SchemaEntryType {
    entry = "entry",
    selection = "entry",
}

type SelectUi = "search" | "dropdown" | "list"
type UiListLayoutDirection = "vertical" | "horizontal"
type SelectEdit = "select" | "edit"
type MultiSingle = "single" | "list" | "static-list"

export enum SchemaTypeCategory {
    Record = 1,
    Quantity,
    DateTime,
    Text,
    Code
}

export type AnyTypeParameterType = TextType | SchemaRecordType | QuantityType | DateTimeTypeData | CodeDescriptionSelectionType;

export type SchemaType = {
    name: DataTypes|string;
    uiControlPreference?: string;
    category: SchemaTypeCategory;
    typeParams: TextType | SchemaRecordType | QuantityType | DateTimeTypeData | CodeDescriptionSelectionType;
} & (
    { category: SchemaTypeCategory.Record, typeParams: SchemaRecordType } |
    { category: SchemaTypeCategory.DateTime, typeParams: DateTimeTypeData } |
    { category: SchemaTypeCategory.Quantity, typeParams: QuantityType } |
    { category: SchemaTypeCategory.Text, typeParams: TextType } |
    { category: SchemaTypeCategory.Code, typeParams: CodeDescriptionSelectionType }
)

