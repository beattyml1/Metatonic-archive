import {Schema, FormSchema} from "core/domain/Schema/RootSchemas";
import { Nullable, Nothing, Maybe } from "core/CoreTypes";
import {PropertySelection, FormNavigator} from "core/services/PropertySelection";
import * as _Array from "core/extensions/_Array"
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



export type FormEvent<TData, TLocator> = { event: DocumentEvents; data: TData, locator: TLocator };

export type FormState = {
	formData: any;
	serverDocumentData: any;
	schema: FormSchema;
}

export class FormStateChanges {
	constructor() {

	}

	getNav = (state: FormState) => new FormNavigator(state.schema, state.formData);

	getProperty = (state: FormState, propertySelector: string) => this.getNav(state).locate(propertySelector)

	propertyChanged(state: FormState, propertySelector: string, value): FormState{
		let property = this.getProperty(state, propertySelector)
		let document = Object.assign({}, state.formData, property.setValue(value));
		return Object.assign({}, state, { documentData: document});
	}

	itemAdded(state: FormState, propertySelector: string, item, index: Nullable<number>): FormState{
        let property = this.getProperty(state, propertySelector)
		let currentArray = property.getValue();
		let newArray = index === null ? currentArray.concat(item) : _Array.insertAt(currentArray, index, item);
		let document = Object.assign({}, state.formData, property.setValue(newArray));
		return Object.assign({}, state, { documentData: document})
	}

	itemRemoved(state: FormState, propertySelector: string, index: number): FormState{
        let property = this.getProperty(state, propertySelector)
		let currentArray = property.getValue();
		let newArray = _Array.removeAt(currentArray, index);
		let document = Object.assign({}, state.formData, property.setValue(newArray));
		return Object.assign({}, state, { documentData: document})
	}

	propertiesChanged(state: FormState, properties: { property: string, value: any }[]): FormState {
		return properties.reduce((s, p) => Object.assign({}, state, { data: this.propertyChanged(s, p.property, p.value)}), state);
	}	

	formServerUpdate(state: FormState, documentData: any): FormState {
		return Object.assign({}, state, { documentData, serverDocumentData: documentData });
	}	

	fullReload(state: FormState, documentData: any, schema: FormSchema): FormState {
		return { formData: documentData, serverDocumentData: documentData, schema, navigator: new FormNavigator(schema) };
	}
}
