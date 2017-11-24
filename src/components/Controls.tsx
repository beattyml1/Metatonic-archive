import {isMobile} from "../UI";
import React = require('react');
import {TextBox, NumericInput } from './BaseControls'
/// <reference path="./typings/react/react.d.ts" />

export class HiddenField extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="hidden" />
  );}
}

export class TextInput extends React.Component<any, any> {
  render() { return (
    <TextBox {...this.props} type="text" data-type="text" className="input text-box text-input" />
  );}
}













export class CheckBoxInput extends React.Component<any, any> {
  render() { return (
    <CheckBox {...this.props}/>
  );}
}

export class CheckBox extends React.Component<any, any> {
  render() { return (
    <input checked={this.props.value} type="checkbox" className="input numeric-input integer-input" required={this.props.required}/>
  );}
}

export class RadioButton extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} checked={this.props.check} name={this.props.name} type="radio" className="input numeric-input integer-input" required={this.props.required}/>
  );}
}



export class MultiLineTextBox extends React.Component<any, any> {
  render() { return (
    <textarea
      value={this.props.value}
      name={this.props.name}
      data-type="multi-line-text"
      className="text-area"
      required={this.props.required}
      maxLength={this.props.maxLength}>
    </textarea>
  );}
}
