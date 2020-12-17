import React from 'react'
import { HashRouter } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

import Main from './main/Main'
import LayoutProvider from './LayoutProvider'

const App = () => (
    <HashRouter>
        <LayoutProvider>
            <Header />
            <Main />
            <Footer />
        </LayoutProvider>
    </HashRouter>
)

export default App
