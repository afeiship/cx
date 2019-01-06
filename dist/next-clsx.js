(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var BLANK = ' ';

  nx.clsx = function() {
    var classes = [];
    nx.each(arguments, function(_, arg) {
      if (arg) {
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
          var inner = nx.clsx.apply(null, arg);
          inner && classes.push(inner);
        } else if (argType === 'object') {
          nx.forIn(arg, function(key, value) {
            if (value) {
              classes.push(key);
            }
          });
        }
      }
    });
    return classes.join(BLANK);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.clsx;
  }
})();
