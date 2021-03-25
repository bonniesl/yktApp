<template>
    <div class="app">
        <navbar class="navbarb">
            <navbar-item type="back"></navbar-item>   
            <navbar-item type="title">
                    <text class="headtext">统计分享</text>         
            </navbar-item>
        </navbar>

        <scroller class="scroller">
            <div class="comntent">
                <image src="../../assets/images/sharebg.jpg" style="width:750;height:1334;"></image>
                <div class="wrapPos">
                    <div class="innerwrap">
                        <div class="uppage">
                            <text class="tit">我的跑步周报</text>
                            
                            <div class="uppagebg">
                                <div class="uptit">
                                    <text class="uptitinfo">燃燒卡路里</text>
                                    <text class="uptitdata">01.06-01.12</text>
                                </div>
                                
                                <WEcharts class="echarts" :options="options"></WEcharts>
                                <text class="maptit">周总里程0.57公里</text>
                            </div>
                            <image class="avator" src="../../assets/images/avator.png" style="width:117;height:117;"></image>
                        </div>

                        <div class="downpagebg">
                            <div class="sixnum">
                                <div class="sixnumitem sixnumborder">
                                    <text class="sixnumup">00:27:15</text>
                                    <text class="sixnumdown">时长</text>
                                </div>
                                <div class="sixnumitem sixnumborder">
                                    <text class="sixnumup">27</text>
                                    <text class="sixnumdown">平均配速</text>
                                </div>
                                <div class="sixnumitem">
                                    <text class="sixnumup">5</text>
                                    <text class="sixnumdown">跑步次数</text>
                                </div>
                                
                            </div>
                            <div class="sixnum sixnumline">
                                <div class="sixnumitem sixnumborder">
                                    <text class="sixnumup sixnumupmr">27</text>
                                    <text class="sixnumdown">卡路里</text>
                                </div>
                                <div class="sixnumitem sixnumborder">
                                    <text class="sixnumup sixnumupmr">0.6</text>
                                    <text class="sixnumdown">平均速度</text>
                                </div>
                              
                                
                            </div>
                        </div>

                        <!-- <div class="shareList">
                            <text class="shareText">分享到</text>
                            <div class="shareiconbox">
                                <image class="friend" style="width:81;height:81;" src="../../assets/images/friend.png"></image>
                                <text class="shareicontext">朋友圈</text>
                            </div>
                            <div class="shareiconbox" style="margin-left:94;">
                                <image class="friend" style="width:81;height:81;" src="../../assets/images/wechat.png"></image>
                                <text class="shareicontext">微信好友</text>
                            </div>
                        </div> -->
                        <div class="shareBtnbox" v-if="shareShow">
                            <text class="sharetit">分享到</text>
                            <div class="shareIconGroup">
                                <div class="shareIconItem">
                                    <image class="shareIcon" src="../../assets/images/friend.png"></image>
                                    <text class="shareText">朋友圈</text>
                                </div>
                                <div class="shareIconItem">
                                    <image class="shareIcon" src="../../assets/images/wechat.png"></image>
                                    <text class="shareText">微信好友</text>
                                </div>
                            </div>
                        </div>

                        <button @click="shareBtn" class="sharebutton" :eeui="{text:'分享'}"></button>
                    </div>
                </div>
            </div>
        </scroller>
    </div>
