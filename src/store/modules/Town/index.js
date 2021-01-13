import townActions from './actions.js'
import townGetters from './getters.js'
import townMutations from './mutations.js'

export default {
  namespaced: true,
  state() {
    return {
      townState: 'town-main',
    }
  },
  mutations: townMutations,
  actions: townActions,
  getters: townGetters
}
