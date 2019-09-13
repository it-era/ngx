
# Build & Deployment

## Update package version

In projects/PACKAGE_NAME/package.json, update PACKAGE_VERSION string.

```json
{{
  "name": "@it-era/PACKAGE_NAME",
  "version": "PACKAGE_VERSION",
  // ...
```

## Deploy to github

In projects/PACKAGE_NAME :

```bash
git commit -am "COMMIT_MESSAGE"
git tag PACKAGE_VERSION
git push
```

## Build with ng

In root directory :

```bash
ng build PACKAGE_NAME
```

## Deploy to npm

In dist/PACKAGE_NAME :

```bash
npm publish --access=public
```