</template>
<script>
import WEcharts from "../../components/WEcharts/index";
export default {
     components: { WEcharts },
    data () {
        return {
            shareShow:false,
            options:{
                    // legend:{
                    //     orient:"horizontal",
                    //     x:'right',
                    //     y:' center',
                    //     width:'100',
                    //     padding:[10, 30,0,0],
                    //     itemWidth:30,
                    //     textStyle:{
                    //         color:'#000',
                    //     },
                    // },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '0%',
                        right: '0%',
                        bottom: '3%',
                        top:'3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value'
                        }
                    ],
                    series: [
                        {
                            name: '跑步次数',
                            type: 'bar',
                            barWidth: '60%',
                            itemStyle: {
                                normal: {
                                    color: '#00C179'
                                }
                            },
                            data: [1, 4, 9, 8, 6, 2, 12]
                        }
                    ]
            },
        }
    },
    methods: {
        shareBtn(){
            this.shareShow = true;
        }
    }
}
</script>
<style scoped>
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}
.headtext {
  font-size: 36px;
  color: #ffffff;
}
.comntent{
    width: 750;
    height: 1334;
    position: relative;
}
.wrapPos{
    position: absolute;
    top: 0;
    left: 0;
    width: 750;
    height: 1334;
}
.innerwrap{
    width: 690;
    margin-left: 30;
}
.uppagebg{
    width: 690;
    height: 490;
    background-color: #ffffff;
    border-radius: 10;
}
.tit{
    font-size: 37px;
    color: #ffffff;
    margin-top: 44;
    margin-left: 180;
    margin-bottom: 21;
}
.avator{
    position: absolute;
    top: 60;
    left: 18;
}
.uptit{
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24;
}
.uptitinfo{
    font-size: 29;
    color: #4e4e4e;
    margin-left: 150;
}
.uptitdata{
    font-size: 29;
    color: #898888;
    margin-right: 23;
}
.maptit{
    position: absolute;
    top: 95;
    right: 23;
    font-size: 29;
    
}
.echarts{
    width: 670;
    height: 300;
    margin-left: 10;
    margin-top: 100;
}
.downpagebg{
    width: 690;
    height: 270;
    background-color: #ffffff;
    border-radius: 10;
    margin-top: 24;
}
 .sixnum{
        flex-direction: row;
        width: 670;
        margin-top: 10;
        margin-left: 10;
    }
    .sixnumline{
        border-top-width: 1px;
        border-top-style: solid;
        border-top-color: #DADADA;
        padding-top: 20;

        
    }
    .sixnumup{
        font-size: 32;
        color: #4E4E4E;
        margin-bottom: 10;
        font-weight: bold;
    }
    .sixnumupmr{
        margin-bottom: 5;
    }
    .sixnumitem{
        width: 228;
        align-items: center;
        height: 100;
        justify-content: center;
        margin-bottom: 20;
    }
    .sixnumborder{
        border-right-width: 1;
        border-right-color: #DADADA;
        border-right-style: solid;
    }
    .sixnumdown{
        color: #575757;
        font-size: 27;
    }
    .sixnumdowndanwei{
        font-size: 21;
        color: #575757;
        margin-top: 5;
    }
    /* .shareList{
        flex-direction: row;
        height: 81;
         align-items: center;
         margin-top: 80;
    }
    .shareiconbox{
        flex-direction: row;
        height: 81;
        align-items: center;
    }
    .shareText{
        font-size: 32px;
        color: #ffffff;
        margin-right: 65;
    }
    .shareicontext{
        font-size: 27px;
        color: #ffffff;
        margin-left: 14px;
    } */
    .sharebutton{
        width: 358;
        height: 94;
        background-color: #43BE4E;
        margin-top: 40;
        border-radius: 47;
        font-size: 32px;
        margin-left: 166;
    }

.shareBtnbox{
    width: 690;
    height: 240;
    margin-left: 0;
    background-color: #fff;
    border-radius: 10;
    margin-top: 30;
}
.shareBtn{
    width: 358px;
    height: 94px;
    margin-left: 196px;
    margin-top: 30;
}
.shareIconGroup{
    flex-direction: row;
    justify-content: space-around;
    margin-top: 10;
}
.sharetit{
    font-size: 30;
    color: #666;
    margin-top: 20;
    margin-left: 20;
}
.shareIconItem{
    width: 120px;
    align-items: center;
}
.shareIcon{
    width: 81px;
    height: 81px;
}
.shareText{
    margin-top: 20;
    font-size: 26;
    color: #666;
}
</style>