import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Clothing from "./views/Clothing";
import Accessories from "./views/Accessories";

const App: React.FC<IAppProps> = () => {
  return (
    <main className="container my-5">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/clothing" component={Clothing} />
          <Route path="/accessories" component={Accessories} />
        </Switch>
      </BrowserRouter>
    </main>
  );
};

export interface IAppProps {}

export default App;
