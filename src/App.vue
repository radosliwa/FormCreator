<template>
    <main>
        <div class="w-full px-4 bg-gray-200 md:px-6 wrapper">
            <h1 class="pt-10 text-xl font-semibold text-center">
                VUE FORM CREATOR
            </h1>
            <div class="flex flex-col justify-center min-h-screen mx-auto">
                <router-view />
            </div>
        </div>
    </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
// components
// utils
// types

export default defineComponent({});
</script>
<style lang="scss">
#app {
    font-family: 'Open Sans', sans-serif;
    box-sizing: border-box;
}
</style>
