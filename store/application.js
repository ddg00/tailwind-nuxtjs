export const state = () => ({
  pageTitle: '',
  navName: ''
})
export const mutations = {
  setPageTitle(state, data) {
    state.pageTitle = data
  },
  setNavName(state, data) {
    state.navName = data
    // eslint-disable-next-line no-console
    console.log(state.navName)
  }
}
export const actions = {
  initPage({ commit, state }, { title, nav }) {
    commit('setPageTitle', title)
    commit('setNavName', nav)
  }
}
