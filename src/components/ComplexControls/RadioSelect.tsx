import {CheckBox, RadioButton} from "../Controls";
import {isMobile} from "UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export class RadioItem extends React.Component<any, any> {
  render() { return  (
    <div className="radio-item">
      <span className="radio-container">
        <RadioButton value={this.props.value} name={this.props.name} checked={this.props.type} />
      </span>
      <span className="label-container radio-label-container">
        <label className="radio-label">{this.props.label} </label>
      </span>
    </div>);}
}


export default class RadioSelect extends React.Component<any, any> {
	render() { return (
    <div className="field-editor check-list-editor">
      <div className="check-list-label-container">
        <label className="check-list-label">{this.props.label} </label>
      </div>
      <div className="check-list">
        {this.props.options.map(item => (
          <RadioItem value={item.value} label={item.label} name={item.name} checked={this.props.value == item.value}/>
        ))}
      </div>
    </div>);}
}