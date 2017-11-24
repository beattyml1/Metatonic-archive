export interface DataType {
	serialize(data): string;
	name: string;
}