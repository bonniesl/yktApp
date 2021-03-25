<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">其他常见问题</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
          1. 未打开GPS定位，需要在手机设置权限开启。
          2. 有些型号手机定位结果精确度过低，比如oppo手机，建议跑步前确认GPS定位服务是否正常。
          3. 跑步成绩上传时，可能由于信号原因，未能上传，将网络恢复后，用户需要动手点击上传。
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