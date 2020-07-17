import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navTLabelIndex: 0,
        searchData: {},
        searchPageNum: [],
        searchTxt: '',
        userInfo: '',
        isLogin: false,
        replyNum: 0
    },
    mutations: {
        checkRoutePath (state, path) {
            if (path === '/' || path === '/index') {
                state.navTLabelIndex = 0
            } else if (path === '/deviceOrSet') {
                state.navTLabelIndex = 1
            } else if (path === '/gamePlayer' || path === '/grameUserInfo') {
                state.navTLabelIndex = 2
            } else if (path === '/productPageInfo') {
                state.navTLabelIndex = 3
            } else if (path === '/assessPage' || path === '/assessPageInfo') {
                state.navTLabelIndex = 4
            } else if (path === '/answerPage' || path === '/answerInfoPage') {
                state.navTLabelIndex = 5
            }
        },
        changeSearchData (state, data) {
            state.searchData = data
        },
        changeSearchPage (state, data) {
            state.searchPageNum = data
        },
        changeSearchTxt (state, str) {
            state.searchTxt = str
        },
        changeUserInfo (state, str) {
            state.userInfo = str
        },
        changeisLogin (state, str) {
            state.isLogin = str
        },
        changeReplyNum (state, str) {
            state.replyNum = str
        }
    },
    getters: {
        searchData: (state) => {
            return state.searchData
        },
        searchPageNum: (state) => {
            return state.searchPageNum
        }
    }
})