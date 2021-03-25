<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="left" @click="goback">
            <icon content="md-arrow-back" class="icon11"></icon>
      </navbar-item> 
      <!--navbar-item type="back"></navbar-item-->
      <navbar-item type="title">
        <text class="headtext">{{courseTitle}}-{{headtitle}}</text>
      </navbar-item>

      <!-- <navbar-item type="right" @click="popoverShow">
                <icon class="subIcon" :eeui="{content:'md-list',fontSize:40}"></icon>
      </navbar-item>-->
    </navbar>
    <!-- 弹出层 -->

    <wxc-tab-page
      ref="wxc-tab-page"
      :tab-titles="tabTitles"
      :tab-styles="tabStyles"
      title-type="icon"
      pan-dist="300"
      :timing-function="testfun"
      :tab-page-height="tabPageHeight"
      @wxcTabPageCurrentTabSelected="wxcTabPageCurrentTabSelected"
    >
      
      <div class="tabShow" v-if="navbarShow">
        
        <div class="navtabbox">
          <div class="navtabitem" @click="addfile">
            <text class="navtabitemicon">&#xe61f;</text>
          </div>
          <text class="navtabtitle">新增项目</text>
        </div>
        <!-- <div class="navtabbox">
          <div class="navtabitem navbarcolor2">
            <text class="navtabitemicon navtabitemicon46">&#xe61e;</text>
          </div>
          <text class="navtabtitle">评分标准</text>
        </div>
        <div class="navtabbox">
          <div class="navtabitem navbarcolor3">
            <text class="navtabitemicon navtabitemicon65">&#xe61d;</text>
          </div>
          <text class="navtabtitle">信息完善</text>
        </div> 
        <div class="navtabbox">
          <div class="navtabitem navbarcolor4">
            <text class="navtabitemicon navtabitemicon46">&#xe6eb;</text>
          </div>
          <text class="navtabtitle">使用说明</text>
        </div>-->

        <text class="navcloseIcon" @click="navbarShow = false">&#xe629;</text>
      </div>

      <div class="tabShow" v-if="navbarShow2">
        <div class="navtabbox">
          <div class="navtabitem">
            <text class="navtabitemicon">&#xe60d;</text>
          </div>
          <text class="navtabtitle">邀请学生</text>
        </div>
        <div class="navtabbox">
          <div class="navtabitem navbarcolor2">
            <text class="navtabitemicon navtabitemicon46">&#xe61e;</text>
          </div>
          <text class="navtabtitle">邀请助教</text>
        </div>
        <div class="navtabbox">
          <div class="navtabitem navbarcolor3">
            <text class="navtabitemicon navtabitemicon65">&#xe61d;</text>
          </div>
          <text class="navtabtitle">分班管理</text>
        </div>
        <div class="navtabbox">
          <div class="navtabitem navbarcolor4">
            <text class="navtabitemicon navtabitemicon46">&#xe6eb;</text>
          </div>
          <text class="navtabtitle">分组管理</text>
        </div>
        <div class="navtabbox">
          <div class="navtabitem navbarcolor4">
            <text class="navtabitemicon navtabitemicon46">&#xe6eb;</text>
          </div>
          <text class="navtabtitle">删除助教</text>
        </div>

        <text class="navcloseIcon" @click="navbarShow2 = false">&#xe629;</text>
      </div>
      <list v-for="(item,index) in tempList" :key="index+1" :style="{height:tabPageHeight,overfow:hidden}">
        <cell>
         
          <wxc-pan-item :ext-id="index+1" @wxcPanItemPan="wxcPanItemPan()">
            <div class="content">
              <component :is="item.name"></component>
            </div>
          </wxc-pan-item>
        </cell>
      </list>
    </wxc-tab-page>
  </div>
