import React, { useState } from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";
import { NewTaskForm, Task, CardModal } from "../";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
    Card.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };

    const [active, setActive] = useState(false);

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
                <button className="Card__close">
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
