<template>
    <div class="app">
         <navbar class="navbarb">
            <navbar-item type="left">
                <text class="navtext">我的课程</text>
            </navbar-item>
            <navbar-item type="right">
                <button v-if="userInfo.type == 2" class="navbutton" :eeui="{text:'创建',backgroundColor:'#2fdc7e'}"  @click="popurshowaction"></button>
                <button v-if="userInfo.type == 1" class="navbutton" :eeui="{text:'加入',backgroundColor:'#2fdc7e'}" @click="addclasShow"></button>
            </navbar-item>
        </navbar>

        <!-- 创建弹框 -->
        <wxc-popover ref="wxc-popover"
                 :buttons="btns"
                 :position="popoverPosition"
                 :arrowPosition="popoverArrowPosition"
                 @wxcPopoverButtonClicked="openMask"></wxc-popover>
        <!-- 课程设置 -->
       
        
        
            
         
             <scroll-view class="homeBox">
         
                   <!-- 老师课程班级 -->
                <div class="ListBox"  v-for="(item,index) in lists" :key="index">
             
                    <div class="listItem">
                        <div class="listTitle" ref="headTit">
                            <div class="listinerTit" @click="titAnimate(index)">
                                <icon class="innerIocn" :class="[deindex == index ? 'innerIocncur' : '']" :eeui="{content:'md-today',fontSize:38}"></icon>
                                <text class="hTit" :class="[deindex == index ? 'hTitcur' : '']">{{item.course_name}}</text>
                                <icon class="zedieIcon" :eeui="{content:deindex == index ? 'ios-arrow-down':IconContent,fontSize:38}"></icon>
                            </div>
                            
                        </div>
                        <div class="contbox" v-if="deindex == index">
                            <div class="innerimgbox">
                                <image class="innerimg" :src="item.course_cover | filterImg" style="width:650px;height:360px"></image>
                                <div class="greyBg">
                                
                                    <!-- <text class="gtext" >{{item.course_id}}</text> -->
                                    <text class="gtext">{{item.teacher_name}}</text>
                                </div>
                                <!-- <text class="zixun">资讯</text> -->
                                <text class="seticon" @click="dropwrapshow(item)">&#xe683;</text>
                                <!-- <text class="seticon2">&#xe68d;</text> -->
                                <div class="dropwrap" v-if="item.dropShow">
                                    <text class="dropitem" @click="SetCourseClass(item)">课程班级</text>
                                    <text class="dropitem" @click="courseFileOver(item.course_id)">归档课程</text>
                                  
                                </div>

                            </div>
                            <div class="contbox2" v-for="(child,v) in item.classes" :key= "v" >
                                <!-- v-if="v<item.moreBthnum" -->
                                <div class="cont" >
                                    <div class="contimgbox">
                                 
                                    <image class="contImg" src="https://www.asyke.com/static/img/personicoo.png" style="width:60px;height:60px"></image>
                                    </div>
                                    <div class="banji">
                                        <text class="Bjtext">{{child.course_class_name}}</text>
                                        <text class="Bjtext1">{{child.student_nums?child.student_nums:0}}人</text>
                                    </div>
                                    <div class="contCenter">
                                        <text class="contCenterText" @click="ewmJump(child.course_class_invite,child.course_class_name,child.class_id,child.course_class_id)">{{child.course_class_invite}}</text>
                                    </div>
                                    <icon class="enterIconmore" @click="guidangf(child)" :eeui="{content:'ios-more',fontSize:38}"></icon>
                                    <icon class="enterIcon" @click="enterInnerpage(item.course_name,child.course_class_name,child.course_class_id,item.course_id,userInfo.type)" :eeui="{content:'ios-arrow-dropright-circle',fontSize:38}"></icon>
                                </div>

                                <text class="guidang" v-if="child.guidang" @click="classSetFile(child,v,item)">归档班级</text>

                                
                                
                                
                            </div>
                            <text class="morelistBtn" v-if="item.classes.length>item.moreBthnum" @click="moreBtn(index)">加载更多</text>
                            
                        </div>
                        
                        
                        

                    </div>
            
                </div>
                <!-- 学生班级 -->

                 <div class="ListBox"  v-for="(item,index) in stuList" :key="index">
                    <div class="listItem">
                        <div class="listTitle" ref="headTit">
                            <div class="listinerTit" @click="titAnimate2(index)">
                                <icon class="innerIocn" :class="[deindex2 == index ? 'innerIocncur' : '']" :eeui="{content:'md-today',fontSize:38}"></icon>
                                <text class="hTit" :class="[deindex2 == index ? 'hTitcur' : '']">{{item.course_name}}</text>
                                <text class="yin" v-if="userInfo.type == 2">引</text>
                                <icon class="zedieIcon" :eeui="{content:deindex2 == index ? 'ios-arrow-down':IconContent,fontSize:38}"></icon>
                            </div>
                            
                            
                        </div>
                        <div class="contbox" v-if="deindex2 == index">
                            <div class="innerimgbox">
                                <image class="innerimg" :src="item.course_cover | filterImg" style="width:650px;height:360px"></image>
                                <div class="greyBg">
                                
                                    <!-- <text class="gtext" >{{item.course_id}}</text> -->
                                    <text class="gtext">{{item.teacher_name}}</text>
                                </div>
                                <!-- <text class="zixun">资讯</text> -->
                                

                            </div>
                            <div class="contbox2" v-for="(child,v) in item.classes" :key= "v" >
                                <!-- v-if="v<item.moreBthnum" -->
                                <div class="cont" >
                                    <div class="contimgbox">
                                    <image class="contImg" src="https://www.asyke.com/static/img/personicoo.png" style="width:60px;height:60px"></image>
                                    </div>
                                    <div class="banji">
                                        <text class="Bjtext">{{child.course_class_name}}</text>
                                        <text class="Bjtext1">{{child.student_nums?child.student_nums:0}}人</text>
                                    </div>
                                    <div class="contCenter">
                                        <text class="contCenterText" @click="ewmJump(child.course_class_invite,child.course_class_name,child.class_id,child.course_class_id)">{{child.course_class_invite}}</text>
                                    </div>
                                    <icon class="enterIconmore" @click="guidangf(child)" :eeui="{content:'ios-more',fontSize:38}"></icon>
                                    <icon class="enterIcon" @click="enterInnerpage(item.course_name,child.course_class_name,child.course_class_id,item.course_id,userInfo.type,'student')" :eeui="{content:'ios-arrow-dropright-circle',fontSize:38}"></icon>
                                </div>
