import * as React from "react";
import {QuantityModel} from "../../Domain/EditorModels/QuantityModel";
import {UnitCategory, Unit} from "Domain/Schema/Quantities";
import {LeftRight, UnitCategoryData} from "Domain/Schema/Quantities";
import InputFieldLabelAndContainer from "../LabeledFieldContainers/InputFieldLabelAndContainer";
import {ControlContext} from "../../classes/ControlProps";

export class SelectUnit extends React.Component<{ category: UnitCategoryData, side: LeftRight, unit?: string }, void> {
    render() {
        return (
            <select
                className={`unit ${this.props.side === LeftRight.Right ? 'right' : 'left'}`}
                value={this.props.unit}
            >
                {this.props.category.units.map(unit =>
                    <option value={unit.key}>{unit.abbreviation}</option>
                )}
            </select>
        );
    }
}

export class QuantityEditor extends React.Component<QuantityModel, void> {
    render() {
        var hardCodedUnit = this.props.type.unitSource.unit;
        var unitCategory = this.props.type.unitSource.unitCategory;
        var hasUnits = !!unitCategory;
        var unitSide = hasUnits ? unitCategory!.side : null;
        var leftUnit = unitSide === LeftRight.Left;
        var rightUnit = unitSide === LeftRight.Right;
        var unitDropdown = !hardCodedUnit && hasUnits ? <SelectUnit unit={this.props.unit} side={unitSide!} category={unitCategory!} ></SelectUnit> : null;
        var unitDisplay = hardCodedUnit && hasUnits ? <span className={`unit ${unitSide === LeftRight.Right ? 'right' : 'left'}`}>{hardCodedUnit}</span> : null;
        var amount = this.props.decimalMultiplier ? this.props.decimalMultiplier * this.props.value : this.props.value;
        return (
            <div className="quantity-editor-container">
                { leftUnit ?  unitDropdown || unitDisplay : null}

                <input type="number"
                       id={this.props.field.uiUniqueId}
                       value={amount.toString()}
                       max={this.props.field.max || undefined}
                       min={this.props.field.min || undefined}
                />

                { rightUnit ?  unitDropdown || unitDisplay : null}
            </div>
        )
    }
}

export class LabeledQuantityEditor  extends React.Component<QuantityModel, void> {
    render() {
        return <InputFieldLabelAndContainer inputId={this.props.field.uiUniqueId} label={this.props.field.label} actions={[]} >
            <QuantityEditor {...this.props}/>
        </InputFieldLabelAndContainer>

    }
}