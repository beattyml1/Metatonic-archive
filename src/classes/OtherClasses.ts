
export class OptionItem {
  key: string;
  value: string;
}

export interface OptionsSource {
  getOptions(): OptionItem[];
}

export interface OptionsSourceTyped<T> extends OptionsSource {
  getItems(): T[];
}