<template>
    <div class="app">

        <navbar class="navbarb">  
            <navbar-item type="left">
                <icon class="backIcon" @click="jumpenter" :eeui="{content:'md-arrow-back',fontSize:38}"></icon>
            </navbar-item>
            <navbar-item type="title">
                <text class="headtext">跑步详情</text>
            </navbar-item>
            <!--navbar-item type="right">
                <div class="iconBtn">
                    <image @click="openMask" class="appeal" src="../../assets/images/appeal.png" style="width:48px;height:52px"></image>
                    <image @click="openBottomPopup" class="share" src="../../assets/images/shareicon.png" style="width:40px;height:40px"></image>
                </div>
            </navbar-item-->
        </navbar>

        <div class="map">
            <Map class="mapc" :tracks="runRracks"></Map>
            <!--image :src="LineImageUrl" style="width:750px;height:620px"></image-->    
        </div>
       <scroller>
            <div class="infomoudle">
                <div class="distance">
                    <div class="disleft">
                      <div class="distttop">
                          <div class="disup">
                              <text class="disnum">{{runoverList.metre ? (runoverList.metre/1000).toFixed(2) : '0'}}</text>
                              <text class="danwei">公里</text>
                          </div>
                          <div class="disup">
                              <text class="danwei1">有效公里数:</text>
                              <text class="danwei">{{runoverList.useMetre ? (runoverList.useMetre/1000).toFixed(2) : '0'}}</text>
                          </div>
                        </div>
                        <text class="distimes">{{ctime}}</text>
                        
                    </div>
                    <div class="disright">
                        <image class="avator" :src="defaultAvator" style="width:120px;height:120px;border-radius:120px;"></image>
                        <text class="disrtext">{{userInfo.name}}</text>
                    </div>
                </div>
                <image class="manline" src="../../assets/images/manline.png" style="width:690px;height:27px"></image>

                <div class="sixnum">
                    <div class="sixnumitem sixnumborder">
                        <text class="sixnumup">{{runoverList.average_speed_distribution ? runoverList.average_speed_distribution : "00'00''''" }}</text>
                        <text class="sixnumdown">平均配速</text>
                    </div>
                    <div class="sixnumitem sixnumborder">
                        <text class="sixnumup">{{spendTime ? spendTime : "00:00:00" }}</text>
                        <text class="sixnumdown">时长</text>
                    </div>
                    <div class="sixnumitem">
                        <text class="sixnumup">{{runoverList.calorie ? runoverList.calorie : '0'}}</text>
                        <text class="sixnumdown">千卡</text>
                    </div>
                    
                </div>
                <div class="sixnum sixnumline">
                    <div class="sixnumitem sixnumborder">
                        <text class="sixnumup sixnumupmr">{{runoverList.step_number ? runoverList.step_number : '0'}}</text>
                        <text class="sixnumdown">步数</text>
                        <text class="sixnumdowndanwei">（步）</text>
                    </div>
                    <div class="sixnumitem sixnumborder">
                        <text class="sixnumup sixnumupmr">{{runoverList.average_step_frequency ? runoverList.average_step_frequency : '0'}}</text>
                        <text class="sixnumdown">平均步频</text>
                        <text class="sixnumdowndanwei">（步/分钟）</text>
                    </div>
                    <div class="sixnumitem">
                        <text class="sixnumup sixnumupmr">{{runoverList.average_stride_length ? runoverList.average_stride_length : '0'}}</text>
                        <text class="sixnumdown">平均步幅</text>
                        <text class="sixnumdowndanwei">（厘米）</text>
                    </div>
                    
                </div>
            </div>
             <div class="speedbox"  v-if="metre_list.length!=0">
                <text class="partTit">配速</text>

                <div class="speedtab">
                    <text class="speedtabitem" style="margin-left:30;">公里</text>
                    <text class="speedtabitem">配速</text>
                </div>

                <div class="speedTimebarC">
                
                    <div class="speedTimebar1"  v-for="(item,index) in metre_list" :key="index">
                  
                      <div class="sbar" v-if="index<(len-1)">
                          <text class="sortnum">{{index+1}}</text>
                          <div class="bart">
                              <wxc-progress :value="item.processValue" v-if="item.spend_time<131" :bar-width=602 :bar-height=41 :bar-radius=0 bar-color="#348cf9" background-color=transparent></wxc-progress>
                            <wxc-progress :value="item.processValue" v-if="item.spend_time>600" :bar-width=602 :bar-height=41 :bar-radius=0 bar-color="#fa914e" background-color=transparent></wxc-progress>
                             <wxc-progress :value="item.processValue" v-else :bar-width=602 :bar-height=41 :bar-radius=0 bar-color="#2edb7d" background-color=transparent></wxc-progress>
                            <text class="innerbartext">{{item.spend_time}}</text>
                          </div>
                      </div>
                      <text class="donwtext" v-if="index<(len-1) && item.metre>1000 && (index+1)%5==0">{{index+1}}公里 累计用时{{speedTotal((index+1),allTotal)}}</text>
                      <text class="donwtext" v-if="index==(len-1) && item.metre<1000">最后不足1公里 累计用时{{speedTotal((index),allTotal)}}</text>
                
                      <!--text class="donwtext" v-if="index==(len-1) && item.metre>1000">{{index+1}}公里 累计用时{{sallTotal}}</text-->
                   </div>
                    <text class="meterMore" @click="moreMClick" v-if="runoverList.run_type==0">查看详情</text>
                </div>
            </div>
             <div class="mapze" v-if="minute_list.length!=0">
        <div class="main">
            <text class="partTit">步频</text>
            <WEcharts class="echarts" :options="options"></WEcharts>
            <text class="mimuttd">(分钟)</text>
        </div>
             </div>

              <!--div class="bottombtn">
                <text class="leftBtn" @click="qunomoral">确认异常</text>
                <text class="rightBtn" @click="jumpenter">正常</text>
            </div-->
 </scroller>

 <!--查看详情-->
   <wxc-mask height="800"
                width="680"
                border-radius="0"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="moreMeterShow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
                

         
             <div class="speedbox" @click="clicStop">
                <text class="partTit11">配速</text>

                <div class="speedtab11">
                    <text class="speedtabitem" style="margin-left:60;">米</text>
                    <text class="speedtabitem">配速</text>
                </div>

                <div class="speedTimebarC">
                  <list class="maskMeter">
                      <cell class="speedTimebar1"  v-for="(item,index) in metre_listDialog" :key="index">
                        <div class="sbar">
                            <text class="sortnum1">{{(index+1)*100}}</text>
                            <div class="bart11">
                                <wxc-progress bar-color='#348cf9' v-if="item.spendTime1<13.2" :value="item.processValue" :bar-width=500 :bar-height=41 :bar-radius=0 background-color="#a7a7a5"></wxc-progress>
                                <wxc-progress bar-color='#2edb7d' v-if="item.spendTime1>=13.2&& item.spendTime1<=60" :value="item.processValue" :bar-width=500 :bar-height=41 :bar-radius=0 background-color="#a7a7a5"></wxc-progress>
                               <wxc-progress bar-color='#fa914e' v-if="item.spendTime1>60" :value="item.processValue" :bar-width=500 :bar-height=41 :bar-radius=0 background-color="#a7a7a5"></wxc-progress>
                              <text class="innerbartext">{{item.spend_time}}</text>
                            </div>
                        </div>
                    </cell>
                  </list>
                </div>
            </div>
         
    </wxc-mask>

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
            <text class="maskTit">异常申请</text>
            <textarea class="textarea" placeholder="请输入反馈内容"></textarea>
            <button class="masksureBtn" :eeui="{text:'提交',fontSize:30,backgroundColor:'#08ce7f'}"></button>
        </div>
        </wxc-mask>

        <!-- sharepage -->
        <wxc-popup popup-color="#ffffff"
                :show="isBottomShow"
                @wxcPopupOverlayClicked="popupOverlayBottomClick"
                pos="bottom"
                height="300">
        <div class="popup-content">
            <div class="popupIConWarp">
                <div class="popupIConItem" @click="runsharepage(1)">
                    <text class="popupimgicon">&#xe60e;</text>
                    <text class="popupTit">图片分享</text>
                </div>
                <div class="popupIConItem" @click="runsharepage(2)">
                    <text class="popupimgicon popupimgicon2">&#xe672;</text>
                    <text class="popupTit" >长图分享</text>
                </div>
                
                
            </div>
            <text class="cancelBtn" @click="popupOverlayBottomClick">取消</text>
        </div>
      </wxc-popup>
      <failNet v-if="netWorkShow"></failNet>
    </div>
