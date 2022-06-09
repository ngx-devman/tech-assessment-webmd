import { createStore } from 'vuex'
import axios from 'axios'

const apiUrl = 'https://catfact.ninja/facts?'

export default createStore({
  state: {
      catFacts: {},
      perPageOptions: [9, 18, 27, 36, 45]
  },
  getters: {
      catData: state => state.catFacts,
      pageOptions: state => state.perPageOptions
  },
  mutations: {
      setCatFacts: (state, facts) => (
        state.catFacts = facts
      )
  },
  actions: {
      async getCatFacts({ commit }, {page, limit}) {
          const res = await axios.get(`${apiUrl}limit=${limit}&page=${page}`)
          commit("setCatFacts", res.data)
      }
  },
  modules: {
  }
})
