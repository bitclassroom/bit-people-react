import React from 'react'
import _ from 'lodash'

const Footer = ({ lastUpdate }) => {
    const updateText = _.isEmpty(lastUpdate) ? (
        ''
    ) : (
        <span className="grey-text text-lighten-4 right">Last update: {lastUpdate}</span>
    )

    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright BIT
                    {updateText}
                </div>
            </div>
        </footer>
    )
}

export default Footer
