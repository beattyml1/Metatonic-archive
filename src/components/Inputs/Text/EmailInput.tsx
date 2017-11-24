import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class EmailInput extends React.Component<any, any> {
  render() { return (
    <input {...this.props} type="email" data-type="email" className="input text-box email-input" />
  );}
}