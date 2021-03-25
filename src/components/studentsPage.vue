<template>
    <div class="container">
        <!-- <div class="searchboxBox">

            <div class="searchbox">
                <input
                class="searchBar"
                type="text"
                autofocus="false"
                placeholder="搜索"
                value="">
                </input>
                <icon class="searchIcon" :eeui="{content:'ios-search'}"></icon>
            </div>
        
        </div> -->
        <wxc-searchbar ref="wxc-searchbar" class="searchboxBox"
                    return-key-type="search"
                     @wxcSearchbarInputReturned="wxcSearchbarInputReturned"
                     @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput"
                     ></wxc-searchbar>


        <!-- <div class="studentTabbool">
            <div class="boolLeft">
                <text class="boolLeftword">按学号</text>
            </div>
            <div class="boolCenter">
                <text class="rx">允许加入</text>
                <switch class="switch" :checked="loading" @change="loading = !loading"></switch>
            </div>
            <button class="button" :eeui="{text:'签到', model:'green'}"></button>
        
        </div> -->

        <div class="list-input-item" @click="tabOne">
                <text class="rx">授课老师</text>
                <text class="num1">{{teacher? 1:0}}</text>
                <icon class="downIcon" :eeui="{content:'ios-arrow-down'}"></icon>
            </div>

            <div class="Downinnerbox" v-if="tabShow1">
                <image class="imgDowninnerbox" :src="teacher.avatar_file" style="width:76px;height:76px"></image>
                <text class="Downinnertext">{{teacher.user_name}}</text>
                <!-- <icon class="DowninnerIcon" :eeui="{content:'tb-message',fontSize:38}"></icon> -->
            </div>

            <div class="list-input-item">
                <text class="rx">协同老师</text>
                <text class="num1">0</text>
                <icon class="downIcon" :eeui="{content:'ios-arrow-down'}"></icon>
            </div>

            <div class="list-input-item" @click="tabThree">
                <text class="rx">学生</text>
                <text class="num1">{{students?students.length:0}}</text>
                <icon class="downIcon" :eeui="{content:'ios-arrow-down'}"></icon>
            </div>
            <div class="stuShowBox" v-if="tabShow3">
                 <div class="resultShowItem" v-for="(stu,index) in students" :key="index">
                    <div class="resultShowImageBox">
                        <image class="resultShowImage" :src="stu.avatar_file" style="width:76px;height:76px"></image>
                    </div>
                    
                    <div class="resultShowCneterWorld">
                        <text class="resultShowCneterWorldTit">{{stu.name}}</text>
                        <text class="resultShowCneterWorldTit2">{{stu.student_id}}</text>
                        
                        
                        
                    </div>
                    
                    <!-- <div class="resultShowCneterrightWorld">
                        <div class="resultShowCneterrightBtn" @click="sendPush">
                            <text class="sendPushBtn">未分组</text>
                            <icon class="sendpushIcon" :eeui="{content:'md-arrow-dropdown',fontSize:38}"></icon>
                            
                        </div>
                        
                    </div>
                    <icon class="resultShowIcon" :eeui="{content:'ios-more',fontSize:40}"></icon> -->
                </div>
                

            </div>
            <div v-if="tabShow4">
                <div class="resultShowItem" v-for="(stu2,index) in newstudents" :key="index">
                    <div class="resultShowImageBox">
                        <image class="resultShowImage" :src="stu2.avatar_file" style="width:76px;height:76px"></image>
                    </div>
                    
                    <div class="resultShowCneterWorld">
                        <text class="resultShowCneterWorldTit">{{stu2.name}}</text>
                        <text class="resultShowCneterWorldTit2">{{stu2.student_id}}</text>
                        
                        
                        
                    </div>
                    
                    <!-- <div class="resultShowCneterrightWorld">
                        <div class="resultShowCneterrightBtn" @click="sendPush">
                            <text class="sendPushBtn">未分组</text>
                            <icon class="sendpushIcon" :eeui="{content:'md-arrow-dropdown',fontSize:38}"></icon>
                            
                        </div>
                        
                    </div>
                    <icon class="resultShowIcon" :eeui="{content:'ios-more',fontSize:40}"></icon> -->
                </div>
            </div>
            
            
            
    


        
       
    </div>
