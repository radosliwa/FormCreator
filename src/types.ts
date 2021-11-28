import { TValidationRule } from './Validation';

type TInputType = 'text' | 'email' | 'number' | 'checkbox' | 'submit' | 'radio';
type TInputRole = 'button';
type TFormComponentName = 'VInput' | 'VCheckbox' | 'VSubmit' | 'VRadio';
type TGroupValue = any[] ;
type TValidateOn = 'blur' | 'input' | 'never';
type TInputValue = string | number | boolean | undefined;
interface IValidationConfig {
  rule: TValidationRule;
  errorMsg?: string;
  //   when: TValidateOn;
}
type TValidationType = IValidationConfig | TValidationRule;
interface IVInput {
  component: TFormComponentName;
  choices?:[]|any[];
  heading?: string;
  value?: TInputValue;
  label: string;
  labelHidden: boolean;
  type: TInputType;
  name: string;
  class: string;
  id?: string | undefined;
  placeholder?: string;
  role?: TInputRole;
  disabled?: boolean;
  tabindex?: number;
  description?: string;
  group?: string | number;
  validateOn: TValidateOn;
  // array with whole configs, or just array of rules with default
  validations: TValidationType[];
}
interface IGroupConfig {
  group: string | number;
  groupValue: TGroupValue;
}
type TFormComponent = IVInput;

export {
    IVInput,
    TFormComponentName,
    TFormComponent,
    TInputType,
    IGroupConfig,
    TGroupValue,
    TValidationType,
    IValidationConfig,
    TInputValue,
};
