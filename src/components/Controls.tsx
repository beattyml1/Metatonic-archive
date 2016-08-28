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

export class PhoneInput extends React.Component<any, any> {
  render() { return (
    <TextBox {...this.props} type="tel" data-type="tel" className="input text-box tel-input" />
  );}
}

export class EmailInput extends React.Component<any, any> {
  render() { return (
    <TextBox {...this.props} type="email" data-type="email" className="input text-box email-input" />
  );}
}

export class DateInput extends React.Component<any, any> {
  render() { return (
    isMobile() ?
      <input value={this.props.value} name={this.props.name} type="date" data-type="date" className="input date-input" required={this.props.required}/> :
      <input value={this.props.value} name={this.props.name} type="date" data-type="date" className="input date-input" required={this.props.required}/>
  );}
}

export class CurrencyInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="currency" className="input numeric-input money-input" mask="$ 9{*}.99" />
  );}
}

export class DecimalInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="decimal" className="input numeric-input decimal-input" mask="9{*}.{0,1}9{*}" />
  );}
}

export class IntegerInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="currency" className="input numeric-input integer-input" mask="9{*}" />
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

export class Dropdown extends React.Component<any, any> {
  render() { return (
    <select value={this.props.value} name={this.props.name} className="select" required={this.props.required}>
      {this.props.options.map(item => (
        <option value={item.value}>{item.text}</option>
      ))}
    </select>
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
