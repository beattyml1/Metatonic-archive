import * as React from "react";
import {BaseEditorModel} from "core/domain/EditorModels/BaseEditorModel";
import {SchemaRecordType, SelectableType} from "../../core/domain/Schema/Records";
import {BaseEditor} from "Editors/BaseEditor";

export class RadioSelectList extends BaseEditor<string, SelectableType, BaseEditorModel<string>, void> {
    render() {
        return (
            <div></div>
        );
    }
}