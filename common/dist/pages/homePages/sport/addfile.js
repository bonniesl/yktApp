// { "framework": "Vue"} 
if(typeof app=="undefined"){app=weex}
if(typeof eeuiLog=="undefined"){var eeuiLog={_:function(t,e){var s=e.map(function(e){return e="[object object]"===Object.prototype.toString.call(e).toLowerCase()?JSON.stringify(e):e});if(typeof this.__m==='undefined'){this.__m=app.requireModule('debug')}this.__m.addLog(t,s)},debug:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("debug",e)},log:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("log",e)},info:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("info",e)},warn:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("warn",e)},error:function(){for(var e=[],t=arguments.length;t--;)e[t]=arguments[t];this._("error",e)}}}
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/homePages/sport/addfile.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/_querystringify@2.1.1@querystringify/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/_querystringify@2.1.1@querystringify/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = Object.prototype.hasOwnProperty,
    undef;
/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */

function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}
/**
 * Attempts to encode a given input.
 *
 * @param {String} input The string that needs to be encoded.
 * @returns {String|Null} The encoded string.
 * @api private
 */


function encode(input) {
  try {
    return encodeURIComponent(input);
  } catch (e) {
    return null;
  }
}
/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */


function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g,
      result = {},
      part;

  while (part = parser.exec(query)) {
    var key = decode(part[1]),
        value = decode(part[2]); //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //

    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}
/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */


function querystringify(obj, prefix) {
  prefix = prefix || '';
  var pairs = [],
      value,
      key; //
  // Optionally prefix with a '?' if needed
  //

  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key]; //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //

      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value); //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //

      if (key === null || value === null) continue;
      pairs.push(key + '=' + value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
} //
// Expose the module.
//


exports.stringify = querystringify;
exports.parse = querystring;

/***/ }),

/***/ "./node_modules/_requires-port@1.0.0@requires-port/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/_requires-port@1.0.0@requires-port/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */

module.exports = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;
  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
      return port !== 80;

    case 'https':
    case 'wss':
      return port !== 443;

    case 'ftp':
      return port !== 21;

    case 'gopher':
      return port !== 70;

    case 'file':
      return false;
  }

  return port !== 0;
};

/***/ }),

/***/ "./node_modules/_url-parse@1.4.7@url-parse/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/_url-parse@1.4.7@url-parse/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var required = __webpack_require__(/*! requires-port */ "./node_modules/_requires-port@1.0.0@requires-port/index.js"),
    qs = __webpack_require__(/*! querystringify */ "./node_modules/_querystringify@2.1.1@querystringify/index.js"),
    slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
    protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i,
    whitespace = "[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]",
    left = new RegExp('^' + whitespace + '+');
/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */


function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}
/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */


var rules = [['#', 'hash'], // Extract from the back.
['?', 'query'], // Extract from the back.
function sanitize(address) {
  // Sanitize what is left of the address
  return address.replace('\\', '/');
}, ['/', 'pathname'], // Extract from the back.
['@', 'auth', 1], // Extract from the front.
[NaN, 'host', undefined, 1, 1], // Set left over value.
[/:(\d+)$/, 'port', undefined, 1], // RegExp the back.
[NaN, 'hostname', undefined, 1, 1] // Set left over.
];
/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */

var ignore = {
  hash: 1,
  query: 1
};
/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */

function lolcation(loc) {
  var globalVar;
  if (typeof window !== 'undefined') globalVar = window;else if (typeof global !== 'undefined') globalVar = global;else if (typeof self !== 'undefined') globalVar = self;else globalVar = {};
  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {},
      type = _typeof(loc),
      key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});

    for (key in ignore) {
      delete finaldestination[key];
    }
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}
/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */


function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);
  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}
/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */


function resolve(relative, base) {
  if (relative === '') return base;
  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/')),
      i = path.length,
      last = path[i - 1],
      unshift = false,
      up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');
  return path.join('/');
}
/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */


function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative,
      extracted,
      parse,
      instruction,
      index,
      key,
      instructions = rules.slice(),
      type = _typeof(location),
      url = this,
      i = 0; //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //


  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = qs.parse;
  location = lolcation(location); //
  // Extract protocol information before running the instructions.
  //

  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest; //
  // When the authority component is absent the URL starts with a path
  // component.
  //

  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if (index = parse.exec(address)) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (relative && instruction[3] ? location[key] || '' : ''); //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //

    if (instruction[4]) url[key] = url[key].toLowerCase();
  } //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //


  if (parser) url.query = parser(url.query); //
  // If the URL is relative, resolve the pathname against the base URL.
  //

  if (relative && location.slashes && url.pathname.charAt(0) !== '/' && (url.pathname !== '' || location.pathname !== '')) {
    url.pathname = resolve(url.pathname, location.pathname);
  } //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //


  if (!required(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  } //
  // Parse down the `auth` for the username and password.
  //


  url.username = url.password = '';

  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null'; //
  // The href is just the compiled result.
  //

  url.href = url.toString();
}
/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */


function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || qs.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!required(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname + ':' + value;
      }

      break;

    case 'hostname':
      url[part] = value;
      if (url.port) value += ':' + url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var _char = part === 'pathname' ? '/' : '#';

        url[part] = value.charAt(0) !== _char ? _char + value : value;
      } else {
        url[part] = value;
      }

      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];
    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:' ? url.protocol + '//' + url.host : 'null';
  url.href = url.toString();
  return url;
}
/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */


function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = qs.stringify;
  var query,
      url = this,
      protocol = url.protocol;
  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';
  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':' + url.password;
    result += '@';
  }

  result += url.host + url.pathname;
  query = 'object' === _typeof(url.query) ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?' + query : query;
  if (url.hash) result += url.hash;
  return result;
}

Url.prototype = {
  set: set,
  toString: toString
}; //
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//

Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = qs;
module.exports = Url;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! (webpack)/buildin/global.js */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_webpack@4.42.1@webpack\\buildin\\global.js")))

