<template>
    <div class="app">
        <navbar class="navbarb">  
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">课程设置</text>
            </navbar-item>
        </navbar>
        <scroller class="scroller">
        <div class="settab">
            <div class="setItem" @click="openMask">
                <div class="left">
                    <text class="settabicon">&#xe676;</text>
                    <text class="settabtext">绑定运动</text>
                </div>
                <div class="right">
                    <text class="righttext">大学生校园跑</text>
                    <text class="rightArrow">&#xe6d8;</text>
                </div>
            </div>
            <div class="setItem" @click="openMask2">
                <div class="left">
                    <text class="settabicon">&#xe72d;</text>
                    <text class="settabtext">运动星期设置</text>
                </div>
                <div class="right">
                    <text class="righttext">{{dataTime}}</text>
                    <text class="rightArrow">&#xe6d8;</text>
                </div>
            </div>
            <div class="setItem" @click="openBottomPopup">
                <div class="left">
                    <text class="settabicon">&#xe72d;</text>
                    <text class="settabtext">运动时间设置</text>
                </div>
                <div class="right">
                    <text class="righttext">00：00-24：00</text>
                    <text class="rightArrow">&#xe6d8;</text>
                </div>
            </div>
            <div class="setItem">
                <div class="left">
                    <text class="settabicon">&#xe69c;</text>
                    <text class="settabtext">打卡点设置</text>
                </div>
                <div class="right">
                    <text class="righttext">东教学楼</text>
                    <text class="rightArrow">&#xe6d8;</text>
                </div>
            </div>

            <div class="setbigItem">
                <div class="setbigline">
                    <text class="settabicon">&#xe71f;</text>
                    <text class="settabtext">本学期目标（男）</text>
                    <input class="inputBox" type="number" value="0">
                    <text class="comp">公里</text>
                </div>
                <div class="setbigline">
                    <text class="settabtext ml60">单次最低:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <text class="settabtext ml44">单次最高:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                </div>
                <div class="setbigline">
                    <text class="settabtext ml60">分值设置:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text style="margin-left:20;">-</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <input class="inputBoxM" style="margin-left:98;" type="number" value="0">
                    <text class="comp">分</text>
                    <text class="additem">&#xe60a;</text>
                </div>
                <div class="setbigline">
                    <input class="inputBoxM" style="margin-left:200;" type="number" value="0">
                    <text style="margin-left:20;">-</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <input class="inputBoxM" style="margin-left:98;" type="number" value="0">
                    <text class="comp">分</text>
                    <text class="deleteIcon">&#xe712;</text>
                </div>
            </div>
            <div class="setbigItem">
                <div class="setbigline">
                    <text class="settabicon">&#xe71f;</text>
                    <text class="settabtext">本学期目标（女）</text>
                    <input class="inputBox" type="number" value="0">
                    <text class="comp">公里</text>
                </div>
                <div class="setbigline">
                    <text class="settabtext ml60">单次最低:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <text class="settabtext ml44">单次最高:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                </div>
                <div class="setbigline">
                    <text class="settabtext ml60">分值设置:</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text style="margin-left:20;">-</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <input class="inputBoxM" style="margin-left:98;" type="number" value="0">
                    <text class="comp">分</text>
                    <text class="additem">&#xe60a;</text>
                </div>
                <div class="setbigline">
                    <input class="inputBoxM" style="margin-left:200;" type="number" value="0">
                    <text style="margin-left:20;">-</text>
                    <input class="inputBoxM" type="number" value="0">
                    <text class="comp">公里</text>
                    <input class="inputBoxM" style="margin-left:98;" type="number" value="0">
                    <text class="comp">分</text>
                    <text class="deleteIcon">&#xe712;</text>
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
                     <input class="inputBoxM" type="number" value="0">
                    <text class="rightArrow">%</text>
                </div>
            </div>
            

        </div>


         <button class="commit" :eeui="{text:'提交',backgroundColor:'#1eb76e'}"></button>
        </scroller>

        <!-- 绑定课程 -->
        <wxc-mask height="400"
              width="500"
              border-radius="8"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-animation="hasAnimation"
              :has-overlay="true"
              :show-close="true"
              :show="maskShow"
              @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="content">
                <text class="maskTit">输入绑定课程码</text>
                    <div class="enterinputBox">
                        <input class="enterMa" placeholder="输入班级码" type="text">
                    </div>
                <div class="groupBtn">
                    <button class="sureBtn" :eeui="{text:'绑定课程',backgroundColor:'#1eb76e'}"></button>
                </div>
            </div>
        </wxc-mask>
        <!-- 星期选择 -->
        <wxc-mask height="1000"
              width="640"
              border-radius="8"
              duration="200"
              mask-bg-color="#FFFFFF"
              :has-animation="hasAnimation"
              :has-overlay="true"
              :show-close="true"
              :show="maskShow2"
              @wxcMaskSetHidden="wxcMaskSetHidden2">
            <div class="content">
                <wxc-checkbox-list :list="list"
                           @wxcCheckBoxListChecked="wxcCheckBoxListChecked" @wxcCheckBoxItemChecked="wxcCheckBoxItemChecked"></wxc-checkbox-list>
                           <button class="databutton" @click="wxcMaskSetHidden2" :eeui="{text:'确定',backgroundColor:'#1eb76e',fontSize:'30'}"></button>
            </div>
        </wxc-mask>
        <!-- 时间设置 -->
        <wxc-popup popup-color="#ffffff"
                :show="isBottomShow"
                @wxcPopupOverlayClicked="popupOverlayBottomClick"
                pos="bottom"
                :height="height">
            <div class="content">
                
                <text class="databox" style="margin-top:20;">时间选择</text>
                <div class="dataList">
                    <text class="timedata"  @click="pickTime">{{dateStartValue}}</text>
                    <text class="timedata2">-</text>
                    <text class="timedata" @click="pickTime2">{{dateEndValue}}</text>
                </div>
                 <button class="sureBtn2" :eeui="{text:'确定',backgroundColor:'#1eb76e'}"></button>
            </div>
        </wxc-popup> 

     


        
    </div>
