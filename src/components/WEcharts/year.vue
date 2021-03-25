<template>

    <div class="app">
        <web-view ref="reflectName" class="webview" @ready="webReady" @stateChanged="webState" @receiveMessage="receviceMs"></web-view>
        <icon v-if="loadIng" class="icon"></icon>
    </div>

</template>

<style scoped>
    .app {
        position: relative;
    }
    .webview {
        flex: 1;
        scrollEnabled: false;
        progressbarVisibility: false;
        progressbarVisibility: false;
    }
    .icon {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: "tb-loading-c spin";
        font-size: 48px;
        color: #666666;
    }
</style>

<script>
    const eeui = app.requireModule('eeui');
    import API from '../../fetch/api/apis'
    const stream = app.requireModule('stream');


    export default {
        name: 'Yearcharts',

        props: {
            baidukey: {
                type: String,
                default: "706afcb60ea4460e246fe6a24c73e0c5",
            }, 
            options: {
                type: Object,
                default: {
                    title: {
                         text: '基本的折线图（演示）'
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 780],
                        type: 'line',
                        smooth: true,
                        areaStyle: {}
                    }]
                }
            },
        },

        data() {
            return {
                randId: '',
                loadIng: true,
                yearList:[],
                dayList:[],
                dayNewList:[],
                dayNewList1:[],
                userList:app.config.params ? app.config.params : {},
                sdateC:app.config.params ? app.config.params.sdate : '',
                mon:['01','02','03','04','05','06','07','08','09','10','11','12']
            }
        },

        mounted() {
            this.randId = this.randomString(6);
             eeui.setVariate("components::echarts::baidukey", this.baidukey);
            eeui.setVariate("components::echarts::option:"+ this.randId, JSON.stringify(this.options));
             eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
              eeui.setVariate("components::echarts::sdateC:" + this.randId, this.sdateC);
          
        },

        watch: {
            options(option) {
                this.setOptions(option);
            },
            yearList(val){
                this.yearList=val;
            },
            dayList(val){
                 this.dayList=val;
            },
            dayNewList(val){ 
                 this.dayNewList=val;
            },
            dayNewList1(val){
                this.dayNewList1=val;
            }
         
        },

        methods: {
           
            webReady() {
                this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts3.html#' + this.randId));
            },

            webState(data) {
           
                if (data.status === 'start') {
                    this.loadIng = true;
                }else if (data.status === 'success' || data.status === 'error') {
                    this.loadIng = false;
                }
            },
            randomString(len) {
                len = len || 32;
                let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678oOLl9gqVvUuI1';
                let maxPos = $chars.length;
                let pwd = '';
                for (let i = 0; i < len; i++) {
                    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
                }
                return pwd;
            },

            setOptions(option) {
                eeui.setVariate("components::echarts::option:"+ this.randId, JSON.stringify(option));
                this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
            },
            receviceMs(data){
                let self=this;
                let getUrl='';  
                let arr=[];
                let monT=data.message+1;
                let s_date=self.getMonthFirstOrLaseDay(monT).firstDay; 
                let e_date=self.getMonthFirstOrLaseDay(monT).lastDay; 
                if(!self.userList.uid){
                    getUrl=API.baseUrl + API.userRunList+ '?s_date=' + s_date + '&end_date=' + e_date;
                }else{
                    getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userList.uid +'&s_date=' + s_date + '&end_date=' + e_date;
                }
                stream.fetch({
                    url:getUrl,
                    method:'GET',
                    type:'json',
                    headers:{
                        Authorization:eeui.getCaches('token', null).token
                    }
                },(res)=>{
                   
                    if(res.status == '200'){
                        self.dayList=res.data;
                        if(self.dayList.length!=0){
                            for (let i = 0; i < self.dayList.length; i++) {
                                let dayL = self.dayList[i].c_time.substring(0,10);
                                //当日期相同,只要传这个
                                let valDetailList = {
                                    "calorie": self.dayList[i].calorie,
                                    "check_status": self.dayList[i].check_status,
                                    "course_class_user_run_id": self.dayList[i].course_class_user_run_id,
                                    "metre": self.dayList[i].metre,
                                    "run_type": self.dayList[i].run_type,
                                    "spend_time": self.dayList[i].spend_time,
                                    "status": self.dayList[i].status,
                                    "step_number": self.dayList[i].step_number,
                                    "tr_id": self.dayList[i].tr_id,
                                    "valid_metre":self.dayList[i].valid_metre,
                                    "test_metre":self.dayList[i].test_metre
                                }
                                //当日期没有相同的,就新建一个Item
                                let valItem = { 
                                    "dayCtime": '',
                                    "dayListInfo": []
                                }
                                valItem.dayCtime = dayL;
                                valItem.dayListInfo.push(valDetailList);


                                //第0个不需要比较
                            
                                if (i == 0) {
                                    arr.push(valItem);
                                }else{
                                    let index1 = -1; // 通过for循环查找index
                                    for (var k = 0; k < arr.length; k++) {
                                        if (dayL == arr[k].dayCtime) {
                                            index1 = k;
                                            break;   
                                        }
                                    }
                                    if (index1 === -1) { // 没有找到
                                        arr.push(valItem);
                                    } else { // 找到了
                                        arr[k].dayListInfo.push(valDetailList);
                                    }
                                }
                            }
                            arr.sort(function(a, b) {
                                return b.dayCtime > a.dayCtime ? 1 : -1
                            })
                            self.dayNewList=arr;
           
                            eeui.setVariate("components::echarts::dayNewList:"+ self.randId, JSON.stringify(self.dayNewList));
                            self.$refs.reflectName.setJavaScript(
                                    "if (typeof loadHtml == 'function') { loadHtml() }"
                            );
                        }
                    }
                })

            },
            getuserYearRunList(){
                let self=this;
                let getUrl='';
                let getUrl1='';  
                let s_date='';
                let e_date=''; 
                let dayList=[];
                let arr=[];
                if(!self.userList.uid){
                    getUrl=API.baseUrl + API.userYearRunList+ '?page=' + 0;
                }else{
                     getUrl=API.baseUrl + API.userYearRunList+ '?uid='+ self.userList.uid +'&page=' + 0;
                }
                stream.fetch({
                    url:getUrl,
                    method:'GET',
                    type:'json',
                    headers:{
                        Authorization:eeui.getCaches('token', null).token
                    }

                },(res)=>{
                    if(res.status == '200'){
                        if(res.data.length!=0){
                            self.yearList=res.data;
                            let tt1=self.sdateC.substring(5,self.sdateC.lastIndexOf('-'));
                             
                            self.mon.forEach(function(itm,idx){
                             
                                if(itm.indexOf(tt1)>-1 && self.sdateC){
                                    
                                    s_date=self.getMonthFirstOrLaseDay(idx+1).firstDay; 
                                    e_date=self.getMonthFirstOrLaseDay(idx+1).lastDay; 
                                }

                                if(!self.sdateC){
                                    s_date=self.getMonthFirstOrLaseDay('1').firstDay; 
                                    e_date=self.getMonthFirstOrLaseDay('1').lastDay; 
                                }
                            })
     
                            if(!self.userList.uid){
                                getUrl1=API.baseUrl + API.userRunList+ '?s_date=' + s_date + '&end_date=' + e_date;
                            }else{
                                getUrl1=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userList.uid +'&s_date=' + s_date + '&end_date=' + e_date;
                            }

                            stream.fetch({
                                    url:getUrl1,
                                    method:'GET',
                                    type:'json',
                                    headers:{
                                        Authorization:eeui.getCaches('token', null).token
                                    }
                                },(ret)=>{   
                                     if(ret.status == '200'){
                                          dayList=ret.data;
                                            
                                          if(dayList.length!=0){
                                                    for (let i = 0; i < dayList.length; i++) {
                                                        let dayL = dayList[i].c_time.substring(0,10);
                                                        //当日期相同,只要传这个
                                                        let valDetailList = {
                                                            "calorie": dayList[i].calorie,
                                                            "check_status": dayList[i].check_status,
                                                            "course_class_user_run_id": dayList[i].course_class_user_run_id,
                                                            "metre": dayList[i].metre,
                                                            "run_type": dayList[i].run_type,
                                                            "spend_time": dayList[i].spend_time,
                                                            "status": dayList[i].status,
                                                            "step_number": dayList[i].step_number,
                                                            "tr_id": dayList[i].tr_id,
                                                            "valid_metre":dayList[i].valid_metre,
                                                            "test_metre":dayList[i].test_metre
                                                        }
                                                        //当日期没有相同的,就新建一个Item
                                                        let valItem = { 
                                                            "dayCtime": '',
                                                            "dayListInfo": []
                                                        }
                                                        valItem.dayCtime = dayL;
                                                        valItem.dayListInfo.push(valDetailList);


                                                        //第0个不需要比较
                                                    
                                                        if (i == 0) {
                                                            arr.push(valItem);
                                                        }else{
                                                            let index1 = -1; // 通过for循环查找index
                                                            for (var k = 0; k < arr.length; k++) {
                                                                if (dayL == arr[k].dayCtime) {
                                                                    index1 = k;
                                                                    break;   
                                                                }
                                                            }
                                                            if (index1 === -1) { // 没有找到
                                                                arr.push(valItem);
                                                            } else { // 找到了
                                                                arr[k].dayListInfo.push(valDetailList);
                                                            }
                                                        }
                                                    
                                                    
                                                    }

                                                    arr.sort(function(a, b) {
                                                        return b.dayCtime > a.dayCtime ? 1 : -1
                                                    })

                                                self.dayNewList1=arr;
                               
                                            eeui.setVariate("components::echarts::dayNewList1:" + self.randId, JSON.stringify(self.dayNewList1));

                                        }

                                     }
                                })
                          

                            eeui.setVariate("components::echarts::yearList:" + self.randId, JSON.stringify(self.yearList));
                        }
                    }
                })
            },
            getMonthFirstOrLaseDay(month){
                var month=month || (new Date()).getMonth()  //设置默认 如果不穿 取当前月份
                var nowdays = new Date();  
                var year = nowdays.getFullYear();  
                if(month==0) {  
                    month=12;  
                    year=year-1;  
                }  
                if (month < 10) {  
                    month = '0'+ month;  
                }  
                var firstDay = year+'-' + month+'-' + "01";
                var myDate = new Date(year, month, 0);  
                var lastDay = year+'-' + month+'-' +  myDate.getDate();
                return {'firstDay':firstDay,'lastDay':lastDay}
            }
            
           
        },
        created () {
            this.getuserYearRunList();   
        }
    }
</script>

