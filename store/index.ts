import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import { IResponseUser } from '~/Interface/login/IResponseUser'

Vue.use(Vuex)

export interface RootState {
  user: IResponseUser
}

export const store = new Vuex.Store<RootState>({
  actions: {
    async getInitialState (contex) {
    }
  }
})

const createStore = (): Store<RootState> => {
  return store
}
export default createStore
