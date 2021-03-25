<template>
    <div class="app">
        <navbar class="navbarb">  
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">新增运动</text>
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
                   v-model="title"
                  
                  
                > 
            </div> 

            <!-- <wxc-cell label="年级"
                :title="value"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-margin="true"></wxc-cell> -->
            <!-- <wxc-cell label="运动项目"
                :title="value2"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked2"
                :has-margin="true"></wxc-cell> -->
        </div>
        <!-- <div class="celltitle">
            <text class="iconshow">&#xe606;</text>
            <text class="icontit">备注</text>
        </div> -->
        <div class="beiaerebox">
            <!-- <textarea class="beiaere"></textarea> -->

            <button class="button" @click="createRun(title,id,courseTitle,futitle,courseId)" :eeui="{text:'保存',backgroundColor:'#1eb76e'}"></button>
        </div>
        
        <run-set v-if="runsetShow" @runclose="closeDialog"  :run-id="course_class_run_id" :run-title="title" ></run-set>

    </div>
     
</template>
<script>
import { WxcCell } from 'weex-ui';
const picker = weex.requireModule('picker')
const eeui = app.requireModule('eeui');
const stream = app.requireModule('stream');
import API from '../../../fetch/api/apis'
import runSet from "../../../components/runSet";

export default {
    components: { WxcCell ,runSet},
    data(){
        return{
           timeValue: '',
            dateValue: '',
            value: '' ,
            value2: '' ,
            title:'',
            items:['大一', '大二', '大三','大四','高一','高二','高三'],
            items2:['身高', '体重', '跑步','跳远'],
            id:app.config.params.id,
            futitle:app.config.params.title,
            courseTitle:app.config.params.courseTitle,
            runsetShow:false,
            courseId:app.config.params.courseId,
            course_class_run_id:0
        }
    },
    methods: {
      //跑步主题创建
              createRun(title,id,futitle,courseTitle,courseId){
                  let self = this;
                  stream.fetch({
                      method:'POST',
                      type:'json',
                      url:API.baseUrl + API.createRun,
                      body:JSON.stringify(
                          {
                              title:title,
                              course_class_id:id
                          }
                      ),
                      headers:{
                        'Content-Type':'application/json',
                        Authorization:eeui.getCaches('token', null).token
                      }
                  },res=>{
                      
                      if(res.status == '200'){
                        //   self.runsetShow=true;
                        self.course_class_run_id = res.data.course_class_run_id;
                        eeui.openPage({
                            pageName: 'setrun',
                            pageType: 'app',
                            url: '../set.js',
                            params:{courseTitle:courseTitle,title:futitle,id:id,courseId:courseId,ctitle:title,courseRunId:self.course_class_run_id}
                        }, function(result) {
                        });
                      }else{
                          eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                            })
                      }
                     
                  })
              },  
              closeDialog(){
                  this.runsetShow=false;
              },
            wxcCellClicked (e) {
                this.pick();
            },
            wxcCellClicked2 (e) {
                this.pick2();
            },
            pick () {
                picker.pick({
                items: this.items
                }, event => {
                if (event.result === 'success') {
                    this.value = this.items[event.data];
                }
                })
            },
            pick2 () {
                picker.pick({
                items: this.items2
                }, event => {
                if (event.result === 'success') {
                    this.value2 = this.items2[event.data];
                }
                })
            },
    },
    created(){
        // 添加 字体图标
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace',{
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
        })

         let platform = WXEnvironment.platform.toLowerCase();
         let self = this;
         if(platform!='ios'){
             eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
                eeui.toastClose();
                  eeui.openPage({
                        pageName: 'layout',
                        pageType: 'app',
                        url: '../layoutPage.js',
                        params:{courseTitle:self.courseTitle,title:self.futitle,id:self.id,courseId:self.courseId}
                    }, function(result) {
                        //......
                    });
            });
         }

        
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
    .button{
        width:680;
        height:90;
        margin-top:200;
        background-color: #1eb76e;

    }
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
.leftText{
    padding-left: 25px;
    font-size: 30px;
    color: #333;
}
</style>
