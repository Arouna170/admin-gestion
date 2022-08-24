let mix = require('laravel-mix');

//mix.js('src/app.js', 'dist').setPublicPath('dist');
mix.js('app/Views/src/app.js', 'public/js').vue();