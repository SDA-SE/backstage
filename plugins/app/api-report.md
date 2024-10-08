## API Report File for "@backstage/plugin-app"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
/// <reference types="react" />

import { AnyApiFactory } from '@backstage/frontend-plugin-api';
import { AnyExtensionDataRef } from '@backstage/frontend-plugin-api';
import { AnyRouteRefParams } from '@backstage/frontend-plugin-api';
import { AppTheme } from '@backstage/frontend-plugin-api';
import { BackstagePlugin } from '@backstage/frontend-plugin-api';
import { ComponentRef } from '@backstage/frontend-plugin-api';
import { ComponentType } from 'react';
import { ConfigurableExtensionDataRef } from '@backstage/frontend-plugin-api';
import { ExtensionDefinition } from '@backstage/frontend-plugin-api';
import { ExtensionInput } from '@backstage/frontend-plugin-api';
import { IconComponent } from '@backstage/core-plugin-api';
import { IconComponent as IconComponent_2 } from '@backstage/frontend-plugin-api';
import { JSX as JSX_2 } from 'react';
import { ReactNode } from 'react';
import { RouteRef } from '@backstage/frontend-plugin-api';
import { SignInPageProps } from '@backstage/core-plugin-api';
import { TranslationMessages } from '@backstage/frontend-plugin-api';
import { TranslationResource } from '@backstage/frontend-plugin-api';

