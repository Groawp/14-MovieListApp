export const increment = (n) => {
    return {
        type: 'INCREMENT',
        payload: n
    };
}
;
export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const signin = () => {
    return {
        type: 'SIGN_IN'
    };
};