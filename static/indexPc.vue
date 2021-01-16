
<template>
<div class='index_pc'>
  <h1 class='text-center'>{{indexInfo.head}}</h1>
  <p  class='text-center index-subHead'>{{indexInfo.subHead}}</p>
  <section  class='flex-center'>
   <div style='width:1200px' class='d-flex-wrap'>
     <div :style="'backgroundImage:url('+ '/static/index_img_0' + (k+1)+'.png' + ')'" :key='k' v-for='(v,k) in indexInfo.content' class='index-content'>
     <img src="" alt="">
     </div>
  </div>
  </section>

</div>

</template>
<script>
import {indexInfo} from '@/status/info'
export default {
   name:'IndexPc',
  data() {
    return {
      indexInfo
    }
  }
}
</script>
<style scoped>
.d-flex-wrap{
  display: flex;
    flex-wrap: wrap;
}
.index_pc{padding:20px;}
h1{font-size: 28px;}
.index-content{width:25%;height:346px;}
.index-subHead{font-size:18px;line-height:40px;}
</style>
