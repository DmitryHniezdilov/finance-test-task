export const pipe = (...funcs) => {
    const _pipe = (prevFunc, currFunc) => (...arg) => currFunc(prevFunc(...arg));

    return funcs.reduce(_pipe);
};

export const compose = (...funcs) => pipe(...funcs.reverse());