</template>
<script>
import { WxcMask,WxcPopup,WxcCheckboxList    } from 'weex-ui';
const picker = weex.requireModule('picker')
export default {
    components: { WxcMask,WxcPopup,WxcCheckboxList   },
    data () {
        return {
            loading:false,
            maskShow: false,
            overlayCanClose: true,
            isFalse: false,
            hasAnimation: true,
            maskShow2: false,
            hasAnimation2:true,
            isBottomShow: false,
            height: 600,
            timeStartValue: '选择开始日期',
            timeEndValue: '选择结束日期',
            dateStartValue: '选择开始时间',
            dateEndValue: '选择结束时间',
            value: '',
            checkedList: [],
            dataTime:'',
            list: [
                { title: '全部', value: '全部' },
                { title: '周一', value: '周一' },
                { title: '周二', value: '周二' },
                { title: '周三', value: '周三' },
                { title: '周四', value: '周四' },
                { title: '周五', value: '周五' },
                { title: '周六', value: '周六' },
                { title: '周日', value: '周日' }
            ],
            
        }
    },
    filters:{
        dataTimeForamt(val){
            if(val == '时间段选择'){
                return val;
            }else{
                return val.join('至');
            }
        }
    },
    methods: {
        openMask (e) {
            this.maskShow = true;
            this.hasAnimation = true;
        },
        openMask2 (e) {
            this.maskShow2 = true;
            this.hasAnimation2 = true;
        },
        wxcMaskSetHidden () {
            this.maskShow = false;
        },
        wxcMaskSetHidden2 () {
            this.maskShow2 = false;
            // if(this.checkedList.length == '7'){
            //     this.dataTime = '每天';
            // }else{
                this.dataTime = this.checkedList.join('/');
            //}
            
            
        },
        openBottomPopup () {
            this.isBottomShow = true;
        },
        //非状态组件，需要在这里关闭
        popupOverlayBottomClick () {
            this.isBottomShow = false;
        },
        pickDate (val) {
        picker.pickDate({
          value: this.value
        }, event => {
          if (event.result === 'success') {
            this.timeStartValue = event.data
            
          }
        })
      },
      
      
      pickTime () {
        picker.pickTime({
          value: this.dateStartValue
        }, event => {
          if (event.result === 'success') {
            this.dateStartValue = event.data
          }
        })
      },
       wxcCheckBoxListChecked (e) {
        this.checkedList = e.checkedList;
        
      },
      wxcCheckBoxItemChecked(e){
          eeui.toast(e.checked)
      }
        
        
    },
    created(){
        // 添加 字体图标
        let domModule = weex.requireModule('dom');
        domModule.addRule('fontFace',{
        'fontFamily': "iconfont",
        'src': "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
        })

        
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
    .settab{
        width: 690;
        margin-left: 30;
    }
    .setItem{
        flex-direction: row;
        justify-content: space-between;
        height: 100;
        border-bottom-color:#c2c2c2;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        align-items: center;
    }
    .rightArrow{
        font-size: 40;
        font-family: iconfont;
        color: #c2c2c2;
        margin-left: 30;
    }
    .settabicon{
        font-size: 40;
        font-family: iconfont;
        color: #1eb76e;
    }
    .left{
        flex-direction: row;
         align-items: center;
    }
    .right{
        flex-direction: row;
        align-items: center;
    }
    .settabtext{
        font-size: 28;
        color: #666;
        margin-left: 20;
    }
    .righttext{
        font-size: 28;
        color: #333;
    }
    .setbigItem{
        border-bottom-color:#c2c2c2;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 30;
    }
    .setbigline{
        flex-direction: row;
        align-items: center;
        margin-top: 30;
        
    }
    .inputBox{
        width: 60;
        height: 40;
        background-color: #e9e9e9;
        text-align: center;
        line-height: 40;
        font-size: 26;
        margin-left: 255;
    }
    .inputBoxM{
        width: 60;
        height: 40;
        background-color: #e9e9e9;
        text-align: center;
        line-height: 40;
        font-size: 26;
        margin-left: 20;
    }
    .comp{
        font-size: 28;
        color: #666;
        margin-left: 20;
    }
    .ml60{
        margin-left: 60;
    }
    .ml44{
        margin-left: 64;
    }
    .additem{
        font-size: 36;
        font-family: iconfont;
        color: #ce7d14;
        margin-left: 10;
    }
    .deleteIcon{
        font-size: 37;
        font-family: iconfont;
        color: #d82e61;
        margin-left: 8;
    }
    .commit{
        width: 690;
        margin-left: 30;
        height: 80;
        margin-top: 50;
        margin-bottom: 50;
    }
    .maskTit{
        font-size: 28;
        margin-top: 20;
        color: #333;
        border-bottom-color:#c2c2c2;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 20;
        padding-left: 20;
    }
    .enterinputBox{
        height: 250;
        
    }
    .enterMa{
        border-width: 1px;
        border-style: solid;
        border-color: #c2c2c2;
        width: 400;
        height: 80;
        margin-left: 50;
        margin-top:80;
        padding-left: 10;

    }
    .sureBtn{
        width: 440px;
        height: 60;
        margin-left: 30;
    }
    .databox{
        font-size: 32;
        border-bottom-color:#c2c2c2;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-bottom: 20;
        padding-top: 20;
        padding-left: 20;
        /* font-weight: bold; */
        
    }
    .timebox{
        margin-top: 20;
        margin-left: 20;
        flex-direction: row;
    }
    .timedata{
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
    .timedata2{
        font-size: 28;
        padding-left: 30;
        padding-right: 30;
        padding-top: 10;
        padding-bottom: 10;
        margin-right: 10;
        border-radius: 8;
        margin-top: 20;
    }
    .cur{
        background-color: #1eb76e;
        color: #ffffff;
    }
    .dataList{
        flex-direction: row;
        margin-left: 80;
        margin-top: 60;
    }
    .sureBtn2{
        width: 690;
        margin-left: 30;
        margin-top: 160;
        height: 80;
    }
    .databutton{
        width: 600px;
        height: 80px;
        margin-left: 20;
        margin-top: 30;
    }
</style>