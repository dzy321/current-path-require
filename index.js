var relative = require('require-relative');
var modules = {};
var currentPath = process.cwd();
module.exports = function (name) {
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