<template>
    <div class="loginPage">
            <!-- tab -->
         <navbar class="navbar">
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                    <text class="text">找回密码</text>
            </navbar-item>
            
        </navbar> 

        <div class="logo">
            <image class="image" src="../../assets/images/logo.png"></image>
        </div>

        <div class="formInput">
            <div class="iphoneNum">
                <icon class="presonIcon" :eeui="{
                    content:iconList[0],
                    fontSize:45,
                    color:'#242424'}"></icon>
                <input class="inputNum" type="tel" v-model="mobile" max-length="11"  placeholder="请输入手机号码" placeholder-color="#c7c7c7">
            </div>
            <div class="iphoneNum">
                <icon class="presonIcon" :eeui="{
                    content:iconList[1],
                    fontSize:45,
                    color:'#242424'}"></icon>
                <input class="inputNum2" type="number" v-model="code"  max-length="4" placeholder="请输入验证码" placeholder-color="#c7c7c7">
                <text class="yzmText" @click="getCode" v-if="show">获取验证码</text>
                <text class="yzmText yzmTextGgrey" v-if="!show">倒计时{{count}}s</text>
            </div>
            <button class="button" @click="getForget" :eeui="{text:'下一步',backgroundColor:'#1eb76e',borderRadius:'20'}"></button>
           
        </div>


        





    
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');
 const stream = app.requireModule('stream');
import API from '../../fetch/api/apis'
export default {
    data () {
        return {
            iconList:[
                'md-phone-portrait',
                'md-lock'
            ],
            mobile:'',
            code:'',
            show: true,
            count: '',
            timer: null,
        }
    },
    methods: {
        back() {
            eeui.openPage({
                url: 'loginpage.js',
            }, function(result) {
                //......
            }); 
        },
        getTimes(){
            const TIME_COUNT = 60;
            if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
                this.count--;
                } else {
                this.show = true;
                clearInterval(this.timer);
                this.timer = null;
                }
            }, 1000)
            }
        },
        getCode(){

            

             
                var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
                if (this.mobile == "") {
                    eeui.toast({
                    message: "手机号不能为空",
                    gravity: "top"
                    });
                    return;
                } else if (this.mobile.length != 11) {
                    eeui.toast({
                    message: "请输入11位手机号码！",
                    gravity: "top"
                    });
                    return;
                } else if (!myreg.test(this.mobile)) {
                    eeui.toast({
                    message: "请输入有效的手机号码！",
                    gravity: "top"
                    });
                    return;
                }

           
            stream.fetch({
                method:'POST',
                type:'json',
                url:API.baseUrl + API.getCode,
                body:JSON.stringify({mobile:this.mobile}),
                headers:{
                    'Content-Type': 'application/json',
                }
            },(res)=>{
                if(res.status == 200){
                    this.getTimes();
                }else{
                    eeui.toast({
                        message:decodeURIComponent(res.headers['x-mzq-message']),
                        gravity:'top'
                    });
                }
            })
        },
        getForget(){

            if(this.mobile == ''){
                eeui.toast({
                    message:'手机号必填',
                    gravity:'top'
                })

                return false;
            }

            if(this.code == ''){
                eeui.toast({
                    message:'验证码必填',
                    gravity:'top'
                })

                return false;
            }

             stream.fetch({
                method:'POST',
                type:'json',
                url:API.baseUrl + API.forgetPassword,
                body:JSON.stringify({mobile:this.mobile,code:this.code}),
                headers:{
                    'Content-Type': 'application/json',
                }
            },(res)=>{
                if(res.status == 200){
                    eeui.openPage({
                        url: 'repassword.js',
                        statusBarColor:'#1eb76e',
                        animated:false,
                        params:{tokenR:res.data,mobile:this.mobile}
                    }, function(result) {
                        
                    }); 
                }else{
                    eeui.toast({
                        message:decodeURIComponent(res.headers['x-mzq-message']),
                        gravity:'top'
                    });
                }
            })
        }
    },
}
</script>
<style scoped>
.loginPage{
    background-color: #e7e8ec;
}
    .navbar {
        width: 750px;
        height: 100px;
        background-color: #e7e8ec;
    }
    .icon {
        width: 100px;
        height: 100px;
        color: #666;
    }
    .text {
        font-size: 36px;
        color: #1c1d21;
    }
    .logo{
        margin-top: 40;
        width: 150;
        height: 150;
        align-self: center;
    }
    .image{
        width: 150px;
        height: 150px;
        
    }
    .iphoneNum{
        width: 600px;
        align-self: center;
        position: relative;
        margin-top: 20px;
        background-color: #fff;
        border-radius: 20;
        
    }
    .presonIcon{
        width: 120px;
        height: 40px;
        position: absolute;
        top: 30;
        left: 0;
        border-right-color: #999;
        border-right-style: solid;
        border-right-width: 1px;

    }
    .yzmText{
        position: absolute;
        top: 0;
        right: 10;
        color: #1eb76e;
        font-size: 28;
        width: 150;
        height: 100px;
        line-height: 100;
    }
    .yzmTextGgrey{
        color: #999;
    }
    .inputNum{
         padding-left: 10px;
        height: 100px;
        font-size: 30px;
        width: 600px;
        border-radius: 20px;
        padding-left: 150px;
        

    }
    .inputNum2{
        height: 100px;
        font-size: 30px;
        width: 600px;
        padding-right: 220px;
        border-radius: 20px;
        padding-left: 150px;
        

    }
    .button {
        font-size: 24px;
        margin-bottom: 20px;
        width: 600px;
        height: 100px;
        border-radius: 100px;
        align-self: center;
        margin-top: 80px;
        font-size: 32;
        background-color: #1eb76e;
    }

    .button2 {
        font-size: 24px;
        margin-bottom: 20px;
        width: 450px;
        height: 100px;
        align-self: center;
        margin-top: 20px;
        font-size: 32;
    }
    .ftext{
        text-align: right;
        color: #97989c;
        font-size: 26;
        margin-right: 80;
        margin-top: 30px;
    }
    .gorecharge{
        margin-right: 20px;
        font-size: 32;
        color: #444;
    }
</style>