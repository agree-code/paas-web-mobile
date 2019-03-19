import { userService } from "paas-web-utils/services/index";
let allUserData = undefined;
const state = {
  allUserList: [], //全部用户的数据
  pageAllUserList:[],//需要显示的全部用户数据
  pageUserList:[],//需要显示的分页的用户数据
  pageNum:0,//分页页数
  status:'default'
};
const mutations = {
  changeAllUserList(state, data) {
    allUserData = data;
    state.allUserList = data;
  },
  changePageAllUserList(state, data) {
    state.pageAllUserList = data;
  },
  changePageUserList(state, page) {
    if(!page){
      page = 0;
    }
    state.pageUserList = [];
    for(let i=0;i<=page*10+9;i++){
      if(state.pageAllUserList[i]){
        state.pageUserList.push(state.pageAllUserList[i])
      }
    }
  },
  changePageNum(state, data){
    let length = data.length;
    state.pageNum = Math.ceil(length/10)
  },
  setPageAllUserList(state){
    state.pageAllUserList = state.allUserList;
  },
  setStatus(state,data){
    state.status = data
  }
};
const actions = {
  setPageAllUserList({ commit }){
    commit("setPageAllUserList");
  },
  changePageUserList({ commit }, page) {
    commit("changePageUserList", page);
  },
  changePageAllUserListByName({ commit }, name) {
    let serachList = [];
    for (const list of state.allUserList) {
      if(list.realName.indexOf(name)!=-1){
        serachList.push(list);
      }
    }
    commit("changePageNum", serachList);
    commit("changePageAllUserList", serachList);
  },
  changePageAllUserListByOrg({ commit }, orgCode) {
    let serachList = [];
    for (const list of state.allUserList) {
      if(list.orgCode == orgCode){
        serachList.push(list);
      }
    }
    commit("changePageNum", serachList);
    commit("changePageAllUserList", serachList);
  },
  getAllUserList({ commit }){
    commit("setStatus", "down");
    if(!allUserData){
      userService
        .findUserList({}).then(data=>{
          commit("changeAllUserList", data);
          commit("setPageAllUserList");
          commit("changePageNum", data);
          commit('changePageUserList',0)
          commit("setStatus", "default");
        })
    }else{
          commit("changeAllUserList", allUserData);
          commit("setPageAllUserList");
          commit("changePageNum", allUserData);
          commit('changePageUserList',0)
          setTimeout(() => {
            commit("setStatus", "default");
          }, 500);
    }
  }
};
const getters = {
  allUserList(state) {
    return state.allUserList;
  },
  pageUserList(state) {
    return state.pageUserList;
  },
  pageNum(state) {
    return state.pageNum;
  },
  status(state) {
    return state.status;
  },
};

export default { namespaced: true, state, mutations, actions, getters };
