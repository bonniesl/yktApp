<template>

    <div class="danSelRadioBox" v-if="danselectShow" @click="wxcMaskSetHidden" :style="{height:heightBox}">
            <div class="content" :style="{'height':height,'margin-top':top}">
                <scroller class="scroller">
                    <div class="radioList" v-for="(item,index) in itemList" :key="index" @click="selItem(index)">
                        <text class="left">{{item.text}}</text>
                        <text class="left2" v-if="item.hunban_name">{{item.hunban_name}}</text>
                        <text class="left3" v-if="item.hunban_teacher">{{item.hunban_teacher}}</text>
                        <div class="right">
                            <div v-if="item.checked" class="radioDian"></div>
                        </div>
                    </div>
                </scroller>
            </div>
    </div>

    


</template>
<script>
export default {
    props: {
        danselectShow:{
            type:Boolean,
            default:false
        },
        itemList:{
            type:Object,
            default:[]
        },
        top:{
            type:Number,
            default:300
        },
        height:{
            type:Number,
            default:300
        },
        curVal:{
            type:String,
            default:''
        },
        itemInfo:{
             type:Object,
              default:[]
        }
        
       
        
        
    },
    data () {
        return {
            value:'',
            overlayCanClose: true,
            isFalse: false,
            hasAnimation: true,
            selindex:-1,
            heightBox:''
            
        }
    },
    watch: {
        itemList(){
            
        }
    },
    methods: {
        wxcRadioListChecked (e) {
            
        },
        openOverlay () {
            this.show = true;
        },
        selItem(index){
           this.danselectShow = false;
           this.itemList.map((val) => {
               val.checked = false;
           })
           this.itemList[index].checked = true;
           //console.log(this.itemList,'33333');
           this.$emit('hideDan',index,this.itemList[index].status); 
           
        },
        wxcMaskSetHidden () {
            this.danselectShow = false;
           this.$emit('hideDan');
        }
        
    },

    created () {
       this.heightBox =  this.$getConfig().env.deviceHeight;
    },
    mounted () {
       
    }
}
</script>
<style scoped>

.radioList{
    width: 650px;
    height: 80px;
    border-bottom-style: solid;
    border-bottom-color: #ddd;
    border-bottom-width: 1px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
}
.left{
    color: #333;
    margin-left: 20px;
    font-size: 28px;
}
.left2{
    color: #333;
    margin-left: 10px;
    font-size: 28px;
    text-align: text;
    width: 140px;

}
.left3{
    color: #333;
    margin-left: 10px;
    font-size: 28px;
    text-align: text;
    width: 100px;

}
.right{
    width: 40px;
    height: 40px;
    border-width: 1px;
    border-style: solid;
    border-color: #999;
    border-radius: 50px;
    margin-right: 20px;
    justify-content: center;
    align-items: center;
}
.radioDian{
    width: 30px;
    height: 30px;
    background-color: #1eb76e;
    border-radius: 30px;
}
.danSelRadioBox{
    position: fixed;
    top: 0;
    left: 0;
    width: 750px;
    background-color: rgba(0, 0, 0, 0.6);
}
.content{
    background-color: #fff;
    width: 650px;
    margin-left: 50px;
}

</style>
