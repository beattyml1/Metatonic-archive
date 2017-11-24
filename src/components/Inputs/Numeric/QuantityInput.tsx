import {isMobile} from "src/UI";
import React = require('react');
import NumericInput, {NumericInputBaseParameters} from './NumericInput';
/// <reference path="typings/react/react.d.ts" />

export type QuantityProperties = NumericInputBaseParameters & {
	maxDecimalDigits?: number;
	maxIntegerDigits?: number;
	decimalDigits: number;
}

export default class QuantityInput extends React.Component<NumericInputBaseParameters, undefined>{
	render() {
		return (
			<NumericInput 
				value={this.props.value}
				dataType={this.props.dataType}
				name={this.props.name}
				id={this.props.id}
				propertySelector={this.props.name}
				required={this.props.required}
				max={this.props.max}
				min={this.props.min}
				step={this.props.step}
				mask={this.getMask()}>
			</NumericInput>);
	}

	getMask() {
		return "";
	}
}