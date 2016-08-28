import {OptionItem, OptionsSource} from './OtherClasses';

export default class FieldMetaData {
	dataType:string;
	optionsSource: OptionsSource;
  multiLine: boolean;
  fieldName: string;
  label: string;
  length: number;
  parentId: string;
	optionHint: string;
	min: number;
	max: number;
	required: boolean;
}
