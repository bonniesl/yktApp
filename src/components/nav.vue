<template>
    <div class="app">
       <div class="nav"> 
            <div class="tabPage" :key="index" v-for="(item, index) in tabPages">
               <div class="nav-item" @click="switchPage(item,index)">
                    <icon content="tb-home-fill-light" :class="[index==reposition ? 'navcur' : '']"  class="navico"   v-if="index==0"></icon>
                    <image class="navico" v-if="index==1 && index!=reposition"   src="../assets/images/tabbaricon01.png"></image>
                    <image class="navico" v-if="index==1 && index==reposition"  src="../assets/images/tabbaricon02.png"></image>
                    <icon content="md-person" :class="[index === reposition ? 'navcur' : '']" class="navico" v-if="index==2"></icon>
                    <text :class="[index === reposition ? 'navTxt-active' : 'navTxt']">{{item.title}}</text>
                </div>
            </div>
        </div>
        <!--tabbar
            ref="reflectName"
            class="tabbar"
            :eeui="{ tabType: 'bottom', tabHeight: 100,tabSlideSwitch:false,textSelectColor:'#2edb7d' }"
            :tabPages="tabPages"
            @pageSelected="pageSelected">
        </tabbar-->
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');

    export default {
         props:{ 
            reposition: {
                type: Number,
                default: 0
            }
        },
        data(){
            return{
                backAction:false,
                backPageVal:app.config.params,
                position: 0,
                tabPages: [
                    {
                        tabName: 'home',
                        title: '主页',
                        url: '../homePages/home.js',
                        selectedIcon:'',
                        unSelectedIcon:'',
                    },
                    {
                        tabName: 'schoolRun',
                        title: '运动',
                        url: '../runPages/schoolRun.js',
                        selectedIcon:'../assets/images/tabbaricon02.png',
                        unSelectedIcon:'../assets/images/tabbaricon01.png'
                    },
                    {
                        tabName: 'user',
                        title: '我的',
                        url: '../myPages/userInfoPage.js',
                        selectedIcon:'',
                        unSelectedIcon:'',
                        dot:false
                    }
                ],
                
            }
        },
        methods: {
            switchPage(item,index) {
                let self = this;
                self.position = index;  
        
                if(eeui.getPageInfo().url.indexOf(item.tabName)>-1){
                        return;
                    }
                    eeui.openPage({
                        pageName: item.tabName,
                        pageType: 'app',
                        url: item.url,
                        animated:false,
                        cache:100000,
                        softInputMode:'nothing',
                        params:{position:self.position}
                    },res=>{
                        //console.log(res);
                    });
            }
        },
        filters: {
                filterImg(val){
                    if(val.indexOf('http') != -1){
                        return val;
                    }else{
                        return 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com' + val;
                    }
                    
                }
        },  
        created () {
            eeui.setSoftInputMode(eeui.getPageInfo().pageName, 'nothing');
            
        },
        mounted () {
            var self = this;
            eeui.setSoftInputMode(eeui.getPageInfo().pageName, 'nothing');
           eeui.setPageBackPressed({
                pageName: '',
            }, function(){

                if(!self.backAction){
                    self.backAction = true;
                    eeui.toast('再点一次返回桌面')
                    return false;
                }else{
                    self.backAction = false;
                    eeui.goDesktop();
                }
                
                //返回键触发事件
            });
        }

    }
</script>
<style scoped>
 .nav {
      position: fixed;
      bottom: 0;
      left: 0;
        width: 750px;
        height: 100px;
       background-color:#fff;
         flex-direction: row;
        align-items: center;
     
    }
  
    .tabPages{
        flex:1;
        align-items: center;
        justify-content: space-between;
    }
    .nav-item {
       flex:1;
       padding:0 102px;
       align-items: center;
       
    }
    .navico{
        width:46px;
        height:38px; 
    }
    .navcur{
       color:#2edb7d;
    }
    .navTxt{
        color:#000;
        font-size:28px;
        text-align: center;
        padding-top:8px; 
    }
    .navTxt-active{
        color:#2edb7d;
        font-size:28px;
        text-align: center;
        padding-top:8px;
    }

</style>