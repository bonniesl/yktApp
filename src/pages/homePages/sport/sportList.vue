<template>
  <div class="app">
    <navbar class="navbarb">
      <navbar-item type="back"></navbar-item>
      <navbar-item type="title">
        <text class="navtext">学生列表</text>
      </navbar-item>
      
    </navbar>

    <div class="searchBox">
      <div class="searchleft" @click="isPopSerShow">
        <text class="searchleftText">全部成员（{{all_count}}）</text>
         <icon 
        style="width:50px; height:50px;"
        :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#000000'}">
        </icon>
        <!--div class="moreLIst" @click="isRightClick">
             <icon 
            style="width:50px; height:32px;"
            :eeui="{content:'ios-more',fontSize:'32px', color:'#c2c2c2'}"></icon>
        </div-->
      </div>
      <div class="searchright">
        <input class="searchInput" type="text" placeholder="请输入姓名、学号" @input="search" />
        <icon
            class="iconFontRight"
          style="width:50px; height:50px;" @click="searchClick"
          :eeui="{content: 'ios-search', fontSize:'60px', color:'#999999'}"
        ></icon>
      </div>
      
    </div>
        <scroller class="scroller" scroll-direction="vertical" show-scrollbar="true">
            <div class="scrollerBox">
                <div class="leftbox">   
                    <div class="ccccc">
                        <div class="leftUserName" v-for="(user,index) in searchData" :key="index">
                            <div class="imgbox" @click.stop="openUserRunList(user.uid,user)">
                                <image class="img" :src="user.avatar_file === ''? 'http://thirdwx.qlogo.cn/mmopen/Q3auHgzwzM67Ribu8ic30zf9EPX82UyoPyRRbFUr5D2t4ITQO3gSwrGXia90npcrxU2qmHml4pY2sPK1Tv7SoXKmYbRR4DibA9mRCbKT25MXOFM/132' : user.avatar_file"></image>
                                <text class="sexLeft">{{user.sex | sexfilder}}</text>
                            </div>
                            <div class="userName"  @click.stop="openUserRunList(user.uid,user)">
                                <text class="name">{{user.name}}</text>
                                <text class="schoolNum">{{user.student_id}}</text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rightbox">
                    <scroller class="innerscroller" scroll-direction="horizontal" show-scrollbar="false"  @scroll="scroll">  
                        <div class="rightNavbar" ref="rightNavbar">
                             <div class="rightnavText" v-for="(item,index) in searDate" :key="index">
                               <text class="txtCC">{{item}}</text>
                               <text class="txtCC">（公里）</text>
                            </div>
                            <text class="rightnavText" v-if="isStu!='student'">状态</text>
                            <text class="rightnavText" v-if="isStu!='student'">备注</text>
                            <text class="rightnavText" v-if="isStu!='student'">附件</text>
                        </div>
                        <div class="leftUserNav">
                            <text class="leftNavText">学号</text>
                        </div>
                        <div class="rightNav11">
                            <div class="rightNav"  v-for="(user,index) in searchData" :key="index">
                                <div class="rightNav1" >
                                
                                    <text class="rightItemText" v-for="(item,idx) in user.timeList" :key="idx" @click.stop="openUserRunList1(item,user.uid,user)">{{item.score==='' ? '-' : (item.score/1000).toFixed(2)}}</text>
                                    <text class="rightItemText" v-if="isStu!='student'" @click.stop="selRadioShow(test_type,user)">{{user.no_run==0 ? '-' : '免跑'}}</text>
                                    <text class="rightItemText" v-if="isStu!='student'" @click.stop="openProve(user)">{{user.no_run_message=='' ? '-' : user.no_run_message}}</text>
                                    <text class="rightItemText" v-if="isStu!='student'" @click.stop="openaAnex(user)">{{user.no_run_src=='' ? '-' : '附件'}}</text>
                                    <!--div class="seeL">
                                        <button class="seeBtn" :eeui="{text:'查看'}" @click="openProve(user)"></button>   
                                    </div-->
                            </div>
                        </div>
                       </div>
                    </scroller>
                </div>
            </div>
            <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
                <loading-indicator class="indicator"></loading-indicator>
                <text class="indicator-text">{{loadingText}} ...</text>
                
            </loading> 
           
        </scroller>
         <!--条件查询-->
         <wxc-mask height="750"
                width="750"
                border-radius="6"
                duration="200"
                mask-bg-color="#ffffff"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :opacity="0"
                :top="210"
                :show="searchShow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="searchWrap">
                <div class="searList">
                    <list>
                        <cell class="searCell" @click="selRadioShow2(orginLabeOne)">
                            <text class="searTxt">学院</text>
                            <div class="searCon">
                                <text class="searResu">{{orginLabeOneVal}}</text>
                                <icon 
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#999999'}">
                                </icon>
                            </div>
                        </cell>
                        <cell class="searCell" @click="selRadioShow2(orginLabeTwo)">
                            <text class="searTxt">专业</text>
                            <div class="searCon">
                                <text class="searResu">{{orginLabeTwoVal}}</text>
                                <icon 
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#999999'}">
                                </icon>
                            </div>
                        </cell>
                        <cell class="searCell" @click="selRadioShow2(orginLabeThree)">
                            <text class="searTxt">年级</text>
                            <div class="searCon">
                                <text class="searResu">{{orginLabeThreeVal}}</text>
                                <icon 
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#999999'}">
                                </icon>
                            </div>
                        </cell>
                        <cell class="searCell" @click="selRadioShow2(orginLabeFour)">
                            <text class="searTxt">班级</text>
                            <div class="searCon">
                                <text class="searResu">{{orginLabeFourVal}}</text>
                                <icon 
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#999999'}">
                                </icon>
                            </div>
                        </cell>
                        <cell class="searCell" @click="selRadioShow2(sexList)">
                            <text class="searTxt">性别</text>
                            <div class="searCon">
                                <text class="searResu">{{sexVal}}</text>
                                <icon  
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-arrow-dropdown',fontSize:'40px', color:'#999999'}">
                                </icon>
                            </div>
                        </cell>
                        <!-- <cell class="searCell searLastC"> -->
                        <cell class="searCell" @click="showReturnCalendar">
                            <text class="searTxt">时间</text>
                            <div class="searCon">
                                 <text class="searResu" v-if="currentDate == ''">请选择时间段</text>
                                 <text class="searResu" v-if="currentDate != ''">{{currentDate[0]}}---{{currentDate[1]}}</text>
                                  <icon  
                                style="width:50px; height:50px;"
                                :eeui="{content:'md-close-circle',fontSize:'40px', color:'#999999'}" @click="clearDate">
                                </icon>
                                <!-- <div class="cellSel">
                                    <text class="timedata" @click="pickTime">{{dateStartValue}}</text>
                                    <text class="timedata" @click="pickTime2">{{dateEndValue}}</text>
                                    <text class="btn" :class="[pickWindex===0 ? 'btnGreem' : '' ]" @click="pickWeek(0)">本周</text>
                                    <text class="btn" :class="[pickWindex==1 ? 'btnGreem' : '' ]" @click="pickMonth(1)">本月</text>
                                </div> -->
                            </div>
                        </cell>
                    </list>
                    <button @click="chaxuanAction" class="searBtn" :eeui="{text:'查询',backgroundColor:'#1eb76e',fontSize:30}"></button>
                </div>
            </div>
        </wxc-mask>
        <!--免跑备注-->
         <wxc-mask width="680"
                height="474"
               :show="isPropShow"
               border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF" 
             :has-animation="false"
              :has-overlay="true"
              :show-close="false"
              :border-radius="10"
              :overlay-can-close="false"
               @wxcMaskSetHidden="wxcMaskSetHidden">
          <scroller>
            <div class="propCon">
                <text class="masktitle">{{anixeList.name}}的备注</text>
                <text class="tiso">备注</text>
                <textarea class="message" v-model="anixeList.no_run_message"></textarea>
               
            </div>
             <div class="popupBtn1"> 
                    <button class="cancleB pbtn" :eeui="{text:'取消'}" @click="isPropShow=false"></button>
                    <button class="sureB pbtn" @click="messUpdate(anixeList)" :eeui="{text:'确定'}"></button>
                </div>  
         </scroller>
        </wxc-mask>
        <!--查看附件-->
        <wxc-popup popup-color="#ffffff"
                :show="annexShow"
                @wxcPopupOverlayClicked="closeAnnex"
                pos="right"
                width="750">
            <div class="anWrap">
                    <navbar class="navbarb">  
                        <navbar-item type="left" @click="fwcolse">
                             <icon content="md-arrow-back" class="icon11"></icon>
                        </navbar-item> 
                        <navbar-item type="title">
                            <text class="headtext">免跑上传</text>
                        </navbar-item>
                    </navbar>
                <wxc-cell title="体测状态"

                    :has-arrow="true"
                    @wxcCellClicked="selRadioShow1(test_type,anixeList)"
                    :has-margin="true"
                    :has-top-border="false">
                    <text class="righttext2">{{noRun==1 ? '免跑' : '默认'}}</text>
                </wxc-cell>
                <div class="anotip">
                    <icon content="tb-write-fill" class="icon12"></icon>
                    <text class="tttt">备注</text>
                </div>
                <textarea class="messagecc" v-model="anixeList.no_run_message"></textarea>
                <text class="c_tips">请在光线好的地方拍摄，保证图片清晰！</text>
                <div class="pictureM">
                    <div class="picFlex">
                        <div class="picUPlad" v-for="(pic,index) in anixeList.no_run_src" :key="index">
                            <image class="uppic" :src="pic" @click.stop="pictureView(pic,index)"></image>
                            <div class="delPic" v-if="delPicShow" @click.stop="del(pic,index)"><image class="del" src="../../../assets/images/closeb.png"></image></div> 
                        </div>
                         <div class="uploadBtn">
                            <div class="upB" @click="uploadPic"><image class="addc" src="../../../assets/images/addphoto.png"></image></div>
                            <div class="upB" @click="delPic"><image class="addr" src="../../../assets/images/removephoto.png"></image></div>
                        </div>
                    </div>
                   
                </div>
                <div class="bottomBtn">
                    <text class="saveBtn" @click="appLyNOrun(anixeList)">保存</text>
                </div>
            </div>    
        </wxc-popup>

        <wxc-page-calendar :date-range="dateRange"
                       :animationType="animationType"
                       :selected-date="selectedDate"
                       :selected-note="selectedNote"
                       :is-range="isRange"
                       :minibar-cfg="minibarCfg"
                       @wxcPageCalendarDateSelected="wxcPageCalendarDateSelected"
                       ref="wxcPageCalendar"></wxc-page-calendar>
        <!--条件查询-->
          <!--wxc-popup popup-color="#ffffff"
                :show="isRightShow"
                @wxcPopupOverlayClicked="popupOverlayClick"
                pos="right"
                width="380">
            <div class="courseSift">
                <div class="cellItem">
                    <text class="tirt">性别</text>
                    <div class="cellSel">
                        <text class="btn" :class="[sexIndex===1 ? 'btnGreem' : '' ]"  @click="sexClick(1)">{{sexBoy | sexfilder}}</text>
                        <text class="btn" :class="[sexIndex===2 ? 'btnGreem' : '' ]" @click="sexClick(2)">{{sexGirl | sexfilder}}</text>
                    </div>
                </div>
                <div class="cellItem">
                    <text class="tirt">时间</text>
                    <div class="cellSel">
                        <text class="timedata" @click="pickTime">{{dateStartValue}}</text>
                        <text class="timedata" @click="pickTime2">{{dateEndValue}}</text>
                        <text class="btn" :class="[pickWindex===0 ? 'btnGreem' : '' ]" @click="pickWeek(0)">本周</text>
                        <text class="btn" :class="[pickWindex==1 ? 'btnGreem' : '' ]" @click="pickMonth(1)">本月</text>
                    </div>
                </div>
                <div class="popupBtn">
                    <button class="cancleB pbtn" :eeui="{text:'取消'}" @click="popupOverlayClick"></button>
                    <button class="sureB pbtn" :eeui="{text:'确定'}"  @click="sureCourse"></button>
                </div>
            </div>
        </wxc-popup-->
         <danSel 
            :danselectShow="danDiaogVal.show" 
            @hideDan="selRadioDialog" 
            :itemList="danDiaogVal.itemList" 
            :itemInfo="danDiaogVal.itemInfo"
            :height="danDiaogVal.heightval" 
            :top="danDiaogVal.top" 
            :curVal="danDiaogVal.curVal"
        ></danSel>
        <danSel 
            :danselectShow="danDiaogVal2.show" 
            @hideDan="selRadioDialog2" 
            :itemList="danDiaogVal2.itemList" 
            :itemInfo="danDiaogVal2.itemInfo"
            :height="danDiaogVal2.heightval" 
            :top="danDiaogVal2.top" 
            :curVal="danDiaogVal2.curVal"
        ></danSel>

        
        
        <failNet v-if="netWorkShow"></failNet>
    </div>
