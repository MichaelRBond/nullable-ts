# nullable-ts

A Nullable type for TypeScript.

`type Nullable<T> = T | null;`

This is useful for when you have strict null checking enabled, and the return of a value can possibly be null or undefined.

In the following example we attempt to get an account, which will return null | undefined if an account does not exist. We check for the null condition, and then use the `get()` method to retrieve the value. This allows us to avoid the use of the unsafe `non-null assertion operator`. The function `get()` will throw an error if a null value sneaks into it. This use case helps to protect refactors where the non-null assertion operator could be missed or forgotten.

```typescript
const accountNullable = getAccount();
if (isNull(accountNullable)) {
  createAccount();
}
const account = get(accountNullable);
```

Alertnatively, if you can explicitly throw an error when encountering a null value.

```typescript
const accountNullable = getAccount();
const account = orElseThrow(accountNullable, new Error("Account not found!"));
```

Or, return a default value. In this example we return a new Account object when an account cannot be found.

```typescript
const accountNullable = getAccount();
const account = orElse(accountNullable, new Account());
```

Includes the following helper functions:

`get<T>(x: Nullable<T>): T;`

Returns the value of `x`, if `x` is defined. Throws an Error if X is `null` or `undefined`

`orElseThrow<T>(x: Nullable<T>, err: Error): T;

Returns the assigned value of `x` if `x` is NOT `null` or `undefined`, otherwise throws the provided Error `err`.

`orElse<T>(x: Nullable<T>, defaultVal: T): T;

Returns the assigned value of `x` if `x` is not `null` or `undefined`, otherwise returns the assigned value of `defaultVal`.

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
