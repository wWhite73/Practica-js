type ValueType<T, K extends keyof T> = T[K];

export function getValue<T, K extends keyof T>(obj: T, key: K): ValueType<T, K> {
    return obj[key];
}