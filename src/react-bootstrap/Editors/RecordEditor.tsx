import * as React from "react";
import {FieldCell, FieldEditor} from "./FieldEditor";
import {BaseEditorModel} from "../../core/domain/EditorModels/BaseEditorModel";
import {SchemaRecordType} from "../../core/domain/Schema/Records";
import {createContext} from "../../core/services/ContextService";

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
                    <FieldEditor value={this.props.value[field.name]} field={field} context={createContext(field, this.props.context)}/>
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
            <table>
                <thead>
                    <tr>
                        {fields.map(field =>
                            <th>{field.label}</th>
                        )}
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {this.props.value.map(record =>
                    <tr>
                        {fields.map((field, index) =>
                            <td>
                                <FieldCell value={record} field={field} context={createContext(field, this.props.context, index)}/>
                            </td>
                        )}
                        <td>
                            <button type="button" onClick={() => this.remove(record)}>Remove</button>
                            <button type="button" onClick={() => this.edit(record)}>Edit</button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    edit(record) {

    }

    remove(record) {

    }
}
