<template>
  <div>
    {{msg}}
    <br>
    profile is {{profile}}
    <br>
    email is {{email}}
    <br>
    fullName is {{fullName}}
    <br>
    <button @click='clickMuta'>mutation</button>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Prop, Inject} from 'vue-property-decorator';
import { State, Action, Getter, Mutation } from 'vuex-class';

import { ProfileState } from '@/store/modules/profile/types'

const namespace:string = 'profile'

@Component
export default class TestVuex extends Vue {
  msg:string='this is test vuex'

  @State('profile') profile!: ProfileState;
  @Action('fetchData', { namespace }) fetchData333: any;
  @Getter('fullName', { namespace }) fullName!: string;
  @Mutation('profileLoaded',{ namespace }) profileLoaded222:any;

  mounted() {
    this.fetchData333()
  }

  get email() {
      const user = this.profile && this.profile.user;
      return (user && user.email) || '';
  }

  clickMuta():void{
    this.profileLoaded222(
      {
        fullName:'full' + parseInt((Math.random()*100).toString()),
        lastName:'last' + parseInt((Math.random()*100).toString()),
        email:'email address' + parseInt((Math.random()*100).toString()),
      }
    )
  }

}
</script>