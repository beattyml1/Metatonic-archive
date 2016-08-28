import {CheckBox, RadioButton} from "./Controls";
import {InputActions} from './InputActions';
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


export class RadioSelect extends React.Component<any, any> {
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

export class CheckList extends React.Component<any, any> {
	render() { return (
    <div className="field-editor check-list-editor">
      <div className="check-list-label-container">
        <label className="check-list-label">{this.props.label} </label>
      </div>
      <div className="check-list">
        {this.props.options.map(item =>
          <CheckBox value={item.value} label={item.label} name={item.name} />
        )}
      </div>
    </div>);}
}

export class InputFieldLabelAndContainer extends React.Component<{
    inputId: string;
    label: string;
    actions: Array<any>;
}, any> {
	render() { return (
    <div className="field-editor input-field-editor">
      <div className="label-container input-label-container">
        <label htmlFor={this.props.inputId} className="input-label">{this.props.label}</label>
      </div>
      <div className="input-container">
        <span className="input-span">{(this.props as any).children}</span>
        <InputActions actions={this.props.actions}/>
      </div>
    </div>);}
}


export class FullWidthFieldLabelAndContainer extends React.Component<any, any> {
	render() { return (
    <div className="field-editor full-width-field-editor">
      <div className="label-container full-width-label-container">
        <label className="full-width-label">{this.props.label} </label>
      </div>
      <div className="full-width-field-container">
        {this.props.children}
      </div>
    </div>);}
}
