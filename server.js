var express         = require('express'),
    https           = require('https'),
    hbs             = require('hbs'),
    path            = require('path'),
    fs              = require('fs'),
    session         = require('express-session'),
    util            = require('util'),
    request         = require('request'),
    cookieParser    = require('cookie-parser'),
    bodyParser      = require('body-parser'),
    favicon         = require('serve-favicon');
    router          = express.Router(),
    serveStatic     = require('serve-static'),
    env             = process.env.NODE_ENV || 'development',
    app             = express();

if (env === 'development') {

}

if (env === 'production') {

}
     //middleware
    app.set('port', process.env.PORT || 3000);
    app.set('views', __dirname + '/server/templates');
    app.set('view engine', 'html');
    app.engine('html', require('hbs').__express);
    app.use(serveStatic(__dirname + '/public', {'index': ['index.html', 'index.htm']}));
    app.use(bodyParser.json());
    app.use(cookieParser('H3R0'));



/*----Routes----*/
/* server side routes */

/* client side routes -  just catch everything and let the backbone router take care of it*/

app.route('/*').all().get(function (req, res) {
        var name = (req.user && req.user.id) ? req.user.id : "";
        res.render('index', {layout:false, name:name});
});

app.listen(app.get('port'), function(){
    console.log("Server listening on port " + app.get('port'));
});


