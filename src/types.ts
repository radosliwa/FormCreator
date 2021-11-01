type TInputType = 'text' | 'email' | 'number' | 'checkbox';
type TFormComponentName = 'VInput' | 'VCheckbox';

interface IVInput {
    component: TFormComponentName;
    value?: string | number;
    label: string;
    labelHidden: boolean;
    type: TInputType;
    name: string;
    class: string;
    id?: string | undefined;
    placeholder?: string | number;
}
type TFormComponent = IVInput;

export { IVInput, TFormComponentName, TFormComponent, TInputType };
