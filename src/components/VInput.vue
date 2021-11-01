<template>
    <div class="v-input">
        <label :for="config.id"
               :class="{'hidden': config.labelHidden}"
        > {{ config.label }} </label>
        <input :id="config.id"
               :class="config.class"
               @input="handleInputValue($event)"
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { IVInput } from '@/types';
import inputs from '@/composables/inputs';

export default defineComponent({
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        }

    },
    emits: ['update:value'],
    setup(props, { attrs, emit }) {
        const attributes = computed(() => attrs);
        const { updateInputValue } = inputs();
        function handleInputValue(e:Event) {
            emit('update:value', updateInputValue(e));
        }
        return {
            handleInputValue,
            attributes,
        };
    },
});
</script>
<style lang="scss" scoped>
.hidden{
    display: none;
}
</style>
