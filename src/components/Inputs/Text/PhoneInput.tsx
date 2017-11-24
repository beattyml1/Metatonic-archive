import {isMobile} from "src/UI";
import React = require('react');
/// <reference path="typings/react/react.d.ts" />

export default class PhoneInput extends React.Component<any, any> {
  render() { return (
    <input {...this.props} type="tel" data-type="tel" className="input text-box tel-input" />
  );}
}