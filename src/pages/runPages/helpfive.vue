<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">运动分享</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
          学生跑完结束后，点击右上角的“分享”图标，可把此次跑步数据分享到朋友圈或微信好友。
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