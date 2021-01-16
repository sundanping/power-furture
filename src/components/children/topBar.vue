<template>
    <header class="d-fixed color-071229">
      <nav class="d-flex">
      <div class="HomeHead ">
        <img src="./../../assets/link-human.png" alt="">
      </div>
      <div class='top-bar__list flex-center'>
          <span :class="k === activedIndex ? 'actived': ''" @click='viewPage(k)' class='font-top__link' :key='k' v-for='(v,k) in topList'>{{v}}</span>
      </div>
      </nav>
       </header>
</template>
<script>
import { topList} from './../../status/info'
export default {
  name:'topBar',
  data() {
   return {
     activedIndex:0,
     topList
  }
  },
  methods:{
    viewPage(k) {
      this.activedIndex = k
      const route= {0:'index_pc',1:'logic_pc'}
      this.$router.push({name:route[k]})
    }
  }
}
</script>
<style scoped>
.color-071229{
  top:0;
  background-color: #071229;
  width:100%;
  height:100px;
}
.HomeHead {
  width: 280px;
  height: 100px;
  display: flex;
    -ms-flex-align: center;
    align-items: center;
    justify-content:flex-end;
  text-align:right;
}
.top-bar__list{
  width:calc(100% - 130px)
}
.font-top__link{
  flex:1;
  display:flex;
  padding: 0 20px;
    justify-content:flex-end;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}
.actived{
 color: #ff730d;
}
</style>
