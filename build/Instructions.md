# Build Instructions

Prerequisites:

- `npm` 8.0.0+
- `node` 10.0.0+
- Powershell Core 7.0.0+

To build the extension locally, navigate to the root of the repo and run the following commands:

```powershell
# Inside powershell

npm run buildTheme
.\build\build.ps1 -WorkingDirectory .\
cd .\publish
npm run package
```

The built extension will be located in the `.\publish` folder.