</template>
<script>
    import { WxcSearchbar } from 'weex-ui';
    const eeui = app.requireModule('eeui');
    const stream = app.requireModule('stream');
    import API from '../fetch/api/apis'
     export default {
         components: { WxcSearchbar },
         data(){
             return{
                value: '',
                course_class_id: app.config.params.id,
                teacher:'',
                students:'',
                tas:"",
                tabShow1:false,
                tabShow2:false,
                tabShow3:true,
                tabShow4:false,
                newstudents:[]
             }
         },
          methods: {
              //获取班级人员列表
            getStudentList(){
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:API.baseUrl + API.getClassUserList + '?course_class_id=' + self.course_class_id,
                    type:'json',
                    headers:{
                        Authorization:eeui.getCaches('token', null).token
                    }
                },res=>{

                    if(res.status == 200){
                        self.teacher = res.data.teacher;
                        self.tas = res.data.tas;
                        self.students = res.data.students;
                        //console.log(self.teacher);
                        //console.log(res.data.students);
                    }
                    //console.log(res);
                })
            },
            tabOne(){
                this.tabShow1 = !this.tabShow1;
            },
            tabThree(){
                if(this.newstudents.length>0){
                    this.tabShow3 = false;
                    this.tabShow4 = !this.tabShow4;
                }else{
                    this.tabShow3 = !this.tabShow3;
                    this.tabShow4 = false;
                }
                
            },
          
            wxcSearchbarInputReturned (){
                this.tabShow3 = false;

                for (const key in this.students) {
                    if (this.students[key].name.indexOf(this.value) > -1) {
                        this.newstudents.push(this.students[key]);
                        this.tabShow4 = true;
                    }
                }

                

                //console.log('11111');
            },
            wxcSearchbarInputOnInput (e) {
                this.value = e.value;
            },
           
        },
        created () {
           this.getStudentList();
        }
     }
</script>
<style scoped>
.container{
    width: 750;
    background-color: #fff;
}
.searchBar{
    width: 620;
    height: 60;
    padding-left: 10px;
    font-size: 24px;
    
}
.searchbox{
    width: 689;
    height: 60;
    background-color: #fff;
    align-self: center;
    border-radius: 4;
    flex-direction: row;
    
}
.searchboxBox{
    margin-top: 10px;
}
.searchIcon{
    width: 60;
    height: 60;
    color: #999;
}
.studentTabbool{
    width: 710;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 87px;
    margin-left: 20px;
    margin-right: 20px;
    border-bottom-color: #ebebeb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
}
.button {
        font-size: 30px;
        width: 120px;
        height: 60px;
    }
.boolCenter{
    flex-direction: row;
    align-items: center;
}
.boolLeftword{
    font-size: 30px;
    color: #333333;
}

.list-input-item {
        width: 750px;
        height: 90px;
        flex-direction: row;
        align-items: center;
        border-bottom-color: #e4e4e4;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        padding-left: 20px;
        padding-right: 20px;
        background-color: #fafafa;
        position: relative;

    }
.input {
        padding-right: 50px;
        flex: 1;
        height: 90px;
        text-align: right;
        font-size: 28px;
    }
    .rx{
        font-size: 30px;
        color: #333333;
    }
    .num1{
        height: 28;
        width: 28;
        border-radius: 100;
        background-color: #f7b027;
        text-align: center;
        line-height: 28;
        color: #ffffff;
        margin-left: 10px;
    }
    .downIcon{
        width: 80px;
        height: 90px;
        color: #bbb;
        position: absolute;
        right: 20px;
        top: 0;
        
    }
    .Downinnerbox{
        flex-direction: row;
        align-items: center;
        height: 120;
        padding-left: 40px;
    }
    .imgDowninnerbox{
        border-radius: 8px;
        

    }
    .Downinnertext{
        font-size: 28px;
        color: #333;
        margin-left: 20px;
    }
    .DowninnerIcon{
        width: 50px;
        height: 50px;
        color: #999;
        margin-left: 20px;
    }

    .resultShowCneterrightWorld{
    margin-left:30px;
}
.resultShowImageBox{
    width:76;
    height:76;
    margin-left:40px;
    border-radius: 8;
    }
.resultShowImagetext{
    width:90;
    position:absolute;
    bottom:0;
    left:0;
    background-color:rgba(0, 0, 0, 0.24);
    font-size:20px;
    height:30px;
    line-height:30px;
    color:#fff;
    text-align:center;
}

.sendpushIcon{
    width:30;
    height:25;
    color:#999;
}
.sendPushBtn{
    color:#999;
    font-size:32;
}
.resultShowItem{
    flex-direction: row;
    align-items: center;
    height: 120;
}
.resultShowCneterWorld{
    margin-left:20px;
    width:345x;
}
.resultShowIcon{
    width:100px;
    height:120px;
    margin-left:20px;
    color:#999;
}
.resultShowCneterrightBtn{
    width:120px;
    height:46px;
    color:#999;
  
    flex-direction:row;
    justify-content:center;
    align-items:center;

}
.resultShowCneterWorldTit{
    font-size: 30px;
    color: #333;
}



</style>
