<template>
    <div class="container">
        <navbar class="navbarb"> 
            <navbar-item type="back"></navbar-item>   
            <navbar-item type="title">
                <text class="headtext">完善个人信息</text>
            </navbar-item>
        </navbar>
        
        <scroller class="tablelist" :show-scrollbar="false">
        <div class="cell_list_box">
            <wxc-cell title="头像"
                :has-arrow="true"
                @wxcCellClicked="wxcCellClickedpiture"
                :has-top-border="false">
                <image class="avator" :src="defaultAvator" style="width:142px;height:142px"></image>
            </wxc-cell>
            <!-- <div class="cellItem cellMargin" @click="setuserName">
                <text class="leftText">用户名</text>    
                <text class="mastTip">*</text>
                <text class="righttext " v-if="!fromShowList.userShow">{{editUserInfo.username}}</text>
                <input
                    v-if="fromShowList.userShow"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入姓名"
                   max-length="20"
                   v-model="editUserInfo.username"
                   @blur="blurInputUserName"
                > 
            </div>  -->
            <div class="cellItem cellMargin" @click="setIphone">
                <text class="leftText">手机号</text>    
                <text class="mastTip">*</text>
                <text class="righttext grey" v-if="!fromShowList.iphone">{{editUserInfo.mobile}}</text>
                <input
                    v-if="fromShowList.iphone"
                    class="rightInput"
                   type="tpl"
                   autofocus="true"
                   placeholder="请输入手机号"
                   max-length="11"
                   v-model="editUserInfo.mobile"
                   @blur="blurInputName"
                > 
            </div> 
            <div class="cellItem" @click="setName">
                <text class="leftText">姓名</text>    
                <text class="mastTip">*</text>
                <text class="righttext" v-if="!fromShowList.name">{{editUserInfo.name}}</text>
                <input
                    ref="blur1"
                    v-if="fromShowList.name"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入姓名"
                   max-length="20"
                   v-model="editUserInfo.name"
                   @blur="blurInputName"
                > 
            </div> 
            <wxc-cell title="性别"
                :has-arrow="false"
                :has-margin="false"
                :has-top-border="false">
                <text class="mastTip">*</text>
                <div class="sexSelBox">
                    <div class="nan" v-for="(item,index) in sexList" :key="index" @click="selSel(index)">
                        <div class="selBtn">
                            <div class="point" v-if="index == sexIndex"></div>
                        </div>
                        <text class="sextext">{{item.text}}</text>
                    </div>
                    
                </div>
            </wxc-cell>
            <wxc-cell title="身份"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(identity,selindex)"
                :has-margin="identityVal == '学生'? false : true"
                :has-top-border="false">
                <text class="righttext2">{{identityVal}}</text>
            </wxc-cell>
            <wxc-cell title="学生类型"
                v-if="identityVal == '学生'"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(stu_type,selindex)"
                :has-margin="true"
                :has-top-border="false">
                 <!-- <text class="mastTip">*</text> -->
                <text class="righttext2">{{stu_val}}</text>
            </wxc-cell>
            
         
            <!-- <div class="cellItem cellMargin" @click="setIEamil">
                <text class="leftText">邮箱</text>    
                <text class="mastTip">*</text>
                <text class="righttext" :class="[editUserInfo.email == '' ? 'grey' : '']" v-if="!fromShowList.email">{{userInfo.email ? userInfo.email :'请输入邮箱'}}</text>
                <input
                    v-if="fromShowList.email"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入邮箱"
                   v-model="editUserInfo.email"
                   @blur="blurInputName"
                > 
            </div>  -->

            <wxc-cell title="入学年"
                v-if="identityVal == '学生'"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(enterYearList,selindex)"
                :has-top-border="false">
                 <text class="mastTip">*</text>
                <text class="righttext2">{{editUserInfo.year}}</text>
            </wxc-cell>
           
            <wxc-cell title="单位"
                :has-arrow="true"
                @wxcCellClicked="openBottomPopup"
                :has-top-border="false">
                <text class="mastTip">*</text>
                <text class="righttext2">{{danwei}}</text>
            </wxc-cell>
            <wxc-cell :title="label_one ? label_one:'第二级'"
                v-if="labeOne.length > 1"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(labeOne)"
                :has-top-border="false">
                <text class="mastTip" v-if="identityVal == '学生'">*</text>
                <text class="righttext2" :class="[labeOneVal == '请选择' ? 'grey' : '']">{{labeOneVal}}</text>
            </wxc-cell>
            <wxc-cell :title="label_two?label_two:'第三级'"
                v-if="labeTwo.length > 1"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(labeTwo)"
                :has-top-border="false">
                <text class="mastTip" v-if="identityVal == '学生'">*</text>
                <text class="righttext2" :class="[labeTwoVal == '请选择' ? 'grey' : '']">{{labeTwoVal}}</text>
            </wxc-cell>
            <wxc-cell :title="label_three?label_three:'第四级'"
                v-if="labeThree.length > 1"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(labeThree)"
                :has-top-border="false">
                <text class="mastTip" v-if="identityVal == '学生'">*</text>
                <text class="righttext2" :class="[labeThreeVal == '请选择' ? 'grey' : '']">{{labeThreeVal}}</text>
            </wxc-cell>
            <wxc-cell :title="label_four?label_four:'第五级'"
                v-if="labeFour.length > 1"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(labeFour)"
                :has-top-border="false">
                <text class="mastTip" v-if="identityVal == '学生'">*</text>
                <text class="righttext2" :class="[labeFourVal == '请选择' ? 'grey' : '']">{{labeFourVal}}</text>
            </wxc-cell>

            <div class="cellItem" @click="setTecherId" v-if="identityVal == '教师'">
                <text class="leftText">工号</text>    
                <!-- <text class="mastTip">*</text> -->
                <text class="righttext" v-if="!fromShowList.teacherId">{{editUserInfo.student_id}}</text>
                <input
                ref="blur2"
                    v-if="fromShowList.teacherId"
                    class="rightInput"
                   type="tel"
                   autofocus="false"
                   placeholder="请输入工号"
                   max-length="20"
                   v-model.trim="editUserInfo.student_id"
                > 
            </div> 
            <div class="cellItem" :class="[zwShow ? '':'cellMargin']" @click="setStudentId" v-if="identityVal == '学生'">
                <text class="leftText">学号</text>    
                <text class="mastTip">*</text>
                <text class="righttext" v-if="!fromShowList.studentId">{{editUserInfo.student_id}}</text>
                <input
                    v-if="fromShowList.studentId"
                    ref="blur3"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入学号"
                   v-model="editUserInfo.student_id"
                   @blur="blurInputsetStudentId"
                > 
            </div> 

            <wxc-cell
                title="职务"
                v-if="identityVal == '学生' && zwShow"

                :has-arrow="true"
                :has-margin="true"
                @wxcCellClicked="selRadioShow(zwValue)"
                :has-top-border="false"
            >
            <text class="righttext2" :class="[zhiwu_val == '请选择职务' ? 'grey' : '']">{{zhiwu_val}}</text>
            </wxc-cell>
           

            <!-- 混班 1-->
            <wxc-cell
                :title="hunban_one_name?hunban_one_name:'混班三级'"
                v-if="identityVal == '学生' && is_hunban==1"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(hunban_label_two)"
                :has-margin="false"
                :has-top-border="false"
                >
                <text class="righttext2" :class="[hunban_two_val == '请选择' ? 'grey' : '']">{{hunban_two_val}}</text>
            </wxc-cell>
            <!-- 混班 2-->
            <wxc-cell
                :title="hunban_two_name?hunban_two_name:'混班四级'"
                v-if="identityVal == '学生' && hunban_two_val!='请选择' "
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(hunban_label_three)"
                :has-margin="false"
                :has-top-border="false"
                >
                <text class="righttext2" :class="[hunban_three_val == '请选择' ? 'grey' : '']">{{hunban_three_val}}</text>
            </wxc-cell>

            <wxc-cell title="民族"
                v-if="identityVal == '学生'"
                :has-arrow="true"
                @wxcCellClicked="selRadioShow(mingzu)"
                :has-top-border="false">
                <text class="righttext2">{{editUserInfo.mingzu}}</text>
            </wxc-cell>
            <div class="cellItem" @click="setcard" v-if="identityVal == '学生'">
                <text class="leftText">身份证</text>    
                <text class="mastTip">*</text>
                <text class="righttext" v-if="!fromShowList.ident">{{editUserInfo.card_id}}</text>
                <input
                ref="blur4"
                    v-if="fromShowList.ident"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入地址"
                   v-model="editUserInfo.card_id"
                   @blur="blurInputcard"
                > 
            </div> 
            <div class="cellItem" @click="setaddress" v-if="identityVal == '学生'">
                <text class="leftText">家庭住址</text>    
                <text class="mastTip">*</text>
                <text class="righttext" v-if="!fromShowList.address">{{editUserInfo.address}}</text>
                <input
                ref="blur5"
                    v-if="fromShowList.address"
                    class="rightInput"
                   type="text"
                   autofocus="true"
                   placeholder="请输入地址"
                   v-model="editUserInfo.address"
                   @blur="blurInputaddress"
                > 
            </div> 
            



         

        </div>
        
        <button class="button" @click="rechargeSubmit" :eeui="{text:'提交',backgroundColor:'#1eb76e',fontSize:30}"></button>
         
                
        </scroller>

        <!-- 搜索页 -->
        <wxc-popup popup-color="#ffffff"
               :show="searchShow"
               @wxcPopupOverlayClicked="popupOverlayBottomClick"
               pos="right"
               width="750">
            <div class="demo-content">
                <navbar class="navbarb"> 
                    <navbar-item type="left">
                        <text class="popurBackBtn" @click="backIconFUn">返回</text>    
                    </navbar-item>   
                    <navbar-item type="title">
                        <text class="headtext">单位选择</text>
                    </navbar-item>
                </navbar>
                <wxc-searchbar ref="wxc-searchbar"
                        @wxcSearchbarInputOnInput="wxcSearchbarInputOnInput">
                </wxc-searchbar>

                <list :style="{height:heightH}">
                    <cell v-for="(item,index) in newSchoolList" :key="index">
                        <text class="itemS" @click="enterVale(index)">{{item.school_name}}</text>
                    </cell>
                </list>
            </div>
        </wxc-popup>

        <danSel 
            :danselectShow="danDiaogVal.show" 
            @hideDan="selRadioDialog" 
            :itemList="danDiaogVal.itemList" 
            :height="danDiaogVal.heightval" 
            :top="danDiaogVal.top" 
            :curVal="danDiaogVal.curVal"
        ></danSel>


 

    </div>
