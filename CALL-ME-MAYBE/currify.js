function currify(funcs) {
    return function curried(...args) {
        if (args.length === funcs.length) {
            return funcs(...args);
        }
        return function (...argsNew) {
            return curried(...args.concat(argsNew));
        }
    }
}