# Loan Calculator - Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Recommended Node.js Version

The recommended version of Node.js for this project is 16+. You can download the latest version of Node.js from the [official website](https://nodejs.org/en/download/).

## Running the App

To run the app, follow these steps:

1. Install dependencies by running `npm install` or `yarn install`.
2. Start the development server by running `npm run dev` or `yarn dev`.
3. Open your browser and navigate to `http://localhost:5173`.

## Building the App

To build the app for production, follow these steps:

1. Install dependencies by running `npm install` or `yarn install`.
2. Build the app by running `npm run build` or `yarn build`.
3. The built app will be located in the `dist` directory.

**Note:** Running the build will also run tests. If tests fail, the build will fail.

## Running Tests

To run tests, follow these steps:

1. Install dependencies by running `npm install` or `yarn install`.
2. Run tests by running `npm run test` or `yarn test`.
