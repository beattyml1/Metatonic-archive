import * as React from "react";
import {BaseEditorModel} from "core/domain/EditorModels/BaseEditorModel";
import {AnyTypeParameterType, SchemaType} from "core/domain/Schema/Records";
import {getUniqueId} from "core/services/IdGeneratorService";
import {BaseFieldContextComponent} from "BaseFieldContextComponent";

export abstract class BaseEditor
    <TData,
     TType extends AnyTypeParameterType,
     TParams extends BaseEditorModel<TData>,
     TState>
    extends BaseFieldContextComponent<TParams, TState> {

    type() {
        return Object.assign({}, this.props.field.typeParameters, this.props.field.typeParameters.typeParams as TType)
    }

    value() {
        return this.props.value;
    }
}