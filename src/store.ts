import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searchResults: [] as Array<any>,
  },
  mutations: { // cannot be async (sync only!)
    addSearchResults(state, data) {
      state.searchResults = [ ...data ];
    },
    toggleLoading(state:any, data) {
      state.loading = data;
    }
    //TODO: Use IndexDB for writing data
  },
  actions: { //can be async -- commit() here.
    addSearchResults({ commit }, hits) {
      const data = hits.map(({ fields }:any ) => fields )
      commit('addSearchResults', data)
    },
    toggleLoading({ commit }, data) {
      commit('toggleLoading', data)
    },
  }
})
