<template>
    <div class="v-input">
        <label :for="config.id"
               :class="{ hidden: config.labelHidden }"
        > {{ config.label }} </label>
        <input
            :id="config.id"
            :class="config.class"
            :type="config.type"
            :name="config.name"
            v-bind="attributes"
            :placeholder="config.placeholder"
            @input="handleInputValue($event)"
            @blur="handleBlur"
        >
        <p v-if="validationMsg">
            {{ validationMsg }}
        </p>
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType, ComputedRef, ref } from 'vue';
import { IVInput, TInputValue } from '@/types';
import inputs from '@/composables/inputs';
import { validate } from '@/Validation';

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
        let validationMsg = ref<string | void>('');
        let currentInputValue = ref('');
        const validateOn = ref<string>('validateOn' in props.config ? props.config.validateOn : 'input');
        const attributes: ComputedRef<typeof attrs> = computed(() => attrs);
        const { interceptInputValue } = inputs();

        function handleInputValue(e: Event): void {
            currentInputValue.value = interceptInputValue(e);
            emit('update:value', currentInputValue.value);
            if (validateOn.value === 'input') {
                handleValidation();
            }
        }
        function handleBlur() {
            if (validateOn.value === 'blur') {
                handleValidation();
            }
        }
        function handleValidation(inputValue: TInputValue = props.config.value, timeout:number = 0): string | void {
            setTimeout(() => {
                validationMsg.value = validate(inputValue, props.config.validations);
            }, timeout);
        }
        return {
            handleValidation,
            handleInputValue,
            handleBlur,
            attributes,
            validationMsg,
            currentInputValue
        };
    }
});
</script>
<style lang="scss" scoped>
.hidden {
    display: none;
}
</style>
