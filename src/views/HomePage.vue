<template>
    <div>
        <VForm />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import VForm from '../components/VForm.vue';

export default defineComponent({
    name: 'Homepage',
    components: {
        VForm,
    },
});
</script>

<style lang="scss"></style>
