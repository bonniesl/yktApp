<template>
    <div class="container">
        <div class="tabList">
            <div class="tabItem" v-for="(item,index) in runListDate" :key="index">
                <div class="itemBar" @click.stop="downShowF(item)">
                    
                    
                    <div class="textworld"  @click.stop="enterstudentList(item.course_class_run_id)">
                        <text class="titword">{{item.title}}</text>
                    </div>
                    <div class="btnAll">
                        <button class="button" v-if="stuShow!='student'"  :eeui="{text:'范围发布', model:'green'}" @click.stop="openMask(item)"></button>
                        <icon class="iconmore" :class="[stuShow!='student' ? '' : 'iconmore1111']"  @click.stop="openBottomPopup(item)" :eeui="{content:'ios-more',fontSize:44}"></icon>
                    </div>
                    
                </div>

                <div class="downList" v-if="item.show">
                    <div class="downitem">
                        <div class="downIMg">
                            <text class="leftIcon">&#xe606;</text>
                        </div>
                        <div class="dowmTitBox" >
                            <text class="dowmTit">跑步</text>
                            <text class="dowmTitFu">总计：{{item.student_nums}}    参加人数：{{item.student_nums - item.student_no_run_nums}}  未参加人数：{{item.student_no_run_nums}}</text>
                        </div>
                        

                    </div>
                    
                </div>
            </div>
            
            
        </div>

        <wxc-popup popup-color="#ffffff"
                :show="isBottomShow"
                @wxcPopupOverlayClicked="popupOverlayBottomClick"
                pos="bottom"
                :height="userInfo.type==1 ? 480 : 400">
            <div class="popover-content">
                <text class="popoverTit">{{popTitle}}</text>
                <div class="popoverIconList">
                    <div class="popoverItem" v-if="stuShow!='student'" @click="editenter(run_id,popTitle)">
                        <text class="iconfontIcon iconfontIcon3">&#xe725;</text>
                        <text class="popoverText">编辑</text>
                    </div>
                    <!-- <div class="popoverItem" @click="setenter">
                        <text class="iconfontIcon iconfontIcon2">&#xe62e;</text>
                        <text class="popoverText">设置</text>
                    </div> -->
                    <div class="popoverItem" v-if="stuShow!='student'" @click="summenter">
                        <text class="iconfontIcon iconfontIcon5">&#xe635;</text>
                        <text class="popoverText">汇总分析</text>
                    </div>
                     <div class="popoverItem" v-if="stuShow!='student'"  @click="upDateDelete(run_id,popTitle,1)" >
                        <text class="iconfontIcon iconfontIcon4">&#xe62c;</text>
                        <text class="popoverText" >删除</text>
                    </div>
                      <div class="popoverItem" v-if="stuShow=='student'" @click="norunC(run_id)">
                        <text class="iconfontIcon iconfontIcon6">&#xe626;</text>
                        <text class="popoverText" >免跑</text>
                    </div>
                    
                </div>
                <text class="cancelBtn" @click="popupOverlayBottomClick">取消</text>
            </div>
        </wxc-popup>

        <!--免跑-->
        <wxc-popup popup-color="#ffffff"
                :show="noRunShow"
                @wxcPopupOverlayClicked="closeAnnex"
                pos="right"
                width="750">
            <div class="anWrap">
                 <navbar class="navbarb">  
                    <navbar-item type="left" @click="fwcolse">
                            <icon content="md-arrow-back" class="icon11"></icon>
                    </navbar-item> 
                    <navbar-item type="title">
                        <text class="headtext">免跑证明上传</text>
                    </navbar-item>
                </navbar>
                <div class="anotip">
                    <icon content="tb-write-fill" class="icon12"></icon>
                    <text class="tttt">备注</text>
                </div>
                <textarea class="messagecc" v-model="no_run_message"></textarea>
                <text class="c_tips">请在光线好的地方拍摄，保证图片清晰！</text>
                <div class="pictureM">
                    <div class="picFlex">
                         <div class="picUPlad" v-for="(pic,index) in no_run_src" :key="index">
                            <image class="uppic" :src="pic" @click.stop="pictureView(pic,index)"></image>
                            <div class="delPic" v-if="delPicShow" @click.stop="del(pic,index)"><image class="del" src="../assets/images/closeb.png"></image></div>
                        </div>
                        <div class="uploadBtn">
                            <div class="upB" @click="uploadPic"><image class="addc" src="../assets/images/addphoto.png"></image></div>
                            <div class="upB" @click="delPic"><image class="addr" src="../assets/images/removephoto.png"></image></div>
                        </div>
                    </div>
                </div>
                <div class="bottomBtn"  @click.stop="appLyNOrun(run_id)">
                    <text class="saveBtn">保存</text>
                </div>
            </div>
            <!--div class="noRuncon">
               <scroll-view >
                    <div class="norunC">
                        <text class="masktitle">免跑证明</text>
                        <div class="maskcont NORUNCCC">   
                            <div class="maskclassLinebox">
                                <text class="notips1">备注</text>
                                    <textarea class="textarea" v-model="no_run_message"></textarea>
                                    <text class="notips2">请在光线好的地方拍摄，保证图片清晰！</text>
                                    <div class="uploadP">
                                        <image  @click="uploadPic" src="../assets/images/picUP1.png" style="width:120px;height:120px;"></image>
                                 
                                        <div class="uppicB" v-if="no_run_src" @click="pictureView">
                                              <image class="uppic" :src="no_run_src"></image>
                                        </div>
                                      
                                    </div>
                                    

                            </div>
                        </div>
                    </div>
                </scroll-view>
                 <div class="commitBtn">
                    <button class="maskbutton" @click="cancleApply" :eeui="{text:'取消',borderRadius:'0',backgroundColor:'#eaeaea',color:'#222222'}"></button>
                    <button class="maskbutton" @click="appLyNOrun(run_id)" :eeui="{text:'确定',borderRadius:'0',backgroundColor:'#2fdc7e',color:'#ffffff'}"></button>
                </div>
            </div-->
        </wxc-popup>


        <!-- 发布范围 -->
        <wxc-mask height="800"
                width="660"
                border-radius="6"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="maskshow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="content">
                <text class="masktitle">范围发布管理</text>
                <div class="maskcont">
                    <div class="maskclassLinebox">
                        <scroll-view style="height:600px;">
                            <div class="maskclassLine" v-for="(item,index) in runActionList" :key="index">
                                <div class="sendleft"  @click="sendenter('发布预览',item)">
                                    <text class="sendlefttit">{{item.title}}</text>
                                    <text class="sendlefttype">{{item.typetext}}</text>
                                </div>
                                <div class="sendbtn" v-if="item.status==0" @click="pick(item.course_class_run_project_id,1,item)">
                                    <text class="sendbtnicon">&#xe613;</text>
                                    <text class="sendbtntext">{{item.btn}}</text>
                                </div>
                                <div class="sendbtn sendbtnred" v-if="item.status==1" @click="pick(item.course_class_run_project_id,2,item)">
                                    <text class="sendbtnicon sendbtnred">&#xe613;</text>
                                    <text class="sendbtntext sendbtnred">{{item.btn}}</text>
                                </div>
                                <div class="sendbtn sendbtngrey" v-if="item.status==2">
                                    <text class="sendbtntext sendbtngrey">{{item.btn}}</text>
                                </div>
                                
                                <!--div class="sendbtn" :class="[item.status == '2'?'sendbtngrey' : '']" @click="pick(item.course_class_run_project_id,item)">
                                    <text class="sendbtnicon" :class="[item.status == '2'?'sendbtngrey' : '']">&#xe613;</text>
                                    <text class="sendbtntext" :class="[item.status == '2'?'sendbtngrey' : '']">{{item.btn}}</text>
                                </div-->
                            </div>  
                        </scroll-view>
                       
                    </div>

                    <div class="commitBtn">
                        <button class="maskbutton"  @click="sendenter('新增发布范围',item)" :eeui="{text:'新增发布',borderRadius:'0',backgroundColor:'#eaeaea',color:'#222222'}"></button>
                        <button class="maskbutton" @click="wxcMaskSetHidden" :eeui="{text:'确定',borderRadius:'0',backgroundColor:'#2fdc7e',color:'#ffffff'}"></button>
                    </div>

                </div>
                
            </div>
        </wxc-mask>
        <!-- 编辑 -->
        <wxc-popup popup-color="#ffffff"
                :show="isrightSHow"
                @wxcPopupOverlayClicked="closesendBox"
                pos="right"
                width="750">
            <div class="demo-content">
                    <navbar class="navbarb">  
                        <navbar-item type="left">
                            <text class="editBack" @click="isrightSHow = false">返回</text>
                        </navbar-item> 
                        <navbar-item type="title">
                            <text class="headtext">修改运动</text>
                        </navbar-item>
                    </navbar>

                    <div class="cellList">
                        <!-- <wxc-cell label="标题"
                            :has-arrow="false"
                            :has-margin="true">
                                <input class="inputText" type="text" placeholder="请输入标题">
                            </wxc-cell> -->

                        <div class="cellItem">
                            <text class="leftText">标题</text>    
                        
                            <input
                                class="rightInput"
                            type="text"
                            autofocus="false"
                            placeholder="请输入标题"
                            v-model="popTitle"
                            
                            
                            > 
                        </div> 

                        <!-- <wxc-cell label="年级"
                            
                            :has-arrow="true"
                            @wxcCellClicked="wxcCellClicked"
                            :has-margin="true">
                            <text class="righttext">{{value}}</text>
                            </wxc-cell> -->
                 
                    </div>
                    <!-- <div class="celltitle">
                        <text class="iconshow">&#xe606;</text>
                        <text class="icontit">备注</text>
                    </div> -->
                    <div class="beiaerebox">
                        <!-- <textarea class="beiaere"></textarea> -->

                        <button class="buttonedit" @click="upDateDelete(run_id,popTitle,2)" :eeui="{text:'保存',backgroundColor:'#1eb76e'}"></button>
                    </div>
                    
            </div>
        </wxc-popup>

        <!-- 范围发布 -->
        <wxc-popup popup-color="#ffffff"
                :show="sendrightSHow"
                @wxcPopupOverlayClicked="closeEditBox"
                pos="right"
                width="750">
            <div class="demo-content">
                    <navbar class="navbarb">  
                        <navbar-item type="left" @click="fwcolse">
                             <icon content="md-arrow-back" class="icon11"></icon>
                        </navbar-item> 
                        <!--navbar-item type="left">
                            <text class="editBack" @click="sendrightSHow = false">返回</text>
                        </navbar-item--> 
                        <navbar-item type="title">
                            <text class="headtext">{{bigTitle}}</text>
                        </navbar-item>
                    </navbar>
                    <div class="">
                      
                        <scroller class="scroller">
                            <wxc-cell label="标题"
                            :has-arrow="false"
                            @wxcCellClicked="wxcCellClicked"
                            :has-margin="true">
                                <text class="rightInput1" v-if="bigTitle=='发布预览'">{{actionTitle}}</text>
                                <input type="text" v-else class="rightInput" v-model="actionTitle" placeholder="请输入标题">
                            </wxc-cell>
                            <div v-for="(item,index) in radioList">
                                <wxc-cell :label="item.title" 
                                    :has-arrow="false"
                                    :has-top-border="false"  @wxcCellClicked="checkRadio(item)">
                                        <div class="radioBox" :class="[item.checked==true ? 'radioSh' : '']">
                                            <icon class="radioC" v-if="item.checked==true" content="md-checkmark" ></icon>
                                        </div>
                                </wxc-cell>
                            </div>
                            <!--wxc-radio :list="radioList" :config="config"  @wxcRadioListChecked="wxcRadioListChecked"></wxc-radio-->
                        </scroller>

                        <div class="bottomBtn" v-if="bigTitle=='新增发布范围'">
                            <text class="cancelBtn2" @click="runHide">取消</text>
                            <text class="sureBtn" @click="runProject(run_id,actionTitle,radioType)">确定</text>
                        </div>
                    </div>

                    
            </div>
        </wxc-popup>
        <failNet v-if="netWorkShow"></failNet>
    </div>
