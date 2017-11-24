import {isMobile} from "src/UI";
import React = require('react');
import MaskedTextInput from 'Inputs/MaskedTextInput';
/// <reference path="typings/react/react.d.ts" />

export default class MaskedDropDownTextBox extends React.Component<any, any> {
  render() { return (
    <span>
      <MaskedTextInput
        value={this.props.value}
        name={this.props.name}
        required={this.props.required}
        type={this.props.type || "text"}
        data-mask={this.props.mask}
        data-type={this.props.dataType}
      ></MaskedTextInput>
      <a className={`icon ${this.props.iconClass}`} onClick={this.openDropDown()}  ></a>
    </span>
  );}
  openDropDown(): any {

  }
}