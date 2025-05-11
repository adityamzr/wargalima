import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Services from './pages/Services.vue'
import Agenda from './pages/Agenda.vue'
import News from './pages/News.vue'
import OrganizationalStructure from './pages/OrganizationalStructure.vue'
import CitizenMap from './pages/CitizenMap.vue'

const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/about', component: About, name: 'about' },
  { path: '/about/organizational-structure', component: OrganizationalStructure, name: 'organizational-structure' },
  { path: '/about/citizen-map', component: CitizenMap, name: 'citizen-map' },
  { path: '/services', component: Services, name: 'services' },
  { path: '/agenda', component: Agenda, name: 'agenda' },
  { path: '/news', component: News, name: 'news' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

createApp(App)
  .use(router)
  .mount('#app')