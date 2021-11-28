<template>
    <div class="v-radio">
        <div v-if="config.heading"
             class="heading"
             v-html="config.heading"
        />
        <template v-for="(choice, i) in config.choices"
                  :key="choice+i"
        >
            <label :for="choice.id"
                   :class="{'hidden': choice.labelHidden}"
            > {{ choice.label }} </label>
            <input :id="choice.id"
                   v-model="computedValue"
                   :class="choice.class"
                   :type="choice.type || 'radio'"
                   :disabled="choice.disabled"
                   :value="choice.value"
            >
            <p v-if="validationMsg">
                {{ validationMsg }}
            </p>
        </template>
        <div v-if="config.description"
             class="checkbox-desc"
             v-html="config.description"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType, ComputedRef, ref } from 'vue';
import { IVInput, TInputValue, IGroupConfig } from '@/types';
import { validate } from '@/Validation';

export default defineComponent({
    name: 'VRadio',
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        },
    },
    inheritAttrs: false,
    emits: ['update:value'],
    setup(props, { attrs, emit }) {
        let validationMsg = ref<string | void>('');
        const attributes:ComputedRef<typeof attrs> = computed(() => attrs);
        const computedValue = computed({
            get(): TInputValue {
                return props.config.value;
            },
            set(value: TInputValue) {
                emit('update:value', value);
            },
        });

        function handleValidation(inputValue: TInputValue = props.config.value, timeout = 0): string | void {
            setTimeout(() => {
                validationMsg.value = validate(inputValue, props.config.validations);
            }, timeout);
        }
        return {
            attributes,
            validationMsg,
            handleValidation,
            computedValue
        };
    },
});
</script>
<style lang="scss" scoped>
.hidden{
    display: none;
}

</style>
