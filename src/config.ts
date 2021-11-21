import { IVInput, TFormComponent, IGroupConfig } from '@/types';

const config = [
  {
      component: 'VInput',
      label: 'First Name',
      labelHidden: false,
      type: 'text',
      value: '',
      name: 'first-name',
      class: 'v-input-field',
      id: 'first-name',
      placeholder: 'First Name',
      validateOn: 'input',
      validations: [
          { rule: 'non-empty', errorMsg: 'input cannot be empty!' },
          'only-letters',
      ],
  } as IVInput,
  {
      component: 'VInput',
      label: 'Last Name',
      labelHidden: false,
      type: 'text',
      value: '',
      name: 'last-name',
      class: 'v-input-field',
      id: 'last-name',
      placeholder: 'Last Name',
      validateOn: 'blur',
      validations: [
          { rule: 'non-empty', errorMsg: 'input cannot be empty!' },
          'only-letters',
      ],
  } as IVInput,
  {
      component: 'VInput',
      label: 'E-mail',
      labelHidden: false,
      type: 'email',
      value: '',
      name: 'email',
      class: 'v-input-field',
      id: 'email',
      validateOn: 'blur',
      validations: [
          { rule: 'non-empty', errorMsg: 'input cannot be empty!' },
          { rule: 'email', errorMsg: 'not a valid email' },
      ],
  } as IVInput,
  {
      component: 'VCheckbox',
      heading: '<h3 style="text-align:center;">Checkboxes section</h3>',
      label: 'Yes checkbox',
      labelHidden: true,
      description: 'I agree',
      disabled: false,
      type: 'checkbox',
      value: false,
      name: 'checkbox',
      class: 'v-checkbox-field',
      id: 'checkbox-1',
      validateOn: 'blur',
      validations: [{ rule: 'required' }],
  } as IVInput,
  {
      component: 'VCheckbox',
      label: 'Checkbox A',
      disabled: false,
      labelHidden: false,
      type: 'checkbox',
      value: 'A',
      name: 'checkbox',
      class: 'v-checkbox-field',
      id: 'checkbox-2',
      group: 1,
  } as IVInput,
  {
      component: 'VCheckbox',
      label: 'Checkbox B',
      disabled: false,
      labelHidden: false,
      type: 'checkbox',
      value: 'B',
      name: 'checkbox',
      class: 'v-checkbox-field',
      id: 'checkbox-2',
      group: 1,
  } as IVInput,
  {
      component: 'VCheckbox',
      label: 'Checkbox C',
      disabled: false,
      labelHidden: false,
      type: 'checkbox',
      value: 'C',
      name: 'checkbox',
      class: 'v-checkbox-field',
      id: 'checkbox-2',
      group: 1,
  } as IVInput,
  {
      group: 1,
      groupValue: [],
  } as IGroupConfig,
  {
      component: 'VSubmit',
      label: 'submit-button',
      labelHidden: true,
      type: 'submit',
      name: 'submit-button',
      class: 'w-24 btn btn-blue',
      id: 'submit-button',
      role: 'button',
      value: 'SUBMIT',
      disabled: false,
  } as IVInput,
] as TFormComponent | IGroupConfig[];
export { config };
