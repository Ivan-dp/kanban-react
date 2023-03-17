import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./NewColumnForm.scss";

const NewColumnForm = () => {
    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const addNewTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const addNewColumn = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({
                type: "ADD_COLUMN",
                payload: title,
            });
        }
        setTitle("");
    };

    return (
        <div className="NewColumnForm">
            <form>
                <input
                    value={title}
                    onChange={(event) => {
                        addNewTitle(event);
                    }}
                    placeholder="Enter the column name"
                />
                <button
                    onClick={(event) => {
                        addNewColumn(event);
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export { NewColumnForm };