</template>
<script>
    import { WxcPopup,WxcDialog,WxcMask,WxcCell,WxcRadio} from 'weex-ui';
    const eeui = app.requireModule('eeui');
    const picture = app.requireModule("eeui/picture");
    const picker = weex.requireModule('picker')
    const stream = app.requireModule('stream');
    import API from '../fetch/api/apis';
    import failNet from '../components/failNet.vue'
    const network = app.requireModule("eeui/network");

     export default {
         components: { WxcPopup,WxcDialog,WxcMask,WxcCell,WxcRadio,failNet },
         data(){
             return{
                 doubleClick:true,
                maskshow: false,
                isFalse: false,
                hasAnimation: true,
                isBottomShow: false,
                isrightSHow:false,
                sendrightSHow:false,
                height: 400,
                runListDate:[],
                popTitle:'',
                run_id:'',
                items:['大一', '大二', '大三','大四','高一','高二','高三'],
                items2:['身高', '体重', '跑步','跳远'],
                value: '' ,
                value2: '' ,
                list: [
                    { title: '选项1', value: 1 },
                    { title: '选项2', value: 2, checked: true },
                    { title: '选项3', value: 3 },
                    { title: '选项4', value: 4 }
                ],
                checkedList: [2],
                actionTitle:'',
                actionType:'0',
                runActionList:[],
                runStatus:['未开始','开始','已完成'],
                radioList:[
                    {title:'免跑',value:1,checked: false },
                    {title:'体育跑',value:2,checked:false},
                ],
                radioType:0,
                bigTitle:'',
                netWorkShow:false,
                userInfo:'',
                noRunShow:false,
                no_run_message:'',
                no_run_src:[],
                advPath:'',
                courseRunuserId:'',
                delPicShow:false,
                stuShow:app.config.params.stu,
                runApplyInfo:[]
             }
         },
          methods: {
              //跳到学生列表页
              enterstudentList(id){
                  eeui.openPage({
                        pageName: 'enterstudentList',
                        pageType: 'app',
                        url: 'sport/sportList.js',
                        params:{id:id,stu:this.stuShow}
                    }, function(result) {
                        //......
                    });
              },
              checkRadio(item){
                  let self = this;
                  if(this.bigTitle=='发布预览'){ 
                      return;
                  }
                  this.radioList.map((val) => {
                        val.checked = false;
                  })
                  if(item.checked==true){
                       item.checked=false;
                  }else{
                      item.checked=true;
                  }
                  self.radioType = item.value;
              },
            //   wxcRadioListChecked (e) {

            //         this.radioType = e.value;
            //     },
              //编辑框显示
              closeEditBox(){
                  this.isrightSHow = false;
              },
              //范围发布框显示
              closesendBox(){
                  this.sendrightSHow = false;
              },
              
              //跑步跟新删除
              upDateDelete(id,title,del){
                  
                  var self = this;
                  stream.fetch({
                      method:'PUT',
                      url:API.baseUrl + API.runOperation,
                        type:'json',
                        body:JSON.stringify(
                            {
                                run_id:id,
                                title:title,
                                del:del
                            }
                        ),
                        headers:{
                            'Content-Type':'application/json',
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
                      if(res.status == '200'){
                         

                        if(del==1){
                            self.isBottomShow = false;
                             eeui.confirm({
                                    title: "温馨提示",
                                    message: "确定删除吗？",
                                    buttons: ["取消", "确定"]
                                }, function(result) {
                                    if (result.status == "click" && result.title == "确定") {
                                         eeui.toast({
                                                message:'操作成功！',
                                                gravity:'top'
                                            })
                                        for(let i = 0;i<self.runListDate.length;i++){
                                            if(self.runListDate[i].course_class_run_id == id){
                                                self.runListDate.splice(i,1);
                                                return false;
                                            }
                                        }
                                    }
                            })
                            
                        }                  

                        //   if(del == 2){
                        //       self.isBottomShow = false;
                        //         self.isrightSHow = false;
                        //       for(let i = 0;i<self.runListDate.length;i++){
                        //           if(self.runListDate[i].course_class_run_id == id){
                        //               self.runListDate[i].title = title;
                        //               return false;
                        //           }
                        //       }
                        //   }else{
                             
                        //   }
                        
                      }else{
                        if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }
                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })

                            
                      }
                      
                  })
              },
              //创建主题下面的操作
              runProject(id,title,type){
                 
                  var self = this;
                  stream.fetch({
                      method:'POST',
                      url:API.baseUrl + API.runProject,
                        type:'json',
                        body:JSON.stringify(
                            {
                                course_class_run_id:id,
                                title:title,
                                action_type:type
                            }
                        ),
                        headers:{
                            'Content-Type':'application/json',
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
                  
                      if(res.status == '200'){
                          eeui.toast({
                                message:'创建成功！',
                                gravity:'top'
                            })

                            self.sendrightSHow = false;
                            self.getRunActionList(id);
                            eeui.keyboardHide();
                       
                      }else{
                          if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }
                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })
                      }
                      
                  })
              },
              runHide(){
                   this.sendrightSHow = false;
                    eeui.keyboardHide();
              },
              //获取跑步项目操作列表
              getRunActionList(id){
              
                  var self = this;
                   stream.fetch({
                      method:'GET',
                      url:API.baseUrl + API.getrunActionList + '?course_class_run_id=' + id,
                        type:'json',
                        headers:{
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
                
                      if(res.status == '200'){
                        for(const val of res.data){
                              
                            if(val.status == 0){
                                this.$set(val,'typetext','发布');
                                this.$set(val,'btn','发布');
                            }else if(val.status == 1){
                                  this.$set(val,'typetext','结束');
                                  this.$set(val,'btn','结束');
                            }else{
                                this.$set(val,'typetext','已完成');
                                this.$set(val,'btn','已结束');
                            }
                        }
                        self.runActionList = res.data;

                        
                        
                      }else{
                          if(res.status=='-1'){
                          
                            return
                        }
                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })

                            //console.log(res);
                      }
                      
                  })
              },
              
              //获取班级下面的跑步主题列表
              runList(id){
           
                  var self = this;
                  stream.fetch({
                      method:'GET',
                      url:API.baseUrl + API.runList + '?course_class_id=' + id,
                        type:'json',
                        headers:{
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
           
                      if(res.status == '200'){
                        self.runListDate = res.data;

                        for (const val of self.runListDate) {
                            self.$set(val,'show',false)
                        }
                       
                      }else{
                          if(res.status=='-1'){
                              self.netWorkShow=true; 
                            return
                        }
                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })
                      }
                      
                  })
              },
              //发布跟新
              runSendUpdate(id,type,item){
                //   if(!this.doubleClick){
                //       return false;
                //   }

                  this.doubleClick = false;
                var self = this;
                  eeui.confirm({
                        title: "温馨提示",
                        message: "确定执行吗？",
                        buttons: ["取消", "确定"]
                    }, function(result) {
                        if (result.status == "click" && result.title == "确定") {
                            

                            stream.fetch({
                                method:'PUT',
                                url:API.baseUrl + API.runSendUpdate,
                                    type:'json',
                                    body:JSON.stringify(
                                        {
                                            course_class_run_project_id:id,
                                            status:type
                                        }
                                    ),
                                    headers:{
                                        'Content-Type':'application/json',
                                        Authorization:eeui.getCaches('token', null).token
                                    }
                                },res=>{ 
                                     if(res.status == '200'){
                                         
                                            if(type==1){
                                                self.$set(item,'status', 1);
                                                self.$set(item,'typetext', '结束');
                                                self.$set(item,'btn', '结束');
                                                type=2;
                                            
                                            }else{
                                                if (result.status == "click" && result.title == "确定") {
                                                    self.$set(item,'status', 2);
                                                    self.$set(item,'typetext', '已完成');
                                                    self.$set(item,'btn', '已结束');
                                                } 
                                            }
                                            //self.doubleClick = true;
                                     } else {
                                         //self.doubleClick = true;
                                          if(res.status=='-1'){
                          
                                            return
                                        }
                                        eeui.toast({
                                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                                gravity:'top'
                                            })
                                     }
                                    
                                })

                            
                            //self.doubleClick = true;

                        } else {
                                //self.doubleClick = true;
                        }
                    })


                //this.doubleClick = false;
                //   var self = this;
                //   stream.fetch({
                //       method:'PUT',
                //       url:API.baseUrl + API.runSendUpdate,
                //         type:'json',
                //         body:JSON.stringify(
                //             {
                //                 course_class_run_project_id:id,
                //                 status:type
                //             }
                //         ),
                //         headers:{
                //              'Content-Type':'application/json',
                //              Authorization:eeui.getCaches('token', null).token
                //         }
                //   },res=>{  
                    
                //       if(res.status == '200'){
                //         if(type==1){
                             
                          
                //         }else{
                //              eeui.confirm({
                //                 title: "温馨提示",
                //                 message: "确定结束吗？",
                //                 buttons: ["取消", "确定"]
                //             }, function(result) {
                //                 if (result.status == "click" && result.title == "确定") {
                //                     self.$set(item,'status', 2);
                //                     self.$set(item,'typetext', '已完成');
                //                     self.$set(item,'btn', '已结束');
                //                 } 
                //             })
                          
                //         }
                     
                //       }else{
                //            if(res.status=='-1'){
                          
                //             return
                //         }
                //           eeui.toast({
                //                 message:decodeURIComponent(res.headers['x-mzq-message']),
                //                 gravity:'top'
                //             })
                //       }
                      
                //   })
              },
              pick (id,type,item) {
                    var self = this;
                    self.runSendUpdate(id,type,item)
                },
              downShowF(item){
                  item.show = !item.show;
              },
            openBottomPopup (item) {

                this.isBottomShow = true;
                this.popTitle = item.title;
                this.run_id = item.course_class_run_id;
            },
            //非状态组件，需要在这里关闭
            popupOverlayBottomClick () {
                this.isBottomShow = false;
            },
            openMask (item) {//打开范围发布
                this.maskshow = true;
                this.hasAnimation = true;
                 this.popTitle = item.title;
                this.run_id = item.course_class_run_id;
                this.getRunActionList(this.run_id);
            },
            wxcMaskSetHidden () {
                this.maskshow = false;
                 this.noRunShow=false;
            },
            editenter(run_id,popTitle){
              // this.isrightSHow = true;

              eeui.openPage({
                    url: "runEdit.js",
                    statusBarColor: "#1eb76e",
                    pageName: "runEdit",
                    animated: false,
                    // params:{courseTitle:courseTitle,title:futitle,id:id,courseId:courseId,ctitle:title,courseRunId:self.course_class_run_id}
                    params: {courseTitle:app.config.params.courseTitle,id:app.config.params.id,title:app.config.params.title,courseId:app.config.params.courseId,runuid:run_id,popTitle:popTitle}
                    },
                    function(result) {
                    //......
                    }
                );

            },
            sendenter(title,item){
                this.sendrightSHow = true;
                this.bigTitle=title;
          
                if(title=="发布预览"){
                   this.actionTitle=item.title;
                   this.radioList.map((val) => {
                        if(val.value==item.action_type){
                            val.checked=true;
                        }else{
                            val.checked=false;
                        }
                  })
                }else{
                    this.actionTitle='';
                     this.radioList.map((val) => {
                       val.checked=false;
                  })
                }
            },
            setenter(){
                eeui.openPage(
                    {
                    url: "set.js",
                    statusBarColor: "#1eb76e",
                    pageName: "设置",
                    animated: false,
                    params: {}
                    },
                    function(result) {
                    //......
                    }
                );
            },
            summenter(){
                eeui.openPage(
                    {
                    url: "summpage.js",
                    statusBarColor: "#1eb76e",
                    pageName: "汇总",
                    animated: false,
                    params: {}
                    },
                    function(result) {
                    //......
                    }
                );
            },
            fwcolse(){
                console.log('111111');
                this.sendrightSHow = false;
            },
            wxcCellClicked (e) {
                // this.pick();
            },
            wxcCellClicked2 (e) {
                // this.pick2();
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
                     
                  }else{
                        if(res.status=='-1'){
                            this.netWorkShow=true;
                            return
                        }
                    }
                  //console.log(res);
              })
            },
            cancleApply(){
                this.noRunShow=false;
            },
            norunC(id){
                let self = this;
            
                self.runListDate.forEach(function(item,index){
                    if(item.course_class_run_id==id){
                        if(item.no_run==1){
                            self.noRunShow=true;
                            self.isBottomShow=false;
                            
                        }else{
                             
                            self.noRunShow=false;
                            self.isBottomShow=true;
                            eeui.toast({
                                message:'未发布免跑哦',
                                gravity:'top'
                            })
                        }
                       
                    }

                })  

                if(self.noRunShow==true){
                    stream.fetch({
                        method:'GET',
                        url:API.baseUrl + API.runUserList + '?course_class_run_id=' + id,
                        type:'json',
                        headers:{
                                Authorization:eeui.getCaches('token', null).token
                        }
                    },res=>{
                   
                        if(res.status == '200'){
                            self.runApplyInfo=res.data
                     
                            if(self.runApplyInfo.length!=0){
                                self.no_run_message=self.runApplyInfo[0].no_run_message;
                                if(self.runApplyInfo[0].no_run_src!=''){
                                     self.no_run_src=JSON.parse(self.runApplyInfo[0].no_run_src);
                                }
                             
                            }
                        }   
                    })
                } 
            },
            uploadPic(){
               
                let self = this;
                let cpath='';
                let picPath='';
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
            appLyNOrun(id){
                var self = this;
                  stream.fetch({
                      method:'PUT',
                      url:API.baseUrl + API.getNoRun,
                        type:'json',
                        body:JSON.stringify(
                            {
                                course_class_run_id:id,
                                no_run_src:JSON.stringify(self.no_run_src),
                                no_run_message:self.no_run_message
                            }
                        ),
                        headers:{
                            'Content-Type':'application/json',
                             Authorization:eeui.getCaches('token', null).token
                        }
                  },res=>{
                 
                      if(res.status == '200'){
                          self.courseRunuserId= res.data.course_class_run_user_id;
                          eeui.setCaches('courseRunuserId', self.courseRunuserId, 0)
                          self.noRunShow=false;
                           eeui.toast({
                                message: '提交成功',
                                gravity: 'top'
                            });
                      }else{
                          if(res.status=='-1'){
                                self.netWorkShow=true; 
                                return
                            }
                              eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })
                      }
                 
                     
                  })
            },
            

            delPic(){
                this.delPicShow=!this.delPicShow;
            },
            del(pic,index){
                let self = this;
              
                self.no_run_src.splice(index,1)
            },
            fwcolse(){
                this.noRunShow=false;
                this.sendrightSHow = false;
                this.no_run_src=[];
                this.no_run_message='';
            }
            // pick () {
            //     picker.pick({
            //     items: this.items
            //     }, event => {
            //     if (event.result === 'success') {
            //         this.value = this.items[event.data];
            //     }
            //     })
            // },
            // pick2 () {
            //     picker.pick({
            //     items: this.items2
            //     }, event => {
            //     if (event.result === 'success') {
            //         this.value2 = this.items2[event.data];
            //     }
            //     })
            // },
        },
         watch: {
             radioType(val){
                 this.radioType=val;
             }
         },
        created(){
            // 添加 字体图标
            let domModule = weex.requireModule('dom');
            domModule.addRule('fontFace',{
            'fontFamily': "iconfont",
            'src': "url('http://at.alicdn.com/t/font_1628280_9y2saiqn3g4.ttf')"
            })

            this.runList(app.config.params.id);
            this.getUserInfo();
       
// let variable = eeui.getLocalVersionName();
// let variable1 = eeui.getLocalVersion();
//            console.log(variable1,variable,eeui.getSDKVersionCode())
        }
     }
