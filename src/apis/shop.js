import axios from 'axios'
import {JUAN_URL} from '../actions/types'

export default axios.create({

    baseURL: JUAN_URL
})