import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null,
  },
  mutations: {
     togleInvoice( state ){
          state.invoiceModal = !state.invoiceModal;
     }
  },
  actions: {
  },
  modules: {
  }
})
