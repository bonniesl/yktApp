<template>
  <div class="container">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">注册</text>
      </navbar-item>
    </navbar>

    <scroller class="tablelist" :show-scrollbar="false">
      <div class="cell_list_box">
        <div class="cellItem">
          <text class="leftText">手机号</text>
          <text class="mastTip">*</text>
          <input
            ref="blur1"
            class="rightInput"
            type="tel"
            autofocus="false"
            placeholder="请输入手机号"
            max-length="11"
            v-model.trim="userInfo.mobile"
            @blur="inputBlurTel"
          />
        </div>
        <div class="cellItem">
          <text class="leftText">密码</text>
          <text class="mastTip">*</text>
          <input
            ref="blur2"
            class="rightInput rightInputM"
            :type="inputType"
            autofocus="false"
            placeholder="请输入密码"
            max-length="20"
            v-model.trim="userInfo.password"
            @blur="inputBlurPass"
          />
          <icon
            class="eyeicon"
            @click="openShowPassword"
            :eeui="{ content: eyeIcon, fontSize: 42 }"
          ></icon>
        </div>
        <div class="cellItem cellMargin">
          <text class="leftText">确认密码</text>
          <text class="mastTip">*</text>
          <input
            ref="blur3"
            class="rightInput rightInputM"
            :type="inputType2"
            autofocus="false"
            placeholder="请确认密码"
            max-length="20"
            v-model.trim="userInfo.password_confirmation"
            @blur="inputBlurrePass"
          />
          <icon
            class="eyeicon"
            @click="openShowPassword2"
            :eeui="{ content: eyeIcon2, fontSize: 42 }"
          ></icon>
        </div>
        <div class="cellItem">
          <text class="leftText">姓名</text>
          <text class="mastTip">*</text>
          <input
            ref="blur4"
            class="rightInput"
            type="text"
            autofocus="false"
            placeholder="请输入姓名"
            max-length="20"
            v-model="userInfo.name"
            @blur="inputBlurName"
          />
        </div>

        <wxc-cell title="性别" :has-arrow="false" :has-top-border="false" :has-margin="false">
          <text class="mastTip">*</text>
          <!-- <text class="righttext">{{sexValue}}</text> -->
          <div class="sexSelBox">
            <div class="nan" v-for="(item,index) in sexList" :key="index" @click="selSel(index)">
              <div class="selBtn">
                <div class="point" v-if="index == sexIndex"></div>
              </div>
              <text class="sextext">{{item.text}}</text>
            </div>
          </div>
        </wxc-cell>

        <wxc-cell
          title="身份"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(identity,selindex)"
          :has-margin="identityVal == '学生'? false : true"
          :has-top-border="false"
        >
          <text class="mastTip">*</text>
          <text class="righttext">{{identityVal}}</text>
        </wxc-cell>

        <wxc-cell
          title="学生类型"
          @wxcCellClicked="selRadioShow(stu_type,selindex)"
          v-if="identityVal == '学生'"
          :has-arrow="true"
          :has-margin="true"
          :has-top-border="false"
        >
          <text class="mastTip">*</text>
          <text class="righttext" :class="[stu_val == '请选择学生类型' ? 'grey' : '']">{{stu_val}}</text>
        </wxc-cell>

        <wxc-cell
          title="入学年"
          v-if="identityVal == '学生'"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(enterYearList,selindex)"
          :has-margin="false"
          :has-top-border="false"
        >
          <text class="mastTip">*</text>
          <text class="righttext" :class="[enterYearVal == '请选择入学年' ? 'grey' : '']">{{enterYearVal}}</text>
        </wxc-cell>

        <wxc-cell
          title="单位"
          :has-arrow="true"
          @wxcCellClicked="openBottomPopup"
          :has-top-border="false"
        >
          <text class="mastTip">*</text>
          <text class="righttext" :class="[danwei == '请选择单位' ? 'grey' : '']">{{danwei}}</text>
        </wxc-cell>
        <wxc-cell
          :title="label_one ? label_one:'第二级'"
          v-if="labeOne.length > 1"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(labeOne)"
          :has-top-border="false"
        >
          <text class="mastTip" v-if="identityVal == '学生'">*</text>
          <text class="righttext" :class="[labeOneVal == '请选择' ? 'grey' : '']">{{labeOneVal}}</text>
        </wxc-cell>

        <wxc-cell
          :title="label_two?label_two:'第三级'"
          v-if="labeTwo.length > 1"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(labeTwo)"
          :has-top-border="false"
        >
          <text class="mastTip" v-if="identityVal == '学生'">*</text>
          <text class="righttext" :class="[labeTwoVal == '请选择' ? 'grey' : '']">{{labeTwoVal}}</text>
        </wxc-cell>
        <wxc-cell
          :title="label_three?label_three:'第四级'"
          v-if="labeThree.length > 1"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(labeThree)"
          :has-top-border="false"
        >
          <text class="mastTip" v-if="identityVal == '学生'">*</text>
          <text class="righttext" :class="[labeThreeVal == '请选择' ? 'grey' : '']">{{labeThreeVal}}</text>
        </wxc-cell>
        <wxc-cell
          :title="label_four?label_four:'第五级'"
          v-if="labeFour.length > 1"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(labeFour)"
          :has-top-border="false"
        >
          <text class="mastTip" v-if="identityVal == '学生'">*</text>
          <text class="righttext" :class="[labeFourVal == '请选择' ? 'grey' : '']">{{labeFourVal}}</text>
        </wxc-cell>

        <div class="cellItem" v-if="identityVal == '教师'">
          <text class="leftText">工号</text>
          <!-- <text class="mastTip">*</text> -->
          <input
            ref="blur5"
            class="rightInput"
            type="tel"
            autofocus="false"
            placeholder="请输入工号"
            max-length="20"
            v-model.trim="userInfo.student_id"
          />
        </div>
        <div class="cellItem" :class="[zwShow ? '':'cellMargin']" v-if="identityVal == '学生'">
          <text class="leftText">学号</text>
          <text class="mastTip">*</text>
          <input
            ref="blur6"
            class="rightInput"
            type="tel"
            autofocus="false"
            placeholder="请输入学号"
            max-length="20"
            v-model.trim="userInfo.student_id"
          />
        </div>

        <wxc-cell
          title="职务"
          v-if="identityVal == '学生' && zwShow"
          :has-arrow="true"
          :has-margin="true"
          @wxcCellClicked="selRadioShow(zwValue)"
          :has-top-border="false"
        >
          <!-- <text class="mastTip">*</text> -->
          <text class="righttext" :class="[zhiwu_val == '请选择职务' ? 'grey' : '']">{{zhiwu_val}}</text>
        </wxc-cell>
        <!-- 混班 1-->
        <wxc-cell
          :title="hunban_one_name?hunban_one_name:'混班三级'"
          v-if="identityVal == '学生' && is_hunban==1"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(hunban_label_two)"
          :has-margin="false"
          :has-top-border="false"
        >
          <text
            class="righttext"
            :class="[hunban_two_val == '请选择' ? 'grey' : '']"
          >{{hunban_two_val}}</text>
        </wxc-cell>

        <!-- 混班 2-->
        <wxc-cell
          :title="hunban_two_name?hunban_two_name:'混班四级'"
          v-if="identityVal == '学生' && hunban_two_val!='请选择' "
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(hunban_label_three)"
          :has-margin="false"
          :has-top-border="false"
        >
          <text
            class="righttext"
            :class="[hunban_three_val == '请选择' ? 'grey' : '']"
          >{{hunban_three_val}}</text>
        </wxc-cell>

        <wxc-cell
          title="民族"
          v-if="identityVal == '学生'"
          :has-arrow="true"
          @wxcCellClicked="selRadioShow(mingzu)"
          :has-margin="false"
          :has-top-border="false"
        >
          <text class="mastTip">*</text>
          <text class="righttext" :class="[mingzuValue == '请选择名族' ? 'grey' : '']">{{mingzuValue}}</text>
        </wxc-cell>

        <div class="cellItem" v-if="identityVal == '学生'">
          <text class="leftText">身份证号</text>
          <text class="mastTip">*</text>
          <input
            ref="blur7"
            class="rightInput inputW"
            type="text"
            autofocus="false"
            placeholder="请输入身份证"
            v-model.trim="userInfo.card_id"
            @blur="inputBlurCard"
          />
        </div>
        <div class="cellItem" v-if="identityVal == '学生'">
          <text class="leftText">家庭住址</text>
          <text class="mastTip">*</text>
          <input
            ref="blur8"
            class="rightInput inputW"
            type="text"
            autofocus="false"
            placeholder="请输入地址"
            v-model.trim="userInfo.address"
            @blur="inputBlurAddress"
          />
        </div>
      </div>
      <div class="TipText">
        <text class="xin">*</text>
        <text class="xinw">号选项为必填项</text>
      </div>

      <div class="userBtn">
        <div class="checkList">
          <div class="checkBox" v-if="usertips" @click="userradio"></div>
          <icon
            class="iconCheck"
            v-if="!usertips"
            @click="userradio"
            content="ios-checkbox"
            fontSize="40"
          ></icon>
          <text class="checktext">我已经阅读并同意</text>
          <text class="checktext2" @click="jumpUsertip">《用户协议》</text>
        </div>
      </div>

      <button
        class="button"
        @click="rechargeSubmit"
        :eeui="{text:'提交',backgroundColor:'#1eb76e',fontSize:30}"
      ></button>
    </scroller>

    <!-- 搜索页 -->
    <wxc-popup
      popup-color="#ffffff"
      :show="searchShow"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
      pos="right"
      width="750"
    >
      <div class="demo-content">
        <navbar class="navbarb">
          <navbar-item type="left">
            <text class="popurBackBtn" @click="backIconFUn">返回</text>
          </navbar-item>
          <navbar-item type="title">
            <text class="headtext">单位选择</text>
          </navbar-item>
        </navbar>
        <wxc-searchbar ref="wxc-searchbar" @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"></wxc-searchbar>

        <list :style="{height:heightH}">
          <cell v-for="(item,index) in newSchoolList" :key="index">
            <text class="itemS" @click="enterVale(index)">{{item.school_name}}</text>
          </cell>
        </list>
      </div>
    </wxc-popup>
    <!-- 注册成功提示页 -->
    <wxc-popup
      popup-color="#ffffff"
      :show="successTip"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
      pos="right"
      width="750"
    >
      <div class="success-content">
        <icon
          ref="reflectName"
          class="suceessIcon"
          :eeui="{content: 'md-checkmark', fontSize:'150px', color:'#ffffff'}"
        ></icon>
        <text class="successTip">注册成功</text>

        <text class="backLoginPage" @click="jumpLoginPage">立即登陆</text>
        <text class="WxTip">登陆以后请到“我的>个人信息”页面上传头像！</text>
      </div>
    </wxc-popup>
    <!-- 单位选择 -->
    <danSel
      :danselectShow="danDiaogVal.show"
      @hideDan="selRadioDialog"
      :itemList="danDiaogVal.itemList"
      :height="danDiaogVal.heightval"
      :top="danDiaogVal.top"
      :curVal="danDiaogVal.curVal"
    ></danSel>
  </div>
