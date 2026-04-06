
// Windows temporarily needs this file, https://github.com/module-federation/vite/issues/68

    import {loadShare} from "@module-federation/runtime";
    const importMap = {
      
        "@tanstack/react-query": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild___mf_0_tanstack_mf_1_react_mf_2_query__prebuild__.js");
            return pkg;
        }
      ,
        "@tanstack/react-table": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild___mf_0_tanstack_mf_1_react_mf_2_table__prebuild__.js");
            return pkg;
        }
      ,
        "appwrite": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild__appwrite__prebuild__.js");
            return pkg;
        }
      ,
        "react": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild__react__prebuild__.js");
            return pkg;
        }
      ,
        "react-dom": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild__react_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "react-router-dom": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild__react_mf_2_router_mf_2_dom__prebuild__.js");
            return pkg;
        }
      ,
        "zustand": async () => {
          let pkg = await import("__mf__virtual/farms_mf_2_fiap_mf_2_host__prebuild__zustand__prebuild__.js");
            return pkg;
        }
      
    }
      const usedShared = {
      
          "@tanstack/react-query": {
            name: "@tanstack/react-query",
            version: "5.90.21",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@tanstack/react-query"}' must be provided by host`);
              }
              usedShared["@tanstack/react-query"].loaded = true
              const {"@tanstack/react-query": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^5.90.21",
              
            }
          }
        ,
          "@tanstack/react-table": {
            name: "@tanstack/react-table",
            version: "8.21.3",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"@tanstack/react-table"}' must be provided by host`);
              }
              usedShared["@tanstack/react-table"].loaded = true
              const {"@tanstack/react-table": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^8.21.3",
              
            }
          }
        ,
          "appwrite": {
            name: "appwrite",
            version: "20.1.0",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"appwrite"}' must be provided by host`);
              }
              usedShared["appwrite"].loaded = true
              const {"appwrite": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^20.1.0",
              
            }
          }
        ,
          "react": {
            name: "react",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react"}' must be provided by host`);
              }
              usedShared["react"].loaded = true
              const {"react": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.0.0",
              
            }
          }
        ,
          "react-dom": {
            name: "react-dom",
            version: "19.2.4",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-dom"}' must be provided by host`);
              }
              usedShared["react-dom"].loaded = true
              const {"react-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^19.0.0",
              
            }
          }
        ,
          "react-router-dom": {
            name: "react-router-dom",
            version: "7.13.1",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"react-router-dom"}' must be provided by host`);
              }
              usedShared["react-router-dom"].loaded = true
              const {"react-router-dom": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^7.13.1",
              
            }
          }
        ,
          "zustand": {
            name: "zustand",
            version: "5.0.11",
            scope: ["default"],
            loaded: false,
            from: "farms-fiap-host",
            async get () {
              if (false) {
                throw new Error(`Shared module '${"zustand"}' must be provided by host`);
              }
              usedShared["zustand"].loaded = true
              const {"zustand": pkgDynamicImport} = importMap
              const res = await pkgDynamicImport()
              const exportModule = {...res}
              // All npm packages pre-built by vite will be converted to esm
              Object.defineProperty(exportModule, "__esModule", {
                value: true,
                enumerable: false
              })
              return function () {
                return exportModule
              }
            },
            shareConfig: {
              singleton: true,
              requiredVersion: "^5.0.11",
              
            }
          }
        
    }
      const usedRemotes = [
                {
                  entryGlobalName: "dashboard",
                  name: "dashboard",
                  type: "module",
                  entry: "http://localhost:5001/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "sales",
                  name: "sales",
                  type: "module",
                  entry: "http://localhost:5003/remoteEntry.js",
                  shareScope: "default",
                }
          ,
                {
                  entryGlobalName: "goals",
                  name: "goals",
                  type: "module",
                  entry: "http://localhost:5004/remoteEntry.js",
                  shareScope: "default",
                }
          
      ]
      export {
        usedShared,
        usedRemotes
      }
      