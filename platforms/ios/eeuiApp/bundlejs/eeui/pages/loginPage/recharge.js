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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/loginPage/recharge.vue?entry=true");
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

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue":
/*!******************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-7a7b0a04!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-7a7b0a04!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-7a7b0a04!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-7a7b0a04!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-searchbar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7a7b0a04"
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

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/type.js":
/*!****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/type.js ***!
  \****************************************************************************/
/*! exports provided: INPUT_ICON, CLOSE_ICON, ARROW_ICON */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INPUT_ICON", function() { return INPUT_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_ICON", function() { return CLOSE_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ARROW_ICON", function() { return ARROW_ICON; });
var INPUT_ICON = 'https://gw.alicdn.com/tfs/TB1FZB.pwMPMeJjy1XdXXasrXXa-30-30.png';
var CLOSE_ICON = 'https://gw.alicdn.com/tfs/TB1sZB.pwMPMeJjy1XdXXasrXXa-24-24.png';
var ARROW_ICON = 'https://gw.alicdn.com/tfs/TB1vZB.pwMPMeJjy1XdXXasrXXa-24-24.png';

/***/ }),

/***/ "./src/components/radioList.vue":
/*!**************************************!*\
  !*** ./src/components/radioList.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-a2217e0e!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./radioList.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-a2217e0e!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/radioList.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./radioList.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/radioList.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-a2217e0e!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./radioList.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-a2217e0e!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/radioList.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\radioList.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-a2217e0e"
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

/***/ "./src/fetch/index.js":
/*!****************************!*\
  !*** ./src/fetch/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_apis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/apis.js */ "./src/fetch/api/apis.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eeui = app.requireModule('eeui');
var stream = app.requireModule('stream'); // import MD5 from 'blueimp-md5'  // 可以引入npm包，当你需要时

 // root-api

var API_BaseUrl = 'http://app.asyke.com'; //const API_BaseUrl = 'http://app.zruup.com.cn'

var API_OssUrl = 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com';
Vue.mixin({
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    // 全局请求函数
    $fetch: function $fetch(options) {
      // 缓存获取登录token
      //   let user_token = eeui.getCachesString('user_token')
      var apiUrl = "".concat(API_BaseUrl).concat(_api_apis_js__WEBPACK_IMPORTED_MODULE_0__["default"][options.name]); // 支持name和url

      apiUrl = options.url || apiUrl; // 支持methods和method

      options.method = options.method || options.methods;
      options.headers = options.headers || {};
      options.data = options.data || {}; // 添加自定义全局参数，比如APP版本号

      var versioncode = weex.config.env.appVersion;
      options.data.versioncode = versioncode; // 处理get请求
      // if (options.method.toLowerCase() === 'get' && options.data) {
      //     apiUrl += '?';
      //     for (let key in options.data) {
      //         apiUrl += `&${key}=${options.data[key]}`
      //     }
      // }

      return new Promise(function (resolve, reject) {
        stream.fetch({
          method: options.method,
          url: apiUrl,
          type: options.type || 'json',
          headers: _objectSpread({
            'Content-Type': 'application/json'
          }, options.headers),
          body: JSON.stringify(options.data)
        }, function (res) {
          if (res.ok && res.status === 200) {
            var data = res.data || {};
            resolve(data);
          } else {
            reject(res);
          }
        });
      });
    }
  }
});

/***/ }),

/***/ "./src/pages/loginPage/recharge.vue?entry=true":
/*!*****************************************************!*\
  !*** ./src/pages/loginPage/recharge.vue?entry=true ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-f30900ee!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./recharge.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-f30900ee!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/loginPage/recharge.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./recharge.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/loginPage/recharge.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-f30900ee!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./recharge.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-f30900ee!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/loginPage/recharge.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\loginPage\\recharge.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f30900ee"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./type */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/type.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    disabled: {
      type: Boolean,
      default: false
    },
    alwaysShowCancel: {
      type: Boolean,
      default: false
    },
    inputType: {
      type: String,
      default: 'text'
    },
    returnKeyType: {
      type: String,
      default: 'default'
    },
    mod: {
      type: String,
      default: 'default'
    },
    autofocus: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: 'gray'
    },
    barStyle: {
      type: Object,
      default: () => ({})
    },
    defaultValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '搜索'
    },
    cancelLabel: {
      type: String,
      default: '取消 '
    },
    depName: {
      type: String,
      default: '杭州'
    }
  },
  computed: {
    needShowCancel() {
      return this.alwaysShowCancel || this.showCancel;
    },

    buttonStyle() {
      const {
        barStyle
      } = this;

      if (barStyle.backgroundColor) {
        return {
          backgroundColor: barStyle.backgroundColor
        };
      }

      return {};
    }

  },
  data: () => ({
    inputIcon: _type__WEBPACK_IMPORTED_MODULE_0__["INPUT_ICON"],
    closeIcon: _type__WEBPACK_IMPORTED_MODULE_0__["CLOSE_ICON"],
    arrowIcon: _type__WEBPACK_IMPORTED_MODULE_0__["ARROW_ICON"],
    showCancel: false,
    showClose: false,
    value: ''
  }),

  created() {
    this.defaultValue && (this.value = this.defaultValue);

    if (this.disabled) {
      this.showCancel = false;
      this.showClose = false;
    }
  },

  methods: {
    onBlur() {
      const self = this;
      setTimeout(() => {
        self.showCancel = false;
        self.detectShowClose();
        self.$emit('wxcSearchbarInputOnBlur', {
          value: self.value
        });
      }, 10);
    },

    autoBlur() {
      this.$refs['search-input'].blur();
    },

    onFocus() {
      if (this.isDisabled) {
        return;
      }

      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnFocus', {
        value: this.value
      });
    },

    closeClicked() {
      this.value = '';
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCloseClicked', {
        value: this.value
      });
      this.$emit('wxcSearchbarInputOnInput', {
        value: this.value
      });
    },

    onInput(e) {
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputOnInput', {
        value: this.value
      });
    },

    onSubmit(e) {
      this.onBlur();
      this.value = e.value;
      this.showCancel = true;
      this.detectShowClose();
      this.$emit('wxcSearchbarInputReturned', {
        value: this.value
      });
    },

    cancelClicked() {
      this.showCancel && (this.showCancel = false);
      this.showClose && (this.showClose = false);
      this.$emit('wxcSearchbarCancelClicked', {
        value: this.value
      });
    },

    detectShowClose() {
      this.showClose = this.value.length > 0 && this.showCancel;
    },

    depClicked() {
      this.$emit('wxcSearchbarDepChooseClicked', {});
    },

    inputDisabledClicked() {
      this.$emit('wxcSearchbarInputDisabledClicked', {});
    },

    setValue(value) {
      this.value = value;
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/radioList.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/radioList.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
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
    danselectShow: {
      type: Boolean,
      "default": false
    },
    itemList: {
      type: Object,
      "default": []
    },
    top: {
      type: Number,
      "default": 300
    },
    height: {
      type: Number,
      "default": 300
    },
    curVal: {
      type: String,
      "default": ''
    },
    itemInfo: {
      type: Object,
      "default": []
    }
  },
  data: function data() {
    return {
      value: '',
      overlayCanClose: true,
      isFalse: false,
      hasAnimation: true,
      selindex: -1,
      heightBox: ''
    };
  },
  watch: {
    itemList: function itemList() {}
  },
  methods: {
    wxcRadioListChecked: function wxcRadioListChecked(e) {},
    openOverlay: function openOverlay() {
      this.show = true;
    },
    selItem: function selItem(index) {
      this.danselectShow = false;
      this.itemList.map(function (val) {
        val.checked = false;
      });
      this.itemList[index].checked = true; //console.log(this.itemList,'33333');

      this.$emit('hideDan', index, this.itemList[index].status);
    },
    wxcMaskSetHidden: function wxcMaskSetHidden() {
      this.danselectShow = false;
      this.$emit('hideDan');
    }
  },
  created: function created() {
    this.heightBox = this.$getConfig().env.deviceHeight;
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/loginPage/recharge.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/loginPage/recharge.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_wxc_searchbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/wxc-searchbar */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.js");
/* harmony import */ var weex_ui_packages_wxc_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! weex-ui/packages/wxc-popup */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popup/index.js");
/* harmony import */ var weex_ui_packages_wxc_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weex-ui/packages/wxc-cell */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-cell/index.js");
/* harmony import */ var _components_radioList_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/radioList.vue */ "./src/components/radioList.vue");
/* harmony import */ var _components_radioList_vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_radioList_vue__WEBPACK_IMPORTED_MODULE_3__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var stream = weex.requireModule("stream");
var eeui = app.requireModule("eeui");


