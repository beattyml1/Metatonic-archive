export default class PropertySelection {
	getValue(data: any, propertySelector: string) {
		return this.getPropertyLocatorArray(propertySelector).reduce((result, key) => {
			result[key];
		}, data);
	}

	getPropertyLocatorArray(propertySelector: string) {
		return propertySelector.split('.').map(prop => isNumeric(prop) ? parseFloat(prop) : prop);
	}

	getAssignmentObject(propertySelector: string, value) {
		return this.getPropertyLocatorArray(propertySelector).reduce((result, key) => 
			 Object.assign(result, { [key]: value }), <any>{});
	}
}