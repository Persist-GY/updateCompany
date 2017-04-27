define(function (require, exports, module) {
    var Cycle = require('./cycle');
    new Cycle();
    var toTop = require('./totop');
    new toTop();
    var title = require('./title')
    new title();
    var waterfull = require('./waterfull')
    new waterfull()
})