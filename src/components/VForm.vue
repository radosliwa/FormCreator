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
        <p v-for="(group, i ) in formGroups"
           :key="i + group.group"
        >
            <span>Checkbox group nr: {{ group.group }}</span>
            {{ group.groupValue }}
        </p>
        <slot name="after-form" />
    </form>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, ref, unref } from 'vue';
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
    emits: ['form-submitted', 'value-update', 'group-value-update'],
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
            const groupValueToUpdate = ref<IGroupConfig>(formGroups.value
                .find((el:IGroupConfig) => el.group === group));
            const { groupValue } = groupValueToUpdate.value;
            const indexOfExistingValue = groupValue.indexOf(value);

            if (!groupValue.includes(value)) {
                groupValue.push(value);
                emit('group-value-update', groupValueToUpdate.value);
                return;
            }
            groupValue.splice(indexOfExistingValue, 1);
            groupValueToUpdate.value.groupValue = groupValue;
            emit('group-value-update', groupValueToUpdate.value);
        }
        return {
            formGroups,
            groupValue,
            submitForm,
            formComponents,
            updateGroupValue
        };
    },

});
</script>
