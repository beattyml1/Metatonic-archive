import {DataType} from "./DataType";
export default class Selection implements DataType {
	serialize(data) {
		return data.key;
	}
}