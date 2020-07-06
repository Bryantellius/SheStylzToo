import * as React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Clothing from "./views/Clothing";
import Cart from "./views/Cart";

const App: React.FC<IAppProps> = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop" component={Clothing} />
        <Route path="/cart" component={Cart} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export interface IAppProps {}

export default App;
