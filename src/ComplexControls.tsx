import {CheckBox, RadioButton} from "./Controls";
import {isMobile} from "./UI";
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

export class CheckBoxEditor extends React.Component<any, any> {
  render() { return (
    <div className="field-editor checkbox-field-editor">
      <div className="checkbox-container">
        <CheckBox value={this.props.value} />
      </div>
      <div className="label-container checkbox-label-container"> 
        <label className="checkbox-label">{this.props.label}></label>
      </div>
    </div>);}
}

export class CheckBoxItem extends React.Component<any, any> {
  render() { return  (
    <div className="checkbox-item">
      <div className="checkbox-container">
        <CheckBox value={this.props.value} />
      </div>
      <div className="label-container checkbox-label-container"> 
        <label className="checkbox-label">{this.props.label} </label>
      </div>
    </div>);}
}

export class RadioItem extends React.Component<any, any> {
  render() { return  (
    <div className="radio-item">
      <div className="radio-container">
        <RadioButton value={this.props.value} name={this.props.name} checked={this.props.type} />
      </div>
      <div className="label-container radio-label-container"> 
        <label className="radio-label">{this.props.label} </label>
      </div>
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

export class InputFieldLabelAndContainer extends React.Component<any, any> {
	render() { return (
    <div className="field-editor input-field-editor">
      <div className="label-container input-label-container"> 
        <label className="input-label">{this.props.label} </label>
      </div>
      <div className="input-container">
        {this.props.children}
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