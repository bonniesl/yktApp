<template>
    <div class="container">

         <navbar class="navbarb">  
            <navbar-item type="title">
                <text class="headtext">运动</text>
            </navbar-item>
            <navbar-item type="right">
                <icon class="setIcon" @click="openBottomPopup"  :eeui="{content:'ios-settings',fontSize:50}"></icon>
            </navbar-item>
        </navbar>

        <!-- 设置窗口 -->
        <wxc-popup popup-color="#ffffff"
                :show="isBottomShow"
                @wxcPopupOverlayClicked="popupOverlayBottomClick"
                pos="right"
                width="300">
            <div class="demo-content">
                <wxc-cell label="运动设置"
                :has-arrow="true"
                @wxcCellClicked="classSetPage"
                :has-margin="true"></wxc-cell>
                <wxc-cell v-if="IOSSHOW" label="权限设置"
                :has-arrow="true"
                @wxcCellClicked="rootFun"
                :has-margin="true"></wxc-cell>
                <!-- <wxc-cell label="设置说明"
                :has-arrow="true"
                @wxcCellClicked="setExplian"
                :has-margin="true"></wxc-cell> -->
                <wxc-cell label="运动记录"
                :has-arrow="true"
                @wxcCellClicked="sportreport"
                :has-margin="true"></wxc-cell>
                <wxc-cell label="历史排名"
                :has-arrow="true"
                @wxcCellClicked="rankingTo"
                :has-margin="true"></wxc-cell>
                <wxc-cell label="帮助"
                :has-arrow="true"
                @wxcCellClicked="helppageTo"
                :has-margin="true"></wxc-cell>
            </div>
        </wxc-popup>

       <!-- 体重 -->
        <wxc-mask height="580"
              width="680"
              border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-overlay="true"
              :show-close="false"
              :show="isBottomShow2"
              :border-radius="10"
              :overlay-can-close="false"     
              @wxcMaskSetHidden="wxcMaskSetHidden">

                <div class="runsetCon">
                     <text class="masktitle">运动设置</text>
                     <div class="setBodycont">
                            <div class="setbodyItem">
                                <text class="setbodyText">跑步</text>
                                <text class="setSelStudent grey" @click="pickRunList">{{runText}}</text>
                            </div>
                            <div class="setbodyItem">
                                    <text class="setbodyText">校区</text>
                                    <text class="setSelStudent grey" @click="pickSchollList">{{schoolText}}</text>
                            </div>
                            <div class="setbodyItem" >
                                <text class="setbodyText" >身高</text>
                                <input type="number" class="setSelStudent" placeholder="请输入身高(厘米)" v-model="runHeight" autofocus="false" >
                            </div>
                            <div class="setbodyItem">
                                <text class="setbodyText">体重</text>
                                <input type="number" class="setSelStudent" placeholder="请输入体重(千克)" v-model="runWeight" autofocus="false">
                            </div>
                        </div> 
                    
                    <div class="popupBtn"> 
                        <button class="cancleB pbtn" :eeui="{text:'取消'}" @click="popupBottomShow"></button>
                        <button class="sureB pbtn" :eeui="{text:'确定'}"  @click="startRun"></button>
                    </div>
                </div>
        </wxc-mask>
      

       <!--运动体重-->
   
       <wxc-mask height="580"
              width="680"
              border-radius="0"
              duration="200"
              mask-bg-color="#FFFFFF" 
             :has-animation="false"
              :has-overlay="true"
              :show-close="false"
              :show="isBottomShow3"
              :border-radius="10"
              :overlay-can-close="false"     
              @wxcMaskSetHidden="wxcMaskSetHidden" >
    
                <div class="runsetCon">
                     <text class="masktitle">运动设置</text>
                     <div class="setBodycont">
                            <div class="setbodyItem">
                                <text class="setbodyText">跑步</text>
                                <text class="setSelStudent grey" @click="pickRunList1">{{runsetList.runText}}</text>
                            </div>
                            <div class="setbodyItem">
                                    <text class="setbodyText">校区</text>
                                    <text class="setSelStudent grey" @click="pickSchollList1">{{runsetList.schoolText}}</text>
                            </div>
                            <div class="setbodyItem" >
                                <text class="setbodyText" >身高</text>
                                <input type="number" class="setSelStudent" placeholder="请输入身高(厘米)" v-model="runsetList.runHeight" >
                            </div>
                            <div class="setbodyItem">
                                <text class="setbodyText">体重</text>
                                <input type="number" class="setSelStudent" placeholder="请输入体重(千克)" v-model="runsetList.runWeight" >
                            </div>
                        </div> 
                    
                    <div class="popupBtn"> 
                        <button class="cancleB pbtn" :eeui="{text:'取消'}" @click="popupBottomShow1"></button>
                        <button class="sureB pbtn" :eeui="{text:'确定'}"  @click="runSetSure"></button>
                    </div>
                </div>
              
        </wxc-mask>
        
 
       <tabbar
                ref="reflectName"
                class="tabbar"
                :eeui="{ tabType: 'top' }"
                @pageSelected="pageSelected"
                tabBackgroundColor="#fff"
                textSelectColor="#08ce7f"
                textUnselectColor="#5A5A5A"
                textSize="32"
                indicatorColor="#1CB66E"
                indicatorHeight="2"
                indicatorWidth="158"
                @tabReselect="tabReselect">
                <tabbar-page ref="name_1" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_1', title:'体育成绩跑' }">
                    
                    <div class="page-content">
                        <image src="../../assets/images/mapbg.jpg" :style="{width:750,height:innerpageHeight}"></image>
                        <div class="rightTipPOs">
                            <div class="rightTip" v-if="userInfo.sex==1"> 
                                <text class="txt11" v-if="initInfo.boyKm!=0 && initInfo.boyKm">本学期任务：{{initInfo.boyKm}}公里</text>
                                 <text class="txt11" v-if="initInfo.boyMin!=0 || initInfo.boyMax!=0">每天最低{{initInfo.boyMin}}公里,最高{{initInfo.boyMax}}公里</text>
                            </div>
                            <div class="rightTip" v-if="userInfo.sex==2"> 
                                <text class="txt11" v-if="initInfo.girlKm!=0 && initInfo.girlKm">本学期任务：{{initInfo.girlKm}}公里</text>
                                 <text class="txt11" v-if="initInfo.girlMin!=0 || initInfo.girlMax!=0">每天最低{{initInfo.girlMin}}公里,最高{{initInfo.girlMax}}公里</text>
                            </div>
                            <div class="rightTip1" v-if="initInfo.schoolTxt!='' || initInfo.runtxt!=''">
                                <text class="txt11" v-if="initInfo.schoolTxt!=''">{{initInfo.schoolTxt}}</text>
                                <text class="txt11" v-if="initInfo.runtxt!=''">{{initInfo.runtxt}}</text>
                            </div>
                        </div>
                        <image class="runriceBox" :style="{top:(Top1000 -22)}" src="../../assets/images/runricebg.png" style="width:467px;height:467px"></image>
                        <div class="runrice" :style="{top:Top1000}">
                            <text class="runricetit">计入成绩公里数</text>
                            <text class="runriceNum" @click="sportreport">{{test_metre}}</text>
                        </div>
                        <!-- <text class="runriceBtn2" @click="rootFun()">权限按钮</text> -->
                        <text class="runriceBtn" @click="isPoupRun">开始跑步</text>
                        <!-- <text class="runriceBtn" @click="openBottomPopupShow">开始跑步</text> -->
                    </div>
                </tabbar-page>
                <tabbar-page ref="name_1" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_2', title:'自由跑' }">
                    
                    <div class="page-content">
                        
                            <image src="../../assets/images/mapbg.jpg" :style="{width:750,height:innerpageHeight}"></image>
                       
                        
                        <image class="runriceBox" :style="{top:(Top1000 -22)}" src="../../assets/images/runricebg.png" style="width:467px;height:467px"></image>
                        <div class="runrice" :style="{top:Top1000}">
                            <text class="runricetit">公里数</text>
                            <text class="runriceNum" @click="sportreport">{{free_metre}}</text>
                        </div>
                        <text class="runriceBtn" @click="runstart">开始跑步</text>
    
                    </div>
                </tabbar-page>
                <tabbar-page ref="name_1" @refreshListener="refreshListener"
                         :eeui="{ tabName: 'name_3', title:'得分规则' }">
                    <div :style="{height:tabPageHeight}">
                        <scroll-view class="pageCtXT">
                             <text class="sorceText">一、成绩跑得分完成条件 </text>
                                <text class="sorceText">1.  必须是成绩跑模式下，并且达到每次的下限或上限。</text>
                                <text class="sorceText">2.  开始跑步时，会随机出现打卡点，在此次体育成绩跑中，必须经过所有出现的打卡点，打卡成功会有提示，打卡图标变绿色。</text>
                                <text class="sorceText">3.  根据学校设置，跑步前必须是符合当前位置定位成功。</text>
                                <text class="sorceText">二、速度</text>
                                <text class="sorceText">1.  未自行设置配速的学校，跑步配速的合理区间为2分11秒/公里至10分/公里，不在此范围内，将被认定为速度异常。</text>
                                <text class="sorceText">2.  自行设置配速的学校，跑步配速应该在改区间内，否则被认定速度异常。</text>
                                <text class="sorceText">3.  每公里有效配速为2分11秒至10分钟范围内（100米等于60秒内完成）跑步完成时间不得超过或少于正常值范围，否则系统将默认为无效。</text>
                                <text class="sorceText">4.  参加跑步的学生每日上传有效成绩，每次不低于最低限制，如：每次不低于1公里，每天男生跑步上限为2公里，女生跑步上限为1.5公里；等于2公里或超过2公里按2公里计，不足1公里按有效公里数为0计，当日的成绩要在22:30凌晨前上传才有效。</text>
                                <text class="sorceText">三、步频</text>
                                <text class="sorceText">1.  步频合理区间为60~300，不存在此范围内或步频曲线波动异常，将被认定为速度异常。</text>
                                <text class="sorceText">2.  如果出现两个或多个账户后台自动匹配如某时间段或是某一段里程配速、步频等等一致时，将被认定为速度异常。</text>
                                <text class="sorceText">四、排行榜</text>
                                <text class="sorceText">（一）个人排行榜是体育成绩跑的总里程，单次跑步里程达到最高限制后继续跑多出的里程也显示在排行榜中。</text>
                                <text class="sorceText">（二）体育成绩跑是基于教师设置的，每次最低单次完成公里数和最高单次完成公里数的总和。</text>
                        </scroll-view>
                    </div>
                </tabbar-page>
        </tabbar>
        <danSel 
            :danselectShow="danDiaogVal.show" 
            @hideDan="selRadioDialog" 
            :itemList="danDiaogVal.itemList" 
            :height="danDiaogVal.heightval" 
            :top="danDiaogVal.top" 
            :curVal="danDiaogVal.curVal"
        ></danSel>

        <danSel 
            :danselectShow="danDiaogVal1.show" 
            @hideDan="selRadioDialog1" 
            :itemList="danDiaogVal1.itemList" 
            :height="danDiaogVal1.heightval" 
            :top="danDiaogVal1.top" 
            :curVal="danDiaogVal1.curVal"
        ></danSel>

        <!--网络请求不通-->
         <failNet v-if="netWorkShow"></failNet>

         <nav :reposition="reposition"></nav>
    </div>
