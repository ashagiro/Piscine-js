function flow(funcs) {
    return function (...args) {
        let res = Array.from(args)
        funcs.forEach((func) => {
            if (Array.isArray(res)) res = func(...res)
            else res = func(res)
        })
        return res
    }
}