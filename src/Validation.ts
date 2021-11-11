import { TValidationType, IValidationConfig } from './types';

type TTestInput = (input: unknown) => boolean;
type TValidationRule =
  | 'non-empty'
  | 'required'
  | 'only-letters'
  | 'only-numbers' | 'email';
interface IValidator {
  rule: TValidationRule;
  testInput: TTestInput;
  defaultErrMsg: string;
}

const Validators: IValidator[] = [
    {
        rule: 'non-empty',
        testInput(input: any) {
            return input && input.toString().length > 0;
        },
        defaultErrMsg: 'cannot be empty!',
    },
    {
        rule: 'required',
        testInput(input: any) {
            console.log('input in valid', input);

            return typeof input !== 'boolean' ? input && input.length > 0 : input;
        },
        defaultErrMsg: 'is required!',
    },
    {
        rule: 'only-letters',
        testInput(input: any) {
            return /^[a-zA-Z]*$/g.test(input);
        },
        defaultErrMsg: 'only letters allowed!',
    },
    {
        rule: 'only-numbers',
        testInput(input: any) {
            return /^[0-9]*$/g.test(input);
        },
        defaultErrMsg: 'only numbers allowed!',
    },
    {
        rule: 'email',
        testInput(input: any) {
            return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input);
        },
        defaultErrMsg: 'not a valid email!',
    },
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
];

function findCorrespondingValidator(
    ruleToFind: TValidationType
): IValidator | undefined {
    const rule = (ruleToFind as IValidationConfig).rule ?? ruleToFind;
    return Validators.find((validator: IValidator) => validator.rule === rule);
}
function validate(input: any, rules: TValidationType[]): string | void {
    let msg: string | undefined = '';
    for (let currRule of rules) {
        const currentValidator = findCorrespondingValidator(currRule);
        const isInputValid = currentValidator?.testInput(input);
        if (!isInputValid) {
            msg = (currRule as IValidationConfig)?.errorMsg ?? currentValidator?.defaultErrMsg;
            return msg;
        }
    }
    return msg;
}
export { Validators, validate, TValidationRule };
