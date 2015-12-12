import {isMobile} from "./UI";
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

export class TextBox extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="text" data-type="text" className="input text-box" required={this.props.required}  maxLength={this.props.maxLength}/> 
  );}
}

export class PhoneInput extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="tel" data-type="text" className="input text-box" required={this.props.required}  maxLength={this.props.maxLength}/> 
  );}
}

export class EmailInput extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="email" data-type="text" className="input text-box" required={this.props.required}  maxLength={this.props.maxLength}/> 
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
    <input value={this.props.value} name={this.props.name} type="numeric" data-type="currency" className="input numeric-input money-input" max={this.props.max} min={this.props.min} required={this.props.required}/> 
  );}
}

export class DecimalInput extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="numeric" data-type="decimal" className="input numeric-input decimal-input" max={this.props.max} min={this.props.min} required={this.props.required}/> 
  );}
}

export class IntegerInput extends React.Component<any, any> {
  render() { return (
    <input value={this.props.value} name={this.props.name} type="numeric" data-type="currency" className="input numeric-input integer-input" max={this.props.max} min={this.props.min} required={this.props.required}/> 
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
    <textarea value={this.props.value} name={this.props.name} data-type="multi-line-text" className="text-area" required={this.props.required}  maxLength={this.props.maxLength}></textarea> 
  );}
}

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
