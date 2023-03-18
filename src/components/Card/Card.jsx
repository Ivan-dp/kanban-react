import React from "react";
import { PropTypes } from "prop-types";
import "./Card.scss";
import { NewTaskForm, Task } from "../";

const Card = (props) => {
    Card.propTypes = {
        card: PropTypes.object.isRequired,
        column: PropTypes.object.isRequired,
    };
    console.log(props.card);
    console.log(props.column);
    return (
        <div className="Card">
            <div className="Card__header">
                <h3>{props.card.title}</h3>
            </div>
            <div className="Card__body">
                <NewTaskForm column={props.column} card={props.card} />
                {props.card.tasks.map((task) => {
                    return <Task key={task.id} task={task} />;
                })}
            </div>
        </div>
    );
};

export { Card };
