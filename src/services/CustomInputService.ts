export class CustomInputService {
  constructor() {

  }

  private customControls: {};

  getCustomInputForType = (type: string) => {
    return this.customControls[type];
  }

  addCustom = (type: string, control: any) => {
    this.customControls[type] = control;
  };
}

export const CustomInputs = new CustomInputService();
