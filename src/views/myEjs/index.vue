<template>
  <div>
    <div  v-html='html'></div>
    <div>{{html}}</div>
    <div>{{JSON.stringify(html)}}</div>
    <div>{{typeof (html)}}</div>
  </div>
</template>

<script>
import ejs from 'ejs'
// console.log(ejs)
export default {
  data(){
    return {
      html:'',
    }
  },
  created(){
    let people = ['geddy', 'neil', 'alex'];
    this.html = ejs.render('<%= people.join("@#$"); %>', {people: people});
  }
}
</script>