__webpack_require__(/*! ../../fetch */ "./src/fetch/index.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WxcCell: weex_ui_packages_wxc_cell__WEBPACK_IMPORTED_MODULE_2__["default"],
    WxcPopup: weex_ui_packages_wxc_popup__WEBPACK_IMPORTED_MODULE_1__["default"],
    WxcSearchbar: weex_ui_packages_wxc_searchbar__WEBPACK_IMPORTED_MODULE_0__["default"],
    danSel: _components_radioList_vue__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      levelId: "",
      heightH: "",
      selindex: 0,
      eyeIcon: "ios-eye-off",
      inputType: "password",
      eyeIcon2: "ios-eye-off",
      inputType2: "password",
      danDiaogVal: {
        show: false,
        itemList: [],
        heightval: 400,
        top: 400,
        curVal: ""
      },
      successTip: false,
      schoolList: eeui.getCaches("schoollist", []),
      newSchoolList: [],
      value: "",
      searchShow: false,
      refreshing: false,
      loadinging: false,
      sexValue: "男",
      sexIndex: 0,
      sexList: [{
        text: "男",
        type: 1,
        checked: false,
        status: "sex"
      }, {
        text: "女",
        type: 2,
        checked: false,
        status: "sex"
      }],
      identityVal: "学生",
      identIndex: 1,
      identity: [{
        text: "学生",
        type: 1,
        checked: true,
        status: "ident"
      }, {
        text: "教师",
        type: 2,
        checked: false,
        status: "ident"
      }],
      enterYearList: [],
      //入学年
      enterYearVal: "2020",
      enterYearIndex: 0,
      stu_type: [{
        text: "体测学生",
        type: 1,
        checked: true,
        status: "stuType"
      } // { text: "普通学生", type: 2, checked: false, status: "stuType" }
      ],
      stu_val: "体测学生",
      stu_type_index: 1,
      danwei: "请选择单位",
      mingzuValue: "汉族",
      mingzu: [{
        text: "汉族",
        checked: true,
        status: "mingzu"
      }, {
        text: "蒙古族",
        checked: false,
        status: "mingzu"
      }, {
        text: "回族",
        checked: false,
        status: "mingzu"
      }, {
        text: "藏族",
        checked: false,
        status: "mingzu"
      }, {
        text: "维吾尔族",
        checked: false,
        status: "mingzu"
      }, {
        text: "苗族",
        checked: false,
        status: "mingzu"
      }, {
        text: "彝族",
        checked: false,
        status: "mingzu"
      }, {
        text: "壮族",
        checked: false,
        status: "mingzu"
      }, {
        text: "布依族",
        checked: false,
        status: "mingzu"
      }, {
        text: "朝鲜族",
        checked: false,
        status: "mingzu"
      }, {
        text: "满族",
        checked: false,
        status: "mingzu"
      }, {
        text: "侗族",
        checked: false,
        status: "mingzu"
      }, {
        text: "瑶族",
        checked: false,
        status: "mingzu"
      }, {
        text: "白族",
        checked: false,
        status: "mingzu"
      }, {
        text: "土家族",
        checked: false,
        status: "mingzu"
      }, {
        text: "哈萨克族",
        checked: false,
        status: "mingzu"
      }, {
        text: "傣族",
        checked: false,
        status: "mingzu"
      }, {
        text: "黎族",
        checked: false,
        status: "mingzu"
      }, {
        text: "傈僳族",
        checked: false,
        status: "mingzu"
      }, {
        text: "高山族",
        checked: false,
        status: "mingzu"
      }, {
        text: "畲族",
        checked: false,
        status: "mingzu"
      }, {
        text: "拉祜族",
        checked: false,
        status: "mingzu"
      }, {
        text: "水族",
        checked: false,
        status: "mingzu"
      }, {
        text: "纳西族",
        checked: false,
        status: "mingzu"
      }, {
        text: "景颇族",
        checked: false,
        status: "mingzu"
      }, {
        text: "柯尔克孜族",
        checked: false,
        status: "mingzu"
      }, {
        text: "土族",
        checked: false,
        status: "mingzu"
      }, {
        text: "达斡尔族",
        checked: false,
        status: "mingzu"
      }, {
        text: "仫佬族",
        checked: false,
        status: "mingzu"
      }, {
        text: "羌族",
        checked: false,
        status: "mingzu"
      }, {
        text: "布朗族",
        checked: false,
        status: "mingzu"
      }, {
        text: "撒拉族",
        checked: false,
        status: "mingzu"
      }, {
        text: "毛南族",
        checked: false,
        status: "mingzu"
      }, {
        text: "仡佬族",
        checked: false,
        status: "mingzu"
      }, {
        text: "锡伯族",
        checked: false,
        status: "mingzu"
      }, {
        text: "阿昌族",
        checked: false,
        status: "mingzu"
      }, {
        text: "普米族",
        checked: false,
        status: "mingzu"
      }, {
        text: "塔吉克族",
        checked: false,
        status: "mingzu"
      }, {
        text: "怒族",
        checked: false,
        status: "mingzu"
      }, {
        text: "乌孜别克族",
        checked: false,
        status: "mingzu"
      }, {
        text: "鄂温克族",
        checked: false,
        status: "mingzu"
      }, {
        text: "德昂族",
        checked: false,
        status: "mingzu"
      }, {
        text: "保安族",
        checked: false,
        status: "mingzu"
      }, {
        text: "裕固族",
        checked: false,
        status: "mingzu"
      }, {
        text: "京族",
        checked: false,
        status: "mingzu"
      }, {
        text: "塔塔尔族",
        checked: false,
        status: "mingzu"
      }, {
        text: "独龙族",
        checked: false,
        status: "mingzu"
      }, {
        text: "鄂伦春族",
        checked: false,
        status: "mingzu"
      }, {
        text: "赫哲族",
        checked: false,
        status: "mingzu"
      }, {
        text: "门巴族",
        checked: false,
        status: "mingzu"
      }, {
        text: "珞巴族",
        checked: false,
        status: "mingzu"
      }, {
        text: "基诺族",
        checked: false,
        status: "mingzu"
      }, {
        text: "穿青人",
        checked: false,
        status: "mingzu"
      }, {
        text: "外国血统",
        checked: false,
        status: "mingzu"
      }],
      is_hunban: false,
      hunban_one_name: "",
      //混班标题1
      hunban_two_name: "",
      //混班标题2
      hunban_three_name: "",
      //混班标题3
      hunban_one_val: "请选择",
      hunban_two_val: "请选择",
      hunban_three_val: "请选择",
      hunban_label_one: [],
      hunban_label_two: [],
      hunban_label_three: [],
      label_one: "",
      //等级名称
      label_two: "",
      label_three: "",
      label_four: "",
      labeList: [],
      //下级学院
      labeListTwo: [],
      //第二段下级
      labeOne: [],
      labeOneIndex: 0,
      labeOneVal: "请选择",
      labeTwo: [],
      labeTwoIndex: 0,
      labeTwoVal: "请选择",
      labeThree: [],
      labeThreeIndex: 0,
      labeThreeVal: "请选择",
      labeFour: [],
      labeFourIndex: 0,
      labeFourVal: "请选择",
      defaultavatorPath: "../../assets/images/defaultAvator.jpg",
      zhiwu: [],
      zwValue: [],
      zhiwu_val: "请选择职务",
      zwShow: false,
      // school_hunban_label_one:0,
      // school_hunban_label_two:0,
      // school_hunban_label_three:0,
      userInfo: {
        avatar_file: '',
        password: "",
        password_confirmation: "",
        name: "",
        sex: 1,
        type: 1,
        stu_type: 1,
        mobile: "",
        year: "2020级",
        school_id: "",
        school_label_one: 0,
        school_label_two: 0,
        school_label_three: 0,
        school_label_four: 0,
        school_hunban_label_one: 0,
        school_hunban_label_two: 0,
        school_hunban_label_three: 0,
        student_id: "",
        mingzu: "汉族",
        class_position: 0,
        card_id: "",
        address: "",
        mobile_uuid: "1111",
        mobile_platform: weex.config.env.platform,
        mobile_type: weex.config.env.deviceModel,
        unionid: ''
      },
      userInfoT: {
        mobile: "",
        password: "",
        password_confirmation: "",
        name: "",
        sex: 1,
        type: 2,
        school_id: "",
        school_label_one: 0,
        school_label_two: 0,
        school_label_three: 0,
        school_label_four: 0,
        mobile_uuid: "1111",
        mobile_platform: weex.config.env.platform,
        mobile_type: weex.config.env.deviceModel
      },
      usertips: true //用户协议

    };
  },
  watch: {
    //职务
    zhiwu: function zhiwu(val) {
      var _this = this;

      this.zwValue = [];

      if (val.show_position == 1) {
        this.zwShow = true;
        this.zhiwu.positions.map(function (el) {
          _this.zwValue.push({
            text: el.position_name,
            id: el.id,
            checked: false,
            status: "zhiwu"
          });
        });
        this.zwValue.push({
          text: "无",
          checked: false,
          status: "zhiwu"
        });
      }
    },
    value: function value(val) {
      if (val == "") {
        this.newSchoolList = [];
      } else {
        this.search(this.schoolList);
      }
    },
    danwei: function danwei(val, oldVal) {
      this.getOrganization(this.userInfo.school_id); // this.getOrganization2(this.userInfo.school_id);

      if (val != oldVal) {
        this.labeOne = [];
        this.labeOneVal = "请选择";
        this.userInfo.school_label_one = 0;
        this.userInfo.school_label_two = 0;
        this.userInfo.school_label_three = 0;
        this.userInfo.school_label_four = 0;
        this.labeTwo = [];
        this.labeTwoVal = "请选择";
        this.labeThree = [];
        this.labeThreeVal = "请选择";
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.hunban_one_val = "请选择";
        this.hunban_two_val = "请选择";
        this.hunban_three_val = "请选择";
        this.hunban_label_one = [];
        this.hunban_label_two = [];
        this.hunban_label_three = [];
      }
    },
    labeList: function labeList(val) {
      var self = this;
      self.labeOne = [];
      self.is_hunban = false;

      if (val.length > 0) {
        val.map(function (el) {
          if (el.p_id == 0 && el.is_hunban == 0) {
            self.labeOne.push({
              text: el.label_name,
              id: el.id,
              checked: false,
              status: "labeOne"
            }); //console.log(el.label_name);
          } else {
            //对混班的处理
            self.is_hunban = true;
            self.hunban_label_one.push({
              text: el.label_name,
              id: el.id,
              checked: false,
              status: "hunbanOne"
            });

            if (el.children) {
              el.children.map(function (hunbanVal) {
                self.hunban_label_two.push({
                  text: hunbanVal.label_name,
                  id: hunbanVal.id,
                  checked: false,
                  status: "hunbanTwo"
                });
              });
              self.hunban_label_two.push({
                text: "无",
                checked: false,
                status: "hunbanTwo"
              });
            }
          }
        });
        self.labeOne.push({
          text: "无",
          checked: false,
          status: "labeOne"
        });
      } //console.log(val);

    },
    labeOneVal: function labeOneVal(val, oldVal) {
      var self = this;
      self.labeTwo = [];

      if (val != oldVal) {
        this.labeTwo = [];
        this.labeTwoVal = "请选择";
        this.labeThree = [];
        this.labeThreeVal = "请选择";
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.userInfo.school_label_two = 0;
        this.userInfo.school_label_three = 0;
        this.userInfo.school_label_four = 0;
      }

      this.labeList.forEach(function (item, index) {
        if (val == item.label_name) {
          item.children.map(function (item2) {
            self.labeTwo.push({
              text: item2.label_name,
              id: item2.id,
              checked: false,
              status: "labeTwo"
            });
          });
          self.labeTwo.push({
            text: "无",
            checked: false,
            status: "labeTwo"
          });
          return;
        }
      }); //console.log(self.labeTwo);
    },
    labeTwoVal: function labeTwoVal(val, oldval) {
      if (val != oldval) {
        this.labeThree = [];
        this.labeThreeVal = "请选择";
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.userInfo.school_label_three = 0;
        this.userInfo.school_label_four = 0;
      }
    },
    labeListTwo: function labeListTwo(val, oldVal) {
      this.labeThree = [];
      var self = this;

      if (self.labeListTwo.length > 0) {
        self.labeListTwo.forEach(function (item) {
          self.labeThree.push({
            text: item.label_name,
            id: item.id,
            checked: false,
            status: "labeThree"
          });
        });
        self.labeThree.reverse();
        self.labeThree.push({
          text: "无",
          checked: false,
          status: "labeThree"
        }); //
      } //console.log(self.labeThree);

    },
    labeThreeVal: function labeThreeVal(val, oldVal) {
      var self = this;
      self.labeFour = [];

      if (val != oldVal) {
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.userInfo.school_label_four = 0;
      }

      this.labeListTwo.forEach(function (item) {
        if (val == item.label_name) {
          item.children.forEach(function (item2) {
            self.labeFour.push({
              text: item2.label_name,
              id: item2.id,
              checked: false,
              status: "labeFour"
            });
          });
          self.labeFour.push({
            text: "无",
            checked: false,
            status: "labeFour"
          });
          return;
        }
      });
    }
  },
  methods: {
    //用户协议
    userradio: function userradio() {
      this.usertips = !this.usertips;
    },
    openShowPassword: function openShowPassword() {
      if (this.eyeIcon == "ios-eye-off") {
        this.eyeIcon = "ios-eye";
        this.inputType = "text";
      } else {
        this.eyeIcon = "ios-eye-off";
        this.inputType = "password";
      }
    },
    openShowPassword2: function openShowPassword2() {
      if (this.eyeIcon2 == "ios-eye-off") {
        this.eyeIcon2 = "ios-eye";
        this.inputType2 = "text";
      } else {
        this.eyeIcon2 = "ios-eye-off";
        this.inputType2 = "password";
      }
    },
    inputBlurTel: function inputBlurTel() {
      this.userInfoT.mobile = this.userInfo.mobile;
      var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;

      if (this.userInfo.mobile == "") {
        eeui.toast({
          message: "手机号不能为空",
          gravity: "top"
        });
      } else if (this.userInfo.mobile.length != 11) {
        eeui.toast({
          message: "请输入11位手机号码！",
          gravity: "top"
        });
      } else if (!myreg.test(this.userInfo.mobile)) {
        eeui.toast({
          message: "请输入有效的手机号码！",
          gravity: "top"
        });
      }
    },
    inputBlurPass: function inputBlurPass() {
      this.userInfoT.password = this.userInfo.password;

      if (this.userInfo.password == "") {
        eeui.toast({
          message: "密码不能为空",
          gravity: "top"
        });
      } else if (this.userInfo.password.length < 6) {
        eeui.toast({
          message: "密码必须大于6位",
          gravity: "top"
        });
      }
    },
    inputBlurrePass: function inputBlurrePass() {
      this.userInfoT.password_confirmation = this.userInfo.password_confirmation;

      if (this.userInfo.password != this.userInfoT.password_confirmation) {
        eeui.toast({
          message: "两次密码不一致",
          gravity: "top"
        });
      }
    },
    inputBlurName: function inputBlurName() {
      //this.userInfoT.name = this.userInfo.name;
      if (this.userInfo.name == "") {
        eeui.toast({
          message: "姓名不能为空",
          gravity: "top"
        });
      }
    },
    inputBlurAddress: function inputBlurAddress() {
      if (this.userInfo.address == "") {
        eeui.toast({
          message: "地址不能为空",
          gravity: "top"
        });
      } else if (this.userInfo.address.length < 10) {
        eeui.toast({
          message: "家庭地址不低于10位，省市县/区-详细地址",
          gravity: "top"
        });
      }
    },
    inputBlurCard: function inputBlurCard() {
      var regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

      if (this.userInfo.card_id == "") {
        eeui.toast({
          message: "身份证不能为空",
          gravity: "top"
        });
      } else if (!regIdCard.test(this.userInfo.card_id)) {
        eeui.toast({
          message: "请填写正确的身份证号！",
          gravity: "top"
        });
      }
    },
    //选择值
    selRadioDialog: function selRadioDialog(index, status) {
      this.danDiaogVal.show = false;

      if (index != null) {
        //学生
        if (status == "ident") {
          this.identityVal = this.identity[index].text;
          this.userInfo.type = this.identity[index].type;

          if (this.userInfo.type == 2) {
            this.userInfo.stu_type = 0;
          } else {
            this.userInfo.stu_type = 1;
          }
        } //学生类型


        if (status == "stuType") {
          this.stu_val = this.stu_type[index].text;
          this.userInfo.stu_type = this.stu_type[index].type;
        } //入学年


        if (status == "enterY") {
          this.enterYearVal = this.enterYearList[index].text;
          this.userInfo.year = this.enterYearList[index].text;
        } //labelone


        if (status == "labeOne") {
          this.labeOneVal = this.labeOne[index].text;
          this.userInfo.school_label_one = this.labeOne[index].id;
          this.userInfoT.school_label_one = this.labeOne[index].id;

          if (this.labeOne[index].text == "无") {
            this.userInfo.school_label_one = 0;
            this.userInfoT.school_label_one = 0;
            this.labeOneVal = "请选择";
            this.labeTwo = [];
          }
        } //label_two


        if (status == "labeTwo") {
          this.labeTwoVal = this.labeTwo[index].text;
          this.userInfo.school_label_two = this.labeTwo[index].id;
          this.userInfoT.school_label_two = this.labeTwo[index].id;

          if (this.labeTwo[index].text == "无") {
            this.userInfo.school_label_two = 0;
            this.userInfoT.school_label_two = 0;
            this.labeTwoVal = "请选择";
          }

          this.getOrganization2(this.labeTwo[index].id);
        } //label_three


        if (status == "labeThree") {
          this.labeThreeVal = this.labeThree[index].text;
          this.userInfo.school_label_three = this.labeThree[index].id;
          this.userInfoT.school_label_three = this.labeThree[index].id;

          if (this.labeThree[index].text == "无") {
            this.userInfo.school_label_three = 0;
            this.userInfoT.school_label_three = 0;
            this.labeThreeVal = "请选择";
          }
        } //label_four


        if (status == "labeFour") {
          this.labeFourVal = this.labeFour[index].text;
          this.userInfo.school_label_four = this.labeFour[index].id;
          this.userInfoT.school_label_four = this.labeFour[index].id;

          if (this.labeFour[index].text == "无") {
            this.userInfo.school_label_four = 0;
            this.userInfoT.school_label_four = 0;
            this.labeFourVal = "请选择";
          }
        } //名族


        if (status == "mingzu") {
          this.mingzuValue = this.mingzu[index].text;
          this.userInfo.mingzu = this.mingzu[index].text;
        } //混班1


        if (status == "hunbanTwo") {
          this.hunban_two_val = this.hunban_label_two[index].text;
          this.userInfo.school_hunban_label_two = this.hunban_label_two[index].id;
          this.userInfo.school_hunban_label_one = this.hunban_label_one[0].id;

          if (this.hunban_label_two[index].text == "无") {
            this.userInfo.school_hunban_label_two = 0;
            this.hunban_two_val = "请选择";
          }

          this.getOrganization2(this.hunban_label_two[index].id, 2);
        } //混班2


        if (status == "hunbanThree") {
          this.hunban_three_val = this.hunban_label_three[index].text;
          this.userInfo.school_hunban_label_three = this.hunban_label_three[index].id;

          if (this.hunban_label_three[index].text == "无") {
            this.userInfo.school_hunban_label_three = 0;
            this.hunban_three_val = "请选择";
          }
        } //混班3
        //职务


        if (status == "zhiwu") {
          this.zhiwu_val = this.zwValue[index].text;
          this.userInfo.class_position = this.zwValue[index].id;

          if (this.zwValue[index].text == "无") {
            this.userInfo.class_position = 0;
            this.zhiwu_val = "请选择职务";
          }
        }
      }
    },
    selSel: function selSel(index) {
      this.sexIndex = index;
      this.userInfo.sex = this.sexList[index].type;
      this.userInfoT.sex = this.sexList[index].type;
    },
    //单选框选择值
    selRadioShow: function selRadioShow(val) {
      //判断框的值和顶部距离
      if (val.length * 80 >= 900) {
        this.danDiaogVal.top = 100;
        this.danDiaogVal.heightval = 900;
      } else {
        this.danDiaogVal.heightval = val.length * 80;
        this.danDiaogVal.top = 300;
      }

      this.danDiaogVal.show = true;
      this.danDiaogVal.itemList = val;
    },
    backIconFUn: function backIconFUn() {
      this.searchShow = false;
    },
    enterVale: function enterVale(index) {
      this.searchShow = false;
      this.zwShow = false;
      this.zwValue = [];
      this.zhiwu_val = "请选择职务";
      this.userInfo.class_position = 0;
      this.danwei = this.newSchoolList[index].school_name;
      this.userInfo.school_id = this.newSchoolList[index].school_id;
      this.userInfoT.school_id = this.newSchoolList[index].school_id;
      this.label_one = this.newSchoolList[index].label_one;
      this.label_two = this.newSchoolList[index].label_two;
      this.label_three = this.newSchoolList[index].label_three;
      this.label_four = this.newSchoolList[index].label_four;
      this.hunban_one_name = this.newSchoolList[index].hunban_label_three;
      this.hunban_two_name = this.newSchoolList[index].hunban_label_four;
      this.hunban_three_name = this.newSchoolList[index].hunban_label_five;
    },
    popupOverlayBottomClick: function popupOverlayBottomClick() {
      this.searchShow = false;
    },
    openBottomPopup: function openBottomPopup() {
      this.searchShow = true;
    },
    wxcCellClicked: function wxcCellClicked(e) {},
    rechargeSubmit: function rechargeSubmit() {
      //console.log(this.userInfo);
      if (this.usertips) {
        eeui.toast({
          message: "请勾选同意用户协议再注册",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.mobile == "") {
        eeui.toast({
          message: "手机号不能为空",
          gravity: "top"
        });
        return;
      }

      var myreg = /^1\d{10}$/;

      if (!myreg.test(this.userInfo.mobile)) {
        eeui.toast({
          message: "手机格式不正确！",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.password == "") {
        eeui.toast({
          message: "密码不能为空",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.password != this.userInfo.password_confirmation) {
        eeui.toast({
          message: "两次密码不一样",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.name == "") {
        eeui.toast({
          message: "姓名不能为空",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.year == "" && this.userInfo.type == 1) {
        eeui.toast({
          message: "入学年不能为空",
          gravity: "top"
        });
        return;
      }

      if (this.userInfo.school_id == "") {
        eeui.toast({
          message: "单位不能为空",
          gravity: "top"
        });
        return;
      } // if (this.userInfo.school_label_one == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message:  this.label_one + "不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.school_label_two == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message:  this.label_two + "不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.school_label_three == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message:  this.label_three + "不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.school_label_four == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message:  this.label_four + "不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.student_id == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message: "学号不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.mingzu == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message: "民族不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.card_id == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message: "身份证不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      // if (this.userInfo.address == "" && this.userInfo.type == 1) {
      //   eeui.toast({
      //     message: "地址不能为空",
      //     gravity: "top"
      //   });
      //   return;
      // }
      //从微信缓存里获取头像


      var self = this;
      var params = this.userInfo; //console.log(params);
      // if (this.identityVal == "学生") {
      //   params = this.userInfo;
      // } else {
      //   params = this.userInfoT;
      // }

      this.$fetch({
        name: "postUserRegister",
        // api.js文件中的key
        method: "POST",
        data: params
      }).then(function (res) {
        //console.log(res);
        self.successTip = true;
      })["catch"](function (err) {
        var tip = decodeURIComponent(err["headers"]["x-mzq-message"]);
        eeui.toast(tip);

        if (tip == '手机账号已存在') {
          eeui.openPage({
            pageName: 'loadPage',
            pageType: 'app',
            statusBarColor: '#1eb76e',
            url: 'loadPage.js'
          }, function (result) {//......
          });
        } //console.log(err);

      });
    },
    jumpLoginPage: function jumpLoginPage() {
      var self = this;
      eeui.openPage({
        statusBarColor: "#1eb76e",
        url: "loginpage.js"
      }, function (result) {
        //......
        self.successTip = false;
      });
    },
    jumpUsertip: function jumpUsertip() {
      eeui.openPage({
        statusBarColor: "#1eb76e",
        url: "usertip.js"
      }, function (result) {});
    },
    //名族选择
    pickMingZu: function pickMingZu() {
      var self = this;
      picker.pick({
        items: self.mingzu,
        index: self.mingzuIndex
      }, function (event) {
        if (event.result === "success") {
          self.mingzuIndex = event.data;
          self.mingzuValue = self.mingzu[event.data];
          self.userInfo.mingzu = self.mingzu[event.data];
        }
      });
    },
    //获取组织架构1
    getOrganization: function getOrganization(schoolId) {
      //console.log(schoolId);
      var self = this;
      stream.fetch({
        method: "GET",
        url: "http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/" + schoolId + ".json",
        type: "json"
      }, function (res) {
        if (res.status == 200) {
          //console.log(res.data);
          if (res.data.organizations == null) {
            self.labeList = [];
          } else {
            self.labeList = res.data.organizations; //console.log(res.data.organizations);
          }

          self.zhiwu = res.data.positions; //console.log( self.zhiwu);
          //console.log(self.labeList);
        }
      });
    },
    //获取组织架构2
    getOrganization2: function getOrganization2(schoolId, type) {
      //console.log(schoolId);
      var self = this;
      stream.fetch({
        method: "GET",
        url: "http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations_class/" + schoolId + ".json",
        type: "json"
      }, function (res) {
        if (res.status == 200) {
          // if(res.data.organizations == null){
          //     self.labeListTwo = [];
          // }else{
          //     self.labeListTwo = res.data;
          // }
          if (type == 2) {
            res.data.map(function (val) {
              self.hunban_label_three.push({
                text: val.label_name,
                id: val.id,
                hunban_name: val.hunban_name,
                hunban_teacher: val.hunban_teacher,
                checked: false,
                status: "hunbanThree"
              });
            });
            self.hunban_label_three.push({
              text: "无",
              checked: false,
              status: "hunbanThree"
            });
          } else {
            self.labeListTwo = res.data;
          } //console.log(res.data);

        }
      });
    },
    wxcSearchbarInputOnInput: function wxcSearchbarInputOnInput(e) {
      this.value = e.value;
    },
    search: function search(obj) {
      var self = this;
      this.newSchoolList = [];

      for (var key in obj) {
        if (obj[key].school_name.indexOf(self.value) > -1) {
          self.newSchoolList.push(obj[key]);
        }
      } //console.log(this.newSchoolLis);

    }
  },
  mounted: function mounted() {//console.log(app.config.params.shoolVal);
  },
  created: function created() {
    this.userInfo.avatar_file = eeui.getCaches('headimgurl', null); //console.log(app.config.params);\

    this.heightH = weex.config.env.deviceHeight - 250;
    this.userInfo.unionid = eeui.getCaches('unionid'); //判断手机类型
    // if (weex.config.env.platform == "android") {
    //   this.userInfo.mobile_platform = 1;
    // } else {
    //   this.userInfo.mobile_platform = 2;
    // }

    if (weex.config.env.platform == "iOS") {
      this.userInfo.mobile_uuid = eeui.getIfa(); //console.log(this.mobile_uuid);
    } else {
      this.userInfo.mobile_uuid = eeui.getImei();
    } //从缓存中获取学校列表


    var self = this;
    var enterYNew = eeui.getCaches("enterYear", null);
    enterYNew.map(function (val) {
      var obj = {
        text: val
      };
      self.$set(obj, "checked", false);
      self.$set(obj, "status", "enterY");
      self.enterYearList.push(obj);
    });
    self.enterYearList[0].checked = true;
    self.enterYearVal = self.enterYearList[0].text; //从缓存中获取学校列表
    //console.log(eeui.getCaches('schoollist', []));
    //    if(app.config.params.schools){
    //        this.schoolList = app.config.params.schools;
    //    }
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-7a7b0a04!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-7a7b0a04!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-search-bar": {
    "paddingLeft": "20",
    "paddingRight": "20",
    "backgroundColor": "#ffffff",
    "width": "750",
    "height": "84",
    "flexDirection": "row"
  },
  "wxc-search-bar-yellow": {
    "backgroundColor": "#ffc900"
  },
  "search-bar-input": {
    "position": "absolute",
    "top": "10",
    "paddingTop": 0,
    "paddingBottom": 0,
    "paddingRight": "40",
    "paddingLeft": "60",
    "fontSize": "26",
    "width": "624",
    "height": "64",
    "lineHeight": "64",
    "backgroundColor": "#E5E5E5",
    "borderRadius": "6"
  },
  "search-bar-input-yellow": {
    "backgroundColor": "#fff6d6"
  },
  "search-bar-icon": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "left": "34",
    "top": "28"
  },
  "search-bar-close": {
    "position": "absolute",
    "width": "30",
    "height": "30",
    "right": "120",
    "top": "28"
  },
  "search-bar-button": {
    "width": "94",
    "height": "36",
    "fontSize": "30",
    "textAlign": "center",
    "backgroundColor": "#ffffff",
    "marginTop": "16",
    "marginRight": 0,
    "color": "#333333",
    "position": "absolute",
    "right": "8",
    "top": "9"
  },
  "search-bar-button-yellow": {
    "backgroundColor": "#FFC900"
  },
  "input-has-dep": {
    "paddingLeft": "240",
    "width": "710"
  },
  "bar-dep": {
    "width": "170",
    "paddingRight": "12",
    "paddingLeft": "12",
    "height": "42",
    "alignItems": "center",
    "flexDirection": "row",
    "position": "absolute",
    "left": "24",
    "top": "22",
    "borderRightStyle": "solid",
    "borderRightWidth": "1",
    "borderRightColor": "#C7C7C7"
  },
  "bar-dep-yellow": {
    "borderRightColor": "#C7C7C7"
  },
  "dep-text": {
    "flex": 1,
    "textAlign": "center",
    "fontSize": "26",
    "color": "#666666",
    "marginRight": "6",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  "dep-arrow": {
    "width": "24",
    "height": "24"
  },
  "icon-has-dep": {
    "left": "214"
  },
  "disabled-input": {
    "width": "750",
    "height": "64",
    "position": "absolute",
    "left": 0,
    "backgroundColor": "rgba(0,0,0,0)"
  },
  "has-dep-disabled": {
    "width": "550",
    "left": "200"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-a2217e0e!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/radioList.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-a2217e0e!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/radioList.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "radioList": {
    "width": "650",
    "height": "80",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd",
    "borderBottomWidth": "1",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "paddingLeft": "10",
    "paddingRight": "10"
  },
  "left": {
    "color": "#333333",
    "marginLeft": "20",
    "fontSize": "28"
  },
  "left2": {
    "color": "#333333",
    "marginLeft": "10",
    "fontSize": "28",
    "width": "140"
  },
  "left3": {
    "color": "#333333",
    "marginLeft": "10",
    "fontSize": "28",
    "width": "100"
  },
  "right": {
    "width": "40",
    "height": "40",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#999999",
    "borderRadius": "50",
    "marginRight": "20",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "radioDian": {
    "width": "30",
    "height": "30",
    "backgroundColor": "#1eb76e",
    "borderRadius": "30"
  },
  "danSelRadioBox": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "width": "750",
    "backgroundColor": "rgba(0,0,0,0.6)"
  },
  "content": {
    "backgroundColor": "#ffffff",
    "width": "650",
    "marginLeft": "50"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-f30900ee!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/loginPage/recharge.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-f30900ee!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/loginPage/recharge.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "itemS": {
    "height": "80",
    "borderBottomColor": "#e5e5e5",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "lineHeight": "80",
    "fontSize": "26",
    "paddingLeft": "30"
  },
  "container": {
    "backgroundColor": "#ebebeb"
  },
  "cell_list_box": {
    "marginBottom": "50"
  },
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#1eb76e"
  },
  "headtext": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "righttext": {
    "fontSize": "30",
    "color": "#333333",
    "marginRight": "10"
  },
  "grey": {
    "color": "#999999"
  },
  "rightInput": {
    "width": 300,
    "height": 90,
    "fontSize": "30",
    "textAlign": "right",
    "paddingRight": "55"
  },
  "rightw": {
    "width": "450"
  },
  "avatorBox": {
    "borderRadius": 100,
    "marginRight": "30",
    "width": "80",
    "height": "80",
    "border": "1px solid #999"
  },
  "backIcon": {
    "width": "100",
    "height": "100",
    "color": "#ffffff"
  },
  "button": {
    "width": "690",
    "height": "80",
    "marginLeft": 30,
    "marginBottom": "50"
  },
  "mastTip": {
    "position": "absolute",
    "left": "200",
    "top": "38",
    "color": "#FF0000"
  },
  "TipText": {
    "flexDirection": "row",
    "height": "30",
    "marginBottom": "50",
    "marginLeft": "30"
  },
  "xin": {
    "color": "#FF0000"
  },
  "xinw": {
    "color": "#999999",
    "fontSize": "22"
  },
  "popurBackBtn": {
    "marginLeft": "30",
    "color": "#ffffff",
    "fontSize": "30",
    "width": "80",
    "height": "100",
    "lineHeight": "100"
  },
  "successTip": {
    "fontSize": "40",
    "textAlign": "center",
    "marginTop": "50",
    "color": "#1eb76e"
  },
  "WxTip": {
    "fontSize": "26",
    "textAlign": "center",
    "marginTop": "30",
    "color": "#999999"
  },
  "backLoginPage": {
    "width": "400",
    "height": "80",
    "backgroundColor": "#1eb76e",
    "fontSize": "40",
    "color": "#ffffff",
    "textAlign": "center",
    "lineHeight": "80",
    "borderRadius": "30",
    "marginTop": "200"
  },
  "success-content": {
    "alignItems": "center"
  },
  "suceessIcon": {
    "width": "200",
    "height": "200",
    "backgroundColor": "#1eb76e",
    "borderRadius": "200",
    "marginTop": "100"
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
  "cellMargin": {
    "marginBottom": "25"
  },
  "leftText": {
    "paddingLeft": "25",
    "fontSize": "30",
    "color": "#333333"
  },
  "sexSelBox": {
    "flexDirection": "row",
    "marginRight": "30"
  },
  "nan": {
    "flexDirection": "row",
    "alignItems": "center",
    "marginLeft": "30"
  },
  "point": {
    "width": "30",
    "height": "30",
    "borderRadius": "30",
    "backgroundColor": "#1eb76e"
  },
  "selBtn": {
    "width": "40",
    "height": "40",
    "borderStyle": "solid",
    "borderWidth": "1",
    "borderColor": "#999999",
    "borderRadius": "50",
    "justifyContent": "center",
    "alignItems": "center",
    "marginRight": "10"
  },
  "sextext": {
    "fontSize": "30"
  },
  "inputW": {
    "width": "500"
  },
  "eyeicon": {
    "width": "40",
    "height": "80",
    "position": "absolute",
    "right": "40",
    "top": "10"
  },
  "rightInputM": {
    "marginRight": "60"
  },
  "iconCheck": {
    "width": "30",
    "height": "30",
    "color": "#1eb76e",
    "marginRight": "10"
  },
  "checkList": {
    "flexDirection": "row",
    "marginLeft": "40",
    "marginBottom": "50"
  },
  "checkBox": {
    "width": "30",
    "height": "30",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#999999",
    "marginRight": "10"
  },
  "checktext": {
    "fontSize": "26",
    "color": "#999999"
  },
  "checktext2": {
    "color": "#1eb76e",
    "fontSize": "26"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-7a7b0a04!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-7a7b0a04!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-searchbar/index.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.mod === 'default') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    ref: "search-input",
    class: ['search-bar-input', 'search-bar-input-' + _vm.theme],
    style: {
      width: _vm.needShowCancel ? '624px' : '710px'
    },
    attrs: {
      "returnKeyType": _vm.returnKeyType,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('image', {
    staticClass: ["search-bar-icon"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  }), (_vm.showClose) ? _c('image', {
    staticClass: ["search-bar-close"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.closeIcon
    },
    on: {
      "click": _vm.closeClicked
    }
  }) : _vm._e(), (_vm.needShowCancel) ? _c('text', {
    class: ['search-bar-button', 'search-bar-button-' + _vm.theme],
    style: _vm.buttonStyle,
    on: {
      "click": _vm.cancelClicked
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]) : _vm._e()]) : _vm._e(), (_vm.mod === 'hasDep') ? _c('div', {
    class: ['wxc-search-bar', 'wxc-search-bar-' + _vm.theme],
    style: _vm.barStyle
  }, [_c('input', {
    class: ['search-bar-input', 'input-has-dep', 'search-bar-input-' + _vm.theme],
    attrs: {
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "returnKeyType": _vm.returnKeyType,
      "value": _vm.value,
      "type": _vm.inputType,
      "placeholder": _vm.placeholder
    },
    on: {
      "blur": _vm.onBlur,
      "focus": _vm.onFocus,
      "input": _vm.onInput,
      "return": _vm.onSubmit
    }
  }), (_vm.disabled) ? _c('div', {
    staticClass: ["disabled-input", "has-dep-disabled"],
    on: {
      "click": _vm.inputDisabledClicked
    }
  }) : _vm._e(), _c('div', {
    class: ['bar-dep', '.bar-dep-' + _vm.theme],
    on: {
      "click": _vm.depClicked
    }
  }, [_c('text', {
    staticClass: ["dep-text"]
  }, [_vm._v(_vm._s(_vm.depName))]), _c('image', {
    staticClass: ["dep-arrow"],
    attrs: {
      "src": _vm.arrowIcon,
      "ariaHidden": true
    }
  })]), _c('image', {
    staticClass: ["search-bar-icon", "icon-has-dep"],
    attrs: {
      "ariaHidden": true,
      "src": _vm.inputIcon
    }
  })]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-a2217e0e!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/radioList.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-a2217e0e!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/radioList.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.danselectShow) ? _c('div', {
    staticClass: ["danSelRadioBox"],
    style: {
      height: _vm.heightBox
    },
    on: {
      "click": _vm.wxcMaskSetHidden
    }
  }, [_c('div', {
    staticClass: ["content"],
    style: {
      'height': _vm.height,
      'margin-top': _vm.top
    }
  }, [_c('scroller', {
    staticClass: ["scroller"]
  }, _vm._l((_vm.itemList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["radioList"],
      on: {
        "click": function($event) {
          _vm.selItem(index)
        }
      }
    }, [_c('text', {
      staticClass: ["left"]
    }, [_vm._v(_vm._s(item.text))]), (item.hunban_name) ? _c('text', {
      staticClass: ["left2"]
    }, [_vm._v(_vm._s(item.hunban_name))]) : _vm._e(), (item.hunban_teacher) ? _c('text', {
      staticClass: ["left3"]
    }, [_vm._v(_vm._s(item.hunban_teacher))]) : _vm._e(), _c('div', {
      staticClass: ["right"]
    }, [(item.checked) ? _c('div', {
      staticClass: ["radioDian"]
    }) : _vm._e()])])
  }))])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-f30900ee!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/loginPage/recharge.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-f30900ee!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/loginPage/recharge.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"]
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
  }, [_vm._v("注册")])])], 1), _c('scroller', {
    staticClass: ["tablelist"],
    attrs: {
      "showScrollbar": false
    }
  }, [_c('div', {
    staticClass: ["cell_list_box"]
  }, [_c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("手机号")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur1",
    staticClass: ["rightInput"],
    attrs: {
      "type": "tel",
      "autofocus": "false",
      "placeholder": "请输入手机号",
      "maxLength": "11",
      "value": (_vm.userInfo.mobile)
    },
    on: {
      "blur": _vm.inputBlurTel,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "mobile", $event.target.attr.value.trim())
      }
    }
  })]), _c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("密码")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur2",
    staticClass: ["rightInput", "rightInputM"],
    attrs: {
      "type": _vm.inputType,
      "autofocus": "false",
      "placeholder": "请输入密码",
      "maxLength": "20",
      "value": (_vm.userInfo.password)
    },
    on: {
      "blur": _vm.inputBlurPass,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "password", $event.target.attr.value.trim())
      }
    }
  }), _c('icon', {
    staticClass: ["eyeicon"],
    attrs: {
      "eeui": {
        content: _vm.eyeIcon,
        fontSize: 42
      }
    },
    on: {
      "click": _vm.openShowPassword
    }
  })], 1), _c('div', {
    staticClass: ["cellItem", "cellMargin"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("确认密码")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur3",
    staticClass: ["rightInput", "rightInputM"],
    attrs: {
      "type": _vm.inputType2,
      "autofocus": "false",
      "placeholder": "请确认密码",
      "maxLength": "20",
      "value": (_vm.userInfo.password_confirmation)
    },
    on: {
      "blur": _vm.inputBlurrePass,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "password_confirmation", $event.target.attr.value.trim())
      }
    }
  }), _c('icon', {
    staticClass: ["eyeicon"],
    attrs: {
      "eeui": {
        content: _vm.eyeIcon2,
        fontSize: 42
      }
    },
    on: {
      "click": _vm.openShowPassword2
    }
  })], 1), _c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("姓名")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur4",
    staticClass: ["rightInput"],
    attrs: {
      "type": "text",
      "autofocus": "false",
      "placeholder": "请输入姓名",
      "maxLength": "20",
      "value": (_vm.userInfo.name)
    },
    on: {
      "blur": _vm.inputBlurName,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "name", $event.target.attr.value)
      }
    }
  })]), _c('wxc-cell', {
    attrs: {
      "title": "性别",
      "hasArrow": false,
      "hasTopBorder": false,
      "hasMargin": false
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('div', {
    staticClass: ["sexSelBox"]
  }, _vm._l((_vm.sexList), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["nan"],
      on: {
        "click": function($event) {
          _vm.selSel(index)
        }
      }
    }, [_c('div', {
      staticClass: ["selBtn"]
    }, [(index == _vm.sexIndex) ? _c('div', {
      staticClass: ["point"]
    }) : _vm._e()]), _c('text', {
      staticClass: ["sextext"]
    }, [_vm._v(_vm._s(item.text))])])
  }))]), _c('wxc-cell', {
    attrs: {
      "title": "身份",
      "hasArrow": true,
      "hasMargin": _vm.identityVal == '学生' ? false : true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.identity, _vm.selindex)
      }
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["righttext"]
  }, [_vm._v(_vm._s(_vm.identityVal))])]), (_vm.identityVal == '学生') ? _c('wxc-cell', {
    attrs: {
      "title": "学生类型",
      "hasArrow": true,
      "hasMargin": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.stu_type, _vm.selindex)
      }
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.stu_val == '请选择学生类型' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.stu_val))])]) : _vm._e(), (_vm.identityVal == '学生') ? _c('wxc-cell', {
    attrs: {
      "title": "入学年",
      "hasArrow": true,
      "hasMargin": false,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.enterYearList, _vm.selindex)
      }
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.enterYearVal == '请选择入学年' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.enterYearVal))])]) : _vm._e(), _c('wxc-cell', {
    attrs: {
      "title": "单位",
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": _vm.openBottomPopup
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.danwei == '请选择单位' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.danwei))])]), (_vm.labeOne.length > 1) ? _c('wxc-cell', {
    attrs: {
      "title": _vm.label_one ? _vm.label_one : '第二级',
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.labeOne)
      }
    }
  }, [(_vm.identityVal == '学生') ? _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]) : _vm._e(), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.labeOneVal == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.labeOneVal))])]) : _vm._e(), (_vm.labeTwo.length > 1) ? _c('wxc-cell', {
    attrs: {
      "title": _vm.label_two ? _vm.label_two : '第三级',
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.labeTwo)
      }
    }
  }, [(_vm.identityVal == '学生') ? _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]) : _vm._e(), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.labeTwoVal == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.labeTwoVal))])]) : _vm._e(), (_vm.labeThree.length > 1) ? _c('wxc-cell', {
    attrs: {
      "title": _vm.label_three ? _vm.label_three : '第四级',
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.labeThree)
      }
    }
  }, [(_vm.identityVal == '学生') ? _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]) : _vm._e(), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.labeThreeVal == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.labeThreeVal))])]) : _vm._e(), (_vm.labeFour.length > 1) ? _c('wxc-cell', {
    attrs: {
      "title": _vm.label_four ? _vm.label_four : '第五级',
      "hasArrow": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.labeFour)
      }
    }
  }, [(_vm.identityVal == '学生') ? _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]) : _vm._e(), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.labeFourVal == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.labeFourVal))])]) : _vm._e(), (_vm.identityVal == '教师') ? _c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("工号")]), _c('input', {
    ref: "blur5",
    staticClass: ["rightInput"],
    attrs: {
      "type": "tel",
      "autofocus": "false",
      "placeholder": "请输入工号",
      "maxLength": "20",
      "value": (_vm.userInfo.student_id)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.userInfo, "student_id", $event.target.attr.value.trim())
      }
    }
  })]) : _vm._e(), (_vm.identityVal == '学生') ? _c('div', {
    staticClass: ["cellItem"],
    class: [_vm.zwShow ? '' : 'cellMargin']
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("学号")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur6",
    staticClass: ["rightInput"],
    attrs: {
      "type": "tel",
      "autofocus": "false",
      "placeholder": "请输入学号",
      "maxLength": "20",
      "value": (_vm.userInfo.student_id)
    },
    on: {
      "input": function($event) {
        _vm.$set(_vm.userInfo, "student_id", $event.target.attr.value.trim())
      }
    }
  })]) : _vm._e(), (_vm.identityVal == '学生' && _vm.zwShow) ? _c('wxc-cell', {
    attrs: {
      "title": "职务",
      "hasArrow": true,
      "hasMargin": true,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.zwValue)
      }
    }
  }, [_c('text', {
    staticClass: ["righttext"],
    class: [_vm.zhiwu_val == '请选择职务' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.zhiwu_val))])]) : _vm._e(), (_vm.identityVal == '学生' && _vm.is_hunban == 1) ? _c('wxc-cell', {
    attrs: {
      "title": _vm.hunban_one_name ? _vm.hunban_one_name : '混班三级',
      "hasArrow": true,
      "hasMargin": false,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.hunban_label_two)
      }
    }
  }, [_c('text', {
    staticClass: ["righttext"],
    class: [_vm.hunban_two_val == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.hunban_two_val))])]) : _vm._e(), (_vm.identityVal == '学生' && _vm.hunban_two_val != '请选择') ? _c('wxc-cell', {
    attrs: {
      "title": _vm.hunban_two_name ? _vm.hunban_two_name : '混班四级',
      "hasArrow": true,
      "hasMargin": false,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.hunban_label_three)
      }
    }
  }, [_c('text', {
    staticClass: ["righttext"],
    class: [_vm.hunban_three_val == '请选择' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.hunban_three_val))])]) : _vm._e(), (_vm.identityVal == '学生') ? _c('wxc-cell', {
    attrs: {
      "title": "民族",
      "hasArrow": true,
      "hasMargin": false,
      "hasTopBorder": false
    },
    on: {
      "wxcCellClicked": function($event) {
        _vm.selRadioShow(_vm.mingzu)
      }
    }
  }, [_c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["righttext"],
    class: [_vm.mingzuValue == '请选择名族' ? 'grey' : '']
  }, [_vm._v(_vm._s(_vm.mingzuValue))])]) : _vm._e(), (_vm.identityVal == '学生') ? _c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("身份证号")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur7",
    staticClass: ["rightInput", "inputW"],
    attrs: {
      "type": "text",
      "autofocus": "false",
      "placeholder": "请输入身份证",
      "value": (_vm.userInfo.card_id)
    },
    on: {
      "blur": _vm.inputBlurCard,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "card_id", $event.target.attr.value.trim())
      }
    }
  })]) : _vm._e(), (_vm.identityVal == '学生') ? _c('div', {
    staticClass: ["cellItem"]
  }, [_c('text', {
    staticClass: ["leftText"]
  }, [_vm._v("家庭住址")]), _c('text', {
    staticClass: ["mastTip"]
  }, [_vm._v("*")]), _c('input', {
    ref: "blur8",
    staticClass: ["rightInput", "inputW"],
    attrs: {
      "type": "text",
      "autofocus": "false",
      "placeholder": "请输入地址",
      "value": (_vm.userInfo.address)
    },
    on: {
      "blur": _vm.inputBlurAddress,
      "input": function($event) {
        _vm.$set(_vm.userInfo, "address", $event.target.attr.value.trim())
      }
    }
  })]) : _vm._e()], 1), _vm._m(0), _c('div', {
    staticClass: ["userBtn"]
  }, [_c('div', {
    staticClass: ["checkList"]
  }, [(_vm.usertips) ? _c('div', {
    staticClass: ["checkBox"],
    on: {
      "click": _vm.userradio
    }
  }) : _vm._e(), (!_vm.usertips) ? _c('icon', {
    staticClass: ["iconCheck"],
    attrs: {
      "content": "ios-checkbox",
      "fontSize": "40"
    },
    on: {
      "click": _vm.userradio
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["checktext"]
  }, [_vm._v("我已经阅读并同意")]), _c('text', {
    staticClass: ["checktext2"],
    on: {
      "click": _vm.jumpUsertip
    }
  }, [_vm._v("《用户协议》")])], 1)]), _c('button', {
    staticClass: ["button"],
    attrs: {
      "eeui": {
        text: '提交',
        backgroundColor: '#1eb76e',
        fontSize: 30
      }
    },
    on: {
      "click": _vm.rechargeSubmit
    }
  })], 1), _c('wxc-popup', {
    attrs: {
      "popupColor": "#ffffff",
      "show": _vm.searchShow,
      "pos": "right",
      "width": "750"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["demo-content"]
  }, [_c('navbar', {
    staticClass: ["navbarb"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "left"
    }
  }, [_c('text', {
    staticClass: ["popurBackBtn"],
    on: {
      "click": _vm.backIconFUn
    }
  }, [_vm._v("返回")])]), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v("单位选择")])])], 1), _c('wxc-searchbar', {
    ref: "wxc-searchbar",
    on: {
      "wxcSearchbarInputOnInput": _vm.wxcSearchbarInputOnInput
    }
  }), _c('list', {
    style: {
      height: _vm.heightH
    }
  }, _vm._l((_vm.newSchoolList), function(item, index) {
    return _c('cell', {
      key: index,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('text', {
      staticClass: ["itemS"],
      on: {
        "click": function($event) {
          _vm.enterVale(index)
        }
      }
    }, [_vm._v(_vm._s(item.school_name))])])
  }))], 1)]), _c('wxc-popup', {
    attrs: {
      "popupColor": "#ffffff",
      "show": _vm.successTip,
      "pos": "right",
      "width": "750"
    },
    on: {
      "wxcPopupOverlayClicked": _vm.popupOverlayBottomClick
    }
  }, [_c('div', {
    staticClass: ["success-content"]
  }, [_c('icon', {
    ref: "reflectName",
    staticClass: ["suceessIcon"],
    attrs: {
      "eeui": {
        content: 'md-checkmark',
        fontSize: '150px',
        color: '#ffffff'
      }
    }
  }), _c('text', {
    staticClass: ["successTip"]
  }, [_vm._v("注册成功")]), _c('text', {
    staticClass: ["backLoginPage"],
    on: {
      "click": _vm.jumpLoginPage
    }
  }, [_vm._v("立即登陆")]), _c('text', {
    staticClass: ["WxTip"]
  }, [_vm._v("登陆以后请到“我的>个人信息”页面上传头像！")])], 1)]), _c('danSel', {
    attrs: {
      "danselectShow": _vm.danDiaogVal.show,
      "itemList": _vm.danDiaogVal.itemList,
      "height": _vm.danDiaogVal.heightval,
      "top": _vm.danDiaogVal.top,
      "curVal": _vm.danDiaogVal.curVal
    },
    on: {
      "hideDan": _vm.selRadioDialog
    }
  })], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["TipText"]
  }, [_c('text', {
    staticClass: ["xin"]
  }, [_vm._v("*")]), _c('text', {
    staticClass: ["xinw"]
  }, [_vm._v("号选项为必填项")])])
}]}
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