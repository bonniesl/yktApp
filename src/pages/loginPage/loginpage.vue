<template>
    <div class="loginPage">
            <!-- tab -->
         <!-- <navbar class="navbar">
            <navbar-item type="title">
                    <text class="text">登录账号</text>
            </navbar-item>
            
        </navbar>  -->
        

        <!-- <div class="logo">
            <image class="image" src="../../assets/images/logo.png"></image>
        </div> -->

        <div class="loginBg">
            <image class="headBg" src="../../assets/images/loginbg.jpg"></image>
        </div>

        <div class="newBox">

            <div class="tabBar">
                <text class="tabBarLeft" :class="[!tabShow? 'cur' :'']" @click="weixinTab(1)" v-if="isWechatShow">微信登陆</text>
                <text class=" tabBarRight" :class="[tabShow? 'cur' :'']" @click="weixinTab(2)">手机号登陆</text>
                
            </div>
            <div class="newBoxLeft" v-if="!tabShow">
                <image class="weixinIcon" src="../../assets/images/weixin.png"></image>
                <button class="weixinbutton" @click="weixinLogin(1)" text="微信登陆" model="green"></button>
                <div class="weixinbox" v-if="isWechatShow">
                    <image class="littleweixin" src="../../assets/images/litteweixin.png"></image>
                    <text class="weixinTEXT" 
                        @click="weixinLogin(2)"
                        > 没有账号？立即注册</text>

                </div>
                
            </div>

            <div class="newBoxLeft" v-if="tabShow">
                <div class="formInput">
                <div class="iphoneNum">
                    <icon class="presonIcon" :eeui="{
                        content:iconList[0],
                        fontSize:45,
                        color:'#242424'}"></icon>
                    <input class="inputNum" type="tel"  v-model="iphone " placeholder="请输入手机号码" placeholder-color="#c7c7c7">
                </div>
                <div class="iphoneNum">
                    <icon class="presonIcon" :eeui="{
                        content:iconList[1],
                        fontSize:45,
                        color:'#242424'}"></icon>
                    <input class="inputNum inputpassword" :type="inputType" v-model="password"  placeholder="请输入密码" placeholder-color="#c7c7c7">
                    <icon class="eyeicon" @click="openShowPassword" :eeui="{ content: eyeIcon, fontSize: 42 }"></icon>
                </div>
                <text class="ftext" @click="forgePassword">忘记密码?</text>
                <button class="buttonLogin" @click="getUserLogin" text="登陆"></button>
                <!-- <button class="button" @click="weixinLogin" :eeui="{text:'微信登陆',backgroundColor:'#5fb527',borderRadius:'50'}"></button> -->
                <div class="weixinbox" v-if="isWechatShow">
                    <image class="littleweixin" src="../../assets/images/litteweixin.png"></image>
                    <text class="weixinTEXT" 
                        @click="weixinLogin(2)"
                        > 没有账号？立即注册</text>

                </div>
            </div>

            </div>
        </div>
        <!--网络请求不通-->
         <failNet v-if="netWorkShow"></failNet>
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');
const stream = weex.requireModule('stream');
const storage = weex.requireModule('storage')
const globalEvent = weex.requireModule('globalEvent');
const deviceInfo = app.requireModule("eeui/deviceInfo");
import API from '../../fetch/api/apis'
import failNet from '../../components/failNet.vue'

