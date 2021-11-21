module.exports = {
    preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
    transform: {
        '^.+\\.vue$': 'vue-jest'
    },
    moduleFileExtensions: [
        "ts",
        "js",
        "json",
        // tell Jest to handle `*.vue` files
        "vue"
      ],
};
