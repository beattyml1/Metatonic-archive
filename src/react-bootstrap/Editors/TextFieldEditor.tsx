import * as React from "react";
import {TextModel} from "../../core/domain/EditorModels/TextModel";
import {BaseEditor} from "./BaseEditor";
import {TextType} from "../../core/domain/Schema/TextTypes";
import {getTextHtmlInputType} from "core/services/HtmlInputTypeService";

export class TextFieldEditor extends BaseEditor<string, TextType, TextModel, void> {
    render() {
        return (
            <input
                value={this.props.value}
                type={getTextHtmlInputType(this.type().type)}
                required={this.field().required}
                maxLength={this.field().maxLength || this.type().maxLength}
                className={this.inputTypeClasses()}
            />
        )
    }

    inputTypeClasses = () =>
        this.type().parentTypeNames.concat(this.type().name).map(_ => `input-${_}`).join(' ')
}