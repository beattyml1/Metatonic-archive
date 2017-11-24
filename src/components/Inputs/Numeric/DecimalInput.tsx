import {isMobile} from "src/UI";
import React = require('react');
import NumericInput from 'Inputs/NumericInput';
/// <reference path="typings/react/react.d.ts" />

export default class DecimalInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="decimal" className="input numeric-input decimal-input" mask="9{*}.{0,1}9{*}" />
  );}
}