export default {
    components: {failNet },
    data () {
        return {
            disaction:true,
            password:eeui.getCaches('slpassword') ? eeui.getCaches('slpassword')  : '',
            iphone:eeui.getCaches('sluserName') ? eeui.getCaches('sluserName')  : '',
            token:'',
            iconList:[
                'md-phone-portrait',
                'md-lock'
            ],
            schoolList:[],
            eyeIcon:'ios-eye-off',
            inputType:'password',
            weixinParmas:'',
            mobile_uuid:'',
            isWechatShow:true,
            weixinType:true, 
            tabShow:false,
            netWorkShow:false
        }
    },
    methods: {
        weixinTab(val){
            if(val === 1){
                this.tabShow = false;
            }else{
                this.tabShow = true;
            }
        },
        //微信登陆
        weixinLogin(type){
            if(type == 1){
                this.weixinType = true;
            }else{
                this.weixinType = false;
            }
             weex.requireModule('userRun').wxLogin()
        },
        openShowPassword(){
            if(this.eyeIcon == 'ios-eye-off'){
                this.eyeIcon = 'ios-eye';
                this.inputType = 'text';
            }else{
                this.eyeIcon = 'ios-eye-off';
                this.inputType = 'password';
            }
        },
        //获取入学年
        getenterYear(){
            var self = this;
            stream.fetch({
                method:'GET',
                url:"http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/years.json",
                type:'json',  
            },function (res) { 
                if(res.ok){
                    eeui.setCaches('enterYear', res.data, 0);
                    
                }
                
             })
        },
        //ios判断是否有微信
        isWechat(){
              let platform = WXEnvironment.platform.toLowerCase(); 
            if(platform==='ios'){
                weex.requireModule('userRun').wxInstalled()
            }
            
        },
        //获取学校
        getschools(){
            var self = this;
            stream.fetch({
                method:'GET',
                url:"http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/schools.json",
                type:'json',  
            },function (res) { 
                //console.log(res);
                if(res.ok){
                    eeui.setCaches('schoollist', res.data, 0);
                    //self.schoolList = res.data;
                    //console.log(res.data);
               }
                
             })
        },
        //微信api
        getWxLogin(id){
             var self = this;
            stream.fetch({
                method:'POST',
                url:API.baseUrl + API.weixinLogin,
                body:JSON.stringify({
                    unionid:id,
                    mobile_type: weex.config.env.deviceModel,
                    mobile_platform:weex.config.env.platform,
                    mobile_uuid:self.mobile_uuid,
                    umeng_token:'1111',
                }),
                type:'json',  
                headers:{
                    'Content-Type':'application/json',
                }
            },function (res) { 
               if(res.status == 200){
                  if(res.data.code == -1){
                      self.rechargePage();
                    //   eeui.openPage({
                    //         pageName: 'loadPage',
                    //         pageType: 'app',
                    //         statusBarColor:'#1eb76e',
                    //         url: 'loadPage.js'
                    //     }, function(result) {
                    //         //......
                    //     }); 

                    //console.log(res.data);

                  }else if(res.data.code == 1){
                      if(res.data.mobile != ''){
                         eeui.openPage({
                            pageName: 'home',
                            url: '../homePages/home.js',
                            statusBarColor:'#1eb76e',
                            backPressedClose:true,
                            softInputMode:'nothing',
                            swipeBack:false,
                            params:{position:0}
                        // params:{token:self.token},
                        }, function(result) {
                            //...... 
                            eeui.setCaches('token', res.data.token, 0);
                            self.disaction = true;
                            eeui.setCustomConfig("homePage", "homePages/home.js");
                        

                        }); 
                      }else{
                          self.changeuserPage(res.data.token,res.data.avatar_file)
                         //console.log('手机号是空的',res.data); 
                      }
                      //eeui.setCaches('token', res.data.token, 0);
                  }else{
                      eeui.toast({
                            message:'禁止登陆',
                            gravity:'top'

                        });
                  }
               }else{
                   
               }
                
             })
        },
        //微信注册
        getWxreg(id){
             var self = this;
            stream.fetch({
                method:'POST',
                url:API.baseUrl + API.weixinLogin,
                body:JSON.stringify({
                    unionid:id,
                    mobile_type: weex.config.env.deviceModel,
                    mobile_platform:weex.config.env.platform,
                    mobile_uuid:self.mobile_uuid,
                    umeng_token:'1111',
                }),
                type:'json',  
                headers:{
                    'Content-Type':'application/json',
                }
            },function (res) { 
               if(res.status == 200){
                  if(res.data.code == -1){
                      self.rechargePage();


                  }else if(res.data.code == 1){
                      if(res.data.mobile != ''){
                         eeui.toast({
                            message:'账号已经存在，请直接微信登陆',
                            gravity:'top'

                        });
                      }else{
                         self.changeuserPage(res.data.token,res.data.avatar_file) 
                      }
                      //eeui.setCaches('token', res.data.token, 0);
                  }else{
                      eeui.toast({
                            message:'账号被系统禁用',
                            gravity:'top'

                        });
                  }
               }else{
                   
               }
                
             })
        },
        forgePassword() {
            eeui.openPage({
                url: 'findPassword.js',
                statusBarColor:'#1eb76e',
            }, function(result) {
                //......
            }); 
        },
        rechargePage() {
            var self = this;
            eeui.openPage({
                url: 'recharge.js',
                statusBarColor:'#1eb76e',
                params:{'schools':self.schoolList}
            }, function(result) {
                //......
            }); 
        },
        //用户登陆
        getUserLogin() {
            
            if(!this.disaction){
                return;
            }
            var self = this;
            let params = {
                mobile:this.iphone,
                password:this.password,
                mobile_type: weex.config.env.deviceModel,
                mobile_platform:weex.config.env.platform,
                mobile_uuid:self.mobile_uuid,
                umeng_token:'1'
            };

            if(params.mobile == ''){
                eeui.toast({
                    message:'手机号不能为空',
                    gravity:'top'

                });
                return;
            }
            let myreg=/^1\d{10}$/;
            if(!myreg.test(params.mobile)){
                eeui.toast({
                    message:'手机格式不正确！',
                    gravity:'top'

                });
                return;
            }
            if(params.password == ''){
                eeui.toast({
                    message:'密码不能为空',
                    gravity:'top'

                });
                return;
            }
            // let reg=/^\d{6}$/;
            // if(!reg.test(params.password)){
            //     eeui.toast({
            //         message:'密码不正确！',
            //         gravity:'top'

            //     });
            //     return;
            // }

            this.disaction = false;

            stream.fetch({
                method:'PUT',
                url:API.baseUrl + API.getUserLogin,
                body:params,
                type:'json',
                headers:{
                    'Content-Type': 'application/json',
                }
            },res=>{
                
                if(res.status == '200'){
                    
                    eeui.setCaches('sluserName',  this.iphone, 0);
                    eeui.setCaches('slpassword', this.password, 0); 
                 

                    eeui.openPage({
                        pageName: 'home',
                        url: '../homePages/home.js',
                        statusBarColor:'#1eb76e',
                        backPressedClose:true,
                        softInputMode:'nothing',
                        swipeBack:false,
                        params:{position:0}
                    // params:{token:self.token},
                    }, function(result) {
                        //...... 
                        eeui.setCaches('token', res.data, 0);
                        self.disaction = true;
                        eeui.setCustomConfig("homePage", "homePages/home.js");
                      

                    }); 

                   
                }else{
                    
                    self.disaction = true;

                    if(res.status== '-1'){
                        self.netWorkShow=true;
                        return
                    }
                    if(res.headers['x-mzq-message']){
                         eeui.toast({
                            message:decodeURIComponent(res.headers['x-mzq-message']),
                            gravity:'top'
                            
                        });
                    }
                   
                }
                
            })            

           
        },
        //跳转到用户信息完善
        changeuserPage(token,avatar){
              var self = this;
              eeui.openPage({
                    url: 'changeuser.js',
                    statusBarColor:'#1eb76e',
                    animated:false,
                    params:{'avatar':avatar}
                }, function(result) {
                    eeui.setCaches('token', token, 0)
                    //......
                }); 
          }
    },
    created () {
        this.getenterYear();
        this.getschools();
        let self = this;
        let count=0;
        let platform = WXEnvironment.platform.toLowerCase();
        //console.log(eeui.getCaches('userName'))
        if(platform!='ios'){
            eeui.setPageBackPressed(eeui.getPageInfo().pageName, function(){
                count++;
                if(count==1){
                    eeui.toast('再按一次返回键退出程序');
                }else{
                    eeui.toastClose();
                    eeui.goDesktop();  
                    count=0;
                }
    
            });
        }
       

    },

    mounted () {
        
         setTimeout(() => {  
            this.isWechat()
         }, 100);
        if(weex.config.env.platform == "iOS"){
            this.mobile_uuid = eeui.getIfa();
            //console.log(this.mobile_uuid);
        }else{
            this.mobile_uuid = eeui.getImei();
        }
        globalEvent.addEventListener("wxLoginCallback", (data)=> {
            this.weixinParmas = JSON.parse(data.install);   

            //console.log(JSON.parse(data.install).headimgurl);
            eeui.setCaches('headimgurl',JSON.parse(data.install).headimgurl,0)
            if(this.weixinType){
                this.getWxLogin(this.weixinParmas.unionid);
                eeui.setCaches('unionid',this.weixinParmas.unionid,0)
                //console.log(this.weixinParmas.unionid);
            }else{
                this.getWxreg(this.weixinParmas.unionid)
                eeui.setCaches('unionid',this.weixinParmas.unionid,0)
            }
            
        });
        
        

      let platform = WXEnvironment.platform.toLowerCase();  
      if(platform==='ios'){
          globalEvent.addEventListener("ios_wxLoginDataCallback", (data)=> { 

              if(JSON.parse(data).unionid){
                eeui.setCaches('headimgurl',JSON.parse(data).headimgurl,0)
                  if(this.weixinType){
                        this.getWxLogin(JSON.parse(data).unionid);
                        eeui.setCaches('unionid',JSON.parse(data).unionid,0)
                    }else{
                        this.getWxreg(JSON.parse(data).unionid)
                        eeui.setCaches('unionid',JSON.parse(data).unionid,0)
                    }
              }
        });
        globalEvent.addEventListener("ios_wxInstallDataCallback", (data)=> { 
            if(JSON.parse(data).WXinstalled){
                this.isWechatShow = true;
                
            }else{
                this.isWechatShow = false;
                this.tabShow = true;
            }
        });

        
      }  
    }
}
</script>
<style scoped>
.weixinIcon{
    width: 200px;
    height: 200px;
    margin-left: 275px;
    margin-top: 30px;
}
.weixinbutton{
    width: 600px;
    height: 100px;
    margin-left: 75px;
    margin-top: 100px;
    margin-bottom: 20px;
    font-size: 30px;
}
.littleweixin{
    width: 50px;
    height: 50px;
}
.weixinbox{
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
}
.loginPage{
    background-color: #e7e8ec;
}
.headBg{
    width: 750px;
    height: 340px;
}
.newBox{
    width: 750px;
    position: absolute;
    top: 285px;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    background-color: #e7e8ec;
}
    .navbar {
        width: 750px;
        height: 100px;
        background-color: #e7e8ec;
    }
    .tabBar{
        flex-direction: row;
        width: 750px;
        border-bottom-width: 1px;
        border-bottom-color: rgb(216, 216, 216);
        border-bottom-style: solid;
    }
    .tabBarLeft{
        width: 375px;
        text-align: center;
        height: 100px;
        line-height: 100px;
        font-size: 30px;
        color: #333;
        border-right-color: rgb(216, 216, 216);
        border-right-width: 1px;
        border-right-style: solid;
    }
    .cur{
        color: #1eb76e;
    }
    .newBoxLeft{
        margin-top: 70px;
    }
    .tabBarRight{
        width: 375px;
        text-align: center;
        height: 100px;
        line-height: 100px;
         font-size: 30px;
        color: #333;
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
    .inputNum{
         padding-left: 10px;
        height: 100px;
        font-size: 30px;
        width: 600px;
        border-radius: 20px;
        padding-left: 150px;
        

    }
    .buttonLogin {
        font-size: 24px;
        margin-bottom: 20px;
        width: 600px;
        height: 100px;
        margin-left: 75px;
        margin-top: 40px;
        font-size: 32;
        background-color: #1eb76e;
    }
    .weixinTEXT{
        font-size: 30px;
        color: #1eb76e;
    }

    .button2 {
        font-size: 24px;
        width: 320px;
        height: 50px;
        line-height: 50px;
        margin-bottom: 10px;
        margin-top: 0px;
        font-size: 32;

    }
    .ftext{
        width: 120px;
        text-align: right;
        color: #97989c;
        font-size: 26;
        margin-right: 80;
        margin-top: 30px;
        height: 40px;
        margin-left: 560px;
    }
    .gorecharge{
        margin-right: 20px;
        font-size: 32;
        color: #444;
    }
    .eyeicon{
        width: 40px;
        height: 80px;
        position: absolute;
        right: 40px;
        top: 10px;
    }
    .inputpassword{
        width: 500px;
    }
</style>