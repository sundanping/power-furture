
<template>
   <section class="d-relative">
     <component :is='topBar'></component>
     <div style='margin-top:100px;color:#fff'>
 <router-view/>
     </div>
   
  </section>
</template>
<script>
import topBar from './children/topBar'
export default {
   name:'Index',
  components:{topBar},
  data() {
   return {topBar} 
  }
}
</script>
<style scoped>
</style>
