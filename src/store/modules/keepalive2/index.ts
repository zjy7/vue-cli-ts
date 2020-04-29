// keepalive2/index.ts
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { Kp2State } from './types';
import { RootState } from '../../types';

export const state: Kp2State = {
    user: undefined,
    error: false,
    menus:[
        {label:'首页',value:'shouye',dynid:''}
    ],
    currentDynId:10000,
    nextDynId:10001,
    dynStore:[]
};
const namespaced: boolean = true;

export const keepalive2: Module<Kp2State, RootState> = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};
