import {Maybe, Nothing} from "CoreTypes";
export type IdTypes = string|number;
export type IdRequest<TId extends IdTypes> = { id?: Maybe<TId> };
export type QueryRequest<TQuery> = {  query?: Maybe<TQuery> };
export type ActionRequest = {  action?: Maybe<string>; };

export interface RestfulClient {
	Get<TResult, TQuery, TId extends IdTypes>(
		resourceUrl: string,
		requestParams?: IdRequest<TId> & QueryRequest<TQuery> & ActionRequest): Promise<TResult>
	Post<TResult, TData, TId extends IdTypes>(
		resourceUrl: string,
		data: string,
		requestParams?: IdRequest<TId> & ActionRequest): Promise<TResult>
	Post<TResult, TData, TId extends IdTypes>(
		resourceUrl: string,
		data: string,
		requestParams?: IdRequest<TId> & ActionRequest): Promise<TResult>
	Delete<TResult, TData, TId extends IdTypes>(
		resourceUrl: string,
		requestParams: IdRequest<TId> & ActionRequest): Promise<TResult>;
}