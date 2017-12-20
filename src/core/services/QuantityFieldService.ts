import {SchemaField, SchemaTypeCategory} from "../domain/Schema/Records";
import {QuantityType} from "../domain/Schema/Quantities";

export function getNumericField(quantityField: SchemaField): SchemaField {
    let quantityType = quantityField.typeParameters.typeParams as QuantityType;
    return {
        name: "value",
        typeParameters: {
            category: SchemaTypeCategory.Numeric,
            typeParams: quantityType.numericFormat
        }
    } as SchemaField;
}