</template>
<script>
    import { WxcCell ,WxcPopup,WxcSearchbar} from 'weex-ui';
    const picture = app.requireModule("eeui/picture");
    const eeui = app.requireModule('eeui');
    const stream = weex.requireModule('stream');
    const network = app.requireModule("eeui/network");
    import danSel from '../../components/radioList.vue'
    import API from '../../fetch/api/apis'
    require("../../fetch");
     export default {
         components:{WxcCell,danSel,WxcPopup,WxcSearchbar},
         data(){
             return{
                 zhiwu:[],
                zwValue:[],
                zhiwu_val:'请选择职务',
                zwShow:false,
                 heightH:'',
                 danwei:'',
                 newSchoolList:[],
                 schoolList:eeui.getCaches('schoollist', []),
                 searchShow:false,
                 enterYearList:[],
                fromShowList:{//表格编辑显示
                    userShow:false,//用户
                    name:false,
                    iphone:false,
                    email:false,
                    studentId:false,
                    ident:false,
                    address:false,
                    teacherId:false,
                },
                value:'',
                selindex:0,
                userInfo:app.config.params.userinfo,
                sexValue:'男',
                sexIndex:0,
                sexList:[
                    {text:'男',type:1,checked:false,status:'sex'},
                    {text:'女',type:2,checked:false,status:'sex'}
                ],
                identityVal:'学生',
                identity:[
                    {text:'学生',type:1,checked:false,status:'ident'},
                    {text:'教师',type:2,checked:false,status:'ident'}
                ],
                stu_type:[
                    {text:'体测学生',type:1,checked:true,status:'stuType'},
                    {text:'普通学生',type:2,checked:false,status:'stuType'}
                ],
                stu_val:'体测学生',
                defaultAvator:'',//默认头像
                danDiaogVal:{
                     show:false,
                     itemList:[],
                     heightval:400,
                     top:400,
                     curVal:''
                 },
                 editUserInfo:{
                     username:'',
                     name:'',
                     email:'',
                     password:'',
                     mobile:'',
                     sex:'',
                     type:'',
                     stu_type:1,
                     year:'',
                     school_id:'',
                     class_position:'',
                     school_label_one:'',
                     school_label_two:'',
                     school_label_three:'',
                     school_label_four:'',
                     school_hunban_label_one:'',
                     school_hunban_label_two:'',
                     school_hunban_label_three:'',
                     student_id:'',
                     mingzu:'',
                     card_id:'',
                     address:'',
                     avatar_file:''
                 },
                 mingzu:[
                    {text:'汉族',checked:true,status:'mingzu'},	
                    {text:'蒙古族',checked:false,status:'mingzu'},	
                    {text:'回族',checked:false,status:'mingzu'},	
                    {text:'藏族',checked:false,status:'mingzu'},	
                    {text:'维吾尔族',checked:false,status:'mingzu'},
                    {text:'苗族',checked:false,status:'mingzu'},
                    {text:'彝族',checked:false,status:'mingzu'},
                    {text:'壮族',checked:false,status:'mingzu'},
                    {text:'布依族',checked:false,status:'mingzu'},
                    {text:'朝鲜族',checked:false,status:'mingzu'},
                    {text:'满族',checked:false,status:'mingzu'},
                    {text:'侗族',checked:false,status:'mingzu'},
                    {text:'瑶族',checked:false,status:'mingzu'},
                    {text:'白族',checked:false,status:'mingzu'},
                    {text:'土家族',checked:false,status:'mingzu'},
                    {text:'哈萨克族',checked:false,status:'mingzu'},
                    {text:'傣族',checked:false,status:'mingzu'},
                    {text:'黎族',checked:false,status:'mingzu'},
                    {text:'傈僳族',checked:false,status:'mingzu'},
                    {text:'高山族',checked:false,status:'mingzu'},
                    {text:'畲族',checked:false,status:'mingzu'},
                    {text:'拉祜族',checked:false,status:'mingzu'},
                    {text:'水族',checked:false,status:'mingzu'},
                    {text:'纳西族',checked:false,status:'mingzu'},
                    {text:'景颇族',checked:false,status:'mingzu'},
                    {text:'柯尔克孜族',checked:false,status:'mingzu'},
                    {text:'土族',checked:false,status:'mingzu'},
                    {text:'达斡尔族',checked:false,status:'mingzu'},
                    {text:'仫佬族',checked:false,status:'mingzu'},
                    {text:'羌族',checked:false,status:'mingzu'},
                    {text:'布朗族',checked:false,status:'mingzu'},
                    {text:'撒拉族',checked:false,status:'mingzu'},
                    {text:'毛南族',checked:false,status:'mingzu'},
                    {text:'仡佬族',checked:false,status:'mingzu'},
                    {text:'锡伯族',checked:false,status:'mingzu'},
                    {text:'阿昌族',checked:false,status:'mingzu'},
                    {text:'普米族',checked:false,status:'mingzu'},
                    {text:'塔吉克族',checked:false,status:'mingzu'},
                    {text:'怒族',checked:false,status:'mingzu'},
                    {text:'乌孜别克族',checked:false,status:'mingzu'},
                    {text:'鄂温克族',checked:false,status:'mingzu'},
                    {text:'德昂族',checked:false,status:'mingzu'},
                    {text:'保安族',checked:false,status:'mingzu'},
                    {text:'裕固族',checked:false,status:'mingzu'},
                    {text:'京族',checked:false,status:'mingzu'},
                    {text:'塔塔尔族',checked:false,status:'mingzu'},
                    {text:'独龙族',checked:false,status:'mingzu'},
                    {text:'鄂伦春族',checked:false,status:'mingzu'},
                    {text:'赫哲族',checked:false,status:'mingzu'},
                    {text:'门巴族',checked:false,status:'mingzu'},
                    {text:'珞巴族',checked:false,status:'mingzu'},
                    {text:'基诺族',checked:false,status:'mingzu'},
                    {text:'穿青人',checked:false,status:'mingzu'},
                    {text:'外国血统',checked:false,status:'mingzu'}

                ],
                is_hunban: false,
                hunban_one_name: "", //混班标题1
                hunban_two_name: "", //混班标题2
                hunban_three_name: "", //混班标题3
                hunban_one_val:'请选择',
                hunban_two_val:'请选择',
                hunban_three_val:'请选择',
                hunban_label_one: [],
                hunban_label_two: [],
                hunban_label_three: [],
                 labeList:[],//下级学院
                labeListTwo:[],//第二段下级
                labeOne:[],
                labeOneIndex:0,
                labeOneVal:'请选择',
                labeTwo:[],
                labeTwoIndex:0,
                labeTwoVal:'请选择',
                labeThree:[],
                labeThreeIndex:0,
                labeThreeVal:'请选择',
                labeFour:[],
                labeFourIndex:0,
                labeFourVal:'请选择',
          
                label_one:'',//等级名称
                label_two:'',
                label_three:'',
                label_four:'',
             }
         },
         watch: {
             userInfo(val){
                 this.fuValue();
                  this.schoolName();
                 if(val.avatar_file == ''){
                        this.defaultAvator = eeui.getCaches('headimgurl',null)
                    }else{
                        this.defaultAvator = val.avatar_file;
                    };
                  if(val.type == 1){
                        this.identityVal = '学生'
                        this.identity[0].checked = true;
                        this.identity[1].checked = false;
                    }else{
                        this.identityVal = '教师'
                        this.identity[1].checked = true;
                        this.identity[0].checked = false;
                    }
                    if(val.sex == 1){
                        this.sexValue = '男';
                        this.sexIndex = 0;
                    }else{
                        this.sexValue = '女';
                        this.sexIndex = 1;
                    }
                 //从缓存中获取学校列表
                var self = this;
                var enterYNew = eeui.getCaches('enterYear', null);
                    enterYNew.map(val => {
                        var obj = {text:val};
                        self.$set(obj, 'checked', false);
                        self.$set(obj, 'status', 'enterY');
                        self.enterYearList.push(obj);
                    })
                for(var i = 0;i<self.enterYearList.length;i++){
                    if(val.year == self.enterYearList[i].text){
                        self.enterYearList[i].checked = true;
                        return false;
                    }
                    
                }
               
             },
           value(val){   
                if(val == ''){
                    this.newSchoolList = [];
                }else{
                    this.search(this.schoolList);
                }    
                
            }, 
            //职务
            zhiwu(val){
                this.zwValue = [];
                if(val.show_position == 1){
                    this.zwShow = true;
                    this.zhiwu.positions.map((el)=>{
                    this.zwValue.push({
                        text: el.position_name,
                        id: el.id,
                        checked: false,
                        status: "zhiwu"
                    })
                    })
                    this.zwValue.push({ text: "无", checked: false, status: "zhiwu" });
                }


                this.zwValue.map(el2=>{
                    if(this.editUserInfo.class_position == el2.id){
                        el2.checked = true;
                    }
                })

               
            },
           
            
           

           
         },
         methods: {
             
             enterVale(index){
               this.searchShow = false;
               this.zwShow = false;
               this.zwValue = [];
               this.zhiwu_val = '请选择职务'
               this.editUserInfo.class_position = 0;
               this.danwei = this.newSchoolList[index].school_name;
               this.editUserInfo.school_id = this.newSchoolList[index].school_id;
               this.editUserInfo.school_label_one = 0;
               this.editUserInfo.school_label_two = 0;
               this.editUserInfo.school_label_three = 0;
               this.editUserInfo.school_label_four = 0;
               this.editUserInfo.school_hunban_label_one = 0;
                this.editUserInfo.school_hunban_label_two = 0;
                this.editUserInfo.school_hunban_label_three = 0;
               
               

           
               this.label_one = this.newSchoolList[index].label_one;
               this.label_two = this.newSchoolList[index].label_two;
               this.label_three = this.newSchoolList[index].label_three;
               this.label_four = this.newSchoolList[index].label_four;
               this.hunban_one_name = this.newSchoolList[index].hunban_label_three;
                this.hunban_two_name = this.newSchoolList[index].hunban_label_four;
                this.hunban_three_name = this.newSchoolList[index].hunban_label_five;
               this.labeOne = [];
               this.labeOneVal = '请选择';
               this.labeTwo = [];
               this.labeThree = [];
               this.labeFour = [];
               this.labeTwoVal = '请选择';
               this.school_hunban_label_one = []
               this.hunban_label_twoVal = '请选择';
               this.hunban_label_threeVal = '请选择';
              this.hunban_label_one = [];
              this.hunban_label_two = [];
              this.hunban_label_three = [];
                this.getOrganization(this.editUserInfo.school_id);
            
               
           },
             search(obj){
                var self = this;
                this.newSchoolList = [];
                //console.log(obj[0]);
                for (const key in obj) {
                        if (obj[key].school_name.indexOf(self.value) > -1) {
                            self.newSchoolList.push(obj[key]);
                        }
                    }

                   
            },
             wxcSearchbarInputOnInput (e) {
                this.value = e.value;
            },
             backIconFUn(){
                 this.searchShow = false;
             },
             popupOverlayBottomClick(){
                 this.searchShow = false;
             },
             openBottomPopup () {
                this.searchShow = true;
            },
             //选择性别
             selSel(index){
                 this.sexIndex = index;
                 this.editUserInfo.sex = this.sexList[index].type;
             },
             //选择值
             selRadioDialog(index,status){
                 this.danDiaogVal.show = false;
                 if(index != null){
                  
                     //学生
                     if(status == 'ident'){
                         this.identityVal = this.identity[index].text;
                         this.editUserInfo.type = this.identity[index].type;

                         if(this.editUserInfo.type == 2){
                             this.editUserInfo.stu_type = 0;
                         }else{
                             this.editUserInfo.stu_type = 1;
                         }
                     }
                     //学生类型
                     if(status == 'stuType'){
                         this.stu_val = this.stu_type[index].text;
                         this.editUserInfo.stu_type = this.stu_type[index].type;
                     }
                     //入学年
                     if(status == 'enterY'){
                         this.enterYearVal = this.enterYearList[index].text;
                         this.editUserInfo.year = this.enterYearList[index].text;
                     }
                     //labelone 
                
                     if(status == 'labeOne'){
                        
                         this.labeOneVal = this.labeOne[index].text;
                        this.editUserInfo.school_label_one = this.labeOne[index].id;
                        this.editUserInfo.school_label_two = 0;
                        this.editUserInfo.school_label_three = 0;
                        this.editUserInfo.school_label_four = 0;
                        
                       
                        
                        if(this.labeOne[index].text == '无'){
                             this.getOrganization(this.editUserInfo.school_id,this.labeOne[index].id,'无');
                            this.editUserInfo.school_label_one = 0;
                            this.labeOneVal = '请选择';
                             this.labeTwoVal = '请选择';
                             this.labeThreeVal = '请选择';
                          
                        }else{
                             this.getOrganization(this.editUserInfo.school_id,this.labeOne[index].id);
                        }

                        
                         
                      
                     }
                     //label_two
                     if(status == 'labeTwo'){
                         
                         this.labeTwoVal = this.labeTwo[index].text;
                         this.editUserInfo.school_label_two = this.labeTwo[index].id;
                         this.editUserInfo.school_label_three = 0;
                        this.editUserInfo.school_label_four = 0;
                        this.getOrganization2(this.editUserInfo.school_label_two);
                        if(this.labeTwo[index].text == '无'){
                            this.editUserInfo.school_label_two = 0;
                            this.labeTwoVal = '请选择';
                            this.labeThree = [];
                        }
                       
                         //this.userInfoT.school_label_two = this.labeTwo[index].id;
                     }
                     //label_three
                     if(status == 'labeThree'){
                     
                         this.labeThreeVal = this.labeThree[index].text;
                         this.editUserInfo.school_label_three = this.labeThree[index].id;
                          this.editUserInfo.school_label_four = 0;
                          
                          if(this.labeThree[index].text == '无'){
                              this.getOrganization2(this.editUserInfo.school_label_two,this.labeThree[index].id,1,'无');
                            this.editUserInfo.school_label_three = 0;
                            
                            this.labeThreeVal = '请选择';
                            this.labeFourVal = '请选择';
                            
                        }else{
                            this.getOrganization2(this.editUserInfo.school_label_two,this.labeThree[index].id,1);
                        }
                      
                     }
                     //label_four
                     if(status == 'labeFour'){
                         this.labeFourVal = this.labeFour[index].text;
                         this.editUserInfo.school_label_four = this.labeFour[index].id;
                         if(this.labeFour[index].text == '无'){
                            this.editUserInfo.school_label_four = 0;
                            this.labeFourVal = '请选择';
                            
                        }
                         //this.userInfoT.school_label_four = this.labeFour[index].id;
                     }
                     //名族
                     if(status == 'mingzu'){
                         this.mingzuValue = this.mingzu[index].text;
                         this.editUserInfo.mingzu = this.mingzu[index].text;
                     }
                     //混班1
                        if(status == 'hunbanTwo'){
                            
                            this.hunban_two_val = this.hunban_label_two[index].text;
                            this.editUserInfo.school_hunban_label_two = this.hunban_label_two[index].id;
                            this.editUserInfo.school_hunban_label_one = this.hunban_label_one[0].id;
                            this.editUserInfo.school_hunban_label_three = 0;
                            this.hunban_label_three = []
                            this.hunban_three_val = '请选择'
                            if(this.hunban_label_two[index].text == '无'){
                                this.editUserInfo.school_hunban_label_two = 0;
                                
                                this.hunban_two_val = '请选择'
                                

                            }
                            this.hunban_three_val = '请选择'
                            this.getOrganization2(this.hunban_label_two[index].id,'label',2);
                        }
                        //混班2
                        if(status == 'hunbanThree'){
                            this.hunban_three_val = this.hunban_label_three[index].text;
                            this.editUserInfo.school_hunban_label_three = this.hunban_label_three[index].id;
                            if(this.hunban_label_three[index].text == '无'){
                                this.editUserInfo.school_hunban_label_three = 0;
                                this.hunban_three_val = '请选择'
                            }

                        }

                        //职务
                        if(status == 'zhiwu'){
                            this.zhiwu_val = this.zwValue[index].text;
                            this.editUserInfo.class_position = this.zwValue[index].id;
                            if(this.zwValue[index].text == '无'){
                                this.editUserInfo.class_position = 0;
                                this.zhiwu_val = '请选择职务'
                            }

                        }
                    
                 }
             },
             //单选框选择值
             selRadioShow(val){
                 //判断框的值和顶部距离
                if(val.length*80 >= 900){
                    this.danDiaogVal.top = 100;
                    this.danDiaogVal.heightval = 900;
                }else{
                    this.danDiaogVal.heightval = val.length*80;
                    this.danDiaogVal.top = 300;
                }
                this.danDiaogVal.show = true;
                this.danDiaogVal.itemList = val
             },
            //更改用户名
            setuserName(){
                this.fromShowList.userShow = true;
            },
            blurInputUserName(){
                this.fromShowList.userShow = false;
            },
            //更改姓名
            setName(){
                this.fromShowList.name = true;
            },
            
            blurInputName(){
                this.fromShowList.name = false;
            },
            //更改号码
            setIphone(){
                this.fromShowList.iphone = true;
            },
            blurInputIphone(){
                this.fromShowList.iphone = false;
            },
            //更改邮箱
            setIEamil(){
                this.fromShowList.email = true;
            },
            blurInputEamil(){
                this.fromShowList.email = false;
            },
            //更改学号
            setStudentId(){
                this.fromShowList.studentId = true;
            },
            //更改工号
            setTecherId(){
                this.fromShowList.teacherId = true;
            },
            blurInputsetStudentId(){
                this.fromShowList.studentId = false;
            },
            //更改身份证
            setcard(){
                this.fromShowList.ident = true;
            },
            blurInputcard(){
                this.fromShowList.ident = false;
            },
            //更改地址
            setaddress(){
                this.fromShowList.address = true;
            },
            blurInputaddress(){
                this.fromShowList.address = false;
            },
            wxcCellClickedpiture (e) {
                var self = this;
                picture.create({
                    gallery: 1,
                    mode:1,
                    maxNum:1,
                    crop:true,
                    compress:true,
                    circle:true,
                    freeCrop:true,
                    quality:50
                }, function(result) {
                    //......
                    if(result.status == 'success'){
                        if(result.lists[0].compressed){
                            //console.log(weex.config.env.platform);
                            if(weex.config.env.platform == 'iOS'){
                                self.upLoadImg(result.lists[0].compressPath);
                            }else{
                                self.uploadImg2(result.lists[0].compressPath);
                            }
                          
                             //self.upLoadImg(result.lists[0].compressPath)
                            //self.uploadImg2(result.lists[0].compressPath)
                            //console.log(result.lists[0].compressPath);
                        }
                    }
                });
            },
            upLoadImg(file){
                network.upload({
                    url:API.baseUrl + API.upload,
                    path: file,
                    method:'POST',
                    formData: {
                        framework: 'weex/nat'
                    },
                    headers: {
                        //'x-app': 'nat/0.0.8',
                        'Content-Type': 'multipart/form-data'
                    }
                }, (ret) => {
                    console.log(ret)
                })
            },
            uploadImg2(file){
                var self = this;
                eeui.ajax({
                    url: API.baseUrl + API.upload,
                    method: 'POST',                  
                    files: {
                        userimg: file
                    }
                }, function(res) {
                    //......
                    //console.log(res);
                    if(res.status == 'success'){
                        self.defaultAvator = res.result.url
                        self.editUserInfo.avatar_file = res.result.url
                    }
                });
            },
            wxcCellClicked (e) {
                
            },
            onrefresh (event) {
              
                this.refreshing = true
                setTimeout(() => {
                this.refreshing = false
                }, 0)
            },
           
            loginpage(){
                eeui.openPage({
                    url: '../loginPage/loginpage.js',
                    statusBarColor:'#1eb76e',
                    animated:false
                }, function(result) {
                    //......
                }); 
            },
            back(){
               eeui.openPage({
                    url: 'userInfoPage.js',
                    animated:false,
                    params:{curindex:2}
                }, function(result) {
                    //......
                });  
            },
            setOrganization(schoolId,labeOne){
                
                this.labeTwo = [];
                this.labeThree = [];
                this.labeFour = [];
                this.labeFourVal = '请选择'
                this.labeTwoVal = '请选择'
                this.labeThreeVal = '请选择'
                this.is_hunban = false;
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        if(res.data.organizations instanceof Array && res.data.organizations.length > 0){
                            for (let val of res.data.organizations) {
                                if(val.p_id == 0 && val.is_hunban == 0){
                                        if(labeOne == val.id){
                                            for (let val2 of val.children) {
                                                self.labeTwo.push({text:val2.label_name,id:val2.id,checked:false,status:'labeTwo'}); 
                                            }
                                            
                                        }else{
                                            self.labeOne.push({text:val.label_name,id:val.id,checked:false,status:'labeOne'});
                                            
                                        }
                                    // if(labeTwo){
                                    //     if(labeTwo == val.id){
                                             
                                    //         for (let val2 of val.children) {
                                                
                                    //             self.labeTwo.push({text:val2.label_name,id:val2.id,checked:false,status:'labeTwo'});
                                                
                                    //         }
                                            
                                    //     }
                                    // }else{
                                    //     
                                        
                                        
                                        
                                    // }

                                        
                                        

                                }else{
                                    //对混班的处理
                                     self.hunban_label_two = [];
                                     self.hunban_label_one = [];
                                     self.hunban_two_val = '请选择'
                                    self.editUserInfo.hunban_label_one = 0;
                                    self.editUserInfo.hunban_label_two = 0;
                                    self.is_hunban = true;
                                   self.hunban_label_one.push({
                                        text: val.label_name,
                                        id: val.id,
                                        checked: false,
                                        status: "hunbanOne"
                                    });

                                    if (val.children) {
                                        val.children.map(hunbanVal => {
                                            self.hunban_label_two.push({
                                            text: hunbanVal.label_name,
                                            id: hunbanVal.id,
                                            checked: false,
                                            status: "hunbanTwo"
                                            });
                                        });
                                        self.hunban_label_two.push({ text: "无", checked: false, status: "hunbanTwo" });
                                    }

                                    // return;

                                }

                                
                                
                            }
                            

                        }
                        
                    }
                })
            },
            setOrganization2(schoolId,labeThree){

       
                this.labeFour = [];
                this.labeFourVal = '请选择'
                
                 
                       
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations_class/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        if(res.data instanceof Array){
                            for (let val of res.data) {  
                                if(labeThree){
                                      if(labeThree == val.id){
                                            for (let val2 of val.children) {
                                                self.labeFour.push({text:val2.label_name,id:val2.id,checked:false,status:'labeFour'});
                                                
                                            }

                                          
                                        }
                                }else{
                                    self.labeThree = [];
                                    self.labeThreeVal = '请选择'
                                    self.labeThree.push({text:val.label_name,id:val.id,checked:false,status:'labeThree'});
                                }    
                                
                               
                                
                            }

                        }
                        
                        
                        
                    }
                    
                })
            },
            
            //获取组织架构1
            getOrganization(schoolId,label,wu){
                
                
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    
                    
                    if(res.status == 200){
                        //职务的获取
                        if(res.data.positions){
                            self.zhiwu = res.data.positions;

                            res.data.positions.positions.map((val)=>{
                                if(self.editUserInfo.class_position == val.id){
                                    self.zhiwu_val = val.position_name;
                                    

                                }
                            })
                        }

                       
                        self.labeOne = [];
                        self.labeTwo = [];
                        self.labeThree = [];
                        self.labeFour = [];
                        if(res.data.organizations instanceof Array && res.data.organizations.length > 0){
                            for (let i=0; i<res.data.organizations.length; i++) {
                                let val = res.data.organizations[i];
                                
                               
                                if(val.p_id == 0 && val.is_hunban == 0){
                                    
                                     self.labeOne.push({text:val.label_name,id:val.id,checked:false,status:'labeOne'});
                                     if(self.editUserInfo.school_label_one == val.id){
                                         for (const oneval of self.labeOne) {
                                                if(self.editUserInfo.school_label_one == oneval.id){
                                                    oneval.checked = true;
                                                }
                                                
                                            }
                                     }
                                     

                                    if(label == '' || label == undefined){
                                        if(self.editUserInfo.school_label_one == val.id){
                                           
                                            self.labeOneVal = val.label_name;
                                            for (const oneval of self.labeOne) {
                                                if(self.editUserInfo.school_label_one == oneval.id){
                                                    oneval.checked = true;
                                                }
                                            }
                                           
                                            for (let val2 of val.children) {
                                                
                                                self.labeTwo.push({text:val2.label_name,id:val2.id,checked:false,status:'labeTwo'});
                                                if(self.editUserInfo.school_label_two == val2.id){
                                                    for (const twoval of self.labeTwo) {
                                                        if(self.editUserInfo.school_label_two == twoval.id){
                                                            twoval.checked = true;
                                                        }
                                                    }
                                                    self.labeTwoVal = val2.label_name;
                                                    self.getOrganization2(val2.id);
                                                    
                                                }
                                            }
                                            self.labeTwo.push({ text: "无", checked: false, status: "labeTwo" });
                                            
                                        }
                                    }else{
                                        if(label == val.id){
                                            self.labeTwo = [];
                                            self.labeTwoVal = '请选择';
                                            for (let val2 of val.children) {
                                                
                                                self.labeTwo.push({text:val2.label_name,id:val2.id,checked:false,status:'labeTwo'});
                                                if(self.editUserInfo.school_label_two == val2.id){
                                                    for (const twoval of self.labeTwo) {
                                                        if(self.editUserInfo.school_label_two == twoval.id){
                                                            twoval.checked = true;
                                                        }
                                                    }
                                                   
                                                    
                                                }
                                            }

                                            self.labeTwo.push({ text: "无", checked: false, status: "labeTwo" });
                                          
                                            
                                        }
                                    }
                                       
                                        

                                        

                                }else{
                                    //对混班的处理
                                    self.is_hunban = true;
                                     self.hunban_label_one = [];
                                     self.hunban_label_two = [];
                                     
                                     self.hunban_two_val = '请选择'
                                     self.hunban_three_val = '请选择'
                                    self.hunban_label_one.push({
                                        text: val.label_name,
                                        id: val.id,
                                        checked: false,
                                        status: "hunbanOne"
                                    });
                                    if (val.children) {
                                        val.children.map(hunbanVal => {

                                            if(self.editUserInfo.school_hunban_label_two == hunbanVal.id){
                                                
                                                self.hunban_two_val = hunbanVal.label_name;
                                                self.getOrganization2(self.editUserInfo.school_hunban_label_two,'',2);
                                            }
                                            self.hunban_label_two.push({
                                                text: hunbanVal.label_name,
                                                id: hunbanVal.id,
                                                checked: false,
                                                status: "hunbanTwo"
                                            });

                                            for (const hunban_label_twoVal of self.hunban_label_two) {
                                                if(self.editUserInfo.school_hunban_label_two == hunban_label_twoVal.id){
                                                    hunban_label_twoVal.checked = true;
                                                }
                                            }

                                        });
                                        self.hunban_label_two.push({ text: "无", checked: false, status: "hunbanTwo" });
                                    }
                                   

                                }

                                
                                
                            }
                        }

                        if( wu == '无'){
                            self.labeOne.push({ text: "无", checked: true, status: "labeOne" });
                        }else{
                            self.labeOne.push({ text: "无", checked: false, status: "labeOne" });
                        }
                          
                        
                    }
                    
                })
            },
            //获取组织架构2
            getOrganization2(schoolId,label,type,wu){
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:'http://ueditor-upload.oss-cn-beijing.aliyuncs.com/data/school/organizations_class/' + schoolId + '.json',
                    type:'json',  
                },function (res) { 
                    if(res.status == 200){
                        
                        self.hunban_label_three = [];

                       
                        if(type == 2){
                            //console.log(res.data);
                            res.data.map((val)=>{

                           
                            if(self.editUserInfo.school_hunban_label_three == val.id){
                                self.hunban_three_val = val.label_name;
                            }
                            self.hunban_label_three.push({
                                text: val.label_name,
                                id: val.id,
                                hunban_name:val.hunban_name,
                                hunban_teacher:val.hunban_teacher,
                                checked: false,
                                status: "hunbanThree"
                            });

                            for (const hunban_label_threeVal of self.hunban_label_three) {
                                if(self.editUserInfo.school_hunban_label_three == hunban_label_threeVal.id){
                                    hunban_label_threeVal.checked = true;
                                }
                            }
                            
                            
                        })
                        self.hunban_label_three.push({ text: "无", checked: false, status: "hunbanThree" });

                        }else{

                            self.labeFourVal = '请选择'
                            if(res.data instanceof Array){
                            self.labeThree = [];
                            self.labeFour = [];
                            if(label == '' || label == undefined){
                                
                                self.labeThreeVal = '请选择';
                                for (let val of res.data) {         
                                    self.labeThree.push({text:val.label_name,id:val.id,checked:false,status:'labeThree'});


                                    if(self.editUserInfo.school_label_three == val.id){
                                        for (const threeval of self.labeThree) {
                                            if(self.editUserInfo.school_label_three == threeval.id){
                                                threeval.checked = true;
                                            }
                                        }
                                        //console.log(val.label_name);
                                        self.labeThreeVal = val.label_name;
                                        for (let val2 of val.children) {
                                            self.labeFour.push({text:val2.label_name,id:val2.id,checked:false,status:'labeFour'});
                                            if(self.editUserInfo.school_label_four == val2.id){
                                                for (const fourval of self.labeFour) {
                                                    if(self.editUserInfo.school_label_four == fourval.id){
                                                        fourval.checked = true;
                                                    }
                                                }
                                                self.labeFourVal = val2.label_name;
                                                
                                            }
                                        }
                                        self.labeFour.push({ text: "无", checked: false, status: "labeFour" });
                                    
                                    }
                                    
                                }
                               if(wu == '无'){
                                    self.labeThree.push({ text: "无", checked: true, status: "labeThree" });
                                }else{
                                    self.labeThree.push({ text: "无", checked: false, status: "labeThree" });
                                }

                            }else{
                       
                               
                                for (let val of res.data) {         
                                    self.labeThree.push({text:val.label_name,id:val.id,checked:false,status:'labeThree'});


                                    if(label == val.id){
                                        for (const threeval of self.labeThree) {
                                            if(self.editUserInfo.school_label_three == threeval.id){
                                                threeval.checked = true;
                                            }
                                        }
                                        
                                
                                        for (let val2 of val.children) {
                                            self.labeFour.push({text:val2.label_name,id:val2.id,checked:false,status:'labeFour'});
                                             
                                            
                                        }
                                        self.labeFour.push({ text: "无", checked: false, status: "labeFour" });
                                    
                                    }
                                    
                                }

                                
                                    self.labeThree.push({ text: "无", checked: false, status: "labeThree" });
                               
                                
                            }
                            

                        }

                        }
                        
                        
                        
                        
                    }
                    
                })
            },
            schoolName(){
                //付值学校id
                if(this.schoolList.length > 0){
                    for(let v = 0;v<this.schoolList.length;v++){
                        if(this.userInfo.school_id == this.schoolList[v].school_id){
                            this.danwei = this.schoolList[v].school_name;
                            this.label_one = this.schoolList[v].label_one;
                            this.label_two = this.schoolList[v].label_two;
                            this.label_three = this.schoolList[v].label_three;
                            this.label_four = this.schoolList[v].label_four;
                            this.hunban_one_name = this.schoolList[v].hunban_label_three;
                            this.hunban_two_name = this.schoolList[v].hunban_label_four;
                            this.hunban_three_name = this.schoolList[v].hunban_label_five;
                            //console.log(this.schoolList[v]);
                            // for(let i = 0;i<this.schoolList[v].children.length;i++){
                            //     if(this.username){}
                            // }
                            return;

                        }
                    }  
                }
                
            },
            fuValue(){
                //赋值
                    this.editUserInfo.username = this.userInfo.user_name;
                    this.editUserInfo.mobile = this.userInfo.mobile;
                    this.editUserInfo.name = this.userInfo.name;
                    this.editUserInfo.email =this.userInfo.email;
                    this.editUserInfo.sex = this.userInfo.sex;
                    this.editUserInfo.type = this.userInfo.type;
                    this.editUserInfo.class_position = this.userInfo.class_position;
                    this.editUserInfo.year = this.userInfo.year;
                    this.editUserInfo.school_id = this.userInfo.school_id;
                    this.editUserInfo.student_id = this.userInfo.student_id;
                    this.editUserInfo.school_label_one = this.userInfo.school_label_one;
                    this.editUserInfo.school_label_two = this.userInfo.school_label_two;
                    this.editUserInfo.school_label_three = this.userInfo.school_label_three;
                    this.editUserInfo.school_label_four = this.userInfo.school_label_four;
                    this.editUserInfo.school_hunban_label_one = this.userInfo.school_hunban_label_one;
                    this.editUserInfo.school_hunban_label_two = this.userInfo.school_hunban_label_two;
                    this.editUserInfo.school_hunban_label_three = this.userInfo.school_hunban_label_three;
                    this.editUserInfo.mingzu = this.userInfo.mingzu;
                    this.editUserInfo.card_id = this.userInfo.card_id;
                    this.editUserInfo.address = this.userInfo.address;
                    this.editUserInfo.avatar_file = this.userInfo.avatar_file;
            },


            //请求用户信息

           getUserInfo(){
              stream.fetch({
                  url:API.baseUrl + API.getUserInfo,
                  method:'GET',
                  type:'json',
                  headers:{
                     Authorization:eeui.getCaches('token', null).token
                  }

              },(res)=>{
                  if(res.status == 200){
                      this.userInfo = res.data;
                      //console.log(res);
                  }else{
                        
                    }
                  //console.log(res);
              })
          },
            rechargeSubmit(){

                    // this.$refs.blur1.blur();
                    
                    
                    
                    
                    // if(this.identityVal == '学生'){
                    //     this.$refs.blur3.blur();
                    //     this.$refs.blur4.blur();
                    //     this.$refs.blur5.blur();
                    // }else{
                    // this.$refs.blur2.blur();
                    // }
                   
                     if(this.editUserInfo.type == 2){
                             this.editUserInfo.stu_type = 0;
                         }
                          //console.log(this.editUserInfo);
                    if (this.editUserInfo.name == "") {
                        eeui.toast({
                        message: "姓名不能为空",
                        gravity: "top"
                        });
                        return;
                    }
                    var myreg = /^(((13[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(15[0-3]{1})|(15[4-9]{1})|(18[0-9]{1})|(199))+\d{8})$/;
                    if (this.editUserInfo.mobile == "") {
                        eeui.toast({
                        message: "手机号不能为空",
                        gravity: "top"
                        });
                        return;
                    } else if (this.editUserInfo.mobile.length != 11) {
                        eeui.toast({
                        message: "请输入11位手机号码！",
                        gravity: "top"
                        });
                        return;
                    } else if (!myreg.test(this.editUserInfo.mobile)) {
                        eeui.toast({
                        message: "请输入有效的手机号码！",
                        gravity: "top"
                        });
                        return;
                    }
                  
                    if (this.editUserInfo.year == "" && this.editUserInfo.type == 1) {
                        eeui.toast({
                        message: "入学年不能为空",
                        gravity: "top"
                        });
                        return;
                    }
                    if (this.editUserInfo.school_id == "") {
                        eeui.toast({
                        message: "单位不能为空",
                        gravity: "top"
                        });
                        return;
                    }

                    // if (this.editUserInfo.card_id == "" && this.editUserInfo.type == 1) {
                    //     eeui.toast({
                    //     message: "身份证不能为空",
                    //     gravity: "top"
                    //     });
                    //     return;
                    // }
                    // if (this.editUserInfo.address == "" && this.editUserInfo.type == 1) {
                    //     eeui.toast({
                    //     message: "地址不能为空",
                    //     gravity: "top"
                    //     });
                    //     return;
                    // }
                   
                    var self = this;
                    stream.fetch({
                        method:'POST',
                        url:API.baseUrl + API.editinfo,
                        type:'json',
                        body:JSON.stringify(self.editUserInfo),
                        headers:{
                            'Content-Type': 'application/json',
                            Authorization:eeui.getCaches('token', null).token
                        }
                    },res=>{
                        
                        if(res.status== 200){
                            
                            // eeui.toast({
                            //     message:'修改成功',
                            //     gravity:'top'
                                
                            // });
                            eeui.openPage({
                                pageName: 'home',
                                pageType: 'app',
                                url: '../homePages/home.js',
                                params:{position:0}
                            }, function(result) {
                                //......
                            });
                        }else{
                            //console.log(res,'333333');
                           eeui.toast({
                                message:decodeURIComponent(res.headers['x-mzq-message']),
                                gravity:'top'
                                
                                
                            });
                        }
                    })
                    
                          
                




                
            },
            
            
        },
        created () {
            //console.log(eeui.getCaches('token', null).token);
            //this.defaultAvator = app.config.params.avatar;
            this.getUserInfo();
           
            //this.getOrganization(this.userInfo.school_id);
            this.heightH = weex.config.env.deviceHeight - 250;
            // if(this.userInfo.avatar_file == ''){
            //     this.defaultAvator = '../../assets/images/defaultAvator.jpg'
            // }else{
            //     this.defaultAvator = this.userInfo.avatar_file;
            // };


            // if(this.userInfo.type == 1){
            //     this.identityVal = '学生'
            //     this.identity[0].checked = true;
            //     this.identity[1].checked = false;
            // }else{
            //     this.identityVal = '教师'
            //     this.identity[1].checked = true;
            //     this.identity[0].checked = false;
            // }
            // if(this.userInfo.sex == 1){
            //     this.sexValue = '男';
            //     this.sexIndex = 0;
            // }else{
            //     this.sexValue = '女';
            //     this.sexIndex = 1;
            // }
            

            //从缓存中获取学校列表
            // var self = this;
            //  var enterYNew = eeui.getCaches('enterYear', null);
            //     enterYNew.map(val => {
            //         var obj = {text:val};
            //         self.$set(obj, 'checked', false);
            //         self.$set(obj, 'status', 'enterY');
            //         self.enterYearList.push(obj);
            //     })
            // for(var i = 0;i<self.enterYearList.length;i++){
            //     if(self.userInfo.year == self.enterYearList[i].text){
            //         self.enterYearList[i].checked = true;
            //         return false;
            //     }
                
            // }

            



            
            



            
        }, 
        mounted () {
            
            //this.fuValue();
            //第二级
            //this.schoolName();
             //console.log(this.userInfo);

            // console.log(eeui.getCaches('token', null).token);
      
            
            


            

            

           

           
        }
     }
