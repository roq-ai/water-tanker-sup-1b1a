/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import { Fetcher, SWRConfiguration } from 'swr';
import type {
  Prisma,
  business_owner,
  customer,
  operations_manager,
  supplier,
  supply_chain_manager,
  user,
} from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;
export type SWRRequestOptions<Result, Error = any> = {
  disabled?: boolean;
  initialData?: Result;
} & SWRConfiguration<Result, Error, Fetcher<Result>>;

export const defaultEndpoint = process.env.NEXT_PUBLIC_API_URL || process.env.API_URL;

interface Business_ownerSDK {
  create: <
    T extends Prisma.business_ownerCreateArgs,
    R extends CheckSelect<T, business_owner, Prisma.business_ownerGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.business_ownerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.business_ownerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.business_ownerUpdateArgs, R extends Prisma.business_ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.business_ownerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.business_ownerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.business_ownerUpsertArgs, R extends Prisma.business_ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.business_ownerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.business_ownerDeleteArgs, R extends Prisma.business_ownerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.business_ownerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.business_ownerFindManyArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.business_ownerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.business_ownerFindManyArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.business_ownerFindFirstArgs,
    R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface CustomerSDK {
  create: <T extends Prisma.customerCreateArgs, R extends CheckSelect<T, customer, Prisma.customerGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.customerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.customerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.customerUpdateArgs, R extends Prisma.customerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.customerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.customerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.customerUpsertArgs, R extends Prisma.customerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.customerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.customerDeleteArgs, R extends Prisma.customerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.customerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.customerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.customerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.customerFindManyArgs, R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.customerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.customerFindManyArgs,
    R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.customerFindFirstArgs, R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Operations_managerSDK {
  create: <
    T extends Prisma.operations_managerCreateArgs,
    R extends CheckSelect<T, operations_manager, Prisma.operations_managerGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.operations_managerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.operations_managerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.operations_managerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.operations_managerUpdateArgs, R extends Prisma.operations_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.operations_managerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.operations_managerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.operations_managerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.operations_managerUpsertArgs, R extends Prisma.operations_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.operations_managerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.operations_managerDeleteArgs, R extends Prisma.operations_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.operations_managerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.operations_managerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.operations_managerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.operations_managerFindManyArgs,
    R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.operations_managerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.operations_managerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.operations_managerFindManyArgs,
    R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.operations_managerFindFirstArgs,
    R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.operations_managerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface SupplierSDK {
  create: <T extends Prisma.supplierCreateArgs, R extends CheckSelect<T, supplier, Prisma.supplierGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.supplierCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.supplierCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.supplierUpdateArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.supplierUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.supplierUpsertArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.supplierDeleteArgs, R extends Prisma.supplierGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supplierDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.supplierDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supplierDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.supplierFindManyArgs, R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.supplierCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.supplierCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.supplierFindManyArgs,
    R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.supplierFindFirstArgs, R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.supplierFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Supply_chain_managerSDK {
  create: <
    T extends Prisma.supply_chain_managerCreateArgs,
    R extends CheckSelect<T, supply_chain_manager, Prisma.supply_chain_managerGetPayload<T>>,
  >(
    data: Prisma.SelectSubset<T, Prisma.supply_chain_managerCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.supply_chain_managerCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.supply_chain_managerUpdateArgs, R extends Prisma.supply_chain_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.supply_chain_managerUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.supply_chain_managerUpsertArgs, R extends Prisma.supply_chain_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.supply_chain_managerDeleteArgs, R extends Prisma.supply_chain_managerGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.supply_chain_managerDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.supply_chain_managerDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.supply_chain_managerFindManyArgs,
    R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[],
  >(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.supply_chain_managerCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.supply_chain_managerFindManyArgs,
    R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.supply_chain_managerFindFirstArgs,
    R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <T extends Prisma.userCreateArgs, R extends CheckSelect<T, user, Prisma.userGetPayload<T>>>(
    data: Prisma.SelectSubset<T, Prisma.userCreateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqClient {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public business_owner: Business_ownerSDK;

  public customer: CustomerSDK;

  public operations_manager: Operations_managerSDK;

  public supplier: SupplierSDK;

  public supply_chain_manager: Supply_chain_managerSDK;

  public user: UserSDK;

  constructor(endpoint: string = defaultEndpoint, baseOptions: RequestOptions = {}) {
    this.endpoint = endpoint;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.business_owner = {
      create: async function createBusiness_owner<
        T extends Prisma.business_ownerCreateArgs,
        R extends CheckSelect<T, business_owner, Prisma.business_ownerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyBusiness_owner<
        T extends Prisma.business_ownerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business_owner/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateBusiness_owner<
        T extends Prisma.business_ownerUpdateArgs,
        R extends Prisma.business_ownerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyBusiness_owner<
        T extends Prisma.business_ownerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/business_owner/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertBusiness_owner<
        T extends Prisma.business_ownerUpsertArgs,
        R extends Prisma.business_ownerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/business_owner/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteBusiness_owner<
        T extends Prisma.business_ownerDeleteArgs,
        R extends Prisma.business_ownerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyBusiness_owner<
        T extends Prisma.business_ownerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.business_ownerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyBusiness_owner<
        T extends Prisma.business_ownerFindManyArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countBusiness_owner<T extends Prisma.business_ownerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/business_owner/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountBusiness_owner<
        T extends Prisma.business_ownerFindManyArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.business_owner.findMany(args, options),
          ctx.business_owner.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstBusiness_owner<
        T extends Prisma.business_ownerFindFirstArgs,
        R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/business_owner/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.customer = {
      create: async function createCustomer<
        T extends Prisma.customerCreateArgs,
        R extends CheckSelect<T, customer, Prisma.customerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.customerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyCustomer<
        T extends Prisma.customerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/customer/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateCustomer<
        T extends Prisma.customerUpdateArgs,
        R extends Prisma.customerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.customerUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyCustomer<
        T extends Prisma.customerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/customer/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertCustomer<
        T extends Prisma.customerUpsertArgs,
        R extends Prisma.customerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.customerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/customer/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteCustomer<
        T extends Prisma.customerDeleteArgs,
        R extends Prisma.customerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.customerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyCustomer<
        T extends Prisma.customerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.customerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyCustomer<
        T extends Prisma.customerFindManyArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countCustomer<T extends Prisma.customerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/customer/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountCustomer<
        T extends Prisma.customerFindManyArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.customer.findMany(args, options),
          ctx.customer.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstCustomer<
        T extends Prisma.customerFindFirstArgs,
        R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/customer/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.operations_manager = {
      create: async function createOperations_manager<
        T extends Prisma.operations_managerCreateArgs,
        R extends CheckSelect<T, operations_manager, Prisma.operations_managerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/operations_manager/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyOperations_manager<
        T extends Prisma.operations_managerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/operations_manager/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateOperations_manager<
        T extends Prisma.operations_managerUpdateArgs,
        R extends Prisma.operations_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/operations_manager/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyOperations_manager<
        T extends Prisma.operations_managerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/operations_manager/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertOperations_manager<
        T extends Prisma.operations_managerUpsertArgs,
        R extends Prisma.operations_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/operations_manager/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteOperations_manager<
        T extends Prisma.operations_managerDeleteArgs,
        R extends Prisma.operations_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/operations_manager/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyOperations_manager<
        T extends Prisma.operations_managerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.operations_managerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/operations_manager/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyOperations_manager<
        T extends Prisma.operations_managerFindManyArgs,
        R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/operations_manager/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countOperations_manager<T extends Prisma.operations_managerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.operations_managerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/operations_manager/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountOperations_manager<
        T extends Prisma.operations_managerFindManyArgs,
        R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.operations_manager.findMany(args, options),
          ctx.operations_manager.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstOperations_manager<
        T extends Prisma.operations_managerFindFirstArgs,
        R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.operations_managerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/operations_manager/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.supplier = {
      create: async function createSupplier<
        T extends Prisma.supplierCreateArgs,
        R extends CheckSelect<T, supplier, Prisma.supplierGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManySupplier<
        T extends Prisma.supplierCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supplier/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateSupplier<
        T extends Prisma.supplierUpdateArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManySupplier<
        T extends Prisma.supplierUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supplier/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertSupplier<
        T extends Prisma.supplierUpsertArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supplier/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteSupplier<
        T extends Prisma.supplierDeleteArgs,
        R extends Prisma.supplierGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supplierDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManySupplier<
        T extends Prisma.supplierDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supplierDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManySupplier<
        T extends Prisma.supplierFindManyArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countSupplier<T extends Prisma.supplierCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.supplierCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/supplier/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountSupplier<
        T extends Prisma.supplierFindManyArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.supplier.findMany(args, options),
          ctx.supplier.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstSupplier<
        T extends Prisma.supplierFindFirstArgs,
        R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.supplierFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supplier/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.supply_chain_manager = {
      create: async function createSupply_chain_manager<
        T extends Prisma.supply_chain_managerCreateArgs,
        R extends CheckSelect<T, supply_chain_manager, Prisma.supply_chain_managerGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supply_chain_manager/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManySupply_chain_manager<
        T extends Prisma.supply_chain_managerCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supply_chain_manager/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateSupply_chain_manager<
        T extends Prisma.supply_chain_managerUpdateArgs,
        R extends Prisma.supply_chain_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpdateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supply_chain_manager/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManySupply_chain_manager<
        T extends Prisma.supply_chain_managerUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/supply_chain_manager/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertSupply_chain_manager<
        T extends Prisma.supply_chain_managerUpsertArgs,
        R extends Prisma.supply_chain_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/supply_chain_manager/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteSupply_chain_manager<
        T extends Prisma.supply_chain_managerDeleteArgs,
        R extends Prisma.supply_chain_managerGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supply_chain_manager/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManySupply_chain_manager<
        T extends Prisma.supply_chain_managerDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.supply_chain_managerDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supply_chain_manager/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManySupply_chain_manager<
        T extends Prisma.supply_chain_managerFindManyArgs,
        R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supply_chain_manager/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countSupply_chain_manager<T extends Prisma.supply_chain_managerCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.supply_chain_managerCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/supply_chain_manager/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountSupply_chain_manager<
        T extends Prisma.supply_chain_managerFindManyArgs,
        R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.supply_chain_manager.findMany(args, options),
          ctx.supply_chain_manager.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstSupply_chain_manager<
        T extends Prisma.supply_chain_managerFindFirstArgs,
        R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/supply_chain_manager/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
      >(data: Prisma.SelectSubset<T, Prisma.userCreateArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<T extends Prisma.userUpdateArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              distinct,
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
