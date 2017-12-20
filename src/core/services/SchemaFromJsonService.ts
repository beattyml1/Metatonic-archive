import { Schema, FormSchema } from "core/domain/Schema/RootSchemas";
export interface ISchemaFromJsonService {
	getSchemaFromJsonObject(object: any): Schema;
	getDocumentSchemaFromJsonObject(object: any): FormSchema;
}

export class SchemaFromJsonService implements ISchemaFromJsonService  {
	getSchemaFromJsonObject(object: any): Schema {
		throw "Not implemented";
	}
	getDocumentSchemaFromJsonObject(object: any): FormSchema {
		throw "Not implemented";
	}

}