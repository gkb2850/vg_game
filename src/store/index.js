import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        navTLabelIndex: 0
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
            } else if (path === '/answerPage' || path === '/answerPageInfo') {
                state.navTLabelIndex = 5
            }
        }
    },
    getters: {

    }
})