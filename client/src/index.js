import "materialize-css/dist/css/materialize.min.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { thunk as reduxThunk } from "redux-thunk";
import App from "./components/App";
import "./index.css";
import reducers from "./reducers";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
