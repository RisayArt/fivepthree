const elixir = require('laravel-elixir');

require('laravel-elixir-vue');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss')


        .styles([
        'libs/bootstrap.css',
        'libs/blog-posts.css',
        'libs/font-awesome.css',
        'libs/sb-admin-2.css',
        'libs/metisMenu.css',
        'libs/bootstrap-theme.css'

    ], './public/css/libs.css')

        .scripts([

            'libs/app.js',
            'libs/bootstrap.js',
            'libs/jquery.js',
            'libs/sb-admin-2.js',
            'libs/scripts.js'




        ],'./public/js/libs.js')
});
