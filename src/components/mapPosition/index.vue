<template>

    <div class="app">
        <web-view ref="reflectName" class="webview" @ready="webReady" @stateChanged="webState"></web-view>
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
   
</style>

<script>
    const eeui = app.requireModule('eeui');
    import API from '../../fetch/api/apis'
    const stream = app.requireModule('stream');

    export default {
        name: 'Map',

        props: {
            tracks:{
                type:Object,
                default:{}
            }
        },
        data() {
            return {
                randId: '',
                runRracks:[],
                course_class_user_run_id:app.config.params.coursid
            }
        },
        watch: {
            tracks(tracks) {
                this.setOptions(tracks);
            },
            runRracks(val){
                this.runRracks=val;
            }   
        },

        methods: {
            webReady() {
                this.$refs.reflectName.setUrl(eeui.rewriteUrl('../../components/mapPosition/map.html#' + this.randId));
            },

            webState(data) {
                if (data.status === 'start') {
                    this.loadIng = true;
                }else if (data.status === 'success' || data.status === 'error') {
                    this.loadIng = false;
                }
            },
            setOptions(tracks) {
                eeui.setVariate("components::echarts::runRracks:" + this.randId, JSON.stringify(tracks));
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
            getUserRunInfo(){
                let self = this;
                stream.fetch({
                        url:API.baseUrl + API.getUserRunInfo+ '?course_class_user_run_id=' + self.course_class_user_run_id,
                        method:'GET',
                        type:'json',
                        headers:{
                            Authorization:eeui.getCaches('token', null).token
                        }

                    },(res)=>{
                        if(res.status == '200'){
                            self.runRracks=res.data.course_class_user_run_tracks; 
                          
                          //  eeui.setVariate("components::echarts::runRracks:" + self.randId, JSON.stringify(self.runRracks));  
        
                        }
                    })
            }
          
        },
        created () {
            //this.getUserRunInfo();
        },
        mounted() {
            this.randId = this.randomString(6);
            eeui.setVariate("components::echarts::runRracks:" + this.randId, JSON.stringify(this.tracks));
           
        },
    }
</script>

