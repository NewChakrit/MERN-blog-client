import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Form} />
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
