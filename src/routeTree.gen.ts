/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AboutImport } from './routes/about'
import { Route as MainLayoutImport } from './routes/_mainLayout'
import { Route as IndexImport } from './routes/index'
import { Route as MainLayoutUv01Import } from './routes/_mainLayout/uv01'
import { Route as MainLayoutTweenImport } from './routes/_mainLayout/tween'
import { Route as MainLayoutTexture02Import } from './routes/_mainLayout/texture02'
import { Route as MainLayoutTexture01Import } from './routes/_mainLayout/texture01'
import { Route as MainLayoutRaycaster01Import } from './routes/_mainLayout/raycaster01'
import { Route as MainLayoutNormal01Import } from './routes/_mainLayout/normal01'
import { Route as MainLayoutGltf01Import } from './routes/_mainLayout/gltf01'
import { Route as MainLayoutGeometry02Import } from './routes/_mainLayout/geometry02'
import { Route as MainLayoutGeometry01Import } from './routes/_mainLayout/geometry01'
import { Route as MainLayoutFox01Import } from './routes/_mainLayout/fox01'
import { Route as MainLayoutFirst3dImport } from './routes/_mainLayout/first3d'
import { Route as MainLayoutCenter01Import } from './routes/_mainLayout/center01'
import { Route as MainLayoutBoundingbox02Import } from './routes/_mainLayout/boundingbox02'
import { Route as MainLayoutBoundingbox01Import } from './routes/_mainLayout/boundingbox01'
import { Route as MainLayoutAssistantToolsImport } from './routes/_mainLayout/assistantTools'

