import UI = require("../UI");
import * as Controls from "./Controls";
import * as Editors from "./ComplexControls";
import {__, $$} from "../Extensions";
import React = require('react');
import {OptionItem, OptionsSource} from '../classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from '../Logic'
// import ReactDataGrid = require('react-data-grid');
/// <reference path="./typings/react/react.d.ts" />

export class FullWidthFieldEditor extends React.Component<any, any> {
  render() { return (
      <Editors.FullWidthFieldLabelAndContainer {...this.props}>
        <FullWidthFieldInputForType {...this.props} />
      </Editors.FullWidthFieldLabelAndContainer>
  );}
}

export class FullWidthFieldInputForType extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
        type === "radio" ? <Editors.RadioSelect {...this.props} /> :
        type === "checklist" ? <Editors.CheckList {...this.props} /> :
        type === "multi-line-text" ? <Controls.MultiLineTextBox {...this.props} /> :
      null
    );}
}