</template>
<script>
    const eeui = app.requireModule('eeui');
     const stream = app.requireModule('stream');
    const picker = weex.requireModule('picker')
    import { WxcPopup,WxcCell,WxcMask,WxcOverlay,Utils  } from 'weex-ui';
    import API from '../../fetch/api/apis'
    const globalEvent = weex.requireModule('globalEvent');
    import danSel from '../../components/pickList.vue'
    import nav from '../../components/nav.vue'
    import failNet from '../../components/failNet.vue'

     export default {
         components: { WxcPopup,WxcCell,WxcMask,WxcOverlay,danSel,nav,failNet },
         data(){
             
             return{
                 userInfo:'',
                 innerpageHeight:'',
                 Top1000:254,
                 position:0,
                tabPages: [
                    {
                        tabName: 'sprotrun',
                        title: '体育成绩跑',
                        url: '',
                    },
                    {
                        tabName: 'friend',
                        title: '自由跑',
                        url: '',
                    },
                    
                ],
                danDiaogVal:{
                     show:false,
                     itemList:[],
                     heightval:400,
                     top:400,
                     curVal:''
                 },
                 danDiaogVal1:{
                     show:false,
                     itemList:[],
                     heightval:400,
                     top:400,
                     curVal:''
                 },
                 dateValue: '',
                isBottomShow: false,
                isBottomShow2:false,
                isBottomShow3:false,
                height: 400,
                userRunList:[],//用户跑步项目列表
                runHeight:'',
                runWeight:'',
                runText:'加入班级后选择教师跑步任务',
                pickRunInfo:[],
                isHeightShow:true,
                userNewInfo:'',
                schoolText:'请选择校区',
                campus_id:'',
                course_class_run_id:'',
                pickIndex:0,
                pickRunIndex:0,
                 pickIndex1:0,
                pickRunIndex1:0,
                startRunInfo:{},
                userRunSet:[],
                checkClick:false,
            hasAnimation:false,
            maskshow1:false,
                initInfo:{
                    'boyKm':0,
                    'girlKm':0,
                    'schoolTxt':'',
                    'runtxt':'',
                    "boyMax":0,
                    "boyMin":0,
                    "girlMax":0,
                    "girlMin":0
                },
                runsetList:{
                    'runText':'加入班级后选择教师跑步任务',
                    'schoolText':'请选择校区',
                    'runHeight':'',
                    'runWeight':''
                },
                isBottomShow4:true,
                piccheck1:'',
                piccheck2:'',
                runOverList:{},
                picBitmap:'',
                reposition:app.config.params.position,
                netWorkShow:false,
                dtpic:'',
                IOSSHOW:true,
                test_metre:0,
                free_metre:0,
                tabPageHeight:1500
             }
         },
         methods:{
             rootFun(){
                 weex.requireModule('userRun').permissionSetting()
             },
             openBottomPopup () {
                this.isBottomShow = true;
              
            },
            openBottomPopupShow () {
                this.isBottomShow2 = true;
            },
            isPoupRun(e){
                let self = this;
                let tit='';
        
                if(self.userRunSet.length!=''){
                    self.isBottomShow2 = false;
                    if(self.userRunList && self.userRunList.length!=0){
                        for(let i=0;i<self.userRunList.length;i++){
                            tit+=self.userRunList[i].title;
                        }
                     
                        if(tit.indexOf(self.runsetList.runText)==-1){
                            self.isBottomShow3=true;
                             return;
                        }
                         self.startRun(e);
                         return;
                       
                    }
                    
                   
                }
                self.isBottomShow2 = true;   
            },
            //获取用户跑步设置
            getUserRunSet(){
                let self = this;
                let tit='';
                 stream.fetch({
                    method:'GET',
                    url:API.baseUrl + API.getUserRunSet,
                    type:'json',
                    headers:{
                        Authorization:eeui.getCaches('token', null).token
                    }
                },res=>{
           
                     if(res.status == '200'){
                          self.userRunSet=res.data; 

                            if(self.userRunSet){
                                self.isBottomShow2=false;
                                if(self.userRunSet.length==0 || self.userRunSet.test_metre==0){
                                    self.test_metre=0
                                }else{
                                     self.test_metre=(self.userRunSet.test_metre/1000).toFixed(2);
                                }
                                if(self.userRunSet.length==0 || self.userRunSet.free_metre==0){
                                    self.free_metre=0
                                }else{
                                     self.free_metre=(self.userRunSet.free_metre/1000).toFixed(2);
                                }
                                if(self.userRunSet.length!=0){
                                
                                    if(self.userRunList && self.userRunList.length!=0){
                                    
                                        for(let i=0;i<self.userRunList.length;i++){
                                            tit+=self.userRunList[i].title;
                                        }
                                      
                                        if(tit.indexOf(self.userRunSet.run_title)==-1){
                                      
                                            self.course_class_run_id='';
                                            self.campus_id=self.userRunSet.campus_id;
                                            self.initInfo.boyKm=parseInt(self.userRunSet.boy_km/1000);
                                            self.initInfo.girlKm=parseInt(self.userRunSet.girl_km/1000);
                                            self.initInfo.schoolTxt=self.userRunSet.campus_name;
                                            self.runsetList={
                                                    'runText':'加入班级后选择教师跑步任务',
                                                    'schoolText':self.userRunSet.campus_name,
                                                    'runHeight':self.userRunSet.height,
                                                    'runWeight':self.userRunSet.weight
                                            }
                                            if(self.userRunList.length==1){
                                                self.runText = self.userRunList[0].title; 
                                                self.initInfo.runtxt=self.runText;
                                                self.runsetList.runText=self.userRunList[0].title;
                                                self.course_class_run_id=self.userRunList[0].course_class_run_id; 
                                                self.initInfo.boyMax=self.userRunList[0].boy_max/1000;
                                                self.initInfo.boyMin=self.userRunList[0].boy_min/1000;
                                                self.initInfo.girlMax=self.userRunList[0].girl_max/1000;
                                                self.initInfo.girlMin=self.userRunList[0].girl_min/1000;
                                                return;
                                            
                                    
                                            }
                                          
                                            self.initInfo.runtxt='';
                                            self.initInfo.boyMax=0;
                                            self.initInfo.boyMin=0;
                                            self.initInfo.girlMax=0;
                                            self.initInfo.girlMin=0;
                                            
                                         
                                            
                                            return false;
                                        }

                                    
                                        for(let i=0;i<self.userRunList.length;i++){
                                            if(self.userRunList[i].title.indexOf(self.userRunSet.run_title)>-1){
                                                    self.initInfo.boyMax=self.userRunList[i].boy_max/1000;
                                                    self.initInfo.boyMin=self.userRunList[i].boy_min/1000;
                                                    self.initInfo.girlMax=self.userRunList[i].girl_max/1000;
                                                    self.initInfo.girlMin=self.userRunList[i].girl_min/1000;
                
                                            }
                                        }
                                
                                        self.course_class_run_id=self.userRunSet.course_class_run_id;
                                        self.campus_id=self.userRunSet.campus_id;
                                        self.initInfo.boyKm=self.userRunSet.boy_km/1000;
                                        self.initInfo.girlKm=self.userRunSet.girl_km/1000;
                                        self.initInfo.schoolTxt=self.userRunSet.campus_name;
                                        self.initInfo.runtxt=self.userRunSet.run_title;
                                    

                                        self.runsetList={
                                                'runText':self.userRunSet.run_title,
                                                'schoolText':self.userRunSet.campus_name,
                                                'runHeight':self.userRunSet.height,
                                                'runWeight':self.userRunSet.weight
                                        }   
                                        
                                    }

                                }

                           }
                  
                     }else{ 
                        if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                     }
                    
                })
            },
            //获取校区列表和跑步列表
            getUserRunSList(){
                 
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:API.baseUrl + API.getUserRunSList,
                    type:'json',
                    headers:{
                        Authorization:eeui.getCaches('token', null).token
                    }
                },res=>{ 

                    if(res.status == '200'){
                       
                        if(res.data.run_list && res.data.run_list.length!=0){
                            self.userRunList=res.data.run_list;
                            if(self.userRunList.length==1){
                                self.runText = self.userRunList[0].title; 
                                self.initInfo.runtxt=self.runText;
                                self.runsetList.runText=self.userRunList[0].title;
                                self.course_class_run_id=self.userRunList[0].course_class_run_id; 
                                self.initInfo.boyMax=self.userRunList[0].boy_max/1000;
                                    self.initInfo.boyMin=self.userRunList[0].boy_min/1000;
                                    self.initInfo.girlMax=self.userRunList[0].girl_max/1000;
                                    self.initInfo.girlMin=self.userRunList[0].girl_min/1000;
                              
                     
                            }
                        }else{
                            self.userRunList=[];
                        }
                        if(res.data.campus_list){
                            self.schoolCList=res.data.campus_list;
                            if(self.schoolCList.length==1){
                                self.schoolText = self.schoolCList[0].name; 
                                self.initInfo.schoolTxt=self.schoolText;
                                self.runsetList.schoolText=self.schoolText;
                                self.campus_id=self.schoolCList[0].id;  
                            }
                        }else{
                            self.schoolCList=[];
                        }
  
                    }else{
                        if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                    }
                    
                })
            },
            pickRunList(){
                let self = this;
                this.getUserRunSList();
                self.pickRunInfo=[];
                let pickTit =[];
                let PickIn=[];
                if(self.userRunList.length!=0){
                    if(self.userRunList.length==1){
                        self.runText = self.userRunList[0].title;
                        return;
                    }
                    self.danDiaogVal1.show=true;
                    self.userRunList.forEach(function(val,index){
                        if(val.title && val.title.length>0){
                            let ci=val.title.lastIndexOf("\--");
                            self.danDiaogVal1.itemList = val;
                            if(val.length*80 >= 900){
                                self.danDiaogVal1.top = 100;
                                self.danDiaogVal1.heightval = 900;
                            }else{
                                self.danDiaogVal1.heightval = self.userRunList.length*80;
                                self.danDiaogVal1.top = (weex.config.env.deviceHeight/3-self.userRunList.length*80);
                            }
                            if(index==self.piccheck2){
                               self.$set(val,'checked',true);
                            }else{
                                self.$set(val,'checked',false);
                            }
                            let txt1={text:val.title.substring(0,ci).length>28 ? val.title.substring(0,ci).substring(0,28) :val.title.substring(0,ci) ,hunban_name:val.title.substring(ci+2,val.title.length),course_class_run_id:val.course_class_run_id,checked:val.checked};
                             pickTit.push(txt1);  

                            // pickTit.push(val.title);
                          
                            // PickIn.push(val.course_class_run_id);
                        }
                    
                    })
                    
                }
                if(pickTit==0){
                      eeui.toast('暂无数据~');    
                 }else{
                     self.danDiaogVal1.itemList=pickTit; 
                 }
                
                // if(pickTit.length!=0){
                //     picker.pick({
                //         items: pickTit,
                //         index:self.pickRunIndex
                //     }, event => {
                //         if (event.result === 'success') {
                //             self.pickRunIndex=event.data;
                //             self.runText = pickTit[event.data];
                //             self.initInfo.runtxt=self.runText;
                //             self.course_class_run_id=PickIn[event.data];     
                //         }
                //     })
                // }else{
                //     eeui.toast('暂无数据~');
                // }
            },
            selRadioDialog1(index,status){
                this.danDiaogVal1.show = false;
                 this.course_class_run_id=status;   
                 if(index!=null){
                      this.runText=this.userRunList[index].title; 
                 }
                
                this.initInfo.runtxt=this.runText;
                 this.piccheck2=index;
            },
            pickRunList1(){
                let self = this;
                this.getUserRunSList();
                self.pickRunInfo=[];
                let pickTit =[];
                let PickIn=[];
                let pikc=[];
      
                if(self.userRunList.length!=0){
                    if(self.userRunList.length==1){
                        self.runsetList.runText=self.userRunList[0].title;
                        // this.danDiaogVal.itemList[0].checked=true;
                        return;
                    }
             self.danDiaogVal.show=true;
                    self.userRunList.forEach(function(val,index){
                        if(val.title && val.title.length>0){
                            let ci=val.title.lastIndexOf("\--"); 
                             if(val.length*80 >= 900){
                                self.danDiaogVal.top = 100;
                                self.danDiaogVal.heightval = 900;
                            }else{
                                self.danDiaogVal.heightval = self.userRunList.length*80;
                                self.danDiaogVal.top = (weex.config.env.deviceHeight/3-self.userRunList.length*80);
                            }
                           
                            if(index==self.piccheck1){
                               self.$set(val,'checked',true);
                            }else{
                                self.$set(val,'checked',false);
                            }
                            let txt1={text:val.title.substring(0,ci).length>28 ? val.title.substring(0,ci).substring(0,28) :val.title.substring(0,ci) ,hunban_name:val.title.substring(ci+2,val.title.length),course_class_run_id:val.course_class_run_id,checked:val.checked};
                             pickTit.push(txt1);       
                        }
                    
                    })    
                    
                }
                 if(pickTit==0){
                      eeui.toast('暂无数据~');    
                 }else{
                     self.danDiaogVal.itemList=pickTit; 
                 }
            },
            selRadioDialog(index,status){
                 this.danDiaogVal.show = false;
                 this.course_class_run_id=status;   
                 if(index!=null){
                      this.runsetList.runText=this.userRunList[index].title;   
                 }
                 this.piccheck1=index;
            },
            pickSchollList(){
                let self = this;      
                let pickSName =[];
                let pickSIn=[];
                eeui.toastClose();
                if(self.schoolCList.length!=0){
                    if(self.schoolCList.length==1){
                        self.schoolText = self.schoolCList[0].name;
                        return;
                    }
                      self.schoolCList.forEach(function(val,index){
                        if(val.name){
                            pickSName.push(val.name);
                            pickSIn.push(val.id);
                        }
                      
                    })
                }
               if(pickSName.length!=0){
                   picker.pick({
                        items: pickSName,
                        index:self.pickIndex
                    }, event => {
                        if (event.result === 'success') {
                            self.pickIndex=event.data;
                            self.schoolText = pickSName[event.data];
                             self.initInfo.schoolTxt=self.schoolText;
                            self.campus_id=pickSIn[event.data];
                          
                        }
                    })
               }else{
                   eeui.toast('暂无数据~');
               }
                
            },
            pickSchollList1(){
                let self = this;      
                let pickSName =[];
                let pickSIn=[];
             
                eeui.toastClose();
         
                if(self.schoolCList && self.schoolCList.length!=0){
                    if(self.schoolCList.length==1){
                        
                         self.runsetList.schoolText=self.schoolCList[0].name;
                        return;
                    }
                      self.schoolCList.forEach(function(val,index){
                        if(val.name){
                            pickSName.push(val.name);
                            pickSIn.push(val.id);
                        }
                      
                    })
                }
               if(pickSName.length!=0){
                   picker.pick({
                        items: pickSName,
                        index:self.pickIndex1
                    }, event => {
                        if (event.result === 'success') {
                            self.pickIndex1=event.data;
                            self.campus_id=pickSIn[event.data];
                            self.runsetList.schoolText=pickSName[event.data];
                          
                        }
                    })
               }else{
                   eeui.toast('暂无数据~');
               }
                
            },
           
            //用户设置体重身高参数接口
            runSetSure(){
                let self = this;
                if (self.runsetList.runText=="加入班级后选择教师跑步任务") {
                     eeui.toast({
                            message:'请选择教师跑步任务',
                            gravity:'top'
                    })
                    return false
                }
                if (self.runsetList.schoolText=="请选择校区") {
                    eeui.toast({
                            message:'请选择校区！',
                            gravity:'top'
                    })
                    return false
                }

                if (self.ylTrim(self.runsetList.runHeight).length <= 0) {
                    eeui.toast({
                            message:'请输入您的身高！',
                            gravity:'top'
                    })
                    return false
                }
                if (self.ylTrim(self.runsetList.runWeight).length <= 0) {
                    eeui.toast({
                            message:'请输入您的体重！',
                            gravity:'top'
                    })
                    return false
                }
                stream.fetch({
                    method:'POST',
                    url:API.baseUrl + API.setUserHeight,
                    type:'json',
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization:eeui.getCaches('token', null).token
                    },
                     body:JSON.stringify(
                         {
                             campus_id:self.campus_id,
                            course_class_run_id:self.course_class_run_id,
                             weight:self.runsetList.runWeight,
                             height:self.runsetList.runHeight
                        })
                },(res)=>{ 
                 
                    if(res.status == '200'){
                         eeui.reloadPage()
                         eeui.toast({
                                message:'更新成功',
                                gravity:'top'
                        })

                        self.isBottomShow3=false;
                        self.initInfo.schoolTxt=self.runsetList.schoolText;
                        self.initInfo.runtxt=self.runsetList.runText;
                       
                        // self.getUserRunSet();

                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        return false
                    }
                })
            },
            //用户开始跑步接口
            getStartRun(e){
                let self = this;
                let platform = WXEnvironment.platform.toLowerCase();
                let platformNum='';
                let mobile_uuid='';
                let startId='';
                if(platform==='ios'){
                    mobile_uuid=eeui.getIfa();
                    platformNum=2;
                }else{
                    mobile_uuid=eeui.getImei();
                     platformNum=1;
                }
                let pppp={
                         course_class_run_id:self.course_class_run_id,
                         campus_id:self.campus_id,
                         c_time:self.timestampToTime(e.timestamp),
                         run_type:self.position+1,
                         mobile_type:WXEnvironment.deviceModel,
                         mobile_platform:platformNum,
                         mobile_uuid:mobile_uuid
                }
        
          
                stream.fetch({
                    method:'POST',
                    url:API.baseUrl + API.getRunStart,
                    type:'json',
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization:eeui.getCaches('token', null).token
                    },
                     body:JSON.stringify({
                         course_class_run_id:self.course_class_run_id,
                         campus_id:self.campus_id,
                         c_time:self.timestampToTime(e.timestamp),
                         run_type:self.position+1,
                         mobile_type:WXEnvironment.deviceModel,
                         mobile_platform:platformNum,
                         mobile_uuid:mobile_uuid
                     })
                },(res)=>{
                    if(res.status == '200'){  
                       self.startRunInfo=res.data;
                   
                       self.isBottomShow2=false;
                       startId=self.startRunInfo.course_class_user_run_start_id;
                       if(self.startRunInfo.list){
                           eeui.setCaches(self.startRunInfo.course_class_user_run_start_id.toString(), JSON.stringify(self.startRunInfo.list), 0);
                       }  
                       let ppp1 = {
                            'uid':self.userInfo.uid,
                            'name':self.userInfo.user_name,
                            'height':self.runHeight,
                            'weight':self.runWeight,
                            'course_class_user_run_start_id':self.startRunInfo.course_class_user_run_start_id,
                            'authorization':eeui.getCaches('token', null).token,
                            'course_id':self.startRunInfo.course_id,
                            'course_class_id':self.startRunInfo.course_class_id,
                            'course_class_run_id':self.course_class_run_id,
                            'school_id':self.userInfo.school_id,
                            'department_id':self.userInfo.department_id, 
                            'part_id':self.userInfo.part_id,
                            'major_id':self.userInfo.major_id,
                            'class_id':self.userInfo.class_id, 
                            'list':self.startRunInfo.list,
                            'mobile_uuid':mobile_uuid,
                            'mobile_platform':platformNum,
                            'mobile_type':WXEnvironment.deviceModel, 
                            'run_type':self.position+1,
                            'c_time':self.startRunInfo.c_time,
                            'weight':self.userRunSet.weight,
                            'height':self.userRunSet.height
                        }
                       weex.requireModule('userRun').startRun(JSON.stringify( {
                            'uid':self.userInfo.uid,
                            'name':self.userInfo.user_name,
                            'height':self.runHeight,
                            'weight':self.runWeight,
                            'course_class_user_run_start_id':self.startRunInfo.course_class_user_run_start_id,
                            'authorization':eeui.getCaches('token', null).token,
                            'course_id':self.startRunInfo.course_id,
                            'course_class_id':self.startRunInfo.course_class_id,
                            'course_class_run_id':self.course_class_run_id,
                            'school_id':self.userInfo.school_id,
                            'department_id':self.userInfo.department_id, 
                            'part_id':self.userInfo.part_id,
                            'major_id':self.userInfo.major_id,
                            'class_id':self.userInfo.class_id, 
                            'list':self.startRunInfo.list,
                            'mobile_uuid':mobile_uuid,
                            'mobile_platform':platformNum,
                            'mobile_type':WXEnvironment.deviceModel, 
                            'run_type':self.position+1,
                            'c_time':self.startRunInfo.c_time,
                            'weight':self.userRunSet.weight,
                            'height':self.userRunSet.height
                        }),function (data) {  
                            console.log('地图页',data);
                        })
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        return false
                    }

                })
                       
                        
            },

            /**
             * 打开新页面
             * @param jsPageName    (String)JS页面名称
             * @param params        (Object)传递参数
             */
            startRun(e,jsPageName, params) {
                
                let self = this;
               
                let platform = WXEnvironment.platform.toLowerCase();
                let mobile_uuid='';
                if(platform==='ios'){
                    mobile_uuid=eeui.getIfa();
                }else{
                    mobile_uuid=eeui.getImei();
                }
             
                if(self.userRunSet.length!=0){
                    self.getStartRun(e);
                    return false;
                }

                if (self.runText=="加入班级后选择教师跑步任务") {
                     eeui.toast({
                            message:'请选择教师跑步任务',
                            gravity:'top'
                    })
                    return false
                }
                if (self.schoolText=="请选择校区") {
                    eeui.toast({
                            message:'请选择校区！',
                            gravity:'top'
                    })
                    return false
                }

                if (self.ylTrim(self.runHeight).length <= 0) {
                    eeui.toast({
                            message:'请输入您的身高！',
                            gravity:'top'
                    })
                    return false
                }
                if (self.ylTrim(self.runWeight).length <= 0) {
                    eeui.toast({
                            message:'请输入您的体重！',
                            gravity:'top'
                    })
                    return false
                }

                stream.fetch({
                    method:'POST',
                    url:API.baseUrl + API.setUserHeight,
                    type:'json',
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization:eeui.getCaches('token', null).token
                    },
                     body:JSON.stringify(
                         {
                             campus_id:self.campus_id,
                            course_class_run_id:self.course_class_run_id,
                             weight:self.runWeight,
                             height:self.runHeight
                        })
                },(res)=>{ 
                    if(res.status == '200'){
                        self.runsetList={
                                'runText':this.runText,
                                'schoolText':this.schoolText,
                                'runHeight':this.runHeight,
                                'runWeight':this.runWeight
                        } ;
                        self.getUserRunSet();
                        self.getStartRun(e)
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        return false
                    }
                })
            },
           
             pageSelected(data) {
                this.position = data.position;
                this.getUserRunSList();
                this.getUserRunSet();
            },
             popupOverlayBottomClick () {
                this.isBottomShow = false;
            },
            popupBottomShow(){
                this.isBottomShow2 = false;
            },
            popupBottomShow1(){
                this.isBottomShow3 = false;
            },
            wxcCellClicked (e) {
                console.log(e)
            },
            
            sportreport(){
               eeui.openPage({
                    url: 'sprotreport.js',
                    statusBarColor:'#1eb76e',
                    pageName:'运动记录',
                    animated:true,
                }, function(result) {
                    //......
                });  
            },
            classSetPage(){
            
              this.isBottomShow3=true;
              this.isBottomShow=false;
            //   this.getUserRunSList();
            //   this.getUserRunSet();
             
            },
            helppageTo(){
               eeui.openPage({
                    url: 'helppage.js',
                    statusBarColor:'#1eb76e',
                    pageName:'帮助',
                    animated:true,
                }, function(result) {
                    //......
                });  
            },
            rankingTo(){
               eeui.openPage({
                    url: 'rankingpage.js',
                    statusBarColor:'#1eb76e',
                    pageName:'排名',
                    animated:true,
                }, function(result) {
                    //......
                });  
            },
            setBodyWeight(){

            }, 
            
            runstart(e,jsPageName, params){
                let self = this;
                let platform = WXEnvironment.platform.toLowerCase();
                let platformNum='';
                let mobile_uuid='';
                if(platform==='ios'){
                    mobile_uuid=eeui.getIfa();
                    platformNum=2;
                }else{
                    mobile_uuid=eeui.getImei();
                     platformNum=1;
                }

                 stream.fetch({
                    method:'POST',
                    url:API.baseUrl + API.getRunStart,
                    type:'json',
                    headers:{
                        'Content-Type': 'application/json',
                        Authorization:eeui.getCaches('token', null).token
                    },
                     body:JSON.stringify({
                         course_class_run_id:0,
                         campus_id:0,
                         c_time:self.timestampToTime(e.timestamp),
                         run_type:0,
                         mobile_type:WXEnvironment.deviceModel,
                         mobile_platform:platformNum,
                         mobile_uuid:mobile_uuid
                     })
                },(res)=>{
                    if(res.status == '200'){  
                       self.startRunInfo=res.data;
                       eeui.setCaches('trackDta', {}, 0)
                       weex.requireModule('userRun').startRun(JSON.stringify( {
                            'uid':self.userInfo.uid,
                            'name':self.userInfo.user_name,
                            'height':0,
                            'weight':0,
                            'course_class_user_run_start_id':self.startRunInfo.course_class_user_run_start_id,
                            'authorization':eeui.getCaches('token', null).token,
                            'course_id':self.startRunInfo.course_id,
                            'course_class_id':self.startRunInfo.course_class_id,
                            'course_class_run_id':self.course_class_run_id,
                            'school_id':self.userInfo.school_id,
                            'department_id':self.userInfo.department_id, 
                            'part_id':self.userInfo.part_id,
                            'major_id':self.userInfo.major_id,
                            'class_id':self.userInfo.class_id, 
                            'list':self.startRunInfo.list,
                            'mobile_uuid':mobile_uuid,
                            'mobile_platform':platformNum,
                            'mobile_type':WXEnvironment.deviceModel, 
                            'run_type':0,
                            'c_time':self.startRunInfo.c_time,
                            'weight':0,
                            'height':0
                        }),function (data) {  
                            console.log('地图页',data);
                        })
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        return false
                    }

                })

                // let self = this;
                // eeui.confirm({
                //     title: "温馨提示",
                //     message: "你确定开始吗？",
                //     buttons: ["取消", "确定"]
                // }, function(result) {
                //     if (result.status == "click" && result.title == "确定") {
                //         //确认
                //         eeui.openPage({
                //             url: 'readypage.js',
                //             statusBarColor:'#1eb76e',
                //             pageName:'准备',
                //             animated:false 
                //         }, function(result) {
                //             //......
                //         }); 
                //     }
                // });
                
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
                  
                       //  self.getUserRunSList();
                         self.getUserRunSet();  
                            
                    }else{
                        if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                    }
                })
            },
            ylTrim(s) {
                if (typeof s === 'string') {
                    return s.replace(/^\s+|\s+$/g, "")
                } else {
                    return 'not string'
                }
            },
            timestampToTime(timestamp) {
                var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D+h+m+s;
            },
            //设置说明
             setExplian(){
                 eeui.openPage({
                    url: 'setExplain.js',
                    statusBarColor:'#1eb76e',
                    pageName:'设置说明',
                    animated:true,
                }, function(result) {
                    //......
                });
             }
           
           
         },
        
         watch: {
             piccheck1(val){
                 this.piccheck1=val;
    
             },
              piccheck2(val){
                 this.piccheck2=val;
    
             },
             userRunSet(val){
               
                this.userRunSet=val;
             },
             runsetList(val){
                 this.runsetList=val;
              
             }
         },

           mounted () {
                eeui.setSoftInputMode(eeui.getPageInfo().pageName, 'nothing');
           },
         created(){
            eeui.setSoftInputMode(eeui.getPageInfo().pageName, 'nothing');
             let self=this;
             this.getUserInfo();
         //   this.getUserRunSet();
             this.getUserRunSList();
             this.tabPageHeight=Utils.env.getPageHeight()+600;
           
             let deviceHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth*750;
             // this.tabPageHeight =deviceHeight - 200;
             this.innerpageHeight = deviceHeight-100;
             if((deviceHeight-100) < 1000){
                 this.Top1000 = 150;
             }
            
            globalEvent.addEventListener("trackCallback", function (res) { 
                //self.runOverList=res;   
                
                eeui.setCaches('trackDta', res.install, 0)
                          
                 //console.log('trackCallback',res);
            })  
            globalEvent.addEventListener("runDataCallback", function (res) {           
                self.runOverList=res.install;     
                self.getUserRunSList();
                self.getUserRunSet();
                 eeui.openPage({
                    url: 'rundetailout.js',
                    statusBarColor:'#1eb76e',
                    pageName:'rundetailout',
                    animated:false,
                    params:{runOverList: self.runOverList}
                }, function(result) {
                    //......
                }); 
            }) 

            //权限设置说明
            
            globalEvent.addEventListener("stepCallback", function (res) {           
                 
                 eeui.openPage({
                    url: 'setExplain.js',
                    statusBarColor:'#1eb76e',
                    pageName:'设置说明',
                    animated:true,
                    swipeBack:false,
                    params:{phoneName:res.install}
                }, function(result) {
                    //......
                }); 
            }) 
            
               let platform = WXEnvironment.platform.toLowerCase();  
              if(platform==='ios'){
                  this.IOSSHOW  = false;
                 globalEvent.addEventListener("ios_trackDataCallback", function (res) { 
                    eeui.setCaches('trackDta', res, 0)
                })  

                globalEvent.addEventListener("ios_runDataCallback", function (res) {
                 self.runOverList=res;
                 self.getUserRunSList();
                      self.getUserRunSet();
                 eeui.openPage({
                    url: 'rundetailout.js',
                    statusBarColor:'#1eb76e',
                    pageName:'rundetailout',
                    animated:false,
                    params:{runOverList:  self.runOverList}
                }, function(result) {
                    //......
                }); 
            })  
              }else{
                  this.IOSSHOW  = true;
              }

            
         }
     }
