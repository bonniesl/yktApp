const eeui = app.requireModule('eeui')
const stream = app.requireModule('stream')
// import MD5 from 'blueimp-md5'  // 可以引入npm包，当你需要时

import apiList from './api/apis.js'
// root-api
const API_BaseUrl = 'http://app.asyke.com'
//const API_BaseUrl = 'http://app.zruup.com.cn'
const API_OssUrl = 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com'

Vue.mixin({
    data() {
        return {
        }
    },
    created() {},
    methods: {

        
        // 全局请求函数
        $fetch(options) {
            

            // 缓存获取登录token
         //   let user_token = eeui.getCachesString('user_token')
         
            let apiUrl = `${API_BaseUrl}${apiList[options.name]}`
            
            // 支持name和url
            apiUrl = options.url || apiUrl
            // 支持methods和method
            options.method = options.method || options.methods
            options.headers = options.headers || {}
            options.data = options.data || {}
            
            // 添加自定义全局参数，比如APP版本号
            let versioncode = weex.config.env.appVersion
            options.data.versioncode = versioncode

            // 处理get请求
            // if (options.method.toLowerCase() === 'get' && options.data) {
            //     apiUrl += '?';
            //     for (let key in options.data) {
            //         apiUrl += `&${key}=${options.data[key]}`
            //     }
            // }


           
            
            return new Promise((resolve, reject) => {
                stream.fetch({
                    method: options.method,
                    url: apiUrl,
                    type: options.type || 'json',
                    headers: {
                        'Content-Type': 'application/json',
                        // 'Accept': 'application/json, text/plain, */*',
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                        //'Cookie': `token=${user_token}`, // 设置cookie
                        ...options.headers
                    },
                    body: JSON.stringify(options.data)
                }, (res) => {
                    
                    if (res.ok && res.status === 200) {
                    
                        let data = res.data || {}
                       
                        resolve(data)
                    } else {
                        reject(res)
                    }
                });
            })
        }
    }
});

