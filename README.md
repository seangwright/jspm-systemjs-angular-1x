# jspm-systemjs-angular-1x
A demo of using JSPM, SystemJS and Angular 1.4

### Installation
1. `npm install`
* `npm install jspm -g`
* `jspm install`
* `gulp build --dev`

For the initial build, `--dev` will build all required modules and copy all required files.

This build will end with a `build-watch` task that watches all app `*.html`, `*.js` and `*.css` files for changes and updates the bundled component files in the `/public` directory.

It also watches `index.html`, `config.js` and any `*.js` files in `jspm_packages` (which are bundled as `vendor.js`). 

#### Optional post-build

`gulp build [--app] [--vendor] [--templates] [--styles]`

Each of the build switches (--) builds a module in the application.

Only the modules specified by the switches will be watched when the build ends.