export type Nullable<T> = T | null;

export function get<T>(x: Nullable<T>): T {
  return orElseThrow(x, new Error("Attempting to retrieve value from null or undefined variable"));
}

export function orElseThrow<T>(x: Nullable<T>, err: Error): T {
  if (isNullOrUndefined(x)) {
    throw err;
  }
  return x as T;
}

export function orElse<T>(x: Nullable<T>, defaultVal: T): T {
  return isNullOrUndefined(x) ? defaultVal : x as T;
}

export function isNull(x: any): boolean {
  return x === null;
}

export function isNotNull(x: any): boolean {
  return x !== null;
}

export function isUndefined(x: any): boolean {
  return x === undefined;
}

export function isDefined(x: any): boolean {
  return x !== undefined;
}

export function isNullOrUndefined(x: any): boolean {
  return isNull(x) || isUndefined(x);
}

export function isNotNullorUnDefined(x: any): boolean {
  return isNotNull(x) && isDefined(x);
}
