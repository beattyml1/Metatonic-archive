import * as React from 'react';
import NumericInput from 'Inputs/NumericInput';
export default class CurrencyInput extends React.Component<any, any> {
  render() { return (
    <NumericInput {...this.props} type="numeric" data-type="currency" className="input numeric-input money-input" mask="$ 9{*}.99" />
  );}
}