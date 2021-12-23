export function memoize(test) {
    if (typeof test !== "function") {
        return null;
    }

    return test;
}
