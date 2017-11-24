import * as React from "react";
import {QuantityModel} from "../../Domain/EditorModels/QuantityModel";
import {UnitCategory, Unit} from "Domain/Schema/Quantities";
import {LeftRight, UnitCategoryData} from "Domain/Schema/Quantities";
import InputFieldLabelAndContainer from "../LabeledFieldContainers/InputFieldLabelAndContainer";
import {ControlContext} from "../../classes/ControlProps";
import {FieldCell, FieldEditor} from "./FieldEditor";
import {BaseEditorModel} from "../../Domain/EditorModels/BaseEditorModel";
import {SchemaRecordType} from "../../Domain/Schema/Records";

export type RecordParams = BaseEditorModel<any>;
export type RecordMultiParams = BaseEditorModel<any[]>;

export class RecordEditor extends React.Component<RecordParams, void> {
    render() {
        let recordType = this.props.field.typeParameters.typeParams as SchemaRecordType;
        let fields = recordType.fields;
        return (
            <fieldset>
                <legend>{this.props.field.label}</legend>
                {fields.map(field =>
                    <FieldEditor value={this.props.value[field.name]} field={field}/>
                )}
            </fieldset>
        )
    }
}



export class RecordMultiEditor extends React.Component<RecordMultiParams, void> {
    render() {
        let recordType = this.props.field.typeParameters.typeParams as SchemaRecordType;
        let fields = recordType.fields;
        return (
            <fieldset>
                <legend>{this.props.field.label}</legend>
                <table>
                    <thead>
                        <tr>
                            {fields.map(field =>
                                <th>{field.label}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                    {this.props.value.map(record =>
                        <tr>
                            {fields.map(field =>
                                <td>
                                    <FieldCell value={record} field={field}/>
                                </td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </fieldset>
        )
    }
}
