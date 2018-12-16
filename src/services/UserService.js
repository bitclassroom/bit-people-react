import axios from 'axios'
import moment from 'moment'

import { BASE_URL } from 'shared/constants'

import User from 'models/User'

const KEYS = {
    lastUpdate: 'last_update',
    latestUsers: 'last_update',
}

class UserService {
    fetchUsers() {
        return axios
            .get(`${BASE_URL}/?results=15`)
            .then(response => response.data)
            .then(data => data.results)
            .then(usersData => {
                this.saveUsers(usersData)
                return usersData.map(user => new User(user))
            })
    }

    saveUsers(usersData) {
        localStorage.setItem(KEYS.latestUsers, JSON.stringify(usersData))
        localStorage.setItem('last_update', new Date())
    }

    loadSavedUsers() {
        const usersJson = localStorage.getItem('latest_users') || '[]'
        const usersData = JSON.parse(usersJson)
        return usersData.map(user => new User(user))
    }

    lastUpdated() {
        const date = localStorage.getItem('last_update') || new Date()
        return moment(date).fromNow()
    }
}

export const userService = new UserService()
