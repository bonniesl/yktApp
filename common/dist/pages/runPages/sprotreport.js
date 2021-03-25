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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/runPages/sprotreport.vue?entry=true");
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

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-cb380422!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-cb380422!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-cb380422!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-cb380422!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-minibar\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-cb380422"
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

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue");
/* harmony import */ var _index_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _index_vue__WEBPACK_IMPORTED_MODULE_0___default.a; });


/***/ }),

/***/ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue":
/*!****************************************************************************!*\
  !*** ./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-d48d1e10!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-d48d1e10!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-d48d1e10!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-d48d1e10!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\node_modules\\_weex-ui@0.8.4@weex-ui\\packages\\wxc-popover\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d48d1e10"
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

/***/ "./src/components/WEcharts/index.vue":
/*!*******************************************!*\
  !*** ./src/components/WEcharts/index.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-4f506fc9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4f506fc9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/index.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/index.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-4f506fc9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./index.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4f506fc9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/index.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\WEcharts\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4f506fc9"
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

/***/ "./src/components/WEcharts/month.vue":
/*!*******************************************!*\
  !*** ./src/components/WEcharts/month.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-31f8e277!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./month.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-31f8e277!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/month.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./month.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/month.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-31f8e277!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./month.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-31f8e277!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/month.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\WEcharts\\month.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-31f8e277"
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

/***/ "./src/components/WEcharts/week.vue":
/*!******************************************!*\
  !*** ./src/components/WEcharts/week.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-6313434d!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./week.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6313434d!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/week.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./week.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/week.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-6313434d!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./week.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6313434d!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/week.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\WEcharts\\week.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6313434d"
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

/***/ "./src/components/WEcharts/year.vue":
/*!******************************************!*\
  !*** ./src/components/WEcharts/year.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-2c64df16!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./year.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2c64df16!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/year.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./year.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/year.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-2c64df16!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./year.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2c64df16!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/year.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\WEcharts\\year.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2c64df16"
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

/***/ "./src/components/failNet.vue":
/*!************************************!*\
  !*** ./src/components/failNet.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-23197b42!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./failNet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-23197b42!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/failNet.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./failNet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/failNet.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-23197b42!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./failNet.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-23197b42!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/failNet.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\components\\failNet.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-23197b42"
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

/***/ "./src/pages/runPages/sprotreport.vue?entry=true":
/*!*******************************************************!*\
  !*** ./src/pages/runPages/sprotreport.vue?entry=true ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-30847249!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./sprotreport.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-30847249!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/sprotreport.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./sprotreport.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/sprotreport.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-30847249!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./sprotreport.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-30847249!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/sprotreport.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\runPages\\sprotreport.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-30847249"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const Navigator = weex.requireModule('navigator');
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    backgroundColor: {
      type: String,
      default: '#FFC900'
    },
    leftButton: {
      type: String,
      default: 'https://gw.alicdn.com/tfs/TB1x18VpwMPMeJjy1XdXXasrXXa-21-36.png'
    },
    textColor: {
      type: String,
      default: '#3D3D3D'
    },
    rightButton: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: '标题'
    },
    leftText: {
      type: String,
      default: ''
    },
    rightText: {
      type: String,
      default: ''
    },
    useDefaultReturn: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    barStyle: {
      type: Object
    }
  },
  computed: {
    newBarStyle() {
      const {
        backgroundColor,
        barStyle
      } = this;
      return {
        backgroundColor,
        ...barStyle
      };
    }

  },
  methods: {
    leftButtonClicked() {
      if (this.useDefaultReturn) {
        Navigator.pop({}, e => {});
      }

      this.$emit('wxcMinibarLeftButtonClicked', {});
    },

    rightButtonClicked() {
      const hasRightContent = this.rightText || this.rightButton || this.$slots && this.$slots.right;
      hasRightContent && this.$emit('wxcMinibarRightButtonClicked', {});
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
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
    buttons: {
      type: Array,
      default: []
    },
    position: {
      type: Object,
      default: () => ({
        x: 0,
        y: 0
      })
    },
    arrowPosition: {
      type: Object,
      default: () => ({
        pos: 'top',
        x: 0,
        y: 0
      })
    },
    coverColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.4)'
    },
    hasAnimation: {
      type: Boolean,
      default: true
    },
    textStyle: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    show: false,
    showIn: false
  }),
  computed: {
    coverStyle() {
      return this.coverColor ? {
        backgroundColor: this.coverColor,
        opacity: this.hasAnimation || !this.showIn ? '0' : '1'
      } : '';
    },

    transformOrigin() {
      const {
        x = 0,
        y = 0,
        pos = 'top'
      } = this.arrowPosition;
      let _origins = [];

      switch (pos) {
        case 'top':
        case 'bottom':
          _origins = [x < 0 ? 'right' : 'left', pos];
          break;

        case 'left':
        case 'right':
          _origins = [pos, y < 0 ? 'bottom' : 'top'];
          break;
      }

      return _origins.join(' ');
    },

    contentTransform() {
      const {
        pos = 'top'
      } = this.arrowPosition;
      let {
        x = 0,
        y = 0
      } = this.arrowPosition;
      const _translates = ['scale(0)'];

      if (x >= 0 && x < 22) {
        x = 22;
      } else if (x < 0 && x > -22) {
        x = -22;
      }

      if (y >= 0 && y < 22) {
        y = 22;
      } else if (y < 0 && y > -22) {
        y = -22;
      }

      switch (pos) {
        case 'top':
        case 'bottom':
          _translates[1] = `translateX(${x < 0 ? x - 15 : x + 15}px)`;
          break;

        case 'left':
        case 'right':
          _translates[1] = `translateY(${y < 0 ? y - 15 : y + 15}px)`;
          break;
      }

      return _translates.join(' ');
    },

    contentStyle() {
      const {
        x = 0,
        y = 0
      } = this.position;
      const style = {};
      x < 0 ? style.right = `${-x}px` : style.left = `${x}px`;
      y < 0 ? style.bottom = `${-y}px` : style.top = `${y}px`;
      style.opacity = this.hasAnimation || !this.showIn ? '0' : '1';
      style.transform = this.hasAnimation || !this.showIn ? this.contentTransform : 'scale(1)';
      style.transformOrigin = this.transformOrigin;
      return style;
    },

    arrowStyle() {
      let {
        x = 0,
        y = 0
      } = this.arrowPosition;
      const {
        pos = 'top'
      } = this.arrowPosition;
      const style = {};

      switch (pos) {
        case 'top':
          style.top = '6px';

        case 'bottom':
          //eslint-disable-line
          !style.top && (style.bottom = '6px');
          style.transform = 'scaleX(0.8) rotate(45deg)';

          if (x >= 0 && x < 22) {
            x = 22;
          } else if (x < 0 && x > -22) {
            x = -22;
          }

          x < 0 ? style.right = `${-x}px` : style.left = `${x}px`;
          break;

        case 'left':
          style.left = '6px';

        case 'right':
          //eslint-disable-line
          !style.left && (style.right = '6px');
          style.transform = 'scaleY(0.8) rotate(45deg)';

          if (y >= 0 && y < 22) {
            y = 22;
          } else if (y < 0 && y > -22) {
            y = -22;
          }

          y < 0 ? style.bottom = `${-y}px` : style.top = `${y}px`;
          break;

        default:
          break;
      }

      return style;
    }

  },
  methods: {
    wxcPopoverShow() {
      if (this.animationLock) {
        return;
      }

      this.show = true;

      if (this.hasAnimation) {
        setTimeout(() => this.wxcPopoverAnimationShow(), 40);
      } else {
        setTimeout(() => this.showIn = true, 40);
      }
    },

    /**
    * smooth in
    **/
    wxcPopoverAnimationShow() {
      const popoverEl = this.$refs['wxc-popover'];
      const coverEl = this.$refs['wxc-cover'];

      if (!coverEl || !popoverEl) {
        return;
      }

      this.setAnimationLock();
      let a1End = false;
      let a2End = false;
      animation.transition(popoverEl, {
        styles: {
          opacity: 1,
          transform: 'scale(1)',
          transformOrigin: this.transformOrigin
        },
        delay: 0,
        duration: 250,
        timingFunction: 'ease-out'
      }, e => {
        a1End = true;

        if (a1End && a2End) {
          this.animationLock = false;
        }
      });
      animation.transition(coverEl, {
        styles: {
          opacity: 1
        },
        delay: 0,
        duration: 250,
        timingFunction: 'ease-in'
      }, e => {
        a2End = true;

        if (a1End && a2End) {
          this.animationLock = false;
        }
      });
    },

    wxcButtonClicked(index, key) {
      if (this.animationLock) {
        return;
      }

      this.$emit('wxcPopoverButtonClicked', {
        key,
        index
      });
      this.hideAction();
    },

    /**
       * 隐藏操作
       */
    hideAction() {
      if (this.animationLock) {
        return;
      }

      if (this.hasAnimation) {
        this.setAnimationLock();
        const popoverEl = this.$refs['wxc-popover'];
        const coverEl = this.$refs['wxc-cover'];

        if (!popoverEl || !coverEl) {
          return;
        }

        let a1End = false;
        let a2End = false;
        animation.transition(popoverEl, {
          styles: {
            opacity: 0,
            transform: this.contentTransform,
            transformOrigin: this.transformOrigin
          },
          duration: 250
        }, () => {
          a1End = true;

          if (a1End && a2End) {
            this.show = false;
            this.showIn = false;
            this.animationLock = false;
          }
        });
        animation.transition(coverEl, {
          styles: {
            opacity: 0
          },
          duration: 250
        }, () => {
          a2End = true;

          if (a1End && a2End) {
            this.show = false;
            this.showIn = false;
            this.animationLock = false;
          }
        });
      } else {
        this.show = false;
        this.showIn = false;
      }
    },

    /**
       * 设置动画锁
       */
    setAnimationLock() {
      this.animationLock = true;
    }

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/index.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/WEcharts/index.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fetch/api/apis */ "./src/fetch/api/apis.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

