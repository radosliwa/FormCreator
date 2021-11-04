<template>
    <div class="v-checkbox">
        <div v-if="config.heading"
             class="heading"
             v-html="config.heading"
        />
        <label :for="config.id"
               :class="{'hidden': config.labelHidden}"
        > {{ config.label }} </label>
        <input :id="config.id"
               v-model="computedValue"
               :class="config.class"
               :type="config.type || 'checkbox'"
               :disabled="config.disabled"
               v-bind="attributes"
        >
        <div v-if="config.description"
             class="checkbox-desc"
             v-html="config.description"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType, ComputedRef, ref } from 'vue';
import { IVInput } from '@/types';

export default defineComponent({
    name: 'VCheckbox',
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        },
        groupValue: {
            type: Array as PropType<any[]>,
            default: () => []
        }

    },
    inheritAttrs: false,
    emits: ['update:value', 'update:group-value'],
    setup(props, { attrs, emit }) {
        const attributes:ComputedRef<typeof attrs> = computed(() => attrs);
        const checkboxGroup:ComputedRef<string|number|undefined> = computed(() => props.config.group);
        const computedValue = computed({
            get(): boolean | string | number | any[] | undefined {
                return props.config.value;
            },
            set(value: any | any[]) {
                if (!checkboxGroup.value) {
                    emit('update:value', value);
                } else {
                    emit('update:group-value',
                        {
                            group: checkboxGroup.value,
                            value: props.config.value
                        });
                }
            },
        });
        return {
            checkboxGroup,
            computedValue,
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
