import {isMobile} from "./UI";
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

export class TextBox extends React.Component<any, any> {
  render() { return ( 
    <input 
      value={this.props.value} 
      name={this.props.name} 
      required={this.props.required} 
      type={this.props.type} 
      data-type={this.props.dataType}  
      maxLength={this.props.maxLength}
    />
  );}
}

export class NumericInput extends React.Component<any, any> {
  render() { return ( 
    <input 
      value={this.props.value} 
      name={this.props.name} 
      required={this.props.required} 
      type={this.props.type} 
      data-type={this.props.dataType}  
      max={this.props.max}
      min={this.props.min}
      step={this.props.step}
    />
  );}
}

export class MaskedDropDownTextBox extends React.Component<any, any> {
  render() { return ( 
    <span>
      <input 
        value={this.props.value} 
        name={this.props.name} 
        required={this.props.required} 
        type={this.props.type} 
        data-type={this.props.dataType}  
      />
      <a className={`icon ${this.props.iconClas}`} onClick={this.openDropDown()}  ></a>
    </span>
  );}
  openDropDown(): any {
    
  }
}