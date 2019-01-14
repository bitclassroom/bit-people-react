import { BASE_API_ENDPOINT } from './constants'
import Axios from 'axios'

export const API = Axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 5000,
    params: {
        results: 15
    }
})
