import React, { Component } from 'react'
import _ from 'lodash'

import ErrorBoundary from 'components/ErrorBoundary'
import UsersPage from './users/UsersPage'

import { userService } from 'services/userService'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lastUpdate: userService.lastUpdated()
        }
    }

    componentDidMount() {
        this.loadUsers()
    }

    async loadUsers(refresh = false) {
        let users = userService.loadSavedUsers()
        const lastUpdate = userService.lastUpdated()

        if (_.isEmpty(users) || refresh) {
            users = await userService.fetchUsers()
        }

        this.setState({ users, lastUpdate })
    }

    onRefreshHandler = event => {
        event.preventDefault()

        // Reset current users
        this.setState({ users: [] }, () => {
            this.loadUsers(true)
        })
    }

    render() {
        const { users, lastUpdate = '' } = this.state

        return (
            <ErrorBoundary>
                <UsersPage key="UserPage" users={users} />
            </ErrorBoundary>
        )
    }
}

export default Home