// @public (undocumented)
const appPlugin: BackstagePlugin<
  {},
  {},
  {
    [x: `component:app/${string}`]: ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        {
          ref: ComponentRef;
          impl: ComponentType;
        },
        'core.component.component',
        {}
      >;
      inputs: {
        [x: string]: ExtensionInput<
          AnyExtensionDataRef,
          {
            optional: boolean;
            singleton: boolean;
          }
        >;
      };
      kind: 'component';
      namespace: string;
      name: string;
    }>;
    app: ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        root: ExtensionInput<
          ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>,
          {
            singleton: true;
            optional: false;
          }
        >;
      };
      kind: undefined;
      namespace: 'app';
      name: undefined;
    }>;
    'api:app/app-language': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'app-language';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'app/layout': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        nav: ExtensionInput<
          ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>,
          {
            singleton: true;
            optional: false;
          }
        >;
        content: ExtensionInput<
          ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>,
          {
            singleton: true;
            optional: false;
          }
        >;
      };
      kind: undefined;
      namespace: 'app';
      name: 'layout';
    }>;
    'app/nav': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        items: ExtensionInput<
          ConfigurableExtensionDataRef<
            {
              title: string;
              icon: IconComponent;
              routeRef: RouteRef<undefined>;
            },
            'core.nav-item.target',
            {}
          >,
          {
            singleton: false;
            optional: false;
          }
        >;
        logos: ExtensionInput<
          ConfigurableExtensionDataRef<
            {
              logoIcon?: JSX.Element | undefined;
              logoFull?: JSX.Element | undefined;
            },
            'core.nav-logo.logo-elements',
            {}
          >,
          {
            singleton: true;
            optional: true;
          }
        >;
      };
      kind: undefined;
      namespace: 'app';
      name: 'nav';
    }>;
    'app/root': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        router: ExtensionInput<
          ConfigurableExtensionDataRef<
            ComponentType<{
              children?: ReactNode;
            }>,
            'app.router.wrapper',
            {}
          >,
          {
            singleton: true;
            optional: true;
          }
        >;
        signInPage: ExtensionInput<
          ConfigurableExtensionDataRef<
            ComponentType<SignInPageProps>,
            'core.sign-in-page.component',
            {}
          >,
          {
            singleton: true;
            optional: true;
          }
        >;
        children: ExtensionInput<
          ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>,
          {
            singleton: true;
            optional: false;
          }
        >;
        elements: ExtensionInput<
          ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>,
          {
            singleton: false;
            optional: false;
          }
        >;
        wrappers: ExtensionInput<
          ConfigurableExtensionDataRef<
            ComponentType<{
              children?: ReactNode;
            }>,
            'app.root.wrapper',
            {}
          >,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: undefined;
      namespace: 'app';
      name: 'root';
    }>;
    'app/routes': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        routes: ExtensionInput<
          | ConfigurableExtensionDataRef<JSX_2.Element, 'core.reactElement', {}>
          | ConfigurableExtensionDataRef<string, 'core.routing.path', {}>
          | ConfigurableExtensionDataRef<
              RouteRef<AnyRouteRefParams>,
              'core.routing.ref',
              {
                optional: true;
              }
            >,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: undefined;
      namespace: 'app';
      name: 'routes';
    }>;
    'api:app/app-theme': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {
        themes: ExtensionInput<
          ConfigurableExtensionDataRef<AppTheme, 'core.theme.theme', {}>,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: 'api';
      namespace: undefined;
      name: 'app-theme';
    }>;
    'theme:app/light': ExtensionDefinition<{
      kind: 'theme';
      namespace: 'app';
      name: 'light';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<AppTheme, 'core.theme.theme', {}>;
      inputs: {};
    }>;
    'theme:app/dark': ExtensionDefinition<{
      kind: 'theme';
      namespace: 'app';
      name: 'dark';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<AppTheme, 'core.theme.theme', {}>;
      inputs: {};
    }>;
    'api:app/components': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {
        components: ExtensionInput<
          ConfigurableExtensionDataRef<
            {
              ref: ComponentRef;
              impl: ComponentType;
            },
            'core.component.component',
            {}
          >,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: 'api';
      namespace: undefined;
      name: 'components';
    }>;
    'api:app/icons': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {
        icons: ExtensionInput<
          ConfigurableExtensionDataRef<
            {
              [x: string]: IconComponent_2;
            },
            'core.icons',
            {}
          >,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: 'api';
      namespace: undefined;
      name: 'icons';
    }>;
    'api:app/feature-flags': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'feature-flags';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/translations': ExtensionDefinition<{
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {
        translations: ExtensionInput<
          ConfigurableExtensionDataRef<
            | TranslationResource<string>
            | TranslationMessages<
                string,
                {
                  [x: string]: string;
                },
                boolean
              >,
            'core.translation.translation',
            {}
          >,
          {
            singleton: false;
            optional: false;
          }
        >;
      };
      kind: 'api';
      namespace: undefined;
      name: 'translations';
    }>;
    'app-root-element:app/oauth-request-dialog': ExtensionDefinition<{
      kind: 'app-root-element';
      namespace: 'app';
      name: 'oauth-request-dialog';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {};
    }>;
    'app-root-element:app/alert-display': ExtensionDefinition<{
      config: {
        transientTimeoutMs: number;
        anchorOrigin: {
          horizontal: 'center' | 'left' | 'right';
          vertical: 'top' | 'bottom';
        };
      };
      configInput: {
        anchorOrigin?:
          | {
              horizontal?: 'center' | 'left' | 'right' | undefined;
              vertical?: 'top' | 'bottom' | undefined;
            }
          | undefined;
        transientTimeoutMs?: number | undefined;
      };
      output: ConfigurableExtensionDataRef<
        JSX_2.Element,
        'core.reactElement',
        {}
      >;
      inputs: {
        [x: string]: ExtensionInput<
          AnyExtensionDataRef,
          {
            optional: boolean;
            singleton: boolean;
          }
        >;
      };
      kind: 'app-root-element';
      namespace: 'app';
      name: 'alert-display';
    }>;
    'api:app/discovery': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'discovery';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/alert': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'alert';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/analytics': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'analytics';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/error': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'error';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/storage': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'storage';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/fetch': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'fetch';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/oauth-request': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'oauth-request';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/google-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'google-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/microsoft-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'microsoft-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/github-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'github-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/okta-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'okta-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/gitlab-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'gitlab-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/onelogin-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'onelogin-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/bitbucket-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'bitbucket-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/bitbucket-server-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'bitbucket-server-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/atlassian-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'atlassian-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/vmware-cloud-auth': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'vmware-cloud-auth';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
    'api:app/permission': ExtensionDefinition<{
      kind: 'api';
      namespace: undefined;
      name: 'permission';
      config: {};
      configInput: {};
      output: ConfigurableExtensionDataRef<
        AnyApiFactory,
        'core.api.factory',
        {}
      >;
      inputs: {};
    }>;
  }
>;
export default appPlugin;

// (No @packageDocumentation comment for this package)
```
