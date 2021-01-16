
<template>
<div class='index_pc'>
  <h1 class='text-center'>{{indexInfo.head}}</h1>
  <p  class='text-center index-subHead'>{{indexInfo.subHead}}</p>
  <section  class='flex-center'>
   <div style='width:1200px' class='d-flex-wrap'>
     <div  :style="'backgroundImage:url('+ '/static/index_img_0' + (k+1)+'.png' + ')'" :key='k' v-for='(v,k) in indexInfo.content' class='flex-center index-content'>
     <img class='index_small_pic' :src="'/static/' + k+'.png'" alt="">
     <p style='margin-top:20px;'>{{v}}</p>
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
.index-content{width:25%;height:346px;flex-direction: column;}
.index-content:hover{color:#fc7001;}
img:hover {filter:alpha(Opacity=80);-moz-opacity:0.8;opacity: 0.8} 
.index-subHead{font-size:18px;line-height:40px;}
p{color:#30aafd;}
.index_small_pic{
  transform: skewY(-9deg);
    animation: upDown 6s linear infinite;
}
@keyframes upDown {

0% {
    transform: skewY(-9deg) translateY(4px);
}
50%, 100% {
    transform: skewY(-9deg) translateY(0);
}
75% {
    transform: skewY(-9deg) translateY(-4px);
}
}
</style>
