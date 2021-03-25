<template>
    <div class="app">
        <navbar class="navbarb">   
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">我的消息</text>
            </navbar-item>
            <navbar-item type="right">
                <button class="navbutton" @click="openMask" :eeui="{text:'新增',backgroundColor:'#2fdc7e'}" ></button>
            </navbar-item> 
        </navbar>

        <div class="newsBox">
            <div class="newsitem bottomBorder">
                <image class="avator" src="../../assets/images/avator2.jpeg"></image>
                <div class="newsCont">
                    <div class="up">
                        <text class="newsTit">见宝玉</text>
                        <text class="newTime">02/21</text>
                    </div> 
                    <text class="downText">的免费翻译服务可提供简体中文和另外 100 多种语言之...</text>
                </div>
            </div>
            <div class="newsitem bottomBorder">
                <image class="avator" src="../../assets/images/avator2.jpeg"></image>
                <div class="newsCont">
                    <div class="up">
                        <text class="newsTit">拉令宁</text>
                        <text class="newTime">上个月</text>
                    </div> 
                    <text class="downText">阿三打扫打扫打扫荣放广告大撒大师大师风范共同探讨...</text>
                </div>
            </div>
            <div class="newsitem bottomBorder">
                <image class="avator" src="../../assets/images/avator2.jpeg"></image>
                <div class="newsCont">
                    <div class="up">
                        <text class="newsTit">拉令宁</text>
                        <text class="newTime">半年前</text>
                    </div> 
                    <text class="downText">阿三打扫打扫打扫荣放广告大撒大师大师风范共同探讨...</text>
                </div>
            </div>
        </div>




        <!-- 申诉弹框 -->
        <wxc-mask height="500"
                width="600"
                top="100"
                border-radius="0"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="maskShow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content">
            <text class="maskTit">新增消息</text>
            <textarea class="textarea" placeholder="请输入反馈内容"></textarea>
            <button class="masksureBtn" :eeui="{text:'提交',fontSize:30,backgroundColor:'#08ce7f'}"></button>
        </div>
        </wxc-mask>
    </div>
</template>
<script>
import { WxcMask } from 'weex-ui';
export default {
    components: {WxcMask},
    data () {
        return {
            maskShow: false,
            overlayCanClose: true,
            isFalse: false,
            hasAnimation: true,
        }
    },
    methods: {
         openMask (e) {
            this.maskShow = true;
            this.hasAnimation = true;
        },
        wxcMaskSetHidden () {
            this.maskShow = false;
        },
    }
}
</script>
<style scoped>
.navbarb{
        width: 750px;
        height: 100px;
        background-color: #1eb76e;
    }
.headtext {
        font-size: 30px;
        color: #ffffff;
    }
.addnews{
    width: 80;
    height: 40;
    text-align: center;
    line-height: 40;
    font-size: 28;
    background-color: #1eb76e;
}
.navbutton{
    width:110;
    height:65;
    margin-right:25;
}
.avator{
    width:80;
    height:80;
}
.newsBox{
    width: 750;
}
.newsCont{
    flex-direction: column;
    margin-left: 20;
}
.bottomBorder{
    border-bottom-width: 1px;
    border-bottom-color: #d6d5d5;
    border-bottom-style: solid;
}
.newsitem{
    flex-direction: row;
    width: 750;
    padding-top: 20;
    padding-bottom: 20;
    padding-left: 30;
    padding-right: 30;
    
}
.up{
    flex-direction: row;
    justify-content: space-between;
    width: 580;
    margin-bottom: 10;
    margin-top: 7;
}
.newsTit{
    font-size: 30;
}
.newTime{
    font-size: 24;
    color: #999;
}
.downText{
    text-overflow:ellipsis;
    font-size: 22;
    color: #999;
}
.maskTit{
  font-size: 30;
  margin-left: 30;
  margin-top: 20;
  margin-bottom: 20;
}
.textarea{
  width: 540;
  height: 300;
  border-width: 1px;
  border-style: solid;
  border-color: #c9c9c9;
  margin-left: 30;
  padding-left: 10;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
}
.masksureBtn{
  width: 540;
  margin-left: 30;
  height: 80;
  margin-top: 10;
}
</style>