import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import './index.css'
import 'materialize-css/dist/css/materialize.css'

import App from './app/App'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
