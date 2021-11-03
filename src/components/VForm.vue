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
                   :config="component"
                   @submit-clicked="submitForm"
                   @update:value="$emit('value-update', component)"
        />
        <slot name="after-form" />
    </form>
</template>
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
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
        const formComponents = computed(() => (props.config as any)
            .filter((item:TFormComponent|IGroupConfig) => !Object.prototype.hasOwnProperty.call(item, 'groupValue')));

        return {
            submitForm,
            formComponents
        };
    }
});
</script>
