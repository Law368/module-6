function inc(x) {
    return x + 1;
}

export function memoize(func) {
    if (typeof func !== "function") {
        return null;
    }
    const cache = {};
    return function(...args) {
        const key = args[0];
        if (key in cache) {
            return cache[key];
        }
        {
            const result = func(key);
            cache[key] = result;
            return result;
        }
    };
}

memoize(inc);