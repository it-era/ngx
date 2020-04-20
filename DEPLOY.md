# Build & Deployment

## Update package version

In projects/PACKAGE_NAME/package.json, update PACKAGE_VERSION string.

```json
{
  "name": "@it-era/PACKAGE_NAME",
  "version": "PACKAGE_VERSION"
  // ...
}
```

## Deploy to github

In projects/PACKAGE_NAME, update CHANGELOG.md to reflect last changes, then :

```sh
git commit -am "COMMIT_MESSAGE"
git tag PACKAGE_VERSION
git push --tags
```

## Build with ng

In root directory :

```sh
ng build PACKAGE_NAME
```

or if ng is unavailable :

```sh
npx @angular/cli build ngx-safe-pipes
```

## Deploy to npm

In dist/PACKAGE_NAME :

```sh
npm publish --access=public
```
