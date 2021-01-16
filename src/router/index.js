import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import indexPc from '@/components/pc/indexPc'
import logicPc from '@/components/pc/logicPc'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index/index_pc',
      name: 'index',
      component: index,
      children:[
        {
          path: 'index/index_pc',
          name: 'index_pc',
          component: indexPc,
      },
      {
        path: 'index/logic_pc',
        name: 'logic_pc',
        component: logicPc,
    }
    ]
    }
  ]
})
