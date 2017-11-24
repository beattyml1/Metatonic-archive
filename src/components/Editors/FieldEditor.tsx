import * as React from "react";
import {FieldEditorModel} from 'Domain/EditorModels/FieldEditorModel';

export class FieldEditor extends React.Component<FieldEditorModel, void> {
    render() {
        return (
            <div>
                {this.props.field.typeParameters}
            </div>
        );
    }
}

export class FieldDisplay extends React.Component<FieldEditorModel, void> {
    render() {
        return (
            <div>
                {this.props.field.typeParameters}
            </div>
        );
    }
}

export class FieldCell extends React.Component<FieldEditorModel, {isEditing}> {
    render() {
        if (this.state.isEditing) {
            return <FieldEditor value={this.props.value} field={this.props.field}/>
        } else {
            return <FieldDisplay value={this.props.value} field={this.props.field}/>
        }
    }
}