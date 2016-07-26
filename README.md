## Features
- require from current path 
- if not found in first step,require from current modules

## Use
 
 - `var cpr = require('current-path-require')('/usr/develop');`
 - or `var cpr = require('current-path-require')();  //default is process.cwd();` 
 - `var xxx = cpr('xxx')`