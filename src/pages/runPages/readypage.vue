<template>
<div class="app">
    <text class="num">{{num}}</text>
</div>
</template>
<script>
     export default {
         data(){
             return{
                 num:3,
                 timer:'',
                 times:3
             }
         },
         methods:{
             setTime(){
                 let self = this;
                 var timer = setInterval(()=>{
                     this.times--;
                     this.num--;
                     if(this.times == 0){
                         this.num = 'GO!';
                     }
                     if(this.times == -1){
                         this.num = 'GO!';
                        clearInterval(timer);
                            eeui.openPage({
                            url: 'runpages.js',
                            statusBarColor:'#0d2236',
                            animated:false
                        }, function(result) {
                            //......
                        });
                    }

                 },1000);
             }
         },
         created(){
             this.setTime();
            
         }

     }
</script>
<style scoped>
.app{
    width:750;
    height:1334;
    background-color:#1eb76e;
    align-items:center;
    justify-content:center;
}
.num{
    font-size:200;
    color:#fff;
}
</style>