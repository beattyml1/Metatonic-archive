import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export type MaskedTextInputParameters = {

}

export default class MaskedTextInput extends React.Component<any, any> {
  render() { return (
    <input
      value={this.props.value}
      name={this.props.name}
      required={this.props.required}
      type={this.props.type || "text"}
      data-mask={this.props.mask}
      data-type={this.props.dataType}
      maxLength={this.props.maxLength}
    />
  );}
}