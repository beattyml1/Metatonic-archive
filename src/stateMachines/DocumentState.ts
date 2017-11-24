import {Schema, FormSchema} from "Domain/Schema/RootSchemas";
import { Nullable, Nothing, Maybe } from "CoreTypes";
import PropertySelection from "services/PropertySelection";
import * as _Array from "coreExtensions/_Array"
export enum DocumentEvents {
	propertyChanged,
	propertiesChanged,
	documentServerUpdate,
	fullReload
}

export module _Number {

}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}



export type DocumentEvent<TData, TLocator> = { event: DocumentEvents; data: TData, locator: TLocator };

export type FormState = {
	documentData: any;
	serverDocumentData: any;
	schema: FormSchema;
}

export class FormStateChanges {
	constructor(private propertySelection: PropertySelection) {

	}

	propertyChanged(state: FormState, property: string, value): FormState{
		let document = Object.assign({}, state.documentData, {[property]: value});
		return Object.assign({}, state, { documentData: document});
	}

	itemAdded(state: FormState, property: string, item, index: Nullable<number>): FormState{
		let currentArray = this.propertySelection.getValue(state.documentData, property);
		let newArray = index === null ? currentArray.concat(item) : _Array.insertAt(currentArray, index, item);
		let document = Object.assign({}, state.documentData, this.propertySelection.getAssignmentObject(property, newArray));
		return Object.assign({}, state, { documentData: document})
	}

	itemRemoved(state: FormState, property: string, index: number): FormState{
		let currentArray = this.propertySelection.getValue(state.documentData, property);
		let newArray = _Array.removeAt(currentArray, index);
		let document = Object.assign({}, state.documentData, this.propertySelection.getAssignmentObject(property, newArray));
		return Object.assign({}, state, { documentData: document})
	}

	propertiesChanged(state: FormState, properties: { property: string, value: any }[]): FormState {
		let modifications = properties.map(_ => this.propertySelection.getAssignmentObject(_.property, _.property));
		let document = Object.assign.apply(this, [ {}, state.documentData, ...modifications]);
		return Object.assign({}, state, { documentData: document})
	}	

	documentServerUpdate(state: FormState, documentData: any): FormState {
		return Object.assign({}, state, { documentData, serverDocumentData: documentData });
	}	

	fullReload(state: FormState, documentData: any, schema: FormSchema): FormState {
		return { documentData, serverDocumentData: documentData, schema };
	}
}
