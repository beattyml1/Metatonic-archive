import UI = require("./UI");
import * as Controls from "./Controls";
import {__, $$} from "./Extensions";
import React = require('react');
// import ReactDataGrid = require('react-data-grid');
/// <reference path="./typings/react/react.d.ts" />
 const inputTypes = [];
 const fullWidthTypes = [];
 const typeMap = {
   "select": {
     "inlineList": "radio",
     "dropdown": "dropdown",
     "popup": "popup-select-one"
   },
   "multi-select": {
     "inlineList": "checklist",
     "dropdown": "multi-select",
     "popup": "popup-multi-select"
   }
 }

class OptionItem {
  key: string;
  value: string;
}
const autoPickHint = (multiline: boolean, options: OptionItem[]) => 
  "dropdown";
  
const isInput = (type: string) =>
  inputTypes.indexOf(type) > -1;
  
const isFullWidth = (type: string) =>
  fullWidthTypes.indexOf(type) > -1;
  
function getType(dataType: string, optionHint: string, multiline: boolean, options: OptionItem[]) {
  var controlMap = typeMap[dataType];
      optionHint = optionHint === "auto" ? autoPickHint(multiline, options) : optionHint;
  var control = controlMap ? controlMap[optionHint] as string : dataType;
      control = controlMap.indexOf("multi-select") || dataType === "text" ? `mutliLine-${control}` : control;
  return control;
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

// class DataGrid extends React.Component<any, any> {
// 	render() { return ( 
//     // <ReactDataGrid columns={this.props.columns} rowGetter={() => this.props.records}/>
//     );}
// }

class EntityFieldsEditor extends React.Component<any, any> {
	render() { return ( 
    <div> 
      {this.props.fields.map(field => 
        <FieldEditorForDataType value={field.value} dataType={field.dataType} />
      )}
    </div>);}
}

class FieldEditorForDataType extends React.Component<any, any> {
  render() {
    return (<FieldEditorControl {...this.props} type={getType(this.props.dataType, this.props.optionHint, this.props.multiline, this.props.options)}/>); 
  }
}

class FieldEditorControl extends React.Component<any, any> {
  render() {
    var type = this.props.type;
    return (
        isInput(type) ? <InputEditor {...this.props} /> :
        isFullWidth(type) ? <InputEditor {...this.props} /> :
        type === "checbox" ? <Controls.CheckBoxEditor {...this.props} /> :
        type === "record-edit" ? <EntityFieldsEditor {...this.props} /> :
        // type === "table-edit" ? <DataGrid {...this.props} /> :
        null); 
  }
}

class InputEditor extends React.Component<any, any> {
  render() { return (
      <Controls.InputFieldLabelAndContainer {...this.props}>
        <InputForType {...this.props} />
      </Controls.InputFieldLabelAndContainer>
  );}
}

class InputForType extends React.Component<any, any> {
  render() { 
    var type = this.props.type;
    return (
      type === "text" ? <Controls.TextBox {...this.props} /> :
      type === "date" ? <Controls.DateInput {...this.props} /> :
      type === "currency" ? <Controls.CurrencyInput {...this.props} /> :
      type === "decimal" ? <Controls.DecimalInput {...this.props} /> :
      type === "integer" ? <Controls.IntegerInput {...this.props} /> :
      type === "email" ? <Controls.EmailInput {...this.props} /> :
      type === "tel" ? <Controls.PhoneInput {...this.props} /> :
      type === "dropdown" ? <Controls.Dropdown {...this.props} /> :
      null);
  }
}

class FullWidthFieldEditor extends React.Component<any, any> {
  render() { return (
      <Controls.FullWidthFieldLabelAndContainer {...this.props}>
        <FullWidthFieldInputForType {...this.props} />
      </Controls.FullWidthFieldLabelAndContainer>
  );}
}

class FullWidthFieldInputForType extends React.Component<any, any> {
  render() { 
    var type = this.props.type;
    return (
        type === "radio" ? <Controls.RadioSelect {...this.props} /> :
        type === "checklist" ? <Controls.CheckList {...this.props} /> :
        type === "multi-line-text" ? <Controls.MultiLineTextBox {...this.props} /> :
      null
    );}
}



