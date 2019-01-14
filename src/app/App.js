import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Home from 'Home'
import AboutPage from 'about/AboutPage'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </HashRouter>
)

export default App