/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/utils/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/utils/index.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-parse */ "./node_modules/_url-parse@1.4.7@url-parse/index.js");
/* harmony import */ var url_parse__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url_parse__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var Utils = {
  UrlParser: url_parse__WEBPACK_IMPORTED_MODULE_0___default.a,
  _typeof: function _typeof(obj) {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
  },
  isPlainObject: function isPlainObject(obj) {
    return Utils._typeof(obj) === 'object';
  },
  isString: function isString(obj) {
    return typeof obj === 'string';
  },
  isNonEmptyArray: function isNonEmptyArray() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return obj && obj.length > 0 && Array.isArray(obj) && typeof obj !== 'undefined';
  },
  isObject: function isObject(item) {
    return item && _typeof2(item) === 'object' && !Array.isArray(item);
  },
  isEmptyObject: function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  },
  decodeIconFont: function decodeIconFont(text) {
    // 正则匹配 图标和文字混排 eg: 我去上学校&#xe600;,天天不&#xe600;迟到
    var regExp = /&#x[a-z|0-9]{4,5};?/g;

    if (regExp.test(text)) {
      return text.replace(new RegExp(regExp, 'g'), function (iconText) {
        var replace = iconText.replace(/&#x/, '0x').replace(/;$/, '');
        return String.fromCharCode(replace);
      });
    } else {
      return text;
    }
  },
  mergeDeep: function mergeDeep(target) {
    for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    if (!sources.length) return target;
    var source = sources.shift();

    if (Utils.isObject(target) && Utils.isObject(source)) {
      for (var key in source) {
        if (Utils.isObject(source[key])) {
          if (!target[key]) {
            Object.assign(target, _defineProperty({}, key, {}));
          }

          Utils.mergeDeep(target[key], source[key]);
        } else {
          Object.assign(target, _defineProperty({}, key, source[key]));
        }
      }
    }

    return Utils.mergeDeep.apply(Utils, [target].concat(sources));
  },
  appendProtocol: function appendProtocol(url) {
    if (/^\/\//.test(url)) {
      var bundleUrl = weex.config.bundleUrl;
      return "http".concat(/^https:/.test(bundleUrl) ? 's' : '', ":").concat(url);
    }

    return url;
  },
  encodeURLParams: function encodeURLParams(url) {
    var parsedUrl = new url_parse__WEBPACK_IMPORTED_MODULE_0___default.a(url, true);
    return parsedUrl.toString();
  },
  goToH5Page: function goToH5Page(jumpUrl) {
    var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var Navigator = weex.requireModule('navigator');
    var jumpUrlObj = new Utils.UrlParser(jumpUrl, true);
    var url = Utils.appendProtocol(jumpUrlObj.toString());
    Navigator.push({
      url: Utils.encodeURLParams(url),
      animated: animated.toString()
    }, callback);
  },
  env: {
    isTaobao: function isTaobao() {
      var appName = weex.config.env.appName;
      return /(tb|taobao|淘宝)/i.test(appName);
    },
    isTrip: function isTrip() {
      var appName = weex.config.env.appName;
      return appName === 'LX';
    },
    isBoat: function isBoat() {
      var appName = weex.config.env.appName;
      return appName === 'Boat' || appName === 'BoatPlayground';
    },
    isWeb: function isWeb() {
      var platform = weex.config.env.platform;
      return (typeof window === "undefined" ? "undefined" : _typeof2(window)) === 'object' && platform.toLowerCase() === 'web';
    },
    isIOS: function isIOS() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'ios';
    },

    /**
     * 是否为 iPhone X or iPhoneXS or iPhoneXR or iPhoneXS Max
     * @returns {boolean}
     */
    isIPhoneX: function isIPhoneX() {
      var deviceHeight = weex.config.env.deviceHeight;

      if (Utils.env.isWeb()) {
        return (typeof window === "undefined" ? "undefined" : _typeof2(window)) !== undefined && window.screen && window.screen.width && window.screen.height && (parseInt(window.screen.width, 10) === 375 && parseInt(window.screen.height, 10) === 812 || parseInt(window.screen.width, 10) === 414 && parseInt(window.screen.height, 10) === 896);
      }

      return Utils.env.isIOS() && (deviceHeight === 2436 || deviceHeight === 2688 || deviceHeight === 1792 || deviceHeight === 1624);
    },
    isAndroid: function isAndroid() {
      var platform = weex.config.env.platform;
      return platform.toLowerCase() === 'android';
    },
    isTmall: function isTmall() {
      var appName = weex.config.env.appName;
      return /(tm|tmall|天猫)/i.test(appName);
    },
    isAliWeex: function isAliWeex() {
      return Utils.env.isTmall() || Utils.env.isTrip() || Utils.env.isTaobao();
    },

    /**
     * 获取weex屏幕真实的设置高度，需要减去导航栏高度
     * @returns {Number}
     */
    getPageHeight: function getPageHeight() {
      var env = weex.config.env;
      var navHeight = Utils.env.isWeb() ? 0 : Utils.env.isIPhoneX() ? 176 : 132;
      return env.deviceHeight / env.deviceWidth * 750 - navHeight;
    },

    /**
     * 获取weex屏幕真实的设置高度
     * @returns {Number}
     */
    getScreenHeight: function getScreenHeight() {
      var env = weex.config.env;
      return env.deviceHeight / env.deviceWidth * 750;
    }
  },

  /**
   * 版本号比较
   * @memberOf Utils
   * @param currVer {string}
   * @param promoteVer {string}
   * @returns {boolean}
   * @example
   *
   * const { Utils } = require('@ali/wx-bridge');
   * const { compareVersion } = Utils;
   * eeuiLog.log(compareVersion('0.1.100', '0.1.11')); // 'true'
   */
  compareVersion: function compareVersion() {
    var currVer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '0.0.0';
    var promoteVer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '0.0.0';
    if (currVer === promoteVer) return true;
    var currVerArr = currVer.split('.');
    var promoteVerArr = promoteVer.split('.');
    var len = Math.max(currVerArr.length, promoteVerArr.length);

    for (var i = 0; i < len; i++) {
      var proVal = ~~promoteVerArr[i];
      var curVal = ~~currVerArr[i];

      if (proVal < curVal) {
        return true;
      } else if (proVal > curVal) {
        return false;
      }
    }

    return false;
  },

  /**
   * 分割数组
   * @param arr 被分割数组
   * @param size 分割数组的长度
   * @returns {Array}
   */
  arrayChunk: function arrayChunk() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
    var groups = [];

    if (arr && arr.length > 0) {
      groups = arr.map(function (e, i) {
        return i % size === 0 ? arr.slice(i, i + size) : null;
      }).filter(function (e) {
        return e;
      });
    }

    return groups;
  },

  /*
   * 截断字符串
   * @param str 传入字符串
   * @param len 截断长度
   * @param hasDot 末尾是否...
   * @returns {String}
   */
  truncateString: function truncateString(str, len) {
    var hasDot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var newLength = 0;
    var newStr = '';
    var singleChar = '';
    var chineseRegex = /[^\x00-\xff]/g;
    var strLength = str.replace(chineseRegex, '**').length;

    for (var i = 0; i < strLength; i++) {
      singleChar = str.charAt(i).toString();

      if (singleChar.match(chineseRegex) !== null) {
        newLength += 2;
      } else {
        newLength++;
      }

      if (newLength > len) {
        break;
      }

      newStr += singleChar;
    }

    if (hasDot && strLength > len) {
      newStr += '...';
    }

    return newStr;
  },

  /*
   * 转换 obj 为 url params参数
   * @param obj 传入字符串
   * @returns {String}
   */
  objToParams: function objToParams(obj) {
    var str = '';

    for (var key in obj) {
      if (str !== '') {
        str += '&';
      }

      str += key + '=' + encodeURIComponent(obj[key]);
    }

    return str;
  },

  /*
   * 转换 url params参数为obj
   * @param str 传入url参数字符串
   * @returns {Object}
   */
  paramsToObj: function paramsToObj(str) {
    var obj = {};

    try {
      obj = JSON.parse('{"' + decodeURI(str).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
    } catch (e) {
      eeuiLog.log(e);
    }

    return obj;
  },
  animation: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param ref
     * @param transform 运动类型
     * @param status
     * @param callback 回调函数
     */
    pageTransitionAnimation: function pageTransitionAnimation(ref, transform, status, callback) {
      var animation = weex.requireModule('animation');
      animation.transition(ref, {
        styles: {
          transform: transform
        },
        duration: status ? 250 : 300,
        // ms
        timingFunction: status ? 'ease-in' : 'ease-out',
        delay: 0 // ms

      }, function () {
        callback && callback();
      });
    }
  },
  uiStyle: {
    /**
     * 返回定义页面转场动画起初的位置
     * @param animationType 页面转场动画的类型 push，model
     * @param size 分割数组的长度
     * @returns {}
     */
    pageTransitionAnimationStyle: function pageTransitionAnimationStyle(animationType) {
      if (animationType === 'push') {
        return {
          left: '750px',
          top: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      } else if (animationType === 'model') {
        return {
          top: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px',
          left: '0px',
          height: weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750 + 'px'
        };
      }

      return {};
    }
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Utils);

/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-149d58ea!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-149d58ea!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-149d58ea!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-149d58ea!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-cell\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-149d58ea"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue":
/*!**********************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-4fc87b3b!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4fc87b3b!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-checkbox-list\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue":
/*!*****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-2c121b2c!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2c121b2c!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-2c121b2c!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2c121b2c!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-checkbox\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c121b2c"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/type.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/type.js ***!
  \***************************************************************************/
/*! exports provided: CHECKED, UNCHECKED, CHECKED_DISABLED, UNCHECKED_DISABLED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKED", function() { return CHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNCHECKED", function() { return UNCHECKED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKED_DISABLED", function() { return CHECKED_DISABLED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNCHECKED_DISABLED", function() { return UNCHECKED_DISABLED; });
/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/
var CHECKED = 'https://gw.alicdn.com/tfs/TB14fp2pwMPMeJjy1XbXXcwxVXa-72-72.png';
var UNCHECKED = 'https://gw.alicdn.com/tfs/TB1U6SbpwMPMeJjy1XcXXXpppXa-72-72.png';
var CHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1aPabpwMPMeJjy1XcXXXpppXa-72-72.png';
var UNCHECKED_DISABLED = 'https://gw.alicdn.com/tfs/TB1lTuzpwoQMeJjy0FoXXcShVXa-72-72.png';

/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue":
/*!*************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-a17426d6!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-a17426d6!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-a17426d6!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-a17426d6!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-mask\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a17426d6"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-48d7063a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-48d7063a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-48d7063a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-48d7063a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-overlay\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-48d7063a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue":
/*!**************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-34cae37f!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-34cae37f!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-34cae37f!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-34cae37f!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-popup\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-34cae37f"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/components/runSet.vue":
/*!***********************************!*\
  !*** ./src/components/runSet.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-4f27ba47!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./runSet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4f27ba47!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/runSet.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./runSet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/runSet.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-4f27ba47!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./runSet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4f27ba47!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/runSet.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\runSet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f27ba47"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ "./src/fetch/api/apis.js":
/*!*******************************!*\
  !*** ./src/fetch/api/apis.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 统一请求接口
/* harmony default export */ __webpack_exports__["default"] = ({
  //baseUrl 
  baseUrl: 'http://app.asyke.com',
  //ossUrl
  ossUrl: 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com',
  // 用户登录
  getUserLogin: '/api/v1/auth/login',
  //用户注册
  postUserRegister: '/api/v1/auth/register',
  //用户退出
  userLogout: '/api/v1/auth/logout',
  //图片上传
  imgUpload: '/api/v1/asyke/upload',
  //老师获取班级列表 
  getClassList: '/api/v1/asyke/course/tealists',
  //学生获取班级列表 
  getStuClassList: '/api/v1/asyke/course/stulists',
  //用户信息
  getUserInfo: '/api/v1/me/information',
  //上传图片
  upload: '/api/v1/upload',
  //个信息编辑
  editinfo: '/api/v1/me/editinfo',
  //获取班级信息接口
  classInfo: '/api/v1/asyke/class/classlist',
  // //获取班级的人员列表接口
  // getclassUser:'/api/v1/asyke/class/userlist',
  //获取书本
  getbookList: '/api/v1/asyke/course/book',
  //加入班级
  addenterClass: '/api/v1/asyke/class/join',
  //创建课程接口
  createcourse: '/api/v1/asyke/course/store',
  //更新课程信息
  courseUpdate: '/api/v1/asyke/course/courseupdate',
  //新增班级
  addclass: '/api/v1/asyke/class/store',
  //获取班级成员
  getClassUserList: '/api/v1/asyke/class/userlist',
  //更改课程归档接口
  courseFileOver: '/api/v1/asyke/course/coursefile',
  //课程班级修改
  classUpdate: '/api/v1/asyke/class/update',
  //班级归档设置
  classSetFile: '/api/v1/asyke/class/setfile',
  //获取班级下面的跑步主题列表
  runList: '/api/v1/run/index',
  //跑步主题创建
  createRun: '/api/v1/run/store',
  //跑步主题跟新删除
  runOperation: '/api/v1/run/operation',
  //创建主题下面的操作
  runProject: '/api/v1/run/project/store',
  //获取跑步项目操作列表
  getrunActionList: '/api/v1/run/project/index',
  //跑步发布跟新
  runSendUpdate: '/api/v1/run/project/update',
  //获取班级跑步人员列表接口
  runUserList: '/api/v1/asyke/class/run/user',
  runUserList2: '/api/v1/asyke/class/run/usernew',
  //获取用户跑步项目
  getrunUserPro: '/api/v1/asyke/class/user/runlist',
  //用户设置体重身高
  setUserHeight: '/api/v1/run/set/store',
  //跑步设置
  setRunSave: '/api/v1/run/set/save',
  //发送短信验证码
  getCode: '/api/v1/auth/pwdcode',
  //忘记密码
  forgetPassword: '/api/v1/auth/forget',
  //重置密码
  reSetPass: '/api/v1/auth/reset',
  //获取学校下面校区列表
  getRunCampus: '/api/v1/run/campus',
  //用户开始跑步接口
  getRunStart: '/api/v1/run/user/index',
  //班级成员退出接口
  courseClassOut: "/api/v1/asyke/class/out",
  //微信登陆
  weixinLogin: '/api/v1/auth/wxlogin',
  //获取校区列表和跑步列表
  getUserRunSList: '/api/v1/asyke/class/user/run/set',
  //获取用户跑步设置
  getUserRunSet: '/api/v1/run/set/user',
  //获取跑步详情接口
  getUserRunInfo: '/api/v1/run/user/info',
  //用户跑步记录接口
  userRunList: '/api/v1/run/user/list',
  //周记录接口
  userWeekRunList: '/api/v1/run/user/week',
  //用户跑步月记录接口
  userMonthRunList: '/api/v1/run/user/month',
  //用户跑步年记录接口
  userYearRunList: '/api/v1/run/user/year',
  //用户成绩跑
  userRunRank: '/api/v1/run/rank/user',
  //获取指定用户跑步记录
  userOpenRunList: '/api/v1/asyke/class/run/user/list',
  //审核免跑接口
  setNorun: '/api/v1/run/setnorun',
  //申请免跑
  getNoRun: '/api/v1/run/no_run',
  //初始化接口
  setInit: '/api/v1/init',
  //权限说明
  setExplain: '/api/v1/questions',
  //院系
  partRank: '/api/v1/run/rank/part',
  //作弊
  cheatRank: '/api/v1/run/rank/cheat',
  //用户点赞接口
  praise: '/api/v1/run/rank/praise'
});

/***/ }),

