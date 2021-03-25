<template>
    <div class="app">
        <navbar class="navbarb">
            <navbar-item type="left">
                <icon class="backIcon" @click="backJump" :eeui="{content:'md-arrow-back',fontSize:38}"></icon>
            </navbar-item>
            <!--navbar-item type="back"></navbar-item-->   
            <navbar-item type="title">
                <div class="navbartitcont" @click="minibarRightButtonClick">
                    <text class="headtext">{{curText}}</text>
                    <icon class="topnavIcon" :eeui="{content:'ios-arrow-down',fontSize:50}"></icon>
                </div>
            </navbar-item>
            <navbar-item type="right">
                <text class="userNt">{{userInfos ? userInfos.name : userInfo.name}}</text>
            </navbar-item>
            <!--navbar-item type="right" @click="jumpenterpage">
                <image style="width:40px;height:40px;margin-right:30;" src="../../assets/images/shareicon.png"></image>
            </navbar-item-->
        </navbar>
        <!-- 气泡下拉 -->
        <wxc-popover ref="wxc-popover"
                 :buttons="btns"
                 :position="popoverPosition"
                 :arrowPosition="popoverArrowPosition"
                 @wxcPopoverButtonClicked="popoverButtonClicked"></wxc-popover>

        <div class="content">
            <div class="timetabr">
                <div class="timetabrwww">
                    <text class="timeItem" :class="[index==tabCindex ? 'timeItemcur' : '',index==0 ? 'timeItemNone' : '']" v-for="(item,index) in tabT" :key="index" @click="tabClick(index)">{{item}}</text>
                </div>
                

            </div>

            <scroller class="map" :style="{height:tabPageHeight,overfow:hidden}" v-if="tabCindex==0">
                 <WEcharts id="dayEchart" class="echarts" :options="dayNOption" :style="{height:tabPageHeight,overfow:hidden}"></WEcharts>
            </scroller> 
            <scroller class="map" :style="{height:tabPageHeight,overfow:hidden}" v-if="tabCindex==1"  >
                 <WEEkcharts class="echarts" :options="weekNOption" :style="{height:tabPageHeight,overfow:hidden}"></WEEkcharts>
            </scroller>
            <scroller class="map" :style="{height:tabPageHeight,overfow:hidden}" v-if="tabCindex==2"  >
                 <Monthcharts  class="echarts" :options="monthNOption" :style="{height:tabPageHeight,overfow:hidden}"></Monthcharts>
            </scroller>
             <scroller class="map" :style="{height:tabPageHeight,overfow:hidden}" v-if="tabCindex==3"  >
                 <Yearcharts  class="echarts" :options="yearNOption" :style="{height:tabPageHeight,overfow:hidden}"></Yearcharts>
            </scroller>
        </div>
        <failNet v-if="netWorkShow"></failNet>
    </div>
</template>
<script>
import API from '../../fetch/api/apis'
import WEcharts from "../../components/WEcharts/index";
import WEEkcharts from "../../components/WEcharts/week";
import Monthcharts from "../../components/WEcharts/month";
import Yearcharts from "../../components/WEcharts/year";
import { WxcMinibar, WxcPopover,Utils} from 'weex-ui';
const stream = app.requireModule('stream');
const eeui = app.requireModule('eeui');
import failNet from '../../components/failNet.vue'


