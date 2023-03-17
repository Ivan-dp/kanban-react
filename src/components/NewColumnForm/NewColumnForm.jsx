import React, { useState } from "react";
import "./NewColumnForm.scss";
import { useSelector, useDispatch } from "react-redux";

const NewColumnForm = () => {
    const [title, setTitle] = useState("");

    let columns = useSelector((store) => store);

    const dispatch = useDispatch();

    console.log(columns);

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