</script>
<style scoped>
.leftText{
    padding-left: 0px;
    font-size: 30px;
    color: #333;
}
.itemS{
        height: 80px;
        border-bottom-color: #e5e5e5;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        line-height: 80px;
        font-size: 26px;
        padding-left: 30px;
    }
.container{
    background-color:#ebebeb;
    
    /* margin-bottom:200px; */
}
.popurBackBtn{
    margin-left: 30px;
    color: #fff;
    font-size: 30px;
    width: 80px;
    height: 100px;
    line-height: 100px;
}
.mastTip{
    position: absolute;
    left: 200px;
    top: 38px;
    color: red;
    font-size: 24px;
}
.sexSelBox{
    flex-direction: row;
    margin-right: 30px;
}
.nan{
    flex-direction: row;
    align-items: center;
    margin-left: 30px;
}
.point{
    width: 30px;
    height: 30px;
    border-radius: 30px;
    background-color: #1eb76e;
}
.selBtn{
    width: 40px;
    height: 40px;
    border-style: solid;
    border-width: 1px;
    border-color: #999;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.sextext{
    font-size: 30px;
}
.cellItem{
    flex-direction: row;
    justify-content: space-between;
    background-color: #fff;
    height: 100px;
    align-items: center;
    border-bottom-color: #e3e3e3;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    padding-left: 25px;
   
}
.rightInput{
    width: 500;
    height: 90;
    font-size: 30px;
    text-align: right;
    padding-right: 55px;

}
.cellMargin{
    margin-bottom: 25px;
}
.cell_list_box{
    height:auto;
    margin-bottom: 50px;
}
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
.righttext2{
    font-size:30px;
    color:#333;
    margin-right: 10px;
}
.grey{
    color: #999;
}
.avator{
    border-radius:100;
    margin-right:10;
}
.backIcon{
    width: 100px;
    height: 100px;
    color: #ffffff;
}
.button{
    width: 690px;
    height: 80px;
    margin-left: 30;
    margin-bottom: 50px;
}
</style>