import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class NumericInput extends React.Component<any, any> {
  render() { return (
    <input
      value={this.props.value}
      name={this.props.name}
      required={this.props.required}
      type="number"
      data-type={this.props.dataType}
      data-mask={this.getNumericMask()}
      max={this.props.max}
      min={this.props.min}
      step={this.props.step}
    />
  );}

  getNumericMask() {
    
  }
}