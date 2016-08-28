import UI = require("../UI");
import * as Controls from "./Controls";
import * as Editors from "./ComplexControls";
import {__, $$} from "../Extensions";
import React = require('react');
import {OptionItem, OptionsSource} from '../classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from '../Logic';
import ControlProps from '../classes/ControlProps';
// import ReactDataGrid = require('react-data-grid');
/// <reference path="./typings/react/react.d.ts" />

export class InputEditor extends React.Component<ControlProps, any> {
  render() {
		return (
      <Editors.InputFieldLabelAndContainer inputId={this.props.inputId} label={this.props.metaData.label} actions={this.props.actions}>
        <InputForType id={this.props.inputId} value={this.props.value} change={this.props.events.change}  />
      </Editors.InputFieldLabelAndContainer>
  );}
}

export class InputForType extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
      type === "text" ? <Controls.TextInput {...this.props} /> :
      type === "date" ? <Controls.DateInput {...this.props} /> :
      type === "currency" ? <Controls.CurrencyInput {...this.props} /> :
      type === "decimal" ? <Controls.DecimalInput {...this.props} /> :
      type === "integer" ? <Controls.IntegerInput {...this.props} /> :
      type === "email" ? <Controls.EmailInput {...this.props} /> :
      type === "tel" ? <Controls.PhoneInput {...this.props} /> :
      type === "checkbox" ? <Controls.CheckBoxInput {...this.props} /> :
      type === "dropdown" ? <Controls.Dropdown {...this.props} /> :
      null);
  }
}
