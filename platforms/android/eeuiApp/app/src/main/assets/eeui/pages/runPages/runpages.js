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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/runPages/runpages.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/runPages/runpages.vue?entry=true":
/*!****************************************************!*\
  !*** ./src/pages/runPages/runpages.vue?entry=true ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-f3399b24!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./runpages.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-f3399b24!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/runpages.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./runpages.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/runpages.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-f3399b24!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./runpages.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-f3399b24!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/runpages.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\runPages\\runpages.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f3399b24"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/runpages.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/runPages/runpages.vue ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
var amap = app.requireModule('eeuiAmap');
var eeui = app.requireModule('eeui');
var globalEvent = weex.requireModule('globalEvent');
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      btnShow: false,
      runOverList: {}
    };
  },
  methods: {
    stop: function stop() {
      this.btnShow = true;
    },
    counti: function counti() {
      this.btnShow = false;
    },
    over: function over() {
      var self = this;
      eeui.confirm({
        title: "温馨提示",
        message: "你确定结束吗？",
        buttons: ["取消", "确定"]
      }, function (result) {
        if (result.status == "click" && result.title == "确定") {
          eeui.openPage({
            url: 'rundetailout.js',
            statusBarColor: '#1eb76e',
            pageName: '运动详细',
            animated: false,
            params: {
              runOverList: self.runOverList
            }
          }, function (result) {//......
          });
        }
      });
    }
  },
  created: function created() {
    // 添加 字体图标
    var self = this;
    var domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont",
      'src': "url('http://at.alicdn.com/t/font_1628280_razig2u9kxg.ttf')"
    }); // globalEvent.addEventListener("runDataCallback", function (res) {
    //     self.runOverList=res.install
    //         // eeuiLog.log("runDataCallback",self.runOverList)
    // })  
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-f3399b24!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/runpages.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-f3399b24!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/runPages/runpages.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "app": {
    "backgroundColor": "#0d2236"
  },
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#0d2236"
  },
  "headtext": {
    "fontSize": "30",
    "color": "#ffffff"
  },
  "map": {
    "width": 750,
    "height": 800,
    "position": "relative"
  },
  "mapborad": {
    "width": 690,
    "height": 320,
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "top": 150,
    "left": 30,
    "borderRadius": 10
  },
  "runNumbox": {
    "flexDirection": "row",
    "marginLeft": 30,
    "marginTop": 20
  },
  "runNum": {
    "fontSize": 100,
    "fontWeight": "bold"
  },
  "runword": {
    "fontSize": 32,
    "color": "#4f4f4f",
    "marginTop": 60,
    "marginLeft": 10
  },
  "propList": {
    "flexDirection": "row",
    "width": 690,
    "marginTop": 50
  },
  "propitem": {
    "width": 230,
    "alignItems": "center"
  },
  "speednum": {
    "fontSize": 38,
    "fontWeight": "bold",
    "marginBottom": 20
  },
  "runitem": {
    "width": 230,
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "marginBottom": 20
  },
  "speedTitle": {
    "fontSize": 27,
    "color": "#4f4f4f"
  },
  "mapBtn": {
    "width": 750,
    "flexDirection": "row",
    "justifyContent": "center",
    "position": "absolute",
    "bottom": 80,
    "left": 0
  },
  "IConBtn": {
    "width": 178,
    "height": 178,
    "borderRadius": 100,
    "backgroundColor": "#08ce7f",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "actbtn": {
    "fontSize": 32,
    "color": "#ffffff"
  },
  "GPSinfo": {
    "flexDirection": "row",
    "position": "absolute",
    "top": 30,
    "right": 20
  },
  "GPStext": {
    "fontSize": 27
  },
  "propicon": {
    "fontSize": 40,
    "color": "#4f4f4f",
    "fontFamily": "iconfont",
    "marginRight": 10
  },
  "GPSicon": {
    "fontSize": 30,
    "fontFamily": "iconfont"
  },
  "btnicon": {
    "fontSize": 70,
    "fontFamily": "iconfont",
    "color": "#ffffff",
    "marginBottom": 5
  },
  "Iconall": {
    "flexDirection": "row"
  },
  "red": {
    "backgroundColor": "rgb(212,29,16)"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-f3399b24!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/runpages.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-f3399b24!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/runPages/runpages.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app"]
  }, [_c('navbar', {
    staticClass: ["navbarb"]
  }, [_c('navbar-item', {
    attrs: {
      "type": "title"
    }
  }, [_c('text', {
    staticClass: ["headtext"]
  }, [_vm._v("跑步中")])])], 1), _vm._m(0), _c('div', {
    staticClass: ["mapBtn"]
  }, [(!_vm.btnShow) ? _c('div', {
    staticClass: ["IConBtn"],
    on: {
      "click": _vm.stop
    }
  }, [_c('text', {
    staticClass: ["btnicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["actbtn"]
  }, [_vm._v("暂停")])]) : _vm._e(), (_vm.btnShow) ? _c('div', {
    staticClass: ["Iconall"]
  }, [_c('div', {
    staticClass: ["IConBtn"],
    on: {
      "click": _vm.counti
    }
  }, [_c('text', {
    staticClass: ["btnicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["actbtn"]
  }, [_vm._v("继续")])]), _c('div', {
    staticClass: ["IConBtn", "red"],
    staticStyle: {
      marginLeft: "20"
    },
    on: {
      "click": _vm.over
    }
  }, [_c('text', {
    staticClass: ["btnicon"],
    staticStyle: {
      fontSize: "55",
      marginBottom: "15"
    }
  }, [_vm._v("")]), _c('text', {
    staticClass: ["actbtn"]
  }, [_vm._v("结束")])])]) : _vm._e()])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["map"]
  }, [_c('div', {
    staticClass: ["mapborad"]
  }, [_c('div', {
    staticClass: ["runNumbox"]
  }, [_c('text', {
    staticClass: ["runNum"]
  }, [_vm._v("0.00")]), _c('text', {
    staticClass: ["runword"]
  }, [_vm._v("公里")])]), _c('div', {
    staticClass: ["GPSinfo"]
  }, [_c('text', {
    staticClass: ["GPStext"]
  }, [_vm._v("GPS信号弱")]), _c('text', {
    staticClass: ["GPSicon"]
  }, [_vm._v("")])]), _c('div', {
    staticClass: ["propList"]
  }, [_c('div', {
    staticClass: ["propitem"]
  }, [_c('div', {
    staticClass: ["runitem"]
  }, [_c('text', {
    staticClass: ["propicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["speedTitle"]
  }, [_vm._v("平均配速")])]), _c('text', {
    staticClass: ["speednum"]
  }, [_vm._v("00`00``")])]), _c('div', {
    staticClass: ["propitem"]
  }, [_c('div', {
    staticClass: ["runitem"]
  }, [_c('text', {
    staticClass: ["propicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["speedTitle"]
  }, [_vm._v("用时")])]), _c('text', {
    staticClass: ["speednum"]
  }, [_vm._v("00:00:00")])]), _c('div', {
    staticClass: ["propitem"]
  }, [_c('div', {
    staticClass: ["runitem"]
  }, [_c('text', {
    staticClass: ["propicon"]
  }, [_vm._v("")]), _c('text', {
    staticClass: ["speedTitle"]
  }, [_vm._v("热量（千卡）")])]), _c('text', {
    staticClass: ["speednum"]
  }, [_vm._v("5.6")])])])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });