<template>
    <div class="app">
        <div class="networkW">
            <image class="netpic" src="../assets/images/netWork.png"></image>
           <text class="netTxt1">网络请求失败</text>
            <text class="netTxt2">请检查您的网络设置</text>
             <button class="reloadP" :eeui="{text:'重新加载',backgroundColor:'#1eb76e',fontSize:24}" @click="reloadPage"></button>
        </div>
    </div>
</template>
<script>
const eeui = app.requireModule('eeui');

    export default {
         
        data(){
            return{
                
            }
        },
        methods: {
            reloadPage(){
                eeui.reloadPage(eeui.getPageInfo().pageName);
            }  
        },
          
        created () {     
            
        }
    }
</script>
<style scoped>
.networkW{
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    justify-content: center;
    align-items: center;
}
.netpic{
    width:180px;
    height:151px;
    margin-bottom:28px;
}
.netTxt1{
    font-size:26px;
    color:#2edb7d;
}
.netTxt2{
    padding-top:16px;
    font-size:22px;
    color:#222;
}
.reloadP{
    width:130px;
    height:66px;
    margin-top:20px;

}
</style>