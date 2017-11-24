import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class SelectOneDropdown extends React.Component<any, any> {
  render() { return (
    <select value={this.props.value} name={this.props.name} className="select" required={this.props.required}>
      {this.props.options.map(item => (
        <option value={item.value}>{item.text}</option>
      ))}
    </select>
  );}
}