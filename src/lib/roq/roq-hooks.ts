/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions, RequestOptions } from './roq-sdk';

export function useBusinessOwnerFindMany<
  T extends Prisma.business_ownerFindManyArgs,
  R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerCount<T extends Prisma.business_ownerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerFindManyWithCount<
  T extends Prisma.business_ownerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useBusinessOwnerFindFirst<
  T extends Prisma.business_ownerFindFirstArgs,
  R extends GetFindResult<Prisma.$business_ownerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.business_ownerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useBusinessOwnerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.business_owner.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindMany<
  T extends Prisma.customerFindManyArgs,
  R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerCount<T extends Prisma.customerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.customerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindManyWithCount<
  T extends Prisma.customerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useCustomerFindFirst<
  T extends Prisma.customerFindFirstArgs,
  R extends GetFindResult<Prisma.$customerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.customerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useCustomerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.customer.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOperationsManagerFindMany<
  T extends Prisma.operations_managerFindManyArgs,
  R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOperationsManagerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.operations_manager.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOperationsManagerCount<T extends Prisma.operations_managerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.operations_managerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOperationsManagerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.operations_manager.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOperationsManagerFindManyWithCount<
  T extends Prisma.operations_managerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.operations_managerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOperationsManagerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.operations_manager.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useOperationsManagerFindFirst<
  T extends Prisma.operations_managerFindFirstArgs,
  R extends GetFindResult<Prisma.$operations_managerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.operations_managerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useOperationsManagerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.operations_manager.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplierFindMany<
  T extends Prisma.supplierFindManyArgs,
  R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplierFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supplier.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplierCount<T extends Prisma.supplierCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.supplierCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplierCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supplier.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplierFindManyWithCount<
  T extends Prisma.supplierFindManyArgs,
  R extends { data: GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.supplierFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplierFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supplier.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplierFindFirst<
  T extends Prisma.supplierFindFirstArgs,
  R extends GetFindResult<Prisma.$supplierPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.supplierFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplierFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supplier.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplyChainManagerFindMany<
  T extends Prisma.supply_chain_managerFindManyArgs,
  R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplyChainManagerFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supply_chain_manager.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplyChainManagerCount<T extends Prisma.supply_chain_managerCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplyChainManagerCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supply_chain_manager.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplyChainManagerFindManyWithCount<
  T extends Prisma.supply_chain_managerFindManyArgs,
  R extends { data: GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplyChainManagerFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supply_chain_manager.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useSupplyChainManagerFindFirst<
  T extends Prisma.supply_chain_managerFindFirstArgs,
  R extends GetFindResult<Prisma.$supply_chain_managerPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.supply_chain_managerFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useSupplyChainManagerFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.supply_chain_manager.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