</script>
<style scoped>
.container{
    width: 750;
    background-color: #fff;
}
.itemBar{
    height:150;
    flex-direction: row;
    border-bottom-color: #ebebeb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    justify-content:space-between;
    margin-left:30;
    margin-right:30;
}
.imgbox{
    width: 150px;
    height: 94px;
    position: relative;
    border-radius: 6px;
    margin-top: 30px;
    margin-left: 30px;
}
.textworld{
   
    justify-content:center;
    
}
.titword{
    font-size: 28;
    color: #999;
    font-weight:bold;
}

.ren{
   font-size: 20;
   color: #999; 
}
.imgtext{
    width: 150px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    font-size: 20;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
.btnAll{
     height:150;
}
.button {
    font-size: 24px;
    margin-left: 37px;

    width: 120px;
    height: 50px;
    color: #ffffff;
    margin-top:45px;
}

.downIMg{
    margin-left: 70px;
    width:90;
    height:90;
    background-color:#f43129;
    align-items:center;
    justify-content:center;
}
.leftIcon{
    font-family:iconfont;
    font-size:60;
    color:#fff;
}

.downitem{
    flex-direction: row;
    padding-top: 20px;
    align-items: center;
     border-bottom-color: #ebebeb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-bottom:20px;
    background-color:#fbfbfb;
}
.dowmTit{
    font-size: 26;
    color: #666;
    margin-left: 20px;
    font-weight:bold;
    margin-bottom:10px;
}
.dowmTitFu{
    margin-left: 20px;
    font-size:20px;
    color:#999;
    font-weight:bold;
}
.iconmore{
    width: 120px;
    height: 30px;
    color: #999;
    margin-left:50;
    margin-top:10;
    font-size:44px;
}
.iconmore1111{
    margin-top:58px;
}
.popoverTit{
    height: 66;
    line-height: 66;
    font-size: 30;
    color: #333;
    border-bottom-color: #999;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    text-align: center;
}
.popoverIconList{
    flex-direction: row;
   flex-wrap: wrap; 
   height:332;
}
.popoverItem{
    width: 250px;
    margin-top: 30px;

}
.popoverText{
    text-align: center;
    font-size: 26;
    color: #666;
}
.maskclassLinebox{
    height: 620;
}
.maskclassLine{
    flex-direction: row;
    justify-content: space-between;
    height: 80;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    align-items: center;
    margin-left: 30;
    margin-right: 30;
}

.masktitle{
    font-size: 27;
    text-align: center;
    height: 80;
    line-height: 80;
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: #2222;
}

.commitBtn{
    flex-direction: row;
    margin-top: 20;
}
.maskbutton{
    width: 330;
    height: 80;
}
.sendleft{
    flex-direction: row;
    flex:1;
}
.sendlefttit{
    font-size: 26;
    width: 200;
    color: #333;
    margin-left: 30;
}
.sendlefttype{
    width: 250;
    color: #999;
    font-size: 24;
}
.sendbtn{
    width: 90;
    height: 40;
    border-width: 1px;
    border-style: solid;
    border-color: #45d586;
    border-radius: 4;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.sendbtngrey{

    border-color: #999999;
     color: #999999;
    
}
.sendbtntext{
    font-size: 20;
    color: #45d586;
    margin-left: 5;
}
.sendbtnred{
    border-color: #fe7d77;
    color: #fe7d77;
}
.sendbtnicon{
    font-size: 20;
    font-family: iconfont;
    color: #45d586;
}
.iconfontIcon{
    width: 90px;
    height: 90px;
    background-color: #ff5100;
    color: #fff;
    font-size: 50;
    font-family: iconfont;
    text-align: center;
    line-height: 90;
    margin-left: 80;
    margin-bottom: 10;
}
.iconfontIcon2{
    background-color: #ffa200;
}
.iconfontIcon3{
    background-color: #eb73b1;
}
.iconfontIcon4{
    background-color: #0494ef;
}
.iconfontIcon5{
    background-color: #2fdc7e;
}
.iconfontIcon6{
      background-color: #ffa200;
}
.popover-content{
    position:relative;
}
.cancelBtn{
    width:750;
    height:80;
    position:fixed;
    bottom:0;
    left:0;
    text-align:center;
    line-height:80;
    background-color:#eaeaea;
    color:#666;
    font-size:26;
}

.navbarb{
      flex:1;
        height: 100px;
        background-color: #1eb76e;
    }
     .headtext {
        font-size: 30px;
        color: #ffffff;
    }
    .iconshow{
        font-family:iconfont;
        font-size:50;
        color:#2fdc7e;
    }
    .celltitle{
        flex-direction:row;
        margin-left:15;
        align-items:center;
        
    }
    .icontit{
        font-size:30;
        color:#199153;
        margin-left:10;
    }
    .beiaerebox{
        width:750;
        align-items:center;
        margin-top:20;
    }
    .beiaere{
        width:689;
        height:100;
        border-style:soild;
        border-color:#999;
        border-width:1;
        font-size:28;
    }
    /* .button{
        width:680;
        height:90;
        margin-top:200;

    } */
    .inputText{
        width: 400px;
        height: 80px;

    }
    .cellItem{
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    height: 100px;
    align-items: center;
    border-bottom-color: #e3e3e3;
    border-bottom-width: 1px;
    border-bottom-style: solid;
   
}
.rightInput{
    width: 500;
    height: 90;
    font-size: 30px;
    text-align: right;
    padding-right: 55px;

}
.rightInput1{
     font-size: 30px;
    line-height:90px;
  

}
.leftText{
    padding-left: 25px;
    font-size: 30px;
    color: #333;
}
.righttext{
    padding-right: 25px;
    font-size: 30px;
    color: #333;
}
.editBack{
    font-size: 28px;
    margin-left: 30px;
    color: #ffffff;
}
.buttonedit{
     width:680;
        height:90;
        margin-top:200;
}
.bottomBtn{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 750;
        height: 100;
        flex-direction: row;
    }
    .cancelBtn2{
        width: 375;
        height: 100;
        color: #666;
        background-color: #dddddd;
        text-align: center;
        line-height: 100;
        font-size: 30;
    }
    .sureBtn{
        width: 375;
        height: 100;
        color: #fff;
        background-color:#1eb76e;
        text-align: center;
        line-height: 100;
        font-size: 30;
    }
    .icon11{
        color: #ffffff;
        width: 100px;
        height:100px;
        font-size:40px;
    }
    .radioBox{
        position:relative;
        width:42px;
        height:42px;
        border-color:#e0e0e0;
        border-width:2px;
        border-style:soild;
        align-items:center;
         justify-content: space-between;
    }
    .radioSh{
         border-color:#f29c00;
    }
    .radioC{
        width:40px;
        height:40px;
        font-size:34px;
        text-align:center;
        color:#f29c00;
    }
    .NORUNCCC{
        padding:0 30px;
    }
    .notips1{
        padding:18 0;
        font-size:26px;
        color:#222;
    }
    .textarea{
        border-style:soild;
        border-width:1px;
        border-color:#999;
        width:600px;
       padding:12px 20px;
        height:280px;        
    }
    .notips2{
        padding:18 0;
        font-size:26px;
        color:#222;
    }
    .uploadP{
        padding:0 0 10px;
        width:600px;
        flex-direction:row;
        align-items:center;
     
    }
    .uppicB{
        border-style:soild;
        border-width:1px;
        border-color:#999;
        width:110px;
        height:110px;
        text-align:center;
        flex-direction:row;
        align-items:center;
        margin:0 10px;
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
    padding: 20px 20px 0;
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
   margin-left:10px;
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
.norun{
    width:26px;
    height:26px;
}
</style>