/***/ "./src/pages/homePages/sport/addfile.vue?entry=true":
/*!**********************************************************!*\
  !*** ./src/pages/homePages/sport/addfile.vue?entry=true ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-2f0a9910!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./addfile.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2f0a9910!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/homePages/sport/addfile.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./addfile.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/homePages/sport/addfile.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-2f0a9910!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./addfile.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2f0a9910!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/homePages/sport/addfile.vue")
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {eeuiLog.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\homePages\\sport\\addfile.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2f0a9910"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    label: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    extraContent: {
      type: String,
      default: ''
    },
    desc: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    },
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasMargin: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    hasArrow: {
      type: Boolean,
      default: false
    },
    arrowIcon: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB11zBUpwMPMeJjy1XbXXcwxVXa-22-22.png'
    },
    hasVerticalIndent: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: () => ({})
    },
    autoAccessible: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    cellClicked(e) {
      const link = this.link;
      this.$emit('wxcCellClicked', {
        e
      });
      link && _utils__WEBPACK_IMPORTED_MODULE_0__["default"].goToH5Page(link, true);
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wxc_checkbox_index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wxc-checkbox/index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue");
/* harmony import */ var _wxc_checkbox_index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wxc_checkbox_index_vue__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcCheckbox: (_wxc_checkbox_index_vue__WEBPACK_IMPORTED_MODULE_0___default())
  },
  props: {
    list: {
      type: Array,
      default: () => []
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    checkedList: []
  }),

  created() {
    const {
      list
    } = this;

    if (list && list.length > 0) {
      list.forEach((item, i) => {
        item.checked && this.checkedList.push(item.value);
      });
    }
  },

  methods: {
    wxcCheckBoxItemChecked(e) {
      if (e.checked) {
        this.checkedList.push(e.value);
      } else {
        const index = this.checkedList.indexOf(e.value);
        this.checkedList.splice(index, 1);
      }

      this.$emit('wxcCheckBoxListChecked', {
        checkedList: this.checkedList
      });
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wxc_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wxc-cell */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.js");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./type */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/type.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcCell: _wxc_cell__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    hasTopBorder: {
      type: Boolean,
      default: false
    },
    hasBottomBorder: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      require: true
    },
    value: {
      type: [String, Number, Object],
      require: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    config: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    icon: [_type__WEBPACK_IMPORTED_MODULE_1__["CHECKED"], _type__WEBPACK_IMPORTED_MODULE_1__["UNCHECKED"], _type__WEBPACK_IMPORTED_MODULE_1__["CHECKED_DISABLED"], _type__WEBPACK_IMPORTED_MODULE_1__["UNCHECKED_DISABLED"]],
    color: '#3D3D3D',
    innerChecked: false
  }),
  computed: {
    checkIcon() {
      const {
        icon,
        disabled,
        innerChecked,
        config
      } = this;
      const mergeIcon = [...icon];
      config.checkedIcon && (mergeIcon[0] = config.checkedIcon);
      config.unCheckedIcon && (mergeIcon[1] = config.unCheckedIcon);
      config.checkedDisabledIcon && (mergeIcon[2] = config.checkedDisabledIcon);
      config.unCheckedDisabledIcon && (mergeIcon[3] = config.unCheckedDisabledIcon);

      if (disabled) {
        return mergeIcon[innerChecked ? 2 : 3];
      } else {
        return mergeIcon[innerChecked ? 0 : 1];
      }
    },

    textColor() {
      const {
        innerChecked,
        disabled,
        config
      } = this;
      const checkedColor = config.checkedColor ? config.checkedColor : '#EE9900';
      return innerChecked && !disabled ? checkedColor : '#3D3D3D';
    }

  },
  watch: {
    checked(newChecked) {
      this.innerChecked = newChecked;
    }

  },

  created() {
    const {
      checked
    } = this;
    this.innerChecked = checked;
  },

  methods: {
    wxcCellClicked() {
      const {
        disabled,
        innerChecked,
        value
      } = this;

      if (!disabled) {
        this.innerChecked = !innerChecked;
        this.$emit('wxcCheckBoxItemChecked', {
          value,
          checked: this.innerChecked
        });
      }
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wxc-overlay */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const animation = weex.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcOverlay: _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    height: {
      type: [String, Number],
      default: 800
    },
    width: {
      type: [String, Number],
      default: 702
    },
    top: {
      type: Number,
      default: 0
    },
    show: {
      type: Boolean,
      default: false
    },
    showClose: {
      type: Boolean,
      default: false
    },
    duration: {
      type: [String, Number],
      default: 300
    },
    hasOverlay: {
      type: Boolean,
      default: true
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    timingFunction: {
      type: Array,
      default: () => ['ease-in', 'ease-out']
    },
    overlayCfg: {
      type: Object,
      default: () => ({
        hasAnimation: true,
        timingFunction: ['ease-in', 'ease-out'],
        canAutoClose: true,
        duration: 300,
        opacity: 0.6
      })
    },
    borderRadius: {
      type: [String, Number],
      default: 0
    },
    overlayCanClose: {
      type: Boolean,
      default: true
    },
    maskBgColor: {
      type: String,
      default: '#ffffff'
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    }
  },
  data: () => ({
    closeIcon: 'https://gw.alicdn.com/tfs/TB1qDJUpwMPMeJjy1XdXXasrXXa-64-64.png',
    maskTop: 264,
    opened: false
  }),
  computed: {
    mergeOverlayCfg() {
      return { ...this.overlayCfg,
        hasAnimation: this.hasAnimation
      };
    },

    maskStyle() {
      const {
        width,
        height,
        showClose,
        hasAnimation,
        opened,
        top
      } = this;
      const newHeight = showClose ? height - 0 + 100 : height;
      const {
        deviceHeight,
        deviceWidth,
        platform
      } = weex.config.env;

      const _deviceHeight = deviceHeight || 1334;

      const isWeb = typeof window === 'object' && platform.toLowerCase() === 'web';
      const navHeight = isWeb ? 0 : 130;
      const pageHeight = _deviceHeight / deviceWidth * 750 - navHeight;
      return {
        width: width + 'px',
        height: newHeight + 'px',
        left: (750 - width) / 2 + 'px',
        top: (top || (pageHeight - height) / 2) + 'px',
        opacity: hasAnimation && !opened ? 0 : 1
      };
    },

    contentStyle() {
      return {
        width: this.width + 'px',
        backgroundColor: this.maskBgColor,
        height: this.height + 'px',
        borderRadius: this.borderRadius + 'px'
      };
    },

    shouldShow() {
      const {
        show,
        hasAnimation
      } = this;
      hasAnimation && setTimeout(() => {
        this.appearMask(show);
      }, 50);
      return show;
    }

  },
  methods: {
    closeIconClicked() {
      this.appearMask(false);
    },

    wxcOverlayBodyClicking() {
      if (this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicking', {});
      }
    },

    wxcOverlayBodyClicked() {
      if (!this.hasAnimation) {
        this.appearMask(false);
        this.$emit('wxcOverlayBodyClicked', {});
      }
    },

    needEmit(bool = false) {
      this.opened = bool;
      !bool && this.$emit('wxcMaskSetHidden', {});
    },

    appearMask(bool, duration = this.duration) {
      const {
        hasAnimation,
        timingFunction
      } = this;
      const maskEl = this.$refs['wxc-mask'];

      if (hasAnimation && maskEl) {
        animation.transition(maskEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, () => {
          this.needEmit(bool);
        });
      } else {
        this.needEmit(bool);
      }
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/utils/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const animation = weex.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    show: {
      type: Boolean,
      default: true
    },
    top: {
      type: Number,
      default: 0
    },
    left: {
      type: Number,
      default: 0
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 300
    },
    timingFunction: {
      type: Array,
      default: () => ['ease-in', 'ease-out']
    },
    opacity: {
      type: [Number, String],
      default: 0.6
    },
    canAutoClose: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    overlayStyle() {
      return {
        opacity: this.hasAnimation ? 0 : 1,
        backgroundColor: `rgba(0, 0, 0,${this.opacity})`,
        left: _utils__WEBPACK_IMPORTED_MODULE_0__["default"].env.isWeb() ? this.left + 'px' : 0,
        top: this.top + 'px'
      };
    },

    shouldShow() {
      const {
        show,
        hasAnimation
      } = this;
      hasAnimation && setTimeout(() => {
        this.appearOverlay(show);
      }, 50);
      return show;
    }

  },
  methods: {
    overlayClicked(e) {
      this.canAutoClose ? this.appearOverlay(false) : this.$emit('wxcOverlayBodyClicked', {});
    },

    appearOverlay(bool, duration = this.duration) {
      const {
        hasAnimation,
        timingFunction,
        canAutoClose
      } = this;
      const needEmit = !bool && canAutoClose;
      needEmit && this.$emit('wxcOverlayBodyClicking', {});
      const overlayEl = this.$refs['wxc-overlay'];

      if (hasAnimation && overlayEl) {
        animation.transition(overlayEl, {
          styles: {
            opacity: bool ? 1 : 0
          },
          duration,
          timingFunction: timingFunction[bool ? 0 : 1],
          delay: 0
        }, () => {
          needEmit && this.$emit('wxcOverlayBodyClicked', {});
        });
      } else {
        needEmit && this.$emit('wxcOverlayBodyClicked', {});
      }
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../wxc-overlay */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const animation = weex.requireModule('animation');

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcOverlay: _wxc_overlay__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    pos: {
      type: String,
      default: 'bottom'
    },
    popupColor: {
      type: String,
      default: '#FFFFFF'
    },
    overlayCfg: {
      type: Object,
      default: () => ({
        hasAnimation: true,
        timingFunction: ['ease-in', 'ease-out'],
        duration: 300,
        opacity: 0.6
      })
    },
    height: {
      type: [Number, String],
      default: 840
    },
    standOut: {
      type: [Number, String],
      default: 0
    },
    width: {
      type: [Number, String],
      default: 750
    },
    animation: {
      type: Object,
      default: () => ({
        timingFunction: 'ease-in'
      })
    }
  },
  data: () => ({
    haveOverlay: true,
    isOverShow: true
  }),
  computed: {
    isNeedShow() {
      setTimeout(() => {
        this.appearPopup(this.show);
      }, 50);
      return this.show;
    },

    _height() {
      this.appearPopup(this.show, 150);
      return this.height;
    },

    padStyle() {
      const {
        pos,
        width,
        height,
        popupColor,
        standOut
      } = this;
      const stand = parseInt(standOut, 10);
      let style = {
        width: `${width}px`,
        backgroundColor: popupColor
      };
      pos === 'top' && (style = { ...style,
        top: `${-height + stand}px`,
        height: `${height}px`
      });
      pos === 'bottom' && (style = { ...style,
        bottom: `${-height + stand}px`,
        height: `${height}px`
      });
      pos === 'left' && (style = { ...style,
        left: `${-width + stand}px`
      });
      pos === 'right' && (style = { ...style,
        right: `${-width + stand}px`
      });
      return style;
    }

  },
  methods: {
    handleTouchEnd(e) {
      // 在支付宝上面有点击穿透问题
      const {
        platform
      } = weex.config.env;
      platform === 'Web' && e.preventDefault && e.preventDefault();
    },

    hide() {
      this.appearPopup(false);
      this.$refs.overlay.appearOverlay(false);
    },

    wxcOverlayBodyClicking() {
      this.isShow && this.appearPopup(false);
    },

    appearPopup(bool, duration = 300) {
      this.isShow = bool;
      const popupEl = this.$refs['wxc-popup'];

      if (!popupEl) {
        return;
      }

      animation.transition(popupEl, {
        styles: {
          transform: this.getTransform(this.pos, this.width, this.height, !bool)
        },
        duration,
        delay: 0,
        ...this.animation
      }, () => {
        if (!bool) {
          this.$emit('wxcPopupOverlayClicked', {
            pos: this.pos
          });
        }
      });
    },

    getTransform(pos, width, height, bool) {
      let _size = pos === 'top' || pos === 'bottom' ? height : width;

      bool && (_size = 0);

      let _transform;

      switch (pos) {
        case 'top':
          _transform = `translateY(${_size}px)`;
          break;

        case 'bottom':
          _transform = `translateY(-${_size}px)`;
          break;

        case 'left':
          _transform = `translateX(${_size}px)`;
          break;

        case 'right':
          _transform = `translateX(-${_size}px)`;
          break;
      }

      return _transform;
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/runSet.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/runSet.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_wxc_checkbox_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/wxc-checkbox-list */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.js");
/* harmony import */ var weex_ui_packages_wxc_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! weex-ui/packages/wxc-popup */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.js");
/* harmony import */ var weex_ui_packages_wxc_mask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weex-ui/packages/wxc-mask */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.js");
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fetch/api/apis */ "./src/fetch/api/apis.js");




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var stream = app.requireModule('stream');
var picker = weex.requireModule("picker");
var globalEvent = weex.requireModule('globalEvent');
var dom = weex.requireModule('dom');

/* harmony default export */ __webpack_exports__["default"] = (_defineProperty({
  components: {
    WxcMask: weex_ui_packages_wxc_mask__WEBPACK_IMPORTED_MODULE_2__["default"],
    WxcPopup: weex_ui_packages_wxc_popup__WEBPACK_IMPORTED_MODULE_1__["default"],
    WxcCheckboxList: weex_ui_packages_wxc_checkbox_list__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: ['runId', 'runTitle'],
  data: function data() {
    return {
      trackShow: false,
      loading: false,
      maskShow: false,
      overlayCanClose: true,
      isFalse: false,
      hasAnimation: true,
      maskShow2: false,
      hasAnimation2: true,
      isBottomShow: false,
      height: 600,
      timeStartValue: "选择开始日期",
      timeEndValue: "选择结束日期",
      dateStartValue: "选择开始时间",
      dateEndValue: "选择结束时间",
      value: "",
      checkedList: [],
      dataTime: "",
      list: [{
        title: "全部",
        value: "全部"
      }, {
        title: "周一",
        value: "周一"
      }, {
        title: "周二",
        value: "周二"
      }, {
        title: "周三",
        value: "周三"
      }, {
        title: "周四",
        value: "周四"
      }, {
        title: "周五",
        value: "周五"
      }, {
        title: "周六",
        value: "周六"
      }, {
        title: "周日",
        value: "周日"
      }],
      id: app.config.params.id,
      futitle: app.config.params.title,
      courseTitle: app.config.params.courseTitle,
      points: [],
      ponitList: [],
      setRunInfo: {
        track_map_status: 0,
        startTime: '05:00',
        endTime: '2:00',
        boy_km: 0,
        boy_min: 0,
        boy_max: 0,
        boy_list: [{
          min: 0,
          max: 0,
          point: 0,
          isaddShow: true,
          isdelShow: false
        }],
        girl_km: 0,
        girl_min: 0,
        girl_max: 0,
        girl_list: [{
          min: 0,
          max: 0,
          point: 0,
          isaddShow: true,
          isdelShow: false
        }],
        percentage: 0,
        runSetShow: false,
        campus_id: 0,
        client_show: 0,
        track_map_list: [{
          campus_id: 0,
          list: []
        }]
      },
      addBoyList: [],
      addGirlList: [],
      course_id: app.config.params.courseId,
      isBottomShow2: false,
      schoolPickT: '',
      schoolText: '请选择校区',
      isRightShow: false,
      userInfo: '',
      schoolCList: [],
      pickSchoolInfo: {},
      courser_runId: '',
      addindex: 0,
      mapPointList: [],
      //打卡轨迹
      cliindex: 0
    };
  },
  filters: {
    dataTimeForamt: function dataTimeForamt(val) {
      if (val == "时间段选择") {
        return val;
      } else {
        return val.join("至");
      }
    }
  },
  methods: {
    trackPlay: function trackPlay() {
      if (this.trackShow == true) {
        this.trackShow = false;
        this.track_map_status = 0;
      } else {
        this.trackShow = true;
        this.track_map_status = 1;
      }
    },
    //地图打点设置
    mapSet: function mapSet() {
      var self = this;
      self.isBottomShow2 = false; //ios 返回值

      var callback = function callback(data) {
        self.points = data;
      };

      weex.requireModule('userRun').mark(self.points, callback);
    },
    mapEdit: function mapEdit(points) {
      var self = this;
      eeuiLog.log(points);
      weex.requireModule('userRun').mark(points);
    },
    delMap: function delMap(points) {
      var self = this; //删除打卡的点 
      // this.mapPointList.splice(index,0);
      // this.addindex--;
      //   let index = self.points.indexOf(points);
      //   if (index > -1) {
      //      self.points.splice(index, 1);
      //   }
      //  //删除打卡的赋值

      var index1 = self.ponitList.indexOf(points);

      if (index1 > -1) {
        self.ponitList.splice(index1, 1);
      } //   var callback = function (data) { 
      //     self.points = data;
      //   }
      //   weex.requireModule('userRun').mark(points,callback); 

    },
    openBottomPopupShow: function openBottomPopupShow() {
      var self = this;
      self.isBottomShow2 = true;
      eeui.keyboardHide();
    },
    popupBottomShow: function popupBottomShow() {
      this.isBottomShow2 = false;
    },
    popupRightShow: function popupRightShow() {
      this.isRightShow = true;
    },
    popupRightHide: function popupRightHide() {
      this.isRightShow = false;
      this.schoolText = '请选择校区';
      this.schoolPickT = '';
      this.points = [];
      this.ponitList = [];
    },
    pickSchollList: function pickSchollList() {
      var self = this;
      eeui.toastClose();
      var pickSName = [];
      var pickSIn = [];
      stream.fetch({
        method: 'GET',
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].getRunCampus + '?school_id=' + '76',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.schoolCList = res.data;
          self.schoolCList.forEach(function (val, index) {
            if (val.name && val.name.length > 0) {
              pickSName.push(val.name);
              pickSIn.push(val.id);
            }
          });
          picker.pick({
            items: pickSName
          }, function (event) {
            if (event.result === 'success') {
              self.schoolText = pickSName[event.data];
              self.setRunInfo.track_map_list[0].campus_id = pickSIn[0];
            }
          });
        } else {
          eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
          return false;
        }
      });
    },
    startSure: function startSure() {
      var self = this;

      if (self.schoolText == "请选择校区") {
        eeui.toast({
          message: '请选择校区',
          gravity: 'top'
        });
        return false;
      }

      ;
      self.isBottomShow2 = false;
      self.schoolPickT = self.schoolText;
      self.mapSet();
    },
    addBoyItem: function addBoyItem() {
      this.setRunInfo.boy_list.push({
        min: 0,
        max: 0,
        point: 0,
        isaddShow: false,
        isdelShow: true
      });
    },
    delBoyItem: function delBoyItem() {
      this.setRunInfo.boy_list.pop({
        min: 0,
        max: 0,
        point: 0,
        isaddShow: false,
        isdelShow: true
      });
    },
    addGirlItem: function addGirlItem() {
      this.setRunInfo.girl_list.push({
        min: 0,
        max: 0,
        point: 0,
        isaddShow: false,
        isdelShow: true
      });
    },
    delGirlItem: function delGirlItem() {
      this.setRunInfo.girl_list.pop({
        min: 0,
        max: 0,
        point: 0,
        isaddShow: false,
        isdelShow: true
      });
    },
    setover: function setover() {
      var self = this;
      self.addBoyList = [];
      self.addGirlList = [];
      self.setRunInfo.boy_list.forEach(function (val, index) {
        var boyDataInfo = {
          min: val.min * 1000,
          max: val.max * 1000,
          point: val.point
        };
        self.addBoyList.push(boyDataInfo);
      });
      self.setRunInfo.girl_list.forEach(function (val, index) {
        var girlDataInfo = {
          min: val.min * 1000,
          max: val.max * 1000,
          point: val.point
        };
        self.addGirlList.push(girlDataInfo);
      });

      if (self.track_map_status == 1) {
        if (self.schoolPickT == '') {
          eeui.toast({
            message: '请设置打卡点',
            gravity: 'top'
          });
          return false;
        }

        if (self.points.length == 0) {
          eeui.toast({
            message: '请添加运动轨迹',
            gravity: 'top'
          });
          return false;
        }
      }

      if (self.setRunInfo.boy_km == 0) {
        eeui.toast({
          message: '请设置本学期目标(男)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.boy_min == 0) {
        eeui.toast({
          message: '请设置单次最低多少哦(男)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.boy_max == 0) {
        eeui.toast({
          message: '请设置单次最高多少哦(男)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.girl_km == 0) {
        eeui.toast({
          message: '请设置本学期目标(女)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.girl_min == 0) {
        eeui.toast({
          message: '请设置单次最低多少哦(女)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.girl_max == 0) {
        eeui.toast({
          message: '请设置单次最高多少哦(女)',
          gravity: 'top'
        });
        return false;
      }

      if (self.setRunInfo.percentage == 0) {
        eeui.toast({
          message: '请设置成绩比例哦',
          gravity: 'top'
        });
        return false;
      }

      if (self.loading == true) {
        self.setRunInfo.client_show = 1;
      } else {
        self.setRunInfo.client_show = 0;
      }

      stream.fetch({
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].setRunSave,
        method: 'POST',
        type: 'json',
        headers: {
          'Content-Type': 'application/json',
          Authorization: eeui.getCaches('token', null).token
        },
        body: JSON.stringify({
          course_class_run_id: self.runId,
          boy_km: self.setRunInfo.boy_km * 1000,
          boy_min: self.setRunInfo.boy_min * 1000,
          boy_max: self.setRunInfo.boy_max * 1000,
          girl_km: self.setRunInfo.girl_km * 1000,
          girl_min: self.setRunInfo.girl_min * 1000,
          girl_max: self.setRunInfo.girl_max * 1000,
          client_show: self.setRunInfo.client_show,
          percentage: self.setRunInfo.percentage,
          s_time: self.setRunInfo.startTime + ':00',
          e_time: self.setRunInfo.endTime + ':00',
          track_map_list: self.setRunInfo.track_map_list,
          boy_list: self.addBoyList,
          girl_list: self.addGirlList
        })
      }, function (res) {
        if (res.status == 200) {
          self.courser_runId = res.data.course_run_id;
          eeui.openPage({
            url: '../layoutPage.js',
            statusBarColor: '#1eb76e',
            animated: false,
            params: {
              courseTitle: self.courseTitle,
              title: self.futitle,
              id: self.id,
              courseId: self.course_id
            }
          }, function (result) {//......
          });
        } else {
          eeui.toast({
            message: decodeURIComponent(res.headers['x-mzq-message']),
            gravity: 'top'
          });
          return false;
        }
      }); //   eeui.openPage(
      //     {
      //       pageName: "",
      //       pageType: "app",
      //       url: "layoutPage.js",
      //       params: { courseTitle: this.courseTitle, title: this.futitle, id: this.id }
      //     },
      //     function(result) {
      //       //......
      //     }
      //   );
    },
    saveTrack: function saveTrack() {
      var self = this;

      if (self.ponitList.length == 0) {
        eeui.toast({
          message: '请添加运动轨迹',
          gravity: 'top'
        });
        return false;
      }

      self.isRightShow = false;
    },
    openMask: function openMask(e) {
      this.maskShow = true;
      this.hasAnimation = true;
    },
    openMask2: function openMask2(e) {
      this.maskShow2 = true;
      this.hasAnimation2 = true;
    },
    wxcMaskSetHidden: function wxcMaskSetHidden() {
      this.maskShow = false;
    },
    wxcMaskSetHidden2: function wxcMaskSetHidden2() {
      this.maskShow2 = false; // if(this.checkedList.length == '7'){
      //     this.dataTime = '每天';
      // }else{

      this.dataTime = this.checkedList.join("/"); //}
    },
    openBottomPopup: function openBottomPopup() {
      this.isBottomShow = true;
    },
    //非状态组件，需要在这里关闭
    popupOverlayBottomClick: function popupOverlayBottomClick() {
      this.isBottomShow = false;
    },
    pickDate: function pickDate(val) {
      var _this = this;

      picker.pickDate({
        value: this.value
      }, function (event) {
        if (event.result === "success") {
          _this.timeStartValue = event.data;
        }
      });
    },
    pickTime: function pickTime() {
      var _this2 = this;

      picker.pickTime({
        value: this.dateStartValue
      }, function (event) {
        if (event.result === "success") {
          _this2.dateStartValue = event.data;
        }
      });
    },
    pickTime2: function pickTime2() {
      var _this3 = this;

      picker.pickTime({
        value: this.dateEndValue
      }, function (event) {
        if (event.result === "success") {
          _this3.dateEndValue = event.data;
        }
      });
    },
    pickTimeClose: function pickTimeClose() {
      if (this.dateStartValue == '选择开始时间') {
        eeui.toast({
          message: '请选择开始时间',
          gravity: 'top'
        });
        return false;
      }

      if (this.dateEndValue == '选择结束时间') {
        eeui.toast({
          message: '请择结束时间',
          gravity: 'top'
        });
        return false;
      }

      this.isBottomShow = false;
      this.setRunInfo.startTime = this.dateStartValue;
      this.setRunInfo.endTime = this.dateEndValue;
    },
    wxcCheckBoxListChecked: function wxcCheckBoxListChecked(e) {
      this.checkedList = e.checkedList;
    },
    wxcCheckBoxItemChecked: function wxcCheckBoxItemChecked(e) {
      eeui.toast(e.checked);
    },
    goback: function goback() {
      this.$emit("runclose");
    },
    getUserInfo: function getUserInfo() {
      var self = this;
      stream.fetch({
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].getUserInfo,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == 200) {
          self.userInfo = res.data;
        }
      });
    },
    deteleObject: function deteleObject(obj) {
      var uniques = [];
      var stringify = {};

      for (var i = 0; i < obj.length; i++) {
        var keys = Object.keys(obj[i]);
        keys.sort(function (a, b) {
          return Number(a) - Number(b);
        });
        var str = '';

        for (var j = 0; j < keys.length; j++) {
          str += JSON.stringify(keys[j]);
          str += JSON.stringify(obj[i][keys[j]]);
        }

        if (!stringify.hasOwnProperty(str)) {
          uniques.push(obj[i]);
          stringify[str] = true;
        }
      }

      uniques = uniques;
      return uniques;
    },
    setKeyBord: function setKeyBord() {
      var variable = eeui.keyboardStatus();
      this.cliindex = 1;
    },
    setKeyBord1: function setKeyBord1() {
      var variable = eeui.keyboardStatus();
      this.cliindex = 0;
    }
  },
  created: function created() {
    // 添加 字体图标
    var domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont",
      src: "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
    });
    this.getUserInfo(); //拦截返回

    eeui.setPageBackPressed({
      pageName: "set.js"
    }, function () {//返回键触发事件
    });
  },
  watch: {},
  mounted: function mounted() {
    var self = this; //安卓返回值

    globalEvent.addEventListener("markCallback", function (data) {
      if (data.install.length > 0) {
        self.ponitList.push(data.install);
      }
    });
  }
}, "created", function created() {
  eeui.keyboardHide();
}));

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/homePages/sport/addfile.vue":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/homePages/sport/addfile.vue ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_wxc_cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/wxc-cell */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.js");
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../fetch/api/apis */ "./src/fetch/api/apis.js");
/* harmony import */ var _components_runSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/runSet */ "./src/components/runSet.vue");
/* harmony import */ var _components_runSet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_runSet__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var picker = weex.requireModule('picker');
var eeui = app.requireModule('eeui');
var stream = app.requireModule('stream');


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcCell: weex_ui_packages_wxc_cell__WEBPACK_IMPORTED_MODULE_0__["default"],
    runSet: _components_runSet__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  data: function data() {
    return {
      timeValue: '',
      dateValue: '',
      value: '',
      value2: '',
      title: '',
      items: ['大一', '大二', '大三', '大四', '高一', '高二', '高三'],
      items2: ['身高', '体重', '跑步', '跳远'],
      id: app.config.params.id,
      futitle: app.config.params.title,
      courseTitle: app.config.params.courseTitle,
      runsetShow: false,
      courseId: app.config.params.courseId,
      course_class_run_id: 0
    };
  },
  methods: {
    //跑步主题创建
    createRun: function createRun(title, id, futitle, courseTitle, courseId) {
      var self = this;
      stream.fetch({
        method: 'POST',
        type: 'json',
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_1__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_1__["default"].createRun,
        body: JSON.stringify({
          title: title,
          course_class_id: id
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          //   self.runsetShow=true;
          self.course_class_run_id = res.data.course_class_run_id;
          eeui.openPage({
            pageName: 'setrun',
            pageType: 'app',
            url: '../set.js',
            params: {
              courseTitle: courseTitle,
              title: futitle,
              id: id,
              courseId: courseId,
              ctitle: title,
              courseRunId: self.course_class_run_id
            }
          }, function (result) {});
        } else {
          eeui.toast({
            message: decodeURIComponent(res.headers['x-mzq-message']),
            gravity: 'top'
          });
        }
      });
    },
    closeDialog: function closeDialog() {
      this.runsetShow = false;
    },
    wxcCellClicked: function wxcCellClicked(e) {
      this.pick();
    },
    wxcCellClicked2: function wxcCellClicked2(e) {
      this.pick2();
    },
    pick: function pick() {
      var _this = this;

      picker.pick({
        items: this.items
      }, function (event) {
        if (event.result === 'success') {
          _this.value = _this.items[event.data];
        }
      });
    },
    pick2: function pick2() {
      var _this2 = this;

      picker.pick({
        items: this.items2
      }, function (event) {
        if (event.result === 'success') {
          _this2.value2 = _this2.items2[event.data];
        }
      });
    }
  },
  created: function created() {
    // 添加 字体图标
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
    });
    var platform = WXEnvironment.platform.toLowerCase();
    var self = this;

    if (platform != 'ios') {
      eeui.setPageBackPressed(eeui.getPageInfo().pageName, function () {
        eeui.toastClose();
        eeui.openPage({
          pageName: 'layout',
          pageType: 'app',
          url: '../layoutPage.js',
          params: {
            courseTitle: self.courseTitle,
            title: self.futitle,
            id: self.id,
            courseId: self.courseId
          }
        }, function (result) {//......
        });
      });
    }
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-149d58ea!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-149d58ea!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingLeft": "24",
    "paddingRight": "24",
    "backgroundColor": "#ffffff"
  },
  "cell-margin": {
    "marginBottom": "24"
  },
  "cell-title": {
    "flex": 1
  },
  "cell-indent": {
    "paddingBottom": "30",
    "paddingTop": "30"
  },
  "has-desc": {
    "paddingBottom": "18",
    "paddingTop": "18"
  },
  "cell-top-border": {
    "borderTopColor": "#e2e2e2",
    "borderTopWidth": "1"
  },
  "cell-bottom-border": {
    "borderBottomColor": "#e2e2e2",
    "borderBottomWidth": "1"
  },
  "cell-label-text": {
    "fontSize": "30",
    "color": "#666666",
    "width": "188",
    "marginRight": "10"
  },
  "cell-arrow-icon": {
    "width": "22",
    "height": "22"
  },
  "cell-content": {
    "color": "#333333",
    "fontSize": "30",
    "lineHeight": "40"
  },
  "cell-desc-text": {
    "color": "#999999",
    "fontSize": "24",
    "lineHeight": "30",
    "marginTop": "4",
    "marginRight": "30"
  },
  "extra-content-text": {
    "fontSize": "28",
    "color": "#999999",
    "marginRight": "4"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2c121b2c!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2c121b2c!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "checkbox": {
    "width": "48",
    "height": "48"
  },
  "title-text": {
    "fontSize": "30"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2f0a9910!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/homePages/sport/addfile.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2f0a9910!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/homePages/sport/addfile.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#1eb76e"
  },
  "headtext": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "iconshow": {
    "fontFamily": "iconfont",
    "fontSize": 50,
    "color": "#2fdc7e"
  },
  "celltitle": {
    "flexDirection": "row",
    "marginLeft": 15,
    "alignItems": "center"
  },
  "icontit": {
    "fontSize": 30,
    "color": "#199153",
    "marginLeft": 10
  },
  "beiaerebox": {
    "width": 750,
    "alignItems": "center",
    "marginTop": 20
  },
  "beiaere": {
    "width": 689,
    "height": 100,
    "borderColor": "#999999",
    "borderWidth": 1,
    "fontSize": 28
  },
  "button": {
    "width": 680,
    "height": 90,
    "marginTop": 200,
    "backgroundColor": "#1eb76e"
  },
  "inputText": {
    "width": "400",
    "height": "80"
  },
  "cellItem": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "backgroundColor": "#ffffff",
    "height": "100",
    "alignItems": "center",
    "borderBottomColor": "#e3e3e3",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid"
  },
  "rightInput": {
    "width": 500,
    "height": 90,
    "fontSize": "30",
    "textAlign": "right",
    "paddingRight": "55"
  },
  "leftText": {
    "paddingLeft": "25",
    "fontSize": "30",
    "color": "#333333"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-34cae37f!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-34cae37f!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-popup": {
    "position": "fixed",
    "width": "750"
  },
  "top": {
    "left": 0,
    "right": 0
  },
  "bottom": {
    "left": 0,
    "right": 0
  },
  "left": {
    "bottom": 0,
    "top": 0
  },
  "right": {
    "bottom": 0,
    "top": 0
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-48d7063a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-48d7063a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-overlay": {
    "width": "750",
    "position": "fixed",
    "bottom": 0,
    "right": 0
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4f27ba47!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/runSet.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-4f27ba47!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/runSet.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "position": "absolute",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#ffffff"
  },
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#1eb76e"
  },
  "scroller": {
    "height": "1500"
  },
  "scrollcc": {
    "height": "800"
  },
  "icon11": {
    "color": "#ffffff",
    "width": "100",
    "height": "100",
    "fontSize": "40"
  },
  "headtext": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "settab": {
    "width": 690,
    "marginLeft": 30
  },
  "setItem": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "height": 100,
    "borderBottomColor": "#c2c2c2",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "alignItems": "center"
  },
  "rightArrow": {
    "fontSize": 40,
    "fontFamily": "iconfont",
    "color": "#c2c2c2",
    "marginLeft": 30
  },
  "settabicon": {
    "fontSize": 40,
    "fontFamily": "iconfont",
    "color": "#1eb76e"
  },
  "left": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "right": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "settabtext": {
    "fontSize": 28,
    "color": "#666666",
    "marginLeft": 20
  },
  "righttext": {
    "fontSize": 28,
    "color": "#333333"
  },
  "setbigItem": {
    "borderBottomColor": "#c2c2c2",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "paddingBottom": 30
  },
  "setbigline": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": 30
  },
  "inputBox": {
    "width": 60,
    "height": 40,
    "backgroundColor": "#e9e9e9",
    "textAlign": "center",
    "lineHeight": 40,
    "fontSize": 26,
    "marginLeft": 255
  },
  "inputBoxM": {
    "width": 60,
    "height": 40,
    "backgroundColor": "#e9e9e9",
    "textAlign": "center",
    "lineHeight": 40,
    "fontSize": 26,
    "marginLeft": 20
  },
  "comp": {
    "fontSize": 28,
    "color": "#666666",
    "marginLeft": 20
  },
  "ml60": {
    "marginLeft": 60
  },
  "ml44": {
    "marginLeft": 64
  },
  "additem": {
    "fontSize": 36,
    "fontFamily": "iconfont",
    "color": "#ce7d14",
    "marginLeft": 10
  },
  "deleteIcon": {
    "fontSize": 37,
    "fontFamily": "iconfont",
    "color": "#d82e61",
    "marginLeft": 8
  },
  "commit": {
    "width": 690,
    "marginLeft": 30,
    "height": 80,
    "marginTop": 50,
    "marginBottom": 50
  },
  "maskTit": {
    "fontSize": 28,
    "marginTop": 20,
    "color": "#333333",
    "borderBottomColor": "#c2c2c2",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "paddingBottom": 20,
    "paddingLeft": 20
  },
  "enterinputBox": {
    "height": 250
  },
  "enterMa": {
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#c2c2c2",
    "width": 400,
    "height": 80,
    "marginLeft": 50,
    "marginTop": 80,
    "paddingLeft": 10
  },
  "sureBtn": {
    "width": "440",
    "height": 60,
    "marginLeft": 30
  },
  "databox": {
    "fontSize": 32,
    "borderBottomColor": "#c2c2c2",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "paddingBottom": 20,
    "paddingTop": 20,
    "paddingLeft": 20
  },
  "timebox": {
    "marginTop": 20,
    "marginLeft": 20,
    "flexDirection": "row"
  },
  "timedata": {
    "fontSize": 28,
    "paddingLeft": 30,
    "paddingRight": 30,
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderColor": "#c2c2c2",
    "borderStyle": "solid",
    "borderWidth": "1",
    "marginRight": 20,
    "borderRadius": 8,
    "marginTop": 20
  },
  "timedata2": {
    "fontSize": 28,
    "paddingLeft": 30,
    "paddingRight": 30,
    "paddingTop": 10,
    "paddingBottom": 10,
    "marginRight": 10,
    "borderRadius": 8,
    "marginTop": 20
  },
  "cur": {
    "backgroundColor": "#1eb76e",
    "color": "#ffffff"
  },
  "dataList": {
    "flexDirection": "row",
    "marginLeft": 80,
    "marginTop": 60
  },
  "sureBtn2": {
    "width": 690,
    "marginLeft": 30,
    "marginTop": 160,
    "height": 80
  },
  "databutton": {
    "width": "600",
    "height": "80",
    "marginLeft": 20,
    "marginTop": 30
  },
  "inputL": {
    "marginLeft": "98"
  },
  "popupBtn": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "pbtn": {
    "borderRadius": 0,
    "width": "375",
    "height": "70"
  },
  "sureB": {
    "backgroundColor": "#08ce7f"
  },
  "cancleB": {
    "backgroundColor": "#bbbbbb"
  },
  "setbodyItem": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingTop": "50"
  },
  "setbodyText": {
    "fontSize": "30",
    "marginRight": "20"
  },
  "setBodycont": {
    "alignItems": "center"
  },
  "setSelStudent": {
    "fontSize": "30",
    "width": "420",
    "height": "60",
    "borderWidth": "1",
    "borderColor": "#999999",
    "borderStyle": "solid",
    "lineHeight": "60",
    "paddingLeft": "10",
    "borderRadius": "8"
  },
  "grey": {
    "color": "#999999"
  },
  "punchWrap": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": "30",
    "paddingLeft": "30"
  },
  "addBtn": {
    "width": "690",
    "borderColor": "#1eb76e",
    "borderStyle": "solid",
    "borderWidth": "2",
    "backgroundColor": "#ffffff",
    "borderRadius": "10",
    "alignItems": "center"
  },
  "icon22": {
    "color": "#1eb76e",
    "fontSize": "42",
    "width": "60",
    "height": "60"
  },
  "trajectory": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginTop": "26",
    "marginRight": 0,
    "marginBottom": "8",
    "marginLeft": 0
  },
  "btnlf": {
    "flex": 1
  },
  "tbtn1": {
    "width": "150",
    "height": "60",
    "lineHeight": "60",
    "borderRadius": "10",
    "textAlign": "center",
    "color": "#ffffff",
    "fontSize": "28"
  },
  "btnrl": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "tbtn2": {
    "marginLeft": "10"
  },
  "fixedBtn": {
    "paddingTop": "30",
    "paddingRight": "30",
    "paddingBottom": 0,
    "paddingLeft": "30",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "pbtn2": {
    "borderRadius": 0,
    "flex": 1,
    "height": "90"
  },
  "sureB1": {
    "backgroundColor": "#08ce7f",
    "marginLeft": "20"
  },
  "cancleB1": {
    "backgroundColor": "#bbbbbb"
  },
  "selSelInput": {
    "fontSize": "30",
    "width": "340",
    "height": "60",
    "borderWidth": "1",
    "borderColor": "#999999",
    "borderStyle": "solid",
    "lineHeight": "60",
    "paddingLeft": "10",
    "borderRadius": "8"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-a17426d6!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-a17426d6!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "position": "fixed",
    "width": "750",
    "zIndex": 99999
  },
  "wxc-mask": {
    "position": "fixed"
  },
  "mask-bottom": {
    "width": "100",
    "height": "100",
    "backgroundColor": "rgba(0,0,0,0)",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "mask-close-icon": {
    "width": "64",
    "height": "64"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-149d58ea!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-149d58ea!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    class: ['wxc-cell', _vm.hasTopBorder && 'cell-top-border', _vm.hasBottomBorder && 'cell-bottom-border', _vm.hasMargin && 'cell-margin', _vm.hasVerticalIndent && 'cell-indent', _vm.desc && 'has-desc'],
    style: _vm.cellStyle,
    attrs: {
      "accessible": _vm.autoAccessible,
      "ariaLabel": (_vm.label + "," + _vm.title + "," + _vm.desc)
    },
    on: {
      "click": _vm.cellClicked
    }
  }, [_vm._t("label", [(_vm.label) ? _c('div', [_c('text', {
    staticClass: ["cell-label-text"]
  }, [_vm._v(_vm._s(_vm.label))])]) : _vm._e()]), _c('div', {
    staticClass: ["cell-title"]
  }, [_vm._t("title", [_c('text', {
    staticClass: ["cell-content"]
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.desc) ? _c('text', {
    staticClass: ["cell-desc-text"]
  }, [_vm._v(_vm._s(_vm.desc))]) : _vm._e()])], 2), _vm._t("value"), _vm._t("default"), (_vm.extraContent) ? _c('text', {
    staticClass: ["extra-content-text"]
  }, [_vm._v(_vm._s(_vm.extraContent))]) : _vm._e(), (_vm.hasArrow) ? _c('image', {
    staticClass: ["cell-arrow-icon"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2c121b2c!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2c121b2c!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('wxc-cell', {
    attrs: {
      "hasTopBorder": _vm.hasTopBorder,
      "hasBottomBorder": _vm.hasBottomBorder,
      "accessible": true,
      "ariaLabel": (_vm.title + ",状态为" + (_vm.checked ? '已选中' : '未选中') + "," + (_vm.disabled ? '不可更改' : '点击可切换'))
    },
    on: {
      "wxcCellClicked": _vm.wxcCellClicked
    }
  }, [_c('text', {
    staticClass: ["title-text"],
    style: {
      color: _vm.textColor
    },
    attrs: {
      "slot": "title"
    },
    slot: "title"
  }, [_vm._v(_vm._s(_vm.title))]), _c('image', {
    staticClass: ["checkbox"],
    attrs: {
      "slot": "value",
      "src": _vm.checkIcon
    },
    slot: "value"
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2f0a9910!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/homePages/sport/addfile.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2f0a9910!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/homePages/sport/addfile.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbarb"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "back"
    }
  }), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v("新增运动")])])], 1), _c('div', {
    staticClass: ["cellList"]
  }, [_c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("标题")]), _c('input', {
    staticClass: ["rightInput"],
    attrs: {
      "type": "text",
      "autofocus": "false",
      "placeholder": "请输入标题",
      "value": (_vm.title)
    },
    on: {
      "input": function($event) {
        _vm.title = $event.target.attr.value
      }
    }
  })])]), _c('div', {
    staticClass: ["beiaerebox"]
  }, [_c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '保存',
        backgroundColor: '#1eb76e'
      }
    },
    on: {
      "click": function($event) {
        _vm.createRun(_vm.title, _vm.id, _vm.courseTitle, _vm.futitle, _vm.courseId)
      }
    }
  })], 1), (_vm.runsetShow) ? _c('run-set', {
    attrs: {
      "runId": _vm.course_class_run_id,
      "runTitle": _vm.title
    },
    on: {
      "runclose": _vm.closeDialog
    }
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-34cae37f!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-34cae37f!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    on: {
      "touchend": _vm.handleTouchEnd
    }
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    ref: "overlay",
    attrs: {
      "show": _vm.haveOverlay && _vm.isOverShow
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking
    }
  }, 'wxc-overlay', _vm.overlayCfg, false)) : _vm._e()], 1), (_vm.show) ? _c('div', {
    ref: "wxc-popup",
    class: ['wxc-popup', _vm.pos],
    style: _vm.padStyle,
    attrs: {
      "height": _vm._height,
      "hack": _vm.isNeedShow
    },
    on: {
      "click": function () {}
    }
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-48d7063a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-48d7063a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-overlay/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.show) ? _c('div', {
    ref: "wxc-overlay",
    staticClass: ["wxc-overlay"],
    style: _vm.overlayStyle,
    attrs: {
      "hack": _vm.shouldShow
    },
    on: {
      "click": _vm.overlayClicked
    }
  }) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4f27ba47!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/runSet.vue":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-4f27ba47!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/runSet.vue ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbarb"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "left"
    },
    on: {
      "click": _vm.goback
    }
  }, [_c('icon', {
    staticClass: ["icon11"],
    attrs: {
      "content": "md-arrow-back"
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v("课程设置")])])], 1), _c('scroller', {
    staticClass: ["scroller"],
    class: [_vm.cliindex == 1 ? 'scrollcc' : '']
  }, [_c('div', {
    staticClass: ["settab"]
  }, [_c('div', {
    staticClass: ["setItem"]
  }, [_vm._m(0), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["righttext"]
  }, [_vm._v(_vm._s(_vm.runTitle))])])]), _c('div', {
    staticClass: ["setItem"],
    on: {
      "click": _vm.openBottomPopup
    }
  }, [_vm._m(1), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["righttext"]
  }, [_vm._v(_vm._s(_vm.setRunInfo.startTime) + "-" + _vm._s(_vm.setRunInfo.endTime))]), _c('text', {
    staticClass: ["rightArrow"]
  }, [_vm._v("")])])]), _c('div', {
    staticClass: ["setItem"]
  }, [_vm._m(2), _c('div', {
    staticClass: ["right"]
  }, [_c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.trackShow
    },
    on: {
      "change": _vm.trackPlay
    }
  })])]), (_vm.trackShow) ? _c('div', {
    staticClass: ["setItem"],
    on: {
      "click": _vm.popupRightShow
    }
  }, [_vm._m(3), _c('div', {
    staticClass: ["right"]
  }, [_c('text', {
    staticClass: ["righttext"]
  }, [_vm._v(_vm._s(_vm.schoolPickT))]), _c('text', {
    staticClass: ["rightArrow"]
  }, [_vm._v("")])])]) : _vm._e(), _c('div', {
    staticClass: ["setbigItem"],
    on: {
      "click": _vm.setKeyBord
    }
  }, [_c('div', {
    staticClass: ["setbigline"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("本学期目标（男）")]), _c('input', {
    staticClass: ["inputBox"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.boy_km)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "boy_km", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")])]), _c('div', {
    staticClass: ["setbigline"]
  }, [_c('text', {
    staticClass: ["settabtext", "ml60"]
  }, [_vm._v("单次最低:")]), _c('input', {
    staticClass: ["inputBoxM"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.boy_min)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "boy_min", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")]), _c('text', {
    staticClass: ["settabtext", "ml44"]
  }, [_vm._v("单次最高:")]), _c('input', {
    staticClass: ["inputBoxM"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.boy_max)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "boy_max", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")])]), _vm._l((_vm.setRunInfo.boy_list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["setbigline"]
    }, [_c('text', {
      staticClass: ["settabtext", "ml60"]
    }, [_vm._v("分值设置:")]), _c('input', {
      staticClass: ["inputBoxM"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.min)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "min", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticStyle: {
        marginLeft: "20"
      }
    }, [_vm._v("-")]), _c('input', {
      staticClass: ["inputBoxM"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.max)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "max", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticClass: ["comp"]
    }, [_vm._v("公里")]), _c('input', {
      staticClass: ["inputBoxM", "inputL"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.point)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "point", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticClass: ["comp"]
    }, [_vm._v("分")]), (item.isaddShow) ? _c('text', {
      staticClass: ["additem"],
      on: {
        "click": _vm.addBoyItem
      }
    }, [_vm._v("")]) : _vm._e(), (item.isdelShow) ? _c('text', {
      staticClass: ["deleteIcon"],
      on: {
        "click": _vm.delBoyItem
      }
    }, [_vm._v("")]) : _vm._e()])
  })], 2), _c('div', {
    staticClass: ["setbigItem"]
  }, [_c('div', {
    staticClass: ["setbigline"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("本学期目标（女）")]), _c('input', {
    staticClass: ["inputBox"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.girl_km)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "girl_km", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")])]), _c('div', {
    staticClass: ["setbigline"]
  }, [_c('text', {
    staticClass: ["settabtext", "ml60"]
  }, [_vm._v("单次最低:")]), _c('input', {
    staticClass: ["inputBoxM"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.girl_min)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "girl_min", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")]), _c('text', {
    staticClass: ["settabtext", "ml44"]
  }, [_vm._v("单次最高:")]), _c('input', {
    staticClass: ["inputBoxM"],
    attrs: {
      "type": "number",
      "placeholder": "0",
      "value": (_vm.setRunInfo.girl_max)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "girl_max", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["comp"]
  }, [_vm._v("公里")])]), _vm._l((_vm.setRunInfo.girl_list), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["setbigline"]
    }, [_c('text', {
      staticClass: ["settabtext", "ml60"]
    }, [_vm._v("分值设置:")]), _c('input', {
      staticClass: ["inputBoxM"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.min)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "min", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticStyle: {
        marginLeft: "20"
      }
    }, [_vm._v("-")]), _c('input', {
      staticClass: ["inputBoxM"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.max)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "max", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticClass: ["comp"]
    }, [_vm._v("公里")]), _c('input', {
      staticClass: ["inputBoxM", "inputL"],
      attrs: {
        "type": "number",
        "placeholder": "0",
        "value": (item.point)
      },
      on: {
        "input": function($event) {
          _vm.$set(item, "point", $event.target.attr.value)
        }
      }
    }), _c('text', {
      staticClass: ["comp"]
    }, [_vm._v("分")]), (item.isaddShow) ? _c('text', {
      staticClass: ["additem"],
      on: {
        "click": _vm.addGirlItem
      }
    }, [_vm._v("")]) : _vm._e(), (item.isdelShow) ? _c('text', {
      staticClass: ["deleteIcon"],
      on: {
        "click": _vm.delGirlItem
      }
    }, [_vm._v("")]) : _vm._e()])
  })], 2), _c('div', {
    staticClass: ["setItem"]
  }, [_vm._m(4), _c('div', {
    staticClass: ["right"]
  }, [_c('switch', {
    staticClass: ["switch"],
    attrs: {
      "checked": _vm.loading
    },
    on: {
      "change": function($event) {
        _vm.loading = !_vm.loading
      }
    }
  })])]), _c('div', {
    staticClass: ["setItem"]
  }, [_vm._m(5), _c('div', {
    staticClass: ["right"]
  }, [_c('input', {
    staticClass: ["inputBoxM"],
    attrs: {
      "type": "number",
      "value": "0",
      "value": (_vm.setRunInfo.percentage)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.setRunInfo, "percentage", $event.target.attr.value)
      }
    }
  }), _c('text', {
    staticClass: ["rightArrow"]
  }, [_vm._v("%")])])])]), _c('button', {
    staticClass: ["commit"],
    attrs: {
      "eeui": {
        text: '提交',
        backgroundColor: '#1eb76e'
      }
    },
    on: {
      "click": _vm.setover
    }
  })], 1), _c('wxc-popup', {
    attrs: {
      "popupColor": "#eee",
      "show": _vm.isBottomShow2,
      "pos": "bottom",
      "height": "320"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupBottomShow
    }
  }, [_c('div', {
    staticClass: ["popupBtn"]
  }, [_c('button', {
    staticClass: ["cancleB", "pbtn"],
    attrs: {
      "eeui": {
        text: '取消'
      }
    },
    on: {
      "click": _vm.popupBottomShow
    }
  }), _c('button', {
    staticClass: ["sureB", "pbtn"],
    attrs: {
      "eeui": {
        text: '确定'
      }
    },
    on: {
      "click": _vm.startSure
    }
  })], 1), _c('div', {
    staticClass: ["setBodycont"]
  }, [_c('div', {
    staticClass: ["setbodyItem"]
  }, [_c('text', {
    staticClass: ["setbodyText"]
  }, [_vm._v("校区")]), _c('text', {
    staticClass: ["setSelStudent", "grey"],
    on: {
      "click": _vm.pickSchollList
    }
  }, [_vm._v(_vm._s(_vm.schoolText))])])])]), _c('wxc-popup', {
    attrs: {
      "popupColor": "#fff",
      "show": _vm.isRightShow,
      "pos": "right"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupRightHide
    }
  }, [_c('navbar', {
    staticClass: ["navbarb"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v("打卡点设置")])])], 1), _c('div', {
    staticClass: ["punchWrap"]
  }, [_c('div', {
    staticClass: ["addBtn"],
    on: {
      "click": _vm.openBottomPopupShow
    }
  }, [_c('icon', {
    staticClass: ["icon22"],
    attrs: {
      "content": "md-add"
    }
  })], 1), (_vm.ponitList.length > 0) ? _c('div', _vm._l((_vm.ponitList), function(points, index) {
    return _c('div', {
      key: index,
      staticClass: ["trajectory"]
    }, [_c('div', {
      staticClass: ["btnlf"]
    }, [_c('button', {
      staticClass: ["tbtn1"],
      attrs: {
        "eeui": {
          text: '轨迹' + (index + 1),
          borderWidth: 2,
          borderColor: '#1eb76e',
          backgroundColor: '#1eb76e'
        }
      }
    })], 1), _c('div', {
      staticClass: ["btnrl"]
    }, [_c('button', {
      staticClass: ["tbtn1"],
      attrs: {
        "eeui": {
          text: '编辑',
          borderWidth: 2,
          borderColor: '#1eb76e',
          backgroundColor: '#1eb76e'
        }
      },
      on: {
        "click": function($event) {
          _vm.mapEdit(points)
        }
      }
    }), _c('button', {
      staticClass: ["tbtn1", "tbtn2"],
      attrs: {
        "eeui": {
          text: '删除',
          borderWidth: 2,
          borderColor: '#1eb76e',
          backgroundColor: '#1eb76e'
        }
      },
      on: {
        "click": function($event) {
          _vm.delMap(points)
        }
      }
    })], 1)])
  })) : _vm._e()]), _c('div', {
    staticClass: ["fixedBtn"]
  }, [_c('button', {
    staticClass: ["cancleB1", "pbtn2"],
    attrs: {
      "eeui": {
        text: '取消'
      }
    },
    on: {
      "click": _vm.popupRightHide
    }
  }), _c('button', {
    staticClass: ["sureB1", "pbtn2"],
    attrs: {
      "eeui": {
        text: '确定'
      }
    },
    on: {
      "click": _vm.saveTrack
    }
  })], 1)], 1), _c('wxc-mask', {
    attrs: {
      "height": "400",
      "width": "500",
      "borderRadius": "8",
      "duration": "200",
      "maskBgColor": "#FFFFFF",
      "hasAnimation": _vm.hasAnimation,
      "hasOverlay": true,
      "showClose": true,
      "show": _vm.maskShow
    },
    on: {
      "wxcMaskSetHidden": _vm.wxcMaskSetHidden
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["maskTit"]
  }, [_vm._v("输入绑定课程码")]), _c('div', {
    staticClass: ["enterinputBox"]
  }, [_c('input', {
    staticClass: ["enterMa"],
    attrs: {
      "placeholder": "输入班级码",
      "type": "text"
    }
  })]), _c('div', {
    staticClass: ["groupBtn"]
  }, [_c('button', {
    staticClass: ["sureBtn"],
    attrs: {
      "eeui": {
        text: '绑定课程',
        backgroundColor: '#1eb76e'
      }
    }
  })], 1)])]), _c('wxc-mask', {
    attrs: {
      "height": "1000",
      "width": "640",
      "borderRadius": "8",
      "duration": "200",
      "maskBgColor": "#FFFFFF",
      "hasAnimation": _vm.hasAnimation,
      "hasOverlay": true,
      "showClose": true,
      "show": _vm.maskShow2
    },
    on: {
      "wxcMaskSetHidden": _vm.wxcMaskSetHidden2
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('wxc-checkbox-list', {
    attrs: {
      "list": _vm.list
    },
    on: {
      "wxcCheckBoxListChecked": _vm.wxcCheckBoxListChecked,
      "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
    }
  }), _c('button', {
    staticClass: ["databutton"],
    attrs: {
      "eeui": {
        text: '确定',
        backgroundColor: '#1eb76e',
        fontSize: '30'
      }
    },
    on: {
      "click": _vm.wxcMaskSetHidden2
    }
  })], 1)]), _c('wxc-popup', {
    attrs: {
      "popupColor": "#ffffff",
      "show": _vm.isBottomShow,
      "pos": "bottom",
      "height": _vm.height
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["content"]
  }, [_c('text', {
    staticClass: ["databox"],
    staticStyle: {
      marginTop: "20"
    }
  }, [_vm._v("时间选择")]), _c('div', {
    staticClass: ["dataList"]
  }, [_c('text', {
    staticClass: ["timedata"],
    on: {
      "click": _vm.pickTime
    }
  }, [_vm._v(_vm._s(_vm.dateStartValue))]), _c('text', {
    staticClass: ["timedata2"]
  }, [_vm._v("-")]), _c('text', {
    staticClass: ["timedata"],
    on: {
      "click": _vm.pickTime2
    }
  }, [_vm._v(_vm._s(_vm.dateEndValue))])]), _c('button', {
    staticClass: ["sureBtn2"],
    attrs: {
      "eeui": {
        text: '确定',
        backgroundColor: '#1eb76e'
      }
    },
    on: {
      "click": _vm.pickTimeClose
    }
  })], 1)])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("绑定运动")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("运动时间设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("打卡轨迹显示")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("打卡点设置")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("在学生端显示成绩")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["left"]
  }, [_c('text', {
    staticClass: ["settabicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["settabtext"]
  }, [_vm._v("占平时成绩比例")])])
}]}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4fc87b3b!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-4fc87b3b!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-checkbox-list/index.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', _vm._l((_vm.list), function(item, i) {
    return _c('wxc-checkbox', _vm._b({
      key: i,
      attrs: {
        "config": _vm.config
      },
      on: {
        "wxcCheckBoxItemChecked": _vm.wxcCheckBoxItemChecked
      }
    }, 'wxc-checkbox', item, false))
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-a17426d6!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-a17426d6!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-mask/index.vue ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
  }, [(_vm.show) ? _c('wxc-overlay', _vm._b({
    attrs: {
      "show": _vm.show && _vm.hasOverlay,
      "canAutoClose": _vm.overlayCanClose,
      "opacity": _vm.opacity
    },
    on: {
      "wxcOverlayBodyClicking": _vm.wxcOverlayBodyClicking,
      "wxcOverlayBodyClicked": _vm.wxcOverlayBodyClicked
    }
  }, 'wxc-overlay', _vm.mergeOverlayCfg, false)) : _vm._e(), (_vm.show) ? _c('div', {
    ref: "wxc-mask",
    staticClass: ["wxc-mask"],
    style: _vm.maskStyle,
    attrs: {
      "hack": _vm.shouldShow
    }
  }, [_c('div', {
    style: _vm.contentStyle
  }, [_vm._t("default")], 2), (_vm.showClose) ? _c('div', {
    staticClass: ["mask-bottom"],
    style: {
      width: _vm.width + 'px'
    },
    on: {
      "click": _vm.closeIconClicked
    }
  }, [_c('image', {
    staticClass: ["mask-close-icon"],
    attrs: {
      "src": _vm.closeIcon,
      "ariaLabel": "关闭"
    }
  })]) : _vm._e()]) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_webpack@4.42.1@webpack\\buildin\\global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });