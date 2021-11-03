type TInputType = 'text' | 'email' | 'number' | 'checkbox' | 'submit';
type TInputRole = 'button';
type TFormComponentName = 'VInput' | 'VCheckbox' | 'VSubmit';
type TCheckboxValueGroup = unknown[];
interface IVInput {
    component: TFormComponentName;
    heading?: string;
    value?: string | number | boolean | undefined;
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
}
interface IGroupConfig {
    group: string | number;
    groupValue: boolean | string | number | (string | number)[] | undefined;
}
type TFormComponent = IVInput;

export { IVInput, TFormComponentName, TFormComponent, TInputType, IGroupConfig };
