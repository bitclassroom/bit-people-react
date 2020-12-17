import { createContext, useContext } from 'react'

const LayoutContext = createContext(undefined)

export const useLayout = () => {
    return useContext(LayoutContext)
}

export default LayoutContext
