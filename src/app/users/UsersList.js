import React from 'react'
import PropTypes from 'prop-types'

import UserCardItem from './UserCardItem'
import UserListItem from './UserListItem'

import { useLayout } from 'app/LayoutContext'

const UsersList = props => {
    const { isGridMode } = useLayout()
    const renderListItems = userList => (
        <ul className="collection">
            {userList.map((user, key) => (
                <UserListItem user={user} key={key} />
            ))}
        </ul>
    )

    const renderCardItems = userList => (
        <div className="row">
            {userList.map((user, key) => (
                <UserCardItem user={user} key={key} />
            ))}
        </div>
    )

    const { users } = props
    const userListComponents = isGridMode ? renderCardItems(users) : renderListItems(users)

    return userListComponents
}

UsersList.propTypes = {
    isGridMode: PropTypes.bool,
    users: PropTypes.array.isRequired
}

UsersList.defaultProps = {
    users: [],
    isGridMode: false
}

export default UsersList
