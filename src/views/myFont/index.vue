<template>
  <div>
      123
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data(){
    return {
      
    }
  },
  mounted(){
    // debugger
    // console.log(_)
    // console.log(_.uniqWith)
    let arr=[
      {a:1,b:2},
      {a:1},
      {a:1},
      {a:2}
      ]
    let brr = _.uniqWith(arr,(a,b)=>{
      if(a.a===b.a){
        return true
      }else{
        return false
      }
    })
    console.log(brr) // output [{a:1,b:2},{a:2}]
  }
}
</script>