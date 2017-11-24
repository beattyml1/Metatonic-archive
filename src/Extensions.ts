// export function transfrom<T1, T2, T3, T4, T5, T6, T7, T8, T9>
// 	(data: T1, f1: (T1)=>T2, f2: (T2)=>T3, f3: (T3)=>T4, f4: (T4)=>T5, f5: (T5)=>T6, f6: (T6)=>T7, f7: (T7)=>T8, f8: (T8)=>T9 ) {
// 		f8 ? f8()
// 	}

export namespace Util {
	export function merge(o1, o2) {
		(Object as any).assign({}, o1, o2);
	}
}

export class Transformer<T> {
	public $: T;
	constructor(value: T) {
		this.$ = value;
	}
	_<Tout>(transform: (T)=>Tout): Transformer<Tout> {
		return new Transformer(transform(this.$));
	}
	with<Tout>(transform: (T)=>Tout): Transformer<Tout> {
		return new Transformer(transform(this.$));
	}
}

export function __<T>(value: T):Transformer<T> {
	return new Transformer(value);
}
export function transfrom<T>(value: T):Transformer<T> {
	return new Transformer(value);
}

export function $$(func: any, ...params: any[]) {
	return x => func(x, ...params);
}
