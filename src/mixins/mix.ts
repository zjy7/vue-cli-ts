import Vue from 'vue';
import  Component  from 'vue-class-component';

@Component
export default class myMixins extends Vue {
  mixValue: string = 'Hello I am mixValue';
}