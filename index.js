var relative = require('require-relative');
var modules = {};
module.exports = function (currentPath) {
  currentPath = currentPath || process.cwd();
  return function (name) {
    var mdl = modules[name];
    if (mdl === undefined) {
      try {
        mdl = relative(name, currentPath);
      } catch (e) {
        mdl = require(name);
      }
      modules[name] = mdl;
    }
    return mdl;
  }
}