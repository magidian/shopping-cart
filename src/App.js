import { BrowserRouter, Route, Switch, HashRouter } from "react-router-dom";
import DataProvider from "./components/Context";
import "./App.css";
import About from "./components/section/About";
import Home from "./components/section/Home";
import Products from "./components/section/Products";
import Details from "./components/section/Details";
import Header from "./components/Header";
import Cart from "./components/section/Cart";
import Payment from "./components/section/Payment";
import Identify from "./components/section/Identify";
import LoginForm from "./components/section/LoginForm";
import SignupForm from "./components/section/SignupForm";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <HashRouter basename="/">
          <div className="App">
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/products" exact component={Products} />
              <Route path="/about" component={About} />
              <Route path="/products/:id" component={Details} />
              <Route path="/cart" component={Cart} />
              <Route path="/payment" component={Payment} />
              <Route path="/login" component={LoginForm} />
              <Route path="/signup" component={SignupForm} />
              <Route path="/identify" component={Identify} />
            </Switch>
          </div>
        </HashRouter>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
