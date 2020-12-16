import React from 'react'
import { HashRouter } from 'react-router-dom'

import Footer from 'components/Footer'
import Header from 'components/Header'

import Main from './main/Main'

// import Home from 'Home'
// import AboutPage from 'about/AboutPage'

const App = () => (
    <HashRouter>
        <Header />
        <Main />
        <Footer />
    </HashRouter>
)

export default App
