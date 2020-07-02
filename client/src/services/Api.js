import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://localhost:8081' // Create an axios object that point to the back-end URL
  })
}
