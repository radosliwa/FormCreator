export default () => {
    function updateInputValue(e: Event) {
        const { value } = e.target as HTMLInputElement;
        return value;
    }
    return {
        updateInputValue
    };
};
