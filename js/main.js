requirejs.config({
      base: '.',
      paths: {
        'jquery': '../lib/jquery-3.2.0'
      }
})
requirejs(['./index'])