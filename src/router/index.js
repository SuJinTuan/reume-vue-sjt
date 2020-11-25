import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const BaseMessage = () => import(/* webpackChunkName: "baseMsg" */ "../components/BaseMessage")
const PersonalSkill = () => import( /* webpackChunkName: "skillMsg" */ "../components/PersonalSkill")
const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/0',
    component: Home,
    children: [
      { path: "/0", name: '0', component: BaseMessage },
      { path: "/skill", name: 'skill', component: PersonalSkill },
      // { path: "/intern", name: 'intern', component: InternExperience },
      // { path: "/education", name: "education", component: EducationExperience },
      // { path: "/project", name: "project", component: ProjectExperience }

    ]
  },
  {
    path: "/preview",
    name: "preview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "showEdit" */ "../views/ShowEdit")
  },

]

const router = new VueRouter({
  routes,
  mode: "history",
  base: '/',
})

export default router
