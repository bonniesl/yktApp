<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="headtext">得分</text>
      </navbar-item>
    </navbar>

    <div class="content">
      <!-- <text class="title">阿斯达三大打死我</text> -->
      <div class="detail">
        <text class="duan">
          一、成绩跑得分完成条件
          1.  必须是成绩跑模式下，并且达到每次的下限或上限。
          2.  开始跑步时，会随机出现打卡点，在此次体育成绩跑中，必须经过所有出现的打卡点，打卡成功会有提示，打卡图标变绿色。
          3.  根据学校设置，跑步前必须是符合当前位置定位成功。
          二、速度
          1.  未自行设置配速的学校，跑步配速的合理区间为2分11秒/公里至10分/公里，不在此范围内，将被认定为速度异常。
          2.  自行设置配速的学校，跑步配速应该在改区间内，否则被认定速度异常。
          3.  每公里有效配速为2分11秒至10分钟范围内（100米等于60秒内完成）跑步完成时间不得超过或少于正常值范围，否则系统将默认为无效。
          4.  参加跑步的学生每日上传有效成绩，每次不低于最低限制，如：每次不低于1公里，每天男生跑步上限为2公里，女生跑步上限为1.5公里；等于2公里或超过2公里按2公里计，不足1公里按有效公里数为0计，当日的成绩要在22:30凌晨前上传才有效。
          三、步频
          1.  步频合理区间为60~300，不存在此范围内或步频曲线波动异常，将被认定为速度异常。
          2.  如果出现两个或多个账户后台自动匹配如某时间段或是某一段里程配速、步频等等一致时，将被认定为速度异常。
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