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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/loginPage/usertip.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/loginPage/usertip.vue?entry=true":
/*!****************************************************!*\
  !*** ./src/pages/loginPage/usertip.vue?entry=true ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-1b22c704!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./usertip.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-1b22c704!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/loginPage/usertip.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./usertip.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/loginPage/usertip.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-1b22c704!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./usertip.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-1b22c704!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/loginPage/usertip.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\loginPage\\usertip.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1b22c704"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/loginPage/usertip.vue":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/loginPage/usertip.vue ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {};
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-1b22c704!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/loginPage/usertip.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-1b22c704!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/loginPage/usertip.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "content": {
    "paddingLeft": "30",
    "paddingRight": "30",
    "flex": 1
  },
  "userTit": {
    "fontSize": "35",
    "fontWeight": "bold",
    "marginTop": "50"
  },
  "fuTit": {
    "fontSize": "30",
    "color": "#555555",
    "marginTop": "50",
    "marginBottom": "30",
    "fontWeight": "bold"
  },
  "neiTit": {
    "fontSize": "26",
    "color": "#666666"
  },
  "duan": {
    "fontSize": "26",
    "marginTop": "20",
    "lineHeight": "36",
    "color": "#666666"
  },
  "scroller": {
    "marginBottom": "10"
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-1b22c704!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/loginPage/usertip.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-1b22c704!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/loginPage/usertip.vue ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["usertipBox"]
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
  }, [_vm._v("用户协议")])])], 1), _vm._m(0)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["content"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    attrs: {
      "showScrollbar": "false"
    }
  }, [_c('text', {
    staticClass: ["userTit"]
  }, [_vm._v("爱上云课 用户协议")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("导言")]), _c('text', {
    staticClass: ["neiTit"]
  }, [_vm._v("尊敬的用户：")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("非常感谢您注册使用“爱上云课”产品，为让您更好地使用“爱上云课”提供的产品和服务，请您务必审慎阅读、充分理解《爱上云课用户协议》（以下称“用户协议”或“本协议”）各条款内容，特别是免除或者限制责任的条款，并选择接受或不接受。本协议中限制、免责条款可能以加粗形式提醒您注意。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("除非您已阅读并接受本协议所有条款，否则您无权下载、安装或使用“爱上云课”提供相关产品和服务。您的下载、安装、使用、登陆等行为即视为您已阅读并同意本协议的约束。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("一、协议的范围")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.“爱上云课”App及www.asyke.com（以下统称“爱上云课产品”）是由北京文化智儒发展有限公司（以下称“爱上云课”或“我们”）提供的互联网产品和服务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.本用户协议是用户与爱上云课之间关于使用爱上云课提供的产品和服务所订立的协议，本协议条款的效力及于爱上云课所提供的一切产品和服务，用户在享受爱上云课任何单项服务时，应当受本协议的约束。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.本协议项下的产品和服务是指由爱上云课发布的包括但不限于网络媒体、电子课程、资源、作业、测试、体侧、互动、话题、消息、运动等的互联网产品和服务（形式包括但不限于在线视频、评论、弹幕、图片、软件、技术代码等）。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.本协议内容同时包括《隐私政策》及所有爱上云课已经发布或未来可能发布的各类规则、公告或通知，且您在使用爱上云课某一特定产品功能或服务时，可能会另有单独的协议、相关服务规则等，前述规则、公告、通知和协议一经发布即为本协议不可分割的组成部分，您同样应当遵守。如您不同意本协议的约定，您应立即停止注册/激活并停止使用爱上云课的相关产品功能和服务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.爱上云课有权根据需要不时地修订本协议及/或各类规则（包括但不限于制定新的条款和修改既有条款），并以在线公告的方式进行变更公告，无须另行单独通知您。修订后的协议和规则一经公布，立即或在公告明确的特定时间自动生效。若您在前述公告修订后继续使用爱上云课的产品或服务，即视为您已阅读、理解并接受经过修订的协议和规则。若您不同意修订，应当立即停止使用爱上云课提供的产品功能和服务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.除本协议明确规定外，对于利用爱上云课开发/发布的产品和服务，爱上云课有权在本协议的基础上通过单独的产品和服务协议（以下称「单项产品协议」）加以规范，用户须在使用有关产品或服务时另行了解与确认。单项产品协议与本协议有冲突的地方，以单项产品协议为准。如用户使用该产品或服务，即视为对相关单项产品协议的接受。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("二、爱上云课产品及服务简介")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.爱上云课为用户提供多样的互联网产品和服务，包括但不限于网络媒体、电子课程、资源、作业、测试、体侧、互动、话题、消息、运动等相关产品功能，用户可以通过爱上云课产品使用、分享、购买爱上云课提供的产品和服务。用户有权获得爱上云课提供的产品和服务，但爱上云课有权收取由此产生的服务或产品费用。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.爱上云课将尽力提供畅通无阻的在线服务，但平台的网络接入服务可能受多种因素的影响出现链接受阻、受限或被终止，由此给您带来的损失、不便，我们将不负任何责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.爱上云课提供的部分产品和服务须付费使用，用户使用此类产品功能或服务需要向爱上云课支付一定的费用。对于收费的产品和服务，我们会在用户使用之前给予用户明确的提示，只有用户根据提示确认其愿意支付相关费用，用户才能使用/继续使用该等收费产品和服务。如用户拒绝支付相关费用，则爱上云课有权不向用户提供该等收费产品和服务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课仅提供在线产品和服务，除此之外与网络服务有关的设备（如手机、个人电脑、及其他与接入互联网或移动网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费、为使用移动网而支付的手机费）均应由用户自行负担。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.爱上云课的替换、修改和升级：\n（1）为增进用户体验、完善服务内容，爱上云课有权根据您对软件的使用状态和行为开发新的服务；\n（2）为改进、增强和进一步开发服务，爱上云课有权不时提供软件更新（包括软件升级替换、修改、功能强化、版本升级等形式；\n（3）用户理解并同意：爱上云课有权不向您特别通知而对爱上云课进行更新，或对爱上云课的部分功能进行改变或限制。\n（4）爱上云课新版本发布后，旧版本可能无法使用。爱上云课不保证旧版爱上云课及相应的服务继续可用。为充分、及时使用爱上云课的服务，请您随时核对并下载最新版本。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("三、第三方应用及服务")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.爱上云课产品中提供了支持第三方应用供用户使用的功能模块，包括但不限于工具类服务、视频或图片类服务等，以及今后可能出现的各种服务。用户在使用该类应用程序时，应遵守本协议及该应用程序相应的协议、条款或规则的规定。用户与开发者之间的权利义务，参照相关协议、条款或规则执行。用户在使用第三方提供的软件和服务时，须了解并同意。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.用户使用第三方开发者提供的应用与服务时，第三方开发者将根据用户授权获得用户的个人资料和内容信息。这些资料和信息由用户自行决定授权给第三方。用户须明确：您向第三方授权获得您个人资料和内容信息的行为，可能发生的信息泄露的风险；您在使用第三方服务的同时，除遵守本协议及爱上云课的其他相关规则外，您还应遵守第三方的协议、相关规则。如因第三方软件及相关服务产生的争议、损失或损害，由您自行与第三方解决，爱上云课对此不承担责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.爱上云课引入第三方服务的目的在于丰富爱上云课产品，从而给用户创造更好的服务体验。但因第三方服务出现的瑕疵或错误而产生的责任，由第三方自行承担，与爱上云课无关。当然，爱上云课会对第三方提供的服务进行审查或审核，但基于服务的专业性，难免存在遗漏。第三方服务商并不因爱上云课的审查或审核疏漏而免于责任承担。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课对第三方开发者提供的应用享有审核管理权，有权在不通知用户的情况下，对第三方应用进行下架处理，由此给用户带来的影响、损失，爱上云课将不承担责任，由用户自行承担或与第三方协商，但爱上云课将尽力保障用户权益不受侵犯。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.用户使用第三方应用时，须同意：①授权使用自己的爱上云课账号登陆第三方应用；②同意第三方应用获取自己的个人资料，以获得相应产品和服务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.用户因使用第三方应用而与该第三方开发者产生的任何纠纷，由用户与开发者自行协商解决，相关责任和赔偿由开发者单独承担，爱上云课不承担任何责任。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("四、 个人信息保护及账号管理")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.为完整使用爱上云课提供的产品和服务，您须注册爱上云课提供的账户。用户（您）注册爱上云课账户时，须对所提供信息的真实性、合法性、有效性及完整性负责，并及时维护和更新您的个人信息，以保证信息的真实、合法和有效。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.您在爱上云课中的注册账号所有权及有关权益均归公司所有，您完成注册手续后仅享有该账号的使用权。您的账号仅限与您本人使用，未经爱上云课书面同意，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账号。如果爱上云课发现或者有合理理由人为使用者并非账号初始注册人，爱上云课有权暂时或终止向该注册账号提供服务，并有权注销该账号，而无需向该注册账号的用户承担法律责任。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("五、 用户个人信息包括：")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.用户自行提供的用户个人信息（如注册时填写的手机号码、电子邮件、性别、姓名、等个人信息，使用服务时用户填写的其他信息等）；")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.其他方分享的用户个人信息；爱上云课为提供服务而合法收集的用户必要个人信息（如使用服务时系统自动采集的设备或软件信息，浏览历史信息，通讯时间信息等技术信息，用户开启定位功能并使用服务时的地理位置信息，跑步轨迹等）。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.其中个人隐私信息是指涉及用户个人身份或个人隐私的信息，比如，用户真实姓名、手机号码、学号、本人照片等。非个人隐私信息是指用户对本服务的操作状态以及使用习惯等明确且客观反映在爱上云课服务器端的基本记录信息、个人隐私信息范围外的其它普通信息，以及用户同意公开的上述隐私信息。爱上云课保证在取得用户同意的情况下收集、使用或公开用户的个人隐私信息。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课特别提醒您务必保管好您的手机号码及验证码，用户在注册账号时，须使用手机号码绑定注册，切勿将账号及密码/验证码透露给他人。您须自行负责对您账户和密码进行保密，且须对在您账户和密码下发生的所有活动（包括但不限于信息披露、信息发布、网上点击同意或提交各类规则协议和购买服务等）承担责任。爱上云课不能也不会对因您未遵守本条款规定而发生的任何损失负责。若您发现任何人未经授权使用您的账号及密码，您须立即通知爱上云课，请联系客服提出您的请求。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.尊重用户个人隐私是爱上云课的一贯制度，爱上云课将采取技术措施和其他必要措施，确保用户个人信息安全，防止在本服务中收集的用户个人信息泄露、毁损或丢失。在发生前述情形或者爱上云课发现存在发生前述情形的可能时，爱上云课将及时采取补救措施并告知用户，用户如发现存在前述情形亦需立即与爱上云课联系。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.爱上云课未经用户同意不向任何第三方公开、 透露用户个人隐私信息。但以下特定情形除外：\n（1）爱上云课根据法律法规规定或有权机关的指示提供用户的个人隐私信息；\n（2）由于用户将其用户密码告知他人或与他人共享注册帐户与密码，由此导致的任何个人信息的泄漏，或其他非因爱上云课原因导致的个人隐私信息的泄露；\n（3）用户自行向第三方公开其个人隐私信息；\n（4） 用户与爱上云课及合作单位之间就用户个人隐私信息的使用达成约定，爱上云课因此向合作单位公开用户个人隐私信息；\n（5）任何由于黑客攻击、电脑病毒侵入及其他不可抗力事件导致用户个人隐私信息的泄露；\n（6）用户个人信息已经经过处理无法识别特定个人且不能复原。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("7.用户同意爱上云课可在以下事项中使用用户的个人隐私信息：\n（1）爱上云课向用户及时发送重要通知，如软件更新、本协议条款的变更；\n（2）爱上云课内部进行审计、数据分析和研究等，以改进爱上云课的产品、服务和与用户之间的沟通；\n（3）依本协议约定，爱上云课管理、审查用户信息及进行处理措施；\n（4）为获得更佳的用户体验，向用户展现/推送适合的服务、产品以及内容；\n（5）适用法律法规规定的其他事项。\n除上述事项外，如未取得用户事先同意，爱上云课不会将用户个人隐私信息使用于任何其他用途。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("六、爱上云课会员服务")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.会员服务，指会员享有的特殊服务，以下简称「会员」。包括会员有效期内无限次免费使用专属查询、免费无限次查看分数、专属标识分数提前查看，以及其他由爱上云课明示的优惠措施。用户开通会员服务时，须按照爱上云课公布的收费标准支付相应的会员服务费用。基于业务的发展，爱上云课有权调整收费标准，调整后的收费标准自公布之日起生效。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.用户知悉并确认，当开通会员服务后，若您中途取消服务或终止资格的，爱上云课将不退还您已支付的会员服务费用。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.使用会员服务过程中，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织。若您不具备前述主体资格，则您及您的监护人应当承担因此而导致的一切结果，爱上云课有权向您的监护人追偿。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.您知悉并同意，爱上云课有权通邮件、短信等方式，向您发送会员相关活动的信息。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.您确认会员服务仅限您本人使用，同时，您保证，您将合理使用会员服务，不会利用会员服务非法获利，不以任何形式转让您所享有的会员服务，不以任何形式将您所享有的会员服务借给他人使用，如爱上云课有合理理由怀疑您存在不当使用会员服务时，爱上云课有权取消您的会员资格且不退还您支付的会员服务费用，因此产生的相关责任及损失均由您自行承担，给爱上云课造成损失的，爱上云课保留向您追偿的权利。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.爱上云课保留在法律法规允许的范围内自行决定是否接受您的会员服务申请、调整会员服务内容、取消会员资格等权利。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("七、 知识产权声明")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.爱上云课依法享有爱上云课产品的一切合法权属（包括但不限于知识产权及所有权）。爱上云课的全部著作权及其他一切知识产权，以及与爱上云课相关的所有信息内容，包括但不限于：文字表述及其组合、图标、图饰、图标、色彩组合、界面设计、版面框架、有关数据、印刷材料、或电子文档等均受中国知识产权相关法律法规和有关的国际条约的保护。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.爱上云课产品及通过爱上云课产品提供的视频、技术软件等产品和信息，除用户自己上传或明确标示由第三方提供的之外，全部权利归属于爱上云课 。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.爱上云课产品中所体现的产品和服务标识均属于爱上云课在中国或其他国家、地区的商标或者注册商标，用户未经合法授权不得自行使用。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课在涉及爱上云课产品及相关各项服务中拥有专利权、专利申请权、商标权、著作权及其他知识产权。爱上云课并未因为本协议或者因为向用户提供爱上云课 以及相关产品和服务而授予用户任何与爱上云课相关的知识产权。本协议未明确授予用户的权利均由爱上云课保留。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("八、 用户隐私制度")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.保护用户个人信息是爱上云课的一项基本原则。爱上云课将按照本协议及《隐私政策》的规定收集、使用、储存和分享您的个人信息。本协议对个人信息的保护规定与《隐私政策》有相冲突的，及本协议对个人信息保护相关内容未作明确规定的，均应以《隐私政策》的内容为准。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.您在注册账号或使用爱上云课产品和服务的过程中，可能需要填写一些必要的信息。若国家法律法规有特殊规定的，您需要填写真实的身份信息。若您填写的信息不完整，可能无法使用爱上云课的产品或服务，或在使用过程中受到限制。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.您可以随时浏览、修改自己提交的信息，但出于安全性和身份识别（如账号申诉服务）的考虑，您可能无法修改注册时提供的部分初始注册信息及其他验证信息。爱上云课保留您修改个人信息的审核权。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课不会将您的个人信息转移或披露给任何非关联的第三方，除非：\n（1）相关法律法规或法院、政府机关要求；\n（2）为完成合并、分立、收购或资产转让而转移；\n（3）事先获得您的授权；\n（4）您使用共享功能；\n（5）以学术研究或公共利益为目的；\n（6） 在法律法规和政策允许的范围内，为提升用户体验和提供个性化的推广服务；\n（7）我们认为必要且不违反法律强制性规定的其他情形。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.除非经过您的同意，否则我们不会向任何人提供您的敏感个人信息。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.爱上云课非常重视信息的保护。请仔细阅读并理解本用户协议，如因您违反法律法规、本协议内容，则您应依照法律规定承担因此而导致的一切后果。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("九、用户的账号、密码和安全性")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.注册资格\n您确认，在您完成注册程序或以其他爱上云课允许的方式实际使用爱上云课提供的产品和服务时，您应当是具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.注册与账户\n为完整使用爱上云课提供的产品和服务，您须注册爱上云课提供的账户。用户注册爱上云课账户时须对所提供信息的真实性、合法性、有效性及完整性负责，并及时维护和更新您的个人信息，以保证信息的真实、合法和有效。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.您在爱上云课中的注册账号所有权及有关权益均归公司所有，您完成注册手续后仅享有该账号的使用权。您的账号仅限于您本人使用，未经爱上云课书面同意，禁止以任何形式赠与、借用、出租、转让、售卖或以其他方式许可他人使用该账号。如果爱上云课发现或者有合理理由认为使用者并非账号初始注册人，爱上云课有权暂时或终止向该注册账号提供服务，并有权注销该账号，而无需向注册该账号的用户承担法律责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课在此特别提醒您务必保护好您的账号及密码，切勿将账号及密码透露给他人。您须自行负责对您的账户和密码进行保密，且须对在您的账户和密码下发生的所有活动（包括但不限于信息披露、信息发布、网上点击同意或提交各类规则协议、网上续签协议或购买服务等）承担责任。爱上云课不能也不会对因您未能遵守本条款规定而发生的任何损失负责。若您发现任何人未经授权使用您的账号及密码，您须立即通知爱上云课。你可以发送邮件至1134437735@qq.com 提出您的请求。您须理解并同意爱上云课根据您的请求采取行动需要合理时间，对在采取行动前已产生的任何不利后果，爱上云课不承担任何责任。因其他人恶意攻击或您自身原因或其他不可抗因素而导致账号盗窃、丢失、均由您本人承担责任，爱上云课不承担任何责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.用户同意授权爱上云课基于下列原因使用用户的信息资源\n（1）执行软件验证、升级服务；\n（2）提高用户的使用安全性或提供客户支持；\n（3）应司法机关或政府机关要求；\n（4）为提高用户使用体验；\n（5）其他有利于用户和爱上云课利益且不违反任何强制性法律法规的情况。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十、爱上云课使用规范")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.用户须对自己的行为负责，包括对自己发表、上传或传送的内容（包括文字、评论、弹幕、图片、视频内容等）负全部责任。用户须承诺在爱上云课平台上所发布的任何内容均符合中华人民共和国法律、法规、规章以及爱上云课管理规范的规定。爱上云课有权对用户发布的任何不符合管理规定的内容予以删除，且不承担任何责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.爱上云课致力于营造文明、理性、友善、高质量的互联网教学。在用户使用评论、弹幕等功能时，需按照相关法律法规等的规定进行。在使用评论等相关功能时，您需严格遵守国家相关法律法规的规定。爱上云课在推动评论等发展的同时，不断加强相应的信息安全管理能力，完善评论自律，切实履行社会责任，遵守国家法律法规，尊重公民合法权益，尊重社会公序良俗。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.用户承诺在使用爱上云课产品和服务（包括但不限于：文字、评论、分享、弹幕、图片、视频内容等）过程中，应自觉遵守法律法规、社会主义制度、国家利益、公民合法权益、社会公共秩序、道德风尚和信息真实性等“七条底线”要求，不发布、转载、传送含有下列内容之一的内容，否则爱上云课有权自行处理并不通知用户。用户不得发表下列信息：\n（1）反对宪法确定的基本原则的；\n（2）害国家安全，泄漏国家机密；\n（3）颠覆国家政权，推翻社会主义制度，煽动分裂国家，破坏国家统一的；\n（4）损害国家荣誉和利益的；\n（5）宣扬恐怖主义、极端主义的；\n（6）宣扬民族仇恨、民族歧视，破坏民族团结的；\n（7）煽动地域歧视、地域仇恨的；\n（8）破坏国家宗教政策，宣扬邪教和迷信的；\n（9）编造、散布谣言、虚假信息，扰乱社会秩序、破坏社会稳定的；\n（10）散布、传播淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；\n（11）危害网络安全、利用网络从事危害国家安全、荣誉和利益的；\n（12）侮辱或者诽谤他人，侵害他人合法权益的；\n（13）对他人进行暴力恐吓、威胁，实施人肉搜索的；\n（14）涉及他人隐私、个人信息或资料的；\n（15）散布污言秽语，损害社会公序良俗的；\n（16）侵犯他人隐私权、名誉权、肖像权、知识产权等合法权益内容的；\n（17）散布商业广告，或类似的商业招揽信息、过度营销信息及垃圾信息；\n（18）使用本网站常用语言文字以外的其他语言文字评论的；\n（19）与所评论的信息毫无关系的；\n（20）所发表的信息毫无意义的，或刻意使用字符组合以逃避技术审核的；\n（21）侵害未成年人合法权益或者损害未成年人身心健康的；\n（22）未获他人允许，偷拍、偷录他人，侵害他人合法权利的；\n（23）包含恐怖、暴力血腥、高危险性、危害表演者自身或他人身心健康内容的，包括但不限于以下情形：\n    ①任何暴力和/或自残行为内容；\n    ②任何威胁生命健康、利用刀具等危险器械表演的危及自身或他人人身及/或财产权利的内容；\n    ③怂恿、诱导他人参与可能会造成人身伤害或导致死亡的危险或违法活动的内容。\n（24）其他违反法律法规、政策及公序良俗、干扰爱上云课正常运营或侵犯其他用户或第三方合法权益内容的其他信息。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.用户使用爱上云课产品与服务时，承诺并遵守以下规定：\n（1）实施的所有行为均遵守国家法律、法规等规范性文件及爱上云课各项规则的规定和要求，不违背社会公共利益或公共道德，不损害他人的合法权益，不违反本协议的相关规则。\n（2）不发布国家禁止的或涉嫌侵犯他人知识产权或其他合法权益的产品或服务信息，不发布违背社会公共利益或公共道德或爱上云课认为不适合在爱上云课上发布的产品或服务信息，不发布其他涉嫌违法或违反本协议及各类规则的信息。\n（3）除用户与爱上云课另有约定，用户不得对爱上云课中的任何数据/资料作商业性利用，包括但不限于在未经爱上云课事先书面同意的情况下，以复制、传播等任何方式使用爱上云课中展示的所有资料或课程。用任何装置、软件或程序干预或试图干扰。\n（4）不使用任何装置、软件或程序干预爱上云课的正常运作或正在爱上云课平台上进行的任何使用功能和活动。\n（5）法律另有强制性规定外，未经爱上云课明确的特别书面许可，任何单位或个人不得以任何方式非法地全部或部分复制、转载、引用、链接、抓取或以其他方式使用爱上云课产品内的信息内容，否则，爱上云课有权追究其法律责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.用户行为要求：\n您应对您使用爱上云课软件及相关服务的行为负责，除非法律允许或者经爱上云课事先书面许可，您使用爱上云课软件及相关服务不得具有下列行为：\n（1）使用未经授权或许可的任何插件、外挂、系统或第三方工具对爱上云课软件及相关服务的正常运行进行干扰、破坏、修改或施加其他影响。\n（2）利用或针对爱上云课软件及相关服务进行任何危害计算机网络安全的行为，包括但不限于：\n①非法侵入网络、干扰网络正常功能、窃取网络数据等危害网络安全的活动；\n②提供专门用于从事侵入网络、干扰网络正常功能及防护措施、窃取网络数据等危害网络安全活动的程序、工具；\n③明知他人从事危害网络安全的活动的，为其提供技术支持、广告推广、支付结算等帮助；\n④使用未经许可的数据或进入未经许可的服务器/账号；\n⑤未经允许进入公众计算机网络或者他人计算机系统并删除、修改、增加存储信息；\n⑥未经许可，企图探查、扫描、测试爱上云课系统或网络的弱点或其它实施破坏网络安全的行为；\n⑦企图干涉、破坏爱上云课系统或网站的正常运行，故意传播恶意程序或病毒以及其他破坏干扰正常网络信息服务的行为；")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("6.如果爱上云课有理由认为您的行为违反或可能违反上述约定的，爱上云课可独立进行判断并处理，且在任何时候有权在不事先通知的情况下终止向您提供服务，并依法追究相关责任。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("7.爱上云课信息内容适用规范：\n未经爱上云课书面许可，您不得自行或授权、允许、协助任何第三人对爱上云课软件及相关服务中信息内容进行如下行为：\n①复制、读取、采用爱上云课软件及相关服务的信息内容，用于包括但不限于宣传、增加阅读量、浏览量等商业用途；\n②擅自编辑、整理、编排爱上云课软件及相关服务的信息内容后在爱上云课软件及相关服务的源页面以外的渠道进行展示；\n③采用包括但不限于特殊标识、特殊代码等任何形式的识别方法，自行或协助第三人对爱上云课软件及相关服务的信息内容产生流量、阅读量引导、转移、劫持等不利影响；\n④其他非法获取或使用爱上云课软件及相关服务的信息内容的行为。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("8.经爱上云课书面许可后，用户对爱上云课产品及相关服务的信息内容的分享、转发等行为，还应符合以下规范：\n（1）未经爱上云课事先书面同意，不得将上述数据以任何方式公示、提供、泄露给任何第三人；\n（2）不得对爱上云课软件及相关服务的源网页进行任何形式的任何改动，包括但不限于爱上云课软件及相关服务的首页链接、广告系统链接等入口，也不得对爱上云课软件及相关服务的源页面的展示进行任何形式的遮挡、插入、弹窗等妨碍；\n（3）应当采取安全、有效、严密的措施，防止爱上云课软件及相关服务的信息内容被第三方通过包括但不限于“蜘蛛”（spider）程序等任何形式进行非法获取；\n（4）不得把相关数据内容用于爱上云课书面许可范围之外的目的，进行任何形式的销售和商业使用，或向第三方泄露、提供或允许第三方为任何方式的使用。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("9.用户充分理解并同意：\n（1）用户如果违反前述承诺及规范，产生任何法律后果的，用户应以自己的名义独立承担所有的法律责任，并确保爱上云课免于因此产生的任何损失或增加费用。\n（2）用户如果违反法律或本协议规定造成爱上云课被第三人索赔的，用户应全额补偿爱上云课的一切费用（包括但不限于各种赔偿费、诉讼代理费及为此支出的其他合理费用）。\n（3）当第三方认为用户发表、上传的内容/产品（包括但不限于视频、图片、文字、应用程序、软件等）侵犯其权利，或国家行政、司法机关的生效法律文书确认您存在违法、侵权行为，或爱上云课基于自身判断，认为您的行为违反国家法律法规的规定或涉嫌违反本协议条款的，爱上云课有权自行决定删除相关信息，并在爱上云课 或网站上公示您的涉嫌违法/违约行为及对您采取的措施。\n（4）对于用户在爱上云课上涉嫌违法、违约或侵犯他人合法权利的内容、产品，爱上云课有权不经通知予以删除，且不承担任何责任。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十一、 免责声明")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.用户理解并同意，在使用爱上云课服务的过程中，可能会遇到不可抗力等风险因素，使服务发生中断、延迟。不可抗力是指不能预见、不能克服并不能避免且对一方或双方造成重大影响的客观事件，包括但不限于自然灾害（如洪水、台风、地震等）、社会事件（如战争、暴动、政府行为）等，出现上述情况时，爱上云课会努力对产品和服务进行修复，但由此给您造成的损失，爱上云课在法律允许的范围内免责。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.在法律允许的范围内，爱上云课对以下情形导致的服务终端或受阻不承担责任：\n（1）受到计算机病毒、木马或其他恶意程序、黑客攻击的破坏；\n（2）用户或爱上云课的电脑软件、系统、硬件和通信线路出现故障；\n（3）用户操作不当；\n（4）用户使用非爱上云课授权的方式使用本服务；\n（5）其他爱上云课无法控制或合理预见的情形。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.用户理解并同意，在使用爱上云课产品和服务的过程中，可能会遇到网络信息或其他用户带来的风险和损害，爱上云课不对任何信息或产品的真实性、适用性、合法性承担责任，也不对因侵权行为给您造成的损害负责。这些风险包括但不限于：\n（1）来自他人匿名或冒名的含有威胁、诽谤、令人反感或非法内容的信息；\n（2）因使用本协议项下产品或服务，遭受他人误导、欺骗或其他导致或可能导致的任何心理、生理以及经济上的损害。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.爱上云课依据本协议享有处理不法、违规内容、产品或服务的权利，但该权利不构成爱上云课 的义务和承诺，爱上云课不保证及时发现并做出相应处理。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("5.对于单项产品运营者通过爱上云课向您提供的单项产品或服务，由单项产品运营者独立承担与该项产品或服务有关的全部责任和义务，其他爱上云课对此不承担任何责任和义务。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十二、 产品/服务的变更、中止或结束")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.用户应规范、合法地使用爱上云课及服务，如用户发布违法、违背社会公德或违背本协议约定的信息，或有违反相关法律法规或本协议的行为，爱上云课有权采取以下措施：\n（1）直接删除违反法律法规或本协议的内容；\n（2）中止或限制您使用爱上云课及其产品和服务的权利，包括但不限于限制您使用爱上云课部分或全部功能及产品、服务等；\n（3）终止您使用爱上云课的权利；\n（4）回收您的账号，同时有权禁止您申请或通过其他方式取得新的账号；\n（5）依法追究您的法律责任，索取相应损害赔偿金。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.爱上云课有权根据业务发展需要中止、变更、终止爱上云课产品或其部分功能，并有权决定是否（继续）提供爱上云课中的某种产品和服务；对于前述情形，爱上云课并不负有向用户通知的义务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.除法律另有规定外，用户有责任自行备份存储在爱上云课的数据，如用户的服务被终止，爱上云课有权从服务器上永久地删除您在爱上云课的全部相关数据，并不负有向您返还或以任何形式提供前述数据的义务。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("4.您可以在爱上云课软件中开启和使用单项或特定服务。某些单项服务可能需要您同时接受就该服务特别制订的协议或者其他约束您与该项服务提供者之间的规则。爱上云课将以醒目的方式提供这些协议、规则供您查阅。一旦您开始使用上述服务，则视为您同时接受有关单项服务的相关协议、规则的约束。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十三、违约责任")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.针对用户违反本协议或其他服务条款的行为，爱上云课有权独立判断并视情况采取预先警示、拒绝发布、立即停止传输信息、删除跟帖、限制账号部分或者全部功能直至永久关闭账号等措施。爱上云课有权公告处理结果，且有权根据实际情况决定是否恢复使用。对涉嫌违反法律法规、涉嫌违法犯罪的行为将保存有关记录，并依法向有关主管部门报告、配合有关主管部门调查。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.因用户违反本协议或其他服务条款规定，引起第三方投诉或诉讼索赔的，用户应当自行承担全部法律责任。因用户的违法或违约行为导致爱上云课及其关联公司、控制公司向任何第三方赔偿或遭受国家机关处罚的，用户还应足额赔偿爱上云课及其关联公司、控制公司因此遭受的全部损失。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("3.爱上云课尊重并保护用户及他人的知识产权、名誉权、姓名权、隐私权等合法权益。您保证，在使用爱上云课软件及相关服务时上传的文字、图片、视频、音频、链接等不侵犯任何第三方的知识产权、名誉权、姓名权、隐私权等权利及合法权益。否则，”有权在收到权利方或者相关方通知的情况下移除该涉嫌侵权内容。针对第三方提出的全部权利主张，您应自行处理并承担可能因此产生的全部法律责任；如因您的侵权行为导致爱上云课及其关联方、控制公司、继承公司遭受损失的（包括但不限于经济、商誉等损失），您还应足额赔偿爱上云课 及其关联方、控制公司、继承公司遭受的全部损失。")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十四、适用法律及争议解决方式 ")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.本协议签订地为中华人民共和国北京市朝阳区。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.本协议的成立、生效、履行、解释及纠纷解决，适用中华人民共和国大陆地区法律（不包括冲突法）。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("若您与爱上云课运营者发生任何纠纷或争议，首先应友好协商解决；协商不成的，您同意将纠纷或争议提交至北京仲裁委员会在北京仲裁解决。仲裁裁决是终局的，对双方均有约束力")]), _c('text', {
    staticClass: ["fuTit"]
  }, [_vm._v("十五、其他规定")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("1.如本协议中的任何条款因任何原因部分无效或不具有执行力，不影响本协议中其余条款对双方的约束力。")]), _c('text', {
    staticClass: ["duan"]
  }, [_vm._v("2.本协议条款的标题仅为方便阅读而设，不作为解释本协议条款的依据。")])])])
}]}
module.exports.render._withStripped = true

/***/ })

/******/ });