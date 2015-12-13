import {typeMap, inputTypes, fullWidthTypes} from './Constants';
import {OptionItem} from './OtherClasses'

export function autoPickHint(multiline: boolean, options: OptionItem[]) {
	return "dropdown";
}
  
export function isInput (type: string) {
	return inputTypes.indexOf(type) > -1;
}
  
export function isFullWidth(type: string) {
	return fullWidthTypes.indexOf(type) > -1;
}
  
export function getType(dataType: string, optionHint: string, multiline: boolean, options: OptionItem[]) {
  var controlMap = typeMap[dataType];
      optionHint = optionHint === "auto" ? autoPickHint(multiline, options) : optionHint;
  var control = controlMap ? controlMap[optionHint] as string : dataType;
      control = controlMap.indexOf("multi-select") || dataType === "text" ? `mutliLine-${control}` : control;
  return control;
}