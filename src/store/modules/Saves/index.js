import saveActions from './actions.js'
import saveGetters from './getters.js'
import saveMutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      saveList: []
    }
  },
  mutations: saveMutations,
  actions: saveActions,
  getters: saveGetters
}
