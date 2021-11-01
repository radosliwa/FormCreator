<template>
    <div class="v-input">
        <label :for="config.id"
               :class="{'hidden': config.labelHidden}"
        > {{ config.label }} </label>
        <input :id="config.id"
               :class="config.class"
        >
    </div>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import { IVInput } from '@/types';

export default defineComponent({
    props: {
        config: {
            type: Object as PropType<IVInput>,
            required: true
        }

    },
    setup(props, { attrs }) {
        const attributes = computed(() => attrs);

        return {
            attributes,
        };
    },
    mounted() {
        console.log('attributes', this.attributes);
    }
});
</script>
<style lang="scss" scoped>
.hidden{
    display: none;
}
</style>
