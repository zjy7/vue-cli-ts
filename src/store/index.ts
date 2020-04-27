import Vue from 'vue'
import Vuex, {StoreOptions} from 'vuex'
import {RootState} from './types'
import {profile} from './modules/profile/index'
import {keepalive2} from './modules/keepalive2/index'
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state:{
    version:'1.2.3'
  },
  modules:{
    profile,
    keepalive2
  }
}

export default new Vuex.Store<RootState>(store)