export default {
    components: { WEcharts,WxcMinibar, WxcPopover,failNet,WEEkcharts,Monthcharts,Yearcharts },
    data () {
        return {
            tabT:['日','周','月','年'],
            tabCindex:0,
            dayNOption:{},
            dayOption:{
                 tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top:'3%',
                        containLabel: true
                    },
                    xAxis: [
                       {
                            type: 'category',
                            data:[],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '步数',
                            type: 'bar',
                            barWidth: '30',
                            itemStyle: {
                                normal: {
                                    color: '#00C179'
                                }
                            },
                            data:[]
                        }
                    ]
            },
            weekNOption:{},
            weekOption:{
                tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top:'3%',
                        containLabel: true
                    },
                    xAxis: [
                       {
                            type: 'category',
                            data:[],
                            axisLabel: {
                                interval: 0,    //强制文字产生间隔					  
						        textStyle: {    //文字样式
						            color: "black",
						            fontSize: 12,
						            fontFamily: 'Microsoft YaHei'
						        }
				

                            },
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '步数',
                            type: 'bar',
                            barWidth: '30',
                            itemStyle: {
                                normal: {
                                    color: '#00C179'
                                }
                            },
                            data:[]
                        }
                    ]
            },
            monthNOption:{},
            monthOption:{
                 tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top:'3%',
                        containLabel: true
                    },
                    xAxis: [
                       {
                            type: 'category',
                            data:[],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '步数',
                            type: 'bar',
                            barWidth: '30',
                            itemStyle: {
                                normal: {
                                    color: '#00C179'
                                }
                            },
                            data:[]
                        }
                    ]
            },
            yearNOption:{},
            yearOption:{
                tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top:'3%',
                        containLabel: true
                    },
                    xAxis: [
                       {
                            type: 'category',
                            data:[],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '步数',
                            type: 'bar',
                            barWidth: '30',
                            itemStyle: {
                                normal: {
                                    color: '#00C179'
                                }
                            },
                            data:[]
                        }
                    ]
            },
            dayList:[],
            dayNewList:[],
            weekList:[],
            monthList:[],
            yearList:[],
            btns:[
                {
                text:'全部',
                key:'全部'
                },
                // {
                // text:'体育成绩跑',
                // key:'体育成绩跑'
                // },
                // {
                // text:'自由跑',
                // key:'自由跑'
                // },
            ],
            popoverPosition:{x:220,y:70},
            popoverArrowPosition:{pos:'top',x:115},
            curText:'全部',
            opUid:app.config.params ? app.config.params.uid : '',
            netWorkShow:false,
            tabPageHeight:1334,
            sdate:app.config.params ? app.config.params.sdate : '',
            userInfos:app.config.params ? app.config.params.user : '',
            userInfo:''
        }
    },
    methods: {
        tabClick(index){
            let self =this;
            self.tabCindex=index;
            // switch (index) {
            //     case 0:{
                
            //         break;
            //     }
            //     case 1:{
            //         self.getuserWeekRunList();
            //         break;
            //     }
            //     case 2:{
            //         self.getuserMonthRunList();
            //         break;
            //     }
            //     case 3:{
            //         self.getuserYearRunList();
            //         break;
            //     }
            // }
        },
        getuserRunList(){
            let self=this;
            let s_date=self.getDay(-6);
            let e_date=self.getDay(0);   
            let arr=[];
            let getUrl='';
 
            if(!self.userInfos){
                getUrl=API.baseUrl + API.userRunList+ '?s_date=' + s_date + '&end_date=' + e_date;
            }else{
                 getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userInfos.uid +'&s_date=' + s_date + '&end_date=' + e_date;
               // getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userInfos.uid +'&s_date=' + self.sdate + '&end_date=' + self.sdate;
            }
            stream.fetch({
                  url:getUrl,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
           
                    if(res.status == '200'){
                        self.dayList=res.data;
                        if(self.dayList.length!=0){
                            for (let i = 0; i < self.dayList.length; i++) {
                                let dayL = self.dayList[i].c_time.substring(0,10);
                                //当日期相同,只要传这个
                                let valDetailList = {
                                    "calorie": self.dayList[i].calorie,
                                    "check_status": self.dayList[i].check_status,
                                    "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                                    "metre": self.dayList[i].metre,
                                    "run_type": self.dayList[i].run_type,
                                    "spend_time": self.dayList[i].spend_time,
                                    "status": self.dayList[i].status,
                                    "step_number": self.dayList[i].step_number,
                                    "tr_id": self.dayList[i].tr_id,
                                    "valid_metre":self.dayList[i].valid_metre ? self.dayList[i].valid_metre : 0,
                                    "test_metre":self.dayList[i].test_metre ? self.dayList[i].test_metre : 0
                                }
                                //当日期没有相同的,就新建一个Item
                                let valItem = { 
                                    "dayCtime": '',
                                    "dayListInfo": []
                                }
                                valItem.dayCtime = dayL;
                                valItem.dayListInfo.push(valDetailList);
                                //第0个不需要比较
                              
                                if (i == 0) {
                                    arr.push(valItem);
                                }else{
                                    let index1 = -1; // 通过for循环查找index
                                    for (var k = 0; k < arr.length; k++) {
                                        if (dayL == arr[k].dayCtime) {
                                            index1 = k;
                                            break;   
                                        }
                                    }
                                    if (index1 === -1) { // 没有找到
                                        arr.push(valItem);
                                    } else { // 找到了
                                        arr[k].dayListInfo.push(valDetailList);
                                    }
                                }
                            }
                            arr.sort(function(a, b) {
                                return b.dayCtime < a.dayCtime ? 1 : -1
                            })
                      
                            let strarr =[];    
                            arr.forEach(function(val,index){
                                 
                                 let cc =[];
                                 self.dayOption.xAxis[0].data.push(val.dayCtime.substring(5,10)); 
                            

                                if(val.dayListInfo.length==1){
                                    self.dayOption.series[0].data.push(val.dayListInfo[0].step_number);
                                }else{
                                    val.dayListInfo.map(function(item,idx){   
                                        cc.push(item.step_number);  
                                    }) 
                              
                                    self.dayOption.series[0].data.push(eval(cc.join('+')));
                                }

                                if(self.userInfos){

                                    if(val.dayCtime.indexOf(self.sdate)>-1){
                                        let cccccc = self.dayOption.series[0].data;
                                   
                                        cccccc[index]= {
                                                value:cccccc[index],
                                                itemStyle: {
                                                    color: 'orange'
                                                }
                                        }    
                                        
                                        
                                    }
                                }
                                
                            })
                           self.dayNOption=self.dayOption;
                        }

                    }else{
                          if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }  
                    }    
                  
              })
        },
       
        getuserWeekRunList(){
            let self=this;
            let cc='';
            let weekNArry=[];
            let getUrl='';
        
            if(!self.userInfos){
                getUrl=API.baseUrl + API.userWeekRunList+ '?page=' + 0;
            }else{
                 getUrl=API.baseUrl + API.userWeekRunList+ '?uid='+ self.userInfos.uid +'&page=' + 0;
         
            }
            stream.fetch({
                  url:getUrl,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{   

                if(res.status == '200'){
                    
                    if(res.data.length!=0){
                        self.weekList=res.data.reverse();
                        self.weekList.forEach(function(val,index){  
                             if(val.title){
                                 cc=val.title.substring(5,val.title.indexOf('/')) + '/' + val.title.substring(16,val.title.length)   
                             }
                             self.weekOption.xAxis[0].data.push(cc);
                             self.weekOption.series[0].data.push(val.step_number);

                              if(self.userInfos){

                                    if(val.title.indexOf(self.sdate)>-1){
                                        let cccccc =  self.weekOption.series[0].data;
                                        cccccc[index]= {
                                                value:cccccc[index],
                                                itemStyle: {
                                                    color: 'orange'
                                                }
                                        }    
                                        
                                        
                                    }
                                }

                        })

                        
                        self.weekNOption=self.weekOption;
                    }
                  
                 
                }
                 
              })
        },
        getuserMonthRunList(){
            let self=this;
            let cc='';
            let monthNArry=[];
            let getUrl='';
             if(!self.userInfos){
                getUrl=API.baseUrl + API.userMonthRunList+ '?page=' + 0;
            }else{
                 getUrl=API.baseUrl + API.userMonthRunList+ '?uid='+ self.userInfos.uid +'&page=' + 0;
         
            }
            stream.fetch({
                  url:getUrl,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
              
                   if(res.status == '200'){
                      if(res.data.length!=0){
                            self.monthList=res.data.reverse();
                            self.monthList.forEach(function(val,index){
                                 if(val.title){
                                      cc=val.title.substring(5,val.title.lastIndexOf('-'))+'月';
                                 }
                                 self.monthOption.xAxis[0].data.push(cc);
                                  self.monthOption.series[0].data.push(val.step_number);

                                  if(self.userInfos){
                                      
                                    if(val.title.indexOf(self.sdate.substring(5,self.sdate.lastIndexOf('-')))>-1 && self.sdate){
                                        let cccccc =  self.monthOption.series[0].data;
                                        cccccc[index]= {
                                                value:cccccc[index],
                                                itemStyle: {
                                                    color: 'orange'
                                                }
                                        }    
                                        
                                        
                                    }
                                }

                            })
                            self.monthNOption=self.monthOption;
                      }

                   }
              })
        },
         getuserYearRunList(){
            let self=this;
            let cc='';
            let getUrl='';
             if(!self.userInfos){
                getUrl=API.baseUrl + API.userYearRunList+ '?page=' + 0;
            }else{
                 getUrl=API.baseUrl + API.userYearRunList+ '?uid='+ self.userInfos.uid +'&page=' + 0;
         
            }
            stream.fetch({
                  url:getUrl,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                   if(res.status == '200'){
                        if(res.data.length!=0){
                            self.yearList=res.data;
                            self.yearList.forEach(function(val,index){  
                                if(val.title){
                                    cc=val.title.substring(0,val.title.indexOf('-'))+'年';
                                }
                            
                                self.yearOption.xAxis[0].data.push(cc);
                                self.yearOption.series[0].data.push(val.step_number);

                                 if(self.userInfos){      
                                    if(val.title.indexOf(self.sdate.substring(0,5))>-1 && self.sdate){
                                        let cccccc =  self.yearOption.series[0].data;
                                        cccccc[index]= {
                                                value:cccccc[index],
                                                itemStyle: {
                                                    color: 'orange'
                                                }
                                        }    
                                        
                                        
                                    }
                                }
                            })
                            self.yearNOption=self.yearOption;
                        }
                     

                   }
             
              })
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
        getDay(day){
         　var today = new Date();
        　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        　　today.setTime(targetday_milliseconds);
        　　var tYear = today.getFullYear();
         　var tMonth = today.getMonth();
         　　var tDate = today.getDate();
        　　tMonth = this.doHandleMonth(tMonth + 1);
         　　tDate = this.doHandleMonth(tDate);
         　　return tYear+"-"+tMonth+"-"+tDate;
        },
        getDay1(day){
         　var today = new Date();
        　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
        　　today.setTime(targetday_milliseconds);
        　　var tYear = today.getFullYear();
         　var tMonth = today.getMonth();
         　　var tDate = today.getDate();
        　　tMonth = this.doHandleMonth(tMonth + 1);
         　　tDate = this.doHandleMonth(tDate);
         　　return tMonth+"-"+tDate;
        },
        doHandleMonth(month){
        　　var m = month;
        　　if(month.toString().length == 1){
        　　　　m = "0" + month;
        　　}
        　　return m;
        },
        jumpenterpage(){
            // eeui.openPage({
            //         url: 'sharepage.js',
            //         statusBarColor:'#1eb76e',
            //         pageName:'分享',
            //         animated:true,
            //     }, function(result) {
            //         //......
            //     }); 
        },
        minibarRightButtonClick () {
            this.$refs['wxc-popover'].wxcPopoverShow();
        },
        popoverButtonClicked (obj) {
            //eeui.toast({ 'message': `key:${obj.key}, index:${obj.index}`, 'duration': 1 });
            this.curText = obj.key;
            console.log(this.curText )
        },

        backJump(){
            if(this.opUid===''){
                 eeui.openPage({
                    url: 'schoolRun.js',
                    statusBarColor:'#1eb76e',
                    pageName:'schoolRun',
                    animated:false,
                    params:{position:1}
                }, function(result) {
                    //......
                });    
            }else{
               eeui.closePage();
            }
             
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
     
    },
    mounted () {
        let self = this;    
    },
    created () {
        this.getUserInfo();
        this.getuserRunList();
          this.getuserWeekRunList();
         this.getuserMonthRunList();
         this.getuserYearRunList();
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
    .backIcon{
  width: 60;
  height: 60;
  margin-left: 20;
  color: #fff;
}
     .headtext {
        font-size: 43px;
        color: #ffffff;
    }
    .navbartitcont{
        flex-direction: row;
    }
    .topnavIcon{
        width: 60px;
        height: 50px;
        margin-left: 30;
        color: #ffffff;
    }
    .setIcon{
        width: 60;
        height: 60;
    }
    .content{
        width: 750;
    }
    .timetabr{
        width: 690px;
        height: 56px; 
        border-style: solid;
        border-width: 2px;
        border-color: #575757;
        border-radius: 10px;
        margin-top: 33;
        margin-left: 30;
        overflow:hidden;
    }
    .timetabrwww{
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 56; 
    }
    .timeItem{
       flex:1;
        text-align:center;
        height: 56; 
        line-height:56;
        border-left-color: #575757;
        border-left-style: solid;
        border-left-width: 2px;
    }
    .timeItemNone{
         border-left-width: 0;
    }
    .timeItemcur{
        background-color: #575757;
        color: #ffffff; 
    }
    .map{
        width: 690px;
        margin-left: 30;
        margin-top: 30;
    }
   
    .echarts{   
      
    }
    .valueList{
        flex-direction: row;
        height: 79;
        border-bottom-color: #dadada;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        justify-content: space-between;
        margin-left: 30;
        margin-right: 30;
    }
    .valueitem{
        flex-direction: row;
        height: 79;
        justify-content: space-between;
        align-items: center;
        width: 326;
    }
    .valueText{
        font-size: 27;
        color: #575757;
        margin-left: 18px;
    }
    .iconleft{
        flex-direction: row;
        height: 79;
        align-items: center;
    }
    .value{
        font-size: 32;
        color: #4e4e4e;
        font-weight: bold;
    }
    .onevaluelist{
        margin-top: 20;
    }
    .valuebox{
        flex-direction: row;
        align-items: center;
    }
    .valueP{
        font-size: 27px;
        color: #4E4E4E;
        margin-top: 5;
    }
    .timestit{
        font-size: 27;
        color: #575757;
        border-bottom-color: #DADADA;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-bottom: 16;
        margin-left: 30;
        margin-right: 30;
        margin-top: 35;

    }
    .times{
        flex-direction: row;
        justify-content: space-between;
        margin-left: 30;
        margin-right: 30;
        height: 101;
        align-items: center;
        border-bottom-color: #DADADA;
        border-bottom-width: 1px;
        border-bottom-style: solid;
    }
    .timesleft{
        flex-direction: row;
        height: 101;
        align-items: center;
    }
    .timesiconbox{
        width: 50;
        height: 60;
        position: relative;
    }
    .timesshan{
        margin-top: 13;
    }
    .error{
       position: absolute;
        top: 0;
        right: 2; 
    }
    .sh{
        position: absolute;
        top: 0;
        right: 2;
    }
    .timestext{
        font-size: 27;
        color: #575757;
        margin-left: 34;
    }
    .iconback{
        width: 50;
        height: 50;
        color: #999;
    }
    .userNt{
        margin-right:30;
        font-size:30;
        color:#fff;
    }
</style>