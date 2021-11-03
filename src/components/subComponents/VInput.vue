<template>
    <div class="v-input">
        <label :for="config.id"
               :class="{'hidden': config.labelHidden}"
        > {{ config.label }} </label>
        <input :id="config.id"
               :class="config.class"
               :type="config.type"
               :name="config.name"
               v-bind="attributes"
               :placeholder="config.placeholder"
               @input="handleInputValue($event)"
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType, ComputedRef } from 'vue';
import { IVInput } from '@/types';
import inputs from '@/composables/inputs';

export default defineComponent({
    name: 'VInput',
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        }

    },
    inheritAttrs: false,
    emits: ['update:value'],
    setup(props, { attrs, emit }) {
        const attributes:ComputedRef<typeof attrs> = computed(() => attrs);
        const { updateInputValue } = inputs();
        function handleInputValue(e:Event):void {
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
