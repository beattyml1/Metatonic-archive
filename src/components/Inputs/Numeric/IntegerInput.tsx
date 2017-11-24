import {isMobile} from "src/UI";
import React = require('react');
import NumericInput from 'Inputs/NumericInput';
/// <reference path="typings/react/react.d.ts" />

export default class IntegerInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="currency" className="input numeric-input integer-input" mask="9{*}" />
  );}
}