export default () => {
    function interceptInputValue(e: Event) {
        const { value } = e.target as HTMLInputElement;
        return value;
    }
    return {
        interceptInputValue
    };
};
