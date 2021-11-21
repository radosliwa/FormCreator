<template>
    <div id="home-page"
         class="flex flex-col items-center"
    >
        <VForm class="w-full lg:w-2/5"
               :config="config"
        />
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// components
import VForm from '@/components/VForm.vue';

// config
import { config } from '@/config';

export default defineComponent({
    name: 'Homepage',
    components: {
        VForm
    },
    data: () => ({
        config
    })
});
</script>

<style lang="scss"></style>
