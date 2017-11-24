import {InputActions} from 'InputActions';
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

export default class InputFieldLabelAndContainer extends React.Component<{
    inputId: string;
    label: string;
    actions?: Array<any>;
}, any> {
	render() { return (
    <div className="field-editor input-field-editor">
      <div className="label-container input-label-container">
        <label htmlFor={this.props.inputId} className="input-label">{this.props.label}</label>
      </div>
      <div className="input-container">
        <span className="input-span">{(this.props as any).children}</span>
        <InputActions actions={this.props.actions||[]}/>
      </div>
    </div>);}
}