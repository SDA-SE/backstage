/*
 * Copyright 2022 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  Backend,
  authServiceFactory,
  createSpecializedBackend,
  httpAuthServiceFactory,
  httpRouterServiceFactory,
  identityServiceFactory,
  loggerServiceFactory,
  rootHttpRouterServiceFactory,
  rootLoggerServiceFactory,
  tokenManagerServiceFactory,
  userInfoServiceFactory,
} from '@backstage/backend-app-api';
import { cacheServiceFactory } from '@backstage/backend-defaults/cache';
import { databaseServiceFactory } from '@backstage/backend-defaults/database';
import { discoveryServiceFactory } from '@backstage/backend-defaults/discovery';
import { lifecycleServiceFactory } from '@backstage/backend-defaults/lifecycle';
import { permissionsServiceFactory } from '@backstage/backend-defaults/permissions';
import { rootConfigServiceFactory } from '@backstage/backend-defaults/rootConfig';
import { rootLifecycleServiceFactory } from '@backstage/backend-defaults/rootLifecycle';
import { schedulerServiceFactory } from '@backstage/backend-defaults/scheduler';
import { urlReaderServiceFactory } from '@backstage/backend-defaults/urlReader';
import { eventsServiceFactory } from '@backstage/plugin-events-node';

export const defaultServiceFactories = [
  authServiceFactory(),
  cacheServiceFactory(),
  rootConfigServiceFactory(),
  databaseServiceFactory(),
  discoveryServiceFactory(),
  httpAuthServiceFactory(),
  httpRouterServiceFactory(),
  identityServiceFactory(),
  lifecycleServiceFactory(),
  loggerServiceFactory(),
  permissionsServiceFactory(),
  rootHttpRouterServiceFactory(),
  rootLifecycleServiceFactory(),
  rootLoggerServiceFactory(),
  schedulerServiceFactory(),
  tokenManagerServiceFactory(),
  userInfoServiceFactory(),
  urlReaderServiceFactory(),
  eventsServiceFactory(),
];

/**
 * @public
 */
export function createBackend(): Backend {
  return createSpecializedBackend({ defaultServiceFactories });
}
