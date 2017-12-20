import {Maybe} from 'core/CoreTypes';
import {TextType} from "./TextTypes";
import {NumericType, QuantityType} from "./Quantities";
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
    Numeric,
    DateTime,
    Text,
    Code
}

export type AnyTypeParameterType = TextType | SchemaRecordType | QuantityType | DateTimeTypeData | CodeDescriptionSelectionType | NumericType;

export type SchemaTypeGeneric<TCategory extends SchemaTypeCategory, TType extends AnyTypeParameterType> = {
    name: DataTypes|string;
    uiControlPreference?: string;
    category: TCategory;
    parentTypeNames: string[];
    typeParams: TType;
}
export type SchemaType =
    SchemaTypeGeneric<SchemaTypeCategory.Record, SchemaRecordType > |
    SchemaTypeGeneric<SchemaTypeCategory.DateTime, DateTimeTypeData> |
    SchemaTypeGeneric<SchemaTypeCategory.Quantity, QuantityType> |
    SchemaTypeGeneric<SchemaTypeCategory.Numeric, NumericType> |
    SchemaTypeGeneric<SchemaTypeCategory.Text, TextType> |
    SchemaTypeGeneric<SchemaTypeCategory.Code, CodeDescriptionSelectionType>

export type SelectableType =  CodeDescriptionSelectionType | SchemaRecordType;

