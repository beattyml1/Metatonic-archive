import {typeMap, inputTypes, fullWidthTypes} from './Constants';
import {OptionItem, OptionsSource} from './classes/OtherClasses';

export function autoPickHint(multiline: boolean, optionsSource: OptionsSource) {
	return "dropdown";
}

export function isInput (type: string) {
	return inputTypes.indexOf(type) > -1;
}

export function isFullWidth(type: string) {
	return fullWidthTypes.indexOf(type) > -1;
}

export function getType(dataType: string, optionHint: string, multiline: boolean, optionsSource: OptionsSource) {
  var controlMap = typeMap[dataType];
      optionHint = optionHint === "auto" ? autoPickHint(multiline, optionsSource) : optionHint;
  var control = controlMap ? controlMap[optionHint] as string : dataType;
      control = controlMap.indexOf("multi-select") || dataType === "text" ? `mutliLine-${control}` : control;
  return control;
}
