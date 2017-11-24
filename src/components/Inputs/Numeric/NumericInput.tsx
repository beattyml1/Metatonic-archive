import {isMobile} from "src/UI";
import React = require('react');
import { hasValue, ifHasValue } from 'CoreExtensions/hasValue';
import { Maybe } from 'CoreTypes';
/// <reference path="typings/react/react.d.ts" />

export type InputBaseParameters<T> = {
  value: T;
  id: string;
  name: string;
  propertySelector: string;
  required: boolean;
  dataType: string;
}

export type NumericInputBaseParameters =  InputBaseParameters<Maybe<number>> & {
  max?: number;
  min?: number;
  step?: number;
}


export type NumericInputParameters = NumericInputBaseParameters & {
  mask: Maybe<string>;
}

export default class NumericInput extends React.Component<NumericInputParameters, undefined>{
  render() { return (
    <input
      value={ hasValue(this.props.value) ? this.props.value.toString() : "" }
      name={this.props.name}
      required={this.props.required}
      type="number"
      data-type={this.props.dataType}
      data-mask={this.props.mask}
      max={this.props.max}
      min={this.props.min}
      step={this.props.step}
    />
  );}
}