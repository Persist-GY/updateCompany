define(function (require, exports, module) {
    $ = require('../lib/jquery-3.2.0')
    var Cycle = require('./cycle');
    new Cycle()
    var toTop = require('./totop');
    new toTop()
    var title = require('./title')
    new title()
    var waterfull = require('./waterfull')
    new waterfull()
    var lazy = require('./lazy')
    new lazy()
})