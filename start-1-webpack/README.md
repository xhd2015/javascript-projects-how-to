- install webpack,webpack-cli
- move main.js to src, move index.html to dist
  in main.js, we point index.html to absolute address
- add webpack.config.js
   note that entry must starts with '.' or use path.resolve
   note that, target must be 'electron-renderer'
- run npx webpack --config webpack.config.js
-- remove main