</template>
<script>
const stream = app.requireModule('stream');
import API from '../../../fetch/api/apis';
import { WxcPopup,WxcCell,WxcMask ,WxcPageCalendar } from 'weex-ui';
const eeui = app.requireModule("eeui");
const picker = weex.requireModule("picker");
import failNet from '../../../components/failNet.vue'
const animation = weex.requireModule('animation')
import danSel from '../../../components/radioList.vue'
const picture = app.requireModule("eeui/picture");

export default {
  components: { WxcPopup,failNet,WxcCell,WxcMask,danSel ,WxcPageCalendar },
  data() {
    return {
        userList:[],
        isRightShow:false,
        sexBoy:1,
        sexGirl:2,
        dateStartValue: "选择开始时间",
        dateEndValue: "选择结束时间",
        courseRunId:app.config.params.id,
        s_date:'',
        e_date:'',
        pickWindex:'',
        sexIndex:'',
        searchData:[],
        searchVal:'',
        netWorkShow:false,
        searchShow:false,
        arrawSrc:'../../../assets/images/arrsear.png',
        searDate:[],
        isPropShow:false,
        message:{
            tit:'',
            info:''
        },
        annexPic:'',
        annexShow:false,
        test_type:[
            {text:'免跑',type: 2,checked:false,status:1},
            {text:'默认',type:3,checked:false,status:0}
        ],
        danDiaogVal:{
            show:false,
            itemList:[],
            heightval:160,
            top:400,
            curVal:'',
            itemInfo:[]
        },
        danDiaogVal2:{
            show:false,
            itemList:[],
            heightval:160,
            top:400,
            curVal:'',
            itemInfo:[]
        },
        anixeList:{
            // id:'',
            // user_name:'',
            // no_run:0,
            // no_run_message:'',
            // no_run_src:[]
        },
        annixe:{
            tit:'',
            mess:'',
            pic:[]
        },
        userInfo:'',
        anicoShow:false,
        runId:app.config.params.id,
        delPicShow:false,
        no_run_src:[],
        status:'',
        noRun:0,
        orginLabeOne:[],
        orginLabeOneVal:'全部',
        orginLabeOneId:0,
        orginLabeTwo:[],
        orginLabeTwoVal:'全部',
        orginLabeTwoId:0,
        orginLabeThree:[],
        orginLabeThreeVal:'全部',
        orginLabeThreeId:0,
        orginLabeFour:[],
        orginLabeFourVal:'全部',
        orginLabeFourId:0,
        all_count:'',
        school_id:'',
        sexList:[
            {text:'男',id:1,checked:false,status:'sex'},
            {text:'女',id:2,checked:false,status:'sex'},
            {text:'无',checked:false,status:'sex'},
        ],
        sexVal:'全部',
        sexId:0,
        animationType: 'push',
        currentDate: '',
        selectedDate: [],
        isRange: true,
        calendarTitle: '选择日期',
        dateRange: ['2020-05-01', '2022-01-01'],
        selectedNote: ['开始', '结束'],
        minibarCfg: {
            title: '日期选择'
        },
        pageNum:1,
        loadinging:false,
        loadingText:'加载中',
        isStu:app.config.params.stu
    };
  },
  filters: {
      sexfilder(val){
          if(val == 1){
              return '男';
          }else{
              return '女'
          }
      }
  },
  methods: {
      clearDate(){
         this.currentDate = '';
          this.selectedDate = [];
          this.s_date = '';
          this.e_date = '';
      },
      onloading () {
        //modal.toast({ message: 'Loading', duration: 1 })
        eeui.toast({
            gravity:'center',
            message:this.loadingText + '...'
        })
        this.loadinging = true
        this.pageNum++;
        this.getRunActionList2();
        // setTimeout(() => {
          
        // }, 2000)
      },
     
      showReturnCalendar () {
            this.isRange = true;
            this.searchShow = false;
            setTimeout(() => {
                this.$refs['wxcPageCalendar'].show();
            }, 10);
        },
        wxcPageCalendarDateSelected (e) {
            
            this.selectedDate = e.date;
            this.currentDate = e.date;
            setTimeout(()=>{
                 this.searchShow = true;
            },500)
           
            this.s_date = this.currentDate[0];
            this.e_date = this.currentDate[1];
        },
      search(e){
          var self = this;
          this.searchVal=e.value;   
      },
      isPopSerShow(){
          this.searchShow=true;
      },
      //查询
      chaxuanAction(){
        this.getRunActionList();
      },
      searchClick(){
          //console.log(this.searchVal);
          if(this.searchVal === ""){
              eeui.toast({
                  gravity:'top',
                  message:'请输入搜索内容'
              })
              return;
          }
          this.getRunActionList(this.searchVal);
        //    var self = this;
           
        //   self.searchData = self.userList.filter(function (item) {
        //         let searchField = { user_name: item.user_name,student_id:item.student_id};
        //         return Object.keys(searchField).some(function (key) {
        //             console.log(item[key]);
        //             return String(item[key]).toLowerCase().indexOf(self.searchVal) > -1;
        //         });
        //     })
          // self.userList=self.searchVal ? self.userList.filter(item=>item.user_name.includes(self.searchVal)):self.userList;  
      },
      //获取班级列表
        getRunActionList(keywords){
                  var self = this;
                  let newArr=[];
                  let newArr1=[];
                  let newArr2=[];
                //   console.log(self.s_date);
                //   console.log(self.e_date);
                let keyw = "";
                //console.log(self.orginLabeThreeId,self.orginLabeTwoId);
                self.pageNum = 1;
                if(keywords != null){
                    keyw = "&keywords=" + keywords
                };
            
                  //&keywords=
                   stream.fetch({
                      method:'GET',
                      url:API.baseUrl + API.runUserList2 + '?course_class_run_id=' + self.courseRunId + '&department_id=' + self.orginLabeOneId + '&part_id=' + self.orginLabeTwoId + '&major_id=' + self.orginLabeThreeId + '&class_id=' + self.orginLabeFourId + '&sex=' + self.sexId + '&s_date=' + self.s_date + '&e_date=' + self.e_date + '&limit=' + 50 +`${keyw}`,
                        type:'json',
                        headers:{
                             Authorization:eeui.getCaches('token', null).token
                        }
                       
                  },res=>{
                    
                      if(res.status == '200'){
                          if(res.data.list.length == 0){
                              self.loadingText = '没有更多数据了'
                          }else{
                               self.loadingText = "加载中"
                          }
                          self.loadinging = false
                          self.all_count = res.data.all_count;
                          //console.log(res.data);
                        self.searchData = [];
                        self.userList = res.data.list; 
                        newArr=self.userList;
                        //  //console.log(res.data);
                         newArr.forEach(function(val,index){   
                  
                             val.timeList=[];

                            self.searDate.forEach(function(item1,index){
                                let valItem = { 
                                    "s_date": item1.replace("/","-"),
                                    // "meter": '',
                                    "score":''
                                }
                                
                                val.timeList.push(valItem);
                            })
                   

                            val.timeList.forEach(function(item,idx){
                                if(val.list.length!=0){
                                    for(let x=0;x<val.list.length;x++){ 
                                        if(val.list[x].s_date.indexOf(item.s_date)>-1){ 
                                           // item.meter=val.list[x].metre;  
                                             item.score=val.list[x].score;  
                                            return item.score
                                        }
                                        
                                    }
                                }else{
                                    item.score=''; 
                                }
                                    
                            })
                         
                            if(val.no_run_src!=''){ 
                
                               val.no_run_src=JSON.parse(val.no_run_src);
                            }else{
                                val.no_run_src=[];
                            }

                             self.searchData.push(val)
                             self.searchShow = false;
                             

                         })

                      }else{
                          if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }

                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })

                            setTimeout(()=>{
                                self.loadinging = false
                            },2000)
                      }
                      
                  })
        },
        //加载更多
         getRunActionList2(keywords){
                  var self = this;
                  let newArr=[];
                  let newArr1=[];
                  let newArr2=[];
                //   console.log(self.s_date);
                //   console.log(self.e_date);
                let keyw = "";
                //console.log(self.orginLabeThreeId,self.orginLabeTwoId);
                
                if(keywords != null){
                    keyw = "&keywords=" + keywords
                };
                
                  
                  //&keywords=
                   stream.fetch({
                      method:'GET',
                      url:API.baseUrl + API.runUserList2 + '?course_class_run_id=' + self.courseRunId + '&department_id=' + self.orginLabeOneId + '&part_id=' + self.orginLabeTwoId + '&major_id=' + self.orginLabeThreeId + '&class_id=' + self.orginLabeFourId + '&sex=' + self.sexId + '&s_date=' + self.s_date + '&e_date=' + self.e_date + '&page='+ self.pageNum + '&limit=' + 50 +`${keyw}`,
                        type:'json',
                        headers:{
                             Authorization:eeui.getCaches('token', null).token
                        }
                       
                  },res=>{
                    
                      if(res.status == '200'){
                          if(res.data.list.length == 0){
                              self.loadingText = '没有更多数据了'
                          }else{
                               self.loadingText = "加载中"
                          }
                          self.loadinging = false
                          self.all_count = res.data.all_count;
                          //console.log(res.data);
                        //self.searchData = [];
                        self.userList = res.data.list; 
                        newArr=self.userList;
                        //  //console.log(res.data);
                         newArr.forEach(function(val,index){   
                  
                             val.timeList=[];

                            self.searDate.forEach(function(item1,index){
                                let valItem = { 
                                    "s_date": item1.replace("/","-"),
                                    // "meter": '',
                                    "score":''
                                }
                                
                                val.timeList.push(valItem);
                            })
                   

                            val.timeList.forEach(function(item,idx){
                                if(val.list.length!=0){
                                    for(let x=0;x<val.list.length;x++){ 
                                        if(val.list[x].s_date.indexOf(item.s_date)>-1){ 
                                           // item.meter=val.list[x].metre;  
                                             item.score=val.list[x].score;  
                                            return item.score
                                        }
                                        
                                    }
                                }else{
                                    item.score=''; 
                                }
                                    
                            })
                         
                            if(val.no_run_src!=''){ 
                
                               val.no_run_src=JSON.parse(val.no_run_src);
                            }else{
                                val.no_run_src=[];
                            }

                             self.searchData.push(val)
                             self.searchShow = false;
                             

                         })

                      }else{
                          if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }

                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })

                            setTimeout(()=>{
                                self.loadinging = false
                            },2000)
                      }
                      
                  })
        },
        openProve(user){  
            this.anixeList=user;
            // if(this.message.info==''){
            //      this.isPropShow=false;
            //      eeui.toast({
            //         message: '暂无备注',
            //         gravity: 'middle'
            //     });
            //      return;
            // }
            this.isPropShow=true;
        },
        openaAnex(user){
           
            this.noRun=user.no_run;

            if(typeof(user.no_run_src)=='string'){
                this.$set(user,'no_run_src',JSON.parse(user.no_run_src))   
        
            }
             this.anixeList=user;
            // if(user.uid!=this.userInfo.uid){
            //     this.anicoShow=false;
            // }else{
            //       this.anicoShow=true;
            // }
            this.annexShow=true;
        },
        fwcolse(){
             this.annexShow=false;
        },
        pickWeek(){
            this.pickWindex=0;
            this.s_date=this.getWeekDates()[0]+ (this.dateStartValue=='选择开始时间' ? '' : this.dateStartValue);
            this.e_date=this.getWeekDates()[6]+(this.dateEndValue=='选择结束时间' ? '' : this.dateEndValue);
        },
        pickMonth(){
            this.pickWindex=1;  
            this.s_date=this.showMonthFirstDay()+(this.dateStartValue=='选择开始时间' ? '' : this.dateStartValue);
            this.e_date=this.showMonthLastDay()+(this.dateEndValue=='选择结束时间' ? '' : this.dateEndValue);
        },
        sexClick(index){
            this.sexIndex=index;
        },
        sureCourse(){
            let self = this;
            let url='';
            if(self.sexIndex==='' && self.s_date==='' && self.e_date===''){
                url=API.baseUrl + API.runUserList + '?course_class_run_id=' + self.courseRunId;
            }else if(self.s_date==='' && self.e_date===''){
                 url=API.baseUrl + API.runUserList + '?course_class_run_id=' + self.courseRunId+ '&sex=' + self.sexIndex;
            }else if(self.sexIndex===''){
                url=API.baseUrl + API.runUserList + '?course_class_run_id=' + self.courseRunId+ '&s_date=' + self.s_date+ '&e_date=' + self.e_date;
            }else{
                 url=API.baseUrl + API.runUserList + '?course_class_run_id=' + self.courseRunId+ '&s_date=' + self.s_date+ '&e_date=' + self.e_date+ '&sex=' + self.sexIndex;
            }
        
            stream.fetch({
                    method:'GET',
                    url:url,
                    type:'json',
                    headers:{
                            Authorization:eeui.getCaches('token', null).token
                    }
                },res=>{
                    if(res.status == '200'){
                         self.userList = res.data; 
                         self.isRightShow=false;   
                         self.searchData=self.userList;               
                    }else{
                        eeui.toast({
                            message:decodeURIComponent(res.headers['x-mzq-message']),
                            gravity:'top'
                        })
                    }
                    
                })
        },
         getWeekDates() {
            var new_Date = new Date()
            var timesStamp = new_Date.getTime();
            var currenDay = new_Date.getDay();
            var dates = [];
            for(var i = 0; i < 7; i++) {
                dates.push(new Date(timesStamp + 24 * 60 * 60 * 1000 * (i - (currenDay + 6) % 7)).toLocaleDateString().replace(/\//g, '-'));
            }
            return dates
        },
        showMonthFirstDay()     {     
            var Nowdate=new Date();     
            var MonthFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth(),1);     
           let  M=Number(MonthFirstDay.getMonth())+1     
    
            return MonthFirstDay.getFullYear()+"-"+M+"-"+MonthFirstDay.getDate();     
        },
        showMonthLastDay(){     
            var Nowdate=new Date();     
            var MonthNextFirstDay=new Date(Nowdate.getFullYear(),Nowdate.getMonth()+1,1);     
            var MonthLastDay=new Date(MonthNextFirstDay-86400000);     
           let  M=Number(MonthLastDay.getMonth())+1     
            return MonthLastDay.getFullYear()+"-"+M+"-"+MonthLastDay.getDate();     
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
         　　return tYear+"-"+tMonth+"-"+tDate;
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
         　　return tMonth+"/"+tDate;
        }, 
        doHandleMonth(month){
        　　var m = month;
        　　if(month.toString().length == 1){
        　　　　m = "0" + month;
        　　}
        　　return m;
        }, 
         pickTime() {
          
            picker.pickTime({
                value: this.dateStartValue
            },event => {
                if (event.result === "success") {
                    this.dateStartValue = event.data;
                }
            });
        },
        pickTime2(){
            picker.pickTime({
                value: this.dateEndValue
            }, event => {
                if (event.result === "success") {
                    this.dateEndValue = event.data;
                }
            });
        },
        formatDate(date) {
            var myyear = date.getFullYear();
            var mymonth = date.getMonth()+1;
            var myweekday = date.getDate();
            if(mymonth < 10){
                mymonth = "0" + mymonth;
            }
            if(myweekday < 10){
                myweekday = "0" + myweekday;
            }
            return (myyear+"-"+mymonth + "-" + myweekday);
        },
       getWeekStartDate() {
            var now = new Date(); //当前日期
            var nowDayOfWeek = now.getDay(); //今天本周的第几天
            var nowDay = now.getDate(); //当前日
            var nowMonth = now.getMonth(); //当前月
            var nowYear = now.getYear(); //当前年
            nowYear += (nowYear < 2000) ? 1900 : 0; //
        
            var lastMonthDate = new Date(); //上月日期
            lastMonthDate.setDate(1);
            lastMonthDate.setMonth(lastMonthDate.getMonth()-1);
            var lastYear = lastMonthDate.getYear();
            var lastMonth = lastMonthDate.getMonth();

            var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek);
            return this.formatDate(weekStartDate);
        },

        isRightClick(){
            this.isRightShow=true;
        },
        popupOverlayClick(){
             this.isRightShow=false;
        },
        openUserRunList(uid,user){
            let self=this;
            eeui.openPage({
                url: '../../runPages/sprotreport.js',
                statusBarColor:'#1eb76e',
                pageName:'sprotreport',
                animated:true,
                params:{uid:uid,sdate:self.getDay1(0),user:user}
            }, function(result) {
                //......
            }); 
        },
        openUserRunList1(item,uid,user){
             let self=this;
             let sdate=new Date().getFullYear()+"-"+item.s_date;
            
            eeui.openPage({
                url: '../../runPages/sprotreport.js',
                statusBarColor:'#1eb76e',
                pageName:'sprotreport',
                animated:true,
                params:{uid:uid,sdate:sdate,user:user}
            }, function(result) {
                //......
            }); 
         
        },
        wxcMaskSetHidden(){
            this.searchShow=false;
            this.isPropShow=false;
        
        },
        wxcMaskCloseClick(){
            this.annexShow=false;
        },
         wxcMaskSetHidden1(){
            this.annexShow=false;
        },
        scroll(event){
            let self=this;
            let rightNavEl = self.$refs.rightNavbar;
            animation.transition(rightNavEl, {
            styles: {
                transform: "translateX("+ event.contentOffset.x +")"
            },
            duration: 0, //ms
            needLayout:false,
            // timingFunction: 'linear',
            delay: 0 //ms
            }, function () {
           
            })
        },
        selRadioShow(val,user){
            let self = this;
        
            val.forEach(function(item,index){
                if(item.status==user.no_run){
                     self.$set(item,'checked',true);
                }else{
                    self.$set(item,'checked',false);
                }
            })

            self.danDiaogVal.show=true;
            self.danDiaogVal.itemList = val;
            self.danDiaogVal.itemInfo = user;
        },
        selRadioShow2(val){
                 //判断框的值和顶部距离
            if(val.length>0){
                this.danDiaogVal2.show = true;
                if(val.length*80 >= 900){
                    this.danDiaogVal2.top = 100;
                    this.danDiaogVal2.heightval = 900;
                }else{
                    this.danDiaogVal2.heightval = val.length*80;
                    this.danDiaogVal2.top = 300;
                }

            }else{
                // eeui.toast({
                //     gravity:'top',
                //     message:'请选择上一级'
                // })
            }
            

                     
            
           

            this.danDiaogVal2.itemList = val
        },
        selRadioDialog2(index,status){
            this.danDiaogVal2.show = false;
            if(index != null){
                if(status == 'labeOne'){
                    
                    this.orginLabeOneVal = this.orginLabeOne[index].text;
                    this.orginLabeOneId = this.orginLabeOne[index].id;
                    

                    if(this.orginLabeOne[index].text == '无'){
                        this.orginLabeOneVal = '全部';
                        this.orginLabeTwoVal = '全部';
                        this.orginLabeThreeVal = '全部';
                        this.orginLabeFourVal = '全部';
                        this.orginLabeOneId = 0;
                        this.orginLabeTwoId = 0;
                        this.orginLabeThreeId = 0;
                        this.orginLabeFourId = 0;
                        this.orginLabeTwo = [];
                        this.orginLabeThree = [];
                        this.orginLabeFour = [];
                    }else{
                        this.orginLabeTwoVal = '全部';
                        this.orginLabeThreeVal = '全部';
                        this.orginLabeFourVal = '全部';
                        this.orginLabeTwoId = 0;
                        this.orginLabeThreeId = 0;
                        this.orginLabeFourId = 0;
                        this.setOrganization2(this.school_id,this.orginLabeOneId);
                    }
                        //console.log(index);
                }

                if(status == 'labeTwo'){
                    this.orginLabeTwoVal = this.orginLabeTwo[index].text;
                    this.orginLabeTwoId = this.orginLabeTwo[index].id;
                    if(this.orginLabeTwo[index].text == '无'){

                        this.orginLabeTwoVal = '全部';
                        this.orginLabeThreeVal = '全部';
                        this.orginLabeFourVal = '全部';
                        this.orginLabeTwoId = 0;
                        this.orginLabeThreeId = 0;
                        this.orginLabeFourId = 0;
                        this.orginLabeThree = [];
                        
                    }else{
    
                        this.orginLabeThreeVal = '全部';
                        this.orginLabeFourVal = '全部';
                        this.orginLabeThreeId = 0;
                        this.orginLabeFourId = 0;
                        this.orginLabeFour = [];
                        this.setOrganization3(this.school_id);
                        
                    }
                    //this.setOrganization3(this.school_id);
                }
                if(status == 'labeThree'){
                    this.orginLabeThreeVal = this.orginLabeThree[index].text;
                    this.orginLabeThreeId = this.orginLabeThree[index].id;
                    if(this.orginLabeThree[index].text == '无'){


                        this.orginLabeThreeVal = '全部';
                        this.orginLabeFourVal = '全部';
                        this.orginLabeThreeId = 0;
                        this.orginLabeFourId = 0;
                        this.orginLabeFour = [];
                        
                    }else{
                        this.orginLabeFourVal = '全部';
                        this.orginLabeFourId = 0;
                        this.setOrganization3(this.school_id,this.orginLabeThreeId)
                        
                    }
                    
                }
                if(status == 'labeFour'){
                    this.orginLabeFourVal = this.orginLabeFour[index].text;
                    this.orginLabeFourId = this.orginLabeFour[index].id;
                    if(this.orginLabeFour[index].text == '无'){
                        this.orginLabeFourVal = '全部';
                        this.orginLabeFourId = 0; 
                    }
                    
                }
                if(status == 'sex'){
                    this.sexVal = this.sexList[index].text;
                    this.sexId = this.sexList[index].id;
                    if(this.sexList[index].text == '无'){
                         this.sexVal = '全部';
                        this.sexId = 0; 
                    }
                }
                
            }
        },
        selRadioShow1(val,user){
            let self = this; 
            val.forEach(function(item,index){
                if(self.annexShow==true){
                    
                    if(item.status==self.noRun){
                        self.$set(item,'checked',true);
                    }else{
                        self.$set(item,'checked',false);
                    }     
                    return
                }
                // if(item.status==user.no_run){
                //      self.$set(item,'checked',true);
                // }else{
                //     self.$set(item,'checked',false);
                // }
            })

            self.danDiaogVal.show=true;
            self.danDiaogVal.itemList = val;
            self.danDiaogVal.itemInfo = user;
        },
        messUpdate(item){
             let self = this;
             let status='';
            if(app.config.params.stu=='student'){
                if(self.userInfo.uid!=item.uid){
                     eeui.toast({
                            message:'暂无权限哦',
                            gravity:'top'
                        });
                        self.isPropShow=false;
                        return;
                }
                
            }
            if(item.status==0){
                 if(app.config.params.stu!='student'){
                      status=2;
                   
                 }else{
                      status=0;
                 }
            }else{
                status=item.status
            }
             stream.fetch({
                method:'PUT',
                url:API.baseUrl + API.setNorun,
                type:'json',
                body:JSON.stringify(
                    {
                        course_class_run_user_id:item.id,
                        status:status,
                        no_run_message:item.no_run_message
                    }
                ),
                headers:{
                    'Content-Type':'application/json',
                        Authorization:eeui.getCaches('token', null).token
                }
            },res=>{
          
                 if(res.status == '200'){
        
                    self.$set(item,'no_run_message',item.no_run_message);
                    self.isPropShow=false;
                 }else{
                        eeui.toast({
                            message:'您尚未申请免跑',
                            gravity:'top'
                        });
                 }
                
                
            })
        },
        selRadioDialog(index){
            let self = this;
            self.danDiaogVal.show = false;
            let itemInfo = self.danDiaogVal.itemInfo;
            let status='';

             if(app.config.params.stu=='student'){
                if(self.userInfo.uid!=itemInfo.uid){
                     eeui.toast({
                            message:'暂无权限哦',
                            gravity:'top'
                        });
                        return;
                }
                
            }
         if(index==null){ return false;} 

             
            if(itemInfo.status==1){
             
                status=self.danDiaogVal.itemList[index].type;
            }else if(itemInfo.status==0){
                 if(app.config.params.stu!='student'){
                      status=self.danDiaogVal.itemList[index].type;
                   
                 }else{
                      status=0;
                 }
                
            }else{
                 status=self.danDiaogVal.itemList[index].type;
            }
            self.status=status;   
   
            if(self.annexShow==true){

                 self.noRun=self.danDiaogVal.itemList[index].status;
                return;
            }
        


             stream.fetch({
                method:'PUT',
                url:API.baseUrl + API.setNorun,
                type:'json',
                body:JSON.stringify(
                    {
                        course_class_run_user_id:itemInfo.id,
                        status:status
                    }
                ),
                headers:{
                    'Content-Type':'application/json',
                        Authorization:eeui.getCaches('token', null).token
                }
            },res=>{
        
                 if(res.status == '200'){
                    self.$set(itemInfo,'status',status);
                    self.$set(itemInfo,'no_run',self.danDiaogVal.itemList[index].status);

                 }else{
                       eeui.toast({
                            message:'您尚未申请免跑',
                            gravity:'top'
                        });
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
                    this.school_id = res.data.school_id;
                    this.setOrganization(this.school_id);
                    //console.log(res.data.school_id);
                    // console.log(this.userInfo)
                }else{
                    if(res.status=='-1'){
                        this.netWorkShow=true;
                        return
                    }
                }
                //console.log(res);
            })
        },
        setOrganization(schoolId){
            //this.orginLabeOne = [];
            this.orginLabeTwo = [];
            var self = this;
            stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        if(res.data.organizations.length > 0){
                            for (const val of res.data.organizations) {
                                self.orginLabeOne.push({text:val.label_name,id:val.id,checked:false,status:'labeOne'})
                            }
                             self.orginLabeOne.push({text:'无',checked:false,status:'labeOne'}); 
                        }

                        //console.log(self.orginLabeOne);
                    }
                })
        },
        //组织机构
        setOrganization2(schoolId,id){
            //this.orginLabeOne = [];
            this.orginLabeTwo = [];
            this.orginLabeThree = [];
            this.orginLabeFour = [];
            var self = this;
            stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        if(res.data.organizations instanceof Array){
                            for (const val of res.data.organizations) {
                                
                                if(id === val.id){
                                    for (let val2 of val.children) {
                                        self.orginLabeTwo.push({text:val2.label_name,id:val2.id,checked:false,status:'labeTwo'}); 
                                    }

                                    
                                }
                            }
                             self.orginLabeTwo.push({text:'无',checked:false,status:'labeTwo'})
                            
                            
                        }

                        //console.log(self.orginLabeOne);
                    }
                })
        },
        setOrganization3(schoolId,id){
           
            //
            var self = this;
            stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations_class/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        
                        //zconsole.log(res.data);
                        if(res.data instanceof Array){
                            //console.log(id);
                            if(id == undefined || id == null){
                                self.orginLabeThree = [];
                                for (const val of res.data) {
                                    self.orginLabeThree.push({text:val.label_name,id:val.id,checked:false,status:'labeThree'})
                                
                                }
                                self.orginLabeThree.push({text:'无',checked:false,status:'labeThree'})
                            
                            }else{
                                 self.orginLabeFour = [];
                                for (const val of res.data) {
                                //self.orginLabeThree.push({text:val.label_name,id:val.id,checked:false,status:'labeThree'})
                                
                                    if(id === val.id){
                                        for (let val2 of val.children) {
                                            self.orginLabeFour.push({text:val2.label_name,id:val2.id,checked:false,status:'labeFour'}); 
                                        }

                                        self.orginLabeFour.push({text:'无',checked:false,status:'labeFour'})

                                            
                                        }
                                        
                                    }
                                //self.orginLabeThree.push({text:'无',checked:false,status:'labeThree'})
                            }

                            //console.log(res.data);
                            
                            
                            
                        }

                        //console.log(self.orginLabeThree);
                    }
                })
        },

         uploadPic(){
              let self = this;
                let cpath='';
                let picPath='';
                let ppp=[];
                picture.create({
                    gallery: 1,
                    maxNum:1,
                    compress:true
                }, function(result) {
                       
                    for(let i in result.lists) {
                        cpath=result.lists[i].compressPath;
                        let platform = WXEnvironment.platform.toLowerCase();
                         eeui.ajax({
                                    url: API.baseUrl + API.upload,
                                    method: 'POST',
                                    files: {
                                        userimg: cpath
                                    },  
                                    headers: {
                                            Authorization:eeui.getCaches('token', null).token
                                    }, 
                                }, function(result) {
                                    
                                    if (result.status === "success") {
                                       
                                       self.no_run_src.push(result.result.url);
                                      
                                        self.anixeList.no_run_src.push(result.result.url);
                                         
                                    } 
                            });
                       
                          
                    }
                })
        },
        pictureView(pic,index){
            let self = this;
            picture.picturePreview(index, [
                {path: pic}
            ])
            
        },
        appLyNOrun(item){
            var self = this;
            let status="";
             if(app.config.params.stu=='student'){
                if(self.userInfo.uid!=item.uid){
                     eeui.toast({
                            message:'暂无权限哦',
                            gravity:'top'
                        });
                         self.annexShow=false;
                        return;
                }
                
            }
             if(item.status==0){
                 if(app.config.params.stu!='student'){
                      status=2;
                   
                 }else{
                      status=0;
                 }
            }else{
                status=item.status
            }
            if(item.no_run_message==""){
                eeui.toast({
                    message:'备注没写哦~',
                    gravity:'top'
                });
                return;
            }
      
            stream.fetch({
                      method:'PUT',
                      url:API.baseUrl + API.setNorun,
                        type:'json',
                        body:JSON.stringify(
                            {
                                course_class_run_user_id:item.id,
                                status:self.status ? self.status :status,
                                no_run_src:JSON.stringify(item.no_run_src),
                                no_run_message:item.no_run_message
                            }
                        ),
                        headers:{
                            'Content-Type':'application/json',
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
                
                      if(res.status == '200'){
                            self.$set(item,'status',self.status);
                            self.$set(item,'no_run',self.noRun);
                            self.$set(item,'no_run_message',item.no_run_message);
                            self.$set(item,'no_run_src',item.no_run_src);
                            self.annexShow=false;
                      }else{
                          eeui.toast({
                            message:'您尚未申请免跑',
                            gravity:'top'
                        });
                      }
                  })
        },
         delPic(){

            this.delPicShow=!this.delPicShow;
        },
        del(pic,index){
            let self=this;
             self.anixeList.no_run_src.splice(index,1)
            // eeui.confirm({
            //     title: "温馨提示",
            //     message: "你确定删除吗？",
            //     buttons: ["取消", "确定"]
            // }, function(result) {
            //     if (result.status == "click" && result.title == "确定") {
            //          self.anixeList.no_run_src.splice(index,1)
            //     }
            // });
        }
  },
   watch: {
       searchVal(val){   
            this.searchVal=val;
        },
        status(val){
            this.status=val;
        }
   },
  created () {
      let self= this;
      this.getRunActionList();
      this.getUserInfo();
         
      this.searDate=[self.getDay(-6),self.getDay(-5),self.getDay(-4),self.getDay(-3),self.getDay(-2),self.getDay(-1),self.getDay(0)];
  }
};
</script>
<style scoped>
.loading {
    width: 750;
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator-text {
    color: #000000;
    font-size: 32px;
    text-align: center;
  }
  .indicator {
    margin-top: 16px;
    height: 60px;
    width: 60px;
    color: #1eb76e;
  }
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}

