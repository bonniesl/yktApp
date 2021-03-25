<template>
  <div class="app">
    <navbar class="navbarb">
        <navbar-item type="left" @click="goback">
            <icon content="md-arrow-back" class="icon11"></icon>
        </navbar-item>
      <navbar-item type="title">
        <text class="headtext">运动设置</text>
      </navbar-item>
    </navbar>
    <scroller class="scroller">
      <div class="settab">
        <div class="setItem">
          <div class="left">
            <text class="settabicon">&#xe676;</text>
            <text class="settabtext">项目名称</text>
          </div>
          <div class="right">
             <input
                    class="rightInput"
                   type="text"
                   autofocus="false"
                   placeholder="如2020级大一（上）"
                   v-model="runTitle"> 
          </div>
        </div>
        <!-- <div class="setItem" @click="openMask2">
          <div class="left">
            <text class="settabicon">&#xe72d;</text>
            <text class="settabtext">运动星期设置</text>
          </div>
          <div class="right">
            <text class="righttext">{{dataTime}}</text>
            <text class="rightArrow">&#xe6d8;</text>
          </div>
        </div> -->
        <div class="setItem" @click="openBottomPopup">
          <div class="left">
            <text class="settabicon">&#xe72d;</text>
            <text class="settabtext">运动时间设置</text>
          </div>
          <div class="right">
            <text class="righttext">{{setRunInfo.startTime}}-{{setRunInfo.endTime}}</text>
            <text class="rightArrow">&#xe6d8;</text>
          </div>
        </div>
        <div class="setItem">
          <div class="left">
            <text class="settabicon">&#xe69c;</text>
            <text class="settabtext">打卡轨迹显示</text>
          </div>
          <div class="right">
            <switch class="switch" :checked="trackShow" @change="trackPlay"></switch>
          </div>
        </div>
        <div class="setItem" @click="popupRightShow" v-if="trackShow">
          <div class="left">
            <text class="settabicon">&#xe69c;</text>
            <text class="settabtext">打卡点设置</text>
          </div>
          <div class="right">
            <text class="righttext">{{schoolPickT}}</text>
            <text class="rightArrow">&#xe6d8;</text>
          </div>
        </div>

        <div class="setbigItem" @click="setKeyBord">
          <div class="setbigline">
            <text class="settabicon">&#xe71f;</text>
            <text class="settabtext">本学期目标（男）</text>
            <input class="inputBox" type="number" placeholder="0" v-model="setRunInfo.boy_km"  />
            <text class="comp">公里</text>
          </div>
          <div class="setbigline">
            <text class="settabtext ml60">单次最低:</text>
            <input class="inputBoxM" type="number" placeholder="0"  v-model="setRunInfo.boy_min"  />
            <text class="comp">公里</text>
            <text class="settabtext ml44">单次最高:</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="setRunInfo.boy_max" />
            <text class="comp">公里</text>
          </div>
          <div class="setbigline" v-for="(item,index) in setRunInfo.boy_list" :key="index">
            <text class="settabtext ml60">分值设置:</text>
            <input class="inputBoxM" type="number" placeholder="0"  v-model="item.min"  />
            <text style="margin-left:20;">-</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="item.max"  />
            <text class="comp">公里</text>
            <input class="inputBoxM inputL"  type="number" placeholder="0" v-model="item.point"/>
            <text class="comp">分</text>
            <text class="additem" @click="addBoyItem" v-if="item.isaddShow">&#xe60a;</text>
            <text class="deleteIcon" v-if="item.isdelShow" @click="delBoyItem">&#xe712;</text>
          </div>
        </div>
        <div class="setbigItem">
          <div class="setbigline">
            <text class="settabicon">&#xe71f;</text>
            <text class="settabtext">本学期目标（女）</text>
            <input class="inputBox" type="number" placeholder="0" v-model="setRunInfo.girl_km"  />
            <text class="comp">公里</text>
          </div>
          <div class="setbigline">
            <text class="settabtext ml60">单次最低:</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="setRunInfo.girl_min" />
            <text class="comp">公里</text>
            <text class="settabtext ml44">单次最高:</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="setRunInfo.girl_max"  />
            <text class="comp">公里</text>
          </div>
          <div class="setbigline" v-for="(item,index) in setRunInfo.girl_list" :key="index">
            <text class="settabtext ml60">分值设置:</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="item.min"/>
            <text style="margin-left:20;">-</text>
            <input class="inputBoxM" type="number" placeholder="0" v-model="item.max" />
            <text class="comp">公里</text>
            <input class="inputBoxM inputL"  type="number" placeholder="0" v-model="item.point"  />
            <text class="comp">分</text>
            <text class="additem"  @click="addGirlItem" v-if="item.isaddShow">&#xe60a;</text>
            <text class="deleteIcon" v-if="item.isdelShow" @click="delGirlItem">&#xe712;</text>
          </div>
        </div>
        
        <div class="setItem">
          <div class="left">
            <text class="settabicon">&#xe61b;</text>
            <text class="settabtext">在学生端显示成绩</text>
          </div>
          <div class="right">
            <switch class="switch" :checked="loading" @change="loading = !loading"></switch>
          </div>
        </div>
        <div class="setItem">
          <div class="left">
            <text class="settabicon">&#xe636;</text>
            <text class="settabtext">占平时成绩比例</text>
          </div>
          <div class="right">
            <input class="inputBoxM" type="number" value="0" v-model="setRunInfo.percentage"  />
            <text class="rightArrow">%</text>
          </div>
        </div>
      </div>

      <button @click="setover" class="commit" :eeui="{text:'保存',backgroundColor:'#1eb76e'}"></button>
    </scroller>

    <!--打卡点设置-->
    <wxc-popup popup-color="#eee"
              :show="isBottomShow2"
              @wxcPopupOverlayClicked="popupBottomShow"
              pos="bottom"
              height="320">
      <div class="popupBtn"> 
          <button class="cancleB pbtn" :eeui="{text:'取消'}" @click="popupBottomShow"></button>
          <button class="sureB pbtn" :eeui="{text:'确定'}" @click="startSure"></button>
      </div>
      <div class="setBodycont">
          <div class="setbodyItem">
              <text class="setbodyText">校区</text>
              <text class="setSelStudent grey" @click="pickSchollList">{{schoolText}}</text>
          </div>
      </div>    
  </wxc-popup>
  <wxc-popup popup-color="#fff"
              :show="isRightShow"
              @wxcPopupOverlayClicked="popupRightHide"
              pos="right">
        <navbar class="navbarb">  
            <navbar-item type="title">
                <text class="headtext">打卡点设置</text>
            </navbar-item>
        </navbar>
        <div class="punchWrap">
          <div class="addBtn" @click="openBottomPopupShow">
            <icon content="md-add" class="icon22"></icon> 
          </div>
          <div class="tabItem"  v-for="(item,index) in trackNew" :key="index">
            <div class="list-input-item"  @click="tabShow(item,index)">
                <text class="rx">{{item.name}}</text>
                <text class="num1">{{item.list.length}}</text>
                <icon class="downIcon" :eeui="{content:'ios-arrow-down'}"></icon>
            </div>
            <div v-if="item.downShow">
              <div v-if="item.list.length>0" >
                <div class="trajectory" :key="idx" v-for="(points,idx) in item.list"> 
                      <div class="btnlf">
                        <button class="tbtn1" :eeui="{text:'轨迹'+(idx+1), borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" ></button>
                      </div> 
                      <div class="btnrl">
                        <button class="tbtn1" :eeui="{text:'编辑', borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" @click="mapEdit(points,idx,index)"></button>
                      <button class="tbtn1 tbtn2" :eeui="{text:'删除', borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" @click="delMap(points,idx,index)"></button>
                    </div>
                 
                </div>
              </div>
            </div>
          </div> 
      </div>
      <div class="fixedBtn">
          <button class="cancleB1 pbtn2" :eeui="{text:'取消'}" @click="popupRightHide"></button>
          <button class="sureB1 pbtn2" :eeui="{text:'确定'}" @click="saveTrack"></button>
      </div>
      <text class="tipst">*点+号可以添加多条打卡点</text>
  </wxc-popup>

    <!-- 绑定课程 -->
    <wxc-mask
      height="400"
      width="500"
      border-radius="8"
      duration="200"
      mask-bg-color="#FFFFFF"
      :has-animation="hasAnimation"
      :has-overlay="true"
      :show-close="true"
      :show="maskShow"
      @wxcMaskSetHidden="wxcMaskSetHidden"
    >
      <div class="content">
        <text class="maskTit">输入绑定课程码</text>
        <div class="enterinputBox">
          <input class="enterMa" placeholder="输入班级码" type="text" />
        </div>
        <div class="groupBtn">
          <button class="sureBtn" :eeui="{text:'绑定课程',backgroundColor:'#1eb76e'}"></button>
        </div>
      </div>
    </wxc-mask>
    <!-- 星期选择 -->
    <wxc-mask
      height="1000"
      width="640"
      border-radius="8"
      duration="200"
      mask-bg-color="#FFFFFF"
      :has-animation="hasAnimation"
      :has-overlay="true"
      :show-close="true"
      :show="maskShow2"
      @wxcMaskSetHidden="wxcMaskSetHidden2"
    >
      <div class="content">
        <wxc-checkbox-list
          :list="list"
          @wxcCheckBoxListChecked="wxcCheckBoxListChecked"
          @wxcCheckBoxItemChecked="wxcCheckBoxItemChecked"
        ></wxc-checkbox-list>
        <button
          class="databutton"
          @click="wxcMaskSetHidden2"
          :eeui="{text:'确定',backgroundColor:'#1eb76e',fontSize:'30'}"
        ></button>
      </div>
    </wxc-mask>
    <!-- 时间设置 -->
    <wxc-popup
      popup-color="#ffffff"
      :show="isBottomShow"
      @wxcPopupOverlayClicked="popupOverlayBottomClick"
      pos="bottom"
      :height="height"
    >
      <div class="content">
        <text class="databox" style="margin-top:20;">时间选择</text>
        <div class="dataList">
          <text class="timedata" @click="pickTime">{{dateStartValue}}</text>
          <text class="timedata2">-</text>
          <text class="timedata" @click="pickTime2">{{dateEndValue}}</text>
        </div>
        <button class="sureBtn2" :eeui="{text:'确定',backgroundColor:'#1eb76e'}" @click="pickTimeClose"></button>
      </div>
    </wxc-popup>
     <failNet v-if="netWorkShow"></failNet>
  </div>
