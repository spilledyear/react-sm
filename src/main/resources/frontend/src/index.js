import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/home';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import AreaStack from './components/charts/areastack'
import HeatmapCartesian from './components/charts/heatmapcartesian'
import User from './components/user/User'



ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Index}>
            <IndexRoute component={User} />
            <Route path="User" component={User} />
            {/*<Route path="AreaStack" component={AreaStack} />
            <Route path="HeatmapCartesian" component={HeatmapCartesian} /> */}
        </Route>
    </Router>
), document.getElementById("main"));
