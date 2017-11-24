import * as React from "react";
import {QuantityModel} from "../../Domain/EditorModels/QuantityModel";
import {UnitCategory, Unit} from "Domain/Schema/Quantities";
import {LeftRight, UnitCategoryData} from "Domain/Schema/Quantities";
import InputFieldLabelAndContainer from "../LabeledFieldContainers/InputFieldLabelAndContainer";
import {ControlContext} from "../../classes/ControlProps";
import {TextModel} from "../../Domain/EditorModels/TextModel";
import {BaseEditor} from "./BaseEditor";
import {TextType} from "../../Domain/Schema/TextTypes";
import {getTextHtmlInputType} from "services/HtmlInputTypeService";

export class TextFieldEditor extends BaseEditor<string, TextType, TextModel, void> {
    render() {
        return (
            <input value={this.props.value} type={getTextHtmlInputType(this.type().type)}/>
        )
    }
}

export class LabeledTextFieldEditor  extends React.Component<QuantityModel, void> {
    render() {
        return <InputFieldLabelAndContainer inputId={this.props.field.uiUniqueId} label={this.props.field.label} actions={[]} >
            <TextFieldEditor {...this.props}/>
        </InputFieldLabelAndContainer>

    }
}