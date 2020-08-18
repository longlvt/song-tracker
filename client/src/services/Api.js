import axios from 'axios'
import store from '@/store/store'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081', // Create an axios object that point to the back-end URL
    headers: {
      Authorization: `Bearer ${store.state.token}`
    }
  })
}
