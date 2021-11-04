<template>
    <form ref="v-form"
          class="v-form"
    >
        <slot />
        <slot name="before-form" />
        <component :is="component.component"
                   v-for="(component, i) in formComponents"
                   :key="component.label + i"
                   v-model:value="component.value"
                   v-model:groupValue="groupValue"
                   :config="component"
                   @submit-clicked="submitForm"
                   @update:value="$emit('value-update', component)"
                   @update:group-value="updateGroupValue"
        />
        <slot name="after-form" />
    </form>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref, ComputedRef } from 'vue';
// components
import VInput from './subComponents/VInput.vue';
import VSubmit from './subComponents/VSubmit.vue';
import VCheckbox from './subComponents/VCheckbox.vue';

// types
import { TFormComponent, IGroupConfig } from '@/types';

export default defineComponent({
    name: 'VForm',
    components: {
        VInput,
        VSubmit,
        VCheckbox
    },
    props: {
        config: {
            type: Array as PropType<TFormComponent|IGroupConfig[]>,
            required: true
        }
    },
    emits: ['form-submitted', 'value-update'],
    setup(props, { emit }) {
        function submitForm():void {
            emit('form-submitted', props.config);
        }
        const groupValue:any[] = [];
        // to exclude groupped components' configuration
        const formComponents = computed(() => (props.config as any)
            .filter((item:TFormComponent|IGroupConfig) => !Object.prototype.hasOwnProperty.call(item, 'groupValue')));
        // for more than one checkbox to select from. There may be many groupped checkboxes
        const formGroups = computed(() => (props.config as any)
            .filter((item:TFormComponent|IGroupConfig) => Object.prototype.hasOwnProperty.call(item, 'groupValue')));

        function updateGroupValue(payload:any) {
            const { group, value } = payload;
            const groupValueToUpdate:ComputedRef<IGroupConfig> = computed(() => formGroups.value.find((el:IGroupConfig) => el.group === group));
            const { groupValue } = groupValueToUpdate.value;
            if (groupValue && !(groupValue as any).includes(value)) {
                (groupValue as any).push(value);
            }
            console.log('formgroups', groupValueToUpdate.value.groupValue);
        }
        return {
            formGroups,
            groupValue,
            submitForm,
            formComponents,
            updateGroupValue
        };
    },
    methods: {
        findGroup(componentGroup:number) {
            return this.formGroups.find(({ group }) => group === componentGroup);
        }
    }
});
</script>
