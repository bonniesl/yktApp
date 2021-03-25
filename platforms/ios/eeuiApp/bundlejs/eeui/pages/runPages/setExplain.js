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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/runPages/setExplain.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/runPages/setExplain.vue?entry=true":
/*!******************************************************!*\
  !*** ./src/pages/runPages/setExplain.vue?entry=true ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-4be3e34a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./setExplain.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4be3e34a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/setExplain.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./setExplain.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/setExplain.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-4be3e34a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./setExplain.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4be3e34a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/setExplain.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\runPages\\setExplain.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-4be3e34a"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/setExplain.vue":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/runPages/setExplain.vue ***!
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
var eeui = app.requireModule('eeui');
var stream = app.requireModule('stream');

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      explainList: [],
      link: '',
      phoneName: '',
      phoneType: [{
        name: '小米',
        type: 'mi'
      }, {
        name: '华为',
        type: 'huawei'
      }, {
        name: 'oppo',
        type: 'oppo'
      }, {
        name: 'vivo',
        type: 'vivo'
      }, {
        name: '魅族',
        type: 'meizu'
      }, {
        name: '三星',
        type: 'sam'
      }, {
        name: '一加',
        type: 'one'
      }]
    };
  },
  methods: {
    explainFun: function explainFun() {
      var _this = this;

      stream.fetch({
        method: 'GET',
        url: _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].baseUrl + _fetch_api_apis__WEBPACK_IMPORTED_MODULE_0__["default"].setExplain,
        type: 'json',
        headers: {
          'Content-Type': 'application/json'
        }
      }, function (res) {
        if (res.status === 200) {
          _this.explainList = res.data;

          if (res.data.length) {
            for (var index = 0; index < res.data.length; index++) {
              var el = res.data[index];

              for (var i = 0; i < _this.phoneType.length; i++) {
                var elType = _this.phoneType[i];

                if (_this.phoneName.indexOf(elType.type) != -1) {
                  //console.log(elType);
                  if (el.question_content.indexOf(elType.name) != -1) {
                    _this.link = el.link_url;
                  } //     

                } else {
                  if (el.question_content == '其他手机') {
                    eeuiLog.log(el.link_url, '11111');
                  }
                } //console.log(el.question_content.indexOf(elType.name) );

              }
            } //console.log(res.data[0].question_content);

          }
        }
      });
    }
  },
  created: function created() {
    this.explainFun();

    if (app.config.params.phoneName !== undefined) {
      this.phoneName = app.config.params.phoneName.toLowerCase();
      eeuiLog.log(app.config.params.phoneName);
    } //console.log(WXEnvironment.deviceModel);

  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-4be3e34a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/setExplain.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-4be3e34a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/runPages/setExplain.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "righttext": {
    "fontSize": "30",
    "color": "#333333",
    "marginRight": "55"
  },
  "scroller": {
    "width": "750"
  },
  "webInner": {
    "width": "750",
    "flex": 1
  }
}

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-4be3e34a!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/setExplain.vue":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-4be3e34a!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/runPages/setExplain.vue ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("权限设置说明")])])], 1), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('web', {
    staticClass: ["webInner"],
    attrs: {
      "src": _vm.link
    }
  })])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });