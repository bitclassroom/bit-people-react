import React from 'react'
import PropTypes from 'prop-types'

import User from 'models/User'

const UserCardItem = ({ user }) => {
    const { firstName, email, dob, picture } = user
    const redColor = user.isFemale() ? 'red lighten-5' : ''

    return (
        <div className="col s12 m4">
            <div className={`card hoverable ${redColor}`}>
                <div className="card-image">
                    <img src={picture.large} alt="" />
                    <span className="card-title">{firstName}</span>
                </div>
                <div className="card-content">
                    <p>{email}</p>
                    <p>Birth date: {dob}</p>
                </div>
            </div>
        </div>
    )
}

UserCardItem.propTypes = {
    user: PropTypes.instanceOf(User)
}

export default UserCardItem
