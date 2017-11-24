import {CheckBox, RadioButton} from "../Controls";
import {isMobile} from "UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class CheckList extends React.Component<any, any> {
	render() { return (
    <div className="field-editor check-list-editor">
      <div className="check-list-label-container">
        <label className="check-list-label">{this.props.label} </label>
      </div>
      <div className="check-list">
        {this.props.options.map(item =>
          <CheckBox value={item.value} label={item.label} name={item.name} />
        )}
      </div>
    </div>);}
}