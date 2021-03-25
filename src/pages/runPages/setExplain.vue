<template>
   <div class="app">
       <navbar class="navbarb">  
           <navbar-item type="back"></navbar-item>   
            <navbar-item type="title">
                <text class="headtext">权限设置说明</text>
               
                
            </navbar-item>
        </navbar>
        <scroller class="scroller">
        <!-- <div class="webList"  v-for="(item,index) in explainList" :key="index"> -->
            <web class="webInner" :src="link"></web>
        <!-- </div> -->
        </scroller>
    </div> 
</template>
<script>
const eeui = app.requireModule('eeui');
const stream = app.requireModule('stream');
import API from '../../fetch/api/apis'
export default {
    data () {
        return {
            explainList:[],
            link:'',
            phoneName:'',
            phoneType:[
                {name:'小米',type:'mi'},
                {name:'华为',type:'huawei'},
                {name:'oppo',type:'oppo'},
                {name:'vivo',type:'vivo'},
                {name:'魅族',type:'meizu'},
                {name:'三星',type:'sam'},
                {name:'一加',type:'one'},
            ]
        }
    },
    methods: {
        explainFun(){
            stream.fetch({
                method:'GET',
                url:API.baseUrl + API.setExplain,
                type:'json',
                headers:{
                    'Content-Type': 'application/json'
                } 
            },res=>{
                if(res.status === 200){
                     this.explainList = res.data;
                    
                    if(res.data.length){
                        for (let index = 0; index < res.data.length; index++) {
                            const el = res.data[index];
                            for (let i = 0; i < this.phoneType.length; i++) {
                                const elType = this.phoneType[i];
                                if(this.phoneName.indexOf(elType.type) != -1){
                                    //console.log(elType);
                                    if(el.question_content.indexOf(elType.name) != -1 ){
                                        this.link = el.link_url;
                                        

                                    }

                                //     

                                }else{
                                    if(el.question_content == '其他手机'){
                                        console.log(el.link_url,'11111');
                                    }
                                }
                                
                                //console.log(el.question_content.indexOf(elType.name) );
                                
                            }
                            
                        }
                        //console.log(res.data[0].question_content);
                    }
                  
                }
            })
        }
    },
    created () {
        this.explainFun();
        if(app.config.params.phoneName !== undefined){
            this.phoneName = app.config.params.phoneName.toLowerCase();
            console.log(app.config.params.phoneName);
        }
        //console.log(WXEnvironment.deviceModel);
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
.righttext{
    /* margin-right:20px; */
    font-size:30px;
    color:#333;
    margin-right: 55px;
}
.scroller{
    width: 750px;
}
.webInner{
    width: 750px;
    flex: 1;
}
</style>