# get-file-exports

> Dynamic import for JavaScript and TypeScript files for both CommonJS and ECMAScript modules.

## Installation

```yml
# npm
npm install get-file-exports
# yarn
yarn add get-file-exports
# pnpm
pnpm add get-file-exports
```

## Usage

-   Star the [github repo](https://github.com/alexandre-fernandez/get-file-exports) 😎

```ts
import getFileExports from "get-file-exports"

const fileExports = getFileExports("/absolute/path/to/file.ts")
//    ^ { default: "foo", export1: "bar", export2: "baz" }
```
