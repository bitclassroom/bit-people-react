import React from 'react'
import PropTypes from 'prop-types'

const UserListItem = ({ user }) => {
    const { fullName, email, dob, picture } = user
    const redColor = user.isFemale() ? 'red lighten-5' : ''

    return (
        <li className={`collection-item avatar hoverable ${redColor}`}>
            <img src={picture.medium} alt="" className="circle" />
            <span className="title">{fullName}</span>
            <p className="valign-wrapper">
                <i className="material-icons">email</i> email: {email}
            </p>
            <p className="valign-wrapper">
                <i className="material-icons">cake</i>
                {dob}
            </p>
        </li>
    )
}

UserListItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserListItem
