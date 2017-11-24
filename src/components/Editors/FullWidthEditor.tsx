import UI = require("UI");
import {FullWidthFieldLabelAndContainer} from 'components/LabeledFieldContainers/FullWidthFieldLabelAndContainer';
import React = require('react');
import {OptionItem, OptionsSource} from 'classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from 'Logic'
import RadioSelect from "../ComplexControls/RadioSelect";
import CheckList from "../ComplexControls/CheckList";
import {MultiLineTextBox} from "../Controls";
// import ReactDataGrid = require('react-data-grid');
/// <reference path="typings/react/react.d.ts" />

export class FullWidthFieldEditor extends React.Component<any, any> {
  render() { return (
      <FullWidthFieldLabelAndContainer {...this.props}>
        <FullWidthFieldInputForType {...this.props} />
      </FullWidthFieldLabelAndContainer>
  );}
}

export class FullWidthFieldInputForType extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
        type === "radio" ? <RadioSelect {...this.props} /> :
        type === "checklist" ? <CheckList {...this.props} /> :
        type === "multi-line-text" ? <MultiLineTextBox {...this.props} /> :
      <div></div>
    );}
}