</template>
<script>
const stream = weex.requireModule("stream");
const eeui = app.requireModule("eeui");
import { WxcCell, WxcPopup, WxcSearchbar } from "weex-ui";
import danSel from "../../components/radioList.vue";
require("../../fetch");
export default {
  components: { WxcCell, WxcPopup, WxcSearchbar, danSel },
  data() {
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
      sexList: [
        { text: "男", type: 1, checked: false, status: "sex" },
        { text: "女", type: 2, checked: false, status: "sex" }
      ],
      identityVal: "学生",
      identIndex: 1,
      identity: [
        { text: "学生", type: 1, checked: true, status: "ident" },
        { text: "教师", type: 2, checked: false, status: "ident" }
      ],

      enterYearList: [], //入学年
      enterYearVal: "2020",
      enterYearIndex: 0,

      stu_type: [
        { text: "体测学生", type: 1, checked: true, status: "stuType" },
       // { text: "普通学生", type: 2, checked: false, status: "stuType" }
      ],
      stu_val: "体测学生",
      stu_type_index: 1,
      danwei: "请选择单位",
      mingzuValue: "汉族",
      mingzu: [
        { text: "汉族", checked: true, status: "mingzu" },
        { text: "蒙古族", checked: false, status: "mingzu" },
        { text: "回族", checked: false, status: "mingzu" },
        { text: "藏族", checked: false, status: "mingzu" },
        { text: "维吾尔族", checked: false, status: "mingzu" },
        { text: "苗族", checked: false, status: "mingzu" },
        { text: "彝族", checked: false, status: "mingzu" },
        { text: "壮族", checked: false, status: "mingzu" },
        { text: "布依族", checked: false, status: "mingzu" },
        { text: "朝鲜族", checked: false, status: "mingzu" },
        { text: "满族", checked: false, status: "mingzu" },
        { text: "侗族", checked: false, status: "mingzu" },
        { text: "瑶族", checked: false, status: "mingzu" },
        { text: "白族", checked: false, status: "mingzu" },
        { text: "土家族", checked: false, status: "mingzu" },
        { text: "哈萨克族", checked: false, status: "mingzu" },
        { text: "傣族", checked: false, status: "mingzu" },
        { text: "黎族", checked: false, status: "mingzu" },
        { text: "傈僳族", checked: false, status: "mingzu" },
        { text: "高山族", checked: false, status: "mingzu" },
        { text: "畲族", checked: false, status: "mingzu" },
        { text: "拉祜族", checked: false, status: "mingzu" },
        { text: "水族", checked: false, status: "mingzu" },
        { text: "纳西族", checked: false, status: "mingzu" },
        { text: "景颇族", checked: false, status: "mingzu" },
        { text: "柯尔克孜族", checked: false, status: "mingzu" },
        { text: "土族", checked: false, status: "mingzu" },
        { text: "达斡尔族", checked: false, status: "mingzu" },
        { text: "仫佬族", checked: false, status: "mingzu" },
        { text: "羌族", checked: false, status: "mingzu" },
        { text: "布朗族", checked: false, status: "mingzu" },
        { text: "撒拉族", checked: false, status: "mingzu" },
        { text: "毛南族", checked: false, status: "mingzu" },
        { text: "仡佬族", checked: false, status: "mingzu" },
        { text: "锡伯族", checked: false, status: "mingzu" },
        { text: "阿昌族", checked: false, status: "mingzu" },
        { text: "普米族", checked: false, status: "mingzu" },
        { text: "塔吉克族", checked: false, status: "mingzu" },
        { text: "怒族", checked: false, status: "mingzu" },
        { text: "乌孜别克族", checked: false, status: "mingzu" },
        { text: "鄂温克族", checked: false, status: "mingzu" },
        { text: "德昂族", checked: false, status: "mingzu" },
        { text: "保安族", checked: false, status: "mingzu" },
        { text: "裕固族", checked: false, status: "mingzu" },
        { text: "京族", checked: false, status: "mingzu" },
        { text: "塔塔尔族", checked: false, status: "mingzu" },
        { text: "独龙族", checked: false, status: "mingzu" },
        { text: "鄂伦春族", checked: false, status: "mingzu" },
        { text: "赫哲族", checked: false, status: "mingzu" },
        { text: "门巴族", checked: false, status: "mingzu" },
        { text: "珞巴族", checked: false, status: "mingzu" },
        { text: "基诺族", checked: false, status: "mingzu" },
        { text: "穿青人", checked: false, status: "mingzu" },
        { text: "外国血统", checked: false, status: "mingzu" }
      ],
      is_hunban: false,
      hunban_one_name: "", //混班标题1
      hunban_two_name: "", //混班标题2
      hunban_three_name: "", //混班标题3
      hunban_one_val: "请选择",
      hunban_two_val: "请选择",
      hunban_three_val: "请选择",
      hunban_label_one: [],
      hunban_label_two: [],
      hunban_label_three: [],
      label_one: "", //等级名称
      label_two: "",
      label_three: "",
      label_four: "",

      labeList: [], //下级学院
      labeListTwo: [], //第二段下级
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
        avatar_file:'',
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
        unionid:''
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
    zhiwu(val) {
      this.zwValue = [];
      if (val.show_position == 1) {
        this.zwShow = true;
        this.zhiwu.positions.map(el => {
          this.zwValue.push({
            text: el.position_name,
            id: el.id,
            checked: false,
            status: "zhiwu"
          });
        });
        this.zwValue.push({ text: "无", checked: false, status: "zhiwu" });
      }
    },
    value(val) {
      if (val == "") {
        this.newSchoolList = [];
      } else {
        this.search(this.schoolList);
      }
    },
    danwei(val, oldVal) {
      this.getOrganization(this.userInfo.school_id);
      // this.getOrganization2(this.userInfo.school_id);
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
    labeList(val) {
      var self = this;
      self.labeOne = [];
      self.is_hunban = false;
      if (val.length > 0) {
        val.map(function(el) {
          if (el.p_id == 0 && el.is_hunban == 0) {
            self.labeOne.push({
              text: el.label_name,
              id: el.id,
              checked: false,
              status: "labeOne"
            });
            //console.log(el.label_name);
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
              el.children.map(hunbanVal => {
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

        self.labeOne.push({ text: "无", checked: false, status: "labeOne" });
      }
      //console.log(val);
    },
    labeOneVal(val, oldVal) {
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

      this.labeList.forEach((item, index) => {
        if (val == item.label_name) {
          item.children.map(item2 => {
            self.labeTwo.push({
              text: item2.label_name,
              id: item2.id,
              checked: false,
              status: "labeTwo"
            });
          });
          self.labeTwo.push({ text: "无", checked: false, status: "labeTwo" });
          return;
        }
      });

      //console.log(self.labeTwo);
    },
    labeTwoVal(val, oldval) {
      if (val != oldval) {
        this.labeThree = [];
        this.labeThreeVal = "请选择";
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.userInfo.school_label_three = 0;
        this.userInfo.school_label_four = 0;
      }
    },
    labeListTwo(val, oldVal) {
      this.labeThree = [];
      var self = this;
      if (self.labeListTwo.length > 0) {
        self.labeListTwo.forEach(item => {
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
        });

        //
      }
      //console.log(self.labeThree);
    },
    labeThreeVal(val, oldVal) {
      var self = this;
      self.labeFour = [];
      if (val != oldVal) {
        this.labeFour = [];
        this.labeFourVal = "请选择";
        this.userInfo.school_label_four = 0;
      }

      this.labeListTwo.forEach(item => {
        if (val == item.label_name) {
          item.children.forEach(item2 => {
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
    userradio() {
      this.usertips = !this.usertips;
    },
    openShowPassword() {
      if (this.eyeIcon == "ios-eye-off") {
        this.eyeIcon = "ios-eye";
        this.inputType = "text";
      } else {
        this.eyeIcon = "ios-eye-off";
        this.inputType = "password";
      }
    },
    openShowPassword2() {
      if (this.eyeIcon2 == "ios-eye-off") {
        this.eyeIcon2 = "ios-eye";
        this.inputType2 = "text";
      } else {
        this.eyeIcon2 = "ios-eye-off";
        this.inputType2 = "password";
      }
    },
    inputBlurTel() {
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
    inputBlurPass() {
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
    inputBlurrePass() {
      this.userInfoT.password_confirmation = this.userInfo.password_confirmation;
      if (this.userInfo.password != this.userInfoT.password_confirmation) {
        eeui.toast({
          message: "两次密码不一致",
          gravity: "top"
        });
      }
    },
    inputBlurName() {
      //this.userInfoT.name = this.userInfo.name;
      if (this.userInfo.name == "") {
        eeui.toast({
          message: "姓名不能为空",
          gravity: "top"
        });
      }
    },
    inputBlurAddress() {
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
    inputBlurCard() {
      const regIdCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
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
    selRadioDialog(index, status) {
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
        }
        //学生类型
        if (status == "stuType") {
          this.stu_val = this.stu_type[index].text;
          this.userInfo.stu_type = this.stu_type[index].type;
        }
        //入学年
        if (status == "enterY") {
          this.enterYearVal = this.enterYearList[index].text;
          this.userInfo.year = this.enterYearList[index].text;
        }
        //labelone

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
        }
        //label_two
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
        }
        //label_three
        if (status == "labeThree") {
          this.labeThreeVal = this.labeThree[index].text;
          this.userInfo.school_label_three = this.labeThree[index].id;
          this.userInfoT.school_label_three = this.labeThree[index].id;
          if (this.labeThree[index].text == "无") {
            this.userInfo.school_label_three = 0;
            this.userInfoT.school_label_three = 0;
            this.labeThreeVal = "请选择";
          }
        }
        //label_four
        if (status == "labeFour") {
          this.labeFourVal = this.labeFour[index].text;
          this.userInfo.school_label_four = this.labeFour[index].id;
          this.userInfoT.school_label_four = this.labeFour[index].id;
          if (this.labeFour[index].text == "无") {
            this.userInfo.school_label_four = 0;
            this.userInfoT.school_label_four = 0;
            this.labeFourVal = "请选择";
          }
        }
        //名族
        if (status == "mingzu") {
          this.mingzuValue = this.mingzu[index].text;
          this.userInfo.mingzu = this.mingzu[index].text;
        }
        //混班1
        if (status == "hunbanTwo") {
          this.hunban_two_val = this.hunban_label_two[index].text;
          this.userInfo.school_hunban_label_two = this.hunban_label_two[
            index
          ].id;
          this.userInfo.school_hunban_label_one = this.hunban_label_one[0].id;

          if (this.hunban_label_two[index].text == "无") {
            this.userInfo.school_hunban_label_two = 0;
            this.hunban_two_val = "请选择";
          }
          this.getOrganization2(this.hunban_label_two[index].id, 2);
        }
        //混班2
        if (status == "hunbanThree") {
          this.hunban_three_val = this.hunban_label_three[index].text;
          this.userInfo.school_hunban_label_three = this.hunban_label_three[
            index
          ].id;
          if (this.hunban_label_three[index].text == "无") {
            this.userInfo.school_hunban_label_three = 0;
            this.hunban_three_val = "请选择";
          }
        }
        //混班3
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
    selSel(index) {
      this.sexIndex = index;
      this.userInfo.sex = this.sexList[index].type;
      this.userInfoT.sex = this.sexList[index].type;
    },
    //单选框选择值
    selRadioShow(val) {
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
    backIconFUn() {
      this.searchShow = false;
    },
    enterVale(index) {
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
    popupOverlayBottomClick() {
      this.searchShow = false;
    },
    openBottomPopup() {
      this.searchShow = true;
    },

    wxcCellClicked(e) {},

    rechargeSubmit() {
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
      let myreg = /^1\d{10}$/;
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
      }
      // if (this.userInfo.school_label_one == "" && this.userInfo.type == 1) {
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
      var params = this.userInfo;
      //console.log(params);
      // if (this.identityVal == "学生") {
      //   params = this.userInfo;
      // } else {
      //   params = this.userInfoT;
      // }
      this.$fetch({
        name: "postUserRegister", // api.js文件中的key
        method: "POST",
        data: params
      })
        .then(res => {
          //console.log(res);
          self.successTip = true;
        })
        .catch(err => {
          let tip = decodeURIComponent(err["headers"]["x-mzq-message"]);
          eeui.toast(tip);
          if(tip == '手机账号已存在'){
            eeui.openPage({
                pageName: 'loadPage',
                pageType: 'app',
                statusBarColor:'#1eb76e',
                url: 'loadPage.js'
            }, function(result) {
                //......
            }); 
          }
          //console.log(err);
        });
    },
    jumpLoginPage() {
      var self = this;
      eeui.openPage(
        {
          statusBarColor: "#1eb76e",
          url: "loginpage.js"
        },
        function(result) {
          //......
          self.successTip = false;
        }
      );
    },
    jumpUsertip() {
      eeui.openPage(
        {
          statusBarColor: "#1eb76e",
          url: "usertip.js"
        },
        function(result) {}
      );
    },

    //名族选择
    pickMingZu() {
      let self = this;
      picker.pick(
        {
          items: self.mingzu,
          index: self.mingzuIndex
        },
        event => {
          if (event.result === "success") {
            self.mingzuIndex = event.data;
            self.mingzuValue = self.mingzu[event.data];
            self.userInfo.mingzu = self.mingzu[event.data];
          }
        }
      );
    },

    //获取组织架构1
    getOrganization(schoolId) {
      //console.log(schoolId);
      var self = this;
      stream.fetch(
        {
          method: "GET",
          url:
            "http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/" +
            schoolId +
            ".json",
          type: "json"
        },
        function(res) {
          if (res.status == 200) {
            //console.log(res.data);
            if (res.data.organizations == null) {
              self.labeList = [];
            } else {
              self.labeList = res.data.organizations;

              //console.log(res.data.organizations);
            }
            self.zhiwu = res.data.positions;
            //console.log( self.zhiwu);

            //console.log(self.labeList);
          }
        }
      );
    },
    //获取组织架构2
    getOrganization2(schoolId, type) {
      //console.log(schoolId);
      var self = this;
      stream.fetch(
        {
          method: "GET",
          url:
            "http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations_class/" +
            schoolId +
            ".json",
          type: "json"
        },
        function(res) {
          if (res.status == 200) {
            // if(res.data.organizations == null){
            //     self.labeListTwo = [];
            // }else{
            //     self.labeListTwo = res.data;
            // }

            if (type == 2) {
              res.data.map(val => {
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
            }

            //console.log(res.data);
          }
        }
      );
    },

    wxcSearchbarInputOnInput(e) {
      this.value = e.value;
    },

    search(obj) {
      var self = this;
      this.newSchoolList = [];
      for (const key in obj) {
        if (obj[key].school_name.indexOf(self.value) > -1) {
          self.newSchoolList.push(obj[key]);
        }
      }

      //console.log(this.newSchoolLis);
    }
  },
  mounted() {
    //console.log(app.config.params.shoolVal);
  },
  created() {

    this.userInfo.avatar_file = eeui.getCaches('headimgurl',null);
    //console.log(app.config.params);\
    this.heightH = weex.config.env.deviceHeight - 250;
    this.userInfo.unionid = eeui.getCaches('unionid');
    //判断手机类型
    // if (weex.config.env.platform == "android") {
    //   this.userInfo.mobile_platform = 1;
    // } else {
    //   this.userInfo.mobile_platform = 2;
    // }
    if (weex.config.env.platform == "iOS") {
      this.userInfo.mobile_uuid = eeui.getIfa();
      //console.log(this.mobile_uuid);
    } else {
      this.userInfo.mobile_uuid = eeui.getImei();
    }

    


    //从缓存中获取学校列表
    var self = this;
    var enterYNew = eeui.getCaches("enterYear", null);
    enterYNew.map(val => {
      var obj = { text: val };
      self.$set(obj, "checked", false);
      self.$set(obj, "status", "enterY");
      self.enterYearList.push(obj);
    });
    self.enterYearList[0].checked = true;
    self.enterYearVal = self.enterYearList[0].text;

    //从缓存中获取学校列表
    //console.log(eeui.getCaches('schoollist', []));
    //    if(app.config.params.schools){
    //        this.schoolList = app.config.params.schools;
    //    }
  }
};
</script>
<style scoped>
.itemS {
  height: 80px;
  border-bottom-color: #e5e5e5;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  line-height: 80px;
  font-size: 26px;
  padding-left: 30px;
}
.container {
  background-color: #ebebeb;

  /* margin-bottom:200px; */
}

.cell_list_box {
  height: auto;
  margin-bottom: 50px;
}
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}
.headtext {
  font-size: 30px;
  color: #ffffff;
}
.righttext {
  /* margin-right:20px; */
  font-size: 30px;
  color: #333;
  margin-right: 10px;
}
.grey {
  color: #999;
}
.rightInput {
  width: 300;
  height: 90;
  font-size: 30px;
  text-align: right;
  padding-right: 55px;
}
.rightw {
  width: 450px;
}
.avatorBox {
  border-radius: 100;
  margin-right: 10;
  width: 80px;
  height: 80px;
  border: 1px solid #999;
  margin-right: 30px;
}

.backIcon {
  width: 100px;
  height: 100px;
  color: #ffffff;
}
.button {
  width: 690px;
  height: 80px;
  margin-left: 30;
  margin-bottom: 50px;
}
.mastTip {
  position: absolute;
  left: 200px;
  top: 38px;
  color: red;
}
.TipText {
  flex-direction: row;
  height: 30px;
  margin-bottom: 50px;
  margin-left: 30px;
}
.xin {
  color: red;
}
.xinw {
  color: #999;
  font-size: 22px;
}
.popurBackBtn {
  margin-left: 30px;
  color: #fff;
  font-size: 30px;
  width: 80px;
  height: 100px;
  line-height: 100px;
}
.successTip {
  font-size: 40px;
  text-align: center;
  margin-top: 50px;
  color: #1eb76e;
}
.WxTip {
  font-size: 26px;
  text-align: center;
  margin-top: 30px;
  color: #999;
}
.backLoginPage {
  width: 400px;
  height: 80px;
  background-color: #1eb76e;
  font-size: 40px;
  color: #ffffff;
  text-align: center;
  line-height: 80px;
  border-radius: 30px;
  margin-top: 200px;
}
.success-content {
  align-items: center;
}
.suceessIcon {
  width: 200px;
  height: 200px;
  background-color: #1eb76e;
  border-radius: 200px;
  margin-top: 100px;
}
.cellItem {
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 100px;
  align-items: center;
  border-bottom-color: #e3e3e3;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}
.cellMargin {
  margin-bottom: 25px;
}
.leftText {
  padding-left: 25px;
  font-size: 30px;
  color: #333;
}
.sexSelBox {
  flex-direction: row;
  margin-right: 30px;
}
.nan {
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
}
.point {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  background-color: #1eb76e;
}
.selBtn {
  width: 40px;
  height: 40px;
  border-style: solid;
  border-width: 1px;
  border-color: #999;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}
.sextext {
  font-size: 30px;
}
.inputW {
  width: 500px;
}
.eyeicon {
  width: 40px;
  height: 80px;
  position: absolute;
  right: 40px;
  top: 10px;
}
.rightInputM {
  margin-right: 60px;
}
.iconCheck {
  width: 30px;
  height: 30px;
  color: #1eb76e;
  margin-right: 10px;
}
.checkList {
  flex-direction: row;
  margin-left: 40px;
  margin-bottom: 50px;
}
.checkBox {
  width: 30px;
  height: 30px;
  border-width: 2px;
  border-style: solid;
  border-color: #999;
  margin-right: 10px;
}
.checktext {
  font-size: 26px;
  color: #999;
}
.checktext2 {
  color: #1eb76e;
  font-size: 26px;
}
</style>