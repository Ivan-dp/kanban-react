import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import { randomId } from "./functions";

function Index() {
    const reducer = (state = [], action) => {
        // console.log(state);
        switch (action.type) {
            case "ADD_COLUMN":
                return [
                    ...state,
                    {
                        id: randomId("column"),
                        title: action.payload,
                    },
                ];
            default:
                return state;
        }
    };

    const store = createStore(reducer, composeWithDevTools());

    return (
        <BrowserRouter>
            <Provider store={store}>
                <React.StrictMode>
                    <App />
                </React.StrictMode>
            </Provider>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
