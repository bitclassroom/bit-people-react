import React from 'react'

const UserStats = ({ stats }) => {
    const { maleCount, femaleCount } = stats

    return (
        <div className="grey-text right-align">
            <span>{`\tMale: ${maleCount}`}</span>
            <span>{`\tFemale: ${femaleCount}`}</span>
        </div>
    )
}

export default UserStats
