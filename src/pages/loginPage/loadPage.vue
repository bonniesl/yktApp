<template>
    <div class="app">
        <navbar class="navbarb">
            <navbar-item type="back"></navbar-item>
            <navbar-item type="title">
                <text class="headtext">新用户引导</text>
            </navbar-item>
            </navbar>

        <scroller class="scroller">
            
            <image class="loadimg" style="width:750px;height:2400px" src="../../assets/images/loadPageBg.jpg"></image>
        </scroller>
        
       
    </div>
</template>
<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>
<style scoped>
.loadimg{
    width: 750px;
    height: 2400px;
}
.navbarb {
  width: 750px;
  height: 100px;
  background-color: #1eb76e;
}
.headtext {
  font-size: 30px;
  color: #ffffff;
}
</style>