<!-- 
                                <text class="guidang" v-if="child.guidang" @click="classSetFile(child,v,item)">归档班级</text> -->
                                <div class="guidangbox"   v-if="child.guidang">
                                    <!-- <text class="guidang2"  @click="classSetFile(child,v,item)">归档班级</text> -->
                                    <text class="guidang2"  @click="courseClassOut(item,child.course_class_id)">退出班级</text>
                                </div>
                                

                                
                                
                                
                            </div>
                            <text class="morelistBtn" v-if="item.classes.length>item.moreBthnum" @click="moreBtn(index)">加载更多</text>
                            
                        </div>
                        
                        
                        

                    </div>
            
                </div>
            </scroll-view>
            
        
         


 

        <!-- mask -->
        <wxc-mask height="800"
                width="660"
                border-radius="6"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="maskshow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content" @click="stopdev">
            <text class="masktitle">添加课程</text>
            <div class="maskcont">
                <div class="maskimgbox">
                    <div class="maskImage" >
                        <image class="maskimg" :src="courseFile" style="width:190;height:114px;"></image>
                        <text class="maskchengtext" @click="pitureuploud">修改</text>
                    </div>
                    <div class="maskinputbox">
                         <input class="maskinput" type="text" placeholder="输入课程名称" v-model="courseClassName">
                         <!-- <div class="maskselriado">
                             <div class="radiobox" v-for="(type,index) in courseType" :key="index" @click="selCourseType(index)">
                                 <div class="radio" >
                                     <div class="point" v-if="index==courseTypeIndex"></div>
                                 </div>
                                 <text class="radiotext">{{type.text}}</text>
                             </div>
                            
                         </div> -->
                    </div>
                   

                </div>
                <div class="maskclassLinebox">
                    <scroller class="maskclassLineScroller">
                        <div class="maskclassLine" v-for="(classitem,index) in courseClassValue" :key="index">
                            <input class="maskeditinput" 
                            autofocus="true" 
                            v-if="courseClassList[index].show" 
                            type="text" :value="classitem" 
                            v-model="courseClassValue[index]"
                            @blur="courseClassList[index].show = false"
                            >
                            <text class="defaultclass" v-if="!courseClassList[index].show">{{classitem}}</text>
                            
                            <div class="twoediticon">
                                <text class="editicon" @click="editClass(index)">&#xe6b0;</text>
                                <text class="delelticon" @click="deletClass(index)">&#xe62c;</text>
                            </div>
                            
                        </div>
                    </scroller>
                    
                </div>

                <div class="commitBtn">
                    <button @click="newAddclass" class="maskbutton"  :eeui="{text:'新增班级',borderRadius:'0',backgroundColor:'#eaeaea',color:'#222222'}"></button>
                    <button class="maskbutton" @click="createClass(courseClassName,courseFile,courseTypeIndex,JSON.stringify(courseClassValue))" :eeui="{text:'确定',borderRadius:'0',backgroundColor:'#2fdc7e',color:'#ffffff'}"></button>
                </div>

            </div>
            
        </div>
        </wxc-mask>
        <!-- 加入班级 -->
        <wxc-mask height="500"
                width="660"
                border-radius="6"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="shaoShow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
        <div class="content" @click="stopdev">
            <div class="shaotitle">
                <text class="addTit">加入班级</text>
                <image @click="addClass"  src="../../assets/images/sao.png" style="width:50px;height:50px;"></image>
            </div>
            <div class="maskcont">
                <div class="saoClassInput">
                    <text class="saoClassTit">请输入班级码</text>
                    <input class="saoInputBox" v-model="classCode" type="text">
                </div>

                <div class="commitBtn">
                    <button class="maskbutton" @click="wxcMaskSetHidden" :eeui="{text:'取消',borderRadius:'0',backgroundColor:'#eaeaea',color:'#222222'}"></button>
                    <button class="maskbutton" @click="addClassEnter(classCode)" :eeui="{text:'确定',borderRadius:'0',backgroundColor:'#2fdc7e',color:'#ffffff'}"></button>
                </div>

            </div>
            
        </div>
        </wxc-mask>

        <!-- 课程班级 -->
        <wxc-mask height="800"
                width="660"
                border-radius="6"
                duration="200"
                mask-bg-color="#FFFFFF"
                :has-animation="hasAnimation"
                :has-overlay="true"
                :show-close="true"
                :show="maskclassshow"
                @wxcMaskSetHidden="wxcMaskSetHidden">
            <div class="content" @click="stopdev">
                <text class="masktitle">课程班级</text>
                <div class="maskcont">
                    <div class="maskimgbox">
                        <div class="maskImage" >
                            <image class="maskimg" :src="ClassInfo.courseFile" style="width:190;height:114px;"></image>
                            <text class="maskchengtext" @click="pitureuploud2">修改</text>
                        </div>
                        <div class="maskinputbox">
                            <input class="maskinput" type="text" :value="ClassInfo.curseName" v-model="ClassInfo.curseName">
                            <!-- <div class="maskselriado">
                             <div class="radiobox" v-for="(type,index) in courseType" :key="index" @click="selCourseType2(index)">
                                 <div class="radio" >
                                     <div class="point" v-if="index==courseTypeIndex2"></div>
                                 </div>
                                 <text class="radiotext">{{type.text}}</text>
                             </div>
                            
                         </div> -->
                        </div>
                    </div>
                    <div class="maskclassLinebox">
                        <scroller class="maskclassLineScroller">
                            <div class="maskclassLine" v-for="(classitem2,index) in ClassInfo.classList" :key="index">
                                <input 
                                    class="maskeditinput" 
                                    autofocus="true" 
                                    v-if="classitem2.inputShow" type="text" 
                                    :value="classitem2.course_class_name" v-model="classitem2.course_class_name"
                                    @blur="xgClass(classitem2)"
                                >
                                <text class="defaultclass" v-if="!classitem2.inputShow">{{classitem2.course_class_name}}</text>
                                
                                <div class="twoediticon">
                                    <text class="editicon" @click="editClass2(index)">&#xe6b0;</text>
                                    <!-- <text class="delelticon" @click="deletClass(index)">&#xe62c;</text> -->
                                </div>
                                
                            </div>
                        </scroller>
                        
                    </div>

                    <div class="commitBtn">
                        <button @click="addClassAPi(ClassInfo.course_id)" class="maskbutton"  :eeui="{text:'新增班级',borderRadius:'0',backgroundColor:'#eaeaea',color:'#222222'}"></button>
                        <button class="maskbutton" @click="changeClass" :eeui="{text:'确定',borderRadius:'0',backgroundColor:'#2fdc7e',color:'#ffffff'}"></button>
                    </div>

                </div>
                
            </div>
        </wxc-mask>

    <!-- 安卓跟新版本弹框 -->
        <wxc-dialog title="发现新版本"
                :content="versionCont"
                :show="versionShow"
                :single="true"
                @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked">
    </wxc-dialog>
    <!-- ios跟新版本弹框 -->
        <wxc-dialog title="发现新版本"
                :content="versionCont2"
                :show="versionShow2"
                :single="true"
                @wxcDialogConfirmBtnClicked="wxcDialogConfirmBtnClicked2">
    </wxc-dialog>
        
        
        <failNet v-if="netWorkShow"></failNet>
        <nav :reposition="reposition"></nav>
        
    </div>      
