import dayjs from 'dayjs'

import { storage } from '../shared/storage'
import { API } from '../shared/api'

import User from 'models/User'

const USER_KEYS = {
    lastUpdate: 'last_update',
    latestUsers: 'latest_users'
}

class UserService {
    async fetchUsers() {
        const { data } = await API.get()
        const usersData = data.results

        this.saveUsers(usersData)

        return usersData.map(user => new User(user))
    }

    saveUsers(usersData) {
        storage.save(USER_KEYS.latestUsers, usersData)
        storage.save(USER_KEYS.lastUpdate, new Date().toISOString())
    }

    loadSavedUsers() {
        const usersData = storage.load(USER_KEYS.latestUsers) || []
        return usersData.map(user => new User(user))
    }

    lastUpdated() {
        const date = storage.load(USER_KEYS.lastUpdate) || new Date().toISOString()
        return dayjs().to(dayjs(date))
    }
}

export const userService = new UserService()
