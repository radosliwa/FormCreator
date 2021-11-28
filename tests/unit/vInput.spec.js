import { shallowMount } from '@vue/test-utils';
import { nextTick } from 'vue';
import VInput from '@/components/subComponents/VInput.vue';

describe('VInput.vue', () => {
    const config = {
        component: 'VInput',
        label: 'First Name',
        labelHidden: false,
        type: 'text',
        value: '1111',
        name: 'first-name',
        class: 'v-input-field',
        id: 'first-name',
        placeholder: 'First Name',
        validateOn: 'blur',
        validations: [{ rule: 'non-empty', errorMsg: 'input cannot be empty!' }, 'only-letters']
    };
    const wrapper = shallowMount(VInput, {
        props: { config }
    });
    const inputField = wrapper.find(`#${config.name}`);
it('renders input value in input field', async () => {
    const valueToSet = 'szsdzsd';
    await inputField.setValue(valueToSet);
    expect(inputField.element.value).toBe(valueToSet);
});

});
