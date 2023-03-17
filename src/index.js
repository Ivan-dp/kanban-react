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
                        type: "column",
                        title: action.payload,
                        cards: [],
                    },
                ];
            case "ADD_CARD":
                return state.map((column) => {
                    if (column.id === action.id)
                        return {
                            ...column,
                            cards: [
                                ...column.cards,
                                {
                                    id: randomId("card"),
                                    type: "card",
                                    title: action.title,
                                    description: "card description",
                                    tags: [],
                                    color: "",
                                    tasks: [],
                                },
                            ],
                        };
                    console.log(column.cards.Object);
                    return column;
                });
            case "ADD_TASK":
                return state.map((column) => {
                    if (column.id === action.colId)
                        return column.cards.map((card) => {
                            if (card.id === action.cardId)
                                return {
                                    ...card,
                                    tasks: [
                                        ...card.tasks,
                                        {
                                            id: randomId("task"),
                                            type: "task",
                                            title: action.title,
                                            description: "task description",
                                            tags: [],
                                            color: "",
                                        },
                                    ],
                                };
                            return card;
                        });
                    return column;
                });
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
