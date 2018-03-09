[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

# grunt-pug-sass-boilerplate
boilerplate project of pug and sass using grunt

![cover grunt+pug+sass+js](https://lh3.googleusercontent.com/Nv4geRPuwmTNwm40DasXLbSoRrLBtxF48R-FvRQlkQhKAM-I3Xcm388y80QoUimapOl_vRozBKok6iQHsddebtM9LY_7zMtOA7pw2w=w1920-h1080-rw-no)

## Grunt Contrib
* ### Pug to Html
  `grunt-contrib-pug`
* ### Sass to CSS 
  `grunt-contrib-sass`
* ### ES6 Support and minify
  `grunt-babel`
* ### Copy
  If you have some libraries, please place inside `src/libraries`. We are using `grunt-contrib-copy` to copy all inside `src/libraries` to `dist/libraries`. 
* ### Image Minify
  We are using `grunt-contrib-imagemin` to compress all image inside `src/images` to `dist/images`. 
* ### Watch and auto browser view changes
  `grunt-contrib-watch` and `grunt-contrib-browsersync`
* ### Css Minify (only for production)
  `grunt-contrib-cssmin`

## Prerequisites
- <a href="https://nodejs.org/en/" target="_blank">NodeJS + NPM</a>
- <a href="yarnpkg.com/lang/en/docs/cli/global/" target="_blank">Yarn recomended as faster NPM alternative</a>

## Commands

  * ### Instalation
      ```
      yarn install 
      ```

  * ### Build and watch for development
      ```
      yarn start
      ```

  * ### Build for production
      ```
      yarn build:prod
      ```
## Used by
* https://kompetisi.id
* https://yussan.github.io
* https://doconfig.netlify.com
* https://byidmore.com

## Contributors
- [yussan](https://github.com/yussan)
- [Sagar V](https://github.com/sagarvd01)
- [Skip van 't Hof](https://github.com/Skipvanthof)

## Contributing
[CONTRIBUTING.md](https://github.com/yussan/grunt-pug-sass-boilerplate/blob/master/CONTRIBUTING.md)

## Changelog
[CHANGELOG.md](https://github.com/yussan/grunt-pug-sass-boilerplate/blob/master/CHANGELOG.md)


