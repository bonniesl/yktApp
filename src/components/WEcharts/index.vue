<template>

    <div class="app">
        <web-view ref="reflectName" class="webview" @ready="webReady" @stateChanged="webState"></web-view>
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
        name: 'WEcharts',

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
                        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: 'line'
                    }]
                }
            },
        },

        data() {
            return {
                randId: '',
                loadIng: true,
                dayList:[],
                dayNewList:[],
                dayPlIST:[],
                cliIndex:0,
                userList:app.config.params ? app.config.params : {},
        
                // opUid:app.config.params ? app.config.params.uid : '',
                 sdateC:app.config.params ? app.config.params.sdate : ''
                // userInfos:app.config.params ? app.config.params.user : ''
            }
        },
        watch: {
            options(option) {
                this.setOptions(option);
            },
            dayNewList(val){
                this.dayNewList=val;
            },
            cliIndex(val){
                this.cliIndex=val;
            }
     
        },

        methods: {
            webReady() {
                this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/WEcharts/echarts.html#' + this.randId));
            },

            webState(data) {
                if (data.status === 'start') {
                    this.loadIng = true;
                }else if (data.status === 'success' || data.status === 'error') {
                    this.loadIng = false;
                }
            },

            setOptions(option) {
                eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(option));
                this.$refs.reflectName.setJavaScript("if (typeof loadOption == 'function') { loadOption() }");
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
            getuserRunList(){
                let self=this;
                let s_date=self.getDay(-6);
                let e_date=self.getDay(0);  
                let getUrl='';
                 if(!self.userList.uid){
                    getUrl=API.baseUrl + API.userRunList+ '?s_date=' + s_date + '&end_date=' + e_date;
                }else{
                     getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userList.uid +'&s_date=' + s_date + '&end_date=' + e_date;
                  // getUrl=API.baseUrl + API.userOpenRunList+ '?uid='+ self.userList.uid +'&s_date=' + self.userList.sdate + '&end_date=' + self.userList.sdate;
                    self.dayNewList=[];
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
                                            self.dayNewList.push(valItem);
                                        }else{
                                            let index1 = -1; // 通过for循环查找index
                                            for (var k = 0; k < self.dayNewList.length; k++) {
                                                if (dayL == self.dayNewList[k].dayCtime) {
                                                    index1 = k;
                                                    break;   
                                                }
                                            }
                                            if (index1 === -1) { // 没有找到
                                                self.dayNewList.push(valItem);
                                            } else { // 找到了
                                                self.dayNewList[k].dayListInfo.push(valDetailList);
                                            }
                                        }
                                    }
                                   
                                    self.dayNewList.sort(function(a, b) {
                                        return b.dayCtime < a.dayCtime ? 1 : -1
                                    })

                                    self.dayNewList.forEach(function(vval,idx){
                                        if(vval.dayCtime.indexOf(self.sdateC)>-1){
                                            self.cliIndex=idx;
                                            return self.cliIndex
                                         
                                        }
                                    })

                                    eeui.setVariate("components::echarts::idx:" + self.randId, JSON.stringify(self.cliIndex));

                                    eeui.setVariate("components::echarts::dlList:" + self.randId, JSON.stringify(self.dayNewList));

                            }else{
                               //  eeui.setVariate("components::echarts::dlList:", JSON.stringify( self.dayList));
                            }
                        }   
                    
                })
            },
            getDay(day){
            　var today = new Date();
            　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
            　　today.setTime(targetday_milliseconds);
            　　var tYear = today.getFullYear();
            　var tMonth = today.getMonth();
            　　var tDate = today.getDate();
            　　tMonth = this.doHandleMonth(tMonth + 1);
            　　tDate = this.doHandleMonth(tDate);
            　　return tYear+"-"+tMonth+"-"+tDate;
            },
            doHandleMonth(month){
                　　var m = month;
                　　if(month.toString().length == 1){
                　　　　m = "0" + month;
                　　}
                　　return m;
            }
        },
        created () {
            this.getuserRunList();  
        },
        mounted() {
            this.randId = this.randomString(6);
            eeui.setVariate("components::echarts::baidukey", this.baidukey);
            // eeui.setVariate("components::echarts::opUid:" + this.randId, this.userList.uid);
            eeui.setVariate("components::echarts::option:" + this.randId, JSON.stringify(this.options));
            eeui.setVariate("components::echarts::userInfos:" + this.randId, JSON.stringify(this.userList));
            eeui.setVariate("components::echarts::sdateC:" + this.randId, this.sdateC);
             
        },
    }
</script>

