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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/runPages/sharepage.vue?entry=true");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./src/pages/runPages/sharepage.vue?entry=true":
/*!*****************************************************!*\
  !*** ./src/pages/runPages/sharepage.vue?entry=true ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter?id=data-v-3c461de9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=styles&index=0!./sharepage.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-3c461de9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/sharepage.vue")
)

/* script */
__vue_exports__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader!babel-loader!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=script&index=0!./sharepage.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/sharepage.vue")

/* template */
var __vue_template__ = __webpack_require__(/*! !C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler?id=data-v-3c461de9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector?type=template&index=0!./sharepage.vue */ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-3c461de9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/sharepage.vue")
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
__vue_options__.__file = "F:\\workspace\\weexZruup\\zruupApp\\src\\pages\\runPages\\sharepage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3c461de9"
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\script-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\node_modules\\_babel-loader@8.1.0@babel-loader\\lib\\index.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=script&index=0!./src/pages/runPages/sharepage.vue":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/script-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/node_modules/_babel-loader@8.1.0@babel-loader/lib!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=script&index=0!./src/pages/runPages/sharepage.vue ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/WEcharts/index */ "./src/components/WEcharts/index.vue");
/* harmony import */ var _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_WEcharts_index__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    WEcharts: _components_WEcharts_index__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  data: function data() {
    return {
      shareShow: false,
      options: {
        // legend:{
        //     orient:"horizontal",
        //     x:'right',
        //     y:' center',
        //     width:'100',
        //     padding:[10, 30,0,0],
        //     itemWidth:30,
        //     textStyle:{
        //         color:'#000',
        //     },
        // },
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
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          axisTick: {
            alignWithLabel: true
          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '跑步次数',
          type: 'bar',
          barWidth: '60%',
          itemStyle: {
            normal: {
              color: '#00C179'
            }
          },
          data: [1, 4, 9, 8, 6, 2, 12]
        }]
      }
    };
  },
  methods: {
    shareBtn: function shareBtn() {
      this.shareShow = true;
    }
  }
});

