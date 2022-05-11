import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import SingleBlog from "./components/SingleBlog";
import EditForm from "./components/EditForm";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Form} />
        <Route path="/blog/:slug" exact component={SingleBlog}></Route>
        <Route path="/blog/edit/:slug" exact component={EditForm}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MyRoute;
