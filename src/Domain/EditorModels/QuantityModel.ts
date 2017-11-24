import {QuantityType} from "../Schema/Quantities";
import {Maybe} from "../../CoreTypes";
import {SchemaField} from "../Schema/Records";
import {BaseEditorModel} from "./BaseEditorModel";

export type QuantityModel = BaseEditorModel<number> & {
    decimalMultiplier: number;
    unit?: string;
    type: QuantityType;
}