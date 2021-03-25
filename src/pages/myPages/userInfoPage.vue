<template>
<div class="container">
     <navbar class="navbarb">    
        <navbar-item type="title">
            <text class="headtext">个人信息管理</text>
        </navbar-item>
    </navbar>

    <div class="headInfo">
        <image class="headimgbg" src="https://www.asyke.com/static/img/user_bg.png" style="width:750px;height:100px"></image>
        <div class="avator">
            <image class="avatorImg" :src="userInfo.avatar_file"></image>
        </div>
        <text class="username">{{userInfo.name}}</text>
        <!-- <text class="userInfo" v-if="userInfo.note">{{userInfo.note}}</text> -->
    </div>
    <div class="continfo">
        <div class="infoItem" @click="enterpage">
            <icon class="infoIconBefore" :eeui="{content:'tb-friend',fontSize:38}"></icon>
            <text class="infoText">个人信息</text>
            <icon class="infoIconAfter" :eeui="{content:'tb-right',fontSize:38}"></icon>
        </div>
        <div class="infoItem" @click="mynews">
            <icon class="infoIconBefore" :eeui="{content:'tb-message',fontSize:38}"></icon>
            <text class="infoText">我的消息</text>
            <icon class="infoIconAfter" :eeui="{content:'tb-right',fontSize:38}"></icon>
        </div>

         <button class="button" @click="logOut" :eeui="{text:'退出登录',backgroundColor:'#1eb76e',fontSize:30}"></button>
        
    </div>
 <!--网络请求不通-->
         <failNet v-if="netWorkShow"></failNet>
  <nav :reposition="reposition"></nav>
</div>
</template>
<script>
    const eeui = app.requireModule('eeui');
    const stream = app.requireModule('stream');
    import API from '../../fetch/api/apis'
    import nav from '../../components/nav.vue'
    const storage = weex.requireModule('storage')
    import failNet from '../../components/failNet.vue'
  export default {
       components: {nav,failNet},
      data(){
          return{
              userInfo:'',
               reposition:app.config.params.position,
               netWorkShow:false
          }
      },
      methods: {
          enterpage(){
              var self = this;
              eeui.openPage({
                    url: 'userPage.js',
                    statusBarColor:'#1eb76e',
                    animated:false,
                    params:{userinfo:self.userInfo}
                }, function(result) {
                    //......
                }); 
          },
          mynews(){
              eeui.openPage({
                    url: 'mynews.js',
                    statusBarColor:'#1eb76e',
                    animated:false,
                }, function(result) {
                    //......
                }); 
          },
          getUserInfo(){
            //   console.log(app.config.params.token,'2222');
            //   console.log(API.baseUrl + API.getUserInfo);
              stream.fetch({
                  url:API.baseUrl + API.getUserInfo,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                  if(res.status == 200){
                      if(res.data.avatar_file == ""){
                          res.data.avatar_file = eeui.getCaches('headimgurl',null)
                      }
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
          logOut(){
              let self = this;
               eeui.clearCustomConfig();
              stream.fetch({
                  url:API.baseUrl + API.userLogout,
                  method:'POST',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                  if(res.status == 200){
                      
                       eeui.toast({
                           
                            message:'退出成功',
                            gravity:'top' 
                        });
                        eeui.openPage({
                            pageName: 'login',
                            url: '../loginPage/loginpage.js',
                            statusBarColor:'#1eb76e',
                            animated:false
                        },function (res) { 


                         });
                     
                     
                  }else{
                        eeui.openPage({
                            pageName: 'login',
                            url: '../loginPage/loginpage.js',
                            statusBarColor:'#1eb76e',
                            animated:false
                        },function (res) { 

                         });
                  }
                 
              })
          }
        },
        created () {
            this.getUserInfo();
        
        }
  }  
</script>
<style scoped>
.container{
    background-color:#ebebeb;
    
    /* margin-bottom:200px; */
}
.navbarb{
        width: 750px;
        height: 100px;
        background-color: #1eb76e;
    }
.headtext {
        font-size: 30px;
        color: #ffffff;
    }
    .headInfo{
        width:750px;
        height:426px;
        background-color:rgba(46, 217, 125, 0.8);
        position:relative;
    }
    .headimgbg{
        position:absolute;
        bottom:0;
        left:0;
    }
    .username{
        margin-top:20px;
        font-size:30px;
        color: #ffffff;
        text-align: center;
        
    }
    .avator{
       width: 170px;
       height: 170px;
       border-radius:100;
       overflow: hidden;
       align-self: center;
       margin-top: 50;
       background-color: rgba(222, 252, 236, 0.5);
       position: relative;
    }
    .avatorImg{
        position: absolute;
        top: 0px;
        left: 0px;
        width: 170px;
       height: 170px;
        border-radius: 100;
    }

    .userInfo{
        width: 336px;
        height: 38px;
        line-height: 38px;
        font-size: 22px;
        color: #c6fade;
        border-color: rgba(244, 244, 244, 0.9);
        border-width: 1px;
        border-style: solid;
        border-radius: 216px;
        align-self: center;
        text-align: center;
        margin-top: 10px;
    }
    .infoItem{
        width: 750;
        height: 96;
        flex-direction: row;
        background-color: #ffffff;
        border-bottom-color: #e0e0e0;
        border-bottom-style: solid;
        border-bottom-width: 1px;
    }
    .infoIconBefore{
        width: 60;
        height: 100;
        margin-left: 20px;
        color: #1eb76e;
    }
    .infoText{
        width: 400;
        line-height: 100;
        font-size: 30;
        margin-left: 10px;
    }
    .infoIconAfter{
        width: 60;
        height: 100;
        margin-left: 170px;
        color: #cfcfcf;

    }
   .button{
        width: 690px;
        height: 80px;
        margin: 50px 0 0 30px;
        background-color: #1eb76e;
  
    }
</style>