.headtext {
  font-size: 30px;
  color: #ffffff;
}
.navtext {
  font-size: 36;
  color: #fff;
  margin-left: 45;
}
.searchBox{
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    height: 110px;
    align-items: center;
    margin-left: 30px;
    margin-right: 30px;
}
.searchleft{
    flex-direction: row; 
    height: 110px;
    align-items: center;
}
.searchleftText{
    font-size: 30px;
}
.searchright{
    flex-direction: row;
    height: 80px;
    align-items: center;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: rgb(46,214,123);
    
}
.iconFontRight{
    margin-left: 20px;
}
.searchInput{
    width: 260px;
    height: 80px;
}
  

.imgbox{
   width: 70px;
   height: 70px; 
   border-radius: 6px;
   position: relative;
}
.img{
    width: 70px;
   height: 70px;
}
.sexLeft{
    position: absolute;
    bottom: 0;
    right: 0rem;
    font-size: 24px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 5px;
}

.scroller{
    width: 750px;
    height: 500px;
    flex: 1;
    

    
}
.scrollerBox{
    flex-direction: row;
    width: 750px;
  /*  position: absolute;*/
}
.leftbox{
    width: 220px;
    
}
.ccccc{
    padding-top:80px;
}
.leftUserName{
    flex-direction: row;
    height: 110px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color:#999;
    align-items: center;
    padding-left: 10px;
    
}
.leftNavText{
    height: 80px;
   font-size: 26px;
   color: #fff;
   width: 220px;
   line-height: 80px;
   text-align: center;
   
}
.userName{
    margin-left: 5px;
}
.name{
    font-size: 30px;
    margin-bottom: 5px;
}
.schoolNum{
    font-size: 22px;
    color: #666;
}
.leftUserNav{
    height: 80px;
    background-color:#2ed97c;
      position:fixed;
    top:210px;
    left:0;
    /* position: fixed;
    top: 0;
    left: 0; */
   
}

