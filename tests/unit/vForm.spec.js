import { mount } from '@vue/test-utils';
import VForm from '@/components/VForm.vue';
import VInput from '@/components/subComponents/VInput.vue';
import { config } from '@/config';

describe('VForm.vue', () => {
    const wrapper = mount(VForm, {
        props: { config }
    });
    const inputField = wrapper.find(`.v-input-field#${config[0].id}`);

    it('children component id corresponds to its id in config', () => {
        expect(inputField.exists()).toBe(true);
    });

    it('updates config in parent according to user input', async () => {
        const valueToSet = 'some value';
        await inputField.trigger('click');
        await inputField.setValue(valueToSet);
        const emittedValue = wrapper.findComponent(VInput).emitted()['update:value'].flat()[0];
        expect(Object.keys(wrapper.vm.config.find(({ value }) => value === emittedValue)).length > 0).toBe(true);
    });
});
