import * as React from "react";
import {BaseEditorModel} from "core/domain/EditorModels/BaseEditorModel";
import {AnyTypeParameterType, SchemaField, SchemaType} from "core/domain/Schema/Records";
import {getUniqueId} from "core/services/IdGeneratorService";
import {ComponentContext} from "core/domain/EditorModels/Context";

export abstract class BaseFieldContextComponent<TParams extends { field: SchemaField, context: ComponentContext}, TState>
    extends React.Component<TParams, TState> {

    field() {
        return this.props.field;
    }

    uniqueId() {
        return getUniqueId(this.field(), this.props.context);
    }
}