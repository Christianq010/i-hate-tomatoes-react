## Contents of the lessons

1. Create directory and run `init npm`.
2. Webpack
### Setting up Webpack
_Globally_ 
```
sudo npm -g i webpack
```
_Local project_
```
sudo npm i D webpack
```
 * View webpack versions with `npm viewwebpack versions --json`  

 * Run Webpack in terminal with
 ```
 webpack ./src/app.js ./dist/app.bundle.js
 ```
 _for minified code(-p) and watched(--watch)_
 ```
 webpack ./src/app.js ./dist/app.bundle.js -p --watch
 ```
 * Create `webpack.config.js` to configure webpack.
 * Write test script in `package.json`.
 ```
 dev": "webpack -d --watch" 
 ```
 ### Config HTML, CSS
 * Run `npm run dev` to run new script.
 * Add the [HTMl plug in](https://github.com/jantimon/html-webpack-plugin) to the project, and then add to the webpack config file.
 ```
 sudo npm i html-webpack-plugin --save-dev
 ```
 * Install [css loader](https://www.npmjs.com/package/css-loader)
 ```
 sudo npm install --save-dev css-loader
 ```
 * Install [style loader](https://www.npmjs.com/package/style-loader)
 ```
 sudo npm install style-loader --save-dev
 ```
 * Install [File Extracter](https://www.npmjs.com/package/extract-text-webpack-plugin)
 ```
 sudo npm i extract-text-webpack-plugin -D
 ```
 * Install [Sass Loader](https://www.npmjs.com/package/sass-loader)
 ```
 sudo npm install sass-loader node-sass --save-dev
 ```
 ### Install and configure web server
 * Install [web-server](https://www.npmjs.com/package/webpack)
 ```
 sudo npm install --save-dev webpack
 ```
 * Install [web-dev-server](https://www.npmjs.com/package/webpack-dev-server)
 ```
 sudo npm i webpack-dev-server -D
 ```
 * Web Server documentation[here](https://webpack.js.org/configuration/dev-server/#devserver)
 ```
 ```


3. 
4. New browser window should open with a green text on pink background.
