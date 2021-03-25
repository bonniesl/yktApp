<template>
    <div id="app">
        <navbar class="navbarb">
            <!--左边内容-->
            <navbar-item type="back"></navbar-item>
            <navbar-item type="title">
                <text class="headtext">二维码</text>
            </navbar-item>
           
            
           

           

        </navbar>
        <web :src="url" style="width: 750px; height: 1334px"></web>
    </div>
</template>
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
</style>
<script>
export default {
    data () {
        return {
            url:'http://app.asyke.com/html/classcode/'
        }
    },
    created () {
        this.url = this.url + '?code='+app.config.params.code + '&name='+app.config.params.name + '&class_id='+ app.config.params.classid + '&is_ta=';

        console.log(this.url);
    }
}
</script>