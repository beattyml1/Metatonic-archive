import * as React from "react";
import {Decimal} from "../../core/domain/Data/Decimal";
import {BaseEditor} from "./BaseEditor";
import {NumericType} from "core/domain/Schema/Quantities";
import {BaseEditorModel} from "core/domain/EditorModels/BaseEditorModel";
import {Numeric} from "core/domain/Data/Numeric";

export class NumericEditor extends BaseEditor<Numeric, NumericType, BaseEditorModel<Numeric>, void> {
    render() {
        return (
            <input type="number"
                   id={this.uniqueId()}
                   value={this.value().toEditorString()}
                   required={this.field().required}
                   max={this.props.field.max || undefined}
                   min={this.props.field.min || undefined}
                   step={this.step()}
            />
        );
    }
    step = () => 1;
    getMask = () => ""
}