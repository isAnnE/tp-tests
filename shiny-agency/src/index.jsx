import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Route path="/">
                <Home />
            </Route>
            <Route exact path="/survey">
                <Survey />
            </Route>
        </Router>
    </React.StrictMode>
)