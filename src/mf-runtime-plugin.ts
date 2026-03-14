/**
 * Custom MF Runtime Plugin to force ESM loading for all remotes.
 *
 * Workaround for a bug in vite-plugin-zephyr's runtime plugin:
 * Zephyr correctly detects "library_type": "module" in the REMOTE_MAP
 * but only sets `remote.entry` (the URL) without setting `remote.type = "module"`.
 * This causes the MF runtime to load remoteEntry.js via <script> tag instead of
 * dynamic import(), which fails because Vite produces ES Modules.
 */
export default function (): any {
  return {
    name: "force-esm-remote-type",
    beforeInit(args: any) {
      args.userOptions.remotes.forEach((remote: any) => {
        if (!remote.type) {
          remote.type = "module";
        }
      });
      return args;
    },
  };
}
