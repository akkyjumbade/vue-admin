import Axios from 'axios'

export const baseURL = '/'

export default Axios.create({
  baseURL
})