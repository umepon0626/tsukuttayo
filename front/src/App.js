import React from "react";
import PortfolioList from './screens/index/portfolios'
import Detail from './screens/detail/detail'
import PortfolioForm from './screens/createPortfolio/portfolioForm'
// import Header from './screens/header/header'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/portfolioList">
            <PortfolioList />
          </Route>
          <Route path="/portfolio_detail/:portfolioId">
            <Detail />
          </Route>
          <Route path="/create">
            <PortfolioForm/>
          </Route>
          <Route path="/">
            <Hello />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Hello = () =>{
  return(
    <h1>Hello</h1>
  )
}