</template>
<script>
import { WxcMask, WxcPopup, WxcCheckboxList } from "weex-ui";
const stream = app.requireModule('stream');
const picker = weex.requireModule("picker");
const globalEvent = weex.requireModule('globalEvent');
import API from '../../fetch/api/apis'
import failNet from '../../components/failNet.vue'

export default {
  components: { WxcMask, WxcPopup, WxcCheckboxList,failNet },

  data() {
    return {
  
      trackShow:false,
      loading: false,
      maskShow: false,
      overlayCanClose: true,
      isFalse: false,
      hasAnimation: true,
      maskShow2: false,
      hasAnimation2: true,
      isBottomShow: false,
      height: 600,
      timeStartValue: "选择开始日期",
      timeEndValue: "选择结束日期",
      dateStartValue: "选择开始时间",
      dateEndValue: "选择结束时间",
      value: "",
      checkedList: [],
      dataTime: "",
      list: [
        { title: "全部", value: "全部" },
        { title: "周一", value: "周一" },
        { title: "周二", value: "周二" },
        { title: "周三", value: "周三" },
        { title: "周四", value: "周四" },
        { title: "周五", value: "周五" },
        { title: "周六", value: "周六" },
        { title: "周日", value: "周日" }
      ],
      id:app.config.params.id,
      futitle:app.config.params.title,
      courseTitle:app.config.params.courseTitle,
      course_class_run_id:'',
      runTitle:'',
      points:[],
      ponitList:[],
      setRunInfo:{
        track_map_status:0,
        startTime:'05:00',
        endTime:'22:30',
        boy_km:100,
        boy_min:1,
        boy_max:2,
        boy_list:[
          {min:0,max:0,point:0,isaddShow:true,isdelShow:false}
        ],
        girl_km:80,
        girl_min:1,
        girl_max:2,
        girl_list:[
           {min:0,max:0,point:0,isaddShow:true,isdelShow:false}
        ],
        percentage:0,
        runSetShow:false,
        campus_id:0, 
        client_show:0,
        track_map_list:[]
      },
      addBoyList:[],
      addGirlList:[],
      course_id:app.config.params.courseId,
      isBottomShow2:false,
      schoolPickT:'',
      schoolText:'请选择校区',
      isRightShow:false,
      userInfo:'',
      schoolCList:[],
      pickSchoolInfo:{},
      courser_runId:'',
      addindex:0,
      mapPointList:[],//打卡轨迹
      editIndex:'',
      editIndex1:'',
      netWorkShow:false,
      trackNew:[],
      trackNew1:[],
      trackNew2:[],
      trackNew3:[]
    };
  },
  filters: {
    dataTimeForamt(val) {
      if (val == "时间段选择") {
        return val;
      } else {
        return val.join("至");
      }
    }
  },
  methods: {
     trackPlay(){
      if(this.trackShow==true){
        this.trackShow=false;
        this.setRunInfo.track_map_status=0;
      }else{
        this.trackShow=true;
        this.setRunInfo.track_map_status=1;
      }
     
    },
    //地图打点设置
    mapSet(){
      var self = this; 
       self.editIndex='';
       self.editIndex1='';

      // self.isBottomShow2 = false;  
      self.points=[];
   
      //ios 返回值
      var callback = function (data) { 
        
        self.points = data;
      }

      weex.requireModule('userRun').mark(self.points,callback); 
      
    },
    mapEdit(points,index,idx){
      let self = this;
      this.editIndex=index;
      this.editIndex1=idx;
      var callback = function (data) { 
            points=data;
      }
      weex.requireModule('userRun').mark(points,callback);
    },
    delMap(points,idx,index){
      let self = this;
      //删除打卡的点 
      // this.mapPointList.splice(index,0);
      // this.addindex--;

    //   let index = self.points.indexOf(points);
    //   if (index > -1) {
    //      self.points.splice(index, 1);
    //   }

    //  //删除打卡的赋值
    eeui.confirm({
        title: "温馨提示",
        message: "确定删除吗？",
        buttons: ["取消", "确定"]
    }, function(result) {
      if (result.status == "click" && result.title == "确定") {
       
            self.trackNew[index].list.splice(idx, 1);
  
 


          // let index1 = self.trackNew[index].list.indexOf(points);
          // if (index1 > -1) {
          //     self.trackNew[index].list.splice(index1, 1);
          // }
      }
    
    })
  
    //   var callback = function (data) { 
    //     self.points = data;
    //   }
    //   weex.requireModule('userRun').mark(points,callback); 
      
  
    },
    openBottomPopupShow () {
        let self = this;
        eeui.keyboardHide();
         if(self.schoolCList.length==1){
              self.schoolPickT = self.schoolCList[0].name;
              self.setRunInfo.campus_id=self.schoolCList[0].id;
              self.mapSet();
              return;
          } 
           self.isBottomShow2 = true;
          // if(self.schoolText=='请选择校区'){
          //     self.isBottomShow2 = true;
          // }else{
          //   self.isBottomShow2 = false;
          //   self.mapSet();
          // }   
    },
    popupBottomShow(){
       this.isBottomShow2 = false;
    },
    popupRightShow(){
        this.isRightShow = true;
       
    },
    popupRightHide(){
        this.isRightShow = false;
        // this.schoolText='请选择校区';
        // if(this.schoolCList.length!=0){
        //   if(this.schoolCList.length==1){
        //     this.schoolPickT = this.schoolCList[0].name;
        //     this.setRunInfo.campus_id=this.schoolCList[0].id;
        //   }else{
        //     this.schoolPickT='';
        //   } 
        // }  
        // this.points=[];
        // this.ponitList=[];
    },
    getSchoolList(){
        let self = this;  
        stream.fetch({
            method:'GET',
            url:API.baseUrl + API.getRunCampus+ '?school_id=' + self.userInfo.school_id,
            type:'json',
            headers:{
                Authorization:eeui.getCaches('token', null).token
            }
        },(res)=>{
            if(res.status == '200'){
                self.schoolCList=res.data;
                 self.schoolCList.forEach(function(val,idnex){
                    if(val.id==self.campus_id){
                        self.schoolPickT=val.name;
                    }else{
                    }
                    self.trackNew.push({campus_id:val.id,list:[],name:val.name,downShow:false});
                    // self.trackNew2.push({campus_id:val.id,list:self.points});
                  })
                  // if(self.schoolCList.length==1){
                  //     self.schoolPickT = self.schoolCList[0].name;
                  //     self.setRunInfo.campus_id=self.schoolCList[0].id;
                  //     self.isBottomShow2 = false;
                  //     self.mapSet();
                  //     return;
                  // } 
                  // if(self.schoolText=='请选择校区'){
                  //     self.isBottomShow2 = true;
                  // }else{
                  //   self.isBottomShow2 = false;
                  //   self.mapSet();
                  // }
            }else{
              eeui.toast({
                  message:decodeURIComponent(res.headers['x-mzq-message']),
                  gravity:'top'
              });
              self.isRightShow = false;
              self.trackShow=false;
              self.setRunInfo.track_map_status=0;          
              return false
            }
        })
    },
    pickSchollList(){
        let self = this;
         let pickSName =[];
        let pickSIn=[];
        eeui.toastClose();
        if(self.schoolCList.length>1){
           self.schoolCList.forEach(function(val,index){  
                    if(val.name && val.name.length>0){
                          pickSName.push(val.name);
                          pickSIn.push(val.id);
                    }
                })
                picker.pick({
                    items: pickSName
                }, event => {
                    if (event.result === 'success') {
                        self.schoolText = pickSName[event.data];
                        self.setRunInfo.campus_id=pickSIn[event.data];
                    }
                })
        }    
    },
    startSure(){
      let self = this;   
      if (self.schoolText=="请选择校区") {
          eeui.toast({
              message:'请选择校区',
              gravity:'top' 
          });
          return false
      };
      self.isBottomShow2 = false;
      self.schoolPickT=self.schoolText;
      self.mapSet();
    },
    addBoyItem(){
      this.setRunInfo.boy_list.push({min:0,max:0,point:0,isaddShow:false,isdelShow:true});
    },
    delBoyItem(){
      this.setRunInfo.boy_list.pop({min:0,max:0,point:0,isaddShow:false,isdelShow:true});
    },
    addGirlItem(){
      this.setRunInfo.girl_list.push({min:0,max:0,point:0,isaddShow:false,isdelShow:true});
    },
    delGirlItem(){
      this.setRunInfo.girl_list.pop({min:0,max:0,point:0,isaddShow:false,isdelShow:true});
    },
    createRun(){
          let self = this;
          
    },  
    setover() {
        let self = this;
        let delete_flag = true;
        self.addBoyList=[];
        self.addGirlList=[];
        self.setRunInfo.boy_list.forEach(function(val,index){
          let boyDataInfo = {min:val.min*1000,max:val.max*1000,point:val.point};
          self.addBoyList.push(boyDataInfo)
        });
        self.setRunInfo.girl_list.forEach(function(val,index){
          let girlDataInfo = {min:val.min*1000,max:val.max*1000,point:val.point};
          self.addGirlList.push(girlDataInfo)
        });

//  self.ponitList.forEach(function(val,index){
//             self.setRunInfo.track_map_list.push({campus_id:self.setRunInfo.campus_id,list:val})
//         })

        // console.log( self.setRunInfo.track_map_list)
        if(self.runTitle==''){
             eeui.toast({
                  message:'请输入项目名称',
                  gravity:'top'
              });
              return false;
        }

        if(self.setRunInfo.track_map_status==1){
           if(self.schoolPickT==''){
              eeui.toast({
                  message:'请设置打卡点，如不设置，请关闭“打卡轨迹显示”',
                  gravity:'top'
              });
              return false;
           } 
            self.trackNew.forEach(function(val,index){
              if(val.list.length==0){
                   delete_flag = false 
              } 
            })
             if(!delete_flag) {
                eeui.toast({
                    message:'，每个校区下请添加至少一条运动轨迹，如不设置，请关闭“打卡轨迹显示”',
                    gravity:'top'
                })
                return;
            }
        }

         if(self.setRunInfo.boy_km==0){
              eeui.toast({
                  message:'请设置本学期目标(男)',
                  gravity:'top'
              });
              return false;
          }

          if(self.setRunInfo.boy_min==0){
              eeui.toast({
                  message:'请设置单次最低多少哦(男)',
                  gravity:'top'
              });
              return false;
          }

          if(self.setRunInfo.boy_max==0){
              eeui.toast({
                  message:'请设置单次最高多少哦(男)',
                  gravity:'top'
              });
              return false;
          }
          if(self.setRunInfo.girl_km==0){
              eeui.toast({
                  message:'请设置本学期目标(女)',
                  gravity:'top'
              });
              return false;
          }

          if(self.setRunInfo.girl_min==0){
              eeui.toast({
                  message:'请设置单次最低多少哦(女)',
                  gravity:'top'
              });
              return false;
          }

          if(self.setRunInfo.girl_max==0){
              eeui.toast({
                  message:'请设置单次最高多少哦(女)',
                  gravity:'top'
              });
              return false;
          }


        if(parseInt(self.setRunInfo.boy_km)<=parseInt(self.setRunInfo.boy_min)){
              eeui.toast({
                  message:'最终目标不得低于单次最高和最低哦(男)',
                  gravity:'top'
              });
              return false;
          }
          if(parseInt(self.setRunInfo.boy_km)<=parseInt(self.setRunInfo.boy_max)){
              eeui.toast({
                  message:'最终目标不得低于单次最高和最低哦(男)',
                  gravity:'top'
              });
              return false;
          }

          if(parseInt(self.setRunInfo.boy_max)<parseInt(self.setRunInfo.boy_min)){
               eeui.toast({
                  message:'单次最低不得高于单次最高哦(男)',
                  gravity:'top'
              });
              return false;
          }

           if(parseInt(self.setRunInfo.girl_km)<=parseInt(self.setRunInfo.girl_min)){
              eeui.toast({
                  message:'最终目标不得低于单次最高和最低哦(女)',
                  gravity:'top'
              });
              return false;
          }
          if(parseInt(self.setRunInfo.girl_km)<=parseInt(self.setRunInfo.girl_max)){
              eeui.toast({
                  message:'最终目标不得低于单次最高和最低哦(女)',
                  gravity:'top'
              });
              return false;
          }

          if(parseInt(self.setRunInfo.girl_max)<parseInt(self.setRunInfo.girl_min)){
               eeui.toast({
                  message:'单次最低不得高于单次最高哦(女)',
                  gravity:'top'
              });
              return false;
          }
          

          // if(self.setRunInfo.percentage==0){
          //     eeui.toast({
          //         message:'请设置成绩比例哦',
          //         gravity:'top'
          //     });
          //     return false;
          // }


        if(self.loading==true){
            self.setRunInfo.client_show=1
        }else{
          self.setRunInfo.client_show=0
        }



         self.trackNew2.forEach(function(val,index){
            self.setRunInfo.track_map_list.push({campus_id:val.campus_id,list:val.list})
        })


        
        stream.fetch({
              method:'POST',
              type:'json',
              url:API.baseUrl + API.createRun,
              body:JSON.stringify(
                  {
                      title:self.runTitle,
                      course_class_id:self.id
                  }
              ),
              headers:{
                'Content-Type':'application/json',
                Authorization:eeui.getCaches('token', null).token
              }
          },res=>{
              if(res.status == '200'){
                  self.course_class_run_id = res.data.course_class_run_id; 
                   
                   let parmars ={
                          course_class_run_id:self.course_class_run_id,
                          boy_km:self.setRunInfo.boy_km*1000,
                          boy_min:self.setRunInfo.boy_min*1000,
                          boy_max:self.setRunInfo.boy_max*1000,
                          girl_km:self.setRunInfo.girl_km*1000,
                          girl_min:self.setRunInfo.girl_min*1000,
                          girl_max:self.setRunInfo.girl_max*1000,
                          client_show:self.setRunInfo.client_show,
                          percentage:self.setRunInfo.percentage,
                          s_time:self.setRunInfo.startTime+':00',
                          e_time:self.setRunInfo.endTime+':00',
                          track_map_list:self.setRunInfo.track_map_list,
                          track_map_status:self.setRunInfo.track_map_status,
                          boy_list:self.addBoyList,
                          girl_list:self.addGirlList        
                  }
     
                  stream.fetch({
                        url:API.baseUrl + API.setRunSave,
                        method:'POST',
                        type:'json',
                        headers:{
                            'Content-Type':'application/json',
                            Authorization:eeui.getCaches('token', null).token
                        },
                        body:JSON.stringify(parmars)
                    },(res)=>{

                        if(res.status == 200){
                            self.courser_runId=res.data.course_run_id;
                            eeui.openPage({
                                url: 'layoutPage.js',
                                statusBarColor:'#1eb76e',
                                animated:false,
                                params:{courseTitle:self.courseTitle,title:self.futitle,id:self.id,courseId:self.course_id}
                            }, function(result) {
                            }); 
                        }else{
                          eeui.toast({
                              message:decodeURIComponent(res.headers['x-mzq-message']),
                              gravity:'top'
                          });
                          return false;
                        }
                        
                    })

              }else{
                  eeui.toast({
                      message:decodeURIComponent(res.headers['x-mzq-message']),
                      gravity:'top'
                  })
                  return;
              }
              
          })

    },
    saveTrack(){
      let self = this;
      let delete_flag = true
      self.trackNew.forEach(function(val,index){
          if(val.list.length==0){
             delete_flag = false 
          }   
     })
      if(!delete_flag) {
          eeui.toast({
              message:'每个校区下请添加至少一条运动轨迹，如不设置，请关闭“打卡轨迹显示”',
              gravity:'top'
          })
          return;
      }
      self.isRightShow = false;
    },
    openMask(e) {
      this.maskShow = true;
      this.hasAnimation = true;
    },
    openMask2(e) {
      this.maskShow2 = true;
      this.hasAnimation2 = true;
    },
    wxcMaskSetHidden() {
      this.maskShow = false;
    },
    wxcMaskSetHidden2() {
      this.maskShow2 = false;
      // if(this.checkedList.length == '7'){
      //     this.dataTime = '每天';
      // }else{
      this.dataTime = this.checkedList.join("/");
      //}
    },
    openBottomPopup() {
      this.isBottomShow = true;
    },
    //非状态组件，需要在这里关闭
    popupOverlayBottomClick() {
      this.isBottomShow = false;
    },
    pickDate(val) {
      picker.pickDate(
        {
          value: this.value
        },
        event => {
          if (event.result === "success") {
            this.timeStartValue = event.data;
          }
        }
      );
    },

    pickTime() {
      picker.pickTime(
        {
          value: this.dateStartValue
        },
        event => {
          if (event.result === "success") {
            this.dateStartValue = event.data;
          }
        }
      );
    },
    pickTime2(){
      picker.pickTime(
        {
          value: this.dateEndValue
        },
        event => {
          if (event.result === "success") {
            this.dateEndValue = event.data;
          }
        }
      );
    },
    pickTimeClose(){
      if(this.dateStartValue=='选择开始时间'){
        eeui.toast({
            message:'请选择开始时间',
            gravity:'top'    
        });
        return false;
      }
      if(this.dateEndValue=='选择结束时间'){
         eeui.toast({
            message:'请择结束时间',
            gravity:'top'    
        });
        return false;
      }
      this.isBottomShow=false;
      this.setRunInfo.startTime=this.dateStartValue;
      this.setRunInfo.endTime=this.dateEndValue;

    },
    wxcCheckBoxListChecked(e) {
      this.checkedList = e.checkedList;
    },
    wxcCheckBoxItemChecked(e) {
      eeui.toast(e.checked);
    },
    goback(){
      let self = this;
       eeui.openPage({
          url: 'layoutPage.js',
          statusBarColor:'#1eb76e',
          animated:false,
          params:{courseTitle:self.courseTitle,title:self.futitle,id:self.id,courseId:self.course_id}
      }, function(result) {
          //......
      }); 
    },
    getUserInfo(){
        var self = this;
        stream.fetch({
            url:API.baseUrl + API.getUserInfo,
            method:'GET',
            type:'json',
            headers:{
                Authorization:eeui.getCaches('token', null).token
            }

        },(res)=>{
      
            if(res.status == 200){
                self.userInfo = res.data;   
                self.getSchoolList(); 
            }else{
               if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }
            }
        })
    },
    deteleObject(obj) {
        var uniques = [];
        var stringify = {};
        for (var i = 0; i < obj.length; i++) {
            var keys = Object.keys(obj[i]);
            keys.sort(function(a, b) {
                return (Number(a) - Number(b));
            });
            var str = '';
            for (var j = 0; j < keys.length; j++) {
                str += JSON.stringify(keys[j]);
                str += JSON.stringify(obj[i][keys[j]]);
            }
            if (!stringify.hasOwnProperty(str)) {
                uniques.push(obj[i]);
                stringify[str] = true;
            }
        }
        uniques = uniques;
        return uniques;
    },
    tabShow(item,index){
    
       item.downShow=!item.downShow;
    }
  },
  watch: {
    editIndex(val){
      this.editIndex=val;
    },
    editIndex1(val){
      this.editIndex1=val;
    },
    delIndex(val){
      this.delIndex=val;
    },
    trackNew(val){
      this.trackNew=val
    },
    trackNew2(val){
      this.trackNew2=val
    },
    points(val){
       this.points=val
     //   console.log('watch',this.trackNew3)
    }
  },
  created() {
    // 添加 字体图标
    let domModule = weex.requireModule("dom");
    domModule.addRule("fontFace", {
      fontFamily: "iconfont",
      src: "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
    });
    this.getUserInfo();
    
    eeui.keyboardHide();
    //拦截返回
    let platform = WXEnvironment.platform.toLowerCase();
    let self = this;
    if(platform!='ios'){
        eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
          eeui.toastClose();
            eeui.openPage({
                  pageName: 'layout',
                  pageType: 'app',
                  url: 'layoutPage.js',
                  params:{courseTitle:self.courseTitle,title:self.futitle,id:self.id,courseId:self.courseId}
              }, function(result) {
                  //......
              });
      });
    }
  },
  mounted () {
      var self = this;
     let trackL=[];
      let platform = WXEnvironment.platform.toLowerCase();  
     //安卓返回值
      if(platform!='ios'){
         globalEvent.addEventListener("markCallback", (data)=> { 
            self.points=data.install;
            if(data.install.length>0){
               if(self.editIndex===''){
                  self.editIndex='';
                  trackL.push({campus_id:self.setRunInfo.campus_id,list:self.points,name:self.schoolPickT});
                  self.trackNew2=trackL;
                  let flag =self.trackNew.find(item1 => (item1.campus_id === self.setRunInfo.campus_id)&&(item1.name === self.schoolPickT));
                  flag.list.push(self.points);
                  
                  self.ponitList.push(data.install);
               }else {
                  self.$set(self.trackNew[self.editIndex1].list,self.editIndex,self.points);
                  
               }  
            } 

        }); 
      }
      
      if(platform==='ios'){
          globalEvent.addEventListener("ios_pointsDataCallback", (data)=> { 
            self.points=data;
            if(data.length>0){
              if(self.editIndex===''){
                self.editIndex='';
                  trackL.push({campus_id:self.setRunInfo.campus_id,list:self.points,name:self.schoolPickT});
                  self.trackNew2=trackL;
                  let flag =self.trackNew.find(item1 => (item1.campus_id === self.setRunInfo.campus_id)&&(item1.name === self.schoolPickT));
                  flag.list.push(self.points);
                  self.ponitList.push(data);
               }else{
                  self.$set(self.trackNew[self.editIndex1].list,self.editIndex,self.points);
               }   
            }
            
        });
      }  
  }
 
};
</script>
<style scoped>
.app{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color:#fff;

}
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}

.icon11{
        color: #ffffff;
        width: 100px;
        height:100px;
        font-size:40px;
    }
.headtext {
  font-size: 30px;
  color: #ffffff;
}
.settab {
  width: 690;
  margin-left: 30;
}
.setItem {
  flex-direction: row;
  justify-content: space-between;
  height: 100;
  border-bottom-color: #c2c2c2;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  align-items: center;
}
.rightArrow {
  font-size: 40;
  font-family: iconfont;
  color: #c2c2c2;
  margin-left: 30;
}
.settabicon {
  font-size: 40;
  font-family: iconfont;
  color: #1eb76e;
}
.left {
  flex-direction: row;
  align-items: center;
}
.right {
  flex-direction: row;
  align-items: center;
}
.settabtext {
  font-size: 28;
  color: #666;
  margin-left: 20;
}
.righttext {
  font-size: 28;
  color: #333;
}
.setbigItem {
  border-bottom-color: #c2c2c2;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 30;
}
.setbigline {
  flex-direction: row;
  align-items: center;
  margin-top: 30;
}
.inputBox {
  width: 60;
  height: 40;
  background-color: #e9e9e9;
  text-align: center;
  line-height: 40;
  font-size: 26;
  margin-left: 255;
}
.inputBoxM {
  width: 60;
  height: 40;
  background-color: #e9e9e9;
  text-align: center;
  line-height: 40;
  font-size: 26;
  margin-left: 20;
}
.comp {
  font-size: 28;
  color: #666;
  margin-left: 20;
}
.ml60 {
  margin-left: 60;
}
.ml44 {
  margin-left: 64;
}
.additem {
  font-size: 36;
  font-family: iconfont;
  color: #ce7d14;
  margin-left: 10;
}
.deleteIcon {
  font-size: 37;
  font-family: iconfont;
  color: #d82e61;
  margin-left: 8;
}
.commit {
  width: 690;
  margin-left: 30;
  height: 80;
  margin-top: 50;
  margin-bottom: 50;
  background-color: #1eb76e;
}
.maskTit {
  font-size: 28;
  margin-top: 20;
  color: #333;
  border-bottom-color: #c2c2c2;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 20;
  padding-left: 20;
}
.enterinputBox {
  height: 250;
}
.enterMa {
  border-width: 1px;
  border-style: solid;
  border-color: #c2c2c2;
  width: 400;
  height: 80;
  margin-left: 50;
  margin-top: 80;
  padding-left: 10;
}
.sureBtn {
  width: 440px;
  height: 60;
  margin-left: 30;
}
.databox {
  font-size: 32;
  border-bottom-color: #c2c2c2;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  padding-bottom: 20;
  padding-top: 20;
  padding-left: 20;
  /* font-weight: bold; */
}
.timebox {
  margin-top: 20;
  margin-left: 20;
  flex-direction: row;
}
.timedata {
  font-size: 28;
  padding-left: 30;
  padding-right: 30;
  padding-top: 10;
  padding-bottom: 10;
  border-color: #c2c2c2;
  border-style: solid;
  border-width: 1px;
  margin-right: 20;
  border-radius: 8;
  margin-top: 20;
}
.timedata2 {
  font-size: 28;
  padding-left: 30;
  padding-right: 30;
  padding-top: 10;
  padding-bottom: 10;
  margin-right: 10;
  border-radius: 8;
  margin-top: 20;
}
.cur {
  background-color: #1eb76e;
  color: #ffffff;
}
.dataList {
  flex-direction: row;
  margin-left: 80;
  margin-top: 60;
}
.sureBtn2 {
  width: 690;
  margin-left: 30;
  margin-top: 160;
  height: 80;
}
.databutton {
  width: 600px;
  height: 80px;
  margin-left: 20;
  margin-top: 30;
}
.inputL{
  margin-left:98px;
}
.popupBtn{
    flex-direction:row;
    align-items:center;
    justify-content: space-between; 
}
.pbtn{
    border-radius:0;
    width:375px;
    height:70px;  
}
.sureB{
    background-color: #08ce7f;
}
.cancleB{
   background-color: #bbb;
}
.setbodyItem{
    flex-direction: row;
    align-items: center;
    padding-top: 50px;
}
.setbodyText{
    font-size: 30px;
    margin-right: 20px;
}
.setBodycont{
    align-items: center;
}
.setSelStudent{
    font-size: 30px;
    width: 420px;
    height: 60px;
    border-width: 1px;
    border-color: #999;
    border-style: solid;
    line-height: 60px;
    padding-left: 10px;
    border-radius: 8px;
}
.grey{
    color: #999;
}

.punchWrap{
  padding:30px 30px;
}
.addBtn{
  width:690px;
  border-color:#1eb76e;
  border-style:solid;
  border-width:2px;
  background-color:#fff;
  border-radius:10px;
  align-items:center;
  
}
.icon22{
    color: #1eb76e;
    font-size:42px;
    width:60px;
    height:60px;
}
.trajectory{
  flex-direction:row;
  align-items:center;
  margin:26px 18px 8px;
}
.btnlf{
  flex:1;
}
.tbtn1{
   width:150px;
  height:60px;
  line-height: 60px;
  border-radius:10px;
   text-align: center;
  color: #fff;
  font-size:28px;
}
.btnrl{
  flex-direction:row;
  align-items:center;
}
.tbtn2{
  margin-left:10px;
}
.fixedBtn{
  padding:30px 30px 0;
  flex-direction:row;
  align-items:center;
}
.pbtn2{
  border-radius:0;
  flex:1;
  height:90px;  
}
.sureB1{
    background-color: #08ce7f;
    margin-left:20px;
}
.cancleB1{
   background-color: #bbb;
}
.selSelInput{
    font-size: 30px;
    width: 340px;
    height: 60px;
    border-width: 1px;
    border-color: #999;
    border-style: solid;
    line-height: 60px;
    padding-left: 10px;
    border-radius: 8px;
}
.rightInput{
    width: 500;
    height: 90;
    font-size: 30px;
    text-align: right;
    padding-right: 55px;

}
.tipst{
  color: #fe7d77;
  font-size:26px;
  padding-top:50px;
  padding-left:28px;
  
}
.list-input-item { 
        width: 690px;
        height: 90px;
        flex-direction: row;
        align-items: center;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #fafafa;
        position: relative;

    }
    .rx{
        font-size: 30px;
        color: #333333;
    }
    .num1{
        height: 28;
        width: 28;
        border-radius: 100;
        background-color: #f7b027;
        text-align: center;
        line-height: 28;
        color: #ffffff;
        margin-left: 10px;
    }
    .downIcon{
        width: 80px;
        height: 90px;
        color: #bbb;
        position: absolute;
        right: 20px;
        top: 0;
        
    }
</style>