# Development Guide
This is a guide for working on this project.

## Documentation
Developer documentation lives in the `/docs` folder. User documentation lives in the repository root, (I don't want to change it because it will break links for all extension versions published before the change).

## Project structure
|Location||
|-|-|
|`.vscode`|VS Code-related mainfests|
|`.vscodeignore`|Describes which files/directories to ignore when packaging the extension.|
|`build`|Build scripts|
|`docs`|Developer documentation|
|`out`|The build output for the typescript project.|
|`package`|The packaging output.|
|`src`|The typescript project.|
|`themes`|The build output for theme files.|

## Development
Prerequisites:
- `npm` 8.0+
- `node` 20.0+
- `pwsh` 7.0+

The extension manifest defines the following npm scripts:
- `buildTheme` - Builds the theme files.
- `buildTs` - Build the typescript project.
- `watchTs` - Watch the typescript project.
- `package` - Package the extension into an `.vsix` file.
- `publishMS` - Publish the extension to the Microsoft marketplace.
- `publishOVSX` - Publish the extension to the OpenVSX marketplace.
- `getVersion` - A script that outputs the extension's version number in a specific format for azure pipelines purposes.

### Building the extension for debugging/testing
To build the extension when developing it, use the `Run Extension` launch configuration. This will build the extension and launch the VS Code Extension Development Host with the extension preloaded.

When the Extension Host is running, after making a change to the theme script, run the `buildTheme` task. This will rebuild the theme files and the Extension Host will automatically update and reload the theme colours. This runs the `build/buildTheme.js` script, which builds the theme files according to the defined `config` type, which uses the *default* setting values. If you're working on the theme colours for a non-default setting value, modify this type to suit, **but don't** commit the changes. The type should reflect the default setting values.

### Packaging the extension (not publishing)
To package the extension locally, run the following:
1. `npm run buildTs`
2. `npm run buildTheme`
3. `./build/Pre-Package.ps1 -WorkingDirectory ./`
4. `cd ./package`
5. `npm run package`

The packaged extension will be located at `./package/theme-pink-candy-${version}.vsix`.

## ⚠ Publish a new release
- [ ] Bump the version number in `package.json`.
- [ ] Add a new entry to the changelog with the date of release.
- [ ] If bumping minimum supported VS Code version, update the number in `package.json` and make a prominent node in the changelog entry `Changed` section.

## ⚠ Adding a new root file/directory
When adding a new file or directory at the repository root, make sure to update `/build/Pre-Package.ps1` to add it to the exclusion list.

## Adding a new setting
- [ ] Define the new key within the `package.json` extension manifest.
- [ ] Add a new field within the `Config` type, update the constructor, and add any relevant type/validation.
- [ ] Update `Config.DEFAULT` to take the default value of the new setting (should match the extension manifest).
- [ ] Update the default config type within `theme.js` to have the new field with the default value (should match the extension manifest).
- [ ] Add a comparison check for the new field within the `isModified()` method.
- [ ] Update the `getConfig()` function to read the new setting's value.
- [ ] Add the new setting to the `resetConfig()` function.
- [ ] Add a new subsection to `/Configuration.md`.

## Adding a new setting that deprecates an existing setting
- [ ] Define the new key within the `package.json` extension manifest. In the description mention that this new setting overrides the existing setting.
- [ ] Add a deprecation message to the existing setting.
- [ ] Decide on how the old setting migrates to the new setting.
- [ ] Replace the existing field within `Config` type with a new field, update the constructor, and add any relevant type/validation.
- [ ] Update `Config.DEFAULT` to remove the deprecated setting and take the default value of the new setting (should match the extension manifest).
- [ ] Update the default config type within `theme.js` to remove the old field and add the new field with the default value (should match the extension manifest).
- [ ] Replace the comparison check within `isModified()` from the old field to the new field.
- [ ] Before the comparison check, add the migration logic from the old field to the new field.
- [ ] Update the `getConfig()` function to read the new setting's value, and update the existing code that reads the deprecated setting to work according to the defined migration.
- [ ] Add the new setting to the `resetConfig()` function. **Don't remove** the deprecated setting.
- [ ] Replace the existing subsection in `/Configuration.md` to explain the new setting. Include a note as to how the deprecated setting is migrated to the new one.