import * as React from "react";
import {BaseEditorModel} from "Domain/EditorModels/BaseEditorModel";
import {AnyTypeParameterType, SchemaType} from "Domain/Schema/Records";

export abstract class BaseEditor
    <TData,
     TType extends AnyTypeParameterType,
     TParams extends BaseEditorModel<TData>,
     TState>
    extends React.Component<TParams, TState> {

    type() {
        return Object.assign({}, this.props.field.typeParameters, this.props.field.typeParameters.typeParams as TType)
    }

    field() {
        return this.props.field;
    }

    value() {
        return this.props.value;
    }
}