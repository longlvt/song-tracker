import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSong from '@/components/CreateSong'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'song-create',
      component: CreateSong
    },
    {
      path: '/songs/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/songs/:songId/edit',
      name: 'song-edit',
      component: EditSong
    },
    { // This is the default fallback route.
      path: '*',
      redirect: 'songs'
    }
  ]
})
