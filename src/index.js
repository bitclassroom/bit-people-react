import React from 'react'
import ReactDOM from 'react-dom'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import './index.css'
import 'materialize-css/dist/css/materialize.css'

import App from './app/App'

dayjs.extend(relativeTime)

ReactDOM.render(<App />, document.getElementById('root'))
