<template>
   <div class="app">
        <navbar class="navbarb">  
            <navbar-item type="back"></navbar-item> 
            <navbar-item type="title">
                <text class="headtext">汇总分析</text>
                
            </navbar-item>
             <navbar-item type="right">
                <button class="navbutton" :eeui="{text:'下载',backgroundColor:'#2fdc7e'}"  @click="popurshowaction"></button>
            </navbar-item>
        </navbar>
        <scroller class="scroller">
        <div class="summBox">
            <div class="summSearch">
                <text class="summStext">全部成员（0）</text>
                <text class="summarrowicon">&#xe614;</text>
            </div>
            <div class="tablebox">
                <div class="tableHead">
                    <text class="th thw1 RB">等级</text>
                    <text class="th thw1 RB">人数</text>
                    <text class="th thw1 RB">比例</text>
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">合格</text>
                    <text class="td thw1 RB">0</text>
                    <text class="td thw1 RB">12%</text>
 
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">不合格</text>
                    <text class="td thw1 RB">0</text>
                    <text class="td thw1 RB">12%</text>
 
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">免跑</text>
                    <text class="td thw1 RB">0</text>
                    <text class="td thw1 RB">12%</text>
 
                </div>
                <!-- <div class="tbody BB">
                    <text class="td thw1 RB">优秀</text>
                    <text class="td thw2 RB">0</text>
                    <text class="td thw3 RB">12%</text>
 
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">平均分</text>
                    <text class="td thwbig">--</text>
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">实际人数</text>
                    <text class="td thwbig">--</text>
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">免测</text>
                    <text class="td thwbig">--</text>
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">缓测</text>
                    <text class="td thwbig">--</text>
                </div>
                <div class="tbody BB">
                    <text class="td thw1 RB">未测</text>
                    <text class="td thwbig">--</text>
                </div> -->
            </div>

            <WEcharts class="echarts" :options="options"></WEcharts>
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
            options:{
                title: {
                // text: '某站点用户访问来源',
                // subtext: '纯属虚构',
                left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['合格', '不合格', '免跑']
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        {value: 335, name: '合格'},
                        {value: 310, name: '不合格'},
                        {value: 234, name: '免跑'},
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
            }
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
    .navbutton{
    width:110;
    height:65;
    margin-right:25;
}
.summSearch{
    height: 100;
    margin-left: 100;
    flex-direction: row;
}
.summStext{
    font-size: 28;
    color: #333;
    line-height: 100;
}
.summarrowicon{
    font-family: iconfont;
    font-size: 27;
    color: #333;
    line-height: 100;
    margin-left: 20;
}
.tableHead{
    flex-direction: row;
    justify-content: flex-start;
    width: 750;
    background-color: #1eb76e;
    height: 80;
}
.tbody{
    flex-direction: row;
    justify-content: flex-start;
    width: 750;
    background-color: #fff;
    height: 80;
}
.RB{
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: #c7d0d7;
}
.BB{
   border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #c7d0d7; 
}
.thw1{
    width: 250;
}
.thw2{
    width: 100;
}
.thw3{
    width: 250;
}
.thw4{
    width: 250;
}
.thwbig{
    width: 600;
}
.th{
    height: 80;
    text-align: center;
    color: #ffffff;
    font-size: 26;
    line-height: 80;
    font-weight: bold;
    
}
.td{
    height: 80;
    text-align: center;
    color: #000;
    font-size: 26;
    line-height: 80;    
}
.echarts{
    width: 710;
    height: 600;
    margin-left: 20;
    margin-top: 30;
}
</style>