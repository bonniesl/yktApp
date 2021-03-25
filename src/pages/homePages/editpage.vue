<template>
    <div class="app">
        <navbar class="navbarb">  
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">编辑运动</text>
            </navbar-item>
        </navbar>

        <div class="cellList">
            <wxc-cell label="标题"
                :has-arrow="false"
                title="体制测评"
                :has-margin="true"></wxc-cell>

            <wxc-cell label="年级"
                :title="value"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked"
                :has-margin="true"></wxc-cell>
            <wxc-cell label="运动项目"
                :title="value2"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClicked2"
                :has-margin="true"></wxc-cell>
        </div>
        <div class="celltitle">
            <text class="iconshow">&#xe606;</text>
            <text class="icontit">备注</text>
        </div>
        <div class="beiaerebox">
            <textarea class="beiaere"></textarea>

            <button class="button" :eeui="{text:'保存',backgroundColor:'#1eb76e'}"></button>
        </div>

         
        

        


    </div>
</template>
<script>
import { WxcCell } from 'weex-ui';
const picker = weex.requireModule('picker')
const eeui = app.requireModule('eeui');
export default {
    components: { WxcCell },
    data(){
        return{
           timeValue: '',
            dateValue: '',
            value: '' ,
            value2: '' ,

            items:['大一', '大二', '大三','大四','高一','高二','高三'],
            items2:['身高', '体重', '跑步','跳远']
        }
    },
    methods: {
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

    }
</style>
