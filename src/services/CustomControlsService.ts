export class CustomControlsService {
  constructor() {

  }

  customControls: {};

  getCustomControlForType = (type: string) => {
    return this.customControls[type];
  }

  addCustom = (type: string, control: any) => {
    this.customControls[type] = control;
  };
}

export const CustomControls = new CustomControlsService();