</template>

<style scoped>
.app {
  background-color: #ebebeb;
}
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}
.headtext {
  font-size: 36px;
  color: #ffffff;
}
.iconBtn {
  flex-direction: row;
}
.share {
  margin-left: 21;
  margin-top: 5;
  margin-right: 30;
}
.map {
  width: 750;
  height: 600;
}
.mapc{
  width: 750;
  height: 600;
}

.infomoudle {
  width: 750;
  background-color: #ffffff;
}
.distance {
  width: 750;
}
.distance {
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30;
}
.disup {
  flex-direction: row;
}
.disnum {
  font-size: 75;
  font-weight: bold;
  margin-left: 30;
  margin-top: 20;
}
.danwei {
  font-size: 32;
  color: #6d6d6d;
  margin-top: 40;
  margin-left: 9;
  margin-bottom: 10;
}
.disnum1 {
  font-size: 40;
  font-weight: bold;
  margin-left: 5;
  margin-top: 32;
  color:#141414
}
.danwei1 {
  font-size: 22;
  color: #6d6d6d;
  margin-top: 46;
  margin-left: 20;
  margin-bottom: 10;
}
.disright {
  margin-top: 7;
  margin-right: 30;
  align-items:center;
}
.distimes {
  font-size: 27;
  color: #6d6d6d;
  margin-left: 30;
}
.disrtext {
  font-size: 29px;
  color: #4e4e4e;
  margin-top: 7;
}
.manline {
  margin-left: 30;
  margin-bottom: 48;
}
.sixnum {
  flex-direction: row;
  width: 684;
  margin-left: 33;
}
.sixnumline {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #dadada;
  padding-top: 20;
}
.sixnumup {
  font-size: 32;
  color: #4e4e4e;
  margin-bottom: 20;
  font-weight: bold;
}
.sixnumupmr {
  margin-bottom: 5;
}
.sixnumitem {
  width: 228;
  align-items: center;
  height: 100;
  justify-content: center;
  margin-bottom: 20;
}
.sixnumborder {
  border-right-width: 1;
  border-right-color: #dadada;
  border-right-style: solid;
}
.sixnumdown {
  color: #575757;
  font-size: 27;
}
.sixnumdowndanwei {
  font-size: 21;
  color: #575757;
  margin-top: 5;
}
.speedbox {
  background-color: #ffffff;
  margin-top: 10;
}
.partTit {
  font-size: 32;
  color: #1b1b1b;
  font-weight: bold;
  margin-top: 13;
  margin-left: 30;
  margin-bottom: 20;
}
.partTit11{
   font-size: 27;
    text-align: center;
    height: 80;
    line-height: 80;
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: #2222;
}
.speedtab {
  flex-direction: row;
}
.speedtab11{
  margin-top:18px;
   flex-direction: row;
}
.speedtabitem {
  font-size: 27;
  color: #575757;
  margin-left: 47;
}
.sbar {
  flex-direction: row;
}
.sortnum {
  font-size: 24;
  color: #1b1b1b;
  font-weight: bold;
  margin-left: 52;
  margin-right: 53;
  height: 41;
  line-height: 41;
  margin-bottom: 10;
}
.sortnum1{
  font-size: 24;
  color: #1b1b1b;
  font-weight: bold;
 text-align:center;
  margin-right: 0;
  height: 41;
  line-height: 41;
  width:146px;
  margin-bottom: 10;
}
.bart {
  position:relative;
  width: 602;
  height: 41;
  background-color: #ebebeb;
  border-radius: 4;
}
.bart11 {
  position:relative;
  width: 500;
  height: 41;
  background-color: #ebebeb;
  border-radius: 4;
}
.innerbar {
  height: 41;
  background-color: #2edb7d;
  border-radius: 4;
}
.innerbarwarn {
  width: 222px;
  height: 41px;
  background-image: linear-gradient(to right, #fa914e, #ff0000);
  border-radius: 4px;
}
.innerbartext {
  position:absolute;
  margin-left: 30;
  font-size: 27;
  line-height: 41;
  color: #fff;
}
.speedTimebar {
  margin-top: 21;
}
.donwtext {
  font-size: 27;
  color: #575757;
  margin-top: 20;
  margin-left: 120;
  margin-bottom:20px;
}
.speedbox {
  padding-bottom: 20;
}
.mapze {
  background-color: #fff;
  margin-top: 10;
}
.main {
  flex: 1;
  justify-content: center;
  margin-bottom: 120;
}

.echarts {
  width: 750px;
  height: 400px;
}
.bottombtn {
  width: 750;
  flex-direction: row;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 90;
}
.leftBtn {
  width: 375;
  height: 90;
  background-color: #fff;
  line-height: 90;
  font-size: 32;
  text-align: center;
  color: #08ce7f;
}
.rightBtn {
  width: 375;
  height: 90;
  background-color: #08ce7f;
  line-height: 90;
  font-size: 32;
  text-align: center;
  color: #fff;
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
.backIcon{
  width: 60;
  height: 60;
  margin-left: 20;
  color: #fff;
}
.cancelBtn{
  width: 750;
  height: 70;
  font-size: 32;
  color: #999;
  line-height: 90;
  text-align: center;
  border-top-style: solid;
  border-top-width: 1px;
  border-top-color: #dadada;
}
.popupIConItem{
   width: 120;
   align-items: center;
}
.popupIConWarp{
  flex-direction: row;
  justify-content: space-around;
  padding-top: 20;
  padding-bottom: 30;
}
.popupimgicon{
  font-family: iconfont;
  font-size: 40;
  color: #fff;
  width: 120;
  height: 120;
  background-color: #08c1ce;
  border-radius: 100;
  text-align: center;
  line-height: 120;
}
.popupimgicon2{
  background-color: #0864ce;
}
.popupTit{
  font-size: 24;
  color: #666;
  margin-top: 10;
}
.speedTimebarC{
  margin-top:15px;
}
.mimuttd{
  text-align:right;
  font-size:24;
  color:#222;
  padding-right:60;
  margin-top:-60;
}
.meterMore{
  flex-direction:row;
  text-align:right;
  color:red;
  padding-right:30px;
  font-size:28px;

}
.maskMeter{
  height:600px;
}
.distttop{
  flex-direction:row;
}
</style>

<script>

import WEcharts from "../../components/WEcharts/index";
import { WxcMask,WxcPopup,WxcProgress  } from 'weex-ui';
const eeui = app.requireModule('eeui');
const stream = weex.requireModule('stream');
import API from '../../fetch/api/apis';
import failNet from '../../components/failNet.vue'
import Map from "../../components/mapPosition/index1";
const globalEvent = weex.requireModule('globalEvent');

export default {
  components: { WEcharts,WxcMask,WxcPopup,WxcProgress,failNet,Map },
  data() {
    return {
        isBottomShow: false,
        maskShow: false,
        overlayCanClose: true,
        isFalse: false,
        hasAnimation: true,
        runoverList:JSON.parse(app.config.params.runOverList),
        ctime:'',
        userInfo:'',
        defaultAvator:'',
        spendTime:'',
        metre_list:[],
        metre_listDialog:[],
        options:{
          title: {
              text: '',
              left: 'center',
              align: 'right'
          },
          color: ['#2edb7d'],
           xAxis: {
                left:0,
                type: 'category',
                boundaryGap: false,
                data: ['0']
            },
            yAxis: {
               name: '(步/分钟)',
                type: 'value',
                data: []
            },
            series: [{
                data: [],
                type: 'line',
                areaStyle: {}
            }]
          
        },
        minute_list:[],
        processValue:[],
        allTotal:[],
        sindex:0,
        len:0,
        sallTotal:0,
        LineImageUrl:'',
        netWorkShow:false,
        runRracks:[],
        moreMeterShow:false
    };
  },
  methods:{
      qunomoral(){
        var self= this;
        eeui.confirm({
            title: "温馨提示",
            message: "你确定改学生此次成绩为异常吗？",
            buttons: ["取消", "确定"]
        }, function(result) {
            if (result.status == "click" && result.title == "确定") {
                //......
                self.jumpenter();
            }
        });
      },
      commitAL(){

      },
      getUserRunInfo(){
        
      },
      runsharepage(val){
        eeui.openPage({
            url: 'runPages/runshare.js',
            statusBarColor:'#0d2236',
            pageName:'运动分享',
            animated:false,
            params:{type:val}
        }, function(result) {
            //......
        }); 
      },
      jumpenter(){
                eeui.openPage({
                    url: 'schoolRun.js',
                    statusBarColor:'#1eb76e',
                    pageName:'schoolRun',
                    animated:false,
                    params:{position:1}
                }, function(result) {
                    //......
                }); 
            },
            openMask (e) {
                this.maskShow = true;
                this.hasAnimation = true;
            },
            wxcMaskSetHidden () {
                this.maskShow = false;
                this.moreMeterShow=false;
            },
            openBottomPopup () {
                this.isBottomShow = true;
            },
            //非状态组件，需要在这里关闭
            popupOverlayBottomClick () {
                this.isBottomShow = false;
            },
             timestampToTime(timestamp) {
                if(timestamp.toString().length>11){
                   var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                 
                }else{
                   var date = new Date(timestamp*1000);
                }
               
               
                var Y = date.getFullYear() + '年';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '月';
                var D = date.getDate() + '日 ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D+h+m+s;
            },
            formatSeconds(value) {
            　　let result = parseInt(value)
            　　let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
            　　let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
            　　let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
            　　result = `${h}:${m}:${s}`
            　　return result
            },
            s_to_hs2(value){
             　let result = parseInt(value)
            　　let h = Math.floor(result / 3600) < 10 ? '0' + Math.floor(result / 3600) : Math.floor(result / 3600)
            　　let m = Math.floor((result / 60 % 60)) < 10 ? '0' + Math.floor((result / 60 % 60)) : Math.floor((result / 60 % 60))
            　　let s = Math.floor((result % 60)) < 10 ? '0' + Math.floor((result % 60)) : Math.floor((result % 60))
            　　result = `${h}:${m}:${s}`
                return result;
            },
            s_to_hs(s){
                var h;
                h  =   Math.floor(s/60);
                s  =   s%60;
                h    +=    '';
                s    +=    '';
                h  =   (h.length==1)?'0'+h:h;
                s  =   (s.length==1)?'0'+s:s;
                return h+"'"+s+"''";
            },
            s_to_hs1(s){
                var h;
                h  =   Math.floor(s/60);
                s  =   s%60;
                h    +=    '';
                s    +=    '';
                h  =   (h.length==1)?''+h:h;
                s  =   (s.length==1)?''+s:s;
                return h;
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
                      if(this.userInfo.avatar_file == ''){
                          this.defaultAvator = '../../assets/images/defaultAvator.jpg'
                      }else{
                          this.defaultAvator = this.userInfo.avatar_file;
                      };
                  }else{
                    if(res.status=='-1'){
                            this.netWorkShow=true;
                            return
                        }
                  }
                  
              })
          },
          mathMax(arrs) {
            var max = arrs[0];
            for(var i = 0,ilen = arrs.length; i < ilen; i++) {
              if(arrs[i] > max) {
                max = arrs[i];
              }
            }
            return max;
          },
          speedTotal(index,arr){
            let self=this;
            let v=0;
          
            for(self.sindex;self.sindex<index;self.sindex++){
              v += arr[self.sindex]
            } 
            console.log('miao',v +=arr[self.sindex])
            return self.formatSeconds(v)
          },
          moreMClick(){
            this.moreMeterShow=true
          },
          clicStop(){}
            
        },
         mounted () {
          let self = this;
          //时间及配速
          this.ctime=self.timestampToTime(parseInt(self.runoverList.c_time));
          this.spendTime=self.s_to_hs2(parseInt(self.runoverList.spend_time));
          let metre_list= JSON.parse(self.runoverList.metre_list);

          let tDtaa=[];
          let tDtaa1=[];
          let newMeterList=[];
          if(metre_list.length!=0){
        
              for(let i=0;i<metre_list.length;i+=10){
                  newMeterList.push(metre_list.slice(i,i+10));
              }
        
              newMeterList.forEach(function(item,idx){
                  let s1=0,s2=0,s3=0,s4=0;
                  
                  item.forEach(function(val,index){
            
                    s1+=Number(val.spend_time);
                    s2+=Number(val.metre);
                    s3+=Number(val.step_number);
                    s4+=Number(val.calorie);     
                  })
                    
                self.metre_list.push({'spend_time':s1,'metre':s2,'step_number':s3,'calorie':s4,'processValue':0});
                tDtaa.push(self.s_to_hs1(s1))
                  
              })
              

              metre_list.forEach(function(item1,idx1){
                  self.metre_listDialog.push({'locate_time':item1.locate_time,'spend_time':self.s_to_hs(Number(item1.spend_time)),'metre':item1.metre,'step_number':item1.step_number,'calorie':item1.calorie,'processValue':0,spendTime1:Number(item1.spend_time)});
                  tDtaa1.push(parseInt(self.s_to_hs1(parseInt(item1.spend_time))));
              })
            
            //  metre_list.forEach(function(val,index){
              
            //     self.metre_list.push({'locate_time':val.locate_time,'spend_time':self.s_to_hs(parseInt(val.spend_time)),'metre':val.metre,'step_number':val.step_number,'calorie':val.calorie,'processValue':0})
            //     tDtaa.push(parseInt(self.s_to_hs1(parseInt(val.spend_time))))
            //  })
          }
          
          let timeMax =self.mathMax(tDtaa);
          tDtaa.forEach(function(val,index){
              let ss=self.metre_list[index];
              if(timeMax<=10){
                  let valNum1 = Math.floor((val/10)*100);
                  if(valNum1==0){
                
                      self.$set(ss,'processValue',(self.metre_list[index].spend_time)/10);
                  }else{
                      self.$set(ss,'processValue',valNum1);
                  }
                
              }else{
                self.$set(ss,'processValue',100);
              }
          })

          let timeMax1 =self.mathMax(tDtaa1);
          tDtaa1.forEach(function(val,index){
              let ss=self.metre_listDialog[index];
               if(timeMax1<=10){    
                  let valNum1 = Math.floor((val/10)*100);
                  if(valNum1==0){
                      self.$set(ss,'processValue',metre_list[index].spend_time/10);
                  }else{
                      self.$set(ss,'processValue',valNum1);
                  }
              }else{
                self.$set(ss,'processValue',100);
              }
              
          })

          //累计用时
          let totalS=[];
          let tot=0;
          self.metre_list.forEach(function(val,index){   
            self.allTotal.push(val.spend_time)   
            tot += val.spend_time;  
          })
            
          self.len=self.allTotal.length;
          self.sallTotal=self.formatSeconds(tot);
  
          //x坐标处理
          let minute_list = JSON.parse(self.runoverList.minute_list);
          let xData=0;
          let yData=[];
          let ppp1;
          if(minute_list.length!=0){
            minute_list.forEach(function(val,index){
             
                self.minute_list.push({'locate_time':val.locate_time,'spend_time':self.s_to_hs(parseInt(val.spend_time)),'metre':val.metre,'step_number':val.step_number,'calorie':val.calorie});
                xData= index;
                self.options.xAxis.data.push(xData);
                ppp1= parseInt(self.s_to_hs1(Number(val.spend_time)));
  
                let ccc=ppp1==0 ? 0 : Math.ceil(val.step_number/ppp1);
            
                // if(isNaN(ccc)){
                //     return;
                // }
                self.options.series[0].data.push(ccc);
                yData.push(ccc);    
            })
          }

          //  let platform = WXEnvironment.platform.toLowerCase();  
          //   if(platform==='ios'){
          //       self.runRracks=self.runoverList.tracks_list ? JSON.parse(self.runoverList.tracks_list) : self.runoverList;
          //   } 
          //   if(platform== "android") {
              
          //   }    
          self.runRracks= eeui.getCaches('trackDta') ? JSON.parse(eeui.getCaches('trackDta')) : [];


        // let miniMax =self.mathMax(xData);
        
        // if(miniMax<1){
        //    for(let i=1;i<=1;i++){  
        //       self.options.xAxis.data.push(i) 
        //     }
        // }else if(miniMax<5){
        //    for(let i=1;i<=miniMax;i++){  
        //       self.options.xAxis.data.push(i)
        //     }
          
        //  }else if(miniMax<10 && miniMax>5){
        //   for(let i=1;i<=miniMax;i++){
        //     if(i%2==0)  {
        //       self.options.xAxis.data.push(i)
              
        //     }
        //   }
        // }else if(miniMax>10){
        //    for(let i=1;i<=miniMax;i++){
        //     if(i%5==0)  {
        //       self.options.xAxis.data.push(i);
        //     }
        //   }
        // }
        // self.options.xAxis.data.push('');   
        

        //大标题
        self.options.title.text='平均步频'+' '+self.runoverList.average_step_frequency;

  },
  created(){

        // 添加 字体图标
        let self = this;
        let runId = self.runoverList.course_class_user_run_start_id
        let platform = WXEnvironment.platform.toLowerCase();  
       

        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace',{
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
        });
 console.log(JSON.parse(app.config.params.runOverList))    
      this.getUserInfo();  

       
  }
};
</script>