var stream = app.requireModule('stream');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WEcharts',
  props: {
    baidukey: {
      type: String,
      "default": "706afcb60ea4460e246fe6a24c73e0c5"
    },
    options: {
      type: Object,
      "default": {
        title: {
          text: '基本的折线图（演示）'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        }]
      }
    }
  },
  data: function data() {
    return {
      randId: '',
      loadIng: true,
      dayList: [],
      dayNewList: [],
      dayPlIST: [],
      cliIndex: 0,
      userList: app.config.params ? app.config.params : {},
      // opUid:app.config.params ? app.config.params.uid : '',
      sdateC: app.config.params ? app.config.params.sdate : '' // userInfos:app.config.params ? app.config.params.user : ''

    };
  },
  watch: {
    options: function options(option) {
      this.setOptions(option);
    },
    dayNewList: function dayNewList(val) {
      this.dayNewList = val;
    },
    cliIndex: function cliIndex(val) {
      this.cliIndex = val;
    }
  },
  methods: {
    webReady: function webReady() {
      this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts.html#' + this.randId));
    },
    webState: function webState(data) {
      if (data.status === 'start') {
        this.loadIng = true;
      } else if (data.status === 'success' || data.status === 'error') {
        this.loadIng = false;
      }
    },
    setOptions: function setOptions(option) {
      eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(option));
      this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
    },
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },
    getuserRunList: function getuserRunList() {
      var self = this;
      var s_date = self.getDay(-6);
      var e_date = self.getDay(0);
      var getUrl = '';

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date; // getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userList.uid +'&s_date=' + self.userList.sdate + '&end_date=' + self.userList.sdate;

        self.dayNewList = [];
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.dayList = res.data;

          if (self.dayList.length != 0) {
            for (var i = 0; i < self.dayList.length; i++) {
              var dayL = self.dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

              var valDetailList = {
                "calorie": self.dayList[i].calorie,
                "check_status": self.dayList[i].check_status,
                "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                "metre": self.dayList[i].metre,
                "run_type": self.dayList[i].run_type,
                "spend_time": self.dayList[i].spend_time,
                "status": self.dayList[i].status,
                "step_number": self.dayList[i].step_number,
                "tr_id": self.dayList[i].tr_id,
                "valid_metre": self.dayList[i].valid_metre,
                "test_metre": self.dayList[i].test_metre
              }; //当日期没有相同的,就新建一个Item

              var valItem = {
                "dayCtime": '',
                "dayListInfo": []
              };
              valItem.dayCtime = dayL;
              valItem.dayListInfo.push(valDetailList); //第0个不需要比较

              if (i == 0) {
                self.dayNewList.push(valItem);
              } else {
                var index1 = -1; // 通过for循环查找index

                for (var k = 0; k < self.dayNewList.length; k++) {
                  if (dayL == self.dayNewList[k].dayCtime) {
                    index1 = k;
                    break;
                  }
                }

                if (index1 === -1) {
                  // 没有找到
                  self.dayNewList.push(valItem);
                } else {
                  // 找到了
                  self.dayNewList[k].dayListInfo.push(valDetailList);
                }
              }
            }

            self.dayNewList.sort(function (a, b) {
              return b.dayCtime < a.dayCtime ? 1 : -1;
            });
            self.dayNewList.forEach(function (vval, idx) {
              if (vval.dayCtime.indexOf(self.sdateC) > -1) {
                self.cliIndex = idx;
                return self.cliIndex;
              }
            });
            eeui.setVariate("components::echarts::idx:" + self.randId, JSON.stringify(self.cliIndex));
            eeui.setVariate("components::echarts::dlList:" + self.randId, JSON.stringify(self.dayNewList));
          } else {//  eeui.setVariate("components::echarts::dlList:", JSON.stringify( self.dayList));
          }
        }
      });
    },
    getDay: function getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds);
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    },
    doHandleMonth: function doHandleMonth(month) {
      var m = month;

      if (month.toString().length == 1) {
        m = "0" + month;
      }

      return m;
    }
  },
  created: function created() {
    this.getuserRunList();
  },
  mounted: function mounted() {
    this.randId = this.randomString(6);
    eeui.setVariate("components::echarts::baidukey", this.baidukey); // eeui.setVariate("components::echarts::opUid:" + this.randId, this.userList.uid);

    eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(this.options));
    eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
    eeui.setVariate("components::echarts::sdateC:" + this.randId, this.sdateC);
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/month.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/WEcharts/month.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fetch/api/apis */ "./src/fetch/api/apis.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

