var commandOptions = require('./lib/commandOptions');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

// register command handler
hexo.extend.console.register('link_checker', commandOptions.desc, commandOptions, require('./lib/command'));

// register filter handler
hexo.extend.filter.register('post', require('./lib/filter'));