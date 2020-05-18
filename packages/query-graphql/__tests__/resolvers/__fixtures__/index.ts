import { Class } from '@nestjs-query/core';
import { resolve } from 'path';
import { instance, mock } from 'ts-mockito';
import { Test } from '@nestjs/testing';
import { readGraphql } from '../../__fixtures__';
import { TestService } from './test-resolver.service';

export { TestResolverDTO } from './test-resolver.dto';
export { TestResolverInputDTO } from './test-resolver-input.dto';
export { TestService } from './test-resolver.service';

interface ResolverMock<T> {
  resolver: T;
  mockService: TestService;
}

export const createResolverFromNest = async <T>(ResolverClass: Class<T>): Promise<ResolverMock<T>> => {
  const mockService = mock(TestService);
  const moduleRef = await Test.createTestingModule({
    providers: [ResolverClass, TestService],
  })
    .overrideProvider(TestService)
    .useValue(instance(mockService))
    .compile();
  return { resolver: moduleRef.get(ResolverClass), mockService };
};

export const deleteBasicResolverSDL = readGraphql(resolve(__dirname, 'delete', 'delete-basic.resolver.graphql'));
export const deleteDisabledResolverSDL = readGraphql(resolve(__dirname, 'delete', 'delete-disabled.resolver.graphql'));
export const deleteOneDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'delete', 'delete-one-disabled.resolver.graphql'),
);
export const deleteManyDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'delete', 'delete-many-disabled.resolver.graphql'),
);
export const deleteCustomNameResolverSDL = readGraphql(
  resolve(__dirname, 'delete', 'delete-custom-name.resolver.graphql'),
);
export const deleteCustomOneInputResolverSDL = readGraphql(
  resolve(__dirname, 'delete', 'delete-custom-one-input.resolver.graphql'),
);
export const deleteCustomManyInputResolverSDL = readGraphql(
  resolve(__dirname, 'delete', 'delete-custom-many-input.resolver.graphql'),
);

export const createBasicResolverSDL = readGraphql(resolve(__dirname, 'create', 'create-basic.resolver.graphql'));
export const createDisabledResolverSDL = readGraphql(resolve(__dirname, 'create', 'create-disabled.resolver.graphql'));
export const createOneDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-one-disabled.resolver.graphql'),
);
export const createManyDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-many-disabled.resolver.graphql'),
);
export const createCustomNameResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-custom-name.resolver.graphql'),
);
export const createCustomDTOResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-custom-dto.resolver.graphql'),
);
export const createCustomOneInputResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-custom-one-input.resolver.graphql'),
);
export const createCustomManyInputResolverSDL = readGraphql(
  resolve(__dirname, 'create', 'create-custom-many-input.resolver.graphql'),
);

export const readBasicResolverSDL = readGraphql(resolve(__dirname, 'read', 'read-basic.resolver.graphql'));
export const readDisabledResolverSDL = readGraphql(resolve(__dirname, 'read', 'read-disabled.resolver.graphql'));
export const readOneDisabledResolverSDL = readGraphql(resolve(__dirname, 'read', 'read-one-disabled.resolver.graphql'));
export const readManyDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'read', 'read-many-disabled.resolver.graphql'),
);
export const readCustomNameResolverSDL = readGraphql(resolve(__dirname, 'read', 'read-custom-name.resolver.graphql'));
export const readCustomConnectionResolverSDL = readGraphql(
  resolve(__dirname, 'read', 'read-custom-connection.resolver.graphql'),
);
export const readCustomQueryResolverSDL = readGraphql(resolve(__dirname, 'read', 'read-custom-query.resolver.graphql'));

export const updateBasicResolverSDL = readGraphql(resolve(__dirname, 'update', 'update-basic.resolver.graphql'));
export const updateDisabledResolverSDL = readGraphql(resolve(__dirname, 'update', 'update-disabled.resolver.graphql'));
export const updateOneDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-one-disabled.resolver.graphql'),
);
export const updateManyDisabledResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-many-disabled.resolver.graphql'),
);
export const updateCustomNameResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-custom-name.resolver.graphql'),
);
export const updateCustomDTOResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-custom-dto.resolver.graphql'),
);
export const updateCustomOneInputResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-custom-one-input.resolver.graphql'),
);
export const updateCustomManyInputResolverSDL = readGraphql(
  resolve(__dirname, 'update', 'update-custom-many-input.resolver.graphql'),
);

export const referenceBasicResolverSDL = readGraphql(
  resolve(__dirname, 'reference', 'reference-basic.resolver.graphql'),
);
