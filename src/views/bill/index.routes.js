const Bill = () => import(/* webpackChunkName: "bill" */ './Bill.vue')

const routes = [
  {
    name: 'Bill',
    path: '/',
    component: Bill
  }
]

export default routes
