import UI = require("../UI");
import * as Controls from "./Controls";
import * as Editors from "./ComplexControls";
import {__, $$, Util} from "../Extensions";
import React = require('react');
import {OptionItem, OptionsSource} from '../classes/OtherClasses'
import {autoPickHint, getType, isFullWidth, isInput} from '../Logic'
import {InputEditor} from './inputEditor';
import { FullWidthFieldEditor } from './FullWidthEditor';
import EditorProps from '../classes/EditorProps';
import ControlProps from '../classes/ControlProps';
import { CustomControls }  from '../services/CustomControlsService';
import FormSection from './FormSection';
// import ReactDataGrid = require('react-data-grid');
/// <reference path="./typings/react/react.d.ts" />

export class FieldEditorForDataType extends React.Component<EditorProps, any> {
  render() {
    let metaData = this.props.metaData;
		let inputId = `${this.props.parentId}-${this.props.metaData.fieldName}-input`;
    let control = getType(metaData.dataType, metaData.optionHint, metaData.multiLine, metaData.optionsSource);
    let options = metaData.optionsSource.getOptions();
    let props = Util.merge(this.props, { actions: [], inputId, options, type: control});
    return this.getControl(control, props);
  }
  
  getControl(type: string, props) {
    return (
      isInput(type) ?
        <InputEditor {...props}/> :
      isFullWidth(type) ?
        <InputEditor {...props}/> :
      type === "record-select" ?
        <EntitySelector {...props} /> :
      type === "custom-record-edit" ?
        <FormSection id={props.inputId} label={props.metaData.label} hlevel={props.hlevel+1}>
          <CustomEntityEditor {...props} hlevel={props.hlevel+1}/>
        </FormSection> :
      type === "record-edit" ?
        <FormSection id={props.inputId} label={props.metaData.label} hlevel={props.hlevel+1}>
          <EntityFieldsEditor {...props} hlevel={props.hlevel+1}/>
        </FormSection> :
      null);
    }
}

export class EntitySelector extends React.Component<any, any> {
  render() {
    return (
        <Editors.InputFieldLabelAndContainer
          inputId={this.props.inputId}
          label={this.props.metaData.label}
          actions={this.props.actions.append}>

        </Editors.InputFieldLabelAndContainer>
    );
  }
}

export class CustomEntityEditor extends React.Component<any, any> {
  render() {
    return <div></div>;
  }
}

class DocumentEditor extends React.Component<any, any> {
	render() { return (
    <EntityFieldsEditor fields={this.props.fields} />
  );}
}

class Table extends React.Component<any, any> {
	render() { return (
    <table>
      <thead>
      </thead>
    </table>);}
}


export class EntityFieldsEditor extends React.Component<any, any> {
	render() { return (
    <div>
      {this.props.fields.map(field =>
        <FieldEditorForDataType {...field} parentId={`${this.props.parentId}-${this.props.name}`} />
      )}
    </div>);}
}
// class DataGrid extends React.Component<any, any> {
// 	render() { return (
//     // <ReactDataGrid columns={this.props.columns} rowGetter={() => this.props.records}/>
//     );}
// }
