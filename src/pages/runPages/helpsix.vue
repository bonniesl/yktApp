<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">作弊处理</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
         体育成绩跑一旦判断作弊。会直接显示在作弊排名榜上，并且进行公示，包括作弊名次和作弊公里数，在体育成绩此次成绩清零，不加入有效公里数。
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