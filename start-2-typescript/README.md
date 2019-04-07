
- install typescript,ts-loader,tslint,tslint-loader, babel-core,babel-loader
follow steps described by https://webpack.js.org/guides/typescript/

- add tsconfig.json
add jsx, outDir, module,target, allowJs,noImplicitAny 

add exclude to node_modules
add files to index '.d.ts', NOTE: this is quite important,you cannot import other modules if you  do not specify .d.ts

- in webpack.config.js,change src/main.js to src/main.ts, and add related rules
 note:  .ts should use tslint-loader


- rename main.js to main.ts
fix typescript syntax warnings and errors，including add types and fix semicolons
