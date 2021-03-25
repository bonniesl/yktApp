<template>
    <div class="app">

        <navbar class="navbarb">  
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">排名</text>
                
            </navbar-item>
            
        </navbar>
        <tabbar
                ref="reflectName"
                class="tabbar"
                :eeui="{ tabType: 'top' }"
                tabBackgroundColor="#ffffff"
                textUnselectColor="#666666"
                textSelectColor="#2fdc7e"
                textBold="2"
                textSize="30"
                >

            <!--页签①-->
            <tabbar-page ref="name_1"
                         :eeui="{ tabName: 'name_1', title:'个人榜',}">
                
                <div class="page-content">
                    <scroller class="scroller" :style="{height:tabPageHeight,overfow:hidden}">
                        <div class="topimg">
                            <image src=""></image>
                            <text class="topTip">{{topRank.user_name}}占领了封面</text>
                        </div>
                    
                        <div class="listcont">
                            <div class="myself">
                                <div class="left">
                                    <image class="avator" :src="userInfo.avatar_file" style="width:80;height:80;border-radius:80"></image>
                                    <div class="myName">
                                        <text class="name">{{userInfo.name}}</text>
                                        <text class="rank">{{rank}}</text>
                                    </div>
                                </div>
                                <div class="right">
                                    <text class="stepNum">{{userRank.metre==0 ? 0 : (userRank.metre/1000).toFixed(2)}}公里</text>
                                    
                                    <div class="loveStar">
                                        <text class="num">{{userRank.praise_number}}</text>
                                        <text class="xin">&#xe60f;</text>
                                    </div>
                                    
                                </div>

                            </div>

                            <div class="other" v-for="(item,index) in rankList" :key="index">
                                <div class="left">
                                    <text class="nums">{{index+1}}</text>
                                    <image class="avator" :src="item.avatar_file" style="width:80;height:80;margin-left:25;border-radius:80"></image>
                                    <div class="myName">
                                        <text class="name">{{item.user_name}}</text>
                                        <text class="rank">第{{index+1}}名</text>
                                    </div>
                                </div>
                                <div class="right">
                                    <text class="stepNum">{{(item.metre/1000).toFixed(2)}}公里</text>
                                    <div class="loveStar"  @click="praise(item)">
                                        <text class="num">{{item.praise_number}}</text>
                                        <text class="xin"  :class="[item.praiseNum==0 ? '' : 'xinCur']">&#xe60f;</text>
                                    </div>
                                    
                                </div>
                            </div>

                        </div>
                        
                    </scroller>
                </div>
            </tabbar-page>

            <!--页签②-->
            <tabbar-page ref="name_2"
                         :eeui="{ tabName: 'name_2', title:'院系榜',   }">
                
                <div class="page-content">
                    <scroller class="scroller">
                        <div class="topimg">
                            <image src=""></image>
                            <text class="topTip" v-if="partRankList.length!=0">{{partRankList[0].part_name}}占领了封面</text>
                        </div>
                    
                        <div class="listcont2">
                            <div class="yxItem" v-for="(item,index) in partRankList" :key="index">
                                <div class="left" v-if="item.part_name">
                                    <text class="jbIcon" v-if="index==0">&#xe6f7;</text>
                                     <text class="jbIcon jbColor2" v-if="index==1">&#xe6f7;</text>
                                     <text class="jbIcon jbColor3" v-if="index==2">&#xe6f7;</text>
                                      <text class="jbIcon jbtext" v-if="index>2">{{index+1}}</text>
                                    <text class="yxName">{{item.part_name.substring(0,2)}}</text>
                                    <div class="yxText">
                                        <text class="yxTit">{{item.part_name}}</text>
                                        <text class="yxFtit">共有{{item.attend_num}}人参与</text>
                                    </div>
                                </div>    
                                <text class="righttext" v-if="item.part_name">{{(item.valid_metre/1000).toFixed(2)}}公里/人</text>    
                            </div>  
                        </div>
                        
                    </scroller>
                </div>
            </tabbar-page>

            <!--页签③-->
            <tabbar-page ref="name_3"
                         :eeui="{ tabName: 'name_3', title:'作弊榜', }">
                
                <div class="page-content">
                    <scroller class="scroller">
                        <div class="topimg">
                            <image src=""></image>
                            <text class="topTip" v-if="cheatRankList.length!=0">{{cheatRankList[0].user_name}}占领了封面</text>
                        </div>
                    
                        <div class="listcont">
                            <!-- <div class="myself">
                                <div class="left">
                                    <image class="avator" src="../../assets/images/avator.png" style="width:80;height:80;"></image>
                                    <div class="myName">
                                        <text class="name">拉不卡死</text>
                                        <text class="rank">第12名</text>
                                    </div>
                                </div>
                                <div class="right">
                                    <text class="stepNum">12300</text>
                                   
                                    
                                </div>
                                
                                
                            </div> -->

                            <div class="other" :key="index" v-for="(item,index) in cheatRankList">
                                <div class="left">
                                    <text class="nums">{{index+1}}</text>
                                    <image class="avator" :src="item.avatar_file" style="width:80;height:80;margin-left:25;border-radius:80;"></image>
                                    <div class="myName">
                                        <text class="name">{{item.user_name}}</text>
                                        <text class="rank">第{{index+1}}名</text>
                                    </div>
                                </div>
                                <div class="right" >
                                    <text class="stepNum">{{item.spend_count}}</text>
                                    <text class="pnum">次</text>
                                    
                                </div>
                            </div>
                        </div>
                        
                    </scroller>
                </div>
            </tabbar-page>

            

        </tabbar>
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');
const stream = app.requireModule('stream');
import API from '../../fetch/api/apis';
import {Utils} from 'weex-ui';

