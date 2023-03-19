import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";
import { NewTaskForm, Task, CardModal } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

const Card = (props) => {
    Card.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };

    const columns = useSelector((store) => store);

    const [active, setActive] = useState(false);

    const dispatch = useDispatch();

    const deleteCard = (event) => {
        event.preventDefault();
        dispatch({
            type: "DELETE_CARD",
            colKey: columns.indexOf(props.column),
            id: props.card.id,
        });
    };

    return (
        <div className="Card">
            <div className="Card__header">
                <h3>{props.card.title}</h3>
                <button
                    className="Card__more"
                    onClick={() => {
                        setActive(!active);
                    }}
                >
                    <FontAwesomeIcon icon={faListUl} />
                </button>
                <button
                    className="Card__close"
                    onClick={(e) => {
                        deleteCard(e);
                    }}
                >
                    <FontAwesomeIcon icon={faTrashCan} />
                </button>
            </div>
            <div className="Card__body">
                <NewTaskForm column={props.column} card={props.card} />
                {props.card.tasks.map((task) => {
                    return <Task key={task.id} task={task} />;
                })}
            </div>
            <CardModal active={active} setActive={setActive} card={props.card} column={props.column} />
        </div>
    );
};

export { Card };
