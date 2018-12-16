import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import AboutPage from 'about/AboutPage'
import Home from 'Home'

const App = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={AboutPage} />
        </Switch>
    </HashRouter>
)

export default App
