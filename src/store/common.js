import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    createRoleDialogShow: false,
    dogTypeList: ['牧羊犬', '阿拉斯加'],
    user: null
  },
  mutations: {
    updateUser (state, user) {
      state.user = user
    }
  }
})

export default store
