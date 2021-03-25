<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">帮助</text>
      </navbar-item>
    </navbar>
      <text class="toptext">常见问题</text>
      <scroller>
        <wxc-cell label="完善信息" :has-arrow="true" @wxcCellClicked="helpPageOne" :has-margin="true"></wxc-cell>
        <wxc-cell label="加入班级" :has-arrow="true" @wxcCellClicked="helpPagetwo" :has-margin="true"></wxc-cell>
        <wxc-cell label="证明上传" :has-arrow="true" @wxcCellClicked="helpPagethree" :has-margin="true"></wxc-cell>
        <wxc-cell label="异常处理" :has-arrow="true" @wxcCellClicked="helpPagefour" :has-margin="true"></wxc-cell>
        <wxc-cell label="运动分享" :has-arrow="true" @wxcCellClicked="helpPagefive" :has-margin="true"></wxc-cell>
        <wxc-cell label="作弊处理" :has-arrow="true" @wxcCellClicked="helpPagesix" :has-margin="true"></wxc-cell>
        <wxc-cell label="自动结束" :has-arrow="true" @wxcCellClicked="helpPageseven" :has-margin="true"></wxc-cell>
        <wxc-cell label="得分" :has-arrow="true" @wxcCellClicked="helpPageeight" :has-margin="true"></wxc-cell>
        <wxc-cell label="排行榜" :has-arrow="true" @wxcCellClicked="helpPagenine" :has-margin="true"></wxc-cell>
        <wxc-cell label="其他常见问题" :has-arrow="true" @wxcCellClicked="helpPageten" :has-margin="true"></wxc-cell>
     </scroller>
    
  </div>
</template>
<script>
import { WxcCell } from "weex-ui";
export default {
  components: { WxcCell },
  data() {
    return {};
  },
  methods: {
    helpPageOne(e) {
      eeui.openPage(
        {
          url: "helpone.js",
          statusBarColor: "#1eb76e",
          pageName: "helpone",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPagetwo(e) {
      eeui.openPage(
        {
          url: "helptwo.js",
          statusBarColor: "#1eb76e",
          pageName: "helptwo",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPagethree(e) {
      eeui.openPage(
        {
          url: "helpthree.js",
          statusBarColor: "#1eb76e",
          pageName: "helpthree",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPagefour(e) {
      eeui.openPage(
        {
          url: "helpfour.js",
          statusBarColor: "#1eb76e",
          pageName: "helpfour",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPagefive(e) {
      eeui.openPage(
        {
          url: "helpfive.js",
          statusBarColor: "#1eb76e",
          pageName: "helpfive",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPagesix(e) {
      eeui.openPage(
        {
          url: "helpsix.js",
          statusBarColor: "#1eb76e",
          pageName: "helpsix",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPageseven(e) {
      eeui.openPage(
        {
          url: "helpseven.js",
          statusBarColor: "#1eb76e",
          pageName: "helpseven",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPageeight(e) {
      eeui.openPage(
        {
          url: "helpeight.js",
          statusBarColor: "#1eb76e",
          pageName: "helpeight",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },    
    helpPagenine(e) {
      eeui.openPage(
        {
          url: "helpnine.js",
          statusBarColor: "#1eb76e",
          pageName: "helpnine",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },
    helpPageten(e) {
      eeui.openPage(
        {
          url: "helpten.js",
          statusBarColor: "#1eb76e",
          pageName: "helpten",
          animated: true
        },
        function(result) {
          //......
        }
      );
    },        
  }
};
</script>
<style scoped>
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}
.headtext {
  font-size: 30px;
  color: #ffffff;
}
.toptext {
  height: 100;
  background-color: #eaeaea;
  line-height: 100;
  padding-left: 30;
  font-size: 30;
  color: #666;
}
</style>