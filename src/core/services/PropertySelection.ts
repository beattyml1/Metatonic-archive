import {isNumeric} from "core/extensions/_Number";
import {FormSchema} from "core/domain/Schema/RootSchemas";
import {SchemaField, SchemaRecordType, SchemaTypeCategory} from "core/domain/Schema/Records";
import {BreakException} from "core/CoreTypes";
import {_Array} from "../extensions/corelib";

export class FormNavigator {
	constructor(private schema: FormSchema, private data) {}
	locate(propertySelector: string) {
		return new PropertySelection(propertySelector, this.schema, this.data);
	}
}

export class PropertySelection {
    private propertyLocatorArray: (number | string)[];
	constructor(propertySelector: string, private schema: FormSchema, private data){
		this.propertyLocatorArray = this.getPropertyLocatorArray(propertySelector);
	}

	getValue() {
		return this.propertyLocatorArray.reduce((result, key) => {
			result[key];
		}, this.data);
	}

    setValue(value) {
        let metaData = this.getFieldMetaData(this.schema);
        let currentRecord = this.data;
        let navTree = metaData.map(x => (currentRecord = currentRecord[x.key], { field: x.field, key: x.key,  data: currentRecord }));
        let reverseNav = navTree.reverse();
        let previous;
        reverseNav.forEach(current => {
        	if (previous) {
        		current.data = Object.assign({}, { [current.key]: previous.data } );
			} else {
				current.data = Object.assign({}, { [current.key]: value });
            }
            previous = current.data;
		})
    }

    private getFieldMetaData(schema: FormSchema) {
		let type = schema.rootType;
		let field: SchemaField;
		let nodes = new Array<{key: number|string, field?: SchemaField}>(0);

		_Array.forEachWithBreak(this.propertyLocatorArray, key => {
			field = type.fields.find(f => f.name === key)!;
            nodes.push({ key, field });
			if (field.typeParameters.category === SchemaTypeCategory.Record) {
				type = field.typeParameters.typeParams as SchemaRecordType;
			} else throw new BreakException();
		});

        return nodes;
    }

	private getPropertyLocatorArray(propertySelector: string) {
		return propertySelector.split('.').map(prop => isNumeric(prop) ? parseFloat(prop) : prop);
	}
}