// Create/Update Routes

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const MainLayoutRoute = MainLayoutImport.update({
  id: '/_mainLayout',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const MainLayoutUv01Route = MainLayoutUv01Import.update({
  id: '/uv01',
  path: '/uv01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutTweenRoute = MainLayoutTweenImport.update({
  id: '/tween',
  path: '/tween',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutTexture02Route = MainLayoutTexture02Import.update({
  id: '/texture02',
  path: '/texture02',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutTexture01Route = MainLayoutTexture01Import.update({
  id: '/texture01',
  path: '/texture01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutRaycaster01Route = MainLayoutRaycaster01Import.update({
  id: '/raycaster01',
  path: '/raycaster01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutNormal01Route = MainLayoutNormal01Import.update({
  id: '/normal01',
  path: '/normal01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutGltf01Route = MainLayoutGltf01Import.update({
  id: '/gltf01',
  path: '/gltf01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutGeometry02Route = MainLayoutGeometry02Import.update({
  id: '/geometry02',
  path: '/geometry02',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutGeometry01Route = MainLayoutGeometry01Import.update({
  id: '/geometry01',
  path: '/geometry01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutFox01Route = MainLayoutFox01Import.update({
  id: '/fox01',
  path: '/fox01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutFirst3dRoute = MainLayoutFirst3dImport.update({
  id: '/first3d',
  path: '/first3d',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutCenter01Route = MainLayoutCenter01Import.update({
  id: '/center01',
  path: '/center01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutBoundingbox02Route = MainLayoutBoundingbox02Import.update({
  id: '/boundingbox02',
  path: '/boundingbox02',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutBoundingbox01Route = MainLayoutBoundingbox01Import.update({
  id: '/boundingbox01',
  path: '/boundingbox01',
  getParentRoute: () => MainLayoutRoute,
} as any)

const MainLayoutAssistantToolsRoute = MainLayoutAssistantToolsImport.update({
  id: '/assistantTools',
  path: '/assistantTools',
  getParentRoute: () => MainLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_mainLayout': {
      id: '/_mainLayout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof MainLayoutImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/_mainLayout/assistantTools': {
      id: '/_mainLayout/assistantTools'
      path: '/assistantTools'
      fullPath: '/assistantTools'
      preLoaderRoute: typeof MainLayoutAssistantToolsImport
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/boundingbox01': {
      id: '/_mainLayout/boundingbox01'
      path: '/boundingbox01'
      fullPath: '/boundingbox01'
      preLoaderRoute: typeof MainLayoutBoundingbox01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/boundingbox02': {
      id: '/_mainLayout/boundingbox02'
      path: '/boundingbox02'
      fullPath: '/boundingbox02'
      preLoaderRoute: typeof MainLayoutBoundingbox02Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/center01': {
      id: '/_mainLayout/center01'
      path: '/center01'
      fullPath: '/center01'
      preLoaderRoute: typeof MainLayoutCenter01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/first3d': {
      id: '/_mainLayout/first3d'
      path: '/first3d'
      fullPath: '/first3d'
      preLoaderRoute: typeof MainLayoutFirst3dImport
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/fox01': {
      id: '/_mainLayout/fox01'
      path: '/fox01'
      fullPath: '/fox01'
      preLoaderRoute: typeof MainLayoutFox01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/geometry01': {
      id: '/_mainLayout/geometry01'
      path: '/geometry01'
      fullPath: '/geometry01'
      preLoaderRoute: typeof MainLayoutGeometry01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/geometry02': {
      id: '/_mainLayout/geometry02'
      path: '/geometry02'
      fullPath: '/geometry02'
      preLoaderRoute: typeof MainLayoutGeometry02Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/gltf01': {
      id: '/_mainLayout/gltf01'
      path: '/gltf01'
      fullPath: '/gltf01'
      preLoaderRoute: typeof MainLayoutGltf01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/normal01': {
      id: '/_mainLayout/normal01'
      path: '/normal01'
      fullPath: '/normal01'
      preLoaderRoute: typeof MainLayoutNormal01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/raycaster01': {
      id: '/_mainLayout/raycaster01'
      path: '/raycaster01'
      fullPath: '/raycaster01'
      preLoaderRoute: typeof MainLayoutRaycaster01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/texture01': {
      id: '/_mainLayout/texture01'
      path: '/texture01'
      fullPath: '/texture01'
      preLoaderRoute: typeof MainLayoutTexture01Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/texture02': {
      id: '/_mainLayout/texture02'
      path: '/texture02'
      fullPath: '/texture02'
      preLoaderRoute: typeof MainLayoutTexture02Import
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/tween': {
      id: '/_mainLayout/tween'
      path: '/tween'
      fullPath: '/tween'
      preLoaderRoute: typeof MainLayoutTweenImport
      parentRoute: typeof MainLayoutImport
    }
    '/_mainLayout/uv01': {
      id: '/_mainLayout/uv01'
      path: '/uv01'
      fullPath: '/uv01'
      preLoaderRoute: typeof MainLayoutUv01Import
      parentRoute: typeof MainLayoutImport
    }
  }
}

// Create and export the route tree

interface MainLayoutRouteChildren {
  MainLayoutAssistantToolsRoute: typeof MainLayoutAssistantToolsRoute
  MainLayoutBoundingbox01Route: typeof MainLayoutBoundingbox01Route
  MainLayoutBoundingbox02Route: typeof MainLayoutBoundingbox02Route
  MainLayoutCenter01Route: typeof MainLayoutCenter01Route
  MainLayoutFirst3dRoute: typeof MainLayoutFirst3dRoute
  MainLayoutFox01Route: typeof MainLayoutFox01Route
  MainLayoutGeometry01Route: typeof MainLayoutGeometry01Route
  MainLayoutGeometry02Route: typeof MainLayoutGeometry02Route
  MainLayoutGltf01Route: typeof MainLayoutGltf01Route
  MainLayoutNormal01Route: typeof MainLayoutNormal01Route
  MainLayoutRaycaster01Route: typeof MainLayoutRaycaster01Route
  MainLayoutTexture01Route: typeof MainLayoutTexture01Route
  MainLayoutTexture02Route: typeof MainLayoutTexture02Route
  MainLayoutTweenRoute: typeof MainLayoutTweenRoute
  MainLayoutUv01Route: typeof MainLayoutUv01Route
}

const MainLayoutRouteChildren: MainLayoutRouteChildren = {
  MainLayoutAssistantToolsRoute: MainLayoutAssistantToolsRoute,
  MainLayoutBoundingbox01Route: MainLayoutBoundingbox01Route,
  MainLayoutBoundingbox02Route: MainLayoutBoundingbox02Route,
  MainLayoutCenter01Route: MainLayoutCenter01Route,
  MainLayoutFirst3dRoute: MainLayoutFirst3dRoute,
  MainLayoutFox01Route: MainLayoutFox01Route,
  MainLayoutGeometry01Route: MainLayoutGeometry01Route,
  MainLayoutGeometry02Route: MainLayoutGeometry02Route,
  MainLayoutGltf01Route: MainLayoutGltf01Route,
  MainLayoutNormal01Route: MainLayoutNormal01Route,
  MainLayoutRaycaster01Route: MainLayoutRaycaster01Route,
  MainLayoutTexture01Route: MainLayoutTexture01Route,
  MainLayoutTexture02Route: MainLayoutTexture02Route,
  MainLayoutTweenRoute: MainLayoutTweenRoute,
  MainLayoutUv01Route: MainLayoutUv01Route,
}

const MainLayoutRouteWithChildren = MainLayoutRoute._addFileChildren(
  MainLayoutRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '': typeof MainLayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/assistantTools': typeof MainLayoutAssistantToolsRoute
  '/boundingbox01': typeof MainLayoutBoundingbox01Route
  '/boundingbox02': typeof MainLayoutBoundingbox02Route
  '/center01': typeof MainLayoutCenter01Route
  '/first3d': typeof MainLayoutFirst3dRoute
  '/fox01': typeof MainLayoutFox01Route
  '/geometry01': typeof MainLayoutGeometry01Route
  '/geometry02': typeof MainLayoutGeometry02Route
  '/gltf01': typeof MainLayoutGltf01Route
  '/normal01': typeof MainLayoutNormal01Route
  '/raycaster01': typeof MainLayoutRaycaster01Route
  '/texture01': typeof MainLayoutTexture01Route
  '/texture02': typeof MainLayoutTexture02Route
  '/tween': typeof MainLayoutTweenRoute
  '/uv01': typeof MainLayoutUv01Route
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '': typeof MainLayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/assistantTools': typeof MainLayoutAssistantToolsRoute
  '/boundingbox01': typeof MainLayoutBoundingbox01Route
  '/boundingbox02': typeof MainLayoutBoundingbox02Route
  '/center01': typeof MainLayoutCenter01Route
  '/first3d': typeof MainLayoutFirst3dRoute
  '/fox01': typeof MainLayoutFox01Route
  '/geometry01': typeof MainLayoutGeometry01Route
  '/geometry02': typeof MainLayoutGeometry02Route
  '/gltf01': typeof MainLayoutGltf01Route
  '/normal01': typeof MainLayoutNormal01Route
  '/raycaster01': typeof MainLayoutRaycaster01Route
  '/texture01': typeof MainLayoutTexture01Route
  '/texture02': typeof MainLayoutTexture02Route
  '/tween': typeof MainLayoutTweenRoute
  '/uv01': typeof MainLayoutUv01Route
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/_mainLayout': typeof MainLayoutRouteWithChildren
  '/about': typeof AboutRoute
  '/_mainLayout/assistantTools': typeof MainLayoutAssistantToolsRoute
  '/_mainLayout/boundingbox01': typeof MainLayoutBoundingbox01Route
  '/_mainLayout/boundingbox02': typeof MainLayoutBoundingbox02Route
  '/_mainLayout/center01': typeof MainLayoutCenter01Route
  '/_mainLayout/first3d': typeof MainLayoutFirst3dRoute
  '/_mainLayout/fox01': typeof MainLayoutFox01Route
  '/_mainLayout/geometry01': typeof MainLayoutGeometry01Route
  '/_mainLayout/geometry02': typeof MainLayoutGeometry02Route
  '/_mainLayout/gltf01': typeof MainLayoutGltf01Route
  '/_mainLayout/normal01': typeof MainLayoutNormal01Route
  '/_mainLayout/raycaster01': typeof MainLayoutRaycaster01Route
  '/_mainLayout/texture01': typeof MainLayoutTexture01Route
  '/_mainLayout/texture02': typeof MainLayoutTexture02Route
  '/_mainLayout/tween': typeof MainLayoutTweenRoute
  '/_mainLayout/uv01': typeof MainLayoutUv01Route
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | ''
    | '/about'
    | '/assistantTools'
    | '/boundingbox01'
    | '/boundingbox02'
    | '/center01'
    | '/first3d'
    | '/fox01'
    | '/geometry01'
    | '/geometry02'
    | '/gltf01'
    | '/normal01'
    | '/raycaster01'
    | '/texture01'
    | '/texture02'
    | '/tween'
    | '/uv01'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | ''
    | '/about'
    | '/assistantTools'
    | '/boundingbox01'
    | '/boundingbox02'
    | '/center01'
    | '/first3d'
    | '/fox01'
    | '/geometry01'
    | '/geometry02'
    | '/gltf01'
    | '/normal01'
    | '/raycaster01'
    | '/texture01'
    | '/texture02'
    | '/tween'
    | '/uv01'
  id:
    | '__root__'
    | '/'
    | '/_mainLayout'
    | '/about'
    | '/_mainLayout/assistantTools'
    | '/_mainLayout/boundingbox01'
    | '/_mainLayout/boundingbox02'
    | '/_mainLayout/center01'
    | '/_mainLayout/first3d'
    | '/_mainLayout/fox01'
    | '/_mainLayout/geometry01'
    | '/_mainLayout/geometry02'
    | '/_mainLayout/gltf01'
    | '/_mainLayout/normal01'
    | '/_mainLayout/raycaster01'
    | '/_mainLayout/texture01'
    | '/_mainLayout/texture02'
    | '/_mainLayout/tween'
    | '/_mainLayout/uv01'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  MainLayoutRoute: typeof MainLayoutRouteWithChildren
  AboutRoute: typeof AboutRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  MainLayoutRoute: MainLayoutRouteWithChildren,
  AboutRoute: AboutRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/_mainLayout",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/_mainLayout": {
      "filePath": "_mainLayout.tsx",
      "children": [
        "/_mainLayout/assistantTools",
        "/_mainLayout/boundingbox01",
        "/_mainLayout/boundingbox02",
        "/_mainLayout/center01",
        "/_mainLayout/first3d",
        "/_mainLayout/fox01",
        "/_mainLayout/geometry01",
        "/_mainLayout/geometry02",
        "/_mainLayout/gltf01",
        "/_mainLayout/normal01",
        "/_mainLayout/raycaster01",
        "/_mainLayout/texture01",
        "/_mainLayout/texture02",
        "/_mainLayout/tween",
        "/_mainLayout/uv01"
      ]
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/_mainLayout/assistantTools": {
      "filePath": "_mainLayout/assistantTools.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/boundingbox01": {
      "filePath": "_mainLayout/boundingbox01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/boundingbox02": {
      "filePath": "_mainLayout/boundingbox02.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/center01": {
      "filePath": "_mainLayout/center01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/first3d": {
      "filePath": "_mainLayout/first3d.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/fox01": {
      "filePath": "_mainLayout/fox01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/geometry01": {
      "filePath": "_mainLayout/geometry01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/geometry02": {
      "filePath": "_mainLayout/geometry02.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/gltf01": {
      "filePath": "_mainLayout/gltf01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/normal01": {
      "filePath": "_mainLayout/normal01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/raycaster01": {
      "filePath": "_mainLayout/raycaster01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/texture01": {
      "filePath": "_mainLayout/texture01.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/texture02": {
      "filePath": "_mainLayout/texture02.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/tween": {
      "filePath": "_mainLayout/tween.tsx",
      "parent": "/_mainLayout"
    },
    "/_mainLayout/uv01": {
      "filePath": "_mainLayout/uv01.tsx",
      "parent": "/_mainLayout"
    }
  }
}
ROUTE_MANIFEST_END */
