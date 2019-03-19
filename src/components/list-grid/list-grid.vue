<template>
    <div class="list-grid">
            <!-- 高级搜索标签 -->
            <aui-expansion :tip="expansionTitle" v-if="isShowAdvanced" v-model="expansionCtrl">
                <div slot="content" class="list-page-button">
                    <div class="list-page-button-ctrl" v-if="badgeShow == true">
                        <span class="aui-popup-heder-left" @click="cancelRemoveTag">取消</span>
                        <span class="aui-popup-heder-right" @click="deleteTag">完成</span>
                    </div>
                    <aui-button class="list-page-button-item" :class="{buttonActive:selectTagId==undefined}" @click="clearSelectTag">全部</aui-button>
                    <aui-button class="list-page-button-item" v-for="item in allSearchLabels.searchLabelsReadonly" 
                            :key="item.id" @click="selectTag(item)" 
                            @touchstart.native="showDeleteButton" @touchend.native="clearLoop" 
                            :class="{buttonActive:selectTagId==item.id}">{{item.tagName}}</aui-button>
                    <aui-button class="list-page-button-item cust-tag" v-for="(item,index) in allSearchLabels.searchLabelsCtrl" 
                            :key="item.id" @click="selectTag(item)" 
                            @touchstart.native="showDeleteButton" @touchend.native="clearLoop" 
                            :class="{buttonActive:selectTagId==item.id}">{{item.tagName}}
                            <!-- <aui-icon v-if="badgeShow == true" type="cancel" @click.native.stop="removeTag(item,index)"></aui-icon> -->
                            <img v-if="badgeShow == true" src='@/assets/delete.png' class='delete-button-icon'  @click.stop="removeTag(item,index)">
                    </aui-button>
                    <aui-button class="list-page-button-item" @click="addSelectTag">+</aui-button>
                </div>
            </aui-expansion>
            <!-- 列表主体 -->
            <div class="list-grid-content" ref="scrollerContent">
                <div class="list-grid-top" v-if="isShowTop & isNeedRecordData">
                    <aui-search
                        :autoFixed="false"
                        v-model="queryValue"
                        placeholder="搜索"
                        cancel-text="取消"
                        @keyup.enter.native="changeQueryValue">
                    </aui-search>
                </div>
                <div class="empty-text" v-if="listData.length == 0">暂无数据</div>
                <div class="list-grid-scroller">
                    <aui-scroller ref="scroller"
                        lock-x
                        scrollbarY
                        :height="dataHeight"
                        :use-pullup="pullUpCtrl"
                        :use-pulldown="pullDownCtrl"
                        :pulldown-config="pulldownConfig"
                        :pullup-config="pullupConfig"
                        @pullup-loading="loadMore"
                        @pulldown-loading="refresh"
                        v-model="status">
                        <div>
                            <div class="list-grid-item" v-for="(item,index) in listData" :key="index">
                                <aui-swipeout ref="swipeout">
                                    <aui-swipeout-item :disabled="filterBtns(index).length===0"
                                        @close="closeSwipt(index)" 
                                        @open="openSwipt(index)" transition-mode="follow" ref="swipeoutItem">
                                        <div class='right-menu' v-if='filterBtns(index).length<=3' style='display: flex;float: right' slot="right-menu">
                                            <aui-swipeout-button v-for="btn in filterBtns(index)"
                                            :key="btn.$id" 
                                            :type="chectType(btn)"
                                            @click.native="handleComponentClick(btn, index)">
                                            {{btn.lable}}</aui-swipeout-button>
                                        </div>
                                        <div class='right-menu' v-else style='display: flex;float: right' slot="right-menu">
                                            <aui-swipeout-button 
                                            :type="chectType(filterBtns(index)[0])"
                                            @click.native="handleComponentClick(filterBtns(index)[0], index)">
                                            {{filterBtns(index)[0].lable}}</aui-swipeout-button>
                                            <aui-swipeout-button 
                                            :type="chectType(filterBtns(index)[1])"
                                            @click.native="handleComponentClick(filterBtns(index)[1], index)">
                                            {{filterBtns(index)[1].lable}}</aui-swipeout-button>
                                            <aui-swipeout-button 
                                            type="primary"
                                            @click.native="showMoreButtons(filterBtns(index),index)">
                                            更多...</aui-swipeout-button>
                                        </div>
                                        <div slot="content" @click="handleRowClick(index)">    
                                            <div class="select-ctrl">
                                                <aui-icon type="circle"></aui-icon>
                                                <aui-icon type="success-circle" :class="{'activeIcon':item.ifShow===true}"></aui-icon>
                                            </div>
                                            <aui-panel :list="[item]" :type="panelType" :class="{'aui-panel-move':openChoose===true}"></aui-panel>
                                        </div>
                                    </aui-swipeout-item>
                                </aui-swipeout>
                            </div>
                        </div>
                    </aui-scroller>
                </div>
            </div>
            <!-- 多选状态底部操作区域 -->
            <div class="list-grid-batch" v-if="openChoose">
                <span class="list-grid-batch-all" v-if="isAll===false" @click="chooseAll">全选</span>
                <span class="list-grid-batch-all" v-else @click="chooseAll">取消全选</span>
                <div class="list-grid-batch-content" :class="{'more-content':buttons.length>3}">
                    <span class="list-grid-batch-ctrl" v-for="item in buttons" :key="item.$id" @click="handleButtonClick(item.$id,item)">{{item.lable}}</span>
                </div>
                <span class="list-grid-batch-cancel" @click="closeChoose">取消</span>
            </div>
            <!-- 添加高级搜索页面 -->
            <div v-transfer-dom class="popup-index">
                <!-- <aui-popup v-model="selectTagCtrl" height="100%"> -->
                    <div class="tag-add-hide" :class="{'tag-add-show':selectTagCtrl}">
                        <aui-group class="top-ctrl">
                            <div class="top-btn">
                                <aui-button  @click="closeSelectTag">取消</aui-button>
                                <aui-button  @click="save">保存</aui-button>
                            </div>
                        </aui-group>
                        <aui-group class="tit-info">
                            <aui-input title="标签名称" v-model="formModel.tagName" placeholder="请输入标签名称"></aui-input>
                            <!-- <aui-popup-picker title="复制条件" :popup-style="{ 'z-index':1000}" :data="conditionTypeOption" :columns="1" v-model="conditionsId" :show-name="true" @change="changeCondition" placeholder="请选择复制条件"></aui-popup-picker> -->
                            <aui-cell title="复制条件" :value="conditionsName" @click="showConditions=true" placeholder="请选择复制条件"></aui-cell>
                        </aui-group>
                        <aui-group v-for="(item,index) in formModel.searchs" :key="index" class="tag-info">
                            <p class="delete-tag">
                                <span>条件配置</span>
                                <!-- <aui-icon v-if="formModel.searchs.length>1" type="cancel" @click.native="deleteItem(index)"></aui-icon> -->
                                <img v-show="formModel.searchs.length>1" src='@/assets/delete.png' class='delete-tag-icon'  @click.stop="deleteItem(index)">
                                </p>
                            <aui-popup-picker title="字段" v-if="columnOption.length>0" @show="showPopup" :popup-style="{ 'z-index':1000}" :data="columnOption" :columns="1" v-model="item.columnId" :show-name="true" @change="changeColumns(item,index)" placeholder="请选择字段"></aui-popup-picker>
                            <aui-popup-picker title="条件" v-if="searchTypeOption.length>0" @show="showPopup" :popup-style="{ 'z-index':1000}" :data="searchTypeOption" :columns="1" :show-name="true" v-model="item.searchType" placeholder="请选择条件"></aui-popup-picker>
                            <aui-input title="条件" disabled v-else placeholder="请选择条件"></aui-input>
                            <input-adaptive v-if="columnMaps[item.columnId]" v-model="item.screenVal" :column="columnMaps[item.columnId]" :condition-type="item.searchType" class="tag-input-adaptive"></input-adaptive>
                            <aui-input title="值" disabled v-else placeholder="请选择条件值"></aui-input>
                        </aui-group>
                        <aui-group class="add-item">
                            <div>
                                <aui-button @click="addItem">新增</aui-button>
                            </div>
                        </aui-group>
                    </div>
                <!-- </aui-popup> -->
            </div>
            <div v-transfer-dom class="popup-conditions">
                <aui-popup v-model="showConditions" @show="showPopup">
                    <div class="aui-popup-picker-container">
                        <div class="aui-popup-con-heder">
                            <span class="aui-popup-con-heder-left" @click="closeCondition">取消</span>
                            <span class="aui-popup-con-heder-right" @click="saveCondition">完成</span>
                        </div>
                        <aui-picker :data="conditionTypeOption"
                             v-model='chooseCondition' 
                             :columns=1></aui-picker>
                    </div>
                </aui-popup>
            </div>

            <aui-toast v-model="saveToast" :time="1000">保存成功！</aui-toast>
            <aui-toast v-model="deleteToast" :time="1000">删除成功！</aui-toast>
            <aui-actionsheet v-model="showActionSheet" :menus="operations" @click-menu="buttonClick"></aui-actionsheet>
    </div>
</template>
<script>
import { businessService, columnService, queryService, moduleService } from "paas-web-utils/services";
import { Column } from "paas-web-utils/rules";
import inputAdaptive from "@/components/input-adaptive/src/input-adaptive";
import axios from "axios";
import { setTimeout } from 'timers';
export default {
    name:'ListGrid',
    components:{
        inputAdaptive,
    },
    props:{
        //高度
        height:{
            type:Number,
        },
        //panel类型
        panelType:{
            type:String,
            default:'5',
        },
        //是否展示头部搜索框
        isShowTop:{
            type:Boolean,
            default:true,
        },
        // 是否需要获取列表数据
        isNeedRecordData: {
            type: Boolean,
            default: true,
        },
        //视图id
        viewId:{},
        //模块id
        moduleId:{},
        //源数据
        datasource:{
            type:Object,
            default:()=>{
                return {}
            },
        },
        //标题字段
        mobileListTitle:{
            type:Object,
            default:()=>{
                return {}
            },
        },
        //副标题字段
        mobileListCaption:{
            type:Object,
            default:()=>{
                return {}
            },
        },
        //列表数据标题
        columns:{
            type:Array,
            default:[],
        },
        //列表内按钮
        componentBtns: {
            type: Array,
            default: () => {
                return [];
            }
        },
        //是否多选
        openChoose:{
            type: Boolean,
            default: false,
        },
        //是否展示标签
        isShowAdvanced: {
            type: Boolean,
            default:false,
        },
        //已选标签
        selectTagId:{
            type:Number,
        },
        //多选
        buttons:{
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data(){
        return{
            recordData:[],//真实数据
            allRecordData:[],//页面所有真实数据
            //scroll状态
            status: {
                pullupStatus: 'defult',
                pulldownStatus :'defult',
            },
            //下拉功能配置
            pulldownConfig:{
                content: '下拉刷新',
                height: 60,
                autoRefresh: false,
                downContent: '下拉刷新',
                upContent: '释放刷新',
                loadingContent: 'Loading...',
                clsPrefix: 'xs-plugin-pulldown-'
            },
            //上划功能配置
            pullupConfig:{
                content: '加载更多',
                pullUpHeight: 50,
                height: 50,
                autoRefresh: false,
                downContent: '释放加载',
                upContent: '加载更多',
                loadingContent: 'Loading...',
                clsPrefix: 'xs-plugin-pullup-'
            },
            queryValue:'',//搜索值
            //列表数据
            listData:[],//panel数据
            pullUpCtrl:true,//是否上划加载
            pullDownCtrl:true,//是否下拉刷新
            dataHeight:'0',//scroller高度
            totalPage:1,//总页面数
            //标签数据
            allSearchLabels:{
                searchLabelsCtrl:[],//自定义
                searchLabelsReadonly: [],//系统
                customTag:[],
            },
            expansionTitle:'全部',//已选标签
            expansionCtrl:false,
            activeRow:[],//选中行
            activeIndex:[],//选中行下标
            selectTagCtrl:false,//新增标签弹框控制
            saveToast:false,//保存成功提示
            deleteToast:false,//删除成功提示
            //高级搜索
            formModel: {
                moduleId: this.moduleId,
                tagName: "",
                viewId: this.viewId,
                searchs: []
            },
            conditionTypeOption:[],//复制条件选项
            conditionsId:null,//复制条件id
            conditionsName:null,//复制条件名称
            columnOption:[],//字段选项
            searchTypeOption:[],//标签条件选项
            columnMaps: {},
            badgeShow: false,//是否长按
            keep: 1000,//长按延时时间
            removeTagData:[],//移除标签暂存
            chooseCondition:[],//复制条件选中项value
            showConditions:false,//复制条件选择框显示控制
            conditionsName:'',//复制条件名称
            showActionSheet:false,//更多列表按钮
            operations:{},
            index:undefined,
            isAll:false,//是否已经全选
        }
    },
    created(){
        // 初始化数据
        this.datasource.currentPage = 1;
        if(this.selectTagId == undefined){
            this.expansionTitle = '全部';
        };
        this.isNeedRecordData && this.queryPageBusiness();
        this.getSysTagData();
        this.getTagColumn();
    },
    mounted(){
        this.dataHeight = document.querySelector('.list-grid').offsetHeight-44+'px';
    },
    watch:{
        'datasource.reload':function(value){
            if(value===true){
                this.listData = [];
                this.queryPageBusiness();
            }
        },
        'viewId':function(){
            //标签
            this.getSysTagData()
        },
        'conditionsId':function(value){
            this.changeCondition(value)
        },
        'selectTagId':function(){
            console.log('watch selectTagId',this.selectTagId)
        },
    },
    computed: {
        //datasource查询真实数据
        datasourceLoading() {
            if (this.datasource.url) {
                return datasource => {
                return axios
                    .post(this.datasource.url, datasource)
                    .then(res => res.data);
                };
            } else if (this.datasource.curModuleId) {
                return businessService.findBatchAll;
            } else {
                return businessService.pageBusiness;
            }
        },
        
    },
    methods:{
        filterBtns(index){
            let rowData = this.recordData[index];
            let btns = (this.componentBtns || []).filter((item) => {
                return !item.isHidden(rowData);
            });
            return btns;
        },
        showMoreButtons(operations,index){
            this.index = index;
            let array = operations.splice(2,operations.length);
            for (const arr of array) {
                console.log('arr.$id',arr.$id)
                this.operations[arr.$id] = arr.lable;
            }
            console.log('this.operations',this.operations)
            this.showActionSheet = true;
        },
        buttonClick(menuKey, menuItem) {
            for (const button of this.componentBtns) {
                console.log('menuKey',menuKey,button)
                if (button.$id == menuKey) {
                    console.log('button',button,this.index)
                    this.$emit("component-click", button, this.recordData[this.index]);
                    break;
                }
            }
        },
        //列表内部按钮类型
        chectType(btn){
            if(btn.type == 'DELETE'){
                return 'warn'
            }else{
                return 'primary'
            }
        },
        //搜索
        changeQueryValue(){
            this.$refs.scroller.reset({
                top: 0
            })
            // this.listData = [];
            this.$set(this.datasource, "fuzzyQueryVal", this.queryValue);
            this.$set(this.datasource, "reload", true);
        },
        //初始化数据
        queryPageBusiness(){
            this.datasourceLoading(this.datasource).then(data => {
                console.log(data)
                this.totalPage = data.totalPage;
                if(this.totalPage>1){
                    this.$refs.scroller.enablePullup()
                }else{
                    this.$refs.scroller.disablePullup()
                }
                this.recordData = data.record;
                if (!this.recordData) {
                  this.$set(this.datasource, "reload", false);
                  return;
                }
                this.recordData.forEach(v=>{
                    //页面展示的所有数据
                    this.allRecordData.push(v);
                    //过滤展示字段
                    let showColumns = [];
                    this.columns.forEach(k=>{
                        if(!k.hidden){
                            let showKey = k.showValKey
                            if(v[showKey]){
                                showColumns.push(v[showKey]);
                            }
                        }
                    });
                    //定义标题
                    let title = this.mobileListTitle ? v[this.mobileListTitle.showValKey] :'标题';
                    let caption = this.mobileListCaption ? v[this.mobileListCaption.showValKey] : '副标题';
                    let panelData = {
                        src: 'static/images/msg-center/notice.png',
                        title: title,
                        desc: caption,//showColumns.toString() || '内容',
                        url: '',
                        meta: {
                            date:this.format(v.CREATE_TIME),
                        },
                        ifShow:false,
                    }
                    this.listData.push(panelData)
                })
                this.$set(this.datasource, "reload", false);
            },() => {
                this.$set(this.datasource, "reload", false);
            });
        },
        //上拉加载数据
        loadMore(){
            setTimeout(() => {
                if(this.datasource.currentPage<this.totalPage){
                    this.datasource.currentPage++;
                    this.queryPageBusiness();
                    this.$refs.scroller.donePullup()
                }else{
                    this.$refs.scroller.donePullup()
                }
            }, 1000)
        },
        //下拉刷新
        refresh(){
            setTimeout(() => {
                this.datasource.currentPage = 1;
                this.$set(this.datasource, "reload", true);
                this.$refs.scroller.donePulldown()
            }, 1000)
        },
        //行点击
        handleRowClick(index){
            if(this.openChoose){
                this.listData[index].ifShow = !this.listData[index].ifShow;
                if(this.activeRow.indexOf(this.recordData[index]) === -1){
                    this.activeRow.push(this.recordData[index]);
                }else{
                    let key = this.activeRow.indexOf(this.recordData[index])
                    this.activeRow.splice(key,1)
                };
                console.log('end-activeRow',this.activeRow)
            }else{
                this.$emit(
                    "row-click",
                    this.recordData[index],
                );
            }
        },
        //列表行划开
        openSwipt(index){
            this.$refs.swipeoutItem.forEach(v=>{
                v.close()
            })
            this.$refs.swipeoutItem[index].open();
        },
        //列表行关闭
        closeSwipt(index){
       
        },
        // 列表操作点击
        handleComponentClick(button, index) {
            this.$emit("component-click", button, this.recordData[index]);
        },
        //多选操作点击
        handleButtonClick(id,item){
            this.$emit("button-click", id, item);
        },
        //多选取消
        closeChoose(){
            this.$emit('close-choose',false);
            this.activeRow = [];
            this.listData.forEach(v=>{
                v.ifShow = false;
            })
        },
        //多选全选
        chooseAll(){
            if(this.isAll){
                this.activeRow = [];
                this.listData.forEach(v=>{
                    v.ifShow = false;
                })
                console.log(this.activeRow)
            }else{
                this.$set(this,'activeRow',this.allRecordData)
                console.log(this.activeRow)
                this.listData.forEach(v=>{
                    v.ifShow = true;
                })
            }
            this.isAll = !this.isAll
        }, 
        //创建时间格式化
        format(value){
            let time = new Date(value);
            let year = time.getFullYear();
            let month = time.getMonth() +1;
            let day = time.getDate();
            return `${year}-${month>9?month:'0'+month}-${day>9?day:'0'+day}`;
        }, 
        //关闭标签下拉框
        closeExpansion(){
            this.expansionCtrl = false;
            this.badgeShow = false;
        },
        //下拉框选项选择
        selectTag(item){
            if(this.badgeShow){
                return;
            }
            this.expansionTitle = item.tagName;
            this.$emit("select-tag", item.id);
            this.closeExpansion();    
        },  
        //点击全部标签清除标签筛选条件
        clearSelectTag(){
            this.expansionTitle = '全部';
            this.$emit("select-tag", undefined);
            this.closeExpansion();
        },
        //打开新增标签弹窗
        addSelectTag(){
            this.closeExpansion();
            this.selectTagCtrl = true;
            this.addItem();
        },
        //关闭新增标签弹窗
        closeSelectTag(){
            this.selectTagCtrl = false;
            this.formModel = {
                moduleId: this.moduleId,
                tagName: "",
                viewId: this.viewId,
                searchs: []
            }
        },
        showPopup(){
            document.querySelector('.aui-popup-mask').style.zIndex=600;
        },
        //获取系统标签组数据
        getSysTagData(){
            //系统标签
            queryService.findSystemTagByViewId({ viewId: this.viewId }).then(data => {
                this.allSearchLabels.searchLabelsReadonly = data;
                console.log('searchLabelsReadonly',data)
                if(this.allSearchLabels.searchLabelsReadonly.length>0){
                    this.allSearchLabels.searchLabelsReadonly.forEach(v=>{
                        let conditionItem = {
                            name:v.tagName,
                            value:v.id,
                        }
                        this.conditionTypeOption.push(conditionItem)
                    })
                }
                if(this.selectTagId){
                    if(this.allSearchLabels.searchLabelsReadonly.length != 0){
                        this.allSearchLabels.searchLabelsReadonly.forEach(v=>{
                            if(v.id === this.selectTagId){
                                this.expansionTitle = v.tagName;
                            }
                        })
                    }
                }
            });
            this.getCusTagData();
        },
        //获取自定义标签组数据
        getCusTagData() {
            //用户自定义标签
            queryService.findCustomTagByViewId({ viewId: this.viewId }).then(data => {
                this.allSearchLabels.searchLabelsCtrl = this.deepClone(data);
                this.allSearchLabels.customTag = this.deepClone(data);
                console.log('searchLabelsCtrl',data)
                if(this.allSearchLabels.searchLabelsCtrl.length>0){
                    this.allSearchLabels.searchLabelsCtrl.forEach(v=>{
                        let conditionItem = {
                            name:v.tagName,
                            value:v.id,
                        }
                        this.conditionTypeOption.push(conditionItem)
                    })
                }
                console.log('conditionTypeOption',this.conditionTypeOption)
                this.allSearchLabels.searchLabelsCtrl.forEach(v=>{
                    v.isSearchLabelsCtrl = true;
                });
                if(this.allSearchLabels.searchLabelsCtrl.length != 0){
                    this.allSearchLabels.searchLabelsCtrl.forEach(v=>{
                        if(v.id === this.selectTagId){
                            this.expansionTitle = v.tagName;
                        }
                    })
                }
            });
        },
        deepClone(obj){
            let _obj = JSON.stringify(obj),
                objClone = JSON.parse(_obj);
            return objClone;
        },  
        //增加一行筛选条件
        addItem() {
            this.formModel.searchs.push({
                columnId: undefined,
                moduleId: undefined,
                searchType: undefined,
                screenVal: undefined
            });
            console.log(this.formModel)
        },
        //删除一行筛选条件
        deleteItem(index){
            this.formModel.searchs.splice(index,1);
        }, 
        closeCondition(){
            this.showConditions = false;
        },
        saveCondition(){
            console.log(this.chooseCondition)
            this.conditionsId = Number(this.chooseCondition);
            this.conditionTypeOption.forEach(v=>{
                if(this.conditionsId == v.value){
                    this.conditionsName = v.name
                }
            })
            console.log(this.conditionsId,this.conditionsName)
            this.closeCondition();
        },
        //切换复制条件
        changeCondition(value){
            if(!value) {
                this.formModel.searchs = [{
                    columnId: undefined,
                    searchType: undefined,
                    screenVal: undefined,
                }]
                return 
            }
            queryService.findInfByTagId({tagId:this.conditionsId}).then(data=>{
                this.formModel.searchs = [];
                this.searchTypeOption = [];
                data.forEach((v,k)=>{
                    if(this.columnMaps[v.columnId]){
                        this.columnMaps[v.columnId].conditionTypes.forEach(v=>{
                            let searchTypeItem = {
                                name:v.label,
                                value:v.value.toString(),
                            }
                            this.searchTypeOption.push(searchTypeItem)
                        })
                        console.log('searchTypeOption',this.searchTypeOption)
                    }
                    this.formModel.searchs.push({
                        columnId:this.toArray(v.columnId),
                        searchType:this.toArray(v.searchType),
                        screenVal:v.screenVal,
                    })
                })
                console.log(this.formModel.searchs)
            });
        },
        toArray(value){
            let ary = [];
            ary.push(value);
            return ary
        },
        //获取字段信息
        getTagColumn(){
            columnService.findByViewId({ viewId: this.viewId }).then(data => {
                data.forEach(v=>{
                    if(v.list){
                        v.list.forEach(m=>{
                            let column = new Column();
                            column.render(m);
                            this.$set(this.columnOption, this.columnOption.length, {
                                value: `${m.moduleCode}.${m.phyColumnName}`,
                                name: column.label
                            });
                            this.$set(this.columnMaps,`${m.moduleCode}.${m.phyColumnName}`,column);
                        })
                    }
                })
                console.log('columnOption',this.columnOption)
            })
        },
        //改变字段
        changeColumns(item,index){
            this.searchTypeOption = [];
            this.formModel.searchs[index].searchType = [];
            this.formModel.searchs[index].screenVal = ''
            console.log(item.columnId,this.columnMaps[item.columnId])
            if(this.columnMaps[item.columnId]){
                this.columnMaps[item.columnId].conditionTypes.forEach(v=>{
                    let searchTypeItem = {
                        name:v.label,
                        value:v.value.toString(),
                    }
                    this.searchTypeOption.push(searchTypeItem)
                })
                console.log('searchTypeOption',this.searchTypeOption)
            }else{
                
            }
        },
        //保存标签
        save(){
            let params = this.deepClone(this.formModel);
            params.searchs.forEach(v=>{
                v.columnId = v.columnId.toString();
                v.searchType = v.searchType.toString();
            })
            queryService.save(params).then(data=>{
                this.getSysTagData();
                this.closeSelectTag();
                this.saveToast = true;
            })
        },
        //长按打开标签
        showDeleteButton() {
            clearInterval(this.CheckClick);
            clearInterval(this.Loop);
            this.CheckClick = setTimeout(() => {
                if(this.expansionCtrl){
                    this.Loop = setTimeout(()=>{
                        this.badgeShow = true;
                    },this.keep)
                }else{
                    this.badgeShow = false;
                }
            }, 200);
        },
        clearLoop() {
            clearInterval(this.CheckClick);
            clearInterval(this.Loop);
        },
        //移除标签图标
        removeTag(item,index){
            this.allSearchLabels.searchLabelsCtrl.splice(index,1)
            this.removeTagData.push(item);
            console.log('removeTagData',this.removeTagData);
        },
        //关闭标签编辑
        cancelRemoveTag(){
            this.removeTagData = [];
            this.allSearchLabels.searchLabelsCtrl = this.deepClone(this.allSearchLabels.customTag);
            this.badgeShow = false;
        },
        //删除标签
        deleteTag(){
            if(this.removeTagData.length>0){
                let idList = []
                this.removeTagData.forEach(v=>{
                    idList.push(v.id)
                })
                let params = {
                    id:idList,
                }
                queryService.delById(params).then(data=>{
                    this.badgeShow = false;
                    this.deleteToast = true;
                    this.closeExpansion();
                    this.getSysTagData();
                })
            }else{
                this.badgeShow = false;
                this.closeExpansion();
            }
        }
    }
}
</script>
<style lang="less">
.aui-popup-dialog{
    z-index: 610;
}
.list-grid {
    height: 100%;
    overflow: hidden;
    .aui-expansion-content-show{
        position: absolute;
        width: 100%;
    }
    .aui-expansion{
        padding: 0;
        height: 0;
    }
    .aui-expansion::before{
        position: static;
    }
    .aui-expansion::after{
        position: static;
    }
    .aui-expansion-tip{
        box-shadow: 0 3px 2px #eee;
    }
    .aui-expansion-mask{
        top:50px;
    }
    .aui-expansion-arrow-transition{
        display: inline-block;
        font-size: 16px;
        margin-top: 4px;
        margin-bottom:5px;
    }
    .aui-expansion-arrow-up:after{
        margin-top: -3px;
        right: -3px;
    }
    .aui-expansion-arrow-down:after{
        margin-top: -7px;
        right: -3px;
    }
    .aui-search-bar__label{
        top: 4px;
    }
    .list-page-button{
        overflow: hidden;
        padding: 10px 0;
        .list-page-button-ctrl{
            height: 45px;
            display: flex;
            justify-content: space-between;
            line-height: 44px;
            font-size: 16px;
            border-bottom: 1px solid #eee;
            .aui-popup-heder-left{
                padding-left: 15px;
                color: #828282;
            }
            .aui-popup-heder-right{
                padding-right: 15px;
                color: #33c3cf;
            }
        }
        .list-page-button-item{
            width: 30%;
            float: left;
            margin: 10px 1.5%;
            background: #eee;
            color: #999;
            white-space: nowrap;
            text-overflow: ellipsis;
            &::after{
                border: none;
            }
        }
        .cust-tag{
            .delete-button-icon{
                width: 20%;
                position: absolute;
                right: -1px;
                top: -1px;
                // top: 50%;
                // transform: translateY(-50%);
                z-index: 1000;
            }
        }
        .buttonActive{
            background: #33C2CF;
            color: #fff;
        }
    }
    .list-grid-content{
        height: 100%;
        display: flex;
        flex-direction: column;
        .list-grid-top{
            height: 44px;
        }
        .list-grid-scroller{
            flex: 1;
        }
        .empty-text{
            width: 100%;
            text-align: center;
            font-size: 16px;
            color: #aaa;
            padding-top: 100px;
            position: absolute;
            top: 30%;
        }  
        .aui-media-box__info {
            width: 80px;
            position: absolute;
            right: 0;
            top: 7px;
            height: 12px;
            font-size: 12px;
            text-align: right;
        }
        .aui-media-box__desc{
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: 10px;
        }
        .aui-panel{
            margin-top: 0;
            transition: .3s;
        }
        .select-ctrl{
            float: left;
            width: 50px;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            .aui-icon-success-circle{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
                display: none;
            }
            .aui-icon-circle{
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
            .activeIcon{
                display: block;
            }
        }
        .aui-panel-move{
            transform: translateX(50px);
        }
    }
    .list-grid-batch{
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        background: #fff;
        box-shadow: 0 -1px 1px #eee;
        .list-grid-batch-all{
            display: flex;
            width: 20%;
            height: 100%;
            font-size: 16px;
            justify-content: center;
            align-items: center;
        }
        .list-grid-batch-content{
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            box-sizing: border-box;
            .list-grid-batch-ctrl{
                font-size: 16px;
                display: flex;
                align-items: center;
            }
        }
        .more-content{
            overflow-x: scroll;
            display: flex;
            justify-content: space-between;
            border-left:1px solid #eee;
            border-right:1px solid #eee;
            .list-grid-batch-ctrl{
                float: left;
                font-size: 16px;
                height: 100%;
                padding: 0 20px;
            }
        }
        .list-grid-batch-cancel{
            display: flex;
            width: 20%;
            height: 100%;
            font-size: 16px;
            justify-content: center;
            align-items: center;
        }
    }
    
}
.popup-index{
    .top-ctrl{
        .aui-cells{
            margin-top: 0;
            .top-btn{
                background-color: rgb(51, 195, 207);
                display: flex;
                justify-content: space-between;
                .aui-btn_default{
                    background-color: rgb(51, 195, 207);
                    color: #fff;
                    width: 20%;
                    margin: 0;
                    &::after{
                        border:none;
                    }
                }
            }
        }
        .add-item{
            .aui-cells{
                .aui-btn_default{
                    width: 100%;
                    margin: 0;
                    &::after{
                        border:none;
                    }
                }
            }
        }
    }
    .tit-info{
        .aui-cells{
            margin-top: 0;
            .aui-cell__primary{
                .aui-input{
                    text-align: right
                }
            }
        }
    }
    .delete-tag{
        padding: 3px 15px;
        font-size: 14px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .delete-tag-icon{
            width: 20px;
            height: 100%;
        }
    }
    .add-item{

    }
    .tag-add-hide{
        width: 100%;
        height: 0;
        position: absolute;
        bottom: 0;
        transition: .5s;
        z-index: 600;
        background:#eee;
        overflow: hidden;
    }
    .tag-add-show{
        height: 100%;
    }  
    .tag-info{
        .tag-input-adaptive{
            position: relative;
            &::before{
                content: " ";
                position: absolute;
                top: 0;
                width: 100%;
                height: 1px;
                border-top: 1px solid #d9d9d9;
                color: #d9d9d9;
                transform-origin: 0 0;
                transform: scaleY(.5);
                left: 15px;
            }
        }
        .aui-textarea{
            text-align: right;
        }
        .aui-cell__primary{
            .aui-input{
                text-align: right;
            }
        }
    }
}
.popup-conditions{
    .aui-popup-picker-container{
        .aui-popup-con-heder{
            display: flex;
            justify-content: space-between;
            height: 44px;
            line-height: 44px;
            font-size: 16px;
            background-color: #fbf9fe;
            .aui-popup-con-heder-left{
                padding-left: 15px;
                color: #828282;
            }
            .aui-popup-con-heder-right{
                padding-right: 15px;
                color: #33c3cf;
            }
        }
    }
}

.right-menu { 
    .aui-swipeout-button {
        border: 0.5px solid white;
    }
}
</style>


