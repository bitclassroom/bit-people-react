import React from 'react'
import { Switch, Route } from 'react-router-dom'

import AboutPage from 'app/about/AboutPage'
import Home from 'app/Home'

const Main = () => (
    <main className="container">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    </main>
)

export default Main
