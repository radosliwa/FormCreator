<template>
    <form class="v-form">
        <slot />
        <component :is="component.component"
                   v-for="(component, i) in config"
                   :key="component.label + i"
                   v-model:value="component.value"
                   :config="component"
        />
    </form>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// components
import VInput from './VInput.vue';
// types
import { IVInput, TFormComponent } from '@/types';

export default defineComponent({
    components: {
        VInput,
    },
    data: () => ({
        config: [
            {
                component: 'VInput',
                label: 'First Name',
                labelHidden: false,
                type: 'text',
                value: '',
                name: 'first-name',
                class: 'v-input-field',
                id: 'first-name',
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
            } as IVInput,
        ] as TFormComponent[],
    }),
});
</script>