export default {
    data () {
        return {
            userInfo:'',
            rankList:[],
            userRank:{},
            rank:'',
            topRank:{},
            partRankList:[],
            cheatRankList:[],
            praiseNum:0,
            tabPageHeight:1334
        }
    },
    methods: {
        getuserRunRank(){
            let self=this;
         
            stream.fetch({
                  url:API.baseUrl + API.userRunRank,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
            
                   if(res.status == '200'){
                       self.rankList=res.data.list;
                       self.userRank=res.data.user;

                       self.rankList.forEach(function(val,index){
                            self.$set(val,'praiseNum',self.praiseNum);  
                       }) 
                       
                       if(self.userRank.rank==0){
                           self.rank=''
                       }else{
                            self.rank='第'+self.userRank.rank+'名'
                       }
                       if(self.rankList){
                           self.topRank=self.rankList[0]
                       }
                   }
                 
              })
        },
        praise(item){
                let self = this;
                if(self.praiseNum==0){
                    self.praiseNum=1;
                }else{
                    self.praiseNum=0;
                } 
                stream.fetch({
                method:'PUT',
                url:API.baseUrl + API.praise,
                type:'json',
                headers:{
                    'Content-Type':'application/json',
                    "Authorization":eeui.getCaches('token', null).token
                },
                body:JSON.stringify({
                        praise:self.praiseNum,
                        uid:item.uid 
                })

            },res=>{
                
                if(res.status == '200'){
                    self.$set(item,'praise_number',res.data.num);
                    self.$set(item,'praiseNum',self.praiseNum);
                }
            })
        },
        getPartRank(){
            let self=this;
            stream.fetch({
                  url:API.baseUrl + API.partRank,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                   if(res.status == '200'){
                       self.partRankList=res.data.list;
                   }
                 
              })
        },
        getCheatRank(){
            let self=this;
            stream.fetch({
                url:API.baseUrl + API.cheatRank,
                method:'GET',
                type:'json',
                headers:{
                    Authorization:eeui.getCaches('token', null).token
                }

            },(res)=>{
              
                if(res.status == '200'){
                    self.cheatRankList=res.data.list;
                }
                
            })
        },
        getUserInfo(){
              stream.fetch({
                  url:API.baseUrl + API.getUserInfo,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                  if(res.status == 200){
                      this.userInfo = res.data;  
               
                  }
              })
          }
    },
    watch: {
        praiseNum(val){
            this.praiseNum=val;
        }
    },
    created(){
        // 添加 字体图标
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace',{
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_1628280_20y85spf0gci.ttf')"
        })

        this.getUserInfo();
        this.getuserRunRank();
        this.getPartRank();
        this.getCheatRank();
         this.tabPageHeight=Utils.env.getPageHeight()-160;
       

        
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
    .iconr {
        width: 100px;
        height: 100px;
        color: #ffffff;
    }

    .tabbar {
        width: 750px;
        flex: 1;
    }

    .page-content {
        width: 750px;
        position: relative;
    }

    .content-text {
        font-size: 24px;
    }

    .page-navbar {
        width: 750px;
        height: 90px;
    }

    .page-navbar-title {
        color: #ffffff;
        font-size: 28px;
    }

    
    .topimg{
        width: 750;
        height: 600;
        background-color: #333;
        
       
    }
    .topTip{
        font-size: 36;
        text-align: center;
        color: #999;
        margin-top: 20;
        
    }
    .scroller{
       position: relative;
      flex:1;
        
    }
    .listcont{
       background-color: #eaeaea;
     
    }
    .avator{
        margin-left: 70;
    }
    .myself{
        height: 120;
        background-color: #ffffff;
        margin-bottom: 20;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
    .other{
       height: 120;
        background-color: #ffffff;
        flex-direction: row;
        align-items: center; 
        justify-content: space-between;
        
    }
    .left{
        flex-direction: row;
        align-items: center;
    }
    .right{
        flex-direction: row;
        align-items: center;
        margin-right: 40;
    }
    .myName{
        margin-left: 10;
    }
    .name{
        font-size: 26;
        margin-bottom: 10;
    }
    .rank{
        font-size: 24;
        color: #999;
    }
    .stepNum{
        font-size: 40;
        color: #1eb76e;
    }
    .loveStar{
        margin-left: 20;
        width: 40;
        height: 120;
        align-items: center;
    }
    .num{
        text-align: center;
        font-size: 24;
        color: #999;
        margin-top: 28;
        margin-bottom: 10;
    }
    .xin{
        font-family: iconfont;
        font-size: 30;
        color: #999;     
    }
    .xinCur{
         color: #ec4a58;  
    }
    .nums{
       margin-top: 20;
       margin-left: 30;
       font-size: 35;
        color: #666;
    }
    .yxItem{
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 120;
        margin-left: 0;
        margin-right: 30;
    
    }
    .jbIcon{
        font-family: iconfont;
        font-size: 50;
        color: #e4e019;  
        width: 80;
        text-align: center;
    }
    .yxName{
        width: 70;
        height: 70;
        text-align: center;
        line-height: 70;
        background-color: #d36120;
        color: #fff;
        border-radius: 80;
        font-size: 22;
        margin-right: 20;
    }
    .yxTit{
        font-size: 26;
        color: #333;
    }
    .yxFtit{
        font-size: 22;
        color: #999;
        margin-top:5;
    }
    .righttext{
        font-size: 26;
        color: #333;
    }
    .yxName1{
        background-color: #d32c20;
    }
    .yxName2{
        background-color: #243fd6;
    }
    .yxName3{
        background-color: #24cad6;
    }
    .yxName4{
        background-color: #ac24d6;
    }
    .jbtext{
        font-size: 30;
        color: #20a9b3;
    }
    .jbColor2{
        color: #20a9b3;
    }
    .jbColor3{
        color: #b34f20;
    }
   .pnum{
        font-size: 28;
        margin-left: 10;
        color: #666;
    }
    

</style>