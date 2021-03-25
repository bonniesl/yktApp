<template>
    <div class="app">
        <navbar class="navbarb">  
            
            <navbar-item type="title">
                <text class="headtext">跑步中</text>
            </navbar-item>
        </navbar>
         <div class="map">
            
            <div class="mapborad">
                <div class="runNumbox">
                    <text class="runNum">0.00</text>
                    <text class="runword">公里</text>
                </div>
                <div class="GPSinfo">
                    <text class="GPStext">GPS信号弱</text>
                    <text class="GPSicon">&#xe601;</text>
                </div>
                
                <div class="propList">
                    <div class="propitem">
                        
                        <div class="runitem">
                            <text class="propicon">&#xe630;</text>
                            <text class="speedTitle">平均配速</text>
                            
                         </div>
                         <text class="speednum">00`00``</text>
                        
                    </div>
                    <div class="propitem">
                        
                        <div class="runitem">
                            <text class="propicon">&#xe623;</text>
                            <text class="speedTitle">用时</text>
                        </div>
                         <text class="speednum">00:00:00</text>
                        
                    </div>
                    <div class="propitem">
                        
                        <div class="runitem">
                            <text class="propicon">&#xe624;</text>
                            <text class="speedTitle">热量（千卡）</text>
                        </div>
                         <text class="speednum">5.6</text>
                        
                    </div>
                    
                    
                </div>
            </div>
         </div>

         <div class="mapBtn">
             <div class="IConBtn" v-if="!btnShow" @click="stop">
                    <text class="btnicon">&#xe721;</text>
                    <text class="actbtn">暂停</text>
                </div>

             <div class="Iconall" v-if="btnShow">
                 <div class="IConBtn" @click="counti">
                    <text class="btnicon">&#xe63d;</text>
                    <text class="actbtn">继续</text>
                </div>
                <div class="IConBtn red" @click="over" style="margin-left:20;">
                    <text class="btnicon" style="font-size:55;margin-bottom:15;">&#xe638;</text>
                    <text class="actbtn" >结束</text>
                </div>
             </div>
            
            
         </div>

        
    </div>
</template>
<script>
        const amap = app.requireModule('eeui/amap');
        const eeui = app.requireModule('eeui');
        const globalEvent = weex.requireModule('globalEvent');

        export default {
            data(){
                return{
                    btnShow:false,
                    runOverList:{}
                }
            },
            methods:{
                stop(){
                    this.btnShow = true;
                },
                counti(){
                     this.btnShow = false;
                },
                over(){
                    let self = this;
                    eeui.confirm({
                        title: "温馨提示",
                        message: "你确定结束吗？",
                        buttons: ["取消", "确定"]
                    }, function(result) {
                        if (result.status == "click" && result.title == "确定") {
                            eeui.openPage({
                                url: 'rundetailout.js',
                                statusBarColor:'#1eb76e',
                                pageName:'运动详细',
                                animated:false,
                                 params:{runOverList: self.runOverList}
                            }, function(result) {
                                //......
                            }); 
                        }
                    });
                }
            },
            created(){
                // 添加 字体图标
                let self = this;
                let domModule = weex.requireModule('dom');
                domModule.addRule('fontFace',{
                'fontFamily': "iconfont",
                'src': "url('http://at.alicdn.com/t/font_1628280_razig2u9kxg.ttf')"
                })

                // globalEvent.addEventListener("runDataCallback", function (res) {
                //     self.runOverList=res.install
                //         // console.log("runDataCallback",self.runOverList)
                // })  

            }
            
        }
</script>
<style scoped>
    .app{
        background-color: #0d2236;
    }
    .navbarb{
        width: 750px;
        height: 100px;
        background-color: #0d2236;
    }
     .headtext {
        font-size: 30px;
        color: #ffffff;
    }
    .map{
        width: 750;
        height: 800;
        position: relative;
    }
    .mapborad{
        width: 690;
        height: 320;
        background-color: #fff;
        position: absolute;
        top:150;
        left: 30;
        border-radius: 10;
    }
    .runNumbox{
        flex-direction: row;
        margin-left: 30;
        margin-top: 20;
    }
    .runNum{
        font-size: 100;
        font-weight: bold;
    }
    .runword{
        font-size: 32;
        color: #4f4f4f;
        margin-top: 60;
        margin-left: 10;
    }
    .propList{
        flex-direction: row;
        width: 690;
        margin-top: 50;

    }
    .propitem{
        width: 230;
        align-items: center;
    }
    .speednum{
        font-size: 38;
        font-weight: bold ;
        margin-bottom: 20;

    }
    .runitem{
        width: 230;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 20;
    }
    .speedTitle{
        font-size: 27;
        color: #4f4f4f;
       
    }
    .mapBtn{
        width: 750;
        flex-direction: row;
        justify-content: center;
        position: absolute;
        bottom: 80;
        left: 0;
    }
    .IConBtn{
       width: 178;
        height: 178; 
        border-radius: 100;
        background-color: #08ce7f;
        justify-content: center;
        align-items: center;
    }
    .actbtn{
        font-size: 32;
        color: #fff;
    }
    .GPSinfo{
        flex-direction: row;
        position: absolute;
        top: 30;
        right: 20;
    }
    .GPStext{
        font-size: 27;
    }
    .propicon{
        font-size: 40;
        color: #4f4f4f;
        font-family: iconfont;
        margin-right: 10;
    }
    .GPSicon{
        font-size: 30;
        font-family: iconfont;
    }
    .btnicon{
        font-size: 70;
        font-family: iconfont;
        color: #fff;
        margin-bottom: 5;
    }
    .Iconall{

        flex-direction: row;
    }
    .red{
        background-color: rgb(212, 29, 16);
    }
</style>
