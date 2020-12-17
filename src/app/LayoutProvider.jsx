import React, { useState } from 'react'
import LayoutContext from './LayoutContext'

const LayoutProvider = props => {
    const [isGridMode, setGridMode] = useState(false)

    const onViewModeChange = event => {
        event.preventDefault()

        setGridMode(prevGridMode => !prevGridMode)
    }

    const providerValue = {
        isGridMode,
        onViewModeChange
    }

    return <LayoutContext.Provider value={providerValue}>{props.children}</LayoutContext.Provider>
}

export default LayoutProvider
