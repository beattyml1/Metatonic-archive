import UI = require("../UI");
import * as Controls from "./Controls";
import * as Editors from "./ComplexControls";
import {__, $$} from "../Extensions";
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
    return (
      <FieldEditorControl {...this.props}
        inputId={inputId}
        options={metaData.optionsSource.getOptions()}
        type={getType(metaData.dataType, metaData.optionHint, metaData.multiLine, metaData.optionsSource)}/>);
  }
}

export class FieldEditorControl extends React.Component<ControlProps, any> {
  render() {
    var type = this.props.type;
    return (
        isInput(type) ?
          <InputEditor {...this.props} /> :
        isFullWidth(type) ?
          <InputEditor {...this.props} /> :
        type === "checbox" ?
          <Editors.CheckBoxEditor {...this.props} /> :
        type === "record-select" ?
          <EntitySelector {...this.props} /> :
        type === "custom-record-edit" ?
          <FormSection id={this.props.inputId} label={this.props.metaData.label} hlevel={this.props.hlevel+1}>
            <CustomEntityEditor {...this.props} hlevel={this.props.hlevel+1} />
          </FormSection> :
        type === "record-edit" ?
          <FormSection id={this.props.inputId} label={this.props.metaData.label} hlevel={this.props.hlevel+1}>
            <EntityFieldsEditor {...this.props} hlevel={this.props.hlevel+1} />
          </FormSection> :
        null);
  }
}

export class EntitySelector extends React.Component<any, any> {
  render() {
    return (
        <Editors.InputFieldLabelAndContainer inputId={this.props.inputId} label={this.props.metaData.label} actions={[]}>

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
        <FieldEditorForDataType {...field} />
      )}
    </div>);}
}
// class DataGrid extends React.Component<any, any> {
// 	render() { return (
//     // <ReactDataGrid columns={this.props.columns} rowGetter={() => this.props.records}/>
//     );}
// }
