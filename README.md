# grunt-pug-sass-boilerplate
boilerplate project of pug and sass using grunt

![cover grunt+pug+sass+js](https://lh3.googleusercontent.com/Nv4geRPuwmTNwm40DasXLbSoRrLBtxF48R-FvRQlkQhKAM-I3Xcm388y80QoUimapOl_vRozBKok6iQHsddebtM9LY_7zMtOA7pw2w=w1920-h1080-rw-no)

## About 
### pug, sass and js
All pug, sass and js source code please put it on `./src`. Build result html, css and js
 wil be on `./dist`.

## libraries
If you have saome libraries to add yout project, please place inside `src/libraries`. We are using `grunt-contrib-copy` to copy all inside `src/libraries` to `dist/libraries`. 

### images
We are using `grunt-contrib-imagemin` to compress all image inside `src/images` to `dist/images`. 

## Prerequisites
- <a href="https://nodejs.org/en/" target="_blank">NodeJS + NPM</a>
- <a href="yarnpkg.com/lang/en/docs/cli/global/" target="_blank">yarn recomended</a>

## Instalation
```
yarn install 
```

## Build and watch for development
```
yarn dev:build
```

## Build for production
```
yarn prod:build
```

## Contributing
https://github.com/yussan/grunt-pug-sass-boilerplate/blob/master/CONTRIBUTING.md

## Changelog
https://github.com/yussan/grunt-pug-sass-boilerplate/blob/master/CHANGELOG.md


