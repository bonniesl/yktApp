<template>
    <div class="loginPage">
            <!-- tab -->
         <navbar class="navbar">
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                    <text class="text">重置密码</text>
            </navbar-item>
            
        </navbar> 


        <div class="formInput">
            <div class="iphoneNum">
                <icon class="presonIcon" :eeui="{
                    content:iconList[1],
                    fontSize:45,
                    color:'#242424'}"></icon>
                <input class="inputNum" type="text" v-model="password"   placeholder="请输入密码" placeholder-color="#c7c7c7">

            </div>

            <div class="iphoneNum">
                <icon class="presonIcon" :eeui="{
                    content:iconList[1],
                    fontSize:45,
                    color:'#242424'}"></icon>
                <input class="inputNum" type="text" v-model="password_confirmation"   placeholder="请输入确认密码" placeholder-color="#c7c7c7">
                
            </div>
            
            <button class="button" @click="submitBtn" :eeui="{text:'确定',backgroundColor:'#1eb76e',borderRadius:'20'}"></button>
           
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
            password:'',
            password_confirmation:'',
           
           
        }
    },
    methods: {
       
        submitBtn(){
            if(this.password == ''){
                eeui.toast({
                    message:'密码不能为空',
                    gravity:'top'
                })

                return false;
            }

            if(this.password != this.password_confirmation){
                eeui.toast({
                    message:'两次密码不一致',
                    gravity:'top'
                })

                return false;
            }

            console.log(this.password);
            stream.fetch({
                method:'POST',
                type:'json',
                url:API.baseUrl + API.reSetPass,
                body:JSON.stringify({
                    mobile:app.config.params.mobile,
                    password:this.password,
                    password_confirmation:this.password_confirmation,
                    token:app.config.params.tokenR
                    }),
                headers:{
                    'Content-Type': 'application/json',
                }
            },(res)=>{
                console.log(res);
                if(res.status == 200){

                   eeui.openPage({
                        pageName: 'login',
                        pageType: 'app',
                        url: 'loginpage.js'
                    }, function(result) {
                        //......
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
    created () {
        // console.log(app.config.params.mobile);
        // console.log(app.config.params.tokenR);
    }
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