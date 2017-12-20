import {InputActions} from 'SupportingControls/InputActions';
import React = require('react');
/// <reference path="./typings/react/react.d.ts" />

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