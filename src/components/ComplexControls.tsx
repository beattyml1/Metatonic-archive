import {CheckBox, RadioButton} from "./Controls";
import {isMobile} from "../UI";
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

export class CheckBoxEditor extends React.Component<any, any> {
  render() { return (
    <div className="field-editor checkbox-field-editor">
      <span className="checkbox-container">
        <CheckBox value={this.props.value} />
      </span>
      <span className="label-container checkbox-label-container">
        <label className="checkbox-label">{this.props.label}></label>
      </span>
    </div>);}
}

export class CheckBoxItem extends React.Component<any, any> {
  render() { return  (
    <div className="checkbox-item">
      <span className="checkbox-container">
        <CheckBox value={this.props.value} />
      </span>
      <span className="label-container checkbox-label-container">
        <label className="checkbox-label">{this.props.label} </label>
      </span>
    </div>);}
}



