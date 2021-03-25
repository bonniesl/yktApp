<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">完善信息</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
          系统支持学生进一步完善信息。如学生转专业时，学生能自助修改，确保学生信息真实有效。
          方法1：信息完善时，先进行课程界面，点击右下角“我的”→“个人信息”，进入信息完善页面。信息修改完成后，点击右下角“保存”按钮，完成信息修改。      
          方法2：联系负责跑步运动的老师，让其帮助进行修改。
          方法3：联系爱上云课客服，请求修改。

        </text>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
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
.title {
  height: 100;
  line-height: 100;
  font-size: 36;
  text-align: center;
  border-bottom-color: #eaeaea;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  margin-left: 30;
  margin-right: 30;
}
.detail {
  margin-left: 30;
  margin-right: 30;
}
.duan {
  line-height: 43;
  font-size: 28;
  color: #666;
  text-align: left;
}
</style>