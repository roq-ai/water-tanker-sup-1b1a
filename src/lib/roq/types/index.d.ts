/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model business_owner
 *
 */
export type business_owner = $Result.DefaultSelection<Prisma.$business_ownerPayload>;
/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model operations_manager
 *
 */
export type operations_manager = $Result.DefaultSelection<Prisma.$operations_managerPayload>;
/**
 * Model supplier
 *
 */
export type supplier = $Result.DefaultSelection<Prisma.$supplierPayload>;
/**
 * Model supply_chain_manager
 *
 */
export type supply_chain_manager = $Result.DefaultSelection<Prisma.$supply_chain_managerPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Business_owners
 * const business_owners = await prisma.business_owner.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.business_owner`: Exposes CRUD operations for the **business_owner** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Business_owners
   * const business_owners = await prisma.business_owner.findMany()
   * ```
   */
  get business_owner(): Prisma.business_ownerDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.operations_manager`: Exposes CRUD operations for the **operations_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Operations_managers
   * const operations_managers = await prisma.operations_manager.findMany()
   * ```
   */
  get operations_manager(): Prisma.operations_managerDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **supplier** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Suppliers
   * const suppliers = await prisma.supplier.findMany()
   * ```
   */
  get supplier(): Prisma.supplierDelegate<ExtArgs>;

  /**
   * `prisma.supply_chain_manager`: Exposes CRUD operations for the **supply_chain_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Supply_chain_managers
   * const supply_chain_managers = await prisma.supply_chain_manager.findMany()
   * ```
   */
  get supply_chain_manager(): Prisma.supply_chain_managerDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    business_owner: 'business_owner';
    customer: 'customer';
    operations_manager: 'operations_manager';
    supplier: 'supplier';
    supply_chain_manager: 'supply_chain_manager';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'business_owner' | 'customer' | 'operations_manager' | 'supplier' | 'supply_chain_manager' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      business_owner: {
        payload: Prisma.$business_ownerPayload<ExtArgs>;
        fields: Prisma.business_ownerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.business_ownerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.business_ownerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findFirst: {
            args: Prisma.business_ownerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.business_ownerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          findMany: {
            args: Prisma.business_ownerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>[];
          };
          create: {
            args: Prisma.business_ownerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          createMany: {
            args: Prisma.business_ownerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.business_ownerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          update: {
            args: Prisma.business_ownerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          deleteMany: {
            args: Prisma.business_ownerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.business_ownerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.business_ownerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$business_ownerPayload>;
          };
          aggregate: {
            args: Prisma.Business_ownerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBusiness_owner>;
          };
          groupBy: {
            args: Prisma.business_ownerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerGroupByOutputType>[];
          };
          count: {
            args: Prisma.business_ownerCountArgs<ExtArgs>;
            result: $Utils.Optional<Business_ownerCountAggregateOutputType> | number;
          };
        };
      };
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      operations_manager: {
        payload: Prisma.$operations_managerPayload<ExtArgs>;
        fields: Prisma.operations_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.operations_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.operations_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          findFirst: {
            args: Prisma.operations_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.operations_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          findMany: {
            args: Prisma.operations_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>[];
          };
          create: {
            args: Prisma.operations_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          createMany: {
            args: Prisma.operations_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.operations_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          update: {
            args: Prisma.operations_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          deleteMany: {
            args: Prisma.operations_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.operations_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.operations_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$operations_managerPayload>;
          };
          aggregate: {
            args: Prisma.Operations_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateOperations_manager>;
          };
          groupBy: {
            args: Prisma.operations_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Operations_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.operations_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Operations_managerCountAggregateOutputType> | number;
          };
        };
      };
      supplier: {
        payload: Prisma.$supplierPayload<ExtArgs>;
        fields: Prisma.supplierFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.supplierFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.supplierFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          findFirst: {
            args: Prisma.supplierFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.supplierFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          findMany: {
            args: Prisma.supplierFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>[];
          };
          create: {
            args: Prisma.supplierCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          createMany: {
            args: Prisma.supplierCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.supplierDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          update: {
            args: Prisma.supplierUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          deleteMany: {
            args: Prisma.supplierDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.supplierUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.supplierUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supplierPayload>;
          };
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSupplier>;
          };
          groupBy: {
            args: Prisma.supplierGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SupplierGroupByOutputType>[];
          };
          count: {
            args: Prisma.supplierCountArgs<ExtArgs>;
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number;
          };
        };
      };
      supply_chain_manager: {
        payload: Prisma.$supply_chain_managerPayload<ExtArgs>;
        fields: Prisma.supply_chain_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.supply_chain_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.supply_chain_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          findFirst: {
            args: Prisma.supply_chain_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.supply_chain_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          findMany: {
            args: Prisma.supply_chain_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>[];
          };
          create: {
            args: Prisma.supply_chain_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          createMany: {
            args: Prisma.supply_chain_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.supply_chain_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          update: {
            args: Prisma.supply_chain_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          deleteMany: {
            args: Prisma.supply_chain_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.supply_chain_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.supply_chain_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$supply_chain_managerPayload>;
          };
          aggregate: {
            args: Prisma.Supply_chain_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSupply_chain_manager>;
          };
          groupBy: {
            args: Prisma.supply_chain_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Supply_chain_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.supply_chain_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Supply_chain_managerCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    business_owner: number;
    customer: number;
    operations_manager: number;
    supplier: number;
    supply_chain_manager: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | UserCountOutputTypeCountBusiness_ownerArgs;
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    operations_manager?: boolean | UserCountOutputTypeCountOperations_managerArgs;
    supplier?: boolean | UserCountOutputTypeCountSupplierArgs;
    supply_chain_manager?: boolean | UserCountOutputTypeCountSupply_chain_managerArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBusiness_ownerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: business_ownerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOperations_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: operations_managerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: supplierWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSupply_chain_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: supply_chain_managerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model business_owner
   */

  export type AggregateBusiness_owner = {
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  export type Business_ownerMinAggregateOutputType = {
    id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_contact: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerMaxAggregateOutputType = {
    id: string | null;
    business_name: string | null;
    business_address: string | null;
    business_contact: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Business_ownerCountAggregateOutputType = {
    id: number;
    business_name: number;
    business_address: number;
    business_contact: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Business_ownerMinAggregateInputType = {
    id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerMaxAggregateInputType = {
    id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Business_ownerCountAggregateInputType = {
    id?: true;
    business_name?: true;
    business_address?: true;
    business_contact?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Business_ownerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owner to aggregate.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned business_owners
     **/
    _count?: true | Business_ownerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Business_ownerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type GetBusiness_ownerAggregateType<T extends Business_ownerAggregateArgs> = {
    [P in keyof T & keyof AggregateBusiness_owner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness_owner[P]>
      : GetScalarType<T[P], AggregateBusiness_owner[P]>;
  };

  export type business_ownerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithAggregationInput | business_ownerOrderByWithAggregationInput[];
    by: Business_ownerScalarFieldEnum[] | Business_ownerScalarFieldEnum;
    having?: business_ownerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Business_ownerCountAggregateInputType | true;
    _min?: Business_ownerMinAggregateInputType;
    _max?: Business_ownerMaxAggregateInputType;
  };

  export type Business_ownerGroupByOutputType = {
    id: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Business_ownerCountAggregateOutputType | null;
    _min: Business_ownerMinAggregateOutputType | null;
    _max: Business_ownerMaxAggregateOutputType | null;
  };

  type GetBusiness_ownerGroupByPayload<T extends business_ownerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Business_ownerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Business_ownerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>
          : GetScalarType<T[P], Business_ownerGroupByOutputType[P]>;
      }
    >
  >;

  export type business_ownerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        business_name?: boolean;
        business_address?: boolean;
        business_contact?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['business_owner']
    >;

  export type business_ownerSelectScalar = {
    id?: boolean;
    business_name?: boolean;
    business_address?: boolean;
    business_contact?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type business_ownerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $business_ownerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'business_owner';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        business_name: string;
        business_address: string;
        business_contact: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['business_owner']
    >;
    composites: {};
  };

  type business_ownerGetPayload<S extends boolean | null | undefined | business_ownerDefaultArgs> = $Result.GetResult<
    Prisma.$business_ownerPayload,
    S
  >;

  type business_ownerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    business_ownerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Business_ownerCountAggregateInputType | true;
  };

  export interface business_ownerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['business_owner']; meta: { name: 'business_owner' } };
    /**
     * Find zero or one Business_owner that matches the filter.
     * @param {business_ownerFindUniqueArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends business_ownerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerFindUniqueArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Business_owner that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {business_ownerFindUniqueOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends business_ownerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends business_ownerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Business_owner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindFirstOrThrowArgs} args - Arguments to find a Business_owner
     * @example
     * // Get one Business_owner
     * const business_owner = await prisma.business_owner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends business_ownerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Business_owners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Business_owners
     * const business_owners = await prisma.business_owner.findMany()
     *
     * // Get first 10 Business_owners
     * const business_owners = await prisma.business_owner.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const business_ownerWithIdOnly = await prisma.business_owner.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends business_ownerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Business_owner.
     * @param {business_ownerCreateArgs} args - Arguments to create a Business_owner.
     * @example
     * // Create one Business_owner
     * const Business_owner = await prisma.business_owner.create({
     *   data: {
     *     // ... data to create a Business_owner
     *   }
     * })
     *
     **/
    create<T extends business_ownerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerCreateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Business_owners.
     *     @param {business_ownerCreateManyArgs} args - Arguments to create many Business_owners.
     *     @example
     *     // Create many Business_owners
     *     const business_owner = await prisma.business_owner.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends business_ownerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Business_owner.
     * @param {business_ownerDeleteArgs} args - Arguments to delete one Business_owner.
     * @example
     * // Delete one Business_owner
     * const Business_owner = await prisma.business_owner.delete({
     *   where: {
     *     // ... filter to delete one Business_owner
     *   }
     * })
     *
     **/
    delete<T extends business_ownerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerDeleteArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Business_owner.
     * @param {business_ownerUpdateArgs} args - Arguments to update one Business_owner.
     * @example
     * // Update one Business_owner
     * const business_owner = await prisma.business_owner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends business_ownerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Business_owners.
     * @param {business_ownerDeleteManyArgs} args - Arguments to filter Business_owners to delete.
     * @example
     * // Delete a few Business_owners
     * const { count } = await prisma.business_owner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends business_ownerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, business_ownerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Business_owners
     * const business_owner = await prisma.business_owner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends business_ownerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Business_owner.
     * @param {business_ownerUpsertArgs} args - Arguments to update or create a Business_owner.
     * @example
     * // Update or create a Business_owner
     * const business_owner = await prisma.business_owner.upsert({
     *   create: {
     *     // ... data to create a Business_owner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business_owner we want to update
     *   }
     * })
     **/
    upsert<T extends business_ownerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, business_ownerUpsertArgs<ExtArgs>>,
    ): Prisma__business_ownerClient<
      $Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Business_owners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerCountArgs} args - Arguments to filter Business_owners to count.
     * @example
     * // Count the number of Business_owners
     * const count = await prisma.business_owner.count({
     *   where: {
     *     // ... the filter for the Business_owners we want to count
     *   }
     * })
     **/
    count<T extends business_ownerCountArgs>(
      args?: Subset<T, business_ownerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Business_ownerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Business_ownerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Business_ownerAggregateArgs>(
      args: Subset<T, Business_ownerAggregateArgs>,
    ): Prisma.PrismaPromise<GetBusiness_ownerAggregateType<T>>;

    /**
     * Group by Business_owner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {business_ownerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends business_ownerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: business_ownerGroupByArgs['orderBy'] }
        : { orderBy?: business_ownerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, business_ownerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBusiness_ownerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the business_owner model
     */
    readonly fields: business_ownerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for business_owner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__business_ownerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the business_owner model
   */
  interface business_ownerFieldRefs {
    readonly id: FieldRef<'business_owner', 'String'>;
    readonly business_name: FieldRef<'business_owner', 'String'>;
    readonly business_address: FieldRef<'business_owner', 'String'>;
    readonly business_contact: FieldRef<'business_owner', 'String'>;
    readonly user_id: FieldRef<'business_owner', 'String'>;
    readonly created_at: FieldRef<'business_owner', 'DateTime'>;
    readonly updated_at: FieldRef<'business_owner', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * business_owner findUnique
   */
  export type business_ownerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner findUniqueOrThrow
   */
  export type business_ownerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the business_owner
       */
      select?: business_ownerSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: business_ownerInclude<ExtArgs> | null;
      /**
       * Filter, which business_owner to fetch.
       */
      where: business_ownerWhereUniqueInput;
    };

  /**
   * business_owner findFirst
   */
  export type business_ownerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findFirstOrThrow
   */
  export type business_ownerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owner to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of business_owners.
     */
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner findMany
   */
  export type business_ownerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter, which business_owners to fetch.
     */
    where?: business_ownerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of business_owners to fetch.
     */
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing business_owners.
     */
    cursor?: business_ownerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` business_owners from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` business_owners.
     */
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * business_owner create
   */
  export type business_ownerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to create a business_owner.
     */
    data: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
  };

  /**
   * business_owner createMany
   */
  export type business_ownerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many business_owners.
     */
    data: business_ownerCreateManyInput | business_ownerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * business_owner update
   */
  export type business_ownerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The data needed to update a business_owner.
     */
    data: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
    /**
     * Choose, which business_owner to update.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner updateMany
   */
  export type business_ownerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update business_owners.
     */
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyInput>;
    /**
     * Filter which business_owners to update
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner upsert
   */
  export type business_ownerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * The filter to search for the business_owner to update in case it exists.
     */
    where: business_ownerWhereUniqueInput;
    /**
     * In case the business_owner found by the `where` argument doesn't exist, create a new business_owner with this data.
     */
    create: XOR<business_ownerCreateInput, business_ownerUncheckedCreateInput>;
    /**
     * In case the business_owner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<business_ownerUpdateInput, business_ownerUncheckedUpdateInput>;
  };

  /**
   * business_owner delete
   */
  export type business_ownerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    /**
     * Filter which business_owner to delete.
     */
    where: business_ownerWhereUniqueInput;
  };

  /**
   * business_owner deleteMany
   */
  export type business_ownerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which business_owners to delete
     */
    where?: business_ownerWhereInput;
  };

  /**
   * business_owner without action
   */
  export type business_ownerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
  };

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    contact_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    address: string | null;
    contact_number: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    name: number;
    address: number;
    contact_number: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    name?: true;
    address?: true;
    contact_number?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    name: string;
    address: string;
    contact_number: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        address?: boolean;
        contact_number?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    name?: boolean;
    address?: boolean;
    contact_number?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        address: string;
        contact_number: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly name: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly contact_number: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model operations_manager
   */

  export type AggregateOperations_manager = {
    _count: Operations_managerCountAggregateOutputType | null;
    _min: Operations_managerMinAggregateOutputType | null;
    _max: Operations_managerMaxAggregateOutputType | null;
  };

  export type Operations_managerMinAggregateOutputType = {
    id: string | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_managerMaxAggregateOutputType = {
    id: string | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Operations_managerCountAggregateOutputType = {
    id: number;
    department: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Operations_managerMinAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_managerMaxAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Operations_managerCountAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Operations_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_manager to aggregate.
     */
    where?: operations_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_managers to fetch.
     */
    orderBy?: operations_managerOrderByWithRelationInput | operations_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: operations_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned operations_managers
     **/
    _count?: true | Operations_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Operations_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Operations_managerMaxAggregateInputType;
  };

  export type GetOperations_managerAggregateType<T extends Operations_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateOperations_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperations_manager[P]>
      : GetScalarType<T[P], AggregateOperations_manager[P]>;
  };

  export type operations_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operations_managerWhereInput;
    orderBy?: operations_managerOrderByWithAggregationInput | operations_managerOrderByWithAggregationInput[];
    by: Operations_managerScalarFieldEnum[] | Operations_managerScalarFieldEnum;
    having?: operations_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Operations_managerCountAggregateInputType | true;
    _min?: Operations_managerMinAggregateInputType;
    _max?: Operations_managerMaxAggregateInputType;
  };

  export type Operations_managerGroupByOutputType = {
    id: string;
    department: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Operations_managerCountAggregateOutputType | null;
    _min: Operations_managerMinAggregateOutputType | null;
    _max: Operations_managerMaxAggregateOutputType | null;
  };

  type GetOperations_managerGroupByPayload<T extends operations_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Operations_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Operations_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Operations_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Operations_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type operations_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        department?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['operations_manager']
    >;

  export type operations_managerSelectScalar = {
    id?: boolean;
    department?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type operations_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $operations_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'operations_manager';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        department: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['operations_manager']
    >;
    composites: {};
  };

  type operations_managerGetPayload<S extends boolean | null | undefined | operations_managerDefaultArgs> =
    $Result.GetResult<Prisma.$operations_managerPayload, S>;

  type operations_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    operations_managerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Operations_managerCountAggregateInputType | true;
  };

  export interface operations_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['operations_manager'];
      meta: { name: 'operations_manager' };
    };
    /**
     * Find zero or one Operations_manager that matches the filter.
     * @param {operations_managerFindUniqueArgs} args - Arguments to find a Operations_manager
     * @example
     * // Get one Operations_manager
     * const operations_manager = await prisma.operations_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends operations_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Operations_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {operations_managerFindUniqueOrThrowArgs} args - Arguments to find a Operations_manager
     * @example
     * // Get one Operations_manager
     * const operations_manager = await prisma.operations_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends operations_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Operations_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerFindFirstArgs} args - Arguments to find a Operations_manager
     * @example
     * // Get one Operations_manager
     * const operations_manager = await prisma.operations_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends operations_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Operations_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerFindFirstOrThrowArgs} args - Arguments to find a Operations_manager
     * @example
     * // Get one Operations_manager
     * const operations_manager = await prisma.operations_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends operations_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Operations_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operations_managers
     * const operations_managers = await prisma.operations_manager.findMany()
     *
     * // Get first 10 Operations_managers
     * const operations_managers = await prisma.operations_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const operations_managerWithIdOnly = await prisma.operations_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends operations_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Operations_manager.
     * @param {operations_managerCreateArgs} args - Arguments to create a Operations_manager.
     * @example
     * // Create one Operations_manager
     * const Operations_manager = await prisma.operations_manager.create({
     *   data: {
     *     // ... data to create a Operations_manager
     *   }
     * })
     *
     **/
    create<T extends operations_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerCreateArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Operations_managers.
     *     @param {operations_managerCreateManyArgs} args - Arguments to create many Operations_managers.
     *     @example
     *     // Create many Operations_managers
     *     const operations_manager = await prisma.operations_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends operations_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Operations_manager.
     * @param {operations_managerDeleteArgs} args - Arguments to delete one Operations_manager.
     * @example
     * // Delete one Operations_manager
     * const Operations_manager = await prisma.operations_manager.delete({
     *   where: {
     *     // ... filter to delete one Operations_manager
     *   }
     * })
     *
     **/
    delete<T extends operations_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerDeleteArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Operations_manager.
     * @param {operations_managerUpdateArgs} args - Arguments to update one Operations_manager.
     * @example
     * // Update one Operations_manager
     * const operations_manager = await prisma.operations_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends operations_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerUpdateArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Operations_managers.
     * @param {operations_managerDeleteManyArgs} args - Arguments to filter Operations_managers to delete.
     * @example
     * // Delete a few Operations_managers
     * const { count } = await prisma.operations_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends operations_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, operations_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Operations_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operations_managers
     * const operations_manager = await prisma.operations_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends operations_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Operations_manager.
     * @param {operations_managerUpsertArgs} args - Arguments to update or create a Operations_manager.
     * @example
     * // Update or create a Operations_manager
     * const operations_manager = await prisma.operations_manager.upsert({
     *   create: {
     *     // ... data to create a Operations_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operations_manager we want to update
     *   }
     * })
     **/
    upsert<T extends operations_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, operations_managerUpsertArgs<ExtArgs>>,
    ): Prisma__operations_managerClient<
      $Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Operations_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerCountArgs} args - Arguments to filter Operations_managers to count.
     * @example
     * // Count the number of Operations_managers
     * const count = await prisma.operations_manager.count({
     *   where: {
     *     // ... the filter for the Operations_managers we want to count
     *   }
     * })
     **/
    count<T extends operations_managerCountArgs>(
      args?: Subset<T, operations_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Operations_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Operations_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Operations_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Operations_managerAggregateArgs>(
      args: Subset<T, Operations_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetOperations_managerAggregateType<T>>;

    /**
     * Group by Operations_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operations_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends operations_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operations_managerGroupByArgs['orderBy'] }
        : { orderBy?: operations_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, operations_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetOperations_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the operations_manager model
     */
    readonly fields: operations_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operations_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operations_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the operations_manager model
   */
  interface operations_managerFieldRefs {
    readonly id: FieldRef<'operations_manager', 'String'>;
    readonly department: FieldRef<'operations_manager', 'String'>;
    readonly user_id: FieldRef<'operations_manager', 'String'>;
    readonly created_at: FieldRef<'operations_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'operations_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * operations_manager findUnique
   */
  export type operations_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter, which operations_manager to fetch.
     */
    where: operations_managerWhereUniqueInput;
  };

  /**
   * operations_manager findUniqueOrThrow
   */
  export type operations_managerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter, which operations_manager to fetch.
     */
    where: operations_managerWhereUniqueInput;
  };

  /**
   * operations_manager findFirst
   */
  export type operations_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter, which operations_manager to fetch.
     */
    where?: operations_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_managers to fetch.
     */
    orderBy?: operations_managerOrderByWithRelationInput | operations_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operations_managers.
     */
    cursor?: operations_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operations_managers.
     */
    distinct?: Operations_managerScalarFieldEnum | Operations_managerScalarFieldEnum[];
  };

  /**
   * operations_manager findFirstOrThrow
   */
  export type operations_managerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter, which operations_manager to fetch.
     */
    where?: operations_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_managers to fetch.
     */
    orderBy?: operations_managerOrderByWithRelationInput | operations_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for operations_managers.
     */
    cursor?: operations_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of operations_managers.
     */
    distinct?: Operations_managerScalarFieldEnum | Operations_managerScalarFieldEnum[];
  };

  /**
   * operations_manager findMany
   */
  export type operations_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter, which operations_managers to fetch.
     */
    where?: operations_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of operations_managers to fetch.
     */
    orderBy?: operations_managerOrderByWithRelationInput | operations_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing operations_managers.
     */
    cursor?: operations_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` operations_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` operations_managers.
     */
    skip?: number;
    distinct?: Operations_managerScalarFieldEnum | Operations_managerScalarFieldEnum[];
  };

  /**
   * operations_manager create
   */
  export type operations_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a operations_manager.
     */
    data: XOR<operations_managerCreateInput, operations_managerUncheckedCreateInput>;
  };

  /**
   * operations_manager createMany
   */
  export type operations_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operations_managers.
     */
    data: operations_managerCreateManyInput | operations_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * operations_manager update
   */
  export type operations_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a operations_manager.
     */
    data: XOR<operations_managerUpdateInput, operations_managerUncheckedUpdateInput>;
    /**
     * Choose, which operations_manager to update.
     */
    where: operations_managerWhereUniqueInput;
  };

  /**
   * operations_manager updateMany
   */
  export type operations_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operations_managers.
     */
    data: XOR<operations_managerUpdateManyMutationInput, operations_managerUncheckedUpdateManyInput>;
    /**
     * Filter which operations_managers to update
     */
    where?: operations_managerWhereInput;
  };

  /**
   * operations_manager upsert
   */
  export type operations_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the operations_manager to update in case it exists.
     */
    where: operations_managerWhereUniqueInput;
    /**
     * In case the operations_manager found by the `where` argument doesn't exist, create a new operations_manager with this data.
     */
    create: XOR<operations_managerCreateInput, operations_managerUncheckedCreateInput>;
    /**
     * In case the operations_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operations_managerUpdateInput, operations_managerUncheckedUpdateInput>;
  };

  /**
   * operations_manager delete
   */
  export type operations_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    /**
     * Filter which operations_manager to delete.
     */
    where: operations_managerWhereUniqueInput;
  };

  /**
   * operations_manager deleteMany
   */
  export type operations_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operations_managers to delete
     */
    where?: operations_managerWhereInput;
  };

  /**
   * operations_manager without action
   */
  export type operations_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
  };

  /**
   * Model supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null;
    _min: SupplierMinAggregateOutputType | null;
    _max: SupplierMaxAggregateOutputType | null;
  };

  export type SupplierMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SupplierMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SupplierCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type SupplierMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SupplierMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SupplierCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supplier to aggregate.
     */
    where?: supplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: supplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned suppliers
     **/
    _count?: true | SupplierCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SupplierMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SupplierMaxAggregateInputType;
  };

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
    [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>;
  };

  export type supplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supplierWhereInput;
    orderBy?: supplierOrderByWithAggregationInput | supplierOrderByWithAggregationInput[];
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum;
    having?: supplierScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SupplierCountAggregateInputType | true;
    _min?: SupplierMinAggregateInputType;
    _max?: SupplierMaxAggregateInputType;
  };

  export type SupplierGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: SupplierCountAggregateOutputType | null;
    _min: SupplierMinAggregateOutputType | null;
    _max: SupplierMaxAggregateOutputType | null;
  };

  type GetSupplierGroupByPayload<T extends supplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SupplierGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
          : GetScalarType<T[P], SupplierGroupByOutputType[P]>;
      }
    >
  >;

  export type supplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        description?: boolean;
        name?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user_id?: boolean;
        tenant_id?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['supplier']
    >;

  export type supplierSelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type supplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $supplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'supplier';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['supplier']
    >;
    composites: {};
  };

  type supplierGetPayload<S extends boolean | null | undefined | supplierDefaultArgs> = $Result.GetResult<
    Prisma.$supplierPayload,
    S
  >;

  type supplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    supplierFindManyArgs,
    'select' | 'include'
  > & {
    select?: SupplierCountAggregateInputType | true;
  };

  export interface supplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['supplier']; meta: { name: 'supplier' } };
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {supplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends supplierFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, supplierFindUniqueArgs<ExtArgs>>,
    ): Prisma__supplierClient<
      $Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Supplier that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {supplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends supplierFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__supplierClient<
      $Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends supplierFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindFirstArgs<ExtArgs>>,
    ): Prisma__supplierClient<
      $Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends supplierFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__supplierClient<
      $Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     *
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends supplierFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Supplier.
     * @param {supplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     *
     **/
    create<T extends supplierCreateArgs<ExtArgs>>(
      args: SelectSubset<T, supplierCreateArgs<ExtArgs>>,
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Suppliers.
     *     @param {supplierCreateManyArgs} args - Arguments to create many Suppliers.
     *     @example
     *     // Create many Suppliers
     *     const supplier = await prisma.supplier.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends supplierCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Supplier.
     * @param {supplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     *
     **/
    delete<T extends supplierDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, supplierDeleteArgs<ExtArgs>>,
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Supplier.
     * @param {supplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends supplierUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpdateArgs<ExtArgs>>,
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Suppliers.
     * @param {supplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends supplierDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supplierDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends supplierUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Supplier.
     * @param {supplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     **/
    upsert<T extends supplierUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, supplierUpsertArgs<ExtArgs>>,
    ): Prisma__supplierClient<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
     **/
    count<T extends supplierCountArgs>(
      args?: Subset<T, supplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends SupplierAggregateArgs>(
      args: Subset<T, SupplierAggregateArgs>,
    ): Prisma.PrismaPromise<GetSupplierAggregateType<T>>;

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends supplierGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supplierGroupByArgs['orderBy'] }
        : { orderBy?: supplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, supplierGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the supplier model
     */
    readonly fields: supplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supplierClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the supplier model
   */
  interface supplierFieldRefs {
    readonly id: FieldRef<'supplier', 'String'>;
    readonly description: FieldRef<'supplier', 'String'>;
    readonly name: FieldRef<'supplier', 'String'>;
    readonly created_at: FieldRef<'supplier', 'DateTime'>;
    readonly updated_at: FieldRef<'supplier', 'DateTime'>;
    readonly user_id: FieldRef<'supplier', 'String'>;
    readonly tenant_id: FieldRef<'supplier', 'String'>;
  }

  // Custom InputTypes

  /**
   * supplier findUnique
   */
  export type supplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput;
  };

  /**
   * supplier findUniqueOrThrow
   */
  export type supplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter, which supplier to fetch.
     */
    where: supplierWhereUniqueInput;
  };

  /**
   * supplier findFirst
   */
  export type supplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[];
  };

  /**
   * supplier findFirstOrThrow
   */
  export type supplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter, which supplier to fetch.
     */
    where?: supplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for suppliers.
     */
    cursor?: supplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` suppliers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[];
  };

  /**
   * supplier findMany
   */
  export type supplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter, which suppliers to fetch.
     */
    where?: supplierWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of suppliers to fetch.
     */
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing suppliers.
     */
    cursor?: supplierWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` suppliers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` suppliers.
     */
    skip?: number;
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[];
  };

  /**
   * supplier create
   */
  export type supplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * The data needed to create a supplier.
     */
    data: XOR<supplierCreateInput, supplierUncheckedCreateInput>;
  };

  /**
   * supplier createMany
   */
  export type supplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many suppliers.
     */
    data: supplierCreateManyInput | supplierCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * supplier update
   */
  export type supplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * The data needed to update a supplier.
     */
    data: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>;
    /**
     * Choose, which supplier to update.
     */
    where: supplierWhereUniqueInput;
  };

  /**
   * supplier updateMany
   */
  export type supplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update suppliers.
     */
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyInput>;
    /**
     * Filter which suppliers to update
     */
    where?: supplierWhereInput;
  };

  /**
   * supplier upsert
   */
  export type supplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * The filter to search for the supplier to update in case it exists.
     */
    where: supplierWhereUniqueInput;
    /**
     * In case the supplier found by the `where` argument doesn't exist, create a new supplier with this data.
     */
    create: XOR<supplierCreateInput, supplierUncheckedCreateInput>;
    /**
     * In case the supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supplierUpdateInput, supplierUncheckedUpdateInput>;
  };

  /**
   * supplier delete
   */
  export type supplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    /**
     * Filter which supplier to delete.
     */
    where: supplierWhereUniqueInput;
  };

  /**
   * supplier deleteMany
   */
  export type supplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which suppliers to delete
     */
    where?: supplierWhereInput;
  };

  /**
   * supplier without action
   */
  export type supplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
  };

  /**
   * Model supply_chain_manager
   */

  export type AggregateSupply_chain_manager = {
    _count: Supply_chain_managerCountAggregateOutputType | null;
    _min: Supply_chain_managerMinAggregateOutputType | null;
    _max: Supply_chain_managerMaxAggregateOutputType | null;
  };

  export type Supply_chain_managerMinAggregateOutputType = {
    id: string | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Supply_chain_managerMaxAggregateOutputType = {
    id: string | null;
    department: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Supply_chain_managerCountAggregateOutputType = {
    id: number;
    department: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Supply_chain_managerMinAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Supply_chain_managerMaxAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Supply_chain_managerCountAggregateInputType = {
    id?: true;
    department?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Supply_chain_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supply_chain_manager to aggregate.
     */
    where?: supply_chain_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chain_managers to fetch.
     */
    orderBy?: supply_chain_managerOrderByWithRelationInput | supply_chain_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: supply_chain_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chain_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chain_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned supply_chain_managers
     **/
    _count?: true | Supply_chain_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Supply_chain_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Supply_chain_managerMaxAggregateInputType;
  };

  export type GetSupply_chain_managerAggregateType<T extends Supply_chain_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateSupply_chain_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupply_chain_manager[P]>
      : GetScalarType<T[P], AggregateSupply_chain_manager[P]>;
  };

  export type supply_chain_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: supply_chain_managerWhereInput;
    orderBy?: supply_chain_managerOrderByWithAggregationInput | supply_chain_managerOrderByWithAggregationInput[];
    by: Supply_chain_managerScalarFieldEnum[] | Supply_chain_managerScalarFieldEnum;
    having?: supply_chain_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Supply_chain_managerCountAggregateInputType | true;
    _min?: Supply_chain_managerMinAggregateInputType;
    _max?: Supply_chain_managerMaxAggregateInputType;
  };

  export type Supply_chain_managerGroupByOutputType = {
    id: string;
    department: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Supply_chain_managerCountAggregateOutputType | null;
    _min: Supply_chain_managerMinAggregateOutputType | null;
    _max: Supply_chain_managerMaxAggregateOutputType | null;
  };

  type GetSupply_chain_managerGroupByPayload<T extends supply_chain_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Supply_chain_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Supply_chain_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Supply_chain_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Supply_chain_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type supply_chain_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        department?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['supply_chain_manager']
    >;

  export type supply_chain_managerSelectScalar = {
    id?: boolean;
    department?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type supply_chain_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $supply_chain_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'supply_chain_manager';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        department: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['supply_chain_manager']
    >;
    composites: {};
  };

  type supply_chain_managerGetPayload<S extends boolean | null | undefined | supply_chain_managerDefaultArgs> =
    $Result.GetResult<Prisma.$supply_chain_managerPayload, S>;

  type supply_chain_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    supply_chain_managerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Supply_chain_managerCountAggregateInputType | true;
  };

  export interface supply_chain_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['supply_chain_manager'];
      meta: { name: 'supply_chain_manager' };
    };
    /**
     * Find zero or one Supply_chain_manager that matches the filter.
     * @param {supply_chain_managerFindUniqueArgs} args - Arguments to find a Supply_chain_manager
     * @example
     * // Get one Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends supply_chain_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Supply_chain_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {supply_chain_managerFindUniqueOrThrowArgs} args - Arguments to find a Supply_chain_manager
     * @example
     * // Get one Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends supply_chain_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Supply_chain_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerFindFirstArgs} args - Arguments to find a Supply_chain_manager
     * @example
     * // Get one Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends supply_chain_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Supply_chain_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerFindFirstOrThrowArgs} args - Arguments to find a Supply_chain_manager
     * @example
     * // Get one Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends supply_chain_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Supply_chain_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Supply_chain_managers
     * const supply_chain_managers = await prisma.supply_chain_manager.findMany()
     *
     * // Get first 10 Supply_chain_managers
     * const supply_chain_managers = await prisma.supply_chain_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const supply_chain_managerWithIdOnly = await prisma.supply_chain_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends supply_chain_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Supply_chain_manager.
     * @param {supply_chain_managerCreateArgs} args - Arguments to create a Supply_chain_manager.
     * @example
     * // Create one Supply_chain_manager
     * const Supply_chain_manager = await prisma.supply_chain_manager.create({
     *   data: {
     *     // ... data to create a Supply_chain_manager
     *   }
     * })
     *
     **/
    create<T extends supply_chain_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerCreateArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Supply_chain_managers.
     *     @param {supply_chain_managerCreateManyArgs} args - Arguments to create many Supply_chain_managers.
     *     @example
     *     // Create many Supply_chain_managers
     *     const supply_chain_manager = await prisma.supply_chain_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends supply_chain_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Supply_chain_manager.
     * @param {supply_chain_managerDeleteArgs} args - Arguments to delete one Supply_chain_manager.
     * @example
     * // Delete one Supply_chain_manager
     * const Supply_chain_manager = await prisma.supply_chain_manager.delete({
     *   where: {
     *     // ... filter to delete one Supply_chain_manager
     *   }
     * })
     *
     **/
    delete<T extends supply_chain_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerDeleteArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Supply_chain_manager.
     * @param {supply_chain_managerUpdateArgs} args - Arguments to update one Supply_chain_manager.
     * @example
     * // Update one Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends supply_chain_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerUpdateArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Supply_chain_managers.
     * @param {supply_chain_managerDeleteManyArgs} args - Arguments to filter Supply_chain_managers to delete.
     * @example
     * // Delete a few Supply_chain_managers
     * const { count } = await prisma.supply_chain_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends supply_chain_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, supply_chain_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Supply_chain_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Supply_chain_managers
     * const supply_chain_manager = await prisma.supply_chain_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends supply_chain_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Supply_chain_manager.
     * @param {supply_chain_managerUpsertArgs} args - Arguments to update or create a Supply_chain_manager.
     * @example
     * // Update or create a Supply_chain_manager
     * const supply_chain_manager = await prisma.supply_chain_manager.upsert({
     *   create: {
     *     // ... data to create a Supply_chain_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supply_chain_manager we want to update
     *   }
     * })
     **/
    upsert<T extends supply_chain_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, supply_chain_managerUpsertArgs<ExtArgs>>,
    ): Prisma__supply_chain_managerClient<
      $Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Supply_chain_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerCountArgs} args - Arguments to filter Supply_chain_managers to count.
     * @example
     * // Count the number of Supply_chain_managers
     * const count = await prisma.supply_chain_manager.count({
     *   where: {
     *     // ... the filter for the Supply_chain_managers we want to count
     *   }
     * })
     **/
    count<T extends supply_chain_managerCountArgs>(
      args?: Subset<T, supply_chain_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Supply_chain_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Supply_chain_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Supply_chain_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Supply_chain_managerAggregateArgs>(
      args: Subset<T, Supply_chain_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetSupply_chain_managerAggregateType<T>>;

    /**
     * Group by Supply_chain_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {supply_chain_managerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends supply_chain_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: supply_chain_managerGroupByArgs['orderBy'] }
        : { orderBy?: supply_chain_managerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, supply_chain_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSupply_chain_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the supply_chain_manager model
     */
    readonly fields: supply_chain_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for supply_chain_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__supply_chain_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the supply_chain_manager model
   */
  interface supply_chain_managerFieldRefs {
    readonly id: FieldRef<'supply_chain_manager', 'String'>;
    readonly department: FieldRef<'supply_chain_manager', 'String'>;
    readonly user_id: FieldRef<'supply_chain_manager', 'String'>;
    readonly created_at: FieldRef<'supply_chain_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'supply_chain_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * supply_chain_manager findUnique
   */
  export type supply_chain_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain_manager to fetch.
     */
    where: supply_chain_managerWhereUniqueInput;
  };

  /**
   * supply_chain_manager findUniqueOrThrow
   */
  export type supply_chain_managerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain_manager to fetch.
     */
    where: supply_chain_managerWhereUniqueInput;
  };

  /**
   * supply_chain_manager findFirst
   */
  export type supply_chain_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain_manager to fetch.
     */
    where?: supply_chain_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chain_managers to fetch.
     */
    orderBy?: supply_chain_managerOrderByWithRelationInput | supply_chain_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supply_chain_managers.
     */
    cursor?: supply_chain_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chain_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chain_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supply_chain_managers.
     */
    distinct?: Supply_chain_managerScalarFieldEnum | Supply_chain_managerScalarFieldEnum[];
  };

  /**
   * supply_chain_manager findFirstOrThrow
   */
  export type supply_chain_managerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain_manager to fetch.
     */
    where?: supply_chain_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chain_managers to fetch.
     */
    orderBy?: supply_chain_managerOrderByWithRelationInput | supply_chain_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for supply_chain_managers.
     */
    cursor?: supply_chain_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chain_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chain_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of supply_chain_managers.
     */
    distinct?: Supply_chain_managerScalarFieldEnum | Supply_chain_managerScalarFieldEnum[];
  };

  /**
   * supply_chain_manager findMany
   */
  export type supply_chain_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter, which supply_chain_managers to fetch.
     */
    where?: supply_chain_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of supply_chain_managers to fetch.
     */
    orderBy?: supply_chain_managerOrderByWithRelationInput | supply_chain_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing supply_chain_managers.
     */
    cursor?: supply_chain_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` supply_chain_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` supply_chain_managers.
     */
    skip?: number;
    distinct?: Supply_chain_managerScalarFieldEnum | Supply_chain_managerScalarFieldEnum[];
  };

  /**
   * supply_chain_manager create
   */
  export type supply_chain_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a supply_chain_manager.
     */
    data: XOR<supply_chain_managerCreateInput, supply_chain_managerUncheckedCreateInput>;
  };

  /**
   * supply_chain_manager createMany
   */
  export type supply_chain_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many supply_chain_managers.
     */
    data: supply_chain_managerCreateManyInput | supply_chain_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * supply_chain_manager update
   */
  export type supply_chain_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a supply_chain_manager.
     */
    data: XOR<supply_chain_managerUpdateInput, supply_chain_managerUncheckedUpdateInput>;
    /**
     * Choose, which supply_chain_manager to update.
     */
    where: supply_chain_managerWhereUniqueInput;
  };

  /**
   * supply_chain_manager updateMany
   */
  export type supply_chain_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update supply_chain_managers.
     */
    data: XOR<supply_chain_managerUpdateManyMutationInput, supply_chain_managerUncheckedUpdateManyInput>;
    /**
     * Filter which supply_chain_managers to update
     */
    where?: supply_chain_managerWhereInput;
  };

  /**
   * supply_chain_manager upsert
   */
  export type supply_chain_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the supply_chain_manager to update in case it exists.
     */
    where: supply_chain_managerWhereUniqueInput;
    /**
     * In case the supply_chain_manager found by the `where` argument doesn't exist, create a new supply_chain_manager with this data.
     */
    create: XOR<supply_chain_managerCreateInput, supply_chain_managerUncheckedCreateInput>;
    /**
     * In case the supply_chain_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<supply_chain_managerUpdateInput, supply_chain_managerUncheckedUpdateInput>;
  };

  /**
   * supply_chain_manager delete
   */
  export type supply_chain_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    /**
     * Filter which supply_chain_manager to delete.
     */
    where: supply_chain_managerWhereUniqueInput;
  };

  /**
   * supply_chain_manager deleteMany
   */
  export type supply_chain_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which supply_chain_managers to delete
     */
    where?: supply_chain_managerWhereInput;
  };

  /**
   * supply_chain_manager without action
   */
  export type supply_chain_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
      customer?: boolean | user$customerArgs<ExtArgs>;
      operations_manager?: boolean | user$operations_managerArgs<ExtArgs>;
      supplier?: boolean | user$supplierArgs<ExtArgs>;
      supply_chain_manager?: boolean | user$supply_chain_managerArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business_owner?: boolean | user$business_ownerArgs<ExtArgs>;
    customer?: boolean | user$customerArgs<ExtArgs>;
    operations_manager?: boolean | user$operations_managerArgs<ExtArgs>;
    supplier?: boolean | user$supplierArgs<ExtArgs>;
    supply_chain_manager?: boolean | user$supply_chain_managerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      business_owner: Prisma.$business_ownerPayload<ExtArgs>[];
      customer: Prisma.$customerPayload<ExtArgs>[];
      operations_manager: Prisma.$operations_managerPayload<ExtArgs>[];
      supplier: Prisma.$supplierPayload<ExtArgs>[];
      supply_chain_manager: Prisma.$supply_chain_managerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    business_owner<T extends user$business_ownerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$business_ownerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$business_ownerPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    operations_manager<T extends user$operations_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$operations_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operations_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    supplier<T extends user$supplierArgs<ExtArgs> = {}>(
      args?: Subset<T, user$supplierArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supplierPayload<ExtArgs>, T, 'findMany'> | Null>;

    supply_chain_manager<T extends user$supply_chain_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$supply_chain_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$supply_chain_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.business_owner
   */
  export type user$business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the business_owner
     */
    select?: business_ownerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: business_ownerInclude<ExtArgs> | null;
    where?: business_ownerWhereInput;
    orderBy?: business_ownerOrderByWithRelationInput | business_ownerOrderByWithRelationInput[];
    cursor?: business_ownerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Business_ownerScalarFieldEnum | Business_ownerScalarFieldEnum[];
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.operations_manager
   */
  export type user$operations_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operations_manager
     */
    select?: operations_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: operations_managerInclude<ExtArgs> | null;
    where?: operations_managerWhereInput;
    orderBy?: operations_managerOrderByWithRelationInput | operations_managerOrderByWithRelationInput[];
    cursor?: operations_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Operations_managerScalarFieldEnum | Operations_managerScalarFieldEnum[];
  };

  /**
   * user.supplier
   */
  export type user$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supplier
     */
    select?: supplierSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supplierInclude<ExtArgs> | null;
    where?: supplierWhereInput;
    orderBy?: supplierOrderByWithRelationInput | supplierOrderByWithRelationInput[];
    cursor?: supplierWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[];
  };

  /**
   * user.supply_chain_manager
   */
  export type user$supply_chain_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the supply_chain_manager
     */
    select?: supply_chain_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: supply_chain_managerInclude<ExtArgs> | null;
    where?: supply_chain_managerWhereInput;
    orderBy?: supply_chain_managerOrderByWithRelationInput | supply_chain_managerOrderByWithRelationInput[];
    cursor?: supply_chain_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Supply_chain_managerScalarFieldEnum | Supply_chain_managerScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const Business_ownerScalarFieldEnum: {
    id: 'id';
    business_name: 'business_name';
    business_address: 'business_address';
    business_contact: 'business_contact';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Business_ownerScalarFieldEnum =
    (typeof Business_ownerScalarFieldEnum)[keyof typeof Business_ownerScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    address: 'address';
    contact_number: 'contact_number';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const Operations_managerScalarFieldEnum: {
    id: 'id';
    department: 'department';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Operations_managerScalarFieldEnum =
    (typeof Operations_managerScalarFieldEnum)[keyof typeof Operations_managerScalarFieldEnum];

  export const SupplierScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum];

  export const Supply_chain_managerScalarFieldEnum: {
    id: 'id';
    department: 'department';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Supply_chain_managerScalarFieldEnum =
    (typeof Supply_chain_managerScalarFieldEnum)[keyof typeof Supply_chain_managerScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Deep Input Types
   */

  export type business_ownerWhereInput = {
    AND?: business_ownerWhereInput | business_ownerWhereInput[];
    OR?: business_ownerWhereInput[];
    NOT?: business_ownerWhereInput | business_ownerWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_address?: StringFilter<'business_owner'> | string;
    business_contact?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type business_ownerOrderByWithRelationInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type business_ownerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: business_ownerWhereInput | business_ownerWhereInput[];
      OR?: business_ownerWhereInput[];
      NOT?: business_ownerWhereInput | business_ownerWhereInput[];
      business_name?: StringFilter<'business_owner'> | string;
      business_address?: StringFilter<'business_owner'> | string;
      business_contact?: StringFilter<'business_owner'> | string;
      user_id?: UuidFilter<'business_owner'> | string;
      created_at?: DateTimeFilter<'business_owner'> | Date | string;
      updated_at?: DateTimeFilter<'business_owner'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type business_ownerOrderByWithAggregationInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: business_ownerCountOrderByAggregateInput;
    _max?: business_ownerMaxOrderByAggregateInput;
    _min?: business_ownerMinOrderByAggregateInput;
  };

  export type business_ownerScalarWhereWithAggregatesInput = {
    AND?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    OR?: business_ownerScalarWhereWithAggregatesInput[];
    NOT?: business_ownerScalarWhereWithAggregatesInput | business_ownerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'business_owner'> | string;
    business_name?: StringWithAggregatesFilter<'business_owner'> | string;
    business_address?: StringWithAggregatesFilter<'business_owner'> | string;
    business_contact?: StringWithAggregatesFilter<'business_owner'> | string;
    user_id?: UuidWithAggregatesFilter<'business_owner'> | string;
    created_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'business_owner'> | Date | string;
  };

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    contact_number?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      name?: StringFilter<'customer'> | string;
      address?: StringFilter<'customer'> | string;
      contact_number?: StringFilter<'customer'> | string;
      user_id?: UuidFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    name?: StringWithAggregatesFilter<'customer'> | string;
    address?: StringWithAggregatesFilter<'customer'> | string;
    contact_number?: StringWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type operations_managerWhereInput = {
    AND?: operations_managerWhereInput | operations_managerWhereInput[];
    OR?: operations_managerWhereInput[];
    NOT?: operations_managerWhereInput | operations_managerWhereInput[];
    id?: UuidFilter<'operations_manager'> | string;
    department?: StringFilter<'operations_manager'> | string;
    user_id?: UuidFilter<'operations_manager'> | string;
    created_at?: DateTimeFilter<'operations_manager'> | Date | string;
    updated_at?: DateTimeFilter<'operations_manager'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type operations_managerOrderByWithRelationInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type operations_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: operations_managerWhereInput | operations_managerWhereInput[];
      OR?: operations_managerWhereInput[];
      NOT?: operations_managerWhereInput | operations_managerWhereInput[];
      department?: StringFilter<'operations_manager'> | string;
      user_id?: UuidFilter<'operations_manager'> | string;
      created_at?: DateTimeFilter<'operations_manager'> | Date | string;
      updated_at?: DateTimeFilter<'operations_manager'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type operations_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: operations_managerCountOrderByAggregateInput;
    _max?: operations_managerMaxOrderByAggregateInput;
    _min?: operations_managerMinOrderByAggregateInput;
  };

  export type operations_managerScalarWhereWithAggregatesInput = {
    AND?: operations_managerScalarWhereWithAggregatesInput | operations_managerScalarWhereWithAggregatesInput[];
    OR?: operations_managerScalarWhereWithAggregatesInput[];
    NOT?: operations_managerScalarWhereWithAggregatesInput | operations_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'operations_manager'> | string;
    department?: StringWithAggregatesFilter<'operations_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'operations_manager'> | string;
    created_at?: DateTimeWithAggregatesFilter<'operations_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'operations_manager'> | Date | string;
  };

  export type supplierWhereInput = {
    AND?: supplierWhereInput | supplierWhereInput[];
    OR?: supplierWhereInput[];
    NOT?: supplierWhereInput | supplierWhereInput[];
    id?: UuidFilter<'supplier'> | string;
    description?: StringNullableFilter<'supplier'> | string | null;
    name?: StringFilter<'supplier'> | string;
    created_at?: DateTimeFilter<'supplier'> | Date | string;
    updated_at?: DateTimeFilter<'supplier'> | Date | string;
    user_id?: UuidFilter<'supplier'> | string;
    tenant_id?: StringFilter<'supplier'> | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type supplierOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type supplierWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: supplierWhereInput | supplierWhereInput[];
      OR?: supplierWhereInput[];
      NOT?: supplierWhereInput | supplierWhereInput[];
      description?: StringNullableFilter<'supplier'> | string | null;
      name?: StringFilter<'supplier'> | string;
      created_at?: DateTimeFilter<'supplier'> | Date | string;
      updated_at?: DateTimeFilter<'supplier'> | Date | string;
      user_id?: UuidFilter<'supplier'> | string;
      tenant_id?: StringFilter<'supplier'> | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type supplierOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: supplierCountOrderByAggregateInput;
    _max?: supplierMaxOrderByAggregateInput;
    _min?: supplierMinOrderByAggregateInput;
  };

  export type supplierScalarWhereWithAggregatesInput = {
    AND?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[];
    OR?: supplierScalarWhereWithAggregatesInput[];
    NOT?: supplierScalarWhereWithAggregatesInput | supplierScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'supplier'> | string;
    description?: StringNullableWithAggregatesFilter<'supplier'> | string | null;
    name?: StringWithAggregatesFilter<'supplier'> | string;
    created_at?: DateTimeWithAggregatesFilter<'supplier'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'supplier'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'supplier'> | string;
    tenant_id?: StringWithAggregatesFilter<'supplier'> | string;
  };

  export type supply_chain_managerWhereInput = {
    AND?: supply_chain_managerWhereInput | supply_chain_managerWhereInput[];
    OR?: supply_chain_managerWhereInput[];
    NOT?: supply_chain_managerWhereInput | supply_chain_managerWhereInput[];
    id?: UuidFilter<'supply_chain_manager'> | string;
    department?: StringFilter<'supply_chain_manager'> | string;
    user_id?: UuidFilter<'supply_chain_manager'> | string;
    created_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
    updated_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type supply_chain_managerOrderByWithRelationInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type supply_chain_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: supply_chain_managerWhereInput | supply_chain_managerWhereInput[];
      OR?: supply_chain_managerWhereInput[];
      NOT?: supply_chain_managerWhereInput | supply_chain_managerWhereInput[];
      department?: StringFilter<'supply_chain_manager'> | string;
      user_id?: UuidFilter<'supply_chain_manager'> | string;
      created_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
      updated_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type supply_chain_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: supply_chain_managerCountOrderByAggregateInput;
    _max?: supply_chain_managerMaxOrderByAggregateInput;
    _min?: supply_chain_managerMinOrderByAggregateInput;
  };

  export type supply_chain_managerScalarWhereWithAggregatesInput = {
    AND?: supply_chain_managerScalarWhereWithAggregatesInput | supply_chain_managerScalarWhereWithAggregatesInput[];
    OR?: supply_chain_managerScalarWhereWithAggregatesInput[];
    NOT?: supply_chain_managerScalarWhereWithAggregatesInput | supply_chain_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'supply_chain_manager'> | string;
    department?: StringWithAggregatesFilter<'supply_chain_manager'> | string;
    user_id?: UuidWithAggregatesFilter<'supply_chain_manager'> | string;
    created_at?: DateTimeWithAggregatesFilter<'supply_chain_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'supply_chain_manager'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    business_owner?: Business_ownerListRelationFilter;
    customer?: CustomerListRelationFilter;
    operations_manager?: Operations_managerListRelationFilter;
    supplier?: SupplierListRelationFilter;
    supply_chain_manager?: Supply_chain_managerListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    business_owner?: business_ownerOrderByRelationAggregateInput;
    customer?: customerOrderByRelationAggregateInput;
    operations_manager?: operations_managerOrderByRelationAggregateInput;
    supplier?: supplierOrderByRelationAggregateInput;
    supply_chain_manager?: supply_chain_managerOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      business_owner?: Business_ownerListRelationFilter;
      customer?: CustomerListRelationFilter;
      operations_manager?: Operations_managerListRelationFilter;
      supplier?: SupplierListRelationFilter;
      supply_chain_manager?: Supply_chain_managerListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type business_ownerCreateInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutBusiness_ownerInput;
  };

  export type business_ownerUncheckedCreateInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutBusiness_ownerNestedInput;
  };

  export type business_ownerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerCreateManyInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerCreateInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutOperations_managerInput;
  };

  export type operations_managerUncheckedCreateInput = {
    id?: string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutOperations_managerNestedInput;
  };

  export type operations_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerCreateManyInput = {
    id?: string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supplierCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSupplierInput;
  };

  export type supplierUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type supplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSupplierNestedInput;
  };

  export type supplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supplierCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type supplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supply_chain_managerCreateInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutSupply_chain_managerInput;
  };

  export type supply_chain_managerUncheckedCreateInput = {
    id?: string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chain_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutSupply_chain_managerNestedInput;
  };

  export type supply_chain_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chain_managerCreateManyInput = {
    id?: string;
    department: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chain_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chain_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerCreateNestedManyWithoutUserInput;
    supplier?: supplierCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerUncheckedCreateNestedManyWithoutUserInput;
    supplier?: supplierUncheckedCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUpdateManyWithoutUserNestedInput;
    supplier?: supplierUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUncheckedUpdateManyWithoutUserNestedInput;
    supplier?: supplierUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type business_ownerCountOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMaxOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type business_ownerMinOrderByAggregateInput = {
    id?: SortOrder;
    business_name?: SortOrder;
    business_address?: SortOrder;
    business_contact?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    address?: SortOrder;
    contact_number?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type operations_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type supplierCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type supplierMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type supplierMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type supply_chain_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type supply_chain_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type supply_chain_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type Business_ownerListRelationFilter = {
    every?: business_ownerWhereInput;
    some?: business_ownerWhereInput;
    none?: business_ownerWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type Operations_managerListRelationFilter = {
    every?: operations_managerWhereInput;
    some?: operations_managerWhereInput;
    none?: operations_managerWhereInput;
  };

  export type SupplierListRelationFilter = {
    every?: supplierWhereInput;
    some?: supplierWhereInput;
    none?: supplierWhereInput;
  };

  export type Supply_chain_managerListRelationFilter = {
    every?: supply_chain_managerWhereInput;
    some?: supply_chain_managerWhereInput;
    none?: supply_chain_managerWhereInput;
  };

  export type business_ownerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type operations_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type supplierOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type supply_chain_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userCreateNestedOneWithoutBusiness_ownerInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type userUpdateOneRequiredWithoutBusiness_ownerNestedInput = {
    create?: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    connectOrCreate?: userCreateOrConnectWithoutBusiness_ownerInput;
    upsert?: userUpsertWithoutBusiness_ownerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBusiness_ownerInput, userUpdateWithoutBusiness_ownerInput>,
      userUncheckedUpdateWithoutBusiness_ownerInput
    >;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type userCreateNestedOneWithoutOperations_managerInput = {
    create?: XOR<userCreateWithoutOperations_managerInput, userUncheckedCreateWithoutOperations_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperations_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutOperations_managerNestedInput = {
    create?: XOR<userCreateWithoutOperations_managerInput, userUncheckedCreateWithoutOperations_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutOperations_managerInput;
    upsert?: userUpsertWithoutOperations_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutOperations_managerInput, userUpdateWithoutOperations_managerInput>,
      userUncheckedUpdateWithoutOperations_managerInput
    >;
  };

  export type userCreateNestedOneWithoutSupplierInput = {
    create?: XOR<userCreateWithoutSupplierInput, userUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupplierInput;
    connect?: userWhereUniqueInput;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type userUpdateOneRequiredWithoutSupplierNestedInput = {
    create?: XOR<userCreateWithoutSupplierInput, userUncheckedCreateWithoutSupplierInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupplierInput;
    upsert?: userUpsertWithoutSupplierInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSupplierInput, userUpdateWithoutSupplierInput>,
      userUncheckedUpdateWithoutSupplierInput
    >;
  };

  export type userCreateNestedOneWithoutSupply_chain_managerInput = {
    create?: XOR<userCreateWithoutSupply_chain_managerInput, userUncheckedCreateWithoutSupply_chain_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupply_chain_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutSupply_chain_managerNestedInput = {
    create?: XOR<userCreateWithoutSupply_chain_managerInput, userUncheckedCreateWithoutSupply_chain_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutSupply_chain_managerInput;
    upsert?: userUpsertWithoutSupply_chain_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSupply_chain_managerInput, userUpdateWithoutSupply_chain_managerInput>,
      userUncheckedUpdateWithoutSupply_chain_managerInput
    >;
  };

  export type business_ownerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type operations_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>
      | operations_managerCreateWithoutUserInput[]
      | operations_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_managerCreateOrConnectWithoutUserInput
      | operations_managerCreateOrConnectWithoutUserInput[];
    createMany?: operations_managerCreateManyUserInputEnvelope;
    connect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
  };

  export type supplierCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>
      | supplierCreateWithoutUserInput[]
      | supplierUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supplierCreateOrConnectWithoutUserInput | supplierCreateOrConnectWithoutUserInput[];
    createMany?: supplierCreateManyUserInputEnvelope;
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
  };

  export type supply_chain_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>
      | supply_chain_managerCreateWithoutUserInput[]
      | supply_chain_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | supply_chain_managerCreateOrConnectWithoutUserInput
      | supply_chain_managerCreateOrConnectWithoutUserInput[];
    createMany?: supply_chain_managerCreateManyUserInputEnvelope;
    connect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
  };

  export type business_ownerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type operations_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>
      | operations_managerCreateWithoutUserInput[]
      | operations_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_managerCreateOrConnectWithoutUserInput
      | operations_managerCreateOrConnectWithoutUserInput[];
    createMany?: operations_managerCreateManyUserInputEnvelope;
    connect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
  };

  export type supplierUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>
      | supplierCreateWithoutUserInput[]
      | supplierUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supplierCreateOrConnectWithoutUserInput | supplierCreateOrConnectWithoutUserInput[];
    createMany?: supplierCreateManyUserInputEnvelope;
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
  };

  export type supply_chain_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>
      | supply_chain_managerCreateWithoutUserInput[]
      | supply_chain_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | supply_chain_managerCreateOrConnectWithoutUserInput
      | supply_chain_managerCreateOrConnectWithoutUserInput[];
    createMany?: supply_chain_managerCreateManyUserInputEnvelope;
    connect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
  };

  export type business_ownerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type operations_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>
      | operations_managerCreateWithoutUserInput[]
      | operations_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_managerCreateOrConnectWithoutUserInput
      | operations_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | operations_managerUpsertWithWhereUniqueWithoutUserInput
      | operations_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operations_managerCreateManyUserInputEnvelope;
    set?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    disconnect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    delete?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    connect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    update?:
      | operations_managerUpdateWithWhereUniqueWithoutUserInput
      | operations_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | operations_managerUpdateManyWithWhereWithoutUserInput
      | operations_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operations_managerScalarWhereInput | operations_managerScalarWhereInput[];
  };

  export type supplierUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>
      | supplierCreateWithoutUserInput[]
      | supplierUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supplierCreateOrConnectWithoutUserInput | supplierCreateOrConnectWithoutUserInput[];
    upsert?: supplierUpsertWithWhereUniqueWithoutUserInput | supplierUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supplierCreateManyUserInputEnvelope;
    set?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    disconnect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    delete?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    update?: supplierUpdateWithWhereUniqueWithoutUserInput | supplierUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: supplierUpdateManyWithWhereWithoutUserInput | supplierUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supplierScalarWhereInput | supplierScalarWhereInput[];
  };

  export type supply_chain_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>
      | supply_chain_managerCreateWithoutUserInput[]
      | supply_chain_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | supply_chain_managerCreateOrConnectWithoutUserInput
      | supply_chain_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | supply_chain_managerUpsertWithWhereUniqueWithoutUserInput
      | supply_chain_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supply_chain_managerCreateManyUserInputEnvelope;
    set?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    disconnect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    delete?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    connect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    update?:
      | supply_chain_managerUpdateWithWhereUniqueWithoutUserInput
      | supply_chain_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | supply_chain_managerUpdateManyWithWhereWithoutUserInput
      | supply_chain_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supply_chain_managerScalarWhereInput | supply_chain_managerScalarWhereInput[];
  };

  export type business_ownerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>
      | business_ownerCreateWithoutUserInput[]
      | business_ownerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: business_ownerCreateOrConnectWithoutUserInput | business_ownerCreateOrConnectWithoutUserInput[];
    upsert?:
      | business_ownerUpsertWithWhereUniqueWithoutUserInput
      | business_ownerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: business_ownerCreateManyUserInputEnvelope;
    set?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    disconnect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    delete?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    connect?: business_ownerWhereUniqueInput | business_ownerWhereUniqueInput[];
    update?:
      | business_ownerUpdateWithWhereUniqueWithoutUserInput
      | business_ownerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | business_ownerUpdateManyWithWhereWithoutUserInput
      | business_ownerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type operations_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>
      | operations_managerCreateWithoutUserInput[]
      | operations_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | operations_managerCreateOrConnectWithoutUserInput
      | operations_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | operations_managerUpsertWithWhereUniqueWithoutUserInput
      | operations_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: operations_managerCreateManyUserInputEnvelope;
    set?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    disconnect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    delete?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    connect?: operations_managerWhereUniqueInput | operations_managerWhereUniqueInput[];
    update?:
      | operations_managerUpdateWithWhereUniqueWithoutUserInput
      | operations_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | operations_managerUpdateManyWithWhereWithoutUserInput
      | operations_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: operations_managerScalarWhereInput | operations_managerScalarWhereInput[];
  };

  export type supplierUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>
      | supplierCreateWithoutUserInput[]
      | supplierUncheckedCreateWithoutUserInput[];
    connectOrCreate?: supplierCreateOrConnectWithoutUserInput | supplierCreateOrConnectWithoutUserInput[];
    upsert?: supplierUpsertWithWhereUniqueWithoutUserInput | supplierUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supplierCreateManyUserInputEnvelope;
    set?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    disconnect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    delete?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    connect?: supplierWhereUniqueInput | supplierWhereUniqueInput[];
    update?: supplierUpdateWithWhereUniqueWithoutUserInput | supplierUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: supplierUpdateManyWithWhereWithoutUserInput | supplierUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supplierScalarWhereInput | supplierScalarWhereInput[];
  };

  export type supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>
      | supply_chain_managerCreateWithoutUserInput[]
      | supply_chain_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | supply_chain_managerCreateOrConnectWithoutUserInput
      | supply_chain_managerCreateOrConnectWithoutUserInput[];
    upsert?:
      | supply_chain_managerUpsertWithWhereUniqueWithoutUserInput
      | supply_chain_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: supply_chain_managerCreateManyUserInputEnvelope;
    set?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    disconnect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    delete?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    connect?: supply_chain_managerWhereUniqueInput | supply_chain_managerWhereUniqueInput[];
    update?:
      | supply_chain_managerUpdateWithWhereUniqueWithoutUserInput
      | supply_chain_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | supply_chain_managerUpdateManyWithWhereWithoutUserInput
      | supply_chain_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: supply_chain_managerScalarWhereInput | supply_chain_managerScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type userCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerCreateNestedManyWithoutUserInput;
    supplier?: supplierCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBusiness_ownerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerUncheckedCreateNestedManyWithoutUserInput;
    supplier?: supplierUncheckedCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBusiness_ownerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
  };

  export type userUpsertWithoutBusiness_ownerInput = {
    update: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
    create: XOR<userCreateWithoutBusiness_ownerInput, userUncheckedCreateWithoutBusiness_ownerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBusiness_ownerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBusiness_ownerInput, userUncheckedUpdateWithoutBusiness_ownerInput>;
  };

  export type userUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUpdateManyWithoutUserNestedInput;
    supplier?: supplierUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBusiness_ownerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUncheckedUpdateManyWithoutUserNestedInput;
    supplier?: supplierUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerCreateNestedManyWithoutUserInput;
    supplier?: supplierCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerUncheckedCreateNestedManyWithoutUserInput;
    supplier?: supplierUncheckedCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUpdateManyWithoutUserNestedInput;
    supplier?: supplierUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUncheckedUpdateManyWithoutUserNestedInput;
    supplier?: supplierUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutOperations_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    supplier?: supplierCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutOperations_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    supplier?: supplierUncheckedCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutOperations_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutOperations_managerInput, userUncheckedCreateWithoutOperations_managerInput>;
  };

  export type userUpsertWithoutOperations_managerInput = {
    update: XOR<userUpdateWithoutOperations_managerInput, userUncheckedUpdateWithoutOperations_managerInput>;
    create: XOR<userCreateWithoutOperations_managerInput, userUncheckedCreateWithoutOperations_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutOperations_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutOperations_managerInput, userUncheckedUpdateWithoutOperations_managerInput>;
  };

  export type userUpdateWithoutOperations_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    supplier?: supplierUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutOperations_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    supplier?: supplierUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutSupplierInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSupplierInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerUncheckedCreateNestedManyWithoutUserInput;
    supply_chain_manager?: supply_chain_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSupplierInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSupplierInput, userUncheckedCreateWithoutSupplierInput>;
  };

  export type userUpsertWithoutSupplierInput = {
    update: XOR<userUpdateWithoutSupplierInput, userUncheckedUpdateWithoutSupplierInput>;
    create: XOR<userCreateWithoutSupplierInput, userUncheckedCreateWithoutSupplierInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSupplierInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSupplierInput, userUncheckedUpdateWithoutSupplierInput>;
  };

  export type userUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUncheckedUpdateManyWithoutUserNestedInput;
    supply_chain_manager?: supply_chain_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutSupply_chain_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerCreateNestedManyWithoutUserInput;
    supplier?: supplierCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSupply_chain_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    business_owner?: business_ownerUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    operations_manager?: operations_managerUncheckedCreateNestedManyWithoutUserInput;
    supplier?: supplierUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSupply_chain_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSupply_chain_managerInput, userUncheckedCreateWithoutSupply_chain_managerInput>;
  };

  export type userUpsertWithoutSupply_chain_managerInput = {
    update: XOR<userUpdateWithoutSupply_chain_managerInput, userUncheckedUpdateWithoutSupply_chain_managerInput>;
    create: XOR<userCreateWithoutSupply_chain_managerInput, userUncheckedCreateWithoutSupply_chain_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSupply_chain_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSupply_chain_managerInput, userUncheckedUpdateWithoutSupply_chain_managerInput>;
  };

  export type userUpdateWithoutSupply_chain_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUpdateManyWithoutUserNestedInput;
    supplier?: supplierUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSupply_chain_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    business_owner?: business_ownerUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    operations_manager?: operations_managerUncheckedUpdateManyWithoutUserNestedInput;
    supplier?: supplierUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type business_ownerCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUncheckedCreateWithoutUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerCreateOrConnectWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerCreateManyUserInputEnvelope = {
    data: business_ownerCreateManyUserInput | business_ownerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type operations_managerCreateWithoutUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_managerCreateOrConnectWithoutUserInput = {
    where: operations_managerWhereUniqueInput;
    create: XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>;
  };

  export type operations_managerCreateManyUserInputEnvelope = {
    data: operations_managerCreateManyUserInput | operations_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type supplierCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type supplierUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type supplierCreateOrConnectWithoutUserInput = {
    where: supplierWhereUniqueInput;
    create: XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>;
  };

  export type supplierCreateManyUserInputEnvelope = {
    data: supplierCreateManyUserInput | supplierCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type supply_chain_managerCreateWithoutUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chain_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supply_chain_managerCreateOrConnectWithoutUserInput = {
    where: supply_chain_managerWhereUniqueInput;
    create: XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>;
  };

  export type supply_chain_managerCreateManyUserInputEnvelope = {
    data: supply_chain_managerCreateManyUserInput | supply_chain_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type business_ownerUpsertWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    update: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
    create: XOR<business_ownerCreateWithoutUserInput, business_ownerUncheckedCreateWithoutUserInput>;
  };

  export type business_ownerUpdateWithWhereUniqueWithoutUserInput = {
    where: business_ownerWhereUniqueInput;
    data: XOR<business_ownerUpdateWithoutUserInput, business_ownerUncheckedUpdateWithoutUserInput>;
  };

  export type business_ownerUpdateManyWithWhereWithoutUserInput = {
    where: business_ownerScalarWhereInput;
    data: XOR<business_ownerUpdateManyMutationInput, business_ownerUncheckedUpdateManyWithoutUserInput>;
  };

  export type business_ownerScalarWhereInput = {
    AND?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    OR?: business_ownerScalarWhereInput[];
    NOT?: business_ownerScalarWhereInput | business_ownerScalarWhereInput[];
    id?: UuidFilter<'business_owner'> | string;
    business_name?: StringFilter<'business_owner'> | string;
    business_address?: StringFilter<'business_owner'> | string;
    business_contact?: StringFilter<'business_owner'> | string;
    user_id?: UuidFilter<'business_owner'> | string;
    created_at?: DateTimeFilter<'business_owner'> | Date | string;
    updated_at?: DateTimeFilter<'business_owner'> | Date | string;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    name?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    contact_number?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type operations_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: operations_managerWhereUniqueInput;
    update: XOR<operations_managerUpdateWithoutUserInput, operations_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<operations_managerCreateWithoutUserInput, operations_managerUncheckedCreateWithoutUserInput>;
  };

  export type operations_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: operations_managerWhereUniqueInput;
    data: XOR<operations_managerUpdateWithoutUserInput, operations_managerUncheckedUpdateWithoutUserInput>;
  };

  export type operations_managerUpdateManyWithWhereWithoutUserInput = {
    where: operations_managerScalarWhereInput;
    data: XOR<operations_managerUpdateManyMutationInput, operations_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type operations_managerScalarWhereInput = {
    AND?: operations_managerScalarWhereInput | operations_managerScalarWhereInput[];
    OR?: operations_managerScalarWhereInput[];
    NOT?: operations_managerScalarWhereInput | operations_managerScalarWhereInput[];
    id?: UuidFilter<'operations_manager'> | string;
    department?: StringFilter<'operations_manager'> | string;
    user_id?: UuidFilter<'operations_manager'> | string;
    created_at?: DateTimeFilter<'operations_manager'> | Date | string;
    updated_at?: DateTimeFilter<'operations_manager'> | Date | string;
  };

  export type supplierUpsertWithWhereUniqueWithoutUserInput = {
    where: supplierWhereUniqueInput;
    update: XOR<supplierUpdateWithoutUserInput, supplierUncheckedUpdateWithoutUserInput>;
    create: XOR<supplierCreateWithoutUserInput, supplierUncheckedCreateWithoutUserInput>;
  };

  export type supplierUpdateWithWhereUniqueWithoutUserInput = {
    where: supplierWhereUniqueInput;
    data: XOR<supplierUpdateWithoutUserInput, supplierUncheckedUpdateWithoutUserInput>;
  };

  export type supplierUpdateManyWithWhereWithoutUserInput = {
    where: supplierScalarWhereInput;
    data: XOR<supplierUpdateManyMutationInput, supplierUncheckedUpdateManyWithoutUserInput>;
  };

  export type supplierScalarWhereInput = {
    AND?: supplierScalarWhereInput | supplierScalarWhereInput[];
    OR?: supplierScalarWhereInput[];
    NOT?: supplierScalarWhereInput | supplierScalarWhereInput[];
    id?: UuidFilter<'supplier'> | string;
    description?: StringNullableFilter<'supplier'> | string | null;
    name?: StringFilter<'supplier'> | string;
    created_at?: DateTimeFilter<'supplier'> | Date | string;
    updated_at?: DateTimeFilter<'supplier'> | Date | string;
    user_id?: UuidFilter<'supplier'> | string;
    tenant_id?: StringFilter<'supplier'> | string;
  };

  export type supply_chain_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: supply_chain_managerWhereUniqueInput;
    update: XOR<supply_chain_managerUpdateWithoutUserInput, supply_chain_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<supply_chain_managerCreateWithoutUserInput, supply_chain_managerUncheckedCreateWithoutUserInput>;
  };

  export type supply_chain_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: supply_chain_managerWhereUniqueInput;
    data: XOR<supply_chain_managerUpdateWithoutUserInput, supply_chain_managerUncheckedUpdateWithoutUserInput>;
  };

  export type supply_chain_managerUpdateManyWithWhereWithoutUserInput = {
    where: supply_chain_managerScalarWhereInput;
    data: XOR<supply_chain_managerUpdateManyMutationInput, supply_chain_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type supply_chain_managerScalarWhereInput = {
    AND?: supply_chain_managerScalarWhereInput | supply_chain_managerScalarWhereInput[];
    OR?: supply_chain_managerScalarWhereInput[];
    NOT?: supply_chain_managerScalarWhereInput | supply_chain_managerScalarWhereInput[];
    id?: UuidFilter<'supply_chain_manager'> | string;
    department?: StringFilter<'supply_chain_manager'> | string;
    user_id?: UuidFilter<'supply_chain_manager'> | string;
    created_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
    updated_at?: DateTimeFilter<'supply_chain_manager'> | Date | string;
  };

  export type business_ownerCreateManyUserInput = {
    id?: string;
    business_name: string;
    business_address: string;
    business_contact: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    name: string;
    address: string;
    contact_number: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type operations_managerCreateManyUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type supplierCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type supply_chain_managerCreateManyUserInput = {
    id?: string;
    department: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type business_ownerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type business_ownerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    business_name?: StringFieldUpdateOperationsInput | string;
    business_address?: StringFieldUpdateOperationsInput | string;
    business_contact?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type operations_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supplierUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supplierUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supplierUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type supply_chain_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chain_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type supply_chain_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use business_ownerDefaultArgs instead
   */
  export type business_ownerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    business_ownerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use operations_managerDefaultArgs instead
   */
  export type operations_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    operations_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use supplierDefaultArgs instead
   */
  export type supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    supplierDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use supply_chain_managerDefaultArgs instead
   */
  export type supply_chain_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    supply_chain_managerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
