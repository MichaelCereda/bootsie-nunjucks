var plugin = require('bootsie/plugin'),
    util = require("util"),
    nunjucks = require('nunjucks'),
    path = require("path");

function bootsie_template_engine (conf){
    var __conf = conf;

    nunjucks.configure(conf.directories.templates || './src/templates');

    function __render(template, context){
        //var t_path = path.join('./src/templates', template);
        return nunjucks.render(template, context);

    }

    return {
        render:__render
    }
}
util.inherits(bootsie_template_engine, plugin);

module.exports = bootsie_template_engine;
