<template>
  <div>
    {{msg}}
    <br>
    users is {{JSON.stringify(users)}}
  </div>
</template>

<script lang="ts">
import { Vue, Component, Model, Emit, Prop, Inject} from 'vue-property-decorator';

@Component
export default class TestProvide extends Vue {
  msg:string='this is test provide/inject'

  @Inject('uuu111') readonly users!:object
}
</script>