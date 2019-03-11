import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './Home/Home.jsx'
import Main from './Main.jsx'
import ModuleCivel from './Modules/Civel.jsx'

const App = () => (
    <Router>
    	<Switch>
	   		<Route exact path="/" component={Home}/>
	   		<Route path="/modules" component={Main}/>
	   		<Route path="/play/civel/" component={ModuleCivel}/>
    	</Switch>
	</Router>
)

export default App