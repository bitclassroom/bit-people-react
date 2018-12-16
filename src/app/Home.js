import React, { Component } from 'react'
import _ from 'lodash'

import './App.css'

import Header from 'partials/Header'
import Footer from 'partials/Footer'
import ErrorBoundary from 'partials/ErrorBoundary'
import UsersPage from 'users/UsersPage'

import { userService } from 'UserService'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = this.initState()
    }

    initState() {
        return {
            gridMode: false,
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

    onViewModeChange = event => {
        event.preventDefault()

        const gridMode = !this.state.gridMode
        this.setState({ gridMode })
    }

    onRefreshHandler = event => {
        event.preventDefault()
        // Reset current users
        this.setState({ users: [] })
        this.loadUsers(true)
    }

    render() {
        const { onViewModeChange, onRefreshHandler } = this
        const { gridMode, users, lastUpdate = '' } = this.state

        return (
            <>
                <Header
                    key="Header"
                    title="BIT People"
                    changeViewMode={onViewModeChange}
                    onRefresh={onRefreshHandler}
                    gridMode={gridMode}
                />
                <main>
                    <ErrorBoundary>
                        <UsersPage
                            key="UserPage"
                            users={users}
                            isGridMode={gridMode} />
                    </ErrorBoundary>
                </main>
                <Footer
                    key="Footer"
                    lastUpdate={lastUpdate} />
            </>
        )
    }
}

export default Home
