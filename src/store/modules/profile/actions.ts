// profile/actions.ts
import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, User } from './types';
import { RootState } from '../../types';

export const actions: ActionTree<ProfileState, RootState> = {
    fetchData({ commit }): any {
        axios({
            url: '/apitest'
        }).then((response) => {
            const payload: User = response && response.data;
            commit('profileLoaded', payload);
        }, (error) => {
            console.log('error in action')
            let response = {
              data:{
                firstName:'Bale',
                lastName:'zjy777',
                email:'zjy@hotmail.com'
              }
            }
            const payload: User = response && response.data;
            commit('profileLoaded', payload);
            // console.log(error);
            // commit('profileError');
        });
    }
};
