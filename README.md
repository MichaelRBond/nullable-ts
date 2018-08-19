# nullable-ts

A Nullable type for TypeScript.

`type Nullable<T> = T | null;`

Includes the following helper functions:

`isNull(x: any): boolean;`

Returns `true` if `x` is null, otherwise `false`.

`isNotNull(x: any): boolean;`

Returns `false` is `x` is null, otherwise `true`.

`isUndefined(x: any): boolean;`

Returns `true` if `x` is `undefined`, otherwise `false`.

`isDefined(x: any): boolean;`

Returns `false` if `x` is `undefined`, otherwise `true`.

`isNullOrUndefined(x: any): boolean;`

Returns `true` if `x` is `null` or `undefined`, otherwise `false`.

`isNotNullorUnDefined(x: any): boolean;`

Returns `false` if `x` is `null` or `undefined`, otherwise `true`,

`orElseThrow<T>(x: Nullable<T>, err: Error): T;

Returns the assigned value of `x` if `x` is NOT `null` or `undefined`, otherwise throws the provided Error `err`.

`orElse<T>(x: Nullable<T>, defaultVal: T): T;

Returns the assigned value of `x` if `x` is not `null` or `undefined`, otherwise returns the assigned value of `defaultVal`.
