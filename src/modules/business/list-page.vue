<template>
    <div class="list-page">
        <!-- <aui-header :showMore='view.operations.buttons&&view.operations.buttons.length?true:false' @click-more='showAllButtons=true' :showBack="false" style="z-index:99;height: 45px;width: 100%;"> -->
        <aui-header  :showBack="false" style="z-index:99;height: 45px;width: 100%;background-color: #33c3cf">
            <div style="height: 30px;width: 30px;" slot="overwrite-left" @click="back">
                <img src="@/assets/back.png" style="height: 100%;width: 100%;margin-top: -8px">
            </div>
            <div slot='right' style='height: 30px;width: 30px' v-if='view.operations.buttons&&view.operations.buttons.length>0' @click='showAllButtons=true'>
              <img src="@/assets/more.png" style="height: 100%;width: 100%;margin-top: -8px">
            </div>
            <span>{{view.title}}</span>
        </aui-header>
        <list-grid ref="listGrid"
                   :viewId="view.$id"
                   :moduleId="view.moduleId"
                   :datasource="view.datasource" 
                   :columns="view.columns" 
                   :mobileListCaption="view.mobileListCaption"
                   :mobileListTitle="view.mobileListTitle"
                   :componentBtns="view.operations.component"
                   :openChoose="openChoose"
                   :buttons="batchOperation"
                   :isShowAdvanced="isShowAdvanced"
                   :select-tag-id="proxy.datasource.tagId"
                   @row-click="handleRowClick"
                   @button-click="handleButtonClick"
                   @component-click="handleComponentClick"
                   @close-choose="closeChoose"
                   @select-tag="selectTag"></list-grid>
        <aui-actionsheet v-model="showAllButtons" :menus="operations" @click-menu="handleButtonClick"></aui-actionsheet>
    </div>
</template>
<script>
import ListGrid from '@/components/list-grid/list-grid'
import {ListViewMobile} from 'paas-web-utils/rules'
const STORAGE_PREFIX = 'paas:cache:list:viewId:'
export default {
    name:'ListPage',
    components:{ListGrid},
    props:{
        view:{
            type: Object,
            default: function() {
                return {
                    $id: 53,
                    datasource: {}
                };
            }
        }
    },
    data(){
        return{
            isShowAdvanced:true,//是否展示筛选组件
            openChoose:false,//多选框
            showAllButtons: false,//展示功能按钮
            proxy: {
                datasource: {},
                batchDialogView: {}
            },
            batchOperation:[],//批量操作功能按钮
        }
    },
    mounted(){
        
    },
    created(){
        // this.$store.state.showHead = false;//禁用公共头部
        // this.$store.state.headLeftImg = "static/images/back.png"
        this.initStorageData()
    },
    computed:{
        operations() {
            let batchDemo = {
                id:9988,
                lable:'demo'
            }
            this.batchOperation.push(batchDemo)
            this.batchOperation.push(batchDemo)
            this.batchOperation.push(batchDemo)
            this.batchOperation.push(batchDemo)
            if (this.view.operations) {
                let operations = this.view.operations.buttons.filter(operation => {
                    return !operation.hidden;
                });
                let button = {};
                for (const b of operations) {
                    if(b.type == 'SUBMIT' || b.type == 'BATCH'){
                        this.batchOperation.push(b)
                    }else{
                        button[b.$id] = b.lable;
                    }
                }
                if(this.batchOperation.length>0){
                    button['batchCtrl'] = '批量操作';
                }
                return button;
            }
        }
    },
    watch: {
        'view.datasource': {
            deep: true,
            handler() {
                this.setStorageData()
            }
        }
    },
    methods:{
        closeChoose(value){
            this.openChoose = false;
        },
        //改变顶部选项
        activeMenu(index){
            this.menuIndex = index;
        },
        //下拉框选项选择
        activeButtom(index){
            this.buttonIndex = index;
        },
        //返回
        back() {
            this.$router.push("/home/workbench");
        },
        // 行点击
        handleRowClick(row) {
            this.view.rowClick(this, row);
        },
        //页面按钮点击事件
        handleButtonClick(menuKey, menuItem) {
            if(menuKey === 'batchCtrl'){
                this.openChoose = true;
            }
            for (const button of this.view.operations.buttons) {
                if (button.$id == menuKey) {
                    button.triggerClick(this);
                    break;
                }
            }
        },
        // 功能按钮点击事件
        handleComponentClick(button, row) {
            if (row === "SELECT_DATA_LIST") {
                row = this.selectionrecordData;
            }
            button.triggerClick(this, row, this.$refs.listGrid.recordData);
        },
        //筛选标签点击事件
        selectTag(tagId){
            // if (this.proxy.datasource.tagId === tagId) {
            //     this.proxy.datasource.tagId = undefined;
            // } else {
                this.proxy.datasource.tagId = tagId;
            // }
            //选择tag时当前页应设置为1
            this.$set(this.proxy.datasource, "currentPage", 1);
            this.$set(this.proxy.datasource, "reload", true);
        },
        //存储
        setStorage(key, item) {
            let s = JSON.stringify(item)
            window.sessionStorage.setItem(key, s)
        },
        //读取
        getStorage(key) {
            let s = window.sessionStorage.getItem(key)
            return JSON.parse(s)
        },
        //读取缓存初始化列表
        initStorageData() {
            let viewId = String(this.view.$id)
            let key = STORAGE_PREFIX + viewId
            let data = this.getStorage(key)
            if(data) {
                this.view.datasource = data.datasource
                this.view.columns.forEach(col => {
                    data.columnStatus.forEach(e => {
                        if(e.id === col.$id) {
                            col.hidden = e.hidden
                        }
                    })
                })
            }
            this.$set(this.proxy, "datasource", this.view.datasource);
            console.log('this.proxy.datasource',this.proxy.datasource)
        },
        //最新改变数据存入缓存
        setStorageData() {
            let viewId = String(this.view.$id)
            let datasource = this.view.datasource
            let columnStatus = this.view.columns.map(col => {
                return {
                    id: col.$id,
                    hidden: col.hidden,
                }
            })
            let data = {
                viewId,
                datasource,
                columnStatus,
            }
            let key = STORAGE_PREFIX + viewId
            this.setStorage(key, data)
        },
    }
}
</script>
<style lang="less">
.list-page{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    .list-page-select{
        width: 100%;
        display: flex;
        justify-content: space-around;
        .list-page-select-menu{
            font-size: 16px;
        }
        .menuActive{
            color: #33C2CF;
        }
    }
    .list-page-button{
        overflow: hidden;
        padding: 10px 0;
        .list-page-button-item{
            width: 30%;
            float: left;
            margin: 10px 1.5%;
            background: #eee;
            color: #999;
            &::after{
                border: none;
            }
        }
        .buttonActive{
            background: #33C2CF;
            color: #fff;
        }
    }
}
</style>

