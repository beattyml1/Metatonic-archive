import {TextType} from "../Schema/TextTypes";
import {BaseEditorModel} from "./BaseEditorModel";

export type TextModel = BaseEditorModel<string> & {
    type: TextType;
}