.rightinner{
    width: 200px;
}
.innerscroller{
    width: 550;
    flex: 1;
    flex-direction: row; 
}

.rightnavText{
    height: 80px;
    line-height: 80px;
    width: 160px;  
    color: #fff;
    font-size: 26px;
    align-items:center;
    text-align: center;
    
}
.txtCC{
    margin-top:5px;
    color: #fff;
    font-size: 26px;
}
.rightNavbar{
    width: 1600;
    height: 80px;
    position:fixed;
    top:210px;
    left:220;
    flex-direction: row;
    align-items:center;
    background-color: #2ed97c;
}
.rightNav11{
    padding-top:80px;
}
.rightNav{
 
    width: 1600;
    height: 110px;
    flex-direction: row;
    align-items:center;
    border-bottom-color: #999999;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    
}
.rightNav1{
    width: 1600;
    height: 110px;
    flex-direction: row;
    align-items:center;
    border-bottom-color: #999999;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    
}
.rightItemText{
    width: 160px;
    height: 110px;
    line-height:110px;
    font-size: 26px;
    align-items:center;
    text-align: center;
}
.moreLIst{
    padding:12px 10px;
     border-color: #c2c2c2;
    border-style: solid;
    border-width: 1px;
    border-radius:8px;
}
.courseSift{
    padding:12px 0;
}
.cellItem{
    margin-bottom:38px;
}
.tirt{
    font-size:30px;
    padding:5px 0 10px 8px;
    color:#222;
    border-bottom-color: #e3e3e3;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}

.btn{
    width:162px;
    font-size:24px;
    height:48px;
    line-height:48px;
    color:#999;
    border-style:solid;
    border-width:1px;
    border-color:#c2c2c2;
    text-align:center;
    border-radius:6px;
    margin:0 10px 0;
}
.timedata {
    width:162px;
    font-size: 24px;
    height:48px;
    line-height:48px;
    color:#999;
    border-color: #c2c2c2;
    border-style: solid;
    border-width: 1px;
    margin:0 10px 18px;
    border-radius: 6px;
    text-align:center;
}
.popupBtn{
    margin-top:28px;
    flex-direction:row;
    align-items:center;
    justify-content: space-between; 
}
.sureB{
    background-color: #08ce7f;
}
.cancleB{
  
}
.seeL{
    width:160px;
    flex-direction:row;
    align-items:center;   
}
.seeBtn{
     background-color: #08ce7f;
     width:120px;
     height:60px;  
}
.btnGreem{
    background-color: #08ce7f;
    color:#fff;
}
.searchWrap{
    /* position: absolute;
    top:210px;
    left:0;
    width:750px;
    background-color:#fff;
    height:750px; */
    border-bottom-color: #ddd;
    border-bottom-style: solid;
     border-bottom-width: 2px;
}
.searchTxt{
    font-size:30
}
.searList{
   
    margin-left: 30px;
    margin-right: 30px;
}
.searCell{
    flex-direction: row;
    justify-content: space-between;
     align-items: center;
    height:90px;
    border-bottom-color: #ccc;
    border-bottom-style: solid;
    border-bottom-width: 1px;
}
.searTxt{
    font-size:28px;
    color:#333333;
}
.searCon{
    flex-direction: row;
     align-items: center;
}
.searResu{
    font-size:28px;
    color:#999;
    padding-right:8px;
}
.cellSel{
    width:370px;
    flex-direction: row;
    flex-wrap:wrap; 
    align-items:center;
}
.searLastC{
    height:180px
}
.searBtn{
    width: 690px;
    height: 80px;
    margin:18px 0;
    background-color: #1eb76e;
}
.propCon{
    position:relative;
    height:400px;
}
.popupBtn1{
   flex:1;
    flex-direction:row;
    align-items:center;
    justify-content: space-between; 
}
.pbtn{
    border-radius:0;
   flex:1;
    height:74px;  
   border-top-color: #dddddd;
   border-top-style:solid;
   border-top-width:1px;
  
}
.sureB{
    background-color: #08ce7f;
    border-bottom-right-radius: 10;
     color: #fff;
}
.cancleB{
     background-color: #fff;
   border-bottom-left-radius: 10;
    color: #222222;
}
.message{
    border-width:1px;
    border-style:solid;
    border-color:#ccc;
    width:620;
    height:200px;
    margin:20px 30px;
    padding:10px;
    color:#222;
    font-size:26px;
    line-height:30px;
}
.masktitle{
    width:680px;
    font-size: 27;
    text-align: center;
    height: 80;
    line-height: 80;
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: #2222;
}
.tiso{
    padding-top:20px;
    padding-left:30px;
    font-size:24px;
    color:#666666;
}
 .icon11{
    color: #ffffff;
    width: 100px;
    height:100px;
    font-size:40px;
}
.anotip{
    color: #199153;
    font-size: 30px;
    display: block;
    padding: 0 20px;
    flex-direction:row;
    line-height:40px;
}
.icon12{
    color: #199153;
    font-size: 30px;
    width:40px;
    height:40px;
}
.tttt{
    color: #199153;
    font-size: 30px;
}
.messagecc{
     border-width:1px;
    border-style:solid;
    border-color:#ccc;
    width:680;
    height:200px;
    margin:20px 30px;
    padding:10px;
    color:#222;
    font-size:26px;
    line-height:30px;
}
.c_tips{
    font-size: 24px;
    padding: 0 20px;
    color: red;
}

.picFlex{
    width:750px;
     flex-direction:row;
     flex-wrap:wrap;
     margin:18px 10px;    
     
}
.picUPlad{
    width:114px;
    height:114px;
    position:relative;
    margin:0 10px 10px 0;
}
 .uppic{
    width:114px;
    height:114px;
    margin:0 10px 10px;
    
}
.uploadBtn{
   flex-direction:row; 
   align-items:center;
}
.upB{
    width: 112px;
    height: 112px;
    border-color:#d4d4d4;
    border-style:solid;
    border-width:1px;
    margin:0 10px 0 0;
    align-items:center;
    flex-direction:row;
}
.addc{
    width:60px;
    height:60px;
    margin-left:22px;
}
.addr{
     width:60px;
    height:60px; 
    margin-left:22px;
}
.righttext2{
     font-size:30px;
    color:#333;
    margin-right: 10px;
}
.bottomBtn{
    position:fixed;
    bottom:0;
    left:0;
    width: 750;
    height: 100;
}
.saveBtn{
    width:750px;
      height: 100;
    color: #fff;
    background-color:#1eb76e;
    text-align: center;
    line-height: 100;
    font-size: 30;
}

.delPic{
    position:absolute;
    top:0;
    left:10px;
}
.del{
    width:30px;
    height:30px;
}
</style>