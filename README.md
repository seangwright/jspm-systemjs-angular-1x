# jspm-systemjs-angular-1x
A demo of using JSPM, SystemJS and Angular 1.4

### Installation
1. `npm install`
2. `jspm install`
3. `gulp build --dev`
4. `gulp build-watch`

Note: Each of the build switches (--) build a module in the application. For the initial build, `--dev` will build all required modules and copy all required files.

#### Optional post-build

1. `gulp build [--app] [--vendor] [--templates] [--styles]`

You can also run `gulp build-watch` to watch the js, html, css and vendor module components in the app and re-bundle when they are modified.