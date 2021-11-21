import { shallowMount } from '@vue/test-utils';
import VCheckbox from '@/components/subComponents/VCheckbox.vue';

describe('VCheckbox.vue', () => {
    const config = {
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
        validations: [{ rule: 'required' },
        ]
    };
    const wrapper = shallowMount(VCheckbox, {
        props: { config }
    });
    it('checkbox emit', async () => {
        await wrapper.find(`#${config.id}`).trigger('click');
        expect(wrapper.emitted('update:value')[0][0]).toEqual(true);
    });
});
