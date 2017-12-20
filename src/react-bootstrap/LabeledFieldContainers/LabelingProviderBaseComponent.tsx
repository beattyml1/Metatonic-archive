import * as React from "react";
import {SchemaField} from "core/domain/Schema/Records";
import {BaseFieldContextComponent} from "BaseFieldContextComponent";
import {ComponentContext} from "core/domain/EditorModels/Context";

export abstract class LabeledEditorContainer extends BaseFieldContextComponent<{ field: SchemaField, context: ComponentContext }, void> {
    content() {
        return (this.props as any).children;
    }

    label() {
        return this.props.field.label;
    }
}