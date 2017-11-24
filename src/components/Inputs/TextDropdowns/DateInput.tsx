import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class DateInput extends React.Component<any, any> {
  render() { return (
    isMobile() ?
      <input value={this.props.value} name={this.props.name} type="date" data-type="date" className="input date-input" required={this.props.required}/> :
      <input value={this.props.value} name={this.props.name} type="date" data-type="date" className="input date-input" required={this.props.required}/>
  );}
}