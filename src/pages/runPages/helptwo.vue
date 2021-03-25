<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">加入班级</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
          系统支持学生扫描班级二维码或输入班级码进入班级。
          (一)班级二维码
          教师自己创建班级二维码或班级码告知学生。
          学生加入班级有两种方式：
         （1）使用微信扫一扫，即可完成加入班级。
         （2）使用系统提供的扫码工具加入班级。
          点击右上角创建图标→加入班级，弹出加入班级对话框，点击扫描二维码图标，弹出新的扫码页面，扫一扫班级二维码后完成班级加入。
          (二)输入班级码进入班级
          教师告知学生自己创建的班级码如“JWSANYE”，学生点击创建图标→加入班级弹框，输入“JWSANYE”班级码后，点“确认”后可直接加入班级。
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