var stream = app.requireModule('stream');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Monthcharts',
  props: {
    baidukey: {
      type: String,
      "default": "706afcb60ea4460e246fe6a24c73e0c5"
    },
    options: {
      type: Object,
      "default": {
        title: {
          text: '基本的折线图（演示）'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 780],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }]
      }
    }
  },
  data: function data() {
    return {
      randId: '',
      loadIng: true,
      monthList: [],
      dayList: [],
      dayNewList: [],
      dayNewList1: [],
      userList: app.config.params ? app.config.params : {},
      sdateC: app.config.params ? app.config.params.sdate : ''
    };
  },
  mounted: function mounted() {
    this.randId = this.randomString(6);
    eeui.setVariate("components::echarts::baidukey", this.baidukey);
    eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(this.options));
    eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
  },
  watch: {
    options: function options(option) {
      this.setOptions(option);
    },
    monthList: function monthList(val) {
      this.monthList = val;
    },
    dayList: function dayList(val) {
      this.dayList = val;
    },
    dayNewList: function dayNewList(val) {
      this.dayNewList = val;
    },
    dayNewList1: function dayNewList1(val) {
      this.dayNewList1 = val;
    }
  },
  methods: {
    webReady: function webReady() {
      this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts2.html#' + this.randId));
    },
    webState: function webState(data) {
      if (data.status === 'start') {
        this.loadIng = true;
      } else if (data.status === 'success' || data.status === 'error') {
        this.loadIng = false;
      }
    },
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },
    setOptions: function setOptions(option) {
      eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(option));
      this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
    },
    receviceMs: function receviceMs(data) {
      var self = this;
      var getUrl = '';
      var arr = [];
      var monT = data.message;
      var tt = monT.substring(5, monT.lastIndexOf('-'));
      var s_date = monT;
      var e_date = self.getMonthFirstOrLaseDay(tt);

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.dayList = res.data;

          if (self.dayList.length != 0) {
            for (var i = 0; i < self.dayList.length; i++) {
              var dayL = self.dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

              var valDetailList = {
                "calorie": self.dayList[i].calorie,
                "check_status": self.dayList[i].check_status,
                "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                "metre": self.dayList[i].metre,
                "run_type": self.dayList[i].run_type,
                "spend_time": self.dayList[i].spend_time,
                "status": self.dayList[i].status,
                "step_number": self.dayList[i].step_number,
                "tr_id": self.dayList[i].tr_id,
                "valid_metre": self.dayList[i].valid_metre,
                "test_metre": self.dayList[i].test_metre
              }; //当日期没有相同的,就新建一个Item

              var valItem = {
                "dayCtime": '',
                "dayListInfo": []
              };
              valItem.dayCtime = dayL;
              valItem.dayListInfo.push(valDetailList); //第0个不需要比较

              if (i == 0) {
                arr.push(valItem);
              } else {
                var index1 = -1; // 通过for循环查找index

                for (var k = 0; k < arr.length; k++) {
                  if (dayL == arr[k].dayCtime) {
                    index1 = k;
                    break;
                  }
                }

                if (index1 === -1) {
                  // 没有找到
                  arr.push(valItem);
                } else {
                  // 找到了
                  arr[k].dayListInfo.push(valDetailList);
                }
              }
            }

            arr.sort(function (a, b) {
              return b.dayCtime > a.dayCtime ? 1 : -1;
            });
            self.dayNewList = arr;
            eeui.setVariate("components::echarts::dayNewList:" + self.randId, JSON.stringify(self.dayNewList));
            self.$refs.reflectName.setJavaScript("if (typeof loadHtml == 'function') { loadHtml() }");
          }
        }
      });
    },
    getuserMonthRunList: function getuserMonthRunList() {
      var self = this;
      var getUrl = '';
      var getUrl1 = '';
      var s_date = '';
      var e_date = '';
      var dayList = [];
      var arr = [];

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userMonthRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userMonthRunList + '?uid=' + self.userList.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.monthList = res.data.reverse();
            var tt = self.monthList[0].title.substring(5, self.monthList[0].title.lastIndexOf('-'));
            var tt1 = self.sdateC.substring(5, self.sdateC.lastIndexOf('-'));
            self.monthList.forEach(function (itm, idx) {
              if (itm.title.indexOf(self.sdateC) > -1 && self.sdateC) {
                s_date = self.monthList[idx].title;
                e_date = self.getMonthFirstOrLaseDay(tt1);
              }

              if (!self.sdateC) {
                s_date = self.monthList[0].title;
                e_date = self.getMonthFirstOrLaseDay(tt);
              }
            });

            if (!self.userList.uid) {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
            } else {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
            }

            stream.fetch({
              url: getUrl1,
              method: 'GET',
              type: 'json',
              headers: {
                Authorization: eeui.getCaches('token', null).token
              }
            }, function (ret) {
              if (ret.status == '200') {
                dayList = ret.data;

                if (dayList.length != 0) {
                  for (var i = 0; i < dayList.length; i++) {
                    var dayL = dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

                    var valDetailList = {
                      "calorie": dayList[i].calorie,
                      "check_status": dayList[i].check_status,
                      "course_class_user_run_id": dayList[i].course_class_user_run_id,
                      "metre": dayList[i].metre,
                      "run_type": dayList[i].run_type,
                      "spend_time": dayList[i].spend_time,
                      "status": dayList[i].status,
                      "step_number": dayList[i].step_number,
                      "tr_id": dayList[i].tr_id,
                      "valid_metre": dayList[i].valid_metre,
                      "test_metre": dayList[i].test_metre
                    }; //当日期没有相同的,就新建一个Item

                    var valItem = {
                      "dayCtime": '',
                      "dayListInfo": []
                    };
                    valItem.dayCtime = dayL;
                    valItem.dayListInfo.push(valDetailList); //第0个不需要比较

                    if (i == 0) {
                      arr.push(valItem);
                    } else {
                      var index1 = -1; // 通过for循环查找index

                      for (var k = 0; k < arr.length; k++) {
                        if (dayL == arr[k].dayCtime) {
                          index1 = k;
                          break;
                        }
                      }

                      if (index1 === -1) {
                        // 没有找到
                        arr.push(valItem);
                      } else {
                        // 找到了
                        arr[k].dayListInfo.push(valDetailList);
                      }
                    }
                  }

                  arr.sort(function (a, b) {
                    return b.dayCtime > a.dayCtime ? 1 : -1;
                  });
                  self.dayNewList1 = arr;
                  eeui.setVariate("components::echarts::dayNewList1:" + self.randId, JSON.stringify(self.dayNewList1));
                }
              }
            });
            eeui.setVariate("components::echarts::monthList:" + self.randId, JSON.stringify(self.monthList));
          }
        }
      });
    },
    getMonthFirstOrLaseDay: function getMonthFirstOrLaseDay(month) {
      var month = month || new Date().getMonth(); //设置默认 如果不穿 取当前月份

      var nowdays = new Date();
      var year = nowdays.getFullYear();

      if (month == 0) {
        month = 12;
        year = year - 1;
      }

      if (month < 10) {
        month = month;
      }

      var firstDay = year + '' + month + '' + "01";
      var myDate = new Date(year, month, 0);
      var lastDay = year + '-' + month + '-' + myDate.getDate();
      return lastDay;
    }
  },
  created: function created() {
    this.getuserMonthRunList();
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/week.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/WEcharts/week.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fetch/api/apis */ "./src/fetch/api/apis.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

var stream = app.requireModule('stream');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WEEkcharts',
  props: {
    baidukey: {
      type: String,
      "default": "706afcb60ea4460e246fe6a24c73e0c5"
    },
    options: {
      type: Object,
      "default": {
        title: {
          text: '基本的折线图（演示）'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 780],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }]
      }
    }
  },
  data: function data() {
    return {
      randId: '',
      loadIng: true,
      dayList: [],
      dayNewList: [],
      weekList: [],
      weekNewList: [],
      dayNewList1: [],
      userList: app.config.params ? app.config.params : {},
      sdateC: app.config.params ? app.config.params.sdate : ''
    };
  },
  mounted: function mounted() {
    this.randId = this.randomString(6);
    eeui.setVariate("components::echarts::baidukey", this.baidukey);
    eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(this.options));
    eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
    eeui.setVariate("components::echarts::sdateC:" + this.randId, this.sdateC);
  },
  watch: {
    options: function options(option) {
      this.setOptions(option);
    },
    weekList: function weekList(val) {
      this.weekList = val;
    },
    dayList: function dayList(val) {
      this.dayList = val;
    },
    dayNewList: function dayNewList(val) {
      this.dayNewList = val;
    }
  },
  methods: {
    webReady: function webReady() {
      this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts1.html#' + this.randId));
    },
    webState: function webState(data) {
      if (data.status === 'start') {
        this.loadIng = true;
      } else if (data.status === 'success' || data.status === 'error') {
        this.loadIng = false;
      }
    },
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },
    receviceMs: function receviceMs(data) {
      var self = this;
      var getUrl = '';
      var arr = [];
      var weekT = data.message;
      var s_date = weekT.substring(0, weekT.indexOf('/'));
      var e_date = weekT.substring(11, weekT.length);

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.dayList = res.data;

          if (self.dayList.length != 0) {
            for (var i = 0; i < self.dayList.length; i++) {
              var dayL = self.dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

              var valDetailList = {
                "calorie": self.dayList[i].calorie,
                "check_status": self.dayList[i].check_status,
                "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                "metre": self.dayList[i].metre,
                "run_type": self.dayList[i].run_type,
                "spend_time": self.dayList[i].spend_time,
                "status": self.dayList[i].status,
                "step_number": self.dayList[i].step_number,
                "tr_id": self.dayList[i].tr_id,
                "valid_metre": self.dayList[i].valid_metre,
                "test_metre": self.dayList[i].test_metre
              }; //当日期没有相同的,就新建一个Item

              var valItem = {
                "dayCtime": '',
                "dayListInfo": []
              };
              valItem.dayCtime = dayL;
              valItem.dayListInfo.push(valDetailList); //第0个不需要比较

              if (i == 0) {
                arr.push(valItem);
              } else {
                var index1 = -1; // 通过for循环查找index

                for (var k = 0; k < arr.length; k++) {
                  if (dayL == arr[k].dayCtime) {
                    index1 = k;
                    break;
                  }
                }

                if (index1 === -1) {
                  // 没有找到
                  arr.push(valItem);
                } else {
                  // 找到了
                  arr[k].dayListInfo.push(valDetailList);
                }
              }
            }

            arr.sort(function (a, b) {
              return b.dayCtime > a.dayCtime ? 1 : -1;
            });
            self.dayNewList = arr;
            eeui.setVariate("components::echarts::dayNewList:" + self.randId, JSON.stringify(self.dayNewList));
            self.$refs.reflectName.setJavaScript("if (typeof loadHtml == 'function') { loadHtml() }");
          }
        }
      });
    },
    setOptions: function setOptions(option) {
      eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(option));
      this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
    },
    getuserWeekRunList: function getuserWeekRunList() {
      var self = this;
      var getUrl = '';
      var s_date = '';
      var e_date = '';
      var arr = [];
      var getUrl1 = '';
      var dayList = [];

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userWeekRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userWeekRunList + '?uid=' + self.userList.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.weekList = res.data.reverse();
            self.weekList.forEach(function (itm, idx) {
              if (itm.title.indexOf(self.sdateC) > -1) {
                s_date = self.weekList[idx].title.substring(0, self.weekList[idx].title.indexOf('/'));
                e_date = self.weekList[idx].title.substring(11, self.weekList[idx].title.length);
              }

              if (!self.sdateC) {
                s_date = self.weekList[0].title.substring(0, self.weekList[0].title.indexOf('/'));
                e_date = self.weekList[0].title.substring(11, self.weekList[0].title.length);
              }
            });

            if (!self.userList.uid) {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
            } else {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
            }

            stream.fetch({
              url: getUrl1,
              method: 'GET',
              type: 'json',
              headers: {
                Authorization: eeui.getCaches('token', null).token
              }
            }, function (ret) {
              if (ret.status == '200') {
                dayList = ret.data;

                if (dayList.length != 0) {
                  for (var i = 0; i < dayList.length; i++) {
                    var dayL = dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

                    var valDetailList = {
                      "calorie": dayList[i].calorie,
                      "check_status": dayList[i].check_status,
                      "course_class_user_run_id": dayList[i].course_class_user_run_id,
                      "metre": dayList[i].metre,
                      "run_type": dayList[i].run_type,
                      "spend_time": dayList[i].spend_time,
                      "status": dayList[i].status,
                      "step_number": dayList[i].step_number,
                      "tr_id": dayList[i].tr_id,
                      "valid_metre": dayList[i].valid_metre,
                      "test_metre": dayList[i].test_metre
                    }; //当日期没有相同的,就新建一个Item

                    var valItem = {
                      "dayCtime": '',
                      "dayListInfo": []
                    };
                    valItem.dayCtime = dayL;
                    valItem.dayListInfo.push(valDetailList); //第0个不需要比较

                    if (i == 0) {
                      arr.push(valItem);
                    } else {
                      var index1 = -1; // 通过for循环查找index

                      for (var k = 0; k < arr.length; k++) {
                        if (dayL == arr[k].dayCtime) {
                          index1 = k;
                          break;
                        }
                      }

                      if (index1 === -1) {
                        // 没有找到
                        arr.push(valItem);
                      } else {
                        // 找到了
                        arr[k].dayListInfo.push(valDetailList);
                      }
                    }
                  }

                  arr.sort(function (a, b) {
                    return b.dayCtime > a.dayCtime ? 1 : -1;
                  });
                  self.dayNewList1 = arr;
                  eeui.setVariate("components::echarts::dayNewList1:" + self.randId, JSON.stringify(self.dayNewList1));
                }
              }
            });
            eeui.setVariate("components::echarts::weekList:" + self.randId, JSON.stringify(self.weekList));
          }
        }
      });
    }
  },
  created: function created() {
    this.getuserWeekRunList();
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/WEcharts/year.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/WEcharts/year.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../fetch/api/apis */ "./src/fetch/api/apis.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var eeui = app.requireModule('eeui');

var stream = app.requireModule('stream');
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Yearcharts',
  props: {
    baidukey: {
      type: String,
      "default": "706afcb60ea4460e246fe6a24c73e0c5"
    },
    options: {
      type: Object,
      "default": {
        title: {
          text: '基本的折线图（演示）'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 780],
          type: 'line',
          smooth: true,
          areaStyle: {}
        }]
      }
    }
  },
  data: function data() {
    return {
      randId: '',
      loadIng: true,
      yearList: [],
      dayList: [],
      dayNewList: [],
      dayNewList1: [],
      userList: app.config.params ? app.config.params : {},
      sdateC: app.config.params ? app.config.params.sdate : '',
      mon: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    };
  },
  mounted: function mounted() {
    this.randId = this.randomString(6);
    eeui.setVariate("components::echarts::baidukey", this.baidukey);
    eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(this.options));
    eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
    eeui.setVariate("components::echarts::sdateC:" + this.randId, this.sdateC);
  },
  watch: {
    options: function options(option) {
      this.setOptions(option);
    },
    yearList: function yearList(val) {
      this.yearList = val;
    },
    dayList: function dayList(val) {
      this.dayList = val;
    },
    dayNewList: function dayNewList(val) {
      this.dayNewList = val;
    },
    dayNewList1: function dayNewList1(val) {
      this.dayNewList1 = val;
    }
  },
  methods: {
    webReady: function webReady() {
      this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts3.html#' + this.randId));
    },
    webState: function webState(data) {
      if (data.status === 'start') {
        this.loadIng = true;
      } else if (data.status === 'success' || data.status === 'error') {
        this.loadIng = false;
      }
    },
    randomString: function randomString(len) {
      len = len || 32;
      var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
      var maxPos = $chars.length;
      var pwd = '';

      for (var i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }

      return pwd;
    },
    setOptions: function setOptions(option) {
      eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(option));
      this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
    },
    receviceMs: function receviceMs(data) {
      var self = this;
      var getUrl = '';
      var arr = [];
      var monT = data.message + 1;
      var s_date = self.getMonthFirstOrLaseDay(monT).firstDay;
      var e_date = self.getMonthFirstOrLaseDay(monT).lastDay;

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.dayList = res.data;

          if (self.dayList.length != 0) {
            for (var i = 0; i < self.dayList.length; i++) {
              var dayL = self.dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

              var valDetailList = {
                "calorie": self.dayList[i].calorie,
                "check_status": self.dayList[i].check_status,
                "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                "metre": self.dayList[i].metre,
                "run_type": self.dayList[i].run_type,
                "spend_time": self.dayList[i].spend_time,
                "status": self.dayList[i].status,
                "step_number": self.dayList[i].step_number,
                "tr_id": self.dayList[i].tr_id,
                "valid_metre": self.dayList[i].valid_metre,
                "test_metre": self.dayList[i].test_metre
              }; //当日期没有相同的,就新建一个Item

              var valItem = {
                "dayCtime": '',
                "dayListInfo": []
              };
              valItem.dayCtime = dayL;
              valItem.dayListInfo.push(valDetailList); //第0个不需要比较

              if (i == 0) {
                arr.push(valItem);
              } else {
                var index1 = -1; // 通过for循环查找index

                for (var k = 0; k < arr.length; k++) {
                  if (dayL == arr[k].dayCtime) {
                    index1 = k;
                    break;
                  }
                }

                if (index1 === -1) {
                  // 没有找到
                  arr.push(valItem);
                } else {
                  // 找到了
                  arr[k].dayListInfo.push(valDetailList);
                }
              }
            }

            arr.sort(function (a, b) {
              return b.dayCtime > a.dayCtime ? 1 : -1;
            });
            self.dayNewList = arr;
            eeui.setVariate("components::echarts::dayNewList:" + self.randId, JSON.stringify(self.dayNewList));
            self.$refs.reflectName.setJavaScript("if (typeof loadHtml == 'function') { loadHtml() }");
          }
        }
      });
    },
    getuserYearRunList: function getuserYearRunList() {
      var self = this;
      var getUrl = '';
      var getUrl1 = '';
      var s_date = '';
      var e_date = '';
      var dayList = [];
      var arr = [];

      if (!self.userList.uid) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userYearRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userYearRunList + '?uid=' + self.userList.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.yearList = res.data;
            var tt1 = self.sdateC.substring(5, self.sdateC.lastIndexOf('-'));
            self.mon.forEach(function (itm, idx) {
              if (itm.indexOf(tt1) > -1 && self.sdateC) {
                s_date = self.getMonthFirstOrLaseDay(idx + 1).firstDay;
                e_date = self.getMonthFirstOrLaseDay(idx + 1).lastDay;
              }

              if (!self.sdateC) {
                s_date = self.getMonthFirstOrLaseDay('1').firstDay;
                e_date = self.getMonthFirstOrLaseDay('1').lastDay;
              }
            });

            if (!self.userList.uid) {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
            } else {
              getUrl1 = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].userOpenRunList + '?uid=' + self.userList.uid + '&s_date=' + s_date + '&end_date=' + e_date;
            }

            stream.fetch({
              url: getUrl1,
              method: 'GET',
              type: 'json',
              headers: {
                Authorization: eeui.getCaches('token', null).token
              }
            }, function (ret) {
              if (ret.status == '200') {
                dayList = ret.data;

                if (dayList.length != 0) {
                  for (var i = 0; i < dayList.length; i++) {
                    var dayL = dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

                    var valDetailList = {
                      "calorie": dayList[i].calorie,
                      "check_status": dayList[i].check_status,
                      "course_class_user_run_id": dayList[i].course_class_user_run_id,
                      "metre": dayList[i].metre,
                      "run_type": dayList[i].run_type,
                      "spend_time": dayList[i].spend_time,
                      "status": dayList[i].status,
                      "step_number": dayList[i].step_number,
                      "tr_id": dayList[i].tr_id,
                      "valid_metre": dayList[i].valid_metre,
                      "test_metre": dayList[i].test_metre
                    }; //当日期没有相同的,就新建一个Item

                    var valItem = {
                      "dayCtime": '',
                      "dayListInfo": []
                    };
                    valItem.dayCtime = dayL;
                    valItem.dayListInfo.push(valDetailList); //第0个不需要比较

                    if (i == 0) {
                      arr.push(valItem);
                    } else {
                      var index1 = -1; // 通过for循环查找index

                      for (var k = 0; k < arr.length; k++) {
                        if (dayL == arr[k].dayCtime) {
                          index1 = k;
                          break;
                        }
                      }

                      if (index1 === -1) {
                        // 没有找到
                        arr.push(valItem);
                      } else {
                        // 找到了
                        arr[k].dayListInfo.push(valDetailList);
                      }
                    }
                  }

                  arr.sort(function (a, b) {
                    return b.dayCtime > a.dayCtime ? 1 : -1;
                  });
                  self.dayNewList1 = arr;
                  eeui.setVariate("components::echarts::dayNewList1:" + self.randId, JSON.stringify(self.dayNewList1));
                }
              }
            });
            eeui.setVariate("components::echarts::yearList:" + self.randId, JSON.stringify(self.yearList));
          }
        }
      });
    },
    getMonthFirstOrLaseDay: function getMonthFirstOrLaseDay(month) {
      var month = month || new Date().getMonth(); //设置默认 如果不穿 取当前月份

      var nowdays = new Date();
      var year = nowdays.getFullYear();

      if (month == 0) {
        month = 12;
        year = year - 1;
      }

      if (month < 10) {
        month = '0' + month;
      }

      var firstDay = year + '-' + month + '-' + "01";
      var myDate = new Date(year, month, 0);
      var lastDay = year + '-' + month + '-' + myDate.getDate();
      return {
        'firstDay': firstDay,
        'lastDay': lastDay
      };
    }
  },
  created: function created() {
    this.getuserYearRunList();
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/components/failNet.vue":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/components/failNet.vue ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var eeui = app.requireModule('eeui');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {};
  },
  methods: {
    reloadPage: function reloadPage() {
      eeui.reloadPage(eeui.getPageInfo().pageName);
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/sprotreport.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/runPages/sprotreport.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var weex_ui_packages_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! weex-ui/packages/utils */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/utils/index.js");
/* harmony import */ var weex_ui_packages_wxc_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! weex-ui/packages/wxc-popover */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.js");
/* harmony import */ var weex_ui_packages_wxc_minibar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! weex-ui/packages/wxc-minibar */ "./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.js");
/* harmony import */ var _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fetch/api/apis */ "./src/fetch/api/apis.js");
/* harmony import */ var _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/WEcharts/index */ "./src/components/WEcharts/index.vue");
/* harmony import */ var _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_WEcharts_index__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_WEcharts_week__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/WEcharts/week */ "./src/components/WEcharts/week.vue");
/* harmony import */ var _components_WEcharts_week__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_WEcharts_week__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_WEcharts_month__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/WEcharts/month */ "./src/components/WEcharts/month.vue");
/* harmony import */ var _components_WEcharts_month__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_WEcharts_month__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_WEcharts_year__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/WEcharts/year */ "./src/components/WEcharts/year.vue");
/* harmony import */ var _components_WEcharts_year__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_WEcharts_year__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_failNet_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/failNet.vue */ "./src/components/failNet.vue");
/* harmony import */ var _components_failNet_vue__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_failNet_vue__WEBPACK_IMPORTED_MODULE_8__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
var eeui = app.requireModule('eeui');

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    WEcharts: _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_4___default.a,
    WxcMinibar: weex_ui_packages_wxc_minibar__WEBPACK_IMPORTED_MODULE_2__["default"],
    WxcPopover: weex_ui_packages_wxc_popover__WEBPACK_IMPORTED_MODULE_1__["default"],
    failNet: _components_failNet_vue__WEBPACK_IMPORTED_MODULE_8___default.a,
    WEEkcharts: _components_WEcharts_week__WEBPACK_IMPORTED_MODULE_5___default.a,
    Monthcharts: _components_WEcharts_month__WEBPACK_IMPORTED_MODULE_6___default.a,
    Yearcharts: _components_WEcharts_year__WEBPACK_IMPORTED_MODULE_7___default.a
  },
  data: function data() {
    return {
      tabT: ['日', '周', '月', '年'],
      tabCindex: 0,
      dayNOption: {},
      dayOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: [],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '步数',
          type: 'bar',
          barWidth: '30',
          itemStyle: {
            normal: {
              color: '#00C179'
            }
          },
          data: []
        }]
      },
      weekNOption: {},
      weekOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: [],
          axisLabel: {
            interval: 0,
            //强制文字产生间隔					  
            textStyle: {
              //文字样式
              color: "black",
              fontSize: 12,
              fontFamily: 'Microsoft YaHei'
            }
          },
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '步数',
          type: 'bar',
          barWidth: '30',
          itemStyle: {
            normal: {
              color: '#00C179'
            }
          },
          data: []
        }]
      },
      monthNOption: {},
      monthOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: [],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '步数',
          type: 'bar',
          barWidth: '30',
          itemStyle: {
            normal: {
              color: '#00C179'
            }
          },
          data: []
        }]
      },
      yearNOption: {},
      yearOption: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'

          }
        },
        grid: {
          left: '0%',
          right: '0%',
          bottom: '3%',
          top: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: [],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '步数',
          type: 'bar',
          barWidth: '30',
          itemStyle: {
            normal: {
              color: '#00C179'
            }
          },
          data: []
        }]
      },
      dayList: [],
      dayNewList: [],
      weekList: [],
      monthList: [],
      yearList: [],
      btns: [{
        text: '全部',
        key: '全部'
      } // {
      // text:'体育成绩跑',
      // key:'体育成绩跑'
      // },
      // {
      // text:'自由跑',
      // key:'自由跑'
      // },
      ],
      popoverPosition: {
        x: 220,
        y: 70
      },
      popoverArrowPosition: {
        pos: 'top',
        x: 115
      },
      curText: '全部',
      opUid: app.config.params ? app.config.params.uid : '',
      netWorkShow: false,
      tabPageHeight: 1334,
      sdate: app.config.params ? app.config.params.sdate : '',
      userInfos: app.config.params ? app.config.params.user : '',
      userInfo: ''
    };
  },
  methods: {
    tabClick: function tabClick(index) {
      var self = this;
      self.tabCindex = index; // switch (index) {
      //     case 0:{
      //         break;
      //     }
      //     case 1:{
      //         self.getuserWeekRunList();
      //         break;
      //     }
      //     case 2:{
      //         self.getuserMonthRunList();
      //         break;
      //     }
      //     case 3:{
      //         self.getuserYearRunList();
      //         break;
      //     }
      // }
    },
    getuserRunList: function getuserRunList() {
      var self = this;
      var s_date = self.getDay(-6);
      var e_date = self.getDay(0);
      var arr = [];
      var getUrl = '';

      if (!self.userInfos) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userRunList + '?s_date=' + s_date + '&end_date=' + e_date;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userOpenRunList + '?uid=' + self.userInfos.uid + '&s_date=' + s_date + '&end_date=' + e_date; // getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userInfos.uid +'&s_date=' + self.sdate + '&end_date=' + self.sdate;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          self.dayList = res.data;

          if (self.dayList.length != 0) {
            for (var i = 0; i < self.dayList.length; i++) {
              var dayL = self.dayList[i].c_time.substring(0, 10); //当日期相同,只要传这个

              var valDetailList = {
                "calorie": self.dayList[i].calorie,
                "check_status": self.dayList[i].check_status,
                "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                "metre": self.dayList[i].metre,
                "run_type": self.dayList[i].run_type,
                "spend_time": self.dayList[i].spend_time,
                "status": self.dayList[i].status,
                "step_number": self.dayList[i].step_number,
                "tr_id": self.dayList[i].tr_id,
                "valid_metre": self.dayList[i].valid_metre ? self.dayList[i].valid_metre : 0,
                "test_metre": self.dayList[i].test_metre ? self.dayList[i].test_metre : 0
              }; //当日期没有相同的,就新建一个Item

              var valItem = {
                "dayCtime": '',
                "dayListInfo": []
              };
              valItem.dayCtime = dayL;
              valItem.dayListInfo.push(valDetailList); //第0个不需要比较

              if (i == 0) {
                arr.push(valItem);
              } else {
                var index1 = -1; // 通过for循环查找index

                for (var k = 0; k < arr.length; k++) {
                  if (dayL == arr[k].dayCtime) {
                    index1 = k;
                    break;
                  }
                }

                if (index1 === -1) {
                  // 没有找到
                  arr.push(valItem);
                } else {
                  // 找到了
                  arr[k].dayListInfo.push(valDetailList);
                }
              }
            }

            arr.sort(function (a, b) {
              return b.dayCtime < a.dayCtime ? 1 : -1;
            });
            var strarr = [];
            arr.forEach(function (val, index) {
              var cc = [];
              self.dayOption.xAxis[0].data.push(val.dayCtime.substring(5, 10));

              if (val.dayListInfo.length == 1) {
                self.dayOption.series[0].data.push(val.dayListInfo[0].step_number);
              } else {
                val.dayListInfo.map(function (item, idx) {
                  cc.push(item.step_number);
                });
                self.dayOption.series[0].data.push(eval(cc.join('+')));
              }

              if (self.userInfos) {
                if (val.dayCtime.indexOf(self.sdate) > -1) {
                  var cccccc = self.dayOption.series[0].data;
                  cccccc[index] = {
                    value: cccccc[index],
                    itemStyle: {
                      color: 'orange'
                    }
                  };
                }
              }
            });
            self.dayNOption = self.dayOption;
          }
        } else {
          if (res.status == '-1') {
            self.netWorkShow = true;
            return;
          }
        }
      });
    },
    getuserWeekRunList: function getuserWeekRunList() {
      var self = this;
      var cc = '';
      var weekNArry = [];
      var getUrl = '';

      if (!self.userInfos) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userWeekRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userWeekRunList + '?uid=' + self.userInfos.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.weekList = res.data.reverse();
            self.weekList.forEach(function (val, index) {
              if (val.title) {
                cc = val.title.substring(5, val.title.indexOf('/')) + '/' + val.title.substring(16, val.title.length);
              }

              self.weekOption.xAxis[0].data.push(cc);
              self.weekOption.series[0].data.push(val.step_number);

              if (self.userInfos) {
                if (val.title.indexOf(self.sdate) > -1) {
                  var cccccc = self.weekOption.series[0].data;
                  cccccc[index] = {
                    value: cccccc[index],
                    itemStyle: {
                      color: 'orange'
                    }
                  };
                }
              }
            });
            self.weekNOption = self.weekOption;
          }
        }
      });
    },
    getuserMonthRunList: function getuserMonthRunList() {
      var self = this;
      var cc = '';
      var monthNArry = [];
      var getUrl = '';

      if (!self.userInfos) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userMonthRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userMonthRunList + '?uid=' + self.userInfos.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.monthList = res.data.reverse();
            self.monthList.forEach(function (val, index) {
              if (val.title) {
                cc = val.title.substring(5, val.title.lastIndexOf('-')) + '月';
              }

              self.monthOption.xAxis[0].data.push(cc);
              self.monthOption.series[0].data.push(val.step_number);

              if (self.userInfos) {
                if (val.title.indexOf(self.sdate.substring(5, self.sdate.lastIndexOf('-'))) > -1 && self.sdate) {
                  var cccccc = self.monthOption.series[0].data;
                  cccccc[index] = {
                    value: cccccc[index],
                    itemStyle: {
                      color: 'orange'
                    }
                  };
                }
              }
            });
            self.monthNOption = self.monthOption;
          }
        }
      });
    },
    getuserYearRunList: function getuserYearRunList() {
      var self = this;
      var cc = '';
      var getUrl = '';

      if (!self.userInfos) {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userYearRunList + '?page=' + 0;
      } else {
        getUrl = _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].userYearRunList + '?uid=' + self.userInfos.uid + '&page=' + 0;
      }

      stream.fetch({
        url: getUrl,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == '200') {
          if (res.data.length != 0) {
            self.yearList = res.data;
            self.yearList.forEach(function (val, index) {
              if (val.title) {
                cc = val.title.substring(0, val.title.indexOf('-')) + '年';
              }

              self.yearOption.xAxis[0].data.push(cc);
              self.yearOption.series[0].data.push(val.step_number);

              if (self.userInfos) {
                if (val.title.indexOf(self.sdate.substring(0, 5)) > -1 && self.sdate) {
                  var cccccc = self.yearOption.series[0].data;
                  cccccc[index] = {
                    value: cccccc[index],
                    itemStyle: {
                      color: 'orange'
                    }
                  };
                }
              }
            });
            self.yearNOption = self.yearOption;
          }
        }
      });
    },
    s_to_hs1: function s_to_hs1(s) {
      var h;
      h = Math.floor(s / 60);
      s = s % 60;
      h += '';
      s += '';
      h = h.length == 1 ? '' + h : h;
      s = s.length == 1 ? '' + s : s;
      return h;
    },
    getDay: function getDay(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds);
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tYear + "-" + tMonth + "-" + tDate;
    },
    getDay1: function getDay1(day) {
      var today = new Date();
      var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
      today.setTime(targetday_milliseconds);
      var tYear = today.getFullYear();
      var tMonth = today.getMonth();
      var tDate = today.getDate();
      tMonth = this.doHandleMonth(tMonth + 1);
      tDate = this.doHandleMonth(tDate);
      return tMonth + "-" + tDate;
    },
    doHandleMonth: function doHandleMonth(month) {
      var m = month;

      if (month.toString().length == 1) {
        m = "0" + month;
      }

      return m;
    },
    jumpenterpage: function jumpenterpage() {// eeui.openPage({
      //         url: 'sharepage.js',
      //         statusBarColor:'#1eb76e',
      //         pageName:'分享',
      //         animated:true,
      //     }, function(result) {
      //         //......
      //     }); 
    },
    minibarRightButtonClick: function minibarRightButtonClick() {
      this.$refs['wxc-popover'].wxcPopoverShow();
    },
    popoverButtonClicked: function popoverButtonClicked(obj) {
      //eeui.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
      this.curText = obj.key;
      eeuiLog.log(this.curText);
    },
    backJump: function backJump() {
      if (this.opUid === '') {
        eeui.openPage({
          url: 'schoolRun.js',
          statusBarColor: '#1eb76e',
          pageName: 'schoolRun',
          animated: false,
          params: {
            position: 1
          }
        }, function (result) {//......
        });
      } else {
        eeui.closePage();
      }
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      stream.fetch({
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_3__["default"].getUserInfo,
        method: 'GET',
        type: 'json',
        headers: {
          Authorization: eeui.getCaches('token', null).token
        }
      }, function (res) {
        if (res.status == 200) {
          _this.userInfo = res.data;
        }
      });
    }
  },
  watch: {},
  mounted: function mounted() {
    var self = this;
  },
  created: function created() {
    this.getUserInfo();
    this.getuserRunList();
    this.getuserWeekRunList();
    this.getuserMonthRunList();
    this.getuserYearRunList();
    this.tabPageHeight = weex_ui_packages_utils__WEBPACK_IMPORTED_MODULE_0__["default"].env.getPageHeight() - 160;
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-23197b42!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/failNet.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-23197b42!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/failNet.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "networkW": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "bottom": 0,
    "left": 0,
    "backgroundColor": "#ffffff",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "netpic": {
    "width": "180",
    "height": "151",
    "marginBottom": "28"
  },
  "netTxt1": {
    "fontSize": "26",
    "color": "#2edb7d"
  },
  "netTxt2": {
    "paddingTop": "16",
    "fontSize": "22",
    "color": "#222222"
  },
  "reloadP": {
    "width": "130",
    "height": "66",
    "marginTop": "20"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-2c64df16!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/year.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-2c64df16!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/WEcharts/year.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "position": "relative"
  },
  "webview": {
    "flex": 1,
    "scrollEnabled": "false",
    "progressbarVisibility": "false"
  },
  "icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "content": "\"tb-loading-c spin\"",
    "fontSize": "48",
    "color": "#666666"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-30847249!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/sprotreport.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-30847249!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/runPages/sprotreport.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#1eb76e"
  },
  "backIcon": {
    "width": 60,
    "height": 60,
    "marginLeft": 20,
    "color": "#ffffff"
  },
  "headtext": {
    "fontSize": "43",
    "color": "#ffffff"
  },
  "navbartitcont": {
    "flexDirection": "row"
  },
  "topnavIcon": {
    "width": "60",
    "height": "50",
    "marginLeft": 30,
    "color": "#ffffff"
  },
  "setIcon": {
    "width": 60,
    "height": 60
  },
  "content": {
    "width": 750
  },
  "timetabr": {
    "width": "690",
    "height": "56",
    "borderStyle": "solid",
    "borderWidth": "2",
    "borderColor": "#575757",
    "borderRadius": "10",
    "marginTop": 33,
    "marginLeft": 30,
    "overflow": "hidden"
  },
  "timetabrwww": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "height": 56
  },
  "timeItem": {
    "flex": 1,
    "textAlign": "center",
    "height": 56,
    "lineHeight": 56,
    "borderLeftColor": "#575757",
    "borderLeftStyle": "solid",
    "borderLeftWidth": "2"
  },
  "timeItemNone": {
    "borderLeftWidth": 0
  },
  "timeItemcur": {
    "backgroundColor": "#575757",
    "color": "#ffffff"
  },
  "map": {
    "width": "690",
    "marginLeft": 30,
    "marginTop": 30
  },
  "valueList": {
    "flexDirection": "row",
    "height": 79,
    "borderBottomColor": "#dadada",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "1",
    "justifyContent": "space-between",
    "marginLeft": 30,
    "marginRight": 30
  },
  "valueitem": {
    "flexDirection": "row",
    "height": 79,
    "justifyContent": "space-between",
    "alignItems": "center",
    "width": 326
  },
  "valueText": {
    "fontSize": 27,
    "color": "#575757",
    "marginLeft": "18"
  },
  "iconleft": {
    "flexDirection": "row",
    "height": 79,
    "alignItems": "center"
  },
  "value": {
    "fontSize": 32,
    "color": "#4e4e4e",
    "fontWeight": "bold"
  },
  "onevaluelist": {
    "marginTop": 20
  },
  "valuebox": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "valueP": {
    "fontSize": "27",
    "color": "#4E4E4E",
    "marginTop": 5
  },
  "timestit": {
    "fontSize": 27,
    "color": "#575757",
    "borderBottomColor": "#DADADA",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "paddingBottom": 16,
    "marginLeft": 30,
    "marginRight": 30,
    "marginTop": 35
  },
  "times": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginLeft": 30,
    "marginRight": 30,
    "height": 101,
    "alignItems": "center",
    "borderBottomColor": "#DADADA",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid"
  },
  "timesleft": {
    "flexDirection": "row",
    "height": 101,
    "alignItems": "center"
  },
  "timesiconbox": {
    "width": 50,
    "height": 60,
    "position": "relative"
  },
  "timesshan": {
    "marginTop": 13
  },
  "error": {
    "position": "absolute",
    "top": 0,
    "right": 2
  },
  "sh": {
    "position": "absolute",
    "top": 0,
    "right": 2
  },
  "timestext": {
    "fontSize": 27,
    "color": "#575757",
    "marginLeft": 34
  },
  "iconback": {
    "width": 50,
    "height": 50,
    "color": "#999999"
  },
  "userNt": {
    "marginRight": 30,
    "fontSize": 30,
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-31f8e277!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/month.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-31f8e277!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/WEcharts/month.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "position": "relative"
  },
  "webview": {
    "flex": 1,
    "scrollEnabled": "false",
    "progressbarVisibility": "false"
  },
  "icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "content": "\"tb-loading-c spin\"",
    "fontSize": "48",
    "color": "#666666"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4f506fc9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-4f506fc9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/WEcharts/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "position": "relative"
  },
  "webview": {
    "flex": 1,
    "scrollEnabled": "false",
    "progressbarVisibility": "false"
  },
  "icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "content": "\"tb-loading-c spin\"",
    "fontSize": "48",
    "color": "#666666"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-6313434d!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/components/WEcharts/week.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-6313434d!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/components/WEcharts/week.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "position": "relative"
  },
  "webview": {
    "flex": 1,
    "scrollEnabled": "false",
    "progressbarVisibility": "false"
  },
  "icon": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "content": "\"tb-loading-c spin\"",
    "fontSize": "48",
    "color": "#666666"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-cb380422!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-cb380422!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wxc-minibar": {
    "width": "750",
    "height": "90",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "left": {
    "width": "180",
    "paddingLeft": "32"
  },
  "middle-title": {
    "fontSize": "30",
    "color": "#ffffff",
    "height": "36",
    "lineHeight": "34"
  },
  "right": {
    "width": "180",
    "paddingRight": "32",
    "alignItems": "flex-end"
  },
  "left-button": {
    "width": "21",
    "height": "36"
  },
  "right-button": {
    "width": "32",
    "height": "32"
  },
  "icon-text": {
    "fontSize": "28",
    "color": "#ffffff"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-d48d1e10!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-d48d1e10!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "zIndex": 999
  },
  "g-cover": {
    "position": "fixed",
    "top": 0,
    "right": 0,
    "left": 0,
    "bottom": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "zIndex": 1
  },
  "g-popover": {
    "position": "fixed",
    "paddingTop": "15",
    "paddingRight": "15",
    "paddingBottom": "15",
    "paddingLeft": "15",
    "zIndex": 10
  },
  "u-popover-arrow": {
    "position": "absolute",
    "borderRadius": "4",
    "width": "30",
    "height": "30",
    "backgroundColor": "#ffffff"
  },
  "u-popover-inner": {
    "borderRadius": "10",
    "backgroundColor": "#ffffff"
  },
  "i-btn": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center",
    "marginLeft": "20",
    "marginRight": "20",
    "paddingLeft": "20",
    "paddingRight": "20",
    "borderBottomWidth": "1",
    "borderBottomColor": "#dddddd"
  },
  "i-btn-noborder": {
    "borderBottomColor": "#ffffff"
  },
  "btn-icon": {
    "width": "32",
    "height": "32",
    "marginRight": "16"
  },
  "btn-text": {
    "flex": 1,
    "height": "80",
    "fontSize": "30",
    "lineHeight": "80"
  },
  "text-align-center": {
    "textAlign": "center"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-23197b42!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/failNet.vue":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-23197b42!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/failNet.vue ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('div', {
    staticClass: ["networkW"]
  }, [_c('image', {
    staticClass: ["netpic"],
    attrs: {
      "src": "root://assets/images/netWork.png"
    }
  }), _c('text', {
    staticClass: ["netTxt1"]
  }, [_vm._v("网络请求失败")]), _c('text', {
    staticClass: ["netTxt2"]
  }, [_vm._v("请检查您的网络设置")]), _c('button', {
    staticClass: ["reloadP"],
    attrs: {
      "eeui": {
        text: '重新加载',
        backgroundColor: '#1eb76e',
        fontSize: 24
      }
    },
    on: {
      "click": _vm.reloadPage
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-2c64df16!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/year.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-2c64df16!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/WEcharts/year.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webview"],
    on: {
      "ready": _vm.webReady,
      "stateChanged": _vm.webState,
      "receiveMessage": _vm.receviceMs
    }
  }), (_vm.loadIng) ? _c('icon', {
    staticClass: ["icon"]
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-30847249!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/sprotreport.vue":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-30847249!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/runPages/sprotreport.vue ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    }
  }, [_c('icon', {
    staticClass: ["backIcon"],
    attrs: {
      "eeui": {
        content: 'md-arrow-back',
        fontSize: 38
      }
    },
    on: {
      "click": _vm.backJump
    }
  })], 1), _c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('div', {
    staticClass: ["navbartitcont"],
    on: {
      "click": _vm.minibarRightButtonClick
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v(_vm._s(_vm.curText))]), _c('icon', {
    staticClass: ["topnavIcon"],
    attrs: {
      "eeui": {
        content: 'ios-arrow-down',
        fontSize: 50
      }
    }
  })], 1)]), _c('navbar-item', {
    attrs: {
      "type": "right"
    }
  }, [_c('text', {
    staticClass: ["userNt"]
  }, [_vm._v(_vm._s(_vm.userInfos ? _vm.userInfos.name : _vm.userInfo.name))])])], 1), _c('wxc-popover', {
    ref: "wxc-popover",
    attrs: {
      "buttons": _vm.btns,
      "position": _vm.popoverPosition,
      "arrowPosition": _vm.popoverArrowPosition
    },
    on: {
      "wxcPopoverButtonClicked": _vm.popoverButtonClicked
    }
  }), _c('div', {
    staticClass: ["content"]
  }, [_c('div', {
    staticClass: ["timetabr"]
  }, [_c('div', {
    staticClass: ["timetabrwww"]
  }, _vm._l((_vm.tabT), function(item, index) {
    return _c('text', {
      key: index,
      staticClass: ["timeItem"],
      class: [index == _vm.tabCindex ? 'timeItemcur' : '', index == 0 ? 'timeItemNone' : ''],
      on: {
        "click": function($event) {
          _vm.tabClick(index)
        }
      }
    }, [_vm._v(_vm._s(item))])
  }))]), (_vm.tabCindex == 0) ? _c('scroller', {
    staticClass: ["map"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    }
  }, [_c('WEcharts', {
    staticClass: ["echarts"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    },
    attrs: {
      "id": "dayEchart",
      "options": _vm.dayNOption
    }
  })], 1) : _vm._e(), (_vm.tabCindex == 1) ? _c('scroller', {
    staticClass: ["map"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    }
  }, [_c('WEEkcharts', {
    staticClass: ["echarts"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    },
    attrs: {
      "options": _vm.weekNOption
    }
  })], 1) : _vm._e(), (_vm.tabCindex == 2) ? _c('scroller', {
    staticClass: ["map"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    }
  }, [_c('Monthcharts', {
    staticClass: ["echarts"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    },
    attrs: {
      "options": _vm.monthNOption
    }
  })], 1) : _vm._e(), (_vm.tabCindex == 3) ? _c('scroller', {
    staticClass: ["map"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    }
  }, [_c('Yearcharts', {
    staticClass: ["echarts"],
    style: {
      height: _vm.tabPageHeight,
      overfow: _vm.hidden
    },
    attrs: {
      "options": _vm.yearNOption
    }
  })], 1) : _vm._e()]), (_vm.netWorkShow) ? _c('failNet') : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-31f8e277!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/month.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-31f8e277!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/WEcharts/month.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webview"],
    on: {
      "ready": _vm.webReady,
      "stateChanged": _vm.webState,
      "receiveMessage": _vm.receviceMs
    }
  }), (_vm.loadIng) ? _c('icon', {
    staticClass: ["icon"]
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4f506fc9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/index.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-4f506fc9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/WEcharts/index.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webview"],
    on: {
      "ready": _vm.webReady,
      "stateChanged": _vm.webState
    }
  }), (_vm.loadIng) ? _c('icon', {
    staticClass: ["icon"]
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-6313434d!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/components/WEcharts/week.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-6313434d!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/components/WEcharts/week.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('web-view', {
    ref: "reflectName",
    staticClass: ["webview"],
    on: {
      "ready": _vm.webReady,
      "stateChanged": _vm.webState,
      "receiveMessage": _vm.receviceMs
    }
  }), (_vm.loadIng) ? _c('icon', {
    staticClass: ["icon"]
  }) : _vm._e()], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-cb380422!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-cb380422!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-minibar/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', {
    staticClass: ["wxc-minibar"],
    style: _vm.newBarStyle
  }, [_c('div', {
    staticClass: ["left"],
    attrs: {
      "ariaLabel": "返回",
      "accessible": true
    },
    on: {
      "click": _vm.leftButtonClicked
    }
  }, [_vm._t("left", [(_vm.leftButton && !_vm.leftText) ? _c('image', {
    staticClass: ["left-button"],
    attrs: {
      "src": _vm.leftButton
    }
  }) : _vm._e(), (_vm.leftText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.leftText))]) : _vm._e()])], 2), _vm._t("middle", [_c('text', {
    staticClass: ["middle-title"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.title))])]), _c('div', {
    staticClass: ["right"],
    on: {
      "click": _vm.rightButtonClicked
    }
  }, [_vm._t("right", [(_vm.rightButton && !_vm.rightText) ? _c('image', {
    staticClass: ["right-button"],
    attrs: {
      "src": _vm.rightButton,
      "ariaHidden": true
    }
  }) : _vm._e(), (_vm.rightText) ? _c('text', {
    staticClass: ["icon-text"],
    style: {
      color: _vm.textColor
    }
  }, [_vm._v(_vm._s(_vm.rightText))]) : _vm._e()])], 2)], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-d48d1e10!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-d48d1e10!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./node_modules/_weex-ui@0.8.4@weex-ui/packages/wxc-popover/index.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [(_vm.show) ? _c('div', {
    ref: "wxc-cover",
    staticClass: ["g-cover"],
    style: _vm.coverStyle,
    on: {
      "click": _vm.hideAction
    }
  }) : _vm._e(), (_vm.show && _vm.buttons.length) ? _c('div', {
    ref: "wxc-popover",
    staticClass: ["g-popover"],
    style: _vm.contentStyle
  }, [_c('div', {
    staticClass: ["u-popover-arrow"],
    style: _vm.arrowStyle
  }), _c('div', {
    staticClass: ["u-popover-inner"]
  }, _vm._l((_vm.buttons), function(item, i) {
    return _c('div', {
      key: i,
      class: ['i-btn', i === _vm.buttons.length - 1 ? 'i-btn-noborder' : ''],
      on: {
        "click": function($event) {
          _vm.wxcButtonClicked(i, item.key)
        }
      }
    }, [(item.icon) ? _c('image', {
      staticClass: ["btn-icon"],
      attrs: {
        "src": item.icon
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["btn-text"],
      style: _vm.textStyle
    }, [_vm._v(_vm._s(item.text))])])
  }))]) : _vm._e()])
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