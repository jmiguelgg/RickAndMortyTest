import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from './components/layout'
import Home from './pages/home'
import AboutMe from './pages/about'
import Character from './pages/character'
import NotFound from './pages/NotFound'

const App = () => {
  return(
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/character" component={Character}/>
          <Route exact path="/aboutme" component={AboutMe}/>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App