import Index from '@/components/Index'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import FourOhFour from '@/components/FourOhFour'

export default [
  {
    path: '/',
    component: Index,
    name: 'home'
  },
  {
    path: '/resume',
    component: Resume,
    name: 'resume'
  },
  {
    path: '/contact',
    component: Contact,
    name: 'contact'
  },
  {
    path: '/*',
    component: FourOhFour
  }
]
