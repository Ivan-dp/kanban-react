import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PropTypes } from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, NewCardForm } from "../";
import "./Column.scss";

const Column = (props) => {
    Column.propTypes = {
        column: PropTypes.object.isRequired,
    };
    const columns = useSelector((store) => store);

    const dispatch = useDispatch();

    const deleteColumn = (event) => {
        event.preventDefault();
        dispatch({
            type: "DELETE_COLUMN",
            colKey: columns.indexOf(props.column),
            id: props.column.id,
        });
    };

    return (
        <div className="Column">
            <div className="Column__header">
                <h3>{props.column.title}</h3>
                <button
                    className="Column__close"
                    onClick={(e) => {
                        deleteColumn(e);
                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
            <div className="Column__body">
                <NewCardForm column={props.column} />
                {props.column.cards.map((card) => {
                    return <Card key={card.id} card={card} column={props.column} />;
                })}
            </div>
        </div>
    );
};

export { Column };
