import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WellBreathViewVue from '@/views/WellBreathView.vue'
import AlwayDryViewVue from '@/views/AlwayDryView.vue'
import LightForLifeViewVue from '@/views/LightForLifeView.vue'
import LoggingView from '@/views/LoggingView.vue'
import LoggingDevice1View from '@/views/LoggingDevice1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/logging/device/:id',
      name: "loggingdevice",
      component: LoggingDevice1View
    },
    {
      path: '/logging',
      name: 'logging',
      component:LoggingView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/wellbreath',
      name: 'wellbreath',
      component: WellBreathViewVue
    },
    {
      path: '/alwaydry',
      name: 'alwaydry',
      component: AlwayDryViewVue
    },
    {
      path: '/lightforlife',
      name: 'lightforlife',
      component: LightForLifeViewVue
    }
  ]
})

export default router