</template>

<style scoped>

.homeBox{
    flex: 1;
    padding-bottom:100px;
}
.maskeditinput{
    width: 300px;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: #999;
}
    .app {
        background-color: #ebebeb;
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
    .icon {
        width: 100px;
        height: 100px;
    }
    .ListBox{
       background-color: #ffffff;
       margin-bottom: 20;
       /* height: 1334px; */
    }
    .listinerTit{
        width: 750;
        height: 97;
        flex-direction: row;
        border-bottom-color: #ebebeb;
        border-bottom-style: solid;
        border-bottom-width: 1px;
        align-items: center;
    }
    .innerIocn{
        width: 40;
        height: 40;
        margin-left: 43px;
        color: #333;
        margin-right: 10px;
    }
    .innerIocncur{
        color: #2dd178;
    }
    .hTit{
        /* width: 500; */
        font-size: 32px;
         color: #333;
    }
    .hTitcur{
        color: #2dd178;
    }
    .greyBg{
        width: 650px;
        height: 70px;
        flex-direction: row-reverse;
        margin-right: 43;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: rgba(5, 5, 5, 0.5);
        align-items: center;
        
    }

    .zixun{
        position: absolute;
        top: 10;
        left: 40;
        width: 70px;
        height: 70px;
        line-height: 70;
        text-align: center;
        background-color: rgba(5, 5, 5, 0.5);
        color: #ffffff;
        border-radius: 100;

    }
    .gtext{
        color: #ffffff;
        margin-right: 40px;
        font-size: 24px;
    }
    
    .contimgbox{
        background-color: #fedb68;
        justify-content: center;
        width: 80px;
        height: 80px;
        border-radius: 10;

    }
    .contImg{
        align-self: center;   
    }
    .cont{
        width: 650;
        flex-direction: row;
        padding-bottom: 30px;
        margin-top: 20;
        border-bottom-style: dashed;
        border-bottom-width: 1px;
        border-bottom-color: #d8d8d8;
        align-self: center;
        position: relative;
    }
    .guidang{
        position: absolute;
        top: 90px;
        right: 110px;
        font-size: 26px;
        background-color: #eee;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: #999;

    }
    .guidangbox{
        position: absolute;
        top: 90px;
        right: 110px;
        /* width: 100px;
        height: 200px; */

    }
    .guidang2{
       
        font-size: 26px;
        background-color: #eee;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 10px;
        border-width: 1px;
        border-style: solid;
        border-color: #999;

    }
    .innerimgbox{
        width: 650px;
        /* height: 300px; */
        border-radius: 10;
        align-self: center;
        margin-top: 30;
        position: relative;
        /* pa dd-bottom: 30px; */
    }
    .contCenter{
        
        margin-top: 30;
        
    }
    .contCenterText{
        width: 200;
        font-size: 28;
        color: #f7b027;
    }
    .Bjtext{
        margin-top: 10px;
        font-size: 26px;
    }
    .Bjtext1{
        font-size: 26px;
        color: #999999;
        margin-top: 10px;
    }
    .banji{
        width: 200;
        margin-left: 10px;
    }
    .list{
        padding-bottom: 200;
    }
     .refresh {
        width: 750;
        -ms-flex-align: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        align-items: center;
    }
    .indicator-text {
        color: #888888;
        font-size: 28px;
        text-align: center;
    }
    .indicator {
        margin-top: 16px;
        height: 40px;
        width: 40px;
        color: blue;
    }
    .loading {
    width: 750;
    -ms-flex-align: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    align-items: center;
  }
  .indicator {
    color: #2dd178;
}
.zedieIcon{
    width: 150;
    height: 100;
    color: #d8d8d8;
    position: absolute;
    right: 0px;
    top: 0px;
    /* background-color: #333333; */
    
}

.enterIcon{
    width: 80px;
    height: 100px;
    color: #2dd178;
    
}
.enterIconmore{
    width: 80px;
    height: 100px;
    color: #999;
}
.navbutton{
    width:110;
    height:65;
    margin-right:25;
    background-color: #2dd178;
}
.navtext{
    font-size:36;
    color:#fff;
    margin-left:45;
}
.seticon{
    width: 50px;
    height: 50px;
    position: absolute;
    top: 20;
    right: 20;
    color: #ffffff;
    font-family: iconfont;
    font-size: 40;
    background-color: rgba(0,0,0,0.6);
    border-radius: 50;
    line-height: 50px;
    text-align: center;
}
.seticon2{
    position: absolute;
    top: 20;
    right: 20;
    color: #ebebeb;
    font-family: iconfont;
    font-size: 40;
}
.dropwrap{
    width: 160;
    background-color: #fff;
    position: absolute;
    top: 65;
    right: 33;
    padding-top: 10;
    padding-bottom: 10;
}
.dropitem{
    text-align: center;
    margin-top: 10;
    margin-bottom: 15;
    font-size: 30;
}
.masktitle{
    font-size: 27;
    text-align: center;
    height: 80;
    line-height: 80;
    border-bottom-color: #dddddd;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: #2222;
}
.popur{
    position: absolute;
    top: 100px;
    right: 30px;
    width: 180;
    text-align: center;
    background-color: #fff;
    border-right-color: #999;
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: #999;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: #999;
    border-left-style: solid;
    border-left-width: 1px;


}
.popuritembox{
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 15;
    padding-left: 20;
    padding-right: 20;
    padding-top: 22;
}
.popuritem{
    font-size: 24px;
}
.popuricon{
    font-family: iconfont;
    font-size: 30;
    color: #1eb76e;
}
.maskimgbox{
    flex-direction: row;
}
.maskImage{
    width: 190;
    height: 114;
    border-radius: 6;
    position: relative;
}
.maskimgbox{
    margin-top: 20;
    margin-left: 30;
}
.maskchengtext{
    width: 190;
    height: 47;
    line-height: 47;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    color: #fff;
    font-size: 24;
    text-align: center;
}
.maskinput{
    width: 289;
    height: 60;
    border-width: 1px;
    border-style: solid;
    border-color: #ddd;
    border-radius: 6;
    margin-left: 30;
    padding-left: 10;
}
.maskcont{
    height: 720;
}
.maskclassLinebox{
    margin-top: 50;
    height: 440;
}
.maskclassLine{
    flex-direction: row;
    justify-content: space-between;
    height: 80;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    align-items: center;
    margin-left: 30;
    margin-right: 30;
}
.defaultclass{
    font-size: 30;
    color: #333;
}
.twoediticon{
    flex-direction: row;
}
.editicon{
    font-family: iconfont;
    font-size: 38;
    color: #999;
    margin-right: 40;
}
.delelticon{
    font-family: iconfont;
    font-size: 38;
    color: #999;
}
.commitBtn{
    flex-direction: row;
    margin-top: 20;
}
.maskbutton{
    width: 330;
    height: 80;
}
.shaotitle{
    flex-direction: row;
    justify-content: space-between;
    padding-left: 30px;
    padding-right: 30px;
    height: 80px;
    align-items: center;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #999;
    /* border-bottom: 1px solid #eee; */
}
.saoClassInput{
    height: 320px;
    align-items: center;
}
.addTit{
    font-size: 30px;
}
.saoClassTit{
    width: 540px;
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 30px;
    color: #666666;
}
.saoInputBox{
    border-width: 1px;
    border-style: solid;
    border-color: #dddddd;
    height: 80px;
    padding-left: 20px;
    width: 540px;
}
.maskselriado{
    flex-direction: row;
    margin-top: 20px;

}
.radiobox{
    flex-direction: row;
    margin-left: 20px;
}
.radio{
    width: 40px;
    height: 40px;
    border-radius: 30px;
    border-width: 1px;
    border-style: solid;
    border-color: #999999;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
}
.point{
    width: 30px;
    height: 30px;
    background-color: #1eb76e;
    border-radius: 30px;
}
.radiotext{
    font-size: 30px;
    color: #666666;
}
.morelistBtn{
   width: 190px;
   height: 54px;
   color: #333333;
   font-size: 30px;
   margin-top: 30px;
   margin-bottom: 25px; 
   background-color: #ededed;
   line-height: 54px;
   border-radius: 30px;
   text-align: center;
   margin-left: 285px;
}
.yin{
    width: 35px;
    height: 35px;
    background-color: red;
    color: #fff;
    font-size: 24px;
    border-radius: 35px;
    line-height: 35px;
    text-align: center;
    margin-left: 20px;
}
</style>

<script>

    const eeui = app.requireModule('eeui');
    const stream = app.requireModule('stream');
    const picture = app.requireModule("eeui/picture");
    const network = app.requireModule("eeui/network");
    const navigator = app.requireModule('navigator');
    import API from '../../fetch/api/apis'
    import { WxcDialog,WxcMask,WxcPopover  } from 'weex-ui';
    import nav from '../../components/nav.vue'
    import failNet from '../../components/failNet.vue'
    const storage = weex.requireModule('storage')
 
    export default {
        components: { WxcDialog,WxcMask,WxcPopover,nav,failNet  },
        data() {
            return {
                reposition:app.config.params.position,
                guidangindex:-1,//归档班级
                btns:[
                    {
                    text:'我要开课',
                    key:'kaike'
                    },
                    {
                    text:'加入班级',
                    key:'addclass'
                    }
                ],
                popoverPosition:{x:-14,y:80},
                popoverArrowPosition:{pos:'top',x:-15},
                
                maskclassshow:false,
                heightH:'',
                popurHeight:0,
                maskshow: false,
                shaoShow:false,
                isFalse: false,
                hasAnimation: true,
                dropwrap:false,
                refreshing: false,
                loadinging: false,
                deindex:0,
                deindex2:-1,
                classCode:'',
                IconContent:'ios-arrow-forward',
                dropDown:false,
                token:'',
                userInfo:'',
                moreIndex:4,
               lists:[],
               stuList:[],
               courseType:[
                   {text:'普通班级',type:0},
                   {text:'校园跑',type:1},
               ],
               courseTypeIndex:1,
               classindex:1,
               courseClassList:[
                  {show:false}
               ],
               courseClassValue:[
                   '班级1',
               ],
               courseTypeIndex2:1,
               classindex2:1,
               courseClassList2:[
                  {show:false}
               ],
               courseClassValue2:[
                   '班级1',
               ],
               courseClassName:'',
               courseFile:'https://www.asyke.com/static/img/7.jpg',
               
               ClassInfo:{//课程班级信息
                   classList:[],
                   curseName:'',
                   course_id:'',//班级id
                   teacher_id:'',
                   courseFile:'https://www.asyke.com/static/img/7.jpg',
               },
              netWorkShow:false,
              version:{},
              version2:'',
              versionShow:false,
              versionCont:'',
              versionUrl:'',
              versionName:'',
              versionShow2:false,
              versionCont2:'',
              versionUrl2:'',
            }
        },
        filters: {
            filterImg(val){
                //console.log(val.indexOf('http'));
                if(val.indexOf('http') != -1){
                    return val;
                }else{
                    return 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com' + val;
                }

                
                //console.log('http://ueditor-upload.oss-cn-beijing.aliyuncs.com' + val);
                
            }
        },
        watch: {
            
        },
        methods: {
            stopdev(){},
            guidangf(val){
               // console.log(val);
                //val.guidang = !val.guidang;
                //老师
                this.lists.map(item=>{
                    item.classes.map(item2=>{
                        
                        if(item2.course_class_id == val.course_class_id){
                            item2.guidang = !item2.guidang;
                        }else{
                            item2.guidang = false;
                        }
                      
                        
                    })
                })
                //学生
                this.stuList.map(item=>{
                    item.classes.map(item2=>{
                        if(item2.course_class_id == val.course_class_id){
                            item2.guidang = !item2.guidang;
                        }else{
                            item2.guidang = false;
                        }
                    })
                })
                
            },
            //课程归档设置
            courseFileOver(id){
                var self = this;
                //console.log(self.setCourseClassInfo.courseid,self.setCourseClassInfo.curseName,self.setCourseClassInfo.courseFile,self.setCourseClassInfo.teacher_id,self.courseTypeIndex2);
                eeui.confirm({
                    title: "温馨提示",
                    message: "确定归档吗？",
                    buttons: ["取消", "确定"]
                }, function(result) {
                    if (result.status == "click" && result.title == "确定") {
                        stream.fetch({
                    method:'PUT',
                    url:API.baseUrl + API.courseFileOver,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                       "Authorization":eeui.getCaches('token', null).token
                    },
                    body:JSON.stringify({
                           course_id:id,
                           file:1 
                    })

                },res=>{
                  
                    if(res.status == '200'){
                        eeui.toast({
                            message:'课程归档成功！',
                            gravity:'top'
                        })
                        for(let i = 0;i<self.lists.length;i++){
                             if(self.lists[i].course_id == id){                   
                                self.lists.splice(i,1);
                                return false;
                            } 
                            
                        }
                        
                        
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        //console.log(res,'wwwwww');
                    }
                })
                    }
                    

                })
                
            },
            //更新课程信息
            changeClass(){
                var self = this;
                stream.fetch({
                    method:'PUT',
                    url:API.baseUrl + API.courseUpdate,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                       "Authorization":eeui.getCaches('token', null).token
                    },
                    body:JSON.stringify({
                            course_id:self.ClassInfo.course_id,
                            course_name:self.ClassInfo.curseName,
                            course_cover:self.ClassInfo.courseFile,
                            teacher_id:self.ClassInfo.teacher_id,
                            course_type:self.courseTypeIndex2,
                            description:''
                        })

                },res=>{
                   
                    if(res.status == '200'){
                        eeui.toast({
                            message:'修改成功！',
                            gravity:'top'
                        })

                        self.maskclassshow = false;
                        for(let i = 0;i<self.lists.length;i++){
                             if(self.lists[i].course_id == self.ClassInfo.course_id){                   
                                self.lists[i].course_name = self.ClassInfo.curseName;
                                self.lists[i].course_cover = self.ClassInfo.courseFile; 
                                self.lists[i].course_type = self.courseTypeIndex2; 
                                 return false;
                            } 
                           
                        }

                        // for(const val of self.lists){
                        //     console.log(val.course_id);
                        //     if(val.course_id == self.ClassInfo.course_id){

                        //         console.log(self.ClassInfo.curseName);
                        //         val.course_name = self.ClassInfo.curseName;
                        //         val.course_cover = self.ClassInfo.courseFile; 
                        //         val.course_type = self.courseTypeIndex2; 
                        //     } 
                        //     return false;                         
                        // }

                        

                        
                        //console.log(res.data);
                       // self.lists = res.data;
                        
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast({
                            message:decodeURIComponent(res.headers['x-mzq-message']),
                            gravity:'top'
                        });
                        //console.log(res,'wwwwww');
                    }
                })
            },
            //加载更多班级
            moreBtn(index){
                if(this.lists[index].moreBthnum > this.lists[index].classes.length){
                    this.lists[index].moreBthnum = this.lists[index].classes.length;
                }else{
                    this.lists[index].moreBthnum  = this.lists[index].moreBthnum + 10;

                }
                
            },
            //选择课程类型
            selCourseType(index){
                this.courseTypeIndex = index;
            },
            //选择课程类型2
            selCourseType2(index){
                this.courseTypeIndex2 = index;
            },
            //删除课程
            deletClass(index){
                this.courseClassValue.splice(index,1);
                this.courseClassList.splice(index,1);
            },
            //编辑课程
            editClass(index){
                this.courseClassList[index].show = true;
            },
            //新增班级
            newAddclass(){
                this.classindex++;
                var classname = '班级' + this.classindex;
                this.courseClassValue.push(classname);
                this.courseClassList.push({show:false});
            },
            
            //创建课程
            createClass(title,src,type,classes){
                var self = this;
                stream.fetch({
                    method:'POST',
                    url:API.baseUrl + API.createcourse,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                       "Authorization":eeui.getCaches('token', null).token
                    },
                    body:JSON.stringify({title:title,src:src,course_type:type,classes:classes})
                },res=>{
                    if(res.status == 200){
                       // console.log(res.data);
                        eeui.toast('创建成功');
                        setTimeout(()=>{
                             self.getTeachList();
                        },2000)
                       
                        self.maskshow = false;
                    }else{ 
                        if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        //console.log(res);
                    }
                })
            },
      

            //编辑班级
            editClass2(index){
                this.ClassInfo.classList[index].inputShow = true;
            },
            //修改班级接口
            xgClass(classitem2){
                var self = this;
                stream.fetch({
                    method:'PUT',
                    url:API.baseUrl + API.classUpdate,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                       "Authorization":eeui.getCaches('token', null).token
                    },
                    body:JSON.stringify({
                        course_class_id:classitem2.course_class_id,
                        course_class_name:classitem2.course_class_name,
                        course_class_allow_join:1
                    })
                },res=>{
                    if(res.status == 200){
                        //console.log(res);
                       classitem2.inputShow = false
                        
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                        //console.log(res);
                    }
                })
            },

            pitureuploud () {
                var self = this;
                picture.create({
                    gallery: 1,
                    mode:1,
                    maxNum:1,
                    crop:true,
                    compress:true,
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
                    console.log(res);
                    if(res.status == 'success'){
                        self.courseFile = res.result.url
                    }
                });
            },
            pitureuploud2 () {
                var self = this;
                picture.create({
                    gallery: 1,
                    mode:1,
                    maxNum:1,
                    crop:true,
                    compress:true,
                    freeCrop:true,
                    quality:50
                }, function(result) {
                    //......
                    if(result.status == 'success'){
                        if(result.lists[0].compressed){
                            //console.log(weex.config.env.platform);
                            if(weex.config.env.platform == 'iOS'){
                                self.upLoadImgClass(result.lists[0].compressPath);
                            }else{
                                self.uploadImgClass2(result.lists[0].compressPath);
                            }
                          
                             //self.upLoadImg(result.lists[0].compressPath)
                            //self.uploadImg2(result.lists[0].compressPath)
                            //console.log(result.lists[0].compressPath);
                        }
                    }
                });
            },
            
            upLoadImgClass(file){
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
            uploadImgClass2(file){
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
                        self.ClassInfo.courseFile = res.result.url
                    }
                });
            },
            ewmJump(code,name,id,classid){
                //console.log(child);
                eeui.openPage({
                    pageName: 'ewm',
                    pageType: 'app',
                    url: 'ewm.js',
                    params:{'code':code,'name':name,'id':id,'classid':classid}
                }, function(result) {
                    //......
                });
            },
            // onloading (event) {
            //     //modal.toast({ message: 'Loading', duration: 1 })
            //     this.loadinging = true
            //     setTimeout(() => {
            //     this.loadinging = false
            //     }, 2000)
            // },
            titAnimate(index){
                this.deindex2 = -1;
                if(this.deindex == index){
                    this.deindex = -1;
                    this.IconContent = 'ios-arrow-forward';
                }else{
                    this.deindex = index;
                    this.IconContent = 'ios-arrow-down';

                }  
            },
            titAnimate2(index){
                this.deindex = -1;
                if(this.deindex2 == index){
                    this.deindex2 = -1;
                    this.IconContent = 'ios-arrow-forward';
                }else{
                    this.deindex2 = index;
                    this.IconContent = 'ios-arrow-down';

                }  
            },
            enterInnerpage(courseName,name,id,courseId,type,stu){
                eeui.openPage({
                    url: 'layoutPage.js',
                    statusBarColor:'#1eb76e',
                    animated:false,
                    params:{courseTitle:courseName,title:name,id:id,courseId:courseId,type:type,stu}
                }, function(result) {
                    //......
                }); 
            },
            dropwrapshow(item){
                
                this.lists.map(val=>{
                    if(item.course_id == val.course_id){
                        val.dropShow = !val.dropShow ;
                    }else{
                        val.dropShow = false;
                    }

                    
                })
                //item.dropShow = !item.dropShow;
                
            },
            popurshowaction(){     
                this.$refs['wxc-popover'].wxcPopoverShow();        
                // this.dropDown = !this.dropDown;
            },
           addclasShow(){
               this.shaoShow = true;
               this.classCode = '';
           },
           addClass(){
               var self = this;
               eeui.openScaner({}, (res)=>{
                    switch (res.status) {
                        case "success":
                           
                            const start = res.text.indexOf('code=');
                            //console.log(res.text.substr(start+5,7));
                             //eeui.toast("识别成功：" + res.text);
                            self.addClassEnter(res.text.substr(start+5,7));
                            break;

                        case "error":
                            eeui.toast("识别失败");
                            break;
                    }
                });
           },
           allClass(){
                eeui.toast('归档班级')
           },
           
           openMask (e) {//打开加入班级弹框\
                //console.log(e);
                if(e.key == 'kaike'){
                    this.maskshow = true;
                    this.hasAnimation = true;
                    //初始化开课弹框
                    this.courseTypeIndex = 0;
                    this.courseClassName = '';
                    this.courseClassValue = ['班级1'];

                }else if(e.key == 'addclass'){
                    this.addclasShow();
                }
                
            },
            wxcMaskSetHidden () {
                this.maskshow = false;
                this.shaoShow = false;
                this.maskclassshow = false;
            },
            //班级归档
            classSetFile(child,index,item){
                
                //console.log(index);
                var self = this;
                // console.log(eeui.getCaches('token', null).token);
                eeui.confirm({
                    title: "温馨提示",
                    message: "确定归档吗？",
                    buttons: ["取消", "确定"]
                }, function(result) {
                    if (result.status == "click" && result.title == "确定") {
                        //......
                        stream.fetch({
                            method:'PUT',
                            url:API.baseUrl + API.classSetFile,
                            type:'json',
                            body:JSON.stringify({course_class_id:child.course_class_id,file:1}),
                            headers:{
                                'Content-Type':'application/json',
                                 "Authorization":eeui.getCaches('token', null).token
                            }
                        },res=>{
                            if(res.status == '200'){
                               
                                item.guidang = false;
                                eeui.toast({
                                    message:'归档成功',
                                    gravity:'top'
                                })
                                item.classes.splice(index,1);                                
                            }else{
                                 if(res.status=='-1'){
                                        self.netWorkShow=true;
                                        return
                                    }
                                eeui.toast({
                                     message:decodeURIComponent(res.headers['x-mzq-message']),
                                     gravity:'top'
                                 })

                                 
                                
                            }
                        })
                        
                    }
                });
                
            },
            //老师获取班级列表
            getTeachList(){
                var self = this;
                
                stream.fetch({
                    method: 'GET',
                    url: API.baseUrl + API.getClassList,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                }, function(ret) {
                    if(ret.status == '200'){
                       // console.log(ret.data);

                       if(ret.data instanceof Array){
                           for (const val of ret.data) {
                                self.$set(val,'moreBthnum',4);
                                self.$set(val,'dropShow',false);                            
                                for (const val2 of val.classes) {
                                    self.$set(val2,'guidang',false);
                                    self.$set(val2,'inputShow',false);
                                }
                            }
                            self.lists = ret.data; 
                       }else{
                           eeui.toast('老师列表返回不是数组')
                       }
                       
                        


                        //console.log(self.lists);

                        
                       
                    }else{
                         if(ret.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(ret.headers['x-mzq-message']));
                        //console.log(ret,'wwwwww');
                         
                    }
                });
            },
            //退出班级
            courseClassOut(item,id){
                 var self = this;

                


               
                stream.fetch({
                    method: 'PUT',
                    url: API.baseUrl + API.courseClassOut,
                    type:'json',
                    body:JSON.stringify({
                        //course_class_uid:self.userInfo.uid,
                        course_class_id:id
                    }),
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                },res=>{
                    if(res.status == 200){
                        eeui.toast({
                            message:'退出成功',
                            gravity:'top'
                        })

                        for (let index = 0; index < self.stuList.length; index++) {

                        
                            if(item.course_id == self.stuList[index].course_id){
                                
                                if(item.classes.length>1){
                                    for (let v = 0; v < self.stuList[index].classes.length; v++) {
                                        const child = self.stuList[index].classes[v];
                                        if(id == child.course_class_id){
                                            self.stuList[index].classes.splice(v,1);
                                        }
                                        
                                    }
                                }else{
                                    
                                   self.stuList.splice(index,1); 
                                }
                            }
                            
                        }

                        


                        // eeui.reloadPage({
                        //     pageName: '',
                        // });

                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                    }
                    
                })
            },
            //学生获取班级列表
            getstuList(){
                var self = this;
                
                
                stream.fetch({
                    method: 'GET',
                    url: API.baseUrl + API.getStuClassList,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                }, function(ret) {

                    //console.log(ret);
                    if(ret.status == '200'){
                        if(ret.data instanceof Array){
                            for (const val of ret.data) {
                                self.$set(val,'moreBthnum',4);
                                self.$set(val,'dropShow',false);                            
                                for (const val2 of val.classes) {
                                    self.$set(val2,'guidang',false);
                                    //self.$set(val2,'inputShow',false);
                                }
                            }
                            self.stuList = ret.data; 

                        }else{
                            eeui.toast('不是数组')
                        }
                        
                        //console.log(ret.data,'wwwwww');
                    }else{
                         if(ret.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(ret.headers['x-mzq-message']));
                        
                    }
                });
            },
         
            
            
            //获取用户信息
            getUserInfo(){
                var self = this;
                //   console.log(app.config.params.token,'2222');
                //   console.log(API.baseUrl + API.getUserInfo);
                stream.fetch({
                    url:API.baseUrl + API.getUserInfo,
                    method:'GET',
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }

                },(res)=>{
                    if(res.status == 200){
                        self.userInfo = res.data;
                        if(res.data.type == 1){
                            self.getstuList();
                        }else{
                            self.getTeachList();
                            self.getstuList();
                        }
                    }else{
                        if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                    }
                    //console.log(res);
                })
            },
            //设置班级班级信息
            SetCourseClass(item){
                //console.log(item);
                this.ClassInfo.curseName = item.course_name;
                if(item.course_cover.indexOf('http') != -1){
                    this.ClassInfo.courseFile = item.course_cover;
                }else{
                    this.ClassInfo.courseFile = 'http://ueditor-upload.oss-cn-beijing.aliyuncs.com' + item.course_cover;
                }
                
                this.ClassInfo.teacher_id = item.teacher_id;
                this.ClassInfo.course_id = item.course_id;
                this.ClassInfo.classList = item.classes;
                this.maskclassshow = true;

            },
            //获取班级信息
            getClassListInfo(id){
                
                var self = this;
                stream.fetch({
                    method:'GET',
                    url:API.baseUrl + API.classInfo + '?course_id='+id,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                },res=>{
                    if(res.status == '200'){
                        var newarr = res.data;
                        for(let val of newarr){
                            self.$set(val,'inputShow',false);
                        }

                        self.ClassInfo.classList = newarr;

                        console.log(res.data);
                        //console.log('22222');
                        //console.log(newarr);


                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        console.log(res);
                    }
                    
                })
            },
            
            addClassAPi(id){
                var self = this;
                stream.fetch({
                    url:API.baseUrl + API.addclass,
                    method:'POST',
                    type:'json',
                    body:JSON.stringify({course_id:id}),
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                },res=>{
                    if(res.status == '200'){
                        self.$set(res.data,'inputShow',false);
                        self.$set(res.data,'guidang',false);

                        self.ClassInfo.classList.push(res.data);

                        // eeui.reloadPage()
                        // console.log(self.lists);
                       
                        //
                        
                        

                      
                    }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast(decodeURIComponent(res.headers['x-mzq-message']));
                    }
                })
            },
            //加入班级
            addClassEnter(code){
                 var self = this;
                
                var codeM = code.toUpperCase()
                stream.fetch({
                    method: 'POST',
                    url: API.baseUrl + API.addenterClass,
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    },
                    body:JSON.stringify({course_class_invite:codeM})
                    
                }, function(ret) {
                    console.log(ret);
                    if(ret.status == '200'){
                        eeui.toast({
                            message:'加入成功',
                            gravity:'top'

                        })

                        setTimeout(()=>{
                            if(self.userInfo.type == 1){
                                self.getstuList();
                            }else{
                                self.getTeachList();
                                self.getstuList();
                            }

                        },2000)
                        

                        self.shaoShow = false;

                        
                        //self.lists = ret.data;
                        //console.log(ret.data);
                    }else{
                         if(ret.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                        eeui.toast({
                            message:decodeURIComponent(ret.headers['x-mzq-message']),
                            gravity:'top'
                        });
                        //console.log(ret,'wwwwww');
                    }
                });
            },
            
            //检测版本
            testVersion(){
               let self = this;
               let platform = WXEnvironment.platform.toLowerCase();
               //let versionName=''
               
               //console.log(versionName);
                stream.fetch({
                    url:API.baseUrl + API.setInit,
                    method:'POST',
                    type:'json',
                    headers:{
                        'Content-Type':'application/json',
                        "Authorization":eeui.getCaches('token', null).token
                    }
                  
                },(res)=>{
                     if(res.status == '200'){
                         //console.log(res.data,eeui.getCaches('token', null).token);
                         //console.log('111111');
                        //self.version=res.data;
                         if(platform== "ios"){
                                //console.log(WXEnvironment.appVersion);

                             if(res.data.ios.show == true && res.data.ios.update == true){
                                 //console.log(res.data.ios);
                                 if(res.data.ios.ver !== WXEnvironment.appVersion){
                                        self.versionShow2 = true;
                                         self.versionUrl2 = res.data.ios.url;
                                }
                             }
                                
                            }
                            //安卓跟新版本
                             if(platform== "android") {

                                weex.requireModule('userRun').getAppVersion((data)=>{
                                    //console.log(data,'verName');
                                    self.versionName = data;
                                    self.versionCont = res.data.android.content;
                                //self.version2 = eeui.getCaches('version',null);
                                //if(self.version2 !== '' || self.version2 !== 'undefined'){
                                   //console.log(res.data.android.ver,'222222');
                                    if(self.versionName !== res.data.android.ver){


                                        //console.log(res.data.android.ver,'11111');
                                        self.versionShow = true;
                                         //console.log(self.version2);
                                        self.versionUrl = res.data.android.url;
                                        //清楚所有缓存
                                        eeui.clearAllCaches();
                                        //返回首页
                                        eeui.setCustomConfig("homePage", "loginPage/loginpage.js");
                                    }else{
                                        self.versionShow = false;
                                    }

                                })
                                


                            }

                          
                     }else{
                         if(res.status=='-1'){
                            self.netWorkShow=true;
                            return
                        }
                     }
                     
                        
                })
            },
           
            wxcDialogConfirmBtnClicked () {
            //此处必须设置，组件为无状态组件，自己管理
                this.versionShow = false;
                if(this.versionUrl !== ''){
                    weex.requireModule('userRun').updateApp(this.versionUrl,'爱上云课');
                }
                
            },
            wxcDialogConfirmBtnClicked2(){
                
                if(this.versionUrl2 !== ''){
                    this.versionShow2 = false;
                    eeui.openOtherAppTo(this.versionUrl2,'1514092937')
                    // navigator.push({url:this.versionUrl2}, res=>{
                    //     console.log(res);
                    // })
                    //eeui.openOtherApp('alipay');
                }
            }
          
        },
      
        created() {
            let self = this;
            this.getUserInfo();
            //this.testVersion();
             let deviceHeight = weex.config.env.deviceHeight / weex.config.env.deviceWidth * 750;
             this.heightH = deviceHeight - 240;

           
             //console.log(weex.config.env.platform);
            
            // 添加 字体图标
            let domModule = weex.requireModule("dom");
            domModule.addRule("fontFace", {
            fontFamily: "iconfont",
            src: "url('http://at.alicdn.com/t/font_1628280_p78f7z67jyq.ttf')"
            });


           

            // console.log(eeui.getCaches('token', null).token);

           
           


            
        },
        mounted () {
           
            //console.log(app.config.params.position,'11111');
            //this.getClassListInfo(242)

           // console.log(eeui.getCaches('token', null).token);
            
             
        },
        destroyed () {
            
        //    eeui.setVariate('vers1', false);
        }
    };
</script>
