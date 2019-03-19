<template>
  <div class="contacts">
    <aui-search :autoFixed="false"
                v-model="queryMsgName"
                placeholder="搜索"
                cancel-text="取消"
                @on-submit="changeMsgData">
    </aui-search>
    <aui-panel :list="msgList"
               type="3"></aui-panel>
  </div>
</template>

<script>
    export default {
        name: "msgInfo",
        data() {
            return {
                 pageName: "个人信息",
                queryMsgName: '',
                onFetching: false,
                msgList: [{
        src: 'static/images/contacts/paper-file.png',
        title: '董事会办公室',
        url: '/home/contacts',
        
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '董事会',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '总裁办',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '市场部',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '运营服务中心',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '人力资源',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '销售中心',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }, {
        src: 'static/images/contacts/paper-file.png',
        title: '公共关系部',
        url: {
          path: '/home/contacts',
          replace: false
        }
      }],                  
            }
        },

        methods: {
            changeMsgData(){
            },
        },
        mounted(){
            this.$store.state.headTitle='通讯录'
            this.$store.state.headBack=false
            this.$store.state.headAdd=false
            this.$store.state.showDownMenu=true
        },

    }
</script>
<style>
.contacts .aui-search-bar {
  background: #f5f5f5;
}
.contacts .aui-search-bar__form {
  height: 30px;
}
.contacts .aui-search-bar__label {
  top: 2px;
  bottom: 2px;
}
.contacts .aui-panel {
  margin-top: 0;
}
.contacts .aui-panel__hd {
  padding: 0;
}
.contacts .aui-cells:after {
  left: 75px;
}
.contacts .aui-panel:after {
  border: none;
}
.contacts .aui-media-box_small-appmsg img {
  width: 35px !important;
  height: 35px;
  margin-right: 25px !important;
}
.contacts .aui-cell:before {
  left: 75px;
  border-top: 1px solid #e6e6e6;
}
</style>
