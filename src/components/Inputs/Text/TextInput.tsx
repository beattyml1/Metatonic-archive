import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class TextInput extends React.Component<any, any> {
  render() { return (
    <input
      value={this.props.value}
      name={this.props.name}
      required={this.props.required}
      type="text"
      data-type={this.props.dataType}
      maxLength={this.props.maxLength}
    />
  );}
}