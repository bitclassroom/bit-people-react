import Axios from 'axios'

import { BASE_API_ENDPOINT } from './constants'

export const API = Axios.create({
    baseURL: BASE_API_ENDPOINT,
    timeout: 5000,
    params: {
        results: 15
    }
})
