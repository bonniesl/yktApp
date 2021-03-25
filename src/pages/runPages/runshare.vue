<template>
    <div class="app">
        <navbar class="navbarb">  
            <navbar-item type="left">
                <icon class="backIcon" @click="backsharepage" :eeui="{content:'md-arrow-back',fontSize:38}"></icon>
            </navbar-item>
            <navbar-item type="title">
                <text class="headtext">运动分享</text>
            </navbar-item>
           
        </navbar>

        <scroller class="shareImg" show-scrollbar="false">
            <image v-if="shareType.type == 1" class="shareImgitem" src="../../assets/images/runshare.jpg"></image>
            <image v-if="shareType.type == 2" class="shareImgitem" src="../../assets/images/runshare.jpg"></image>
        </scroller>
        <text v-if="shareType.type == 2 && tipShow" class="tip">上滑动查看全部</text>

        <div class="shareBtnbox" v-if="shareShow">
            <text class="sharetit">分享到</text>
            <div class="shareIconGroup">
                <div class="shareIconItem">
                    <image class="shareIcon" src="../../assets/images/friend.png"></image>
                    <text class="shareText">朋友圈</text>
                </div>
                <div class="shareIconItem">
                    <image class="shareIcon" src="../../assets/images/wechat.png"></image>
                    <text class="shareText">微信好友</text>
                </div>
            </div>
        </div>

        <button class="shareBtn" @click="shareBtn" :eeui="{text:'分享',fontSize:'32',backgroundColor:'#1eb76e',borderRadius:'50'}"></button>
    </div>
</template>
<script>
export default {
    data () {
        return {
            shareShow:false,
            shareType:app.config.params,
            tipShow:true
        }
    },
    methods: {
        backsharepage(){
            eeui.openPage({
                url: '../rundetailout.js',
                statusBarColor:'#1eb76e',
                pageName:'返回',
                animated:false,
            }, function(result) {
                //......
            }); 
        },
        shareBtn(){
            this.shareShow = true;
            this.tipShow = false;
        }
    },
    
}
</script>
<style scoped>
.app{
    background-color: #0d2236;
}
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #0d2236;
}
.headtext {
  font-size: 36px;
  color: #ffffff;
}
.backIcon{
  width: 60;
  height: 60;
  margin-left: 20;
  color: #fff;
}
.shareImg{
    width: 691px;
    margin-left: 30;
    height: 621;
    /* background-color: #c2c2c2; */
    margin-top: 30;
    border-radius: 10;
    align-items: center;
    
}
.shareImgitem{
    width: 600px;
    height: 620;
}
.shareImgitem2{
    width: 600px;
    height: 1200;
}
.shareBtnbox{
    width: 600;
    height: 240;
    margin-left: 75;
    background-color: #f3f3f3;
    border-radius: 10;
    margin-top: 30;
}
.shareBtn{
    width: 358px;
    height: 94px;
    margin-left: 196px;
    margin-top: 30;
}
.shareIconGroup{
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10;
}
.sharetit{
    font-size: 30;
    color: #666;
    margin-top: 20;
    margin-left: 20;
}
.shareIconItem{
    width: 120px;
    align-items: center;
}
.shareIcon{
    width: 81px;
    height: 81px;
}
.shareText{
    margin-top: 20;
    font-size: 26;
    color: #666;
}
.tip{
    font-size: 24;
    text-align: center;
    margin-top: 10;
    color: #fff;
}
</style>