<template>
  <div class="app">
    <navbar class="navbarb">
        <navbar-item type="left" @click="goback">
            <icon content="md-arrow-back" class="icon11"></icon>
        </navbar-item>
      <navbar-item type="title">
        <text class="headtext">课程设置</text>
      </navbar-item>
    </navbar>
    <scroller class="scroller" :class="[cliindex == 1 ? 'scrollcc' : '']">
      <div class="settab">
        <div class="setItem">
          <div class="left">
            <text class="settabicon">&#xe676;</text>
            <text class="settabtext">绑定运动</text>
          </div>
          <div class="right">
            <text class="righttext">{{runTitle}}</text>
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

      <button @click="setover" class="commit" :eeui="{text:'提交',backgroundColor:'#1eb76e'}"></button>
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
          <div v-if="ponitList.length>0">
            <div class="trajectory" :key="index" v-for="(points,index) in ponitList" >
                <div class="btnlf">
                  <button class="tbtn1" :eeui="{text:'轨迹'+(index+1), borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" ></button>
                </div> 
                <div class="btnrl">
                  <button class="tbtn1" :eeui="{text:'编辑', borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" @click="mapEdit(points)"></button>
                  <button class="tbtn1 tbtn2" :eeui="{text:'删除', borderWidth:2,borderColor:'#1eb76e',backgroundColor:'#1eb76e'}" @click="delMap(points)"></button>
                </div>
            </div>
          </div>
      </div>
      <div class="fixedBtn">
          <button class="cancleB1 pbtn2" :eeui="{text:'取消'}" @click="popupRightHide"></button>
          <button class="sureB1 pbtn2" :eeui="{text:'确定'}" @click="saveTrack"></button>
      </div>
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
  </div>
</template>
<script>
import { WxcMask, WxcPopup, WxcCheckboxList } from "weex-ui";
const stream = app.requireModule('stream');
const picker = weex.requireModule("picker");
const globalEvent = weex.requireModule('globalEvent');
const dom = weex.requireModule('dom')
import API from '../fetch/api/apis'
export default {
  components: { WxcMask, WxcPopup, WxcCheckboxList },
  props:['runId','runTitle'],
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
      points:[],
      ponitList:[],
      setRunInfo:{
        track_map_status:0,
        startTime:'05:00',
        endTime:'2:00',
        boy_km:0,
        boy_min:0,
        boy_max:0,
        boy_list:[
          {min:0,max:0,point:0,isaddShow:true,isdelShow:false}
        ],
        girl_km:0,
        girl_min:0,
        girl_max:0,
        girl_list:[
           {min:0,max:0,point:0,isaddShow:true,isdelShow:false}
        ],
        percentage:0,
        runSetShow:false,
        campus_id:0, 
        client_show:0,
        track_map_list:[
          {
            campus_id:0,
            list:[]
          }
        ]
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
      cliindex:0
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
        this.track_map_status=0;
      }else{
        this.trackShow=true;
        this.track_map_status=1;
      }
    },
    //地图打点设置
    mapSet(){
      var self = this; 
      self.isBottomShow2 = false;  
      //ios 返回值
      var callback = function (data) { 
        self.points = data;
      }
      
      weex.requireModule('userRun').mark(self.points,callback); 
    },
    mapEdit(points){
      var self = this; 
      console.log(points)
      weex.requireModule('userRun').mark(points);

    },
    delMap(points){
      let self = this;
      //删除打卡的点 
      // this.mapPointList.splice(index,0);
      // this.addindex--;

    //   let index = self.points.indexOf(points);
    //   if (index > -1) {
    //      self.points.splice(index, 1);
    //   }

    //  //删除打卡的赋值

     
      let index1 = self.ponitList.indexOf(points);
      if (index1 > -1) {
          self.ponitList.splice(index1, 1);
      }

  
    //   var callback = function (data) { 
    //     self.points = data;
    //   }
    //   weex.requireModule('userRun').mark(points,callback); 
      
  
    },
    openBottomPopupShow () {
        let self = this;
        self.isBottomShow2 = true;
        eeui.keyboardHide();
    },
    popupBottomShow(){
       this.isBottomShow2 = false;
    },
    popupRightShow(){
        this.isRightShow = true;
    },
    popupRightHide(){
        this.isRightShow = false;
        this.schoolText='请选择校区';
        this.schoolPickT='';
        this.points=[];
        this.ponitList=[];
    },
    pickSchollList(){
        let self = this;
        eeui.toastClose();
        let pickSName =[];
        let pickSIn=[];
        stream.fetch({
            method:'GET',
            url:API.baseUrl + API.getRunCampus+ '?school_id=' + '76',
            type:'json',
            headers:{
                Authorization:eeui.getCaches('token', null).token
            }
        },(res)=>{
            if(res.status == '200'){
                self.schoolCList=res.data;
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
                        self.setRunInfo.track_map_list[0].campus_id=pickSIn[0];
                    }
                })
            }else{
                eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                return false
            }
        })
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
    setover() {
        let self = this;
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


        if(self.track_map_status==1){
           if(self.schoolPickT==''){
              eeui.toast({
                  message:'请设置打卡点',
                  gravity:'top'
              });
              return false;
           } 
           if(self.points.length==0){
              eeui.toast({
                  message:'请添加运动轨迹',
                  gravity:'top'
              });
              return false;
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

          if(self.setRunInfo.percentage==0){
              eeui.toast({
                  message:'请设置成绩比例哦',
                  gravity:'top'
              });
              return false;
          }


        if(self.loading==true){
            self.setRunInfo.client_show=1
        }else{
          self.setRunInfo.client_show=0
        }

        stream.fetch({
            url:API.baseUrl + API.setRunSave,
            method:'POST',
            type:'json',
            headers:{
                'Content-Type':'application/json',
                Authorization:eeui.getCaches('token', null).token
            },
            body:JSON.stringify({
                course_class_run_id:self.runId,
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
                boy_list:self.addBoyList,
                girl_list:self.addGirlList
           
        })
        },(res)=>{
            if(res.status == 200){
                self.courser_runId=res.data.course_run_id;
                eeui.openPage({
                    url: '../layoutPage.js',
                    statusBarColor:'#1eb76e',
                    animated:false,
                    params:{courseTitle:self.courseTitle,title:self.futitle,id:self.id,courseId:self.course_id}
                }, function(result) {
                    //......
                }); 
            }else{
              eeui.toast({
                  message:decodeURIComponent(res.headers['x-mzq-message']),
                  gravity:'top'
              });
              return false;
            }
            
        })
    //   eeui.openPage(
    //     {
    //       pageName: "",
    //       pageType: "app",
    //       url: "layoutPage.js",
    //       params: { courseTitle: this.courseTitle, title: this.futitle, id: this.id }
    //     },
    //     function(result) {
    //       //......
    //     }
    //   );
    },
    saveTrack(){
      let self = this;
      if (self.ponitList.length==0) {
             eeui.toast({
                message:'请添加运动轨迹',
                gravity:'top'
            })
            return false
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
       this.$emit("runclose");
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
    setKeyBord(){
      let variable = eeui.keyboardStatus();
      this.cliindex=1;
     
    },
    setKeyBord1(){
      let variable = eeui.keyboardStatus();
     this.cliindex=0;
     
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
    //拦截返回


    eeui.setPageBackPressed(
      {
        pageName: "set.js"
      },
      function() {
        //返回键触发事件
      }
    );
  },
  watch:{
   
  },
  mounted () {
      var self = this;
     //安卓返回值
      globalEvent.addEventListener("markCallback", (data)=> {
          if(data.install.length>0){
            self.ponitList.push(data.install);
          }
      });    
  },
  created(){
    eeui.keyboardHide();
    
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
.scroller{
  height:1500px;
}
.scrollcc{
  height:800px;
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
  margin:26px 0 8px;
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
</style>