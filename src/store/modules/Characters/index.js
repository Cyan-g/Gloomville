import characterActions from './actions.js'
import characterGetters from './getters.js'
import characterMutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      characterList: [],
    }
  },
  mutations: characterMutations,
  actions: characterActions,
  getters: characterGetters
}
