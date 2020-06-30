// profile/mutations.ts
import { MutationTree } from 'vuex';
import { Kp2State, User } from './types';

export const mutations: MutationTree<Kp2State> = {
    profileLoaded(state, payload: User) {
        state.error = false;
        state.user = payload;
    },
    profileError(state) {
        state.error = true;
        state.user = undefined;
    },
    addMenu(state,payload){
        state.menus.push(
            {
                label:payload.label+(payload.dynid?payload.dynid:''),
                value:payload.value,
                dynid:payload.dynid
            }
        )
    },

    setCurrentDynId(state, payload){
        state.currentDynId = payload
    },
    setNextDynId(state, payload){
        state.nextDynId = payload
    },

    setDynStore(state,payload){
        if(state.dynStore.filter(i=>i.id ===payload.id).length>0){
            for(let i=0,l=state.dynStore.length;i<length;i++){
                if(state.dynStore[i].id === payload.id){
                    state.dynStore[i].value = payload.value
                    break
                }
            }
        }else{
            state.dynStore.push(
                {
                    id:payload.id,
                    value:payload.value
                }
            )
        }
    }
};