</script>
<style scoped>
.pageCtXT{
    width:690px;
    flex: 1;
    margin-left: 30px;
    /* margin:0 30px; */
    /* padding:0 0 100px; */
}
.sorceText{
    font-size: 30px;
    line-height: 42px;
    margin:10px 0 0;
}

.container{
    background-color:#ebebeb;
}
.map{
    background: #fff;
}
 .navbarb{
        width: 750px;
        height: 100px;
        background-color: #1eb76e;
    }
     .headtext {
        font-size: 36px;
        color: #ffffff;
    }

    .tabbar {
        width: 750px;
        flex: 1;
    }

    .page-content {
        flex:1;
        align-items: center;
    }
    .rightTipPOs{   
        position:absolute;
        top:51;
        left:0;
        text-align:center; 
        padding:6px 28px;
        background-color:#fff;
        border-top-right-radius: 50;
        border-bottom-right-radius: 50;  
    }
    .rightTip,.rightTip1{  
         
    }
    .txtpadd{
        padding-left:158px;
        padding-top:10px;
    }
    .txt11{
        font-size:26;
        padding-top:10px;
    }
    .setIcon{
        width:47;
        height:47;
       margin-right:30;
       color:#fff;
    }
    .runriceBox{
        position: absolute;
        top: 232;
        left: 142;
    }
    .runrice{
        width: 420;
        height: 420;
        border-radius: 1000;
        background-color: #08ce7f;
        position: absolute;
        top: 254;
        left: 164;
        align-items: center;
        padding-top: 100;
    }
    .runricetit{
        font-size: 32;
        color: #fff;

    }
    .runriceNum{
        font-size: 85;
        color: #fff;
        font-weight: bold;
        margin-top: 40;
    }
    .runriceBtn{
        width: 358;
        height: 94;
        text-align: center;
        line-height: 94px;
        background-color: #1CB66E;
        border-radius: 47;
        font-size: 32;
        color: #fff;
        position:absolute;
        bottom: 300;
        left: 196;
    }
       .runriceBtn2{
        width: 358;
        height: 94;
        text-align: center;
        line-height: 94px;
        background-color: #1CB66E;
        border-radius: 47;
        font-size: 32;
        color: #fff;
        position:absolute;
        bottom: 460;
        left: 196;
    }
.toprightbox{
    width: 137px;
    height: 44px;
    flex-direction: row;
    border-style: solid;
    border-width: 1px;
    border-color: #fff;
    border-radius: 50;
    align-items: center;
    justify-content: center;
    margin-right: 31;
}
.topnavtext{
    font-size: 29;
    color: #fff;
    margin-left: 5;
    margin-right: 5;
}
.topdownBox{
    position: absolute;
    top: 82;
    right: 0;
}
.topdowmitem{
    flex-direction: row;
}
.setbodyItem{
    flex-direction: row;
    align-items: center;
    padding-top: 38px;
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

.popupBtn{
    margin-top:42px;
    flex-direction:row;
    align-items:center;
    justify-content: space-between; 
}
.pbtn{
    border-radius:0;
    width:341px;
    height:70px;  
}
.sureB{
    background-color: #08ce7f;
}
.cancleB{
   background-color: #bbb;
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

</style>
