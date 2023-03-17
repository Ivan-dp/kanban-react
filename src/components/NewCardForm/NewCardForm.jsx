import React, { useState } from "react";
import { PropTypes } from "prop-types";
import { useDispatch } from "react-redux";
import "./NewCardForm.scss";

const NewCardForm = (props) => {
    NewCardForm.propTypes = {
        column: PropTypes.object.isRequired,
    };

    const [title, setTitle] = useState("");

    const dispatch = useDispatch();

    const addNewTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };

    const addNewCard = (e) => {
        e.preventDefault();
        if (title) {
            dispatch({
                type: "ADD_CARD",
                title: title,
                id: props.column.id,
            });
        }
        setTitle("");
    };
    return (
        <div className="NewCardForm">
            <form>
                <input
                    value={title}
                    onChange={(event) => {
                        addNewTitle(event);
                    }}
                    placeholder="Enter the card name"
                    maxLength={40}
                />
                <button
                    onClick={(event) => {
                        addNewCard(event);
                    }}
                >
                    Add
                </button>
            </form>
        </div>
    );
};

export { NewCardForm };
