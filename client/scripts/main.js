require.config({
    baseUrl: "./scripts/js/",
    //shim is used for libs that don't use amd module style
    shim: {
        jquery : {
            exports : '$'
        },
        underscore: {
            deps:["jquery"],
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "Backbone"
        },
        handlebars : {
            exports : 'Handlebars'
        },
        bootstrap : {
            exports : 'bootstrap'
        }
    },

    paths: {
        jquery: "../../bower_components/jquery/dist/jquery",
        underscore: "../../bower_components/underscore/underscore",
        backbone: "../../bower_components/backbone/backbone",
        handlebars: "../../bower_components/handlebars/handlebars",
        Templates : "../../public/js/templates",
        bootstrap : "../../bower_components/bootstrap/dist/js/bootstrap"
    }
});


define(function (require){
    var app = require('app');
    var $ = require('jquery');
    var router = require('router');
    var bootstrap = require('bootstrap');
    $(document).ready(function ($) {
        app.init();
    });
});