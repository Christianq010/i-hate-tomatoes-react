## Contents of the lessons

1. Create directory and run `init npm`.
2. Webpack
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
 * Run `npm run dev` to run new script.
 * Add the HTMl plug in to the project, and then add to the webpack config file.
 ```
 sudo npm i html-webpack-plugin --save-dev
 ```


3. 
4. New browser window should open with a green text on pink background.
