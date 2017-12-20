import * as React from "react";
import {SchemaField} from "core/domain/Schema/Records";
import {LabeledEditorContainer} from "./LabelingProviderBaseComponent";
import {ComponentContext} from "core/domain/EditorModels/Context";

export default class InputBoxLabelContainer extends LabeledEditorContainer {
	render() { return (
        <div className="field-editor input-field-editor">
            <label htmlFor={this.props.field.uiUniqueId}>{this.props.field.label}</label>
            {(this.props as any).children}
        </div>);
	}

}