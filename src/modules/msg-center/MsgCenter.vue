<template>
  <div class="msg-center">
    <aui-search :autoFixed="false"
                v-model="queryMsgName"
                placeholder="搜索"
                cancel-text="取消"
                @on-submit="changeMsgData">
    </aui-search>
    <aui-panel :list="msgList"
               type="5"></aui-panel>
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
        src: 'static/images/msg-center/notice.png',
        title: '通知公告',
        desc: '[人力],关于五一放假通知',
        url: '/home/msgInfo/1',
        meta: {
          date: '20分钟前',
        }
      }, {
        src: 'static/images/msg-center/backlog.png',
        title: '待办',
        desc: '[人力],关于五一放假通知',
        url: {
          path: '/home/msgInfo/2',
          replace: false
        },
        meta: {
          date: '20分钟前',
        }
      }, {
        src: 'static/images/msg-center/email.png',
        title: '张丹峰-A2048',
        desc: '[人力]关于五一放假通知',
        url: {
          path: '/home/msgInfo/3',
          replace: false
        },
        meta: {
          date: '20分钟前',
        }
      }, {
        src: 'static/images/msg-center/approval.png',
        title: '审批',
        desc: '[人力],关于五一放假通知',
        url: {
          path: '/home/msgInfo/4',
          replace: false
        },
        meta: {
          date: '20分钟前',
        }
      }, {
        src: 'static/images/msg-center/attence.png',
        title: '考勤',
        desc: '[人力],关于五一放假通知',
        url: {
          path: '/home/msgInfo/5',
          replace: false
        },
        meta: {
          date: '20分钟前',
        }
      }],                  
            }
        },

        methods: {
            changeMsgData(){
            },
        },
        mounted(){
            this.$store.state.headTitle='消息'
            this.$store.state.headBack=false
            this.$store.state.headAdd=false
            this.$store.state.showDownMenu=true
        },

    }
</script>
<style>
.msg-center .aui-search-bar {
  background: #f5f5f5;
}
.msg-center .aui-search-bar__form {
  height: 30px;
}
.msg-center .aui-search-bar__label {
  top: 2px;
  bottom: 2px;
}
.msg-center .aui-panel {
  margin-top: 0;
}
.msg-center .aui-panel:before {
  border-top: 0;
}
.msg-center .aui-panel__hd {
  padding: 0;
}
.msg-center .aui-panel__hd:after {
  border-bottom: none;
}
.msg-center .aui-panel:after {
  left: 75px;
}
.msg-center .aui-media-box__info {
  position: absolute;
  right: 18px;
  top: 20px;
  height: 12px;
  font-size: 12px;
  text-align: right;
}
.msg-center .aui-media-box__info__meta {
  width: 0;
  padding-right: 0;
}
.msg-center .aui-media-box__info__meta:nth-of-type(2) {
  width: 50px;
}

.msg-center .aui-media-box__title {
  font-size: 18px;
}
.msg-center .aui-media-box_appmsg .aui-media-box__hd {
  width: 40px;
  height: 40px;
  margin-right: 20px;
}
.msg-center .aui-media-box:before {
  left: 75px;
  border-top: 1px solid #e6e6e6;
}
</style>
