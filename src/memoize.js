function inc(...args) {
    return args.reduce((previous, current) => previous + current) + 1;
}
function generateKey(args) {
    let key = "";
    for (let i = 0; i < args.length; i += 1) {
        key += String(args[i]) + typeof args[i];
    }

    return key;
}
export function memoize(func) {
    if (typeof func !== "function") {
        return null;
    }

    const cache = {};
    return function returnResult(...args) {
        const key = generateKey(args);
        if (key in cache) {
            return cache[key];
        }

        {
            const result = func.apply(this, args);
            cache[key] = result;
            return result;
        }
    };
}

memoize(inc);
