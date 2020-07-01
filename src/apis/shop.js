import axios from 'axios'
import { CAMILO_URL } from '../actions/types'

export default axios.create({
    baseURL: CAMILO_URL
})