import axios from 'axios'
import { DEVELOP_URL } from '../actions/types'

export default axios.create({
  baseURL: DEVELOP_URL
})
