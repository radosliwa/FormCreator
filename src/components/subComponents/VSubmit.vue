<template>
    <div :id="config.id"
         ref="v-submit"
         :class="[config.class, config.disabled]"
         :role="config.role"
         @click="$emit('submit-clicked')"
    >
        {{ config.value }}
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IVInput } from '@/types';

export default defineComponent({
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        }
    },
    emits: ['submit-clicked'],
});
</script>