/***/ }),

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-loader.js!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\style-rewriter.js?id=data-v-3c461de9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=styles&index=0!./src/pages/runPages/sharepage.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-loader.js!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/style-rewriter.js?id=data-v-3c461de9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=styles&index=0!./src/pages/runPages/sharepage.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "navbarb": {
    "width": "750",
    "height": "100",
    "backgroundColor": "#1eb76e"
  },
  "headtext": {
    "fontSize": "36",
    "color": "#ffffff"
  },
  "comntent": {
    "width": 750,
    "height": 1334,
    "position": "relative"
  },
  "wrapPos": {
    "position": "absolute",
    "top": 0,
    "left": 0,
    "width": 750,
    "height": 1334
  },
  "innerwrap": {
    "width": 690,
    "marginLeft": 30
  },
  "uppagebg": {
    "width": 690,
    "height": 490,
    "backgroundColor": "#ffffff",
    "borderRadius": 10
  },
  "tit": {
    "fontSize": "37",
    "color": "#ffffff",
    "marginTop": 44,
    "marginLeft": 180,
    "marginBottom": 21
  },
  "avator": {
    "position": "absolute",
    "top": 60,
    "left": 18
  },
  "uptit": {
    "flexDirection": "row",
    "justifyContent": "space-between",
    "marginTop": 24
  },
  "uptitinfo": {
    "fontSize": 29,
    "color": "#4e4e4e",
    "marginLeft": 150
  },
  "uptitdata": {
    "fontSize": 29,
    "color": "#898888",
    "marginRight": 23
  },
  "maptit": {
    "position": "absolute",
    "top": 95,
    "right": 23,
    "fontSize": 29
  },
  "echarts": {
    "width": 670,
    "height": 300,
    "marginLeft": 10,
    "marginTop": 100
  },
  "downpagebg": {
    "width": 690,
    "height": 270,
    "backgroundColor": "#ffffff",
    "borderRadius": 10,
    "marginTop": 24
  },
  "sixnum": {
    "flexDirection": "row",
    "width": 670,
    "marginTop": 10,
    "marginLeft": 10
  },
  "sixnumline": {
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DADADA",
    "paddingTop": 20
  },
  "sixnumup": {
    "fontSize": 32,
    "color": "#4E4E4E",
    "marginBottom": 10,
    "fontWeight": "bold"
  },
  "sixnumupmr": {
    "marginBottom": 5
  },
  "sixnumitem": {
    "width": 228,
    "alignItems": "center",
    "height": 100,
    "justifyContent": "center",
    "marginBottom": 20
  },
  "sixnumborder": {
    "borderRightWidth": 1,
    "borderRightColor": "#DADADA",
    "borderRightStyle": "solid"
  },
  "sixnumdown": {
    "color": "#575757",
    "fontSize": 27
  },
  "sixnumdowndanwei": {
    "fontSize": 21,
    "color": "#575757",
    "marginTop": 5
  },
  "sharebutton": {
    "width": 358,
    "height": 94,
    "backgroundColor": "#43BE4E",
    "marginTop": 40,
    "borderRadius": 47,
    "fontSize": "32",
    "marginLeft": 166
  },
  "shareBtnbox": {
    "width": 690,
    "height": 240,
    "marginLeft": 0,
    "backgroundColor": "#ffffff",
    "borderRadius": 10,
    "marginTop": 30
  },
  "shareBtn": {
    "width": "358",
    "height": "94",
    "marginLeft": "196",
    "marginTop": 30
  },
  "shareIconGroup": {
    "flexDirection": "row",
    "justifyContent": "space-around",
    "marginTop": 10
  },
  "sharetit": {
    "fontSize": 30,
    "color": "#666666",
    "marginTop": 20,
    "marginLeft": 20
  },
  "shareIconItem": {
    "width": "120",
    "alignItems": "center"
  },
  "shareIcon": {
    "width": "81",
    "height": "81"
  },
  "shareText": {
    "marginTop": 20,
    "fontSize": 26,
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

/***/ "C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\template-compiler.js?id=data-v-3c461de9!C:\\Users\\10844\\AppData\\Roaming\\npm\\node_modules\\eeui-cli\\lib\\loaders\\eeui-loader\\lib\\selector.js?type=template&index=0!./src/pages/runPages/sharepage.vue":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/template-compiler.js?id=data-v-3c461de9!C:/Users/10844/AppData/Roaming/npm/node_modules/eeui-cli/lib/loaders/eeui-loader/lib/selector.js?type=template&index=0!./src/pages/runPages/sharepage.vue ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_vm._v("统计分享")])])], 1), _c('scroller', {
    staticClass: ["scroller"]
  }, [_c('div', {
    staticClass: ["comntent"]
  }, [_c('image', {
    staticStyle: {
      width: "750",
      height: "1334"
    },
    attrs: {
      "src": "root://assets/images/sharebg.jpg"
    }
  }), _c('div', {
    staticClass: ["wrapPos"]
  }, [_c('div', {
    staticClass: ["innerwrap"]
  }, [_c('div', {
    staticClass: ["uppage"]
  }, [_c('text', {
    staticClass: ["tit"]
  }, [_vm._v("我的跑步周报")]), _c('div', {
    staticClass: ["uppagebg"]
  }, [_vm._m(0), _c('WEcharts', {
    staticClass: ["echarts"],
    attrs: {
      "options": _vm.options
    }
  }), _c('text', {
    staticClass: ["maptit"]
  }, [_vm._v("周总里程0.57公里")])], 1), _c('image', {
    staticClass: ["avator"],
    staticStyle: {
      width: "117",
      height: "117"
    },
    attrs: {
      "src": "root://assets/images/avator.png"
    }
  })]), _vm._m(1), (_vm.shareShow) ? _c('div', {
    staticClass: ["shareBtnbox"]
  }, [_c('text', {
    staticClass: ["sharetit"]
  }, [_vm._v("分享到")]), _vm._m(2)]) : _vm._e(), _c('button', {
    staticClass: ["sharebutton"],
    attrs: {
      "eeui": {
        text: '分享'
      }
    },
    on: {
      "click": _vm.shareBtn
    }
  })], 1)])])])], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["uptit"]
  }, [_c('text', {
    staticClass: ["uptitinfo"]
  }, [_vm._v("燃燒卡路里")]), _c('text', {
    staticClass: ["uptitdata"]
  }, [_vm._v("01.06-01.12")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["downpagebg"]
  }, [_c('div', {
    staticClass: ["sixnum"]
  }, [_c('div', {
    staticClass: ["sixnumitem", "sixnumborder"]
  }, [_c('text', {
    staticClass: ["sixnumup"]
  }, [_vm._v("00:27:15")]), _c('text', {
    staticClass: ["sixnumdown"]
  }, [_vm._v("时长")])]), _c('div', {
    staticClass: ["sixnumitem", "sixnumborder"]
  }, [_c('text', {
    staticClass: ["sixnumup"]
  }, [_vm._v("27")]), _c('text', {
    staticClass: ["sixnumdown"]
  }, [_vm._v("平均配速")])]), _c('div', {
    staticClass: ["sixnumitem"]
  }, [_c('text', {
    staticClass: ["sixnumup"]
  }, [_vm._v("5")]), _c('text', {
    staticClass: ["sixnumdown"]
  }, [_vm._v("跑步次数")])])]), _c('div', {
    staticClass: ["sixnum", "sixnumline"]
  }, [_c('div', {
    staticClass: ["sixnumitem", "sixnumborder"]
  }, [_c('text', {
    staticClass: ["sixnumup", "sixnumupmr"]
  }, [_vm._v("27")]), _c('text', {
    staticClass: ["sixnumdown"]
  }, [_vm._v("卡路里")])]), _c('div', {
    staticClass: ["sixnumitem", "sixnumborder"]
  }, [_c('text', {
    staticClass: ["sixnumup", "sixnumupmr"]
  }, [_vm._v("0.6")]), _c('text', {
    staticClass: ["sixnumdown"]
  }, [_vm._v("平均速度")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["shareIconGroup"]
  }, [_c('div', {
    staticClass: ["shareIconItem"]
  }, [_c('image', {
    staticClass: ["shareIcon"],
    attrs: {
      "src": "root://assets/images/friend.png"
    }
  }), _c('text', {
    staticClass: ["shareText"]
  }, [_vm._v("朋友圈")])]), _c('div', {
    staticClass: ["shareIconItem"]
  }, [_c('image', {
    staticClass: ["shareIcon"],
    attrs: {
      "src": "root://assets/images/wechat.png"
    }
  }), _c('text', {
    staticClass: ["shareText"]
  }, [_vm._v("微信好友")])])])
}]}
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

/***/ })

/******/ });