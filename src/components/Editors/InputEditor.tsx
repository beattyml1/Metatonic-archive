import UI = require("UI");
import InputFieldLabelAndContainer from "components/LabeledFieldContainers/InputFieldLabelAndContainer";
import TextInput from "components/Inputs/Text/TextInput";
import DateInput from "components/Inputs/TextDropdowns/DateInput";
import CurrencyInput from "components/Inputs/Numeric/CurrencyInput";
import DecimalInput from "components/Inputs/Numeric/DecimalInput";
import IntegerInput from "components/Inputs/Numeric/IntegerInput";
import EmailInput from "components/Inputs/Text/EmailInput";
import PhoneInput from "components/Inputs/Text/PhoneInput";
import {__, $$} from "Extensions";
import React = require('react');
import {OptionItem, OptionsSource} from 'classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from 'Logic';
import ControlProps from 'classes/ControlProps';
import { CustomInputs }  from 'services/CustomInputService';
import SelectOneDropdown from "../Inputs/Selects/SelectOneDropdown";
// import ReactDataGrid = require('react-data-grid');
/// <reference path="components/typings/react/react.d.ts" />

export default class InputEditor extends React.Component<ControlProps, any> {
  render() {
		return (
      <InputFieldLabelAndContainer inputId={this.props.inputId} label={this.props.metaData.label} actions={this.props.actions}>
        <InputForType id={this.props.inputId} value={this.props.value} change={this.props.events.change}  />
      </InputFieldLabelAndContainer>
  );}
}

export class InputForType extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
      type === "text" ? <TextInput {...this.props} /> :
      type === "date" ? <DateInput {...this.props} /> :
      type === "currency" ? <CurrencyInput {...this.props} /> :
      type === "decimal" ? <DecimalInput {...this.props} /> :
      type === "integer" ? <IntegerInput {...this.props} /> :
      type === "email" ? <EmailInput {...this.props} /> :
      type === "tel" ? <PhoneInput {...this.props} /> :
      type === "checkbox" ? <CheckBoxInput {...this.props} /> :
      type === "selectOne" ? <SelectOneDropdown {...this.props} /> :
      CustomInputs.getCustomInputForType(type).render());
  }
}