</template>
<script>
const dom = weex.requireModule("dom");
import { WxcTabPage, WxcPanItem, Utils, BindEnv, WxcPopup } from "weex-ui";
const modal = weex.requireModule("modal");
//import bookPage from "../../components/bookPage.vue";
//import resPage from "../../components/resourcePage.vue";
//import taskpage from "../../components/taskPage.vue";
//import testPage from "../../components/testPage.vue";
import physicalPage from "../../components/physicalPage.vue";
import studentsPage from "../../components/studentsPage.vue";
//import InteractionPage from "../../components/InteractionPage.vue";
//import topicPage from "../../components/topicPage.vue";
//import messagepage from "../../components/messagepage.vue";

export default {
  components: {
    WxcTabPage,
    WxcPanItem,
    WxcPopup,
    //bookPage,
    //resPage,
    //taskpage,
    //testPage,
    physicalPage,
    studentsPage,
    //InteractionPage,
    //topicPage,
    //messagepage
  },
  data() {
    return {
      curIndex: 0,
      navbarShow: false,
      navbarShow2: false,
      navbarType: 1,
      courseTitle:app.config.params.courseTitle,
      headtitle: app.config.params.title,
      tabPageHeight: 1334,
      tabTitles: [
        // {
        //   title: "教材",
        //   icon:
        //     "https://ae01.alicdn.com/kf/Hc0998cb84dd64f419a42cd681568d373Q.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        // {
        //   title: "资源",
        //   icon:
        //     "https://ae01.alicdn.com/kf/H2614327e2d464fe2b52fd3b03e7e2319A.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        // {
        //   title: "作业",
        //   icon:
        //     "https://ae01.alicdn.com/kf/H2e2ec3b6a0b24a08ad4951059b26d95cQ.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        // {
        //   title: "测试",
        //   icon:
        //     "https://ae01.alicdn.com/kf/H0a47307606644e7c8c14c037c36ff1a4K.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        {
          title: "运动",
          icon:
            "https://ae01.alicdn.com/kf/H1eeb8f26fd3c4d8f886bd950e90fef330.png",
          activeIcon:
            "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png",
          type: true
        },
        {
          title: "学员",
          icon:
            "https://ae01.alicdn.com/kf/H5cc14453f84744f1bc8c119439e5dee4n.png",
          activeIcon:
            "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png",
            type: true
        },
        // {
        //   title: "互动",
        //   icon:
        //     "https://ae01.alicdn.com/kf/Hb824480b9182415a85713dcf5535832ac.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        // {
        //   title: "话题",
        //   icon:
        //     "https://ae01.alicdn.com/kf/H39e5f722da844effba7e2254ebd163d46.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // },
        // {
        //   title: "消息",
        //   icon:
        //     "https://ae01.alicdn.com/kf/H513b05a8e3754b84877f6135bf3c3ebav.png",
        //   activeIcon:
        //     "https://ae01.alicdn.com/kf/H8512814b27024731b47a96e17b31c538w.png"
        // }
      ],
      tabStyles: {
        bgColor: "#FFFFFF",
        titleColor: "#666666",
        activeTitleColor: "#36ab60",
        activeBgColor: "#FFFFFF",
        isActiveTitleBold: false,
        iconWidth: 45,
        iconHeight: 45,
        width: 160,
        height: 120,
        fontSize: 30,
        hasActiveBottom: true,
        activeBottomColor: "#45d586",
        activeBottomHeight: 4,
        activeBottomWidth: 120,
        textPaddingLeft: 10,
        textPaddingRight: 10,
        normalBottomColor: "rgba(0,0,0,0.4)",
        normalBottomHeight: 0,
        hasRightIcon: true,
        rightOffset: 100
      },
      tempList: [
        // { name: bookPage },
        // { name: resPage },
        // { name: taskpage },
        // { name: testPage },
        { name: physicalPage },
        { name: studentsPage },
        // { name: InteractionPage },
        // { name: topicPage },
        // { name: messagepage }
      ],
      popoverPosition: { x: -14, y: 65 },
      popoverArrowPosition: { pos: "top", x: -15 },
      comnames: "bookPage",
      isBottomShow: false,
      height: 400
    };
  },
 
  methods: {
    addfile() {
      eeui.openPage(
        {
          url: "set.js",
          statusBarColor: "#1eb76e",
          pageName: "setrun",
          animated: false,
          // params:{courseTitle:courseTitle,title:futitle,id:id,courseId:courseId,ctitle:title,courseRunId:self.course_class_run_id}
           params: {courseTitle:app.config.params.courseTitle,id:app.config.params.id,title:app.config.params.title,courseId:app.config.params.courseId}
        },
        function(result) {
          //......
        }
      );
    },
    wxcTabPageCurrentTabSelected(e) {
      this.navbarShow = false;
      this.navbarShow2 = false;
      if (this.curIndex == e.page) {
        if (this.tabTitles[e.page].type) {
            if(this.tabTitles[e.page].title == '运动'){
                if(app.config.params.stu === 'student'){
                    this.navbarShow = false
                }else{
                  this.navbarShow = true;
                }
            }
            if(this.tabTitles[e.page].title == '学员'){
               if(app.config.params.stu === 'student'){
                    this.navbarShow = false
                }else{
                  this.navbarShow = true;
                }
            }

          
        }
      }
      this.curIndex = e.page;
      //eeui.alert(e.page) ;
    },
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    },
    popoverShow() {
      this.$refs["wxc-popover"].wxcPopoverShow();
    },

    wxcPanItemPan(e) {
      
      if (BindEnv.supportsEBForAndroid()) {
        this.$refs["wxc-tab-page"].bindExp(e.element);
      }
    },
    goback(){
      eeui.openPage({
          pageName: 'home',
          url: 'home.js',
          statusBarColor:'#1eb76e',
          params:{position:0}
          
      }, function(result) {

        
      });  
    }
  },
  created() {
    this.tabPageHeight = Utils.env.getPageHeight();

    

    // 添加 字体图标
    let domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont",
      src: "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
    });

    let platform = WXEnvironment.platform.toLowerCase();
    let self = this;
    if(platform!='ios'){
        eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
          eeui.toastClose();
            eeui.openPage({
                pageName: 'home',
                url: 'home.js',
                statusBarColor:'#1eb76e',
                backPressedClose:true,
                softInputMode:'nothing',
                swipeBack:false,
                params:{position:0}
            // params:{token:self.token},
            }, function(result) {
                eeui.setCustomConfig("homePage", "home.js");
            });
      });
    }

    

    // if(app.config.params['over']){

    // }
    //console.log(app.config.params);
  },
  mounted () {
   // this.$refs['wxc-tab-page'].setPage(4,null,false);
  }
};
</script>
<style scoped>
.app {
  background-color: #ebebeb;
}
.tabShow {
  width: 750;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 230;
  left: 0;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 30;
  padding-top: 50;
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
.subIcon {
  width: 100;
  height: 100;
  color: #fff;
}
.item-container {
  width: 750px;
  background-color: #f2f3f4;
  margin-top: 20px;
  padding-bottom: 33;
}
.content {
  width: 750px;

  background-color: #fff;
  padding-bottom: 200;
  margin-top: 10;
}
.border-cell {
  background-color: #f2f3f4;
  width: 750px;
  height: 24px;
  align-items: center;
  justify-content: center;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #e0e0e0;
}
.cell {
  background-color: #ffffff;
}
.navcloseIcon {
  font-family: iconfont;
  color: #fff;
  font-size: 40;
  position: absolute;
  right: 10;
  bottom: 10;
}
.navtabbox {
  width: 187;
  align-items: center;
  margin-bottom: 30;
}

.navtabtitle {
  color: #fff;
  font-size: 26;
  margin-top: 10;
}
.navtabitem {
  width: 90;
  height: 90;
  border-radius: 8;
  background-color: #eb73b1;
  align-items: center;
  justify-content: center;
}
.navtabitemicon {
  font-family: iconfont;
  font-size: 60;
  color: #fff;
}
.navtabitemicon46 {
  font-size: 46;
}
.navtabitemicon65 {
  font-size: 65;
}
.navbarcolor2 {
  background-color: #e66924;
}
.navbarcolor3 {
  background-color: #ffa200;
}
.navbarcolor4 {
  background-color: #11cabf;
}
  .icon11{
        color: #ffffff;
        width: 100px;
        height:100px;
        font-size:40px;
    }
</style>
