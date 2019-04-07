- read reference for vue-loader
https://vue-loader.vuejs.org/guide/#vue-cli

- install vue-loader, vue-template-compiler 
npm install -D vue-loader vue-template-compiler

- split configurations into two categories, one for main,another for renderer
   prepare webpack.config.main.js, tsconfig.main.json
           the target is changed to 'electron-main'
   and prepare webpack.config.renderer.js, tsconfig.renderer.json
           the target is changed to 'electron-renderer', and include d.ts files in tsconfig.renderer.json, and 

- in App.vue